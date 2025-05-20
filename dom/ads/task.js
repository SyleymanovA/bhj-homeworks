document.addEventListener ('DOMContentLoaded', function () {
    const rotators = document.querySelectorAll ('.rotator');
    rotators.forEach (rotator => {
        const cases = rotator.querySelectorAll ('.rotator__case');
        let currentIndex = 0;
        function rotateCase () {
            cases[currentIndex].classList.remove ('rotator__case_active');
            currentIndex = (currentIndex+1) % cases.length;
            const nextCase = cases [currentIndex];
            nextCase.classList.add ('rotator__case_active');
            nextCase.style.color = nextCase.dataset.color;
            const speed = parseInt (nextCase.dataset.speed);
            setTimeout (rotateCase,speed);
        }
        const firstCase = cases [0];
        firstCase.style.color = firstCase.dataset.color;
        const initialSpeed = parseInt (firstCase.dataset.speed);
        setTimeout (rotateCase, initialSpeed);
    });
});