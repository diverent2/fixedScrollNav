import smoothscroll from 'smoothscroll-polyfill';

function init() {
    smoothscroll.polyfill();

    init__goToPreviousSection();
    init__goToNextSection();
}

function getCurrentSection() {

    let sections = document.querySelectorAll("[data-fixedscrollNav-section]");

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

    const scrollPreviousButton = document.querySelector('.fixedscrollNav__button--previous');
    scrollPreviousButton.tabIndex = "0";
    scrollPreviousButton.setAttribute("role","button");

    scrollPreviousButton.addEventListener("click", function() {
        findPreviousSection();
    })

}


function init__goToNextSection() {

    const scrollNextButton = document.querySelector('.fixedscrollNav__button--next');
    scrollNextButton.tabIndex = "0";
    scrollNextButton.setAttribute("role","button");

    scrollNextButton.addEventListener("click", function() {
        findNextSection();
    })

}

function findPreviousSection() {
    let activeSection = getCurrentSection();

    if (activeSection) {

        let previousSection = activeSection.previousElementSibling;
        if (previousSection) {
            previousSection.scrollIntoView({
                block: 'start',
                behavior: 'smooth'
            });
        }

    }
}

function findNextSection() {
    let activeSection = getCurrentSection();

    if (activeSection) {
        
        let nextSection = activeSection.nextElementSibling;
        if (nextSection) {
            nextSection.scrollIntoView({
                block: 'start',
                behavior: 'smooth'
            });
        }

    }
}
