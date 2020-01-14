function startGame() {
    let wallet = document.getElementById("betAmount").value;
    wallet=parseInt(wallet);
    
    if (wallet <= 0){
        document.getElementById("gameResults").innerText = "please put in a value greater than 0";
    }
    else {
        document.getElementById("playButton").innerText = "Click to play again";
       
        let temp;
        let initial = wallet;
        let maxi = [1,wallet];
        let turn = 0;
        while (wallet > 0) {
            
            turn +=1;
            
            temp = rollDice();
            if (temp == 7){
                wallet += 4;
            }
            else {
                wallet += -1;
            }

            if (wallet > maxi[1]){
                maxi=[turn,wallet]
            }
            
            

        }
 
        temp = "<tbody><tr><th>starting bet</th><td>$foo</td></tr>".replace("$foo", initial);
        temp += "<tr><th >total rolls before broke</th><td>$foo</td></tr>".replace("$foo", turn);
        temp += "<tr><th>Highest amount won</th><td>$foo</td></tr>".replace("$foo", maxi[1]);
        temp += "<tr><th>Roll count at highest</th><td>$foo</td></tr></tbody>".replace("$foo", maxi[0]);
        temp = "<table class='table' id='ResultsTable'>"+ temp + "</table>";

        document.getElementById("gameResults").innerHTML = temp;
    }
    
}

function rollDice(){
    let temp = Math.floor(Math.random() * 6) + 1;
    let val=temp;
    
    
    temp = Math.floor(Math.random() * 6) + 1;
    
    val += temp;
    return val;
}