import smoothscroll from 'smoothscroll-polyfill';

function init() {
    smoothscroll.polyfill(); //init polyfill

    let isUsed = document.querySelector('.fixedScrollNav__container');
    if (isUsed) {
        init__goToPreviousSection();
        init__goToNextSection();
    }
}

/** init button .fixedScrollNav__button--previous
* add eventlistener [ will run scrollToPreviousSection() ]
* add a11y features (accessibility)
**/
function init__goToPreviousSection() {

    const scrollPreviousButton = document.querySelector('.fixedScrollNav__button--previous');
    scrollPreviousButton.tabIndex = "0";
    scrollPreviousButton.setAttribute("role","button");

    scrollPreviousButton.addEventListener("click", function() {
        scrollToPreviousSection();
    })

}

/** init button .fixedScrollNav__button--next
 * ---------------------------------------------
 * add eventlistener [ will run scrollToNextSection() ]
 * add a11y features (accessibility)
**/
function init__goToNextSection() {

    const scrollNextButton = document.querySelector('.fixedScrollNav__button--next');
    scrollNextButton.tabIndex = "0";
    scrollNextButton.setAttribute("role","button");

    scrollNextButton.addEventListener("click", function() {
        scrollToNextSection();
    })

}

/** 
 * finds active scrollSection and returns its index
**/
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

function scrollToPreviousSection() {

    let activeSection_index = getCurrentSection_index();
    if (activeSection_index !== -1) {

        let sections = document.querySelectorAll("[data-fixedScrollNav-section]");
        sections = [...sections];

        let activeSection = sections[activeSection_index];
        let activeSectionTop = activeSection.getBoundingClientRect().top;
        
        if (activeSectionTop < -1) { //check if active section is NOT already at its beginning

            activeSection.scrollIntoView({ //scroll to active sections beginning
                block: 'start',
                behavior: 'smooth'
            });
        }

        else {
            let previousSection = sections[activeSection_index -1];  //active section - 1 = previous section
            if (previousSection) {
                previousSection.scrollIntoView({
                    block: 'start',
                    behavior: 'smooth'
                });
            }
        }

    }
}

/** 
 * scrolls to next section if it exists
**/
function scrollToNextSection() {

    let activeSection_index = getCurrentSection_index();
    if (activeSection_index !== -1) {

        let sections = document.querySelectorAll("[data-fixedScrollNav-section]");
        sections = [...sections];
        
        let nextSection = sections[activeSection_index +1]; //active section + 1 = next section
        if (nextSection) {
            nextSection.scrollIntoView({
                block: 'start',
                behavior: 'smooth'
            });
        }
    }
}


//export module
module.exports.init = init;