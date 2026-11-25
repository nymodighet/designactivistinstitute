$(document).ready(function () {

    const form = document.getElementById('signupForm');
    const msg = document.getElementById('formMessage');
    if (!form || !msg) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const btn = form.querySelector('button[type="submit"]');
        btn.disabled = true;
        msg.textContent = 'Sending…';

        try {
            const res = await fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: { 'Accept': 'application/json' }
            });

            if (res.ok) {
                form.reset();
                msg.textContent = 'Thanks — you are signed up for the Design Activist Institute and will be included in future communications about our workshops, events, and projects!';
            } else {
                const data = await res.json().catch(() => ({}));
                msg.textContent = (data.errors && data.errors.map(err => err.message).join(', '))
                    || 'Something went wrong. Please try again.';
            }
        } catch (err) {
            msg.textContent = 'Something went wrong. Please check your connection and try again.';
        } finally {
            btn.disabled = false;
        }
    });

});