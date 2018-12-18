// Section 0 var
var section0 = document.getElementById('section0'),
    countdown0 = document.getElementById('count0'),
    startPageButton = document.getElementById('start-page'),
    autoCounter0 = 0,
    bgMusic = document.getElementById('bg-music0');

// Section 1 var
var section1 = document.getElementById('section1'),
    welcomeString = "Let me tell you a story about a boy called ...",
    harryName = "Harry Potter",
    typeWriter = document.getElementById('type'),
    welcome = document.getElementById('welcome'),
    harry = document.getElementById('harry'),
    startButton = document.getElementById('start'),
    counter = 0,
    autoWrite = 0;

// Section 2 var
var section2 = document.getElementById('section2'),
    alertMessage = "Attention: please read the story well, there will be a little quiz after the story ends, good luck....",
    alert = document.getElementById('alert'),
    countdown1 = document.getElementById('count1'),
    clickMusic = document.getElementById('click'),
    autoCounter1;

// Section 3 var
var section3 = document.getElementById('section3'),
    sliderImages = document.querySelectorAll('.auto-slide'),
    dots = document.querySelectorAll('.dot'),
    arrowLeft = document.querySelector('#arrow-left'),
    arrowRight = document.querySelector('#arrow-right'),
    quiz = document.getElementById('start-quiz'),
    currentImage = 0,
    autoSliding = 0,
    storyTeller = 0,
    storyCounter = 0,
    storySlide,
    stories = [ "He was called ...",
                "Hermeony and Roon were the best friends of him and they start the story together and finish it together.",
                "Hogwarts was his 1 3/4 home(second home in our language) and it was attacked and destroyed as you see :(",
                '"The hat said: GRYFFINDOR" it was a magical moment for all of us :)',
                "And then he got his new broomstick and start learning to fly with it and become a master in just one day...",
                "The only one who i was sad when he died ... R.I.P Dobby",
                "Everyone in Hogwarts were fighting to kill Voldemort...",
                "And finally...Harry and Voldemort were fighting each other. And Harry wins ;)."],
    storiesSlides = ['story-1','story-2','story-3','story-4',
                     'story-5','story-6','story-7','story-8'];
//-------------------------------------------------------------------------------------------------

// Start Section 0 functions
section1.style.display = 'none';
startPageButton.addEventListener('click', function(){
    autoCounter0 = setInterval(countDown0, 1000);
    playStartMusic();
    countdown0.style.setProperty('animation-name', 'numberFadeOut');
});

function playStartMusic(){
    
    bgMusic.play();
    bgMusic.volume = 0.1;
}


// playStartMusic();

function countDown0(){
    if (countdown0.innerHTML == 0){
        clearInterval(autoCounter0);
        section0.style.setProperty('animation-name', 'fadeOut');
        autoWrite = setInterval(startPage, 100);
        section0.style.display = 'none';
        section1.style.display = 'block';
        playMusic();
        welcome.setAttribute('data-after', '|');
    }
    else{
        countdown0.innerHTML -= 1;
    }
}
// End Section 0 functions

// Start Section 1 functions
function playMusic(){
    typeWriter.play();
    typeWriter.loop = true;
    typeWriter.volume = 0.4;
}


function startPage(){
    if (counter == welcomeString.length){
        clearInterval(autoWrite);
        counter = 0;
        autoWrite = setInterval(harryNameWriter, 90);
        welcome.setAttribute('data-after', '');
        harry.setAttribute('data-after', '|');
    }
    else{
        welcome.innerHTML += welcomeString[counter];
        counter++;
    }
}

function harryNameWriter(){
    if (counter == harryName.length){
        clearInterval(autoWrite);
        counter = 0;
        typeWriter.load();
        startButton.style.setProperty('opacity', '1');
        startButton.style.setProperty('pointer-events', 'all');
        startButton.style.setProperty('cursor', 'pointer');
    }
    else{
        harry.innerHTML += harryName[counter];
        counter++;
    }
}

startButton.addEventListener('click', function(){
    clickMusic.volume = 0.2;
    clickMusic.play();
    section1.style.setProperty('animation-name', 'fadeOut');
    section2.style.setProperty('animation-name', 'fadeIn');
    section2.style.display = 'block';
    autoWrite = setInterval(alertMessageWriter, 90);
    autoCounter1 = setInterval(countDown1, 1000);
    typeWriter.play();
});
// End Section 1 functions


// Start Section 2 functions
function alertMessageWriter(){
    if (counter == alertMessage.length){
        clearInterval(autoWrite);
        typeWriter.pause();
        typeWriter.load();
    }
    else{
        alert.innerHTML += alertMessage[counter];
        counter++;
    }
}

function countDown1(){
    if (countdown1.innerHTML == 0){
        clearInterval(autoCounter1);
        section3.style.display = 'block';
        section2.style.setProperty('animation-name', 'fadeOut');
        startSlide();
        autoSliding = setInterval(autoSlider, (stories[currentImage].length + 30) * 100);
    }
    else{
        countdown1.innerHTML -= 1;
    }
}
// End Section 2 functions



// Start Section 3 functions

function storyAutoWriter(){
    storySlide = document.getElementById(storiesSlides[currentImage]);
    if (storyCounter == stories[currentImage].length){
        clearInterval(storyTeller);
        storyCounter = 0;
        typeWriter.pause();
        typeWriter.load();
    }
    else{
        storySlide.innerHTML += stories[currentImage][storyCounter];
        storyCounter++;
    }
}

// Init slider
function startSlide() {
    bgMusic = document.getElementById('bg-music');
    bgMusic.play();
    bgMusic.loop = true;
    bgMusic.volume = 0.05;
    for(var i = 0; i < sliderImages.length; i++){
        sliderImages[i].style.transform = 'translateX(100%)';
        dots[i].className = 'dot';
    }
    sliderImages[0].style.transform = 'translateX(0%)';
    dots[0].className += ' active';
    arrowLeft.style.display = 'none';
    storyTeller = setInterval(storyAutoWriter, 100);
    typeWriter.play();
}

function clearDots(){
    for(var i = 0; i < dots.length; i++){
        dots[i].className = 'dot';
    }
}


// Left arrow click
arrowLeft.addEventListener('click', function(){
    // quiz.style.display = 'none';
    quiz.style.setProperty('opacity', '0');
    quiz.style.setProperty('pointer-events', 'none');
    quiz.style.setProperty('cursor', 'pointer');
    arrowRight.style.display = 'inline-block';
    if(currentImage <= 0){
        arrowLeft.style.display = 'none';
        return;
    }

    if (currentImage == 1) {
        arrowLeft.style.display = 'none';
    }

    console.log(currentImage);
    clearDots();
    clearInterval(autoSliding);
    autoSliding = setInterval(autoSlider, (stories[currentImage - 1].length + 30) * 100);
    sliderImages[currentImage].style.setProperty('animation-name', 'leftToRight');
    sliderImages[--currentImage].style.setProperty('animation-name', 'leftToRight2');
    dots[currentImage].className += ' active';
    clearInterval(storyTeller);
    storyCounter = 0;
    typeWriter.pause();
    typeWriter.load();
    storyTeller = setInterval(storyAutoWriter, 100);
    storySlide.innerHTML = "";
    typeWriter.play();
    console.log(currentImage);
});

// Right arrow click
arrowRight.addEventListener('click', function(){
    
    arrowLeft.style.display = 'inline-block';
    if(currentImage >= sliderImages.length - 1){
        arrowRight.style.display = 'none';
        return;
    }

    if(currentImage >= sliderImages.length - 2){
        arrowRight.style.display = 'none';
        quiz.style.setProperty('opacity', '1');
        quiz.style.setProperty('pointer-events', 'all');
        quiz.style.setProperty('cursor', 'pointer');
    }

    console.log(currentImage);
    clearDots();
    clearInterval(autoSliding);
    autoSliding = setInterval(autoSlider, (stories[currentImage + 1].length + 30) * 100);
    sliderImages[currentImage].style.setProperty('animation-name', 'rightToLeft2');
    sliderImages[++currentImage].style.setProperty('animation-name', 'rightToLeft');
    dots[currentImage].className += ' active';
    clearInterval(storyTeller);
    storyCounter = 0;
    typeWriter.pause();
    typeWriter.load();
    storyTeller = setInterval(storyAutoWriter, 100);
    storySlide.innerHTML = "";
    typeWriter.play();
    console.log(currentImage);

});

// Auto Slide
function autoSlider(){
    
    if (currentImage >= sliderImages.length - 1) {
        arrowRight.style.display = 'none';
        clearInterval(autoSliding);
        return;
    }

    if (currentImage >= sliderImages.length - 2) {
        quiz.style.setProperty('opacity', '1');
        quiz.style.setProperty('pointer-events', 'all');
        quiz.style.setProperty('cursor', 'pointer');
        arrowRight.style.display = 'none';
    }

    sliderImages[currentImage].style.setProperty('animation-name', 'rightToLeft2');
    currentImage++;
    sliderImages[currentImage].style.setProperty('animation-name', 'rightToLeft');
    clearDots();
    dots[currentImage].className += ' active';
    arrowLeft.style.display = 'inline-block';
    clearInterval(storyTeller);
    storyCounter = 0;
    typeWriter.pause();
    typeWriter.load();
    storyTeller = setInterval(storyAutoWriter, 100);
    storySlide.innerHTML = "";
    typeWriter.play();
    clearInterval(autoSliding);
    autoSliding = setInterval(autoSlider, (stories[currentImage].length + 30) * 100);
    console.log(currentImage);
    
}
// End Section 3 functions
