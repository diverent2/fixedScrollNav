
main();

function main() {

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
