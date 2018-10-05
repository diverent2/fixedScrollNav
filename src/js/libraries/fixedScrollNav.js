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
        scrollToPreviousSection();
    })

}


function init__goToNextSection() {

    const scrollNextButton = document.querySelector('.fixedScrollNav__button--next');
    scrollNextButton.tabIndex = "0";
    scrollNextButton.setAttribute("role","button");

    scrollNextButton.addEventListener("click", function() {
        scrollToNextSection();
    })

}

function scrollToPreviousSection() {

    let activeSection_index = getCurrentSection_index();
    if (activeSection_index !== -1) {

        let sections = document.querySelectorAll("[data-fixedScrollNav-section]");
        sections = [...sections];

        let activeSection = sections[activeSection_index];
        let activeSectionTop = activeSection.getBoundingClientRect().top;
        if (activeSectionTop < -1) {

            activeSection.scrollIntoView({
                block: 'start',
                behavior: 'smooth'
            });
        }

        else {

            let previousSection = sections[activeSection_index -1];
        if (previousSection) {
            previousSection.scrollIntoView({
                block: 'start',
                behavior: 'smooth'
            });
        }
        }

    }
}

function scrollToNextSection() {

    let activeSection_index = getCurrentSection_index();
    if (activeSection_index !== -1) {

        let sections = document.querySelectorAll("[data-fixedScrollNav-section]");
        sections = [...sections];
        
        let nextSection = sections[activeSection_index +1];
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
