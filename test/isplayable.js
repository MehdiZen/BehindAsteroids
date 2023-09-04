describe('Affichage', function() {
    it('Can I start game', function(client) {
        client.url("http://127.0.0.1:8080/")
     client
        .waitForElementVisible('#c', 5000)
        // .click('#u')
        // .pause(2000)
        // .moveTo('#u', 150, 150)
        // .mouseButtonClick(0)
        // .click('#u')
        // .pause(2000)
        // .click('#u')
        // .pause(2000)
        // .click('#u')
      console.log("game Started");
    });

    it('Can I play', function(client) {  
        var alphabet = 'abcdefghijklmnopqrstuvwxyz';
        for (var i = 0; i < 26; i++) {
          var letter = alphabet[i];
            for(var j=0; j<40; j++){
               var letteri = letteri + letter;
            }
            console.log(letteri)
          client.sendKeys('body', letteri);
          if(i === 26){
            i = 0;
          }
        }
    
        client.pause(20000)
    })
})