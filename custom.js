/**
 * Mobile Menu
 */

const burgerMenu = document.querySelector('.burger-menu');
const sidebarMenu = document.querySelector('.sidebar-inner');
let sidebarVisible = false;

burgerMenu.addEventListener("click", () => {
    if (!sidebarVisible) {
        sidebarMenu.classList.add('display');
        sidebarVisible = true;
    }
    else {
        sidebarMenu.classList.remove('display');
        sidebarVisible = false;
    }
});

/**
 * single page navigation
 */

const menuItem = document.querySelectorAll('.menu-item');
const mainViews = document.querySelectorAll('.main > *');
const viewDashboard = document.querySelector('.view-dashboard');
const viewAnalyze = document.querySelector('.view-analyze');
const viewWallet = document.querySelector('.view-wallet');
const viewStore = document.querySelector('.view-store');

//initial state: set dashboard menu as active
menuItem[0].classList.add('active');
// hide all views apart from dashboard
        mainViews.forEach((item) => {
           item.classList.add('hide');
        });
        mainViews[0].classList.remove('hide');


// make menu items clickable
for (let i = 0; i < menuItem.length; i++) {
    menuItem[i].addEventListener("click", () => {
        // set all menu items to unfocused
        menuItem.forEach((item) => {
            item.classList.remove('active');
        });
        // hide all views
        mainViews.forEach((item) => {
            item.classList.add('hide');
        });
        // display selected 
        menuItem[i].classList.add('active');
        mainViews[i].classList.remove('hide');
        // close menu on mobile
        if (sidebarVisible) {
            sidebarMenu.classList.remove('display');
            sidebarVisible = false;
        }
    });
}








