const root = document.documentElement;
 
// Tell CSS that this script is running. Reveal-on-scroll text is only hidden
// when .js is present, so if jQuery fails to load the content stays visible.
if (window.jQuery) root.classList.add('js');
 
$(document).ready(function () {
 
    // SCROLL REVEAL (adds/removes .scrolled) //
    const $revealEls = $('.fade-in-bottom, .fade-out-top');
 
    function scrollPositionMonitor() {
        const howFarScrolled = window.scrollY;
        const windowHeight = window.innerHeight;
 
        $revealEls.each(function () {
            const $el = $(this);
            const rect = this.getBoundingClientRect();
 
            // Fade-in: reveal once the element is 100px into the viewport
            if ($el.hasClass('fade-in-bottom')) {
                $el.toggleClass('scrolled', rect.top < windowHeight - 100);
            }
 
            // Fade-out: only after 50px of scrolling, once the element's top has left the viewport
            if ($el.hasClass('fade-out-top')) {
                $el.toggleClass('scrolled', howFarScrolled > 50 && rect.top < 0);
            }
        });
    }
 
    // Throttle to one run per animation frame
    let ticking = false;
    function onScrollOrResize() {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(function () {
            scrollPositionMonitor();
            ticking = false;
        });
    }
 
    $(window).on('scroll resize', onScrollOrResize);
 
    // Run once on load too
    scrollPositionMonitor();
 
 
    // PAUSE ANIMATIONS (accessibility) //
    const btn = document.getElementById('motion-toggle');
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
 
    let saved = null;
    try { saved = localStorage.getItem('motion'); } catch (e) {}
 
    function apply(off) {
        root.classList.toggle('motion-off', off);
        if (btn) btn.setAttribute('aria-pressed', String(off));
    }
 
    apply(saved ? saved === 'off' : mq.matches);
 
    if (btn) {
        btn.addEventListener('click', function () {
            const off = !root.classList.contains('motion-off');
            apply(off);
            saved = off ? 'off' : 'on';   // from now on, the user's choice beats the OS setting
            try { localStorage.setItem('motion', saved); } catch (e) {}
        });
    }
 
    // Follow live OS changes only if the user hasn't made a choice
    mq.addEventListener('change', function (e) {
        if (!saved) apply(e.matches);
    });

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