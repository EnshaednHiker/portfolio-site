/*****************Requirements*********************/
/*
Include a bio The main point of the site is to communicate who you are and what you're capable of. You'll need to have a short bio that focuses on your passions and interests, insofar as they pertain to your professional life as a developer.

Polished, Compelling Design and Feel The overall look and feel should be neat, clean, and professional looking. We'll give you some tips on this later.

Responsive, mobile first Will the hiring manager considering your application view your site on a phone or a desktop, or both? Who knows! So make sure your site is responsive and looks good on any screen size. Optimize for mobile first, and optionally progressively enhance for larger screens.

HTML, CSS, jQuery only. After learning React, you may be tempted to use it on your portfolio, but that's overkill. Keep the tech simple.

Titles, short descriptions, links, and screenshots for each app you showcase, you should include the app name, a link to the live app and repo, a short description, and a compelling screenshot. You'll recall that for the Node capstone, we did not require you to create a high quality front end. If your screenshot for this app is going to be less than stellar, you can instead provide a stock photo that's thematically relevant.

Only code from scratch projects. Apps like fizzbuzz and the shopping list do not belong in your portfolio. Most likely, you'll want to include your API hack, your Node capstone, and your full stack capstone. If you've done other high quality projects outside of the course (for instance, maybe you've done a landing page for a small business as a freelance gig), you may want to include them as well, but make sure you're confident that they are as polished as the other projects.

Contact info. At a minimum, you should include your email address and a link to your GitHub profile. Some students like to add a contact form. That's fine to do, but you should still include your email address.

No errors in the console. Hiring managers usually have a ton of applicants, which means they're initially looking for quick reasons to dismiss you. If they open up Dev Tools on your portfolio site and see errors, that may be enough to pass you over. So make sure your final site doesn't have any errors.

Reasonable load time. We'll discuss how to achieve this, but the page should load quickly (i.e., 2 seconds or less).
*/



/*******************Navbar Event Listeners********************/

//Sweet Scroll handles smooth scrolling transitions
document.addEventListener('DOMContentLoaded', () => {
    const options = {
        offset: -99
    }
    const scroller = new SweetScroll(options);
  }, false);
//convenience function that clicks the close input on mobile view if the navbar is open
function checkCheckbox(){
    if($( "input:checked" ).length===1){
        $(".luxbar-checkbox").click();
    }
}
//convenience function that adds an active class to nav link being click and removes that class from all links prior to adding it
function handleNavClass(e){
    $('.nav-link').removeClass('nav-link-active');
    $(e.target).addClass('nav-link-active');
}

//listener block that handles what happens when "About me" is clicked
$('#about-me-link').click(function(e){
    e.preventDefault()
    //close open navbar on mobile view
    checkCheckbox()
    //set proper nav link to active view
    handleNavClass(e);
});

//listener block that handles what happens when "Portfolio" is clicked
$('#portfolio-link').click(function(e){
    checkCheckbox();
    handleNavClass(e);
});
//listener block that handles what happens when "Contact" is clicked
$('#contact-link').click(function(e){
    checkCheckbox();
    handleNavClass(e);
});
//listener block that handles what happens when "Nick Bingham" is clicked;
$('#brand').click(function(){
    checkCheckbox();
    $('.nav-link').removeClass('nav-link-active');
});
//Scroll listener which calculates when when to turn the navbar black right before scrolling past the header image 
$(document).scroll(function(){
    var element = document.getElementById("background-image");
    var navElement = document.getElementById("nav-header");
    var height = element.scrollHeight;
    var navHeight = navElement.scrollHeight;
    if (height - navHeight < window.scrollY){
        $('#luxbar-div').addClass('navbar-background-change');
    }
    else{
        $('#luxbar-div').removeClass('navbar-background-change');
    }
});

//function needed for adding when to change the navbar height to what's needed after and before the mobile navbar view is open
function checkedClassHandling(){
    if($( "input:checked" ).length===0){
        $('#luxbar-div').addClass("navbar-height");
    }
    else {
        $('#luxbar-div').removeClass("navbar-height");
    }
}
//When the navbar is clicked closed, add the right height class. When open, take away that class so it's height is 100%
checkedClassHandling();
$(".luxbar-checkbox").click(function(){
    checkedClassHandling();
});

