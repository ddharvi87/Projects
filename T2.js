let y = 1
let z = 0
document.getElementById('Play Again').disabled = true;
document.getElementById('Play Again').disabled = true;
function roll(){
    var audio = new Audio('dice-142528.mp3');
    audio.play();
    let x = Math.floor(Math.random(0,1)*6+1)
    console.log(x)
    document.getElementById('dice_value').innerHTML = x
    if(x===1){
        document.getElementById('d').src='D1.png'
        }
        else if(x===2){
            document.getElementById('d').src='D2.webp'
        }
        else if(x===3){
            document.getElementById('d').src='D3.webp'
        }
        else if(x===4){
            document.getElementById('d').src='D4.webp'
        }
        else if(x===5){
            document.getElementById('d').src='D5.jpg'
        }
        else if(x===6){
            document.getElementById('d').src='D6.png'
            
        }

    if(y%2===0){
        console.log("Player 1")
       let num1= Number(document.getElementById('p1_Score').innerHTML)
        num1 = num1 + x
        document.getElementById('p1_Score').innerHTML = num1
        y = 1
        if(num1>=50){
            z=1
            document.getElementById('result').innerHTML = 'Player 1 Won'
        }
    }else{
        console.log("Player 2")
       let num2 = Number(document.getElementById('p2_Score').innerHTML)
        num2 = num2 + x
        document.getElementById('p2_Score').innerHTML = num2
        y = y+1
        if(num2 >= 50){
            z=1
        }
    }
    if(z===1){
        let num1= Number(document.getElementById('p1_Score').innerHTML)
        let num2= Number(document.getElementById('p2_Score').innerHTML)
        if(num1>num2){
            document.getElementById('result').innerHTML = 'Player 1 won'
            document.getElementById('result').className = 'alert alert-success'
            document.getElementById('roll').disabled = true
            document.getElementById('Play Again').disabled = false;
            document.getElementById('Play Again').innerHTML = 'Play Again';
            document.getElementById('Play Again').className = 'container text-center btn btn-outline-danger mt-3';
        }
        if(num2 > num1){
            document.getElementById('result').innerHTML = 'Player 2 won'
            document.getElementById('result').className = 'alert alert-success'
            document.getElementById('roll').disabled = true
            document.getElementById('Play Again').disabled = false;
            document.getElementById('Play Again').innerHTML = 'Play Again';
            document.getElementById('Play Again').className = 'container text-center btn btn-outline-danger mt-3';
        }
        addEventListener('click', function () {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
        });
    }
}
function again_it(){
    
    location.reload(true);
}