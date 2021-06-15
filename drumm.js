// Detected press button
for (var i=0; i < document.querySelectorAll('.drum').length; i++){

    document.querySelectorAll('.drum')[i].addEventListener ('click', handleClick);//not adding perentesis for waiting the click event to be happen. 
    //must use query selector all in order to read through all of the drum button 
        
        
    function handleClick(){
        var buttonInnerHTML = this.innerHTML; //local parameter -- variable always in function
            fireSound(buttonInnerHTML);
            buttonAnimation(buttonInnerHTML);
        }



}

//Detect the keyboard press
document.addEventListener("keydown", function(event){// add document to hear along the webpage 
    //passing same parameter since it happens in the same time
    fireSound(event.key)//once
    buttonAnimation(event.key);
});

function fireSound(key){
    switch (key) { // things that we wann switch ON
        case "w": 
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
            console.log(innerButtonHTML);
            break;
    }
}

//need a parameter to pass in using currentKey as parameter
function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){activeButton.classList.remove("pressed")},150);

}
