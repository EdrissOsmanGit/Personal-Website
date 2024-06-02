document.addEventListener('DOMContentLoaded', function() {
    var elements = document.querySelectorAll('.slide-in-left');

    function checkVisibility() {
        var windowHeight = window.innerHeight;
        elements.forEach(function(element) {
            var positionFromTop = element.getBoundingClientRect().top;

            if (positionFromTop - windowHeight <= 0) {
                element.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);

    // Initial check
    checkVisibility();
});

