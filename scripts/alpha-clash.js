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
function continueGame(){
        //step 1;  generate a  random alphabet
        //
       const alphabet=getARandomAlphabet();
       console.log('your random alphabet', alphabet);


       //set randomly generated alphabet to the screen
       const currentAlphabetElement=document.getElementById('current-alphabet');
       currentAlphabetElement.innerText=alphabet;

}


function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame()

}