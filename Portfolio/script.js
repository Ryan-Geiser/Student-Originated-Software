var tabLinks = document.getElementById('tab-links');
var tabContents = document.getElementById('tab-contents');

function openTab(tabName) {
    for(tabLinks of tabLinks) {
        tabLinks.classList.remove('active-link');
    }
    for(tabContents of tabContents) {
        tabContents.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabName).classList.add('active-tab');

}

var sidebarMenu = document.getElementById("sidebar-menu");

function openMenu() {
    sidebarMenu.style.right = "0";
}
function closeMenu() {
    sidebarMenu.style.right = "-200px";
}