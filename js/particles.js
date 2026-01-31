// NEO GLOW - Spider Web Particle Network Effect
// Interactive connecting particles with spider web style

class SpiderWebNetwork {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.mouse = { x: null, y: null, radius: 180 };
        this.particleCount = 100;
        this.connectionDistance = 150;
        this.colors = {
            particle: '#00fff7',
            line: 'rgba(0, 255, 247, 0.15)',
            lineHover: 'rgba(255, 0, 255, 0.4)'
        };

        this.init();
        this.setupEvents();
        this.animate();
    }

    init() {
        this.resize();
        this.createParticles();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticles() {
        this.particles = [];
        const colors = ['#00fff7', '#ff00ff', '#8b5cf6', '#00ff88'];

        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.8,
                vy: (Math.random() - 0.5) * 0.8,
                baseVx: (Math.random() - 0.5) * 0.8,
                baseVy: (Math.random() - 0.5) * 0.8,
                radius: Math.random() * 2 + 1.5,
                color: colors[Math.floor(Math.random() * colors.length)],
                pulseOffset: Math.random() * Math.PI * 2
            });
        }
    }

    setupEvents() {
        window.addEventListener('resize', () => {
            this.resize();
            this.createParticles();
        });

        // Track mouse position
        document.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });

        document.addEventListener('mouseleave', () => {
            this.mouse.x = null;
            this.mouse.y = null;
        });

        // Click burst effect
        document.addEventListener('click', (e) => {
            this.burst(e.clientX, e.clientY);
        });

        // Touch support
        document.addEventListener('touchstart', (e) => {
            if (e.touches.length > 0) {
                this.burst(e.touches[0].clientX, e.touches[0].clientY);
            }
        });
    }

    burst(x, y) {
        const burstRadius = 250;
        const burstForce = 12;

        this.particles.forEach(p => {
            const dx = p.x - x;
            const dy = p.y - y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < burstRadius && dist > 0) {
                const force = (burstRadius - dist) / burstRadius * burstForce;
                const angle = Math.atan2(dy, dx);
                p.vx += Math.cos(angle) * force;
                p.vy += Math.sin(angle) * force;
            }
        });
    }

    update() {
        const time = Date.now() * 0.001;

        this.particles.forEach(p => {
            // Pulse effect
            p.displayRadius = p.radius + Math.sin(time * 2 + p.pulseOffset) * 0.5;

            // Apply velocity
            p.x += p.vx;
            p.y += p.vy;

            // Return to base velocity (smooth damping)
            p.vx += (p.baseVx - p.vx) * 0.02;
            p.vy += (p.baseVy - p.vy) * 0.02;

            // Friction
            p.vx *= 0.995;
            p.vy *= 0.995;

            // Wrap around edges (seamless)
            if (p.x < -10) p.x = this.canvas.width + 10;
            if (p.x > this.canvas.width + 10) p.x = -10;
            if (p.y < -10) p.y = this.canvas.height + 10;
            if (p.y > this.canvas.height + 10) p.y = -10;

            // Mouse interaction - particles are attracted slightly and repelled when close
            if (this.mouse.x !== null) {
                const dx = p.x - this.mouse.x;
                const dy = p.y - this.mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < this.mouse.radius && dist > 0) {
                    // Repel when too close
                    const force = (this.mouse.radius - dist) / this.mouse.radius * 2;
                    p.vx += (dx / dist) * force * 0.3;
                    p.vy += (dy / dist) * force * 0.3;
                }
            }
        });
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw connections (spider web lines)
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const p1 = this.particles[i];
                const p2 = this.particles[j];
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < this.connectionDistance) {
                    const opacity = (1 - dist / this.connectionDistance);

                    // Check if near mouse for highlight effect
                    let isNearMouse = false;
                    if (this.mouse.x !== null) {
                        const midX = (p1.x + p2.x) / 2;
                        const midY = (p1.y + p2.y) / 2;
                        const mouseDist = Math.sqrt(
                            Math.pow(midX - this.mouse.x, 2) +
                            Math.pow(midY - this.mouse.y, 2)
                        );
                        isNearMouse = mouseDist < 100;
                    }

                    this.ctx.beginPath();
                    if (isNearMouse) {
                        this.ctx.strokeStyle = `rgba(255, 0, 255, ${opacity * 0.6})`;
                        this.ctx.lineWidth = 1.5;
                    } else {
                        this.ctx.strokeStyle = `rgba(0, 255, 247, ${opacity * 0.25})`;
                        this.ctx.lineWidth = 1;
                    }
                    this.ctx.moveTo(p1.x, p1.y);
                    this.ctx.lineTo(p2.x, p2.y);
                    this.ctx.stroke();
                }
            }

            // Connect to mouse if close
            if (this.mouse.x !== null) {
                const p = this.particles[i];
                const dx = p.x - this.mouse.x;
                const dy = p.y - this.mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < this.mouse.radius) {
                    const opacity = (1 - dist / this.mouse.radius);
                    this.ctx.beginPath();
                    this.ctx.strokeStyle = `rgba(139, 92, 246, ${opacity * 0.5})`;
                    this.ctx.lineWidth = 1;
                    this.ctx.moveTo(p.x, p.y);
                    this.ctx.lineTo(this.mouse.x, this.mouse.y);
                    this.ctx.stroke();
                }
            }
        }

        // Draw particles with glow
        this.particles.forEach(p => {
            // Outer glow
            const gradient = this.ctx.createRadialGradient(
                p.x, p.y, 0,
                p.x, p.y, p.displayRadius * 4
            );
            gradient.addColorStop(0, p.color);
            gradient.addColorStop(1, 'transparent');

            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.displayRadius * 4, 0, Math.PI * 2);
            this.ctx.fillStyle = gradient;
            this.ctx.globalAlpha = 0.3;
            this.ctx.fill();
            this.ctx.globalAlpha = 1;

            // Core particle
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.displayRadius, 0, Math.PI * 2);
            this.ctx.fillStyle = p.color;
            this.ctx.fill();
        });
    }

    animate() {
        this.update();
        this.draw();
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Create canvas
    const canvas = document.createElement('canvas');
    canvas.id = 'spider-web-network';
    canvas.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;
    opacity: 0.8;
  `;
    document.body.insertBefore(canvas, document.body.firstChild);

    // Initialize spider web network
    new SpiderWebNetwork(canvas);
});
