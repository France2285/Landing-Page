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

//Function when the page is Loaded.
function pageLoaded(){
   //Take all informations to create the menu.
   let menuNav = getMenuNav()
   //Create the menu with the information.
   generate_menu(menuNav)
}  
 

//Create a table with the information id and data-nav
function getMenuNav(){
   let sectionElems = {};
   let menuNav = []
   sectionElems = document.querySelectorAll("section")
   for (let it of sectionElems){
        let menuItem = {
           id:it.getAttribute("id"), 
           title:it.getAttribute("data-nav")
     };
     menuNav.push(menuItem)
   }
   return menuNav
}
 

//Create ul and li with a link of each section.
function generate_menu(menuNav){
   let ul = document.getElementById("navbar__list");
   for(let item of menuNav) {
      let li = document.createElement('li');
      let link = generateMenuLink(item.id, item.title)
      li.appendChild(link)
      ul.appendChild(li)
   }
}


//Create the link sectionID and create scroll in to view.
function generateMenuLink(sectionID, sectionTitle){
   var link = document.createElement("a")
      link.setAttribute("class","menu__link")
      link.innerHTML = sectionTitle
      link.addEventListener('click', function () {
         setActiveSection(sectionID)
         document.getElementById(sectionID).scrollIntoView({
            behavior:"smooth" 
        })
      })
   return link
}


// Erase and replace the section active.
function setActiveSection(sectionId){
   let current = document.getElementsByClassName("your-active-class");
   current[0].className = current[0].className.replace("your-active-class", "");
   document.getElementById(sectionId).className += "your-active-class";
}
 