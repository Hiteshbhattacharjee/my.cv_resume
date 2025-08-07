// Data for the portfolio sections
const portfolioData = {
    hero: {
        name: "John Doe",
        title: "Software Engineer | Web Developer",
        profileImg: "https://placehold.co/160x160/1a202c/e2e8f0?text=Profile",
        social: {
            github: "https://github.com",
            linkedin: "https://linkedin.com",
            email: "mailto:johndoe@example.com"
        }
    },
    about: {
        content: "Hi, I'm John Doe, a passionate software engineer with a knack for building beautiful and functional web applications. With a strong background in front-end and back-end technologies, I enjoy solving complex problems and creating intuitive user experiences. My journey started with a fascination for how things work, and it's led me to a career where I can turn ideas into reality."
    },
    projects: [
        {
            title: "E-commerce Platform",
            description: "A full-stack e-commerce application with user authentication, product management, and a secure checkout process.",
            link: "#",
            github: "#"
        },
        {
            title: "Real-time Chat App",
            description: "A real-time messaging application built with WebSockets, allowing users to communicate instantly in chat rooms.",
            link: "#",
            github: "#"
        },
        {
            title: "Personal Blog Engine",
            description: "A custom-built blog platform with a content management system (CMS) for creating and publishing posts.",
            link: "#",
            github: "#"
        },
    ],
    skills: ["JavaScript", "React", "Node.js", "Express", "Python", "Tailwind CSS", "MongoDB", "SQL", "Git", "Figma"],
    contact: {
        email: "johndoe@example.com",
        linkedin: "https://linkedin.com/in/johndoe"
    }
};

// State to track the current page
let currentPage = 'home';
let isMobileMenuOpen = false;

// DOM elements
const mainContent = document.getElementById('main-content');
const header = document.getElementById('header');
const footer = document.getElementById('footer');

// Icon helper function (uses lucide-react names)
const getIcon = (name) => {
    // This is a simple mock, as we are using Lucide's script for rendering
    const iconMap = {
        'PenTool': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pen-tool"><path d="m12 19 7-7 3 3-7 7-3-3z"/><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="m2 2 7.586 7.586"/><path d="M11 11 15 7"/></svg>`,
        'User': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
        'Briefcase': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-briefcase"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><path d="M12 12h.01"/></svg>`,
        'BookOpen': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
        'Mail': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
        'Github': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.5 0 4.3-2.3 4.3-5a4.8 4.8 0 0 0-1-3.5c1-1.3-.2-3.8.4-5.5a1 1 0 0 0-1-1c-2.3 0-4.3 1.2-5 3a1 1 0 0 0-1 1c-1.3 0-3.3 1.2-5 3-1.8 1.8-1.5 5.5.3 7 1.8 1.5 4.3 2 5 2a1 1 0 0 0 1 1v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1z"/></svg>`,
        'Linkedin': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>`,
        'ExternalLink': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14L21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>`,
        'Menu': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>`,
        'X': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`
    };
    // The lucide script will automatically render these SVGs
    return `<i data-lucide="${name.toLowerCase()}" class="lucide"></i>`;
};

// Toggle mobile menu
const toggleMobileMenu = () => {
    isMobileMenuOpen = !isMobileMenuOpen;
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
        if (isMobileMenuOpen) {
            mobileMenu.classList.add('open');
        } else {
            mobileMenu.classList.remove('open');
        }
    }
};

// Render Functions for each section
const renderHero = () => {
    return `
        <section class="hero-section">
            <div class="profile-image-container">
                <img src="${portfolioData.hero.profileImg}" alt="Profile" class="profile-image">
            </div>
            <h2 class="hero-title">${portfolioData.hero.name}</h2>
            <p class="hero-subtitle">${portfolioData.hero.title}</p>
            <div class="social-links">
                <a href="${portfolioData.hero.social.github}" target="_blank" rel="noopener noreferrer" class="social-link">
                    <i data-lucide="github" class="lucide lucide-github" width="28" height="28"></i>
                </a>
                <a href="${portfolioData.hero.social.linkedin}" target="_blank" rel="noopener noreferrer" class="social-link">
                    <i data-lucide="linkedin" class="lucide lucide-linkedin" width="28" height="28"></i>
                </a>
                <a href="${portfolioData.hero.social.email}" class="social-link">
                    <i data-lucide="mail" class="lucide lucide-mail" width="28" height="28"></i>
                </a>
            </div>
        </section>
    `;
};

const renderAbout = () => {
    return `
        <section id="about" class="section">
            <h3 class="section-title">About Me</h3>
            <p>${portfolioData.about.content}</p>
        </section>
    `;
};

const renderProjects = () => {
    const projectCards = portfolioData.projects.map(project => `
        <div class="project-card">
            <h4 class="text-xl font-semibold text-teal-300 mb-2">${project.title}</h4>
            <p class="text-slate-400 mb-4">${project.description}</p>
            <div class="project-links">
                <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="project-link">
                    <i data-lucide="external-link" class="lucide lucide-external-link" width="18" height="18"></i>
                    Live Demo
                </a>
                <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link">
                    <i data-lucide="github" class="lucide lucide-github" width="18" height="18"></i>
                    GitHub
                </a>
            </div>
        </div>
    `).join('');

    return `
        <section id="projects" class="section">
            <h3 class="section-title">Projects</h3>
            <div class="projects-grid">
                ${projectCards}
            </div>
        </section>
    `;
};

const renderSkills = () => {
    const skillBadges = portfolioData.skills.map(skill => `
        <span class="skill-badge">
            ${skill}
        </span>
    `).join('');

    return `
        <section id="skills" class="section">
            <h3 class="section-title">Skills</h3>
            <div class="skills-container">
                ${skillBadges}
            </div>
        </section>
    `;
};

const renderContact = () => {
    return `
        <section id="contact" class="section">
            <h3 class="section-title">Contact Me</h3>
            <div class="contact-links">
                <a href="mailto:${portfolioData.contact.email}" class="contact-link">
                    <i data-lucide="mail" class="lucide lucide-mail" width="24" height="24"></i>
                    ${portfolioData.contact.email}
                </a>
                <a href="${portfolioData.contact.linkedin}" target="_blank" rel="noopener noreferrer" class="contact-link">
                    <i data-lucide="linkedin" class="lucide lucide-linkedin" width="24" height="24"></i>
                    /in/johndoe
                </a>
            </div>
        </section>
    `;
};

// Main render function
const renderPage = () => {
    let contentHtml = '';
    switch (currentPage) {
        case 'home':
            contentHtml = renderHero();
            break;
        case 'about':
            contentHtml = renderAbout();
            break;
        case 'projects':
            contentHtml = renderProjects();
            break;
        case 'skills':
            contentHtml = renderSkills();
            break;
        case 'contact':
            contentHtml = renderContact();
            break;
        default:
            contentHtml = renderHero();
    }
    mainContent.innerHTML = contentHtml;
    // Rerender icons after updating the content
    lucide.createIcons();
};

// Function to render the header and footer, which don't change often
const renderStaticElements = () => {
    header.innerHTML = `
        <nav class="container">
            <h1 class="text-2xl font-bold text-teal-400">
                <a href="#" class="nav-link-btn" data-page="home">My Portfolio</a>
            </h1>
            <div class="nav-links">
                <button class="nav-link-btn" data-page="about">About</button>
                <button class="nav-link-btn" data-page="projects">Projects</button>
                <button class="nav-link-btn" data-page="skills">Skills</button>
                <button class="nav-link-btn" data-page="contact">Contact</button>
            </div>
            <button id="mobile-menu-btn" class="menu-btn">
                <i data-lucide="menu" class="lucide lucide-menu" width="28" height="28"></i>
            </button>
        </nav>
        <div id="mobile-menu">
            <div class="flex justify-end p-4 w-full">
                <button id="close-mobile-menu-btn" class="text-slate-200 focus:outline-none">
                    <i data-lucide="x" class="lucide lucide-x" width="28" height="28"></i>
                </button>
            </div>
            <div class="flex flex-col items-center justify-center space-y-8 h-full">
                <button class="mobile-nav-btn" data-page="home">
                    <i data-lucide="pen-tool" class="lucide lucide-pen-tool"></i>
                    <span>Home</span>
                </button>
                <button class="mobile-nav-btn" data-page="about">
                    <i data-lucide="user" class="lucide lucide-user"></i>
                    <span>About</span>
                </button>
                <button class="mobile-nav-btn" data-page="projects">
                    <i data-lucide="briefcase" class="lucide lucide-briefcase"></i>
                    <span>Projects</span>
                </button>
                <button class="mobile-nav-btn" data-page="skills">
                    <i data-lucide="book-open" class="lucide lucide-book-open"></i>
                    <span>Skills</span>
                </button>
                <button class="mobile-nav-btn" data-page="contact">
                    <i data-lucide="mail" class="lucide lucide-mail"></i>
                    <span>Contact</span>
                </button>
            </div>
        </div>
    `;

    footer.innerHTML = `
        <div class="container">
            <p>&copy; ${new Date().getFullYear()} John Doe. All rights reserved.</p>
        </div>
    `;

    // Add event listeners after rendering the elements
    const navLinks = document.querySelectorAll('.nav-link-btn, .mobile-nav-btn');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            const page = event.currentTarget.dataset.page;
            if (page) {
                currentPage = page;
                renderPage();
                // Close mobile menu if open
                if (isMobileMenuOpen) {
                    toggleMobileMenu();
                }
            }
        });
    });

    document.getElementById('mobile-menu-btn').addEventListener('click', toggleMobileMenu);
    document.getElementById('close-mobile-menu-btn').addEventListener('click', toggleMobileMenu);

    // Initial icon creation for header and footer
    lucide.createIcons();
};

// Initial call to render the page on load
document.addEventListener('DOMContentLoaded', () => {
    renderStaticElements();
    renderPage();
});
