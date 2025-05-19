document.addEventListener ('DOMContentLoaded', function () {
    const tabsCont = document.querySelectorAll ('.tabs');
    tabsCont.forEach (tabsCont => {
        const tabs = tabsCont.querySelectorAll ('.tab');
        const tabContents = tabsCont.querySelectorAll ('.tab__content');
        tabs.forEach (tab => {
            tab.addEventListener ('click', function () {
                tabs.forEach (t => t.classList.remove ('tab_active'));
                tabContents.forEach (content => content.classList.remove ('tab__content_active'));
                tab.classList.add ('tab_active');
                const tabIndex = Array.from (tabs).indexOf (tab);
                tabContents[tabIndex].classList.add ('tab__content_active');
            });
        });
    });
});