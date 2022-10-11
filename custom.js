/**
 * single page navigation
 */

const menuItem = document.querySelectorAll('.menu-item');
const mainViews = document.querySelectorAll('.main > *');
const viewDashboard = document.querySelector('.view-dashboard');
const viewAnalyze = document.querySelector('.view-analyze');
const viewWallet = document.querySelector('.view-wallet');
const viewStore = document.querySelector('.view-store');

// make menu items clickable
for (let i = 0; i < menuItem.length; i++) {
    menuItem[i].addEventListener('click', () => {
        // hide all views
        mainViews.forEach((item) => {
            item.classList.add('hide');
        })
        console.log('huhu', mainViews);

        // show selected view
        if (menuItem[i] = 0) {

        }
        console.log('hallo', menuItem[i]);
    });

}




