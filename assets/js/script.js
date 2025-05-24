// Mechanisms of Hate Speech - Interactivity JS

document.addEventListener('DOMContentLoaded', function () {
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
