const form = document.getElementById('contactForm');
const postmark = document.getElementById('postmark');
const postmarkClose = document.getElementById('postmarkClose');
const submitBtn = document.getElementById('submitBtn');
 
function validate() {
  let valid = true;
  const checks = [
    { field: 'name', test: v => v.trim().length > 0 },
    { field: 'email', test: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) },
    { field: 'subject', test: v => v.trim().length > 0 },
    { field: 'message', test: v => v.trim().length > 0 },
  ];
 
  checks.forEach(({ field, test }) => {
    const wrapper = form.querySelector(`[data-field="${field}"]`);
    const input = wrapper.querySelector('input, textarea');
    const ok = test(input.value);
    wrapper.classList.toggle('invalid', !ok);
    if (!ok) valid = false;
  });
 
  return valid;
}
 
// clear error state as the person types
form.querySelectorAll('input, textarea').forEach(el => {
  el.addEventListener('input', () => {
    el.closest('.field').classList.remove('invalid');
  });
});
 
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (!validate()) return;
 
  submitBtn.disabled = true;
 
  // ---- Replace this block with a real submission call ----
  // e.g. fetch('https://your-backend.example.com/contact', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(Object.fromEntries(new FormData(form)))
  // })
  await new Promise(res => setTimeout(res, 500));
  // ----------------------------------------------------------
 
  submitBtn.disabled = false;
  postmark.classList.add('show');
});
 
postmarkClose.addEventListener('click', () => {
  postmark.classList.remove('show');
  form.reset();
  form.querySelectorAll('.field').forEach(f => f.classList.remove('invalid'));
});
 