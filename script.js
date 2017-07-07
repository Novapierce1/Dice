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
    });
    
    Dice.prototype.reroll = function (){
            this.div.innerHTML = this.roll;
        }

    document.getElementById("reroll").addEventListener("click", function(){
        var again = 
        again.reroll(); 
    });

    document.getElementById("sumDice").addEventListener("click", function(){
       // var add = dicearray.join('+');
       // console.log(add);
       // var sum = eval(add)
       // alert(sum);
    });
});