"use strict";

$(document).ready(function () {
  // Navigation Owl Carousel
  $(".banner .owl-carousel").owlCarousel({
    dots: true,
    smartSpeed: 1500,
    autoplay: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  }); // New Collection Bike Owl Carousel

  $(".collection .owl-carousel").owlCarousel({
    dots: true,
    smartSpeed: 800,
    autoplay: false,
    nav: true,
    responsive: {
      0: {
        items: 2
      },
      450: {
        items: 2
      },
      700: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  }); // Testimonial Owl Carousel

  $(".testimonial .owl-carousel").owlCarousel({
    dots: true,
    smartSpeed: 800,
    autoplay: false,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  }); // Isotopw Plugin for featured product list

  var $grid = $('.featured__allItem').isotope({// options
  }); // filter items on button click

  $('.featured-Isotope').on('click', '.featured-Isotope-item', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({
      filter: filterValue
    });
  });
});