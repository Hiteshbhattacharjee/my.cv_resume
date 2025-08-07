// Data for the portfolio sections
const portfolioData = {
    hero: {
        name: "Hitesh Bhattacharjee",
        title: "Blockchain Enthusiast | Full Stack Developer | Tech Leader",
        tagline: "Empowering communities through code, creativity, and leadership.",
        profileImg: "https://placehold.co/160x160/1a202c/e2e8f0?text=Profile",
        social: {
            github: "https://github.com/hitesh-bhattacharjee",
            linkedin: "https://linkedin.com/in/hitesh-bhattacharjee",
            email: "mailto:hiteshbhattacharjee###@gmail.com"
        }
    },
    about: {
        content: "I’m a driven and versatile Computer Science student with a specialization in Blockchain, currently in my third year. With a strong foundation in Web Development, DSA (C++/Java), and a growing interest in AI/ML, I have hands-on experience in leading tech and management teams, developing full-stack applications, and organizing large-scale campus events. I have worked as a Diamond Intern at CollegeTips and am serving as the General Secretary of the PDTC club at my college. Passionate about innovation, I’m building real-world solutions like Swarozgar (a blockchain-based freelancing app) and preparing for GSoC 2026 . I thrive in high-responsibility environments and aim to contribute meaningfully to technology and national service."
    },
    projects: [
        {
            title: "Swarozgar",
            description: "A blockchain-based freelancing platform.",
            technologies: ["Solidity", "React", "Web3.js", "Node.js"],
            link: "#",
            github: "#"
        },
        {
            title: "HiredNext",
            description: "A smart career accelerator platform using AI and web technologies.",
            technologies: ["React", "Python", "Scikit-learn", "Express"],
            link: "#",
            github: "#"
        },
        {
            title: "Scholarship DApp",
            description: "A peer-to-peer scholarship funding decentralized application on Ethereum.",
            technologies: ["Solidity", "Web3.js", "Ethereum"],
            link: "#",
            github: "#"
        },
        {
            title: "Gym Crowd Tracker",
            description: "A real-time gym occupancy monitor using IoT and Firebase.",
            technologies: ["IoT", "Firebase", "C++"],
            link: "#",
            github: "#"
        },
        {
            title: "Titanic Survival Predictor",
            description: "An ML project to predict Titanic survival with tabular data.",
            technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
            link: "#",
            github: "#"
        },
        {
            title: "[Upcoming] PDTC Club Management System",
            description: "A platform to manage club activities, events, and members.",
            technologies: ["MERN Stack"],
            link: "#",
            github: "#"
        },
    ],
    skills: {
        languages: ["C++", "Java", "JavaScript", "Python", "Solidity"],
        web: ["HTML", "CSS", "React", "Node.js", "MongoDB", "Express"],
        blockchain: ["Solidity", "Web3.js", "Ethereum"],
        tools: ["Git", "GitHub", "Firebase", "Postman"],
        ai_ml: ["Scikit-learn", "Pandas", "Matplotlib (basic)"],
        other: ["Leadership", "PR", "Team Management"]
    },
    achievements: [
        "General Secretary, PDTC Club",
        "Diamond Intern at CollegeTips",
        "Under25 Fellowship Recipient",
        "Interviewer for IBF Management and PR",
        "Lead Organizer for tech & music events"
    ],
    goals: [
        "Aug–Dec 2025: GSoC 2025 Contributor",
        "Dec 2025: Secure Internship in Blockchain/Web3",
       
    ],
    contact: {
        email: "hiteshbhattacharjee###@gmail.com",
        location: "India",
        resumeLink: "#" // Replace with your resume PDF link
    },
    socialLinks: {
        github: "https://github.com/hitesh-bhattacharjee",
        linkedin: "https://linkedin.com/in/hitesh-bhattacharjee",
        twitter: "#",
        leetcode: "#"
    }
};

// State to track the current page
let currentPage = 'home';
let isMobileMenuOpen = false;

// DOM elements
const mainContent = document.getElementById('main-content');
const header = document.getElementById('header');
const footer = document.getElementById('footer');

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
            <p class="text-lg text-slate-300 mb-6">${portfolioData.hero.tagline}</p>
            <div class="flex justify-center space-x-6 mb-8">
                <a href="${portfolioData.contact.resumeLink}" target="_blank" rel="noopener noreferrer" class="py-3 px-6 bg-teal-600 text-white font-semibold rounded-full shadow-lg hover:bg-teal-700 transition-colors duration-300">
                    <i data-lucide="download" class="inline-block mr-2" width="20" height="20"></i> Download Resume
                </a>
                <button class="py-3 px-6 bg-slate-700 text-slate-200 font-semibold rounded-full shadow-lg hover:bg-slate-600 transition-colors duration-300" data-page="contact">
                    <i data-lucide="mail" class="inline-block mr-2" width="20" height="20"></i> Contact Me
                </button>
            </div>
            <div class="social-links">
                <a href="${portfolioData.socialLinks.github}" target="_blank" rel="noopener noreferrer" class="social-link">
                    <i data-lucide="github" class="lucide lucide-github" width="28" height="28"></i>
                </a>
                <a href="${portfolioData.socialLinks.linkedin}" target="_blank" rel="noopener noreferrer" class="social-link">
                    <i data-lucide="linkedin" class="lucide lucide-linkedin" width="28" height="28"></i>
                </a>
                <a href="${portfolioData.socialLinks.twitter}" target="_blank" rel="noopener noreferrer" class="social-link">
                    <i data-lucide="twitter" class="lucide lucide-twitter" width="28" height="28"></i>
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
            <p class="text-slate-400 mb-2">${project.description}</p>
            <div class="project-links mt-4">
                <span class="text-sm font-semibold text-slate-300 mr-2">Tech:</span>
                ${project.technologies.map(tech => `<span class="bg-slate-600 text-white text-xs px-2 py-1 rounded-full">${tech}</span>`).join(' ')}
            </div>
            <div class="project-links mt-4">
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
    const skillCategories = Object.entries(portfolioData.skills).map(([category, skills]) => `
        <div class="skill-category">
            <h5 class="capitalize">${category.replace('_', ' ')}</h5>
            <div class="skill-list">
                ${skills.map(skill => `<span class="skill-badge">${skill}</span>`).join('')}
            </div>
        </div>
    `).join('');

    return `
        <section id="skills" class="section">
            <h3 class="section-title">Skills / Tech Stack</h3>
            <div class="skills-grid">
                ${skillCategories}
            </div>
        </section>
    `;
};

const renderAchievements = () => {
    const achievementList = portfolioData.achievements.map(item => `<li>${item}</li>`).join('');
    return `
        <section id="achievements" class="section">
            <h3 class="section-title">Achievements / Positions</h3>
            <ul class="list-container">
                ${achievementList}
            </ul>
        </section>
    `;
};

const renderGoals = () => {
    const goalList = portfolioData.goals.map(item => `<li>${item}</li>`).join('');
    return `
        <section id="goals" class="section">
            <h3 class="section-title">Goals / Timeline</h3>
            <ul class="list-container">
                ${goalList}
            </ul>
        </section>
    `;
};

const renderContact = () => {
    const socialLinks = Object.entries(portfolioData.socialLinks).map(([name, url]) => {
        const iconName = name.replace('leetcode', 'code').replace('twitter', 'x');
        return `
            <a href="${url}" target="_blank" rel="noopener noreferrer" class="contact-link">
                <i data-lucide="${iconName}" class="lucide lucide-${iconName}"></i>
                <span class="capitalize">${name}</span>
            </a>
        `;
    }).join('');

    return `
        <section id="contact" class="section">
            <h3 class="section-title">Contact Me</h3>
            <div class="contact-links">
                <a href="mailto:${portfolioData.contact.email}" class="contact-link">
                    <i data-lucide="mail" class="lucide lucide-mail"></i>
                    ${portfolioData.contact.email}
                </a>
                <a href="${portfolioData.contact.resumeLink}" class="contact-link">
                    <i data-lucide="file-text" class="lucide lucide-file-text"></i>
                    Download Resume
                </a>
                <span class="contact-link">
                    <i data-lucide="map-pin" class="lucide lucide-map-pin"></i>
                    ${portfolioData.contact.location}
                </span>
            </div>
            <h4 class="text-2xl font-bold text-teal-400 mt-8 mb-4">Social Links</h4>
            <div class="flex flex-wrap justify-center gap-4">
                ${socialLinks}
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
        case 'achievements':
            contentHtml = renderAchievements();
            break;
        case 'goals':
            contentHtml = renderGoals();
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
                <a href="#" class="nav-link-btn" data-page="home">Hitesh Bhattacharjee</a>
            </h1>
            <div class="nav-links">
                <button class="nav-link-btn" data-page="about">About</button>
                <button class="nav-link-btn" data-page="projects">Projects</button>
                <button class="nav-link-btn" data-page="skills">Skills</button>
                <button class="nav-link-btn" data-page="achievements">Achievements</button>
                <button class="nav-link-btn" data-page="goals">Goals</button>
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
                <button class="mobile-nav-btn" data-page="achievements">
                    <i data-lucide="trophy" class="lucide lucide-trophy"></i>
                    <span>Achievements</span>
                </button>
                <button class="mobile-nav-btn" data-page="goals">
                    <i data-lucide="target" class="lucide lucide-target"></i>
                    <span>Goals</span>
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
            <p>&copy; ${new Date().getFullYear()} Hitesh Bhattacharjee. All rights reserved.</p>
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
