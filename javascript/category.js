document.addEventListener('DOMContentLoaded', function() {
    const coffeeSections = document.querySelectorAll('.coffee-section');

    for (let i = 0; i < coffeeSections.length; i++) {
        const section = coffeeSections[i];
        const coffeeRow = section.querySelector('.kopiRow');
        const leftArrow = section.querySelector('.left-arrow');
        const rightArrow = section.querySelector('.right-arrow');

        function checkArrows() {
            if (coffeeRow.scrollLeft <= 5) {
                leftArrow.style.display = 'none';
            } else {
                leftArrow.style.display = 'flex';
            }

            const maxScrollLeft = coffeeRow.scrollWidth - coffeeRow.clientWidth;
            if (coffeeRow.scrollLeft >= maxScrollLeft - 5) {
                rightArrow.style.display = 'none';
            } else {
                rightArrow.style.display = 'flex';
            }
        }

        checkArrows();

        coffeeRow.addEventListener('scroll', checkArrows);

        rightArrow.addEventListener('click', function() {
            const cardSize = coffeeRow.querySelector('.kopiCard').offsetWidth;
            const gap = parseInt(getComputedStyle(coffeeRow).getPropertyValue('gap'));
            const scrollAmount = cardSize * 3 + gap * 3;
            coffeeRow.scrollBy({ 
                left: scrollAmount,
                behavior: 'smooth'
            });
        });

        leftArrow.addEventListener('click', function() {
             const cardSize = coffeeRow.querySelector('.kopiCard').offsetWidth;
             const gap = parseInt(getComputedStyle(coffeeRow).getPropertyValue('gap'));
             const scrollAmount = cardSize * 3 + gap * 3;
            coffeeRow.scrollBy({ 
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });
        window.addEventListener('resize', checkArrows);
    }
});
