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
    $("html, body").animate({ scrollTop: 0 }, 600);
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

/************Typing Animation*************/
var options = {
    strings: [
        "react redux",
        "node mongoDB",
        "webpack babel CI",
        "IoT projects",
        "gritty data wrangling",
        "all the things"
    ],
    typeSpeed: 40,
    showCursor: false
  }
  
  var typed = new Typed("#typed-span", options);

  /****************Owl Carousel***************/
  $(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        margin:80,
        center: true,
        loop: true,
        autoWidth: true,
        autoHeight: true,
        nav: false,
        responsiveClass: true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:1,
                nav:true
            },
            1000:{
                items: 1,
                nav: true
            }
        }
    });
  });
