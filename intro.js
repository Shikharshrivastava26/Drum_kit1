var numbersofDrums = document.querySelectorAll(".drum").length;
for(var i=0; i<numbersofDrums; i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
   var buttonva = this.innerText;
   makeSound(buttonva);
   buttonAnimation(buttonva); 

});
}
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});
   function makeSound(buttonval) 
   {
       if (buttonval==="w"){
       var sound = new Audio("sounds/tom-1.mp3");
        sound.play();
    }
    if (buttonval==="a"){
        var sound = new Audio("sounds/tom-2.mp3");
         sound.play();
        }
    if (buttonval==="s"){
       var sound = new Audio("sounds/tom-3.mp3");
        sound.play();
    }
    if (buttonval==="d"){
       var sound = new Audio("sounds/tom-4.mp3");
        sound.play();
    }
    if (buttonval==="j"){
       var sound = new Audio("sounds/snare.mp3");
        sound.play();
    }
    if (buttonval==="k"){
       var sound = new Audio("sounds/crash.mp3");
        sound.play();
    }
    if (buttonval==="l"){
       var sound = new Audio("sounds/kick-bass.mp3");
        sound.play();
    }
}

function buttonAnimation(currentkey){
    var activec = document.querySelector("."+currentkey);
    activec.classList.add("pressed");
    setTimeout(function(){
        activec.classList.remove("pressed");},100
    )
}