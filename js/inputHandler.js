function InputHandler()
{
    // main keyboard input binding:
    game.input.keyboard.addCallbacks(this, null, null, this.charKeyPress);
        
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
        
        console.log(this.inputString);
    }
    
    // Takes the context of the enter key, and passes to appropriate command controller
    this.hitReturn = function()
    {
        // something like:
        //gameState.inputContext.cmd(this.inputString);
        
        this.inputString = "";
    }
    
    this.drawCmd = function()
    {
        //console.log(this.inputString);
    }
    
    enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    enterKey.onDown.add(this.hitReturn, this);
}

describe("The input handler", function() {
    it("logs string sequences");
    it("allows for backspaces");
    it("ignores inapplicable keys");
    it("fires hotkey events (enter, etc)");
});