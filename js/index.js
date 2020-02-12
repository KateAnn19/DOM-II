// Your code goes here

//--------------------------------------------------------------------------------
//this is how you import libraries
//import gsap
// import {gsap} from 'gsap';
//this didn't work so we changed it and added the CDN into the HTML
//-----------------------------------------------------------------------------------


//-----------------------------------------------------------
//Step 1 : select element you want to apply animation on first
//----------------------------------------------------------

let funBusMiniHeading = document.querySelector('.logo-heading');

//---------------------------------------------------
//mouseenter (1)
//---------------------------------------------------

funBusMiniHeading.addEventListener('mouseenter', () => {
    funBusMiniHeading.style.transform = 'scale(1.6)';
    funBusMiniHeading.style.color = "red";
    funBusMiniHeading.innerText = "Hipster Bus."
    funBusMiniHeading.style.fontFamily = "Impact,Charcoal,sans-serif";
});

//------------------------------------------------------
//mouseleave (2)
//----------------------------------------------------

funBusMiniHeading.addEventListener('mouseleave', () => {
    funBusMiniHeading.style.transform = 'scale(1)';
    funBusMiniHeading.style.color = "black";
    funBusMiniHeading.innerText = "Fun Bus!";
    funBusMiniHeading.style.fontFamily = 'Indie Flower,cursive';
})
//-------------------------------------------------------
//click (3) using forEach      
//selecting all the h2's on the page and turning them blue 
//---------------------------------------------------------
let h2Headings = document.querySelectorAll('h2');
        h2Headings.forEach(el => {
        el.addEventListener('click', function(){
        el.style.color = 'blue';
    })
})

//------------------------------------------------------------
//double click (4)
//this selects the first image on the page and changes it
//i could add a class to the image 
//i could call the class before the image then select the image
//------------------------------------------------------------

let firstBusImage = document.querySelector('img').src;
let image_tracker = 'bus1';
let busImage = document.querySelector('img');

busImage.addEventListener('dblclick', function(){
    if(image_tracker === 'bus1'){
        busImage.src = "https://images.unsplash.com/photo-1570657378546-9cb0fff92792?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";
        image_tracker = "bus2";
    }
    else{
        busImage.src = firstBusImage;
        image_tracker = "bus1";
    }
});


//------------------------------------------------------------------
// resize (5) 
//with window resizing the image changes
//------------------------------------------------------------------

let secondImage = document.getElementsByTagName('img')[1];
let allImages = document.querySelectorAll('img');



window.addEventListener('resize', () => {
    secondImage.src = "https://images.unsplash.com/photo-1553864250-05b20249ee0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";

    for(let i = 0 ; i < allImages.length ; i++) {
        allImages[i].style.border = '10px dashed yellow';
        console.log(allImages);
    }
})

//------------------------------------------------------------------
//click (6)  //we cannot change css but we can change inline styles and inline styles override all other styles except important which is why using these with event listeners work
//this puts function outside and adds a timer 
//--------------------------------------------------------------------

let firstButton = document.querySelector('.btn');
let secondButton = document.getElementsByClassName('btn')[1];
let thirdButton = document.getElementsByClassName('btn')[2];
console.log(firstButton);
console.log(secondButton);


//this uses preventDefault so alert happens on button


firstButton.addEventListener('click', clickHandler = (e) => {
    e.preventDefault();
    alert ("Welcome to the Fuuuuuuuuuuuuuuuun Bus");
    console.log('the button was clicked');
});

secondButton.style.border = '2px red dashed';
thirdButton.style.border = '2px purple dashed';
//------------------------------------------------------------------
//mouseEnter (7) container color changes
//------------------------------------------------------------------

const containerEle = document.querySelector('.home');
containerEle.addEventListener('mouseenter', () => {
    containerEle.style.backgroundColor="chartreuse";
    containerEle.style.color="white";
    
});


//------------------------------------------------------------------
//mouseleave (8) container color changes back
//------------------------------------------------------------------

containerEle.addEventListener('mouseleave', () => {
    containerEle.style.backgroundColor="white";
    containerEle.style.color="black";
})


//------------------------------------------------------------------
//click (9) on body changing color to purple
//------------------------------------------------------------------

//------------------------------------------------------------------
//click (10) on container changing color to hotpink with click
//------------------------------------------------------------------

//----------------------------------------------------------------
//stopping propogation
//-----------------------------------------------------------------

let body = document.querySelector('body');

body.addEventListener('click', () => {
    body.style.backgroundColor="purple";
    console.log('Me last');
});

let secondContainerEle = document.getElementsByClassName('container')[1];
secondContainerEle.addEventListener('click', (event) => {
    secondContainerEle.style.backgroundColor = "hotpink";
    event.stopPropagation();
    console.log('here');
})