const body = document.body;
const menu = body.querySelector(".menu");
const menuItems = menu.querySelectorAll(".menu__item");
const menuBorder = menu.querySelector(".menu__border");
let activeItem = menu.querySelector(".active");

function clickItem(item, index) {

    menu.style.removeProperty("--timeOut");
    
    if (activeItem == item) return;
    
    if (activeItem) {
        activeItem.classList.remove("active");
    }

    
    item.classList.add("active");
    activeItem = item;
    offsetMenuBorder(activeItem, menuBorder);
    
    
}

function offsetMenuBorder(element, menuBorder) {

    const offsetActiveItem = element.getBoundingClientRect();
    const left = Math.floor(offsetActiveItem.left - menu.offsetLeft - (menuBorder.offsetWidth  - offsetActiveItem.width) / 2) +  "px";
    menuBorder.style.transform = `translate3d(${left}, 0 , 0)`;

}

offsetMenuBorder(activeItem, menuBorder);

menuItems.forEach((item, index) => {

    item.addEventListener("click", () => clickItem(item, index));
    
})

const modeToggle = document.querySelector('#mode-toggle');
const bodyTheme = document.querySelector('body');

function modeSwitch() {
    const currentBgColor = getComputedStyle(bodyTheme).backgroundColor;
    console.log(currentBgColor);
  
    if (currentBgColor === 'rgb(28, 28, 28)') {
      bodyTheme.style.backgroundColor = 'white';
      document.querySelectorAll('.m-name').forEach(elem => elem.style.color = 'black');
      document.querySelectorAll('.menu__item').forEach(elem => elem.style.color = 'black');
      document.querySelectorAll('.m-options').forEach(elem => elem.style.color = 'black');
      document.querySelectorAll('.icon').forEach(elem => elem.style.stroke = 'black');
      document.querySelector('.top-effect').style.background = 'transparent';
      document.querySelector('.menu').style.background = '#f5f5f5';
    } else {
      bodyTheme.style.backgroundColor = 'rgb(28, 28, 28)';
      document.querySelectorAll('.m-name').forEach(elem => elem.style.color = 'white');
      document.querySelectorAll('.menu__item').forEach(elem => elem.style.color = 'white');
      document.querySelectorAll('.m-options').forEach(elem => elem.style.color = 'white');
      document.querySelectorAll('.icon').forEach(elem => elem.style.stroke = 'white');
    //   document.querySelector('.menu__icon.active > icon').style.stroke = 'black';
        const s =  document.getElementsByClassName('active')[0];
    console.log(s);
      document.querySelector('.top-effect').style.background = 'linear-gradient(transparent, transparent, #1c1c1c)';
      document.querySelector('.d-title').style.color = '#fff';
      document.querySelector('.menu').style.background = '#1c1c1c';
    }
  }
  
  
  


window.addEventListener("resize", () => {
    offsetMenuBorder(activeItem, menuBorder);
    menu.style.setProperty("--timeOut", "none");
});