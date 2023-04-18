const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: {
        preload,
        create
    }
};

const game = new Phaser.Game(config);

function preload (){
    this.load.setBaseURL('http://labs.phaser.io');

    this.load.image('sky', 'assets/skies/space3.png');
    this.load.image('logo', 'assets/sprites/phaser3-logo.png');
    this.load.image('red', 'assets/particles/red.png');
    this.load.image('asteroid', 'assets/sprites/spinObj_03.png');
}

function create (){
    this.add.image(400, 300, 'sky');
    
    const particles = this.add.particles('red');

    const emitter = particles.createEmitter({
        speed: 100,
        scale: { start: 1, end: 0 },
        blendMode: 'ADD'
    });

    const asteroid = this.physics.add.image(400, 300, 'asteroid');
    const logo = this.physics.add.image(400, 100, 'logo');
   
    asteroid.setVelocity(100, 200);
    asteroid.setBounce(1, 1);
    asteroid.setCollideWorldBounds(true)

    logo.setVelocity(100, 200);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);

    emitter.startFollow(logo);
}