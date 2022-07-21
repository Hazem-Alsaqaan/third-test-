// start our skills
// start information
let skillsSection = document.querySelector(".our-skills");
let progressSkills = Array.from(document.querySelectorAll(".the-prog"));
let parcentageSkills = Array.from(document.querySelectorAll(".parcentage"));
// end information

window.onscroll = function(){
    if(window.scrollY >= skillsSection.offsetTop - 100){
        progressSkills.forEach(function(span){
            span.style.width = span.dataset.parcentage;
        });
        parcentageSkills.forEach(function(text){
            text.innerHTML = text.dataset.parcentage;
        });
    }
}
// end our skills

// start slider
// start information
let images = Array.from(document.querySelectorAll(".slider-img img"));

let previuos = document.querySelector(".previuos");
let next = document.querySelector(".next");

let numberImg = images.length;
let currentImg = 1;

// end information
if (currentImg === 1){
    previuos.classList.add("disabled");
}

next.addEventListener("click", function(){
    if(next.classList.contains("disabled")){
        return false;
    }else {
        currentImg++;
        addAction();
        disabled ();
    }
});
previuos.addEventListener("click", function(){
    
    if(previuos.classList.contains("disabled")){
        return false;
    }else{
        currentImg--;
        addAction();
        disabled ();
    }
});

function disabled (){
    if (currentImg === images.length){
        next.classList.add("disabled");
    }else {
        next.classList.remove("disabled");
    }

    if (currentImg === 1){
        previuos.classList.add("disabled");
    }else {
        previuos.classList.remove("disabled");
    }

}

function addAction(){
    removeAction();
    images[currentImg - 1].classList.add("activated");
}

function removeAction(){
    images.forEach(function(photo){
        photo.classList.remove("activated");
    });
}

// end slider