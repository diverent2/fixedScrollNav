
main();

function main() {
    init__goToPreviousSection();
    init__goToNextSection();
}

function getCurrentSection() {

    let sections = document.querySelectorAll("[data-scrollNav-section]");

    const result = [...sections].filter( section => {

        let sectionTop = section.getBoundingClientRect().top;
        let sectionHeight = section.getBoundingClientRect().height;
        
        if ( (sectionTop <= 0) &&  //---> within screen (top)
             (sectionTop > -Math.abs(sectionHeight))  //---> within screen (bottom)
            ) {
            return true;
        }
    } );

    return result[0];

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

function findPreviousSection() {
    let activeSection = getCurrentSection();

    if (activeSection) {

        let previousSection = activeSection.previousElementSibling;
        if (previousSection) {
            previousSection.scrollIntoView();
        }

    }
}

function findNextSection() {
    let activeSection = getCurrentSection();

    if (activeSection) {
        
        let nextSection = activeSection.nextElementSibling;
        if (nextSection) {
            nextSection.scrollIntoView();
        }

    }
}
