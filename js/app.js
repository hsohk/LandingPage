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
const sectionTitles = document.querySelectorAll(".landing__container");
const sections = document.querySelectorAll("section");
const navbarList = document.querySelector("#navbar__list")
const nav = document.querySelector("nav");
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function scrollToSection(){

}

//Add Item To Nav Element
function addItemsToNav(sections, navbarList){
    for(const section of sections) {
        const liElement = document.createElement("li");
        liElement.className = "menu__link";
        liElement.textContent = section.dataset.nav;
        //Add Event Listner for moving each section's position
        liElement.addEventListener('click',function(evt){
            console.log(evt.target.textContent);
            window.scrollTo({top: section.offsetTop - nav.getBoundingClientRect().height ,behavior: 'smooth'});
            console.log(section.getBoundingClientRect().top);
        })
        navbarList.appendChild(liElement);
    }
}

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
