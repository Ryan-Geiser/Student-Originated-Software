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
