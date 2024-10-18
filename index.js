
function rollDice()
{


  
  const diceResult= document.getElementById("diceResult");
  const diceImages= document.getElementById("diceImages");
  const values = [];
  const images = [];

{
   const value= Math.floor(Math.random() *38) + 1;
    values.push(value);
    images.push(`<img src="img/${value}.png" alt="Dice ${value}">`);
  }
  diceResult.textContent= `card: ${values.join(', ')}`;
  diceImages.innerHTML= images.join('');
 

}

