// //function play(){
//     //hide the home screen..to hide the screen add the hidden class to the home section
  
//     //console.log('play start now');
//     const homeSection=document.getElementById("home-screen")
//     homeSection.classList.add('hidden')
//     //console.log(homeSection.classList);

//       //show the playground
//       const playGroundSection=document.getElementById('play-ground')
//       playGroundSection.classList.remove('hidden')
//       console.log(playGroundSection.classList)
// }


//callback function
// function handleKeyboardButtonPress(event){
//     const playerPressed=event.key;

//     console.log('player pressed', playerPressed);
//     //get the expected to press
//     const currentAlphabetElement=document.getElementById('current-alphabet');
//    currentAlphabet=currentAlphabetElement.innerText;
//    const expectedAlphabet=currentAlphabet.toLowerCase();
//    console.log(playerPressed, currentAlphabet);
//    //cheked matched or not
//    if (playerPressed===expectedAlphabet){
//        console.log('you got a point');
//        console.log('you have pressed correctly', expectedAlphabet);

//        removeBackgroundColorById(expectedAlphabet)
//        continueGame();
//    }else{
//     console.log('you missed a point');
//    }

// }
function handleKeyboardButtonPress(event){
    
    const playerPressed=event.key;
    console.log('player pressed',event.key);
//stop game
   if(playerPressed==='Escape'){
    gameOver();
   }

    const currentAlphabetElement=document.getElementById('current-alphabet');
    const currentAlphabet=currentAlphabetElement.innerText;
    const expectedElement=currentAlphabet.toLowerCase();
    //console.log('the current alphabet', currentAlphabet)
    if(playerPressed===expectedElement)
    {
        console.log('you got a point');

        const currentScore=getTextElementValueById('current-score');
        //console.log(currentScore);
        const updatedScore=currentScore+1;
        setTextElementValueById('current-score', updatedScore);

        
        //---------------------------------
        //update score
        //1.get the current score
        // const currentScoreElement=document.getElementById('current-score');
        // const currentScoreText=currentScoreElement.innerText;
        // const currentScore=parseInt(currentScoreText)
        // console.log(currentScore);
        
        // //2. increase the score by 1
        // const newscore=currentScore+1;
        // //3.show the updated score
        //currentScoreElement.innerText=newscore;

        // //start a new round

        removeBackgroundColorById(expectedElement)
        continueGame();

    }
    else{
        console.log('you mieed apoint')
  const currentlife=getTextElementValueById('current-life');
  const updateLife=currentlife-1;
  setTextElementValueById('current-life', updateLife);
  if(updateLife===0){
    gameOver();
  }else{
    
  }
        //get the current life number
//    const currentLifeElement=document.getElementById('current-life');
//    const currentLifeText=currentLifeElement.innerText;
//    const currentLife=parseInt(currentLifeText);
//    console.log(currentLife);
        //step 2;reduce the life count
//  const newLife=currentLife-1;
//  console.log(newLife);
        //display the updated life count
        // currentLifeElement.innerText=newLife;




     
    }

}
  //capture keyboard keypress 

document.addEventListener("keyup", handleKeyboardButtonPress) 

function continueGame(){
        //step 1;  generate a  random alphabet
        //
       const alphabet=getARandomAlphabet();
       console.log('your random alphabet', alphabet);


       //set randomly generated alphabet to the screen
       const currentAlphabetElement=document.getElementById('current-alphabet');
       currentAlphabetElement.innerText=alphabet;

       //set backgroundColor
       setBackgroundColorById(alphabet);
 //
}


function play(){

    //hide everything show only the playground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');
///  reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);
    continueGame()

}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
    //update final score

    //1.get the final score
    const lastScore=getTextElementValueById('current-score');
    console.log(lastScore);
    setTextElementValueById('game-score', lastScore)
    //clear the last selected alphabet highlight
    const lastAlphabet=getElementTextById('current-alphabet');
    //console.log(lastAlphabet)
    removeBackgroundColorById(lastAlphabet);
}
