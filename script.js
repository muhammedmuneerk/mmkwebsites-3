// Quantum Loader
window.addEventListener('load', () => {
    const loader = document.getElementById('quantum-loader');
    loader.style.opacity = '0';
    loader.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        loader.style.display = 'none';
    }, 500);
});

// Neural Network Animation
const canvas = document.getElementById('neural-network');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Neuron {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.connections = [];
        this.size = Math.random() * 2 + 1;
        this.speed = Math.random() * 0.5 + 0.2;
    }

    connect(neuron) {
        this.connections.push(neuron);
    }

    update() {
        this.y += Math.sin(Date.now() * 0.001 * this.speed) * 0.5;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 255, 255, 0.8)';
        ctx.fill();

        this.connections.forEach(neuron => {
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(neuron.x, neuron.y);
            ctx.strokeStyle = 'rgba(0, 255, 255, 0.2)';
            ctx.stroke();
        });
    }
}

const neurons = [];
const neuronCount = 100;

for (let i = 0; i < neuronCount; i++) {
    neurons.push(new Neuron(Math.random() * canvas.width, Math.random() * canvas.height));
}

neurons.forEach(neuron => {
    const connectionsCount = Math.floor(Math.random() * 3) + 1;
    for (let i = 0; i < connectionsCount; i++) {
        const target = neurons[Math.floor(Math.random() * neuronCount)];
        neuron.connect(target);
    }
});

function animateNeuralNetwork() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    neurons.forEach(neuron => {
        neuron.update();
        neuron.draw();
    });
    requestAnimationFrame(animateNeuralNetwork);
}

animateNeuralNetwork();

// Quantum Cursor
const cursor = document.getElementById('quantum-cursor');
const cursorTrail = document.querySelector('.cursor-trail');
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// function updateCursor() {
//     const dx = mouseX - cursorX;
//     const dy = mouseY - cursorY;
//     cursorX += dx * 0.1;
//     cursorY += dy * 0.1;
//     cursor.style.left = `${cursorX}px`;
//     cursor.style.top = `${cursorY}px`;

//     const hoverElements = document.querySelectorAll('a, button, .service-card, .project-item');
//     let isHovering = false;

//     hoverElements.forEach(el => {
//         const rect = el.getBoundingClientRect();
//         if (mouseX >= rect.left && mouseX <= rect.right && mouseY >= rect.top && mouseY <= rect.bottom) {
//             isHovering = true;
//             cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
//             cursor.style.mixBlendMode = 'difference';
//         }
//     });

//     if (!isHovering) {
//         cursor.style.transform = 'translate(-50%, -50%) scale(1)';
//         cursor.style.mixBlendMode = 'normal';
//     }

//     cursorTrail.style.left = `${mouseX}px`;
//     cursorTrail.style.top = `${mouseY}px`;

//     requestAnimationFrame(updateCursor);
// }

// updateCursor();

// Quantum Parallax Effect
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const parallaxElements = document.querySelectorAll('.quantum-float');
    
    parallaxElements.forEach((el, index) => {
        const speed = 0.1 * (index + 1);
        el.style.transform = `translateY(${scrollY * speed}px)`;
    });
});

// Advanced Project Showcase
const projects = [
    {
        name: 'Proshop',
        description: 'A full-stack e-commerce application with admin panel and PayPal integration.',
        image: 'images/screens.png',
        technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'Bootstrap'],
        github: 'https://github.com/yourusername/proshop',
        live: 'https://mmk-shop.onrender.com',
    },
    {
        name: 'Airbnb Clone',
        description: 'A full-stack Airbnb clone with modern UI and cloud image storage.',
        image: 'images/collage-airbnb.png',
        technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'Tailwind CSS', 'Cloudinary'],
        github: 'https://github.com/yourusername/airbnb-clone',
        live: 'https://mmbnb.vercel.app',
    },
    {
        name: 'Shazzz',
        description: 'A static personal portfolio website showcasing the experiences and establishments of Shazzz.',
        image: 'images/collage-shazzz-2.png',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        github: 'https://github.com/yourusername/shazzz',
        live: 'https://shazzz.onrender.com',
    },
    {
        name: 'MMKflix',
        description: 'A Netflix clone built with React and TMDB API integration.',
        image: 'images/collage-mmkflix-1.png',
        technologies: ['React', 'Node.js', 'CSS', 'TMDB API'],
        github: 'https://github.com/yourusername/netflix-clone',
        live: 'https://mmkflix.vercel.app',
    },
    {
        name: 'Nisahs',
        description: 'A modern business portfolio for a premium spice brand.',
        image: 'images/collage-nisahs-2.png',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Three.js'],
        github: 'https://github.com/yourusername/nisahs',
        live: 'https://nisahs.vercel.app',
    },
    {
        name: 'ToDo App',
        description: 'A modern todolist application.',
        image: 'images/screencapture-mmk-todoapp-vercel-app-2024-10-24-06_39_05.png',
        technologies: ['React', 'CSS'],
        github: 'https://github.com/muhammedmuneerk/mmk-todoapp',
        live: 'https://mmk-todoapp.vercel.app',
    },
    {
        name: 'AMOR WEDDINGS',
        description: `A business portfolio for a men's clothing brand. This website includes an advanced gallery`,
        image: 'images/collage-amorweddings-3.png',
        technologies: ['HTML', 'CSS', 'Javascript'],
        github: 'https://github.com/muneer2005/amorweddings',
        live: 'https://amorweddings.onrender.com',
    },
];

class QuantumProjectShowcase {
    constructor(projects) {
        this.projects = projects;
        this.currentIndex = 0;
        this.orbitEl = document.querySelector('.project-orbit');
        this.detailsEl = document.querySelector('.project-details');
        this.hologramEl = document.querySelector('.hologram-image');
        this.titleEl = document.querySelector('.project-title');
        this.descriptionEl = document.querySelector('.project-description');
        this.techEl = document.querySelector('.project-tech');
        this.githubLinkEl = document.querySelector('.github-link');
        this.liveLinkEl = document.querySelector('.live-link');
        this.prevButton = document.querySelector('.prev-button');
        this.nextButton = document.querySelector('.next-button');
        this.indicatorsEl = document.querySelector('.project-indicators');

        this.init();
    }

    init() {
        this.createProjectItems();
        this.createIndicators();
        this.positionProjects();
        this.showProjectDetails(0);
        this.addEventListeners();
    }

    createProjectItems() {
        this.projects.forEach((project, index) => {
            const projectEl = document.createElement('div');
            projectEl.classList.add('project-item');
            projectEl.innerHTML = `<img src="${project.image}" alt="${project.name}">`;
            projectEl.dataset.index = index;
            this.orbitEl.appendChild(projectEl);
        });
    }

    createIndicators() {
        this.projects.forEach((_, index) => {
            const indicator = document.createElement('div');
            indicator.classList.add('indicator');
            indicator.dataset.index = index;
            this.indicatorsEl.appendChild(indicator);
        });
    }

    positionProjects() {
        const totalProjects = this.projects.length;
        const orbitRadius = 250; // Half of the orbit width

        const centerX = 250;
        const centerY = 250;

        this.orbitEl.querySelectorAll('.project-item').forEach((item, index) => {
            const angle = (index / totalProjects) * Math.PI * 2 - Math.PI / 2;
            const x = centerX + orbitRadius * Math.cos(angle);
            const y = centerY + orbitRadius * Math.sin(angle);
            item.style.transform = `translate(${x}px, ${y}px)`;
        });
    }

    showProjectDetails(index) {
        const project = this.projects[index];
        this.hologramEl.src = project.image;
        this.titleEl.textContent = project.name;
        this.descriptionEl.textContent = project.description;
        this.techEl.innerHTML = project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('');
        this.githubLinkEl.href = project.github;
        this.liveLinkEl.href = project.live;

        this.detailsEl.style.opacity = '1';
        this.currentIndex = index;
        this.updateProjectOrbit();
        this.updateIndicators();
    }

    updateProjectOrbit() {
        const items = this.orbitEl.querySelectorAll('.project-item');
        items.forEach((item, index) => {
            const distance = (index - this.currentIndex + this.projects.length) % this.projects.length;
            const angle = (distance / this.projects.length) * Math.PI * 2 - Math.PI / 2;
            const x = 250 + 250 * Math.cos(angle);
            const y = 250 + 250 * Math.sin(angle);
            const scale = 1 - Math.min(distance, this.projects.length - distance) * 0.15;
            const zIndex = 1000 - Math.min(distance, this.projects.length - distance);
            item.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
            item.style.zIndex = zIndex;
        });
    }

    updateIndicators() {
        this.indicatorsEl.querySelectorAll('.indicator').forEach((indicator, index) => {
            indicator.classList.toggle('active', index === this.currentIndex);
        });
    }

    addEventListeners() {
        this.orbitEl.addEventListener('click', (e) => {
            const projectItem = e.target.closest('.project-item');
            if (projectItem) {
                const index = parseInt(projectItem.dataset.index);
                this.showProjectDetails(index);
            }
        });

        this.prevButton.addEventListener('click', () => this.navigate(-1));
        this.nextButton.addEventListener('click', () => this.navigate(1));

        this.indicatorsEl.addEventListener('click', (e) => {
            if (e.target.classList.contains('indicator')) {
                const index = parseInt(e.target.dataset.index);
                this.showProjectDetails(index);
            }
        });

        // Add touch events for mobile
        let startX, startY;
        this.orbitEl.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        });

        this.orbitEl.addEventListener('touchmove', (e) => {
            if (!startX || !startY) return;

            const deltaX = e.touches[0].clientX - startX;
            const deltaY = e.touches[0].clientY - startY;

            if (Math.abs(deltaX) > Math.abs(deltaY)) {
                e.preventDefault();
                this.navigate(deltaX > 0 ? -1 : 1);
            }

            startX = null;
            startY = null;
        });
    }

    navigate(direction) {
        this.currentIndex = (this.currentIndex + direction + this.projects.length) % this.projects.length;
        this.showProjectDetails(this.currentIndex);
    }
}

// Initialize the quantum project showcase
const showcase = new QuantumProjectShowcase(projects);

// Quantum button particle effect
document.querySelectorAll('.quantum-button').forEach(button => {
    const particlesContainer = button.querySelector('.button-particles');
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: white;
            border-radius: 50%;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            pointer-events: none;
            opacity: 0;
        `;
        particlesContainer.appendChild(particle);
    }

    button.addEventListener('mouseenter', () => {
        particlesContainer.querySelectorAll('div').forEach(particle => {
            particle.animate([
                {
                    opacity: 1,
                    transform: 'translate(0, 0) scale(1)',
                },
                {
                    opacity: 0,
                    transform: `translate(${(Math.random() - 0.5) * 50}px, ${(Math.random() - 0.5) * 50}px) scale(0)`,
                }
            ], {
                duration: 1000,
                easing: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
                fill: 'forwards',
            });
        });
    });
});

// Responsive design
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    showcase.positionProjects();
});

// Quantum Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const quantumObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('quantum-visible');
            quantumObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .project-item, .section-title').forEach(item => {
    item.classList.add('quantum-hidden');
    quantumObserver.observe(item);
});

// Quantum Scroll Indicator
const scrollIndicator = document.getElementById('quantum-scroll-indicator');

window.addEventListener('scroll', () => {
    const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    scrollIndicator.style.width = `${scrollPercentage}%`;
});

// Three.js Background Animation
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BufferGeometry();
const vertices = [];
const colors = [];

for (let i = 0; i < 10000; i++) {
    vertices.push(
        Math.random() * 2000 - 1000,
        Math.random() * 2000 - 1000,
        Math.random() * 2000 - 1000
    );

    colors.push(0, 1, 1); // Cyan color
}

geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

const material = new THREE.PointsMaterial({
    size: 2,
    vertexColors: true,
    blending: THREE.AdditiveBlending,
    transparent: true
});

const points = new THREE.Points(geometry, material);
scene.add(points);

camera.position.z = 1000;

function animate() {
    requestAnimationFrame(animate);

    points.rotation.x += 0.0005;
    points.rotation.y += 0.0005;

    renderer.render(scene, camera);
}

animate();

// Quantum Form Submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    
    // Simulating quantum entanglement with a delay
    const quantumDelay = Math.random() * 1000 + 500; // Random delay between 500ms and 1500ms
    
    const submitButton = this.querySelector('.btn-submit');
    submitButton.disabled = true;
    submitButton.textContent = 'Initiating Quantum Entanglement...';
    
    setTimeout(() => {
        console.log('Form submitted:', Object.fromEntries(formData));
        
        // Show a quantum success message
        const successMessage = document.createElement('div');
        successMessage.textContent = 'Quantum entanglement successful. We will connect through the multiverse soon.';
        successMessage.style.color = '#00ffff';
        successMessage.style.textAlign = 'center';
        successMessage.style.marginTop = '20px';
        
        contactForm.reset();
        contactForm.appendChild(successMessage);
        
        submitButton.disabled = false;
        submitButton.textContent = 'Initiate Contact';
        
        // Quantum fade-out effect
        setTimeout(() => {
            successMessage.style.transition = 'opacity 1s ease, transform 1s ease';
            successMessage.style.opacity = '0';
            successMessage.style.transform = 'translateY(-20px)';
            setTimeout(() => successMessage.remove(), 1000);
        }, 3000);
    }, quantumDelay);
});