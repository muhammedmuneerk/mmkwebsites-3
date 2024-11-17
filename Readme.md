SERVICES  --->
<section id="services">
            <h2 class="section-title">Quantum Leap Services</h2>
            <div class="service-grid">
                <div class="service-card" data-service="ai-design">
                    <div class="service-content">
                        <h3>AI-Powered Design</h3>
                        <p>Harnessing artificial intelligence to create adaptive, evolving web experiences.</p>
                    </div>
                </div>
                <div class="service-card" data-service="neuro-responsive">
                    <div class="service-content">
                        <h3>Neuro-Responsive Interfaces</h3>
                        <p>Websites that adapt to your thoughts and emotions in real-time.</p>
                    </div>
                </div>
                <div class="service-card" data-service="quantum-hosting">
                    <div class="service-content">
                        <h3>Quantum Cloud Hosting</h3>
                        <p>Unlimited scalability with quantum computing infrastructure.</p>
                    </div>
                </div>
                <div class="service-card" data-service="holographic-ux">
                    <div class="service-content">
                        <h3>Holographic UX Design</h3>
                        <p>Immersive 3D holographic interfaces for unparalleled user engagement.</p>
                    </div>
                </div>
            </div>
        </section>









        // Add quantum animation classes
document.querySelectorAll('.service-card').forEach((card, index) => {
    card.classList.add('quantum-float');
    card.style.animationDelay = `${index * 0.2}s`;
});

// Quantum Particle System for Service Cards
class QuantumParticle {
    constructor(x, y, card) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.card = card;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > this.card.offsetWidth) this.speedX *= -1;
        if (this.y < 0 || this.y > this.card.offsetHeight) this.speedY *= -1;
    }

    draw(ctx) {
        ctx.fillStyle = 'rgba(0, 255, 255, 0.8)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

document.querySelectorAll('.service-card').forEach(card => {
    const canvas = document.createElement('canvas');
    canvas.width = card.offsetWidth;
    canvas.height = card.offsetHeight;
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.pointerEvents = 'none';
    card.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    const particles = [];

    for (let i = 0; i < 50; i++) {
        particles.push(new QuantumParticle(Math.random() * canvas.width, Math.random() * canvas.height, card));
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(particle => {
            particle.update();
            particle.draw(ctx);
        });
        requestAnimationFrame(animateParticles);
    }

    animateParticles();
});







