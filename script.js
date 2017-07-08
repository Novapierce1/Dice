var dicearray = [ ]
document.addEventListener('DOMContentLoaded', function(){
    var Dice = function() {
        this.roll = Math.floor(Math.random() * ((6 - 1) + 1) + 1);
        this.div = document.createElement('div');
        this.div.innerHTML = this.roll;
        document.body.appendChild(this.div);
        this.div.className = "dice";
    };

    document.getElementById("diemaker").addEventListener("click", function(){ 
       var newdie = new Dice();
       dicearray.push(newdie); 
       console.log(dicearray)    
    });
    
    Dice.prototype.reroll = function (){
            this.roll = Math.floor(Math.random() * ((6 - 1) + 1) + 1);
            this.div.innerHTML = this.roll;
        }

    document.getElementById("reroll").addEventListener("click", function(){
        dicearray.forEach(function(again){
        again.reroll();
        });
    });
    /*document.getElementById("sumDice").addEventListener("click", function(){
        });
    document.getElementsByClassName("dice").addEventListener("click", function(){
       again.reroll();
    });*/
});