/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
const sections = document.querySelectorAll("section");
const navbarList = document.querySelector("#navbar__list")
const nav = document.querySelector("nav");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

//Add Item To Nav Element
// li will be added and eventLister for click also will be added
function addItemsToNav(sections, navbarList){
    for(const section of sections) {
        const liElement = document.createElement("li");
        liElement.className = "menu__link";
        liElement.textContent = section.dataset.nav;
        //Add Event Listner for moving each section's position
        liElement.addEventListener('click',function(){
            window.scrollTo({top: section.offsetTop - nav.getBoundingClientRect().height ,behavior: 'smooth'});
        })
        navbarList.appendChild(liElement);
    }
}

//Check the each sections' position and add/remove "your-active-class"
function updateActive(){
    let flag=true;
    const listElement = document.querySelectorAll('.menu__link');

    for(let i=0;i<sections.length;i++){
        if(flag){
            //Assume that Box which box.bottom is shown in first is read by user
            if(sections[i].getBoundingClientRect().bottom < nav.getBoundingClientRect().height+1) {
                // Do Nothing
            }
            else {
                sections[i].classList.add("your-active-class");
                listElement[i].classList.add("your-active-class");
                flag=false;
            }
        }
        else {
            sections[i].classList.remove("your-active-class");
            listElement[i].classList.remove("your-active-class");
        }
    }
    /*
    for(const section of sections){
        if(flag){
            //Assume that Box which box.bottom is shown in first is read by user
            if(section.getBoundingClientRect().bottom < nav.getBoundingClientRect().height+1) {
                // Do Nothing
            }
            else {
                section.classList.add("your-active-class");
                flag=false;
            }
        }
        else {
            section.classList.remove("your-active-class");
        }
    }*/
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */


// build the nav
addItemsToNav(sections,navbarList);

// Add class 'active' to section when near top of viewport
updateActive();
window.onscroll = updateActive;
window.onresize = updateActive;


/**
 * End Main Functions
 * Begin Events
 *
 */
