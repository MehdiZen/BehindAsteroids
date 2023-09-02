describe('Affichage', function() {
    it('Can I start game', function(client) {
        client.url("http://localhost:8080/")
     client
        .waitForElementVisible('#c', 5000)
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