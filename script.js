function loadPage() {
    document.getElementById('hamburger').addEventListener('click', function() {
        var navbar = document.getElementById('navbar');
        navbar.classList.toggle('active');
    });
    
    const header = document.querySelector("header");
    header.innerHTML = `<h1><u>Portfolio and Preview <br>Projects</u></h1>`;
    header.classList.add('header');

    const section = document.querySelector("section");
    section.innerHTML = `
        <p>Welcome to my entry-level project showcase! As a budding web developer, I've embarked on creating projects 
        that highlight my foundational skills and growing expertise in the world of web development. These projects not 
        only demonstrate my proficiency in HTML, CSS, and JavaScript but also reflect my enthusiasm for learning and 
        applying new technologies.</p>
    `;
    section.classList.add('section');
 
}
function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}