(() => {
  'use strict';
  const form = document.querySelector('#contact-form');
  const success = document.querySelector('#form-success');
  if (!form || !success) return;
  const endpoint = '/contact-sales.php';
  // Reuse existing website feedback verbatim; keep legacy labels and success UI.
  const errors = {
    idempotency_conflict: 'تغيّرت الرسالة. راجعها واضغط إرسال مرة أخرى.',
    network: 'تعذّر الاتصال. رسالتك ما زالت محفوظة هنا؛ حاول مجددًا.',
    unavailable: 'خدمة الرسائل غير متاحة حاليًا. حاول لاحقًا أو راسل support@tajroba.sa.',
    validation: 'راجع الاسم والبريد والرسالة، ثم حاول مجددًا.',
    csrf: 'انتهت صلاحية النموذج. اضغط إرسال مرة أخرى لتجديده.',
    rate_limit: 'وصلت للحد المؤقت للرسائل. حاول مرة أخرى بعد ساعة.',
    too_fast: 'انتظر لحظة ثم اضغط إرسال.',
    origin: 'تعذّر التحقق من الطلب. افتح الموقع مباشرة وحاول مجددًا.'
  };
  const feedback = document.createElement('p');
  feedback.hidden = true;
  feedback.setAttribute('role', 'alert');
  form.append(feedback);
  let csrf = null, tokenRequest = null, readyAt = 0, pending = null, sending = false;
  async function loadToken() {
    if (csrf) return csrf;
    if (tokenRequest) return tokenRequest;
    tokenRequest = (async () => {
      const response = await fetch(endpoint, {
        credentials: 'same-origin', cache: 'no-store',
        headers: {Accept: 'application/json'}, signal: AbortSignal.timeout(12000)
      });
      if (!response.ok) throw new Error('unavailable');
      const data = await response.json();
      if (!/^[a-f0-9]{64}$/.test(data.csrf || '')) throw new Error('unavailable');
      csrf = data.csrf;
      readyAt = Date.now() + 2100;
      return csrf;
    })();
    try { return await tokenRequest; } finally { tokenRequest = null; }
  }
  loadToken().catch(() => {});
  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (sending || !form.reportValidity()) return;
    const input = new FormData(form);
    const values = Object.fromEntries(['name', 'email', 'message', 'subject', 'phone', 'website']
      .map(key => [key, String(input.get(key) || '')]));
    const fingerprint = JSON.stringify(values);
    if (!pending || pending.fingerprint !== fingerprint) {
      pending = {fingerprint, id: Array.from(crypto.getRandomValues(new Uint8Array(16)),
        n => n.toString(16).padStart(2, '0')).join('')};
    }
    const fields = [...form.querySelectorAll('input,textarea,button')];
    const disabled = fields.map(field => field.disabled);
    fields.forEach(field => { field.disabled = true; });
    sending = true;
    feedback.hidden = true;
    try {
      values.csrf = await loadToken();
      values.request_id = pending.id;
      values.language = 'ar';
      const remaining = readyAt - Date.now();
      if (remaining > 0) await new Promise(resolve => setTimeout(resolve, remaining));
      const response = await fetch(endpoint, {
        method: 'POST', credentials: 'same-origin', cache: 'no-store',
        headers: {'Content-Type': 'application/json', Accept: 'application/json'},
        body: JSON.stringify(values), signal: AbortSignal.timeout(30000)
      });
      const data = await response.json();
      if (!response.ok || data.ok !== true) {
        if (data.code === 'csrf') { csrf = null; loadToken().catch(() => {}); }
        if (data.code === 'idempotency_conflict') pending = null;
        throw new Error(data.code || 'unavailable');
      }
      form.hidden = true;
      form.classList.add('is-hidden');
      success.hidden = false;
      success.classList.add('visible');
      form.reset();
      pending = null;
    } catch (error) {
      feedback.textContent = errors[error.message] || errors.network;
      feedback.hidden = false;
    } finally {
      sending = false;
      fields.forEach((field, i) => { field.disabled = disabled[i]; });
    }
  });
})();
