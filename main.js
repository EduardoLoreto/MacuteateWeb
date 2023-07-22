const app = document.getElementById('typewriter');

const typewriter = new Typewriter(app, {
    loop: true,
    delay:75
});

typewriter
.typeString('Ciudad de Peludos Felices')
.pauseFor(200)
.start();


