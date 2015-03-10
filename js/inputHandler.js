// Defines an input handler
// May or may not have multiple handler instances
//  one for each sub window or command line
function InputHandler()
{
    this.inputString = "";
        
    // Callback function for any keyboard press
    // char = actual value of the key pressed
    this.charKeyPress = function(char)
    {
        // add letters to input string
        if (this.inputString == undefined)
            this.inputString = char;
        else 
            this.inputString += char;
    }
    
    // Takes the context of the enter key, and passes to appropriate command controller
    this.hitReturn = function()
    {
        // something like:
        //gameState.inputContext.cmd(this.inputString);
        
        this.inputString = "";
    }
    
    this.hitSpace = function()
    {
        this.inputString += " ";
    }
    
    this.hitBack = function()
    {
        var newString = this.inputString.substring(0, this.inputString.length-1);
        this.inputString = newString;
    }
    
    this.drawCmdLine = function()
    {
        text.setText(this.inputString);
    }
    
    // main keyboard input binding:
    game.input.keyboard.addCallbacks(this, null, null, this.charKeyPress);
    
    // Override keys
    var spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    spaceKey.onDown.add(this.hitSpace, this);
    var enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    enterKey.onDown.add(this.hitReturn, this);
    var backKey = game.input.keyboard.addKey(Phaser.Keyboard.BACKSPACE);
    backKey.onDown.add(this.hitBack, this);
    
    // TODO override these keys for cursor manipulation
    var upKey;
    var downKey;
    var rightKey;
    var leftKey;
    
    // text block gets drawn automatically, just update this object
    var text = game.add.text(100, 200, this.inputString, {
            font: "65px Arial",
            fill: "#ff0044",
    });
}

describe("The input handler", function() {
    it("logs string sequences");
    it("allows for backspaces");
    it("ignores inapplicable keys");
    it("fires hotkey events (enter, etc)");
});