// Array of project data
const projects = [
    {
        
        image: "images/Calculator.png",
        codeLink: "https://github.com/kaur2804/UnitConverter",
        appLink: "https://kaur2804.github.io/UnitConverter/"
    },
    {
         
        image: "images/Books.png",
        codeLink: "https://github.com/kaur2804/ItBooks",
        appLink: "https://kaur2804.github.io/ItBooks/"
    },
    {
        
        image: "images/Gallary.png",
        codeLink: "https://github.com/kaur2804/Gallery",
        appLink: "https://kaur2804.github.io/Gallery/"
    },
    {
         
        image: "images/cleaning.png",
        codeLink: "https://github.com/kaur2804/CleaningTip",
        appLink: "https://kaur2804.github.io/CleaningTip/"
        
    },
    {
         
        image: "images/game.png",
        codeLink: "https://github.com/kaur2804/asteroid",
        appLink: "https://kaur2804.github.io/asteroid/"
    }
];

// Function to load projects into the container
 
    function loadProjects() {
        const container = document.querySelector('.projects-container');
    
        projects.forEach(project => {
            // Create project element
            const projectElement = document.createElement('div');
            projectElement.classList.add('project');
    
            // Add image container and image to project element
            const imgContainer = document.createElement('div');
            imgContainer.classList.add('img-container');
            const img = document.createElement('img');
            img.src = project.image;
            img.alt = project.title;
            imgContainer.appendChild(img);
            projectElement.appendChild(imgContainer);
    
            // Add title to project element
            const title = document.createElement('h3');
            title.textContent = project.title;
            projectElement.appendChild(title);
    
            // Create links container
            const linksContainer = document.createElement('div');
            linksContainer.classList.add('links');
    
            // Create "View Code" link
            const viewCodeLink = document.createElement('a');
            viewCodeLink.href = project.codeLink;
            viewCodeLink.textContent = "View Code >>";
            viewCodeLink.classList.add('view-code');
            viewCodeLink.target = "_blank";
            linksContainer.appendChild(viewCodeLink);
    
            // Create "View App" link
            const viewAppLink = document.createElement('a');
            viewAppLink.href = project.appLink;
            viewAppLink.textContent = "View App >>";
            viewAppLink.classList.add('view-app');
            viewAppLink.target = "_blank";
            linksContainer.appendChild(viewAppLink);
    
            // Append links container to project element
            projectElement.appendChild(linksContainer);
    
            // Append project element to container
            container.appendChild(projectElement);
        });
    }
    
    // Load projects on page load
    document.addEventListener('DOMContentLoaded', loadProjects);

    function toggleMenu() {
        const navbar = document.querySelector('.navbar');
        navbar.classList.toggle('active');
    }