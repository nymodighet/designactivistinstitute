$(document).ready(function () {

	// Form
	const form = document.getElementById('signupForm');
	const msg = document.getElementById('formMessage');

	form.addEventListener('submit', async (e) => {
		e.preventDefault();

		const res = await fetch(form.action, {
	  		method: 'POST',
	  		body: new FormData(form),
	  		headers: { 'Accept': 'application/json' }
		});

		if (res.ok) {
	  		form.reset();
	  		msg.textContent = 'Thanks — you are signed up for the Design Activist Institute and will be included in future communications about our workshops, events, and projects!';
		} else {
	  		msg.textContent = 'Something went wrong. Please try again.';
		}
	});
 
});