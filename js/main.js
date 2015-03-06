var game;
window.onload = function () {
    game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
    
    var inputHandler;
        
    function preload() {
        game.load.image('mainBG', 'assets/mainBG.png');
        
        inputHandler = new InputHandler();
    }
    
    function create() {
        game.add.sprite(0, 0, 'mainBG');
        
    }

    function update() {
        inputHandler.drawCmd();
    }
}