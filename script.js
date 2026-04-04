// 1. Trainer Certifications Data
const trainerCertifications = [
    "PMI Certified Project Management Professional (PMP)",
    "Scrum.org Certified Professional Scrum Master (PSM)",
    "Google Certified Associate Cloud Engineer",
    "Google Certified Professional Data Engineer",
    "Agile Transformation & Coaching Specialist",
    "Expert in Java-based Test Automation (Selenium/API)"
];

// 2. Comprehensive Course Data
const courses = [
    { 
        title: "Manual Testing", 
        icon: "fas fa-clipboard-check", 
        desc: "Master the SDLC, Test Planning, and Defect Management.", 
        content: [
            { module: "Module 1: QA Fundamentals", topics: ["SDLC & STLC Models", "Principles of Testing", "Test Scenarios vs Test Cases"] },
            { module: "Module 2: Test Management", topics: ["Test Plan Documentation", "RTM Construction", "Defect Life Cycle in Jira"] }
        ]
    },
    { 
        title: "SQL for Testers", 
        icon: "fas fa-database", 
        desc: "Database validation and complex query building for QA.", 
        content: [
            { module: "Module 1: SQL Basics", topics: ["DML/DDL Commands", "SELECT, WHERE, ORDER BY"] },
            { module: "Module 2: Advanced Joins", topics: ["Inner/Outer Joins", "Aggregations", "Subqueries for Validation"] }
        ]
    },
  { 
    title: "Java for Automation / SDET", 
    icon: "fab fa-java", 
    desc: "Comprehensive Java programming tailored for building robust test automation engines.", 
    content: [
        { 
            module: "Module 1: Java Basics & Flow Control", 
            topics: ["Variables & Data Types", "Operators & Expressions", "Control Statements (If-Else, Switch)", "Loops (For, While, Do-While)"] 
        },
        { 
            module: "Module 2: Object-Oriented Programming (OOPS)", 
            topics: ["Classes & Objects", "Inheritance & Polymorphism", "Abstraction (Interfaces & Abstract Classes)", "Encapsulation & Access Modifiers"] 
        },
        { 
            module: "Module 3: Advanced Java for SDET", 
            topics: ["String & Array Handling", "Collections Framework (List, Set, Map)", "Exception Handling (Try-Catch, Finally)", "File I/O & Property Files"] 
        },
        { 
            module: "Module 4: Build Tools & Version Control", 
            topics: ["Maven Fundamentals", "POM.xml Configuration", "Git/GitHub for Testers"] 
        }
    ]
},
    { 
    title: "Selenium WebDriver Mastery", 
    icon: "fas fa-robot", 
    desc: "Master the industry-leading tool for web UI automation and browser synchronization.", 
    content: [
        { 
            module: "Module 1: Selenium Architecture & Setup", 
            topics: ["How Selenium Works", "WebDriver Interface", "Browser Driver Configurations"] 
        },
        { 
            module: "Module 2: Locating Strategies", 
            topics: ["Advanced XPath (Axes, Siblings)", "CSS Selectors", "Handling Dynamic IDs", "Shadow DOM Basics"] 
        },
        { 
            module: "Module 3: Web Component Interaction", 
            topics: ["Handling Dropdowns & Alerts", "iFrames & Multiple Windows", "Actions Class (Mouse Hover, Drag & Drop)", "JavaScript Executor"] 
        },
        { 
            module: "Module 4: Synchronization & Execution", 
            topics: ["Implicit, Explicit & Fluent Waits", "TestNG Annotations & Assertions", "Parallel Execution Strategy"] 
        }
    ]
},
    { 
    title: "API Testing with Postman", 
    icon: "fas fa-rocket", 
    desc: "Master API validation, environment management, and automated collections.", 
    content: [
        { 
            module: "Module 1: API Fundamentals", 
            topics: ["HTTP Methods (GET, POST, PUT, DELETE)", "Status Codes & Headers", "JSON/XML Payloads"] 
        },
        { 
            module: "Module 2: Postman Essentials", 
            topics: ["Collections & Folders", "Environment vs Global Variables", "Query & Path Parameters"] 
        },
        { 
            module: "Module 3: Scripting & Automation", 
            topics: ["Writing Tests in JavaScript", "Pre-request Scripts", "Newman CLI Integration"] 
        }
    ]
},
    { 
    title: "Rest Assured Automation", 
    icon: "fas fa-laptop-code", 
    desc: "Build powerful Java-based automation frameworks for RESTful services.", 
    content: [
        { 
            module: "Module 1: Getting Started", 
            topics: ["Rest Assured Dependency Setup", "Given/When/Then Gherkin Style", "Static Imports"] 
        },
        { 
            module: "Module 2: Advanced Validation", 
            topics: ["Hamcrest Matchers", "JSON Path & XML Path", "Response Time & Header Validation"] 
        },
        { 
            module: "Module 3: Optimization", 
            topics: ["POJO Deserialization (Jackson/Gson)", "Request & Response Specifications", "Authentication (OAuth2/Bearer Tokens)"] 
        }
    ]
},
    { 
        title: "Playwright", 
        icon: "fas fa-vial", 
        desc: "Fast and reliable end-to-end testing for modern web apps.", 
        content: [
            { module: "Module 1: Setup", topics: ["Node.js Installation", "Playwright Config", "Codegen Tools"] },
            { module: "Module 2: Execution", topics: ["Auto-waiting", "Trace Viewer", "Parallel Execution"] }
        ]
    },
    { 
        title: "Gatling", 
        icon: "fas fa-tachometer-alt", 
        desc: "High-performance Load and Stress testing.", 
        content: [
            { module: "Module 1: Performance Concepts", topics: ["Load vs Stress vs Spike", "Gatling DSL basics"] },
            { module: "Module 2: Reporting", topics: ["Simulation Scripts", "Interpreting HTML Reports"] }
        ]
    },
    { 
        title: "Framework Section", 
        icon: "fas fa-layer-group", 
        desc: "Design Hybrid, Data-driven, and Page Object Models.", 
        content: [
            { module: "Module 1: Design Patterns", topics: ["Page Object Model (POM)", "Factory Pattern", "Singleton Design"] },
            { module: "Module 2: Integration", topics: ["Maven/Gradle", "TestNG/JUnit", "Extent Reports"] }
        ]
    },
    { 
        title: "Cucumber BDD", 
        icon: "fas fa-leaf", 
        desc: "Bridge the gap between business and technical teams.", 
        content: [
            { module: "Module 1: Gherkin Syntax", topics: ["Feature Files", "Scenario Outlines", "Step Definitions"] }
        ]
    },
    { 
        title: "Agile & Scrum", 
        icon: "fas fa-sync", 
        desc: "Master Scrum ceremonies and Agile coaching.", 
        content: [
            { module: "Module 1: Agile Frameworks", topics: ["Scrum vs Kanban vs SAFe", "Scrum Roles (SM/PO/Dev)"] },
            { module: "Module 2: Ceremonies", topics: ["Sprint Planning", "Daily Standups", "Retrospectives"] }
        ]
    },
    { 
        title: "Project Management", 
        icon: "fas fa-project-diagram", 
        desc: "Portfolio execution and risk management strategies.", 
        content: [
            { module: "Module 1: Governance", topics: ["Dependency Matrix", "Capacity Planning", "Risk Mitigation"] }
        ]
    },
    { 
        title: "Jira & Confluence", 
        icon: "fas fa-thumbtack", 
        desc: "Enterprise tooling for tracking and documentation.", 
        content: [
            { module: "Module 1: Jira Workflow", topics: ["Creating Stories", "Sprint Boards", "JQL Queries"] }
        ]
    }
];

// 3. Dynamic Rendering Functions
document.addEventListener('DOMContentLoaded', () => {
    renderCertifications();
    renderCourses();
});

function renderCertifications() {
    const list = document.getElementById('cert-list');
    trainerCertifications.forEach(cert => {
        const li = document.createElement('li');
        li.textContent = cert;
        list.appendChild(li);
    });
}

function renderCourses() {
    const container = document.getElementById('course-container');
    courses.forEach((course, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <i class="${course.icon}"></i>
            <h3>${course.title}</h3>
            <p>${course.desc}</p>
            <span style="color:#3498db; font-size: 0.8rem; font-weight:bold;">CLICK TO VIEW SYLLABUS</span>
        `;
        card.onclick = () => openCourseModal(index);
        container.appendChild(card);
    });
}

// 4. Modal & Accordion Logic
const modal = document.getElementById('course-modal');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.querySelector('.close');

function openCourseModal(index) {
    const course = courses[index];
    let html = `<h2 style="text-align:left; margin-top:0;">${course.title} Syllabus</h2>
                <p style="color:#666; margin-bottom:20px;">100% Online Instructor-Led Training</p>`;
    
    course.content.forEach(m => {
        html += `
            <button class="accordion">${m.module}</button>
            <div class="panel">
                <ul style="padding-left:20px; margin:10px 0;">
                    ${m.topics.map(t => `<li style="margin-bottom:5px;">${t}</li>`).join('')}
                </ul>
            </div>
        `;
    });

    modalBody.innerHTML = html;
    modal.style.display = "block";

    // Accordion click logic
    const acc = document.getElementsByClassName("accordion");
    for (let i = 0; i < acc.length; i++) {
        acc[i].onclick = function() {
            this.classList.toggle("active");
            let panel = this.nextElementSibling;
            panel.style.display = (panel.style.display === "block") ? "none" : "block";
        };
    }
}

closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; };
