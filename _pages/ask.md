---
layout: page
permalink: /erotapokriseis/ask/
title: Erotapokriseis
description: sizden gelenlere / from you
nav: false
---
<div class="post">
  <div id="ask-form-wrapper" style="max-width: 640px; margin: 0 auto;">
    <p style="font-style: italic; opacity: 0.8; margin-bottom: 1.2rem;">
      **TR** Yazılarımdan biri üzerine sorunuz var ise, herhangi bir noktayı tartışmak istiyorsanız ya da
      bulduğunuz herhangi bir hatayı belirtmek istiyorsanız, veya aklınıza takılan bir şey var ise burası sizin alanınız.
      Bana her zaman <a href="mailto:gulfilizakinalp@gmail.com">gulfilizakinalp@gmail.com</a> üzerinden de yazabilirsiniz,
      ama anonim kalmak isterseniz burası tam size göre. Çok sevgiler!
    </p>
    <p style="font-style: italic; opacity: 0.8; margin-bottom: 2rem;">
      **EN** Have a question about something I've written? Want to push back on a point,
      flag an error, or ask about something else entirely? You can always reach me directly at
      <a href="mailto:gulfilizakinalp@gmail.com">gulfilizakinalp@gmail.com</a>, but if you'd rather stay anonymous,
      this space is for you. I read everything. A name is optional. :)
    </p>
    <form id="ask-filiz-form" action="https://formspree.io/f/xbdnggzd" method="POST">
      <div style="margin-bottom: 1.2rem;">
        <label for="name" style="display:block; margin-bottom:0.4rem; font-size:0.9rem; opacity:0.8;">
          İsim (opsiyonel) &middot; Name (optional)
        </label>
        <input type="text" id="name" name="name"
          style="width:100%; padding:0.6rem; border:1px solid var(--global-divider-color, #ccc);
                 border-radius:4px; background:var(--global-bg-color, #fff);
                 color:var(--global-text-color, #222); font-family:inherit;">
      </div>
      <div style="margin-bottom: 1.2rem;">
        <label for="question" style="display:block; margin-bottom:0.4rem; font-size:0.9rem; opacity:0.8;">
          Sorunuz &middot; Your question
        </label>
        <textarea id="question" name="question" required rows="5"
          style="width:100%; padding:0.6rem; border:1px solid var(--global-divider-color, #ccc);
                 border-radius:4px; background:var(--global-bg-color, #fff);
                 color:var(--global-text-color, #222); font-family:inherit; resize:vertical;"
          placeholder="Türkçe veya İngilizce yazabilirsiniz &middot; You may write in Turkish or English"></textarea>
      </div>
      <button type="submit"
        style="padding:0.6rem 1.4rem; border:1px solid var(--global-theme-color, #333);
               border-radius:4px; background:transparent; color:var(--global-theme-color, #333);
               cursor:pointer; font-family:inherit; transition:all 0.2s;">
        Gönder &middot; Send
      </button>
      <p id="ask-form-status" style="margin-top:1rem; font-size:0.9rem;"></p>
    </form>
  </div>
</div>
<script>
document.getElementById('ask-filiz-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const form = e.target;
  const status = document.getElementById('ask-form-status');
  const data = new FormData(form);
  fetch(form.action, {
    method: 'POST',
    body: data,
    headers: { 'Accept': 'application/json' }
  }).then(response => {
    if (response.ok) {
      form.reset();
      document.getElementById('ask-form-wrapper').innerHTML =
        '<p style="font-style: italic; font-size: 1.1rem;">' +
        'Sorunuz alındı, teşekkürler. Yanıtlar Erotapokriseis köşesinde yer alacak. Çok teşeskkür ederim, çok sevgiler!<br><br>' +
        'Your question has been received, thank you so much! Answers will appear in the Erotapokriseis column over time.' +
        '</p>';
    } else {
      status.textContent = 'Bir şeyler ters gitti, tekrar dener misiniz? · Something went wrong, please try again.';
      status.style.color = 'crimson';
    }
  }).catch(() => {
    status.textContent = 'Bağlantı hatası, tekrar dener misiniz? · Connection error, please try again.';
    status.style.color = 'crimson';
  });
});
</script>
