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
        liElement.addEventListener('click',function(evt){
            window.scrollTo({top: section.offsetTop - nav.getBoundingClientRect().height ,behavior: 'smooth'});
        })
        navbarList.appendChild(liElement);
    }
}

//Check the each sections' position and add/remove "your-active-class"
function updateActive(){
    let flag=true;
    for(const section of sections){
        if(flag){
            //Assume that Box which box.bottom is shown in first is read by user
            if(section.getBoundingClientRect().bottom < nav.getBoundingClientRect().height+1) {
                continue;
            }
            else {
                section.classList.add("your-active-class");
                flag=false;
            }
        }
        else {
            section.classList.remove("your-active-class");
        }
    }
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
