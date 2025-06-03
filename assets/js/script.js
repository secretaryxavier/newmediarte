// Mechanisms of Hate Speech - Interactivity JS

document.addEventListener('DOMContentLoaded', function () {
    // --- Tinfoil Hat Pop-up Ad ---
    function showTinfoilAd() {
        const adMessages = [
            {title: 'THE TRUTH!', body: 'Click here to unlock the secrets THEY don\'t want you to know!'},
            {title: 'Pineal Gland Opener', body: 'Buy our supplement and see beyond the veil! Limited time offer!'},
            {title: 'WARNING!', body: 'Your mind is at risk. Protect yourself with our EMF-blocking hat!'},
            {title: 'EXPOSED!', body: 'The government is hiding THIS from you. Click for more!'},
            {title: 'Wake Up!', body: 'Don\'t let them control your thoughts. Discover the truth now!'}
        ];
        const msg = adMessages[Math.floor(Math.random() * adMessages.length)];
        const ad = document.createElement('div');
        ad.className = 'tinfoil-ad-popup';
        ad.innerHTML = `
            <div class="tinfoil-ad-inner">
                <button class="tinfoil-ad-close" aria-label="Close" tabindex="0">&times;</button>
                <div class="tinfoil-ad-title">${msg.title}</div>
                <div class="tinfoil-ad-body">${msg.body}</div>
                <a href="#" class="tinfoil-ad-cta">Find Out Now</a>
            </div>
        `;
        document.body.appendChild(ad);
        setTimeout(() => ad.classList.add('show'), 100);
        ad.querySelector('.tinfoil-ad-close').onclick = () => ad.remove();
        ad.querySelector('.tinfoil-ad-close').onkeydown = (e) => { if (e.key === 'Enter' || e.key === ' ') ad.remove(); };
        ad.querySelector('.tinfoil-ad-cta').onclick = (e) => {
            e.preventDefault();
            ad.querySelector('.tinfoil-ad-title').textContent = 'JUST KIDDING!';
            ad.querySelector('.tinfoil-ad-body').textContent = 'This is a parody pop-up to demonstrate manipulative ad techniques.';
            ad.querySelector('.tinfoil-ad-cta').style.display = 'none';
        };
    }
    // Only show pop-ups if not on mobile (screen width > 600px)
    if (window.innerWidth > 600) {
        showTinfoilAd();
    }

    // --- Rolling Banner / Marquee ---
    function showRollingBanner() {
        const bannerMessages = [
            "They're out to get you!",
            "They're in every institution!",
            "They're hateful people!",
            "Protect yourself from the truth!",
            "You can't trust anyone!",
            "Wake up! They're everywhere!"
        ];
        const banner = document.createElement('div');
        banner.className = 'rolling-banner';
        banner.innerHTML = `<marquee behavior="scroll" direction="left" scrollamount="10" class="rolling-marquee"></marquee>`;
        document.body.prepend(banner);
        let idx = 0;
        function rotateBanner() {
            const marquee = banner.querySelector('.rolling-marquee');
            marquee.textContent = bannerMessages[idx];
            idx = (idx + 1) % bannerMessages.length;
        }
        rotateBanner();
        setInterval(rotateBanner, 3500);
    }
    showRollingBanner();

    // --- Janky Side Ad Cards ---
    function showSideAds() {
        const adMessages = [
            {title: 'Buy Our Pineal Gland Opener!', body: 'Unlock your mind for just $99.99!'},
            {title: 'EXPOSED!', body: 'Secret societies control your life. Click here!'},
            {title: 'Hate Blocker 3000', body: 'Install our browser extension now!'},
            {title: 'Wake Up!', body: 'They want to keep you asleep. Don\'t let them!'},
            {title: 'The Truth Supplement', body: 'Stronger than ever. Order today!'},
            {title: 'They Are Watching', body: 'Protect your privacy with our tinfoil hats!'}
        ];
        // Left ad
        const leftAd = document.createElement('div');
        leftAd.className = 'side-ad-card left-ad';
        // Right ad
        const rightAd = document.createElement('div');
        rightAd.className = 'side-ad-card right-ad';
        // Pick random ads
        const leftMsg = adMessages[Math.floor(Math.random() * adMessages.length)];
        let rightMsg;
        do {
            rightMsg = adMessages[Math.floor(Math.random() * adMessages.length)];
        } while (rightMsg.title === leftMsg.title);
        leftAd.innerHTML = `<div class="side-ad-title">${leftMsg.title}</div><div class="side-ad-body">${leftMsg.body}</div>`;
        rightAd.innerHTML = `<div class="side-ad-title">${rightMsg.title}</div><div class="side-ad-body">${rightMsg.body}</div>`;
        document.body.appendChild(leftAd);
        document.body.appendChild(rightAd);
    }
    // Only show side ads if not on mobile (screen width > 600px)
    if (window.innerWidth > 600) {
        showSideAds();
    }

    // Modal/Warning Overlay Dismissal
    window.dismissWarning = function() {
        const overlay = document.querySelector('.warning-overlay');
        if (overlay) overlay.style.display = 'none';
        document.body.focus();
    };
    // Trap focus in modal for accessibility
    const warningOverlay = document.querySelector('.warning-overlay');
    if (warningOverlay) {
        warningOverlay.setAttribute('role', 'dialog');
        warningOverlay.setAttribute('aria-modal', 'true');
        const enterBtn = warningOverlay.querySelector('button');
        if (enterBtn) {
            enterBtn.focus();
            enterBtn.addEventListener('keydown', function(e) {
                if (e.key === 'Tab') {
                    e.preventDefault();
                    enterBtn.focus();
                }
            });
        }
    }

    // Accordion for mechanisms.html
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const content = header.nextElementSibling;
            const expanded = content.classList.contains('active');
            // Collapse all
            document.querySelectorAll('.accordion-content').forEach(c => c.classList.remove('active'));
            if (!expanded) {
                content.classList.add('active');
            }
        });
        // Keyboard accessibility
        header.setAttribute('tabindex', '0');
        header.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                header.click();
            }
        });
    });

    // Tooltip activation (for .tooltip elements)
    const tooltips = document.querySelectorAll('.tooltip');
    tooltips.forEach(tip => {
        tip.addEventListener('focus', function() {
            const t = tip.querySelector('.tooltip-text');
            if (t) t.style.visibility = 'visible';
        });
        tip.addEventListener('blur', function() {
            const t = tip.querySelector('.tooltip-text');
            if (t) t.style.visibility = 'hidden';
        });
    });
});
