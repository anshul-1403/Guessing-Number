let randomNumber=Math.floor(Math.random() * 100) + 1;
let attempts=0;
function checkGuess() 
{
    const guessInput=document.getElementById("guessInput").value;
    const message=document.getElementById("message");
    const guess=parseInt(guessInput,10);
    attempts++;
    if (isNaN(guess)) 
    {
        message.textContent="Please enter a valid number.";
        return;
    }
    if (guess<1 || guess>100) 
    {
        message.textContent="Your guess must be between 1 and 100.";
        return;
    }

    if (guess === randomNumber)
    {
        message.textContent=`Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`;
        message.style.color="green";
        resetGame();
    } 
    else if (guess<randomNumber) 
    {
        if((randomNumber-guess)>=30)
        {    
            message.textContent = "Too Low!";
            message.style.color = "red";
        }
        else
        {
            message.textContent = "A little Low!";
            message.style.color = "red";
        }
    } 
    else 
    {
        if((guess-randomNumber)>=30)
        {    
            message.textContent = "Too High!";
            message.style.color = "red";
        }
        else
        {
            message.textContent = "A Little High!";
            message.style.color = "red";
        }
    }
}

function resetGame() 
{
    setTimeout(()=> 
    {
        randomNumber=Math.floor(Math.random()*100)+1;
        attempts = 0;
        document.getElementById("guessInput").value = "";
        document.getElementById("message").textContent = "";
    }, 5000);
}
