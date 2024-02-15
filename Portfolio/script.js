var tabLinks = document.getElementById("tab-links");

function openTab(tabname) {
    var tabLinks = document.querySelectorAll(".tab-links");
    var tabContents = document.querySelectorAll(".tab-contents");

    tabLinks.forEach(function(link) {
        link.classList.remove('active-link');
    });

    tabContents.forEach(function(content) {
        content.classList.remove('active-tab');
    });

    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add("active-tab");
}

var sidebarMenu = document.getElementById("sidebar-menu");

function openMenu() {
    sidebarMenu.style.right = "0";
}
function closeMenu() {
    sidebarMenu.style.right = "-200px";
}