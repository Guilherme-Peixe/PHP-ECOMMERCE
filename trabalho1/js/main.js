(function($) {
  "use strict"

  // NAVIGATION
  var responsiveNav = $('#responsive-nav'),
    catToggle = $('#responsive-nav .category-nav .category-header'),
    catList = $('#responsive-nav .category-nav .category-list'),
    menuToggle = $('#responsive-nav .menu-nav .menu-header'),
    menuList = $('#responsive-nav .menu-nav .menu-list');

  catToggle.on('click', function() {
    menuList.removeClass('open');
    catList.toggleClass('open');
  });

  menuToggle.on('click', function() {
    catList.removeClass('open');
    menuList.toggleClass('open');
  });

  $(document).click(function(event) {
    if (!$(event.target).closest(responsiveNav).length) {
      if (responsiveNav.hasClass('open')) {
        responsiveNav.removeClass('open');
        $('#navigation').removeClass('shadow');
      } else {
        if ($(event.target).closest('.nav-toggle > button').length) {
          if (!menuList.hasClass('open') && !catList.hasClass('open')) {
            menuList.addClass('open');
          }
          $('#navigation').addClass('shadow');
          responsiveNav.addClass('open');
        }
      }
    }
  });

  // HOME SLICK
  $('#home-slick').slick({
    autoplay: true,
    infinite: true,
    speed: 300,
    arrows: true,
  });

  // PRODUCTS SLICK
  $('#product-slick-1').slick({
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    infinite: true,
    speed: 300,
    dots: true,
    arrows: false,
    appendDots: '.product-slick-dots-1',
    responsive: [{
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });

  $('#product-slick-2').slick({
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    infinite: true,
    speed: 300,
    dots: true,
    arrows: false,
    appendDots: '.product-slick-dots-2',
    responsive: [{
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });

  // PRODUCT DETAILS SLICK
  $('#product-main-view').slick({
    infinite: true,
    speed: 300,
    dots: false,
    arrows: true,
    fade: true,
    asNavFor: '#product-view',
  });

  $('#product-view').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    focusOnSelect: true,
    asNavFor: '#product-main-view',
  });

  // PRODUCT ZOOM
  $('#product-main-view .product-view').zoom();

  // PRICE SLIDER
  var slider = document.getElementById('price-slider');
  if (slider) {
    noUiSlider.create(slider, {
      start: [1, 999],
      connect: true,
      tooltips: [true, true],
      format: {
        to: function(value) {
          return value.toFixed(2) + '$';
        },
        from: function(value) {
          return value
        }
      },
      range: {
        'min': 1,
        'max': 999
      }
    });
  }

  //Filtrar por marcas
  $('ul#brands a').click((a)=>{
    var brand= a.target.getAttribute('class');
    if(brand!='none'){
      $(`.product-single:not([data-brand=${a.target.getAttribute('class')}])`).hide()
      $(`.product-single[data-brand=${a.target.getAttribute('class')}]`).show()
    }
    else{
      $('.product-single').show();
    }

})

$('.sort-filter a').click(e=>{
  e.preventDefault();
 if($('.sort-filter i').hasClass('fa-arrow-down')){
   $('.sort-filter i').removeClass('fa-arrow-down')
   $('.sort-filter i').addClass('fa-arrow-up');
 } else{
  $('.sort-filter i').removeClass('fa-arrow-up')
  $('.sort-filter i').addClass('fa-arrow-down');
 }

 let value = document.querySelector('.sort-filter select').value
 let sort = document.querySelector('.fa-arrow-down') != null ? 'DESC' : 'ASC' 
 if(value == "1"){
  window.location.href = `http://127.0.0.1/trabalho1/products.php?sort=price&way=${sort}`
} else {
  window.location.href = `http://127.0.0.1/trabalho1/products.php?sort=position&way=${sort}`
}
})


$('.sort-filter select').on('change', e=>{
  
  let sort = document.querySelector('.fa-arrow-down') != null ? 'DESC' : 'ASC' 
  let value = e.target.value
  if(value == "1"){
    window.location.href = `http://127.0.0.1/trabalho1/products.php?sort=price&way=${sort}`
  } else {
    window.location.href = `http://127.0.0.1/trabalho1/products.php?sort=position&way=${sort}`
  }
    

})

$('.main-btn.quick-view').click(e=>{
  let productId = e.target.parentElement.parentElement.id 
  window.location.href = `http://127.0.0.1/trabalho1/product-page.php?id=${productId}`;
})

})(jQuery);
