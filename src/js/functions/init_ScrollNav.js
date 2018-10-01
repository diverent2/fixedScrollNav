
main();

function main() {
    init__goToPreviousSection();
    init__goToNextSection();
}

function getCurrentSection() {

    let sections = document.querySelectorAll("[data-scrollNav-section]");

    [...sections].forEach(e => {
        let sectionTop = e.getBoundingClientRect().top;
        let sectionHeight = e.getBoundingClientRect().height;

        e.setAttribute('data-scrollNav-section', '');

        if(
            (sectionTop <= 0) && //---> within screen (top)
            (sectionTop > -Math.abs(sectionHeight) ) //---> within screen (bottom)
        ) {
            e.setAttribute('data-scrollNav-section', 'active');
            return e;
        }

    });

}

function init__goToPreviousSection() {

    const scrollPreviousButton = document.querySelector('.scrollNav__button--previous');

    scrollPreviousButton.addEventListener("click", function() {
        findPreviousSection();
    })

}


function init__goToNextSection() {

    const scrollPreviousButton = document.querySelector('.scrollNav__button--next');

    scrollPreviousButton.addEventListener("click", function() {
        findNextSection();
    })

}

