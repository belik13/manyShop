// header background on scroll
  const header = document.getElementById('siteHeader');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 40);
    });
  }

  // reveal on scroll
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting){
        e.target.classList.add('in-view');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));

  // cases carousel: mouse drag-to-scroll + wheel support for desktop
  // (overflow-x:auto already gives touch swipe on phones for free)
  const casesScroll = document.querySelector('.cases-scroll');
  if (casesScroll) {
    let isDown = false;
    let startX = 0;
    let scrollStart = 0;
    let moved = false;

    casesScroll.addEventListener('mousedown', (e) => {
      isDown = true;
      moved = false;
      casesScroll.classList.add('dragging');
      startX = e.pageX;
      scrollStart = casesScroll.scrollLeft;
    });

    window.addEventListener('mouseup', () => {
      if (!isDown) return;
      isDown = false;
      casesScroll.classList.remove('dragging');
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const dx = e.pageX - startX;
      if (Math.abs(dx) > 4) moved = true;
      casesScroll.scrollLeft = scrollStart - dx;
    });

    // prevent link/card click firing right after a real drag
    casesScroll.addEventListener('click', (e) => {
      if (moved) { e.preventDefault(); e.stopPropagation(); }
    }, true);
  }

  // mobile nav
  const burger = document.getElementById('burger');
  const navLinks = document.querySelector('nav.links');
  if (burger && navLinks) {
    burger.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('mobile-open');
      burger.classList.toggle('open', isOpen);
      if (isOpen) {
        navLinks.style.cssText = 'display:flex; flex-direction:column; position:fixed; top:0; right:0; bottom:0; width:78vw; max-width:320px; background:#26251f; padding:100px 30px; gap:26px; z-index:105; box-shadow:-8px 0 30px rgba(0,0,0,0.3);';
      } else {
        navLinks.style.cssText = '';
      }
    });
    // close menu when a link is tapped
    navLinks.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        navLinks.classList.remove('mobile-open');
        burger.classList.remove('open');
        navLinks.style.cssText = '';
      }
    });
  }

  // form submit
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('projectForm');
    if (!form) return;

    form.addEventListener('submit', async function(e){
      e.preventDefault();

      const btn = this.querySelector('.form-submit');
      if (!btn) return;

      const originalText = btn.innerHTML;
      btn.innerHTML = '⏳ Отправка...';
      btn.disabled = true;

      const nameField = document.getElementById('user_name');
      const phoneField = document.getElementById('user_phone');
      const contactField = document.getElementById('user_contact');
      const objtypeField = document.getElementById('object_type');

      if (!nameField || !phoneField || !contactField || !objtypeField) {
        alert('Ошибка: не все поля формы найдены.');
        btn.innerHTML = originalText;
        btn.disabled = false;
        return;
      }

      const data = {
        name: nameField.value.trim(),
        phone: phoneField.value.trim(),
        contact: contactField.value.trim(),
        objtype: objtypeField.value || 'Не указан'
      };

      if (!data.name || !data.phone || !data.contact) {
        alert('Пожалуйста, заполните имя, телефон и контактные данные');
        btn.innerHTML = originalText;
        btn.disabled = false;
        return;
      }

      try {
        const API_URL = 'send-project.php';
        const response = await fetch(API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
        const result = await response.json();

        if (response.ok && result.success) {
          btn.innerHTML = '✅ Заявка отправлена!';
          btn.style.background = '#a9adaa';
          btn.style.borderColor = '#a9adaa';
          btn.disabled = true;
          alert('Спасибо! Ваша заявка успешно отправлена. Мы свяжемся с вами в ближайшее время.');
        } else {
          throw new Error(result.error || 'Ошибка отправки');
        }
      } catch (error) {
        alert('Произошла ошибка при отправке. Пожалуйста, попробуйте позже или напишите нам напрямую в Telegram.');
        btn.innerHTML = originalText;
        btn.disabled = false;
      }
    });
  });
