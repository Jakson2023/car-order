// function showContent(sectionId) {
//     // Ховає всі розділи
//     let sections = document.querySelectorAll('main section');
//     sections.forEach(function (section) {
//         section.classList.remove('active');
//     });

//     // Відображає вибраний розділ
//     let selectedSection = document.getElementById(sectionId);
//     selectedSection.classList.add('active');
// }


function showContent(sectionId, clickedLink) {
    // Ховає всі розділи
    let sections = document.querySelectorAll('main section');
    sections.forEach(function (section) {
        section.classList.remove('active');
    });

    // Відображає вибраний розділ
    let selectedSection = document.getElementById(sectionId);
    selectedSection.classList.add('active');

    // Знімає клас 'active' з усіх посилань
    let links = document.querySelectorAll('.nav-block a');
    links.forEach(function (link) {
        link.classList.remove('active');
    });

    // Додає клас 'active' до клікнутого посилання
    clickedLink.classList.add('active');
}