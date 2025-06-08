document.addEventListener('DOMContentLoaded', function() {
    const allSections = document.querySelectorAll('.coffee-section, .popular-coffee-box-section');

    for (let i = 0; i < allSections.length; i++) {
        const section = allSections[i];
        const coffeeRow = section.querySelector('.coffeeRow, .kopiRow');
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

    popularCoffeeRow.parentNode.insertBefore(newLeftArrow, popularCoffeeRow);
    popularCoffeeRow.parentNode.appendChild(newRightArrow);

    function checkPopularArrows() {
        if (popularCoffeeRow.scrollLeft <= 5) {
            newLeftArrow.style.display = 'none';
        } else {
            newLeftArrow.style.display = 'flex';
        }
        const maxScrollLeft = popularCoffeeRow.scrollWidth - popularCoffeeRow.clientWidth;
        if (popularCoffeeRow.scrollLeft >= maxScrollLeft - 5) {
            newRightArrow.style.display = 'none';
        } else {
            newRightArrow.style.display = 'flex';
        }
    }

    checkPopularArrows();
    popularCoffeeRow.addEventListener('scroll', checkPopularArrows);

    newRightArrow.addEventListener('click', function() {
        const card = popularCoffeeRow.querySelector('.coffeeSlot');
        if (!card) return;
        const cardSize = card.offsetWidth;
        const gap = parseInt(getComputedStyle(popularCoffeeRow).getPropertyValue('gap')) || 0;
        const scrollAmount = cardSize * 3 + gap * 3;
        popularCoffeeRow.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });

    newLeftArrow.addEventListener('click', function() {
        const card = popularCoffeeRow.querySelector('.coffeeSlot');
        if (!card) return;
        const cardSize = card.offsetWidth;
        const gap = parseInt(getComputedStyle(popularCoffeeRow).getPropertyValue('gap')) || 0;
        const scrollAmount = cardSize * 3 + gap * 3;
        popularCoffeeRow.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    window.addEventListener('resize', checkPopularArrows);
});
