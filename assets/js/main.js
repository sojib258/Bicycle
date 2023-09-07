// Add Sticky on Menu
    window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 130);
  })

// Change Logo Image on Scroll
  window.addEventListener("scroll",function(){
    var img = document.querySelector("#logoImage")
      if(window.scrollY > 130){
        img.src="assets/images/logo/logo2.png";
      }else{
        img.src="assets/images/logo/logo.png"; 
      }
  })


$(document).ready(function(){
    // Navigation Owl Carousel
    $(".banner .owl-carousel").owlCarousel({
        dots: true,
        smartSpeed: 1000,
        autoplay: false,
        autoplayTimeout:10000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });	
});
    
	
	
	
    // New Collection Bike Owl Carousel
    $(".collection .owl-carousel").owlCarousel({
        dots: true,
        smartSpeed: 800,
        autoplay: false,
        nav: true,
        responsive:{
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            }
        }
    });

    // Testimonial Owl Carousel
    $(".testimonial .owl-carousel").owlCarousel({
        dots: true,
        smartSpeed: 800,
        autoplay: false,
        nav: true,
        responsive:{
            0:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });


    // Isotopw Plugin for featured product list
    var $grid = $('.featured__allItem').isotope({
        // options
      });
      // filter items on button click
      $('.featured-Isotope').on( 'click', '.featured-Isotope-item', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
      });


    //   This is for Type Js
    var typed = new Typed('#typed', {
        strings: ['<span class="light-green">W</span>elcome to our <br>bike <i>eCommerce</i> Website.', '<span class="light-green">W</span>e are Web <i>Designer</i>', '<span class="light-green">W</span>e are Web <i>Developer</i>'],
        typeSpeed: 80,
        backSpeed: 50,
        smartBackspace: true,
        loop: true
      });
    var typed = new Typed('#typed2', {
        strings: ['<span class="orange">W</span>elcome to our <br>bike <i>eCommerce</i> Website.', '<span class="orange">W</span>e are Web <i>Designer</i>', '<span class="orange">W</span>e are Web <i>Developer</i>'],
        typeSpeed: 80,
        backSpeed: 50,
        smartBackspace: true,
        loop: true
      });
    var typed = new Typed('#typed3', {
        strings: ['<span class="light-green">W</span>elcome to our <br>bike <i>eCommerce</i> Website.', '<span class="light-green">W</span>e are Web <i>Designer</i>', '<span class="light-green">W</span>e are Web <i>Developer</i>'],
        typeSpeed: 80,
        backSpeed: 50,
        smartBackspace: true,
        loop: true
      });

