import smoothscroll from 'smoothscroll-polyfill';

function init() {
    smoothscroll.polyfill();

    let isUsed = document.querySelector('.fixedScrollNav__container');
    if (isUsed) {
        init__goToPreviousSection();
        init__goToNextSection();
    }
}

function getCurrentSection() {

    let sections = document.querySelectorAll("[data-fixedScrollNav-section]");

    const activeSection = [...sections].filter( section => {

        let sectionTop = section.getBoundingClientRect().top;
        let sectionHeight = section.getBoundingClientRect().height;
        
        if ( (sectionTop <= 0) &&  //---> within screen (top)
             (sectionTop > -Math.abs(sectionHeight))  //---> within screen (bottom)
            ) {
            return true;
        }
    });

    return activeSection[0];

}

function init__goToPreviousSection() {

    const scrollPreviousButton = document.querySelector('.fixedScrollNav__button--previous');
    scrollPreviousButton.tabIndex = "0";
    scrollPreviousButton.setAttribute("role","button");

    scrollPreviousButton.addEventListener("click", function() {
        findPreviousSection();
    })

}


function init__goToNextSection() {

    const scrollNextButton = document.querySelector('.fixedScrollNav__button--next');
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

function getCurrentSection_index() {

    let sections = document.querySelectorAll("[data-fixedScrollNav-section]");
    
    let activeSection_index = [...sections].findIndex( section => {

        let sectionTop = section.getBoundingClientRect().top;
        let sectionHeight = section.getBoundingClientRect().height;
        
        if ( (sectionTop <= 0) &&  //---> within screen (top)
             (sectionTop > -Math.abs(sectionHeight))  //---> within screen (bottom)
            ) {
            return true;
        }
        return false;
    });

    return activeSection_index;
    
}

module.exports.init = init;
