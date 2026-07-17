<?php
/**
 * ПРИМЕР обработчика формы. Скопируйте в public/send-project.php
 * и подставьте свои токен/chat_id (реальный файл в .gitignore — не коммитим).
 */
/**
 * Relent — обработчик заявок с формы.
 * Принимает JSON (или обычный POST) от формы и отправляет заявку в Telegram.
 */

// ---- Настройки ----
$BOT_TOKEN = getenv('TG_BOT_TOKEN') ?: 'PASTE_YOUR_BOT_TOKEN_HERE';
$CHAT_ID   = getenv('TG_CHAT_ID') ?: 'PASTE_YOUR_CHAT_ID_HERE';
// -------------------

header('Content-Type: application/json; charset=utf-8');

// Разрешаем только POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit;
}

// Читаем тело запроса: сначала JSON, иначе обычный form-post
$raw  = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) {
    $data = $_POST;
}

// Достаём и чистим поля
function clean($v) {
    return trim((string)($v ?? ''));
}
$name    = clean($data['name']    ?? '');
$phone   = clean($data['phone']   ?? '');
$contact = clean($data['contact'] ?? '');
$objtype = clean($data['objtype'] ?? 'Не указан');

// Простейшая антиспам-проверка (honeypot, если добавите скрытое поле)
if (!empty($data['website'] ?? '')) {
    echo json_encode(['success' => true]); // молча игнорируем бота
    exit;
}

// Валидация обязательных полей
if ($name === '' || $phone === '' || $contact === '') {
    http_response_code(422);
    echo json_encode(['success' => false, 'error' => 'Заполните имя, телефон и контакт']);
    exit;
}

// Ограничим длину, чтобы не улетала «простыня»
$name    = mb_substr($name, 0, 200);
$phone   = mb_substr($phone, 0, 60);
$contact = mb_substr($contact, 0, 200);
$objtype = mb_substr($objtype, 0, 120);

// Метаданные
$ip = $_SERVER['HTTP_X_FORWARDED_FOR'] ?? $_SERVER['REMOTE_ADDR'] ?? '—';
$ip = trim(explode(',', $ip)[0]);
$time = date('d.m.Y H:i');

// Формируем сообщение (parse_mode = HTML)
function e($s) { return htmlspecialchars($s, ENT_QUOTES, 'UTF-8'); }

$text  = "🆕 <b>Новая заявка — Relent</b>\n\n";
$text .= "👤 <b>Имя:</b> " . e($name) . "\n";
$text .= "📞 <b>Телефон:</b> " . e($phone) . "\n";
$text .= "✉️ <b>Контакт:</b> " . e($contact) . "\n";
$text .= "🏠 <b>Тип объекта:</b> " . e($objtype) . "\n\n";
$text .= "🕒 " . e($time) . "\n";
$text .= "🌐 IP: " . e($ip);

// Отправка в Telegram
$apiUrl = "https://api.telegram.org/bot{$BOT_TOKEN}/sendMessage";
$payload = [
    'chat_id'                  => $CHAT_ID,
    'text'                     => $text,
    'parse_mode'               => 'HTML',
    'disable_web_page_preview' => true,
];

$responseBody = null;
$httpCode = 0;

if (function_exists('curl_init')) {
    $ch = curl_init($apiUrl);
    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_POST           => true,
        CURLOPT_POSTFIELDS     => http_build_query($payload),
        CURLOPT_TIMEOUT        => 20,
        CURLOPT_SSL_VERIFYPEER => true,
    ]);
    $responseBody = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $curlErr = curl_error($ch);
    curl_close($ch);
} else {
    // Фолбэк, если cURL недоступен на хостинге
    $ctx = stream_context_create([
        'http' => [
            'method'        => 'POST',
            'header'        => "Content-Type: application/x-www-form-urlencoded\r\n",
            'content'       => http_build_query($payload),
            'timeout'       => 20,
            'ignore_errors' => true,
        ],
    ]);
    $responseBody = @file_get_contents($apiUrl, false, $ctx);
    if (isset($http_response_header[0]) &&
        preg_match('#\s(\d{3})\s#', $http_response_header[0], $m)) {
        $httpCode = (int)$m[1];
    }
}

// Разбор ответа Telegram
$tg = json_decode((string)$responseBody, true);
if ($httpCode === 200 && is_array($tg) && !empty($tg['ok'])) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(502);
    error_log('Relent form -> Telegram error: ' . $responseBody);
    echo json_encode([
        'success' => false,
        'error'   => 'Не удалось отправить заявку. Попробуйте позже или напишите в Telegram.',
    ]);
}
