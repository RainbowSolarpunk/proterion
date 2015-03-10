var game;
var bmd;
window.onload = function () {
    game = new Phaser.Game(1200, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
    
    var inputHandler;
        
    // Function for preloading all assets
    function preload() {
        game.load.image('mainBG', 'assets/mainBG.png');
        
        console.log("ok");
    }
    
    // Equivalent to init()
    function create() {
        // TODO: Try loading game
        
        // Initial visuals
        var bg = game.add.sprite(0, 0, 'mainBG');
        bg.height = game.height;
        bg.width = game.width;
        
        // Begin keyboard bindings
        // TODO: tie input handlers to command windows
        inputHandler = new InputHandler();
        
        // start at full screen
        // TODO: add button to exit fullscreen
        game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
        // TODO: enter fullscreen on start
        //game.scale.startFullScreen(false);
    }

    // Main update loop
    function update() {
        inputHandler.drawCmdLine();
    }
}