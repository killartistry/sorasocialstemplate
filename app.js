window.addEventListener('DOMContentLoaded', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in';

    var canvas = document.createElement('canvas');
    canvas.id = 'particle-background';
    Object.assign(canvas.style, {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        zIndex: '-1',
        pointerEvents: 'none'
    });
    document.body.appendChild(canvas);
    var cfx = canvas.getContext('2d');
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    var box = document.createElement('div');
    box.id = 'box';
    Object.assign(box.style, {
        position: 'fixed',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '400px',
        maxWidth: '90vw',
        maxHeight: '90vh',
        backgroundColor: 'black',
        border: '2px solid white',
        borderRadius: '12px',
        padding: '16px',
        textAlign: 'center',
        boxShadow: '0 12px 24px rgba(0,0,0,0.5)',
        overflowY: 'auto',
        zIndex: '10'
    });
    document.body.prepend(box);
    function makeParticle() {
        return {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 3 + 1,
            speedX: (Math.random() - 0.5) * 2,
            speedY: (Math.random() - 0.5) * 2
        };
    }
    var particles = [];
    for (var i = 0; i < 100; i++) particles.push(makeParticle());

    function animate() {
        cfx.clearRect(0, 0, canvas.width, canvas.height);
        for (var i = 0; i < particles.length; i++) {
            var p = particles[i];
            p.x += p.speedX;
            p.y += p.speedY;
            if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
            if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
            cfx.beginPath();
            cfx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            cfx.fillStyle = 'rgba(255,255,255,0.7)';
            cfx.fill();
        }
        requestAnimationFrame(animate);
    }
    animate();
    var audio = document.createElement('audio');
    audio.src = 'website%20song.mp3';
    audio.loop = true;
    audio.volume = 0.01;
    document.addEventListener('click', function startAudio() {
        audio.play();
        document.removeEventListener('click', startAudio);
        console.log('Audio started after user interaction');
    });

    var card = document.querySelector('.card');
    if (card) {
        box.appendChild(card);
        Object.assign(card.style, {
            position: 'relative',
            margin: '0 auto',
            width: '100%',
            maxWidth: '360px',
            textAlign: 'center'
        });
    }

    function addHoverEffect(link) {
        link.style.transition = 'color 0.2s ease';
        link.addEventListener('mouseover', function() {
            link.style.color = 'blue';
        });
        link.addEventListener('mouseout', function() {
            link.style.color = '';
        });
    }

    var links = document.querySelectorAll('.card a');
    for (var i = 0; i < links.length; i++) {
        addHoverEffect(links[i]);
    }

    function updateLayout() {
        if (window.innerWidth <= 520) {
            box.style.width = '90vw';
            box.style.padding = '12px';
            if (card) card.style.maxWidth = '100%';
        } else {
            box.style.width = '400px';
            box.style.padding = '16px';
            if (card) card.style.maxWidth = '360px';
        }
    }

    window.addEventListener('resize', function() {
        resizeCanvas();
        updateLayout();
    });
    updateLayout();

    document.body.style.opacity = '1';
});

window.addEventListener('load', function() {
    console.log('webpage has loaded');
    console.log('audio is playing in the background double log incase the first one fails');
    const img = document.querySelector('.avatar');
    if (img) {
        img.style.width = '200px';
        img.style.border = '1px solid white';
        img.style.opacity = '0.5';
        img.style.transition = 'opacity 1.0s ease';
        img.addEventListener('mouseover', function() {
            img.style.opacity = '1.0';
        });
        img.addEventListener('mouseout', function() {
            img.style.opacity = '0.5';
        });
    }
});