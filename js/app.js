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

//Main function, executed when the page is Loaded.
function pageLoaded(){
   //Take all informations to create the menu.
   let menuNav = getMenuNav()
   //Create the menu with the information.
   generate_menu(menuNav)
   
   document.addEventListener('scroll', function() {
      watchScrolls();
   });
}  
 

//Create a table with the information id and data-nav and return it
function getMenuNav(){
   let sectionElems = {};
   let menuNav = []
   sectionElems = document.querySelectorAll("section")
   for (let it of sectionElems){
        let menuItem = {
           id:it.getAttribute("id"), 
           title:it.getAttribute("data-nav")
        }   
     menuNav.push(menuItem)
      }
   return menuNav
}
 

//Adds li and links inside for each section.
function generate_menu(menuNav){
   let ul = document.getElementById("navbar__list");
   for(let item of menuNav) {
      //Create the li
      let li = document.createElement('li');
      //create the link
      let link = generateMenuLink(item.id, item.title)
      //add the li to the ul
      li.appendChild(link)
      ul.appendChild(li)
   }
}

//If the section is in the viewport, setting the session to active and hilighting the menu item
function watchScrolls(){
   let sectionElems = {};
   sectionElems = document.querySelectorAll("section")
   for (let it of sectionElems){
        const sectionLocation = it.getBoundingClientRect();

        if(sectionLocation.top <= 100 && sectionLocation.bottom >= 100) {
           setActiveSection(it.id)
           highlight("link_" + it.id)
        } 
   }
}

//Create the link to the section with ID = sectionID 
function generateMenuLink(sectionID, sectionTitle){
   var link = document.createElement("a")
      //setting the class of the link to the css class "menu__link"
      link.setAttribute("class","menu__link")
      //override the class if the section is the section1
      if(sectionID == "section1") {link.setAttribute("class","menu__link__current")}

      //setting the id of the link to be equal to 'link_sectionID'
      link.setAttribute("id", "link_" + sectionID)
      link.innerHTML = sectionTitle
      
      //When clicking the section is active and it scroll
      link.addEventListener('click', function () {
         setActiveSection(sectionID)
         document.getElementById(sectionID).scrollIntoView({
            behavior:"smooth" 
      })
      })

   return link
}


// Reset the section class of any active section, and set to active the one in parameter
function setActiveSection(sectionId){
   let current = document.getElementsByClassName("your-active-class");
   current[0].className = "" 
   document.getElementById(sectionId).className = "your-active-class" 
}
 
// Reset the menu link class of any active section, 
// and set to menu__link__current the one in parameter
function highlight(menulinkId){
   let nowHighlight = document.getElementsByClassName("menu__link__current");
   nowHighlight[0].className = ""
   document.getElementById(menulinkId).className = "menu__link__current";
}