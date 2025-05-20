document.addEventListener ('DOMContentLoaded', function () {
    const reveals = document.querySelectorAll ('.reveal');
    function isVisible (element) {
       const rect = element.getBoundingClientRect ();
       return (
        rect.top < window.innerHeight && 
        rect.bottom > 0
    );
    }
    function scrolls () {
        reveals.forEach (reveal => {
            if (isVisible (reveal)) {
                reveal.classList.add ('reveal_active');
            }
        });
    }
    window.addEventListener ('scroll', scrolls);
});

