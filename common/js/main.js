var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
} 


 //		checkout address 
 $(document).ready(function(){
  $('.ck-address').addClass('select-btn');
  $(".ck-address").click(function(){
     
     $(this).addClass('select-btn');
     $('.ck-address-update').removeClass('select-btn');
     $('.addr').removeClass('d-none');
     $('.addr-up').addClass('d-none');

  }); 

 

  $(".ck-address-update").click(function(){
     
    $(this).addClass('select-btn');
    $('.ck-address').removeClass('select-btn');
    $('.addr-up').removeClass('d-none');
    $('.addr').addClass('d-none');

 });



});






$(document).ready(function(){

    $(".button").click(function(){
       
       $(".dialog").show();
  
    });


  });

  $(document).ready(function(){
    $(".dialog-btn").click(function(){
      $(this).addClass('light-green');
    });
  });
  $(document).ready(function(){
    $(".cat-button").click(function(){
      $(this).toggleClass('light-green');
    });
  });

  $(document).ready(function(){
    $(".button").click(function(){
      $(this).addClass('light-green');
    });
  });
  $(document).ready(function(){
    $(".button").click(function(){
      $(this).addClass('button-blue');
    });
  });
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
         
         items:1,
         dots:true,
         autoplay:false,
         autoHeight:true,
         margin:10,
         nav:false,
         responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:1,
                nav:false
            },
            1000:{
                items:1,
                nav:true,
                loop:false
            }
        }
    });
  });


//		Count down

function makeTimer() {

	//		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");	
		var endTime = new Date("29 April 2020 9:56:00 GMT+01:00");			
			endTime = (Date.parse(endTime) / 1000);

			var now = new Date();
			now = (Date.parse(now) / 1000);

			var timeLeft = endTime - now;

			var days = Math.floor(timeLeft / 86400); 
			var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
			var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
			var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
  
			if (hours < "10") { hours = "0" + hours; }
			if (minutes < "10") { minutes = "0" + minutes; }
			if (seconds < "10") { seconds = "0" + seconds; }

			$(".days").html(days);
			$(".hours").html(hours);
			$(".minutes").html(minutes);
			$(".seconds").html(seconds);		

	}

    setInterval(function() { makeTimer(); }, 1000);
    

    //		Count down

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
(function(){

    var doc = document.documentElement;
    var w = window;
  
    var prevScroll = w.scrollY || doc.scrollTop;
    var curScroll;
    var direction = 0;
    var prevDirection = 0;
  
    var header = document.getElementById('header');
  
    var checkScroll = function() {
  
      /*
      ** Find the direction of scroll
      ** 0 - initial, 1 - up, 2 - down
      */
  
      curScroll = w.scrollY || doc.scrollTop;
      if (curScroll > prevScroll) { 
        //scrolled up
        direction = 2;
      }
      else if (curScroll < prevScroll) { 
        //scrolled down
        direction = 1;
      }
  
      if (direction !== prevDirection) {
        toggleHeader(direction, curScroll);
      }
      
      prevScroll = curScroll;
    };
  
    var toggleHeader = function(direction, curScroll) {
      if (direction === 2 && curScroll > 52) { 
        
        //replace 52 with the height of your header in px
  
        header.classList.add('hide');
        prevDirection = direction;
      }
      else if (direction === 1) {
        header.classList.remove('hide');
        prevDirection = direction;
      }
    };
    
    window.addEventListener('scroll', checkScroll);
  
  })();
  
  
  
  $(document).ready(function(){
      $("#register").click(function(){
          $("#myModal").toggle();
           $("#myModal").toggleClass("show");
           $(".modal-backdrop").siblings().removeClass('modal-backdrop');
          
      });
      

  });
  
    $(document).ready(function(){
      $("#login").click(function(){
          $("#myModal-1").toggle();
          $("#myModal-1").toggleClass("show");
           $(".modal-backdrop").siblings().removeClass('modal-backdrop');
      });
      
    
  });
  
    $('.image-area').thumbchanger({
    mainImageArea: '.main-image',
    subImageArea:  '.sub-image',
    animateTime:   100,
    easing:        'easeOutCubic',
    trigger:       'click',
});
  


