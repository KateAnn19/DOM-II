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
    secondImage.src = "https://images.unsplash.com/photo-1528629297340-d1d466945dc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1395&q=80";

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

let body = document.querySelector('body');

body.addEventListener('click', () => {
    body.style.backgroundColor="purple";
    console.log('Me last');
});


//------------------------------------------------------------------
//click (10) on container changing color to hotpink with click
//------------------------------------------------------------------

let secondContainerEle = document.getElementsByClassName('container')[1];
secondContainerEle.addEventListener('click', (event) => {
    secondContainerEle.style.backgroundColor = "hotpink";
    event.stopPropagation();
    console.log('here');
})

//----------------------------------------------------------------
//stopping propogation
//-----------------------------------------------------------------

//-----------------------------------------------------------------
//using preventDefault() to stop link
//-----------------------------------------------------------------

const stopLink = document.querySelector(".nav-link");
stopLink.href="https://lambdaschool.com/";

stopLink.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("stopped the link");
})


//------------------------------------------------------------------
//selecting the paragraphs to change them to hipsterisms 
//------------------------------------------------------------------

let allParas = document.querySelectorAll('p');
//console.log(allParas);

    // allParas.addEventListener('click', function(){
    //     for(let i = 0 ; i <allParas.length ; i++){
    //         allParas[i].innerText="3 wolf moon kickstarter activated charcoal retro four loko shoreditch aesthetic, squid migas master cleanse. Salvia deep v pickled helvetica PBR&B. Selvage af freegan, intelligentsia waistcoat aesthetic ennui yr franzen gentrify kinfolk cliche man braid. Polaroid disrupt locavore post-ironic yuccie schlitz. Artisan fam man braid, iPhone seitan irony gluten-free vice vinyl. Trust fund selfies photo booth fingerstache banh mi distillery la croix bushwick pop-up gastropub neutra food truck cold-pressed schlitz chia. Bitters gentrify food truck heirloom, forage kinfolk schlitz bespoke ramps lomo.";
    //         // allParas[i + 1].innerText = "Aesthetic blog irony skateboard woke ennui truffaut snackwave pabst. Fingerstache ennui vaporware poke. Ennui viral next level, humblebrag af copper mug hexagon. Banh mi vegan twee, edison bulb normcore stumptown tumblr shabby chic. Kale chips vexillologist tofu, authentic chambray twee raw denim poutine yr enamel pin succulents craft beer 3 wolf moon gentrify. Bicycle rights street art drinking vinegar semiotics vinyl kogi hoodie pok pok hashtag vegan jianbing tousled master cleanse swag. Flannel freegan try-hard, food truck stumptown air plant chartreuse mixtape wolf heirloom authentic kogi schlitz.";
    //         // allParas[i + 2].innerText="Meditation health goth shaman plaid, four dollar toast artisan vegan yuccie messenger bag. XOXO gochujang synth sriracha. Mixtape cred meditation migas vinyl chambray gluten-free salvia chia hell of hoodie gastropub. Forage neutra lo-fi activated charcoal. Sartorial green juice pitchfork yuccie pug, enamel pin beard skateboard live-edge distillery flexitarian tote bag XOXO. Raw denim biodiesel small batch asymmetrical, photo booth cliche marfa butcher tattooed gentrify retro disrupt portland af. Fam bushwick glossier sustainable.";
    //         // allParas[i + 3].innerText = "Occupy aesthetic jianbing, live-edge chia master cleanse +1 90's cornhole tousled chartreuse kitsch trust fund. Salvia palo santo hot chicken fingerstache jianbing truffaut portland four dollar toast 8-bit health goth retro. Hot chicken affogato organic subway tile roof party cornhole. Swag mumblecore twee banjo palo santo leggings enamel pin, coloring book freegan hashtag. Hot chicken aesthetic microdosing meggings synth fixie tattooed paleo heirloom hammock cronut crucifix glossier drinking vinegar polaroid. Humblebrag neutra trust fund swag roof party direct trade deep v.";
    //         // allParas[5].innerText="Sriracha bushwick waistcoat tilde cray street art tousled. Chicharrones semiotics brunch trust fund tacos synth. Put a bird on it hell of man braid deep v, green juice before they sold out you probably haven't heard of them direct trade tbh gentrify. Food truck chia try-hard keytar twee. Enamel pin pinterest cray crucifix hell of flexitarian vaporware kitsch etsy street art leggings hot chicken gluten-free. Poke vape chambray, hexagon adaptogen cardigan before they sold out seitan waistcoat austin bitters yr tumeric kombucha portland. Put a bird on it tilde pug glossier gentrify stumptown.";
    //         // allParas[6].innerText = "Occupy aesthetic jianbing, live-edge chia master cleanse +1 90's cornhole tousled chartreuse kitsch trust fund. Salvia palo santo hot chicken fingerstache jianbing truffaut portland four dollar toast 8-bit health goth retro. Hot chicken affogato organic subway tile roof party cornhole. Swag mumblecore twee banjo palo santo leggings enamel pin, coloring book freegan hashtag. Hot chicken aesthetic microdosing meggings synth fixie tattooed paleo heirloom hammock cronut crucifix glossier drinking vinegar polaroid. Humblebrag neutra trust fund swag roof party direct trade deep v.";
    //         // allParas[7].innerText="3 wolf moon williamsburg taxidermy sustainable, fingerstache retro activated charcoal post-ironic before they sold out tbh food truck art party microdosing. Craft beer vexillologist mlkshk offal yr sartorial seitan fanny pack master cleanse. Ugh dreamcatcher slow-carb street art, bitters mustache you probably haven't heard of them intelligentsia plaid drinking vinegar hammock. Sartorial la croix YOLO, small batch taiyaki pitchfork waistcoat unicorn listicle vice vaporware beard. Messenger bag hot chicken put a bird on it ugh occupy lo-fi neutra raclette taxidermy distillery deep v everyday carry food truck. Keffiyeh tacos VHS synth bicycle rights gastropub plaid. Offal lyft deep v lumbersexual coloring book, waistcoat twee authentic helvetica salvia messenger bag skateboard.";
    //         // allParas[8].innerText="Authentic mumblecore tote bag, skateboard direct trade church-key VHS swag taxidermy selfies williamsburg. Migas yr pok pok before they sold out, keytar taiyaki stumptown cold-pressed. Skateboard 8-bit vice, selvage pitchfork organic squid pork belly occupy sriracha cred blog ethical waistcoat. Letterpress taxidermy kinfolk, messenger bag enamel pin meditation dreamcatcher ugh gluten-free sustainable intelligentsia cornhole poutine chillwave. Chicharrones pug austin whatever ramps, vape tumeric tousled  woke kitsch selvage affogato neutra. Sustainable aesthetic gentrify irony flannel, knausgaard post-ironic biodiesel organic bitters williamsburg echo park occupy.";
    //         // allParas[9].innerText="Tacos shoreditch sriracha viral, drinking vinegar church-key meh gastropub. Blue bottle slow-carb glossier intelligentsia, raw denim roof party 90's street art small batch. Leggings single-origin coffee kale chips readymade bitters cornhole ennui pitchfork beard banjo narwhal vinyl irony tumeric kogi. Meditation normcore yuccie, brooklyn ugh leggings hashtag skateboard neutra narwhal crucifix authentic. Synth craft beer aesthetic stumptown tumblr celiac 8-bit raclette direct trade pour-over bicycle rights fanny pack forage thundercats meditation. Craft beer PBR&B lo-fi, venmo shaman franzen leggings hot chicken succulents flannel asymmetrical pabst mlkshk echo park sartorial.";
    //     };
    // });

allParas.forEach(el => {
    el.addEventListener('mouseover', function(){
        el.innerText = "Bicycle rights single-origin coffee knausgaard occupy palo santo fashion axe health goth truffaut DIY butcher meditation adaptogen mlkshk photo booth chia. Kickstarter franzen yr banjo selvage vexillologist palo santo yuccie. Retro poutine four loko, palo santo lo-fi pour-over 3 wolf moon kickstarter truffaut lumbersexual pickled coloring book. Schlitz chartreuse etsy asymmetrical shoreditch lo-fi mlkshk before they sold out drinking vinegar pug banh mi. DIY cardigan cred iPhone austin offal wayfarers cold-pressed, tousled pok pok.";
    })
})

allParas.forEach(el => {
    el.addEventListener('mouseout', function(){
        el.innerText = "Tacos shoreditch sriracha viral, drinking vinegar church-key meh gastropub. Blue bottle slow-carb glossier intelligentsia, raw denim roof party 90's street art small batch. Leggings single-origin coffee kale chips readymade bitters cornhole ennui pitchfork beard banjo narwhal vinyl irony tumeric kogi. Meditation normcore yuccie, brooklyn ugh leggings hashtag skateboard neutra narwhal crucifix authentic. Synth craft beer aesthetic stumptown tumblr celiac 8-bit raclette direct trade pour-over bicycle rights fanny pack forage thundercats meditation. Craft beer PBR&B lo-fi, venmo shaman franzen leggings hot chicken succulents flannel asymmetrical pabst mlkshk echo park sartorial.";
    })
})


//-----------------------------------------------------------------
//this grabs nav links and adds hipsterisms //when do you need event when do you not need event
//-------------------------------------------------------------------

let navLink1 = document.getElementsByClassName('nav-link')[0];
let navLink2 = document.getElementsByClassName('nav-link')[1];
let navLink3 = document.getElementsByClassName('nav-link')[2];
let navLink4 = document.getElementsByClassName('nav-link')[3];

navLink1.addEventListener('mouseover', () => {
    navLink1.innerText = "BEER";
})

navLink1.addEventListener('mouseout', () => {
    navLink1.innerText = "Home"
})

navLink2.addEventListener('mouseover', () => {
    navLink2.innerText = "BIKES";
})

navLink2.addEventListener('mouseout', () => {
    navLink2.innerText = "About Us";
})

navLink3.addEventListener('mouseover', () => {
    navLink3.innerText = "IRON AND WINE";
})

navLink3.addEventListener('mouseout', () => {
    navLink3.innerText = "Blog";
})

navLink4.addEventListener('mouseover', () => {
    navLink4.innerText = "TACOS";
})

navLink4.addEventListener('mouseout', () => {
    navLink4.innerText = "Contact"; 
})

//-----------------------------------------------------
// gets all h2s and puts hipsterisms on them
//---------------------------------------------------------

h2Headings = document.querySelectorAll('h2');
        h2Headings.forEach(el => {
        el.addEventListener('mouseover', function(){
        el.innerText = `So You Think You'\re A Hipster`;
    })
})

h2Headings = document.querySelectorAll('h2');
        h2Headings.forEach(el => {
        el.addEventListener('mouseout', function(){
        el.innerText = `You'\re Not At Taco Tuesday Every Week!!!`;
    })
})

//----------------------------------------------------------------
//gets all h4s and puts hipsterisms on them
//-------------------------------------------------------------

h4Headings = document.getElementsByTagName('h4');
console.log(h4Headings);

for(let i = 0 ; i < h4Headings.length ; i++){
    h4Headings[i].addEventListener('click', function (event) {
        h4Headings[0].innerText = "BRING ME COFFEE";
        h4Headings[1].innerText = `YOU MEAN YOU HAVEN'\T HEARD OF AIR? NO DUMMY NOT THE ONE YOU BREATHE` ;
        h4Headings[2].innerText = "I ONLY SHOOT POLOROIDS"
    // e.preventDefault();
    }, false);// alert ("WHAT KIND OF COFFEE DO YOU DRINK?!!!?");
}



// for (var i = 0; i < btns.length; i++) {
// 	console.log('1', btns[i]);
// 	btns[i].addEventListener('click', function (event) {
// 		console.log('2', btns[i]);
// 		console.log('3', event.target);
// 	}, false);
// }

//---------------------------------------------------------
//changing to hipster images
//-----------------------------------------------------------


let firstImage = document.getElementsByTagName('img')[0];
let secondImageAgain = document.querySelectorAll('img')[1];
let thirdImage = document.querySelectorAll('img')[2];
let fourthImage = document.querySelectorAll('img')[3];



firstImage.addEventListener('mouseover', () => {
    firstImage.src = "https://images.unsplash.com/photo-1516458464372-eea4ab222b31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80";
})

firstImage.addEventListener('mouseout', () => {
    firstImage.src = "https://images.unsplash.com/photo-1520013633827-6724d7d57eb1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
})

secondImage.addEventListener('mouseover', () => {
    secondImageAgain.src = "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";
})

secondImage.addEventListener('mouseout', () => {
    secondImageAgain.src = "https://images.unsplash.com/photo-1522039176993-33264c54767e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";
})

thirdImage.addEventListener('mouseover', () => {
    thirdImage.src = "https://images.unsplash.com/photo-1477064996809-dae46985eee7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";
})

thirdImage.addEventListener('mouseout', () => {
    thirdImage.src = "https://images.unsplash.com/photo-1514580426463-fd77dc4d0672?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";
})

fourthImage.addEventListener('mouseover', () => {
    fourthImage.src = "https://images.unsplash.com/photo-1542293011-a7c656888275?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";
})

fourthImage.addEventListener('mouseout', () => {
    fourthImage.src = "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"; 
})
