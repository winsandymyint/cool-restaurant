/**
 *   1- Main menu
 *   2- Mobile menu
 *   3- Video wrapper
 *   4- Masonry
 *   5- Owl Carousel
 *   6- Validate form
 *   7- Breadking News
 *   8- Flickr
 *   9- Toggle Boxes
 *   10- Accordion
 *   11- Dynamic Progress Bar
 *   12- Boostrap slider
 *   13- Google Map
 *-----------------------------------------------------------------
 **/
 
"use strict";
var kopa_variable = {
    "contact": {
        "address": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "marker": "/url image"
    },
    "i18n": {
        "VIEW": "View",
        "VIEWS": "Views",
        "validate": {
            "form": {
                "SUBMIT": "Submit",
                "SENDING": "Sending..."
            },
            "name": {
                "REQUIRED": "Please enter your name",
                "MINLENGTH": "At least {0} characters required"
            },
            "email": {
                "REQUIRED": "Please enter your email",
                "EMAIL": "Please enter a valid email"
            },
            "url": {
                "REQUIRED": "Please enter your url",
                "URL": "Please enter a valid url"
            },
            "message": {
                "REQUIRED": "Please enter a message",
                "MINLENGTH": "At least {0} characters required"
            }
        },
        "tweets": {
            "failed": "Sorry, twitter is currently unavailable for this user.",
            "loading": "Loading tweets..."
        }
    },
    "url": {
        "template_directory_uri":"file:///E:/wamp/www/HTML/News Maxx/HTML"
    }
};
var map;

/* =========================================================
1. Main Menu
============================================================ */

Modernizr.load([
  {
    load: 'js/superfish.js',
    complete: function () {

        //Main menu
        jQuery('.main-menu').superfish({
          cssArrows: true
        });

    }
  }
]);

Modernizr.load([
  {
    load: 'js/superfish.js',
    complete: function () {

        //Main menu
        jQuery('.secondary-menu').superfish({
          cssArrows: false
        });

    }
  }
]);


/* =========================================================
2. Mobile Menu
============================================================ */
Modernizr.load([
  {
    load: 'js/jquery.navgoco.js',
    complete: function () {

        jQuery('#mobile-menu').navgoco({accordion: true});
        jQuery( ".main-nav i" ).click(function(){
            jQuery( "#mobile-menu" ).slideToggle( "slow" );
        });
    }
  }
]);


Modernizr.load([
  {
    load: 'js/jquery.navgoco.js',
    complete: function () {

        jQuery('#secondary-mobile-menu').navgoco({accordion: true});
        jQuery( ".secondary-nav span" ).click(function(){
            jQuery( "#secondary-mobile-menu" ).slideToggle( "slow" );
        });
    }
  }
]);


Modernizr.load([
  {
    load: 'js/jquery.navgoco.js',
    complete: function () {

        jQuery('#bottom-mobile-menu').navgoco({accordion: true});
        jQuery( "#bottom-nav i" ).click(function(){
            jQuery( "#bottom-mobile-menu" ).slideToggle( "slow" );
        });
    }
  }
]);

/* =========================================================
3. Video wrapper
============================================================ */
if (jQuery(".video-wrapper").length > 0) {
	Modernizr.load([{
		load: kopa_variable.url.template_directory_uri + '/js/fitvids.js',
		complete: function () {
			jQuery(".video-wrapper").fitVids();
		}
	}]);
};

/* =========================================================
4. Masonry
============================================================ */

if (jQuery('.masonry-list').length > 0) {
Modernizr.load([
  {
    load: ['js/masonry.pkgd.js','js/imagesloaded.js'],
    complete: function () {
      var $container = jQuery('.masonry-list');
      // initialize
      
      imagesLoaded($container,function(){
        $container.masonry({
          columnWidth: 1,
          itemSelector: '.masonry-item'
        });
        $container.masonry('bindResize')
      });
    }
  }
]);
};


if (jQuery('.entry-masonry-list').length > 0) {
Modernizr.load([
  {
    load: ['js/masonry.pkgd.js','js/imagesloaded.js'],
    complete: function () {
      var $container = jQuery('.entry-masonry-list');
      // initialize
      
      imagesLoaded($container,function(){
        $container.masonry({
          columnWidth: 1,
          itemSelector: '.masonry-item'
        });
        $container.masonry('bindResize')
      });
    }
  }
]);
};


if (jQuery('.kopa-gallery-list').length > 0) {
  Modernizr.load([
    {
      load: ['js/masonry.pkgd.js','js/imagesloaded.js','js/filtermasonry.js'],
      complete: function () {
        var $container = $('.kopa-gallery-list');
        if ($container.length > 0) {
            $container.imagesLoaded(function(){
                $container.multipleFilterMasonry({
                    itemSelector: '.gallery-item',
                    filtersGroupSelector:'.filters'
                });
                jQuery('.options li label').click(function(){
                  jQuery('.options li label').removeClass('active');
                  jQuery(this).addClass('active');
                });
            });
        };
      }
    }
  ]);
};
  


/* =========================================================
5. Owl Carousel
============================================================ */
if (jQuery('.kopa-home-slider').length > 0) {

    Modernizr.load([
      {
        load: 'js/owl.carousel.js',
        complete: function () {
            jQuery('.kopa-home-slider').owlCarousel({
                items : 1,
                itemsDesktop : [1120,1],
                itemsDesktopSmall : [979,1],
                itemsTablet : [799,1],
                lazyLoad : true,
                navigation : false,
                pagination: true,
                navigationText : false
            });
        }
      }
    ]);
};


if (jQuery('.kopa-home-slider-2').length > 0) {

    Modernizr.load([
      {
        load: 'js/owl.carousel.js',
        complete: function () {
          var sync1 = $(".sync1");
          var sync2 = $(".sync2");
           
          sync1.owlCarousel({
            singleItem : true,
            slideSpeed : 1000,
            navigation: false,
            pagination:false,
            autoPlay: true,
            afterAction : syncPosition,
            responsiveRefreshRate : 200,
          });
           
          sync2.owlCarousel({
            items : 15,
            itemsDesktop : [1199,10],
            itemsDesktopSmall : [979,10],
            itemsTablet : [768,8],
            itemsMobile : [479,4],
            pagination:false,
            responsiveRefreshRate : 100,
            afterInit : function(el){
              el.find(".owl-item").eq(0).addClass("synced");
            }
          });
           
          function syncPosition(el){
            var current = this.currentItem;
            $(".sync2")
            .find(".owl-item")
            .removeClass("synced")
            .eq(current)
            .addClass("synced")
            if($(".sync2").data("owlCarousel") !== undefined){
              center(current)
            }
          }
           
          $(".sync2").on("click", ".owl-item", function(e){
            e.preventDefault();
            var number = $(this).data("owlItem");
            sync1.trigger("owl.goTo",number);
          });
           
          function center(number){
            var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
            var num = number;
            var found = false;
            for(var i in sync2visible){
            if(num === sync2visible[i]){
              var found = true;
            }
          } 
        }
      }
    }
  ]);
};


if (jQuery('.kopa-home-slider-3').length > 0) {

    Modernizr.load([
      {
        load: 'js/owl.carousel.js',
        complete: function () {
            jQuery('.kopa-home-slider-3').owlCarousel({
                items : 5,
                itemsTablet : [799,3],
                itemsMobile : [479,2],
                lazyLoad : true,
                navigation : false,
                pagination: false,
                autoPlay: true,
                stopOnHover: true,
                navigationText : false
            });
        }
      }
    ]);
};

if (jQuery('.kopa-nothumb-carousel').length > 0) {

    Modernizr.load([
      {
        load: 'js/owl.carousel.js',
        complete: function () {
            jQuery('.kopa-nothumb-carousel').owlCarousel({
                items : 3,
                itemsDesktop : [1120,2],
                itemsDesktopSmall : [979,2],
                itemsMobile : [767,1],
                lazyLoad : true,
                navigation : true,
                pagination: false,
                navigationText : false
            });
        }
      }
    ]);
};

if (jQuery('.kopa-owl-carousel-1').length > 0) {

    Modernizr.load([
      {
        load: 'js/owl.carousel.js',
        complete: function () {
            jQuery('.kopa-owl-carousel-1').owlCarousel({
                items : 1,
                itemsDesktop : [1120,1],
                itemsDesktopSmall : [979,1],
                itemsTablet : [799,1],
                lazyLoad : true,
                navigation : false,
                pagination: true,
                navigationText : false
            });
        }
      }
    ]);
};


if (jQuery('.kopa-gallery-slider').length > 0) {

    Modernizr.load([
      {
        load: 'js/owl.carousel.js',
        complete: function () {
          var sync3 = $(".sync3");
          var sync4 = $(".sync4");
           
          sync3.owlCarousel({
            singleItem : true,
            slideSpeed : 1000,
            navigation: true,
            pagination:false,
            navigationText : false,
            afterAction : syncPosition,
            responsiveRefreshRate : 200,
          });
           
          sync4.owlCarousel({
            items : 5,
            itemsDesktop : [1120,3],
            itemsDesktopSmall : [979,3],
            itemsTablet : [799,4],
            itemsMobile : [639,3],
            pagination:false,
            responsiveRefreshRate : 100,
            afterInit : function(el){
              el.find(".owl-item").eq(0).addClass("synced");
            }
          });
           
          function syncPosition(el){
            var current = this.currentItem;
            $(".sync4")
            .find(".owl-item")
            .removeClass("synced")
            .eq(current)
            .addClass("synced")
            if($(".sync4").data("owlCarousel") !== undefined){
              center(current)
            }
          }
           
          $(".sync4").on("click", ".owl-item", function(e){
            e.preventDefault();
            var number = $(this).data("owlItem");
            sync3.trigger("owl.goTo",number);
          });
           
          function center(number){
            var sync4visible = sync4.data("owlCarousel").owl.visibleItems;
            var num = number;
            var found = false;
            for(var i in sync4visible){
            if(num === sync4visible[i]){
              var found = true;
            }
          } 
        }
      }
    }
  ]);
};


if (jQuery('.kopa-related-post-carousel').length > 0) {

    Modernizr.load([
      {
        load: 'js/owl.carousel.js',
        complete: function () {
            jQuery('.kopa-related-post-carousel').owlCarousel({
                items : 1,
                itemsDesktop : [1120,1],
                itemsDesktopSmall : [979,1],
                itemsTablet : [799,1],
                lazyLoad : true,
                navigation : true,
                pagination: false,
                navigationText : false
            });
        }
      }
    ]);
};


if (jQuery('.related-product-carousel').length > 0) {

    Modernizr.load([
      {
        load: 'js/owl.carousel.js',
        complete: function () {
            jQuery('.related-product-carousel').owlCarousel({
                items : 4,
                itemsDesktop : [1120,3],
                itemsDesktopSmall : [979,2],
                lazyLoad : true,
                navigation : true,
                pagination: false,
                navigationText : false
            });
        }
      }
    ]);
};


if (jQuery('.single-post-carousel').length > 0) {

    Modernizr.load([
      {
        load: 'js/owl.carousel.js',
        complete: function () {
            jQuery('.single-post-carousel').owlCarousel({
                items : 1,
                itemsDesktop : [1120,1],
                lazyLoad : true,
                navigation : true,
                pagination: false,
                navigationText : false
            });
        }
      }
    ]);
};



/* =========================================================
6. Validate form
============================================================ */

if (jQuery('.comments-form,.contact-form').length > 0) {
	Modernizr.load([{
		load: [kopa_variable.url.template_directory_uri + '/js/jquery.form.js', kopa_variable.url.template_directory_uri + '/js/jquery.validate.js'],
		complete: function () {
			jQuery('.comments-form,.contact-form').validate({
				// Add requirements to each of the fields
				rules: {
					name: {
						required: true,
						minlength: 2
					},
					email: {
						required: true,
						email: true
					},
					message: {
						required: true,
						minlength: 10
					}
				},
				// Specify what error messages to display
				// when the user does something horrid
				messages: {
					name: {
						required: kopa_variable.i18n.validate.name.REQUIRED,
						minlength: jQuery.format(kopa_variable.i18n.validate.name.MINLENGTH)
					},
					email: {
						required: kopa_variable.i18n.validate.email.REQUIRED,
						email: kopa_variable.i18n.validate.email.EMAIL
					},
					message: {
						required: kopa_variable.i18n.validate.message.REQUIRED,
						minlength: jQuery.format(kopa_variable.i18n.validate.message.MINLENGTH)
					}
				},
				// Use Ajax to send everything to processForm.php
				submitHandler: function (form) {
					jQuery(".comments-form .input-submit,.contact-form .input-submit").attr("value", kopa_variable.i18n.validate.form.SENDING);
					jQuery(form).ajaxSubmit({
						success: function (responseText, statusText, xhr, $form) {
							jQuery("#response").html(responseText).hide().slideDown("fast");
							jQuery(".comments-form .input-submit,.contact-form .input-submit").attr("value", kopa_variable.i18n.validate.form.SUBMIT);
						}
					});
					return false;
				}
			});
		}
	}]);
}


/* =========================================================
7. Breadking News
============================================================ */

if (jQuery('.ticker-1').length > 0) {
	Modernizr.load([{
		load: kopa_variable.url.template_directory_uri + '/js/jquery.carouFredSel-6.2.1.js',
		complete: function () {
			var _scroll = {
				delay: 1000,
				easing: 'linear',
				items: 1,
				duration: 0.07,
				timeoutDuration: 0,
				pauseOnHover: 'immediate'
			};
			jQuery('.ticker-1').carouFredSel({
				width: 1046,
				align: false,
				items: {
					width: 'variable',
					height: 39,
					visible: 1
				},
				scroll: _scroll
			});
		}
	}]);
}


/* =========================================================
8. Flickr
============================================================ */
if (jQuery('.kopa-flickr-widget').length > 0) {

	Modernizr.load([{
		load: [kopa_variable.url.template_directory_uri + '/js/jflickrfeed.js', kopa_variable.url.template_directory_uri + '/js/imgliquid.js'],
		complete: function () {
			jQuery('.kopa-flickr-widget ul').each(function () {
				jQuery(this).jflickrfeed({
					limit: 9,
					qstrings: {
						id: jQuery(this).find('.flickr-wrap').attr('data-user')
					},
					itemTemplate: '<li class="flickr-badge-image">' + '<a target="blank" href="{{link}}" title="{{title}}" class="imgLiquid">' + '<img src="{{image_m}}" alt="{{title}}"  />' + '</a>' + '</li>'
				}, function (data) {
					jQuery('.kopa-flickr-widget .imgLiquid').imgLiquid();
				});
			});
		}
	}]);
}



/* =========================================================
9. Toggle Boxes
============================================================ */
jQuery(document).ready(function () {
     
  jQuery('.toggle-view li').click(function (event) {
      
      var text = jQuery(this).children('.kopa-panel');

      if (text.is(':hidden')) {
          jQuery(this).addClass('active');
          text.slideDown('300');
          jQuery(this).children('span').removeClass('fa-plus-square-o');
          jQuery(this).children('span').addClass('fa-minus-square-o');                 
      } else {
          jQuery(this).removeClass('active');
          text.slideUp('300');
          jQuery(this).children('span').removeClass('fa-minus-square-o');
          jQuery(this).children('span').addClass('fa-plus-square-o');               
      }
       
  });
 
});


/* =========================================================
10. Accordion
========================================================= */
jQuery(document).ready(function() {
    var acc_wrapper=jQuery('.acc-wrapper');
    if (acc_wrapper.length >0) 
    {
        
        jQuery('.acc-wrapper .accordion-container').hide();
        jQuery.each(acc_wrapper, function(index, item){
            jQuery(this).find(jQuery('.accordion-title')).first().addClass('active').next().show();
            
        });
        
        jQuery('.accordion-title').on('click', function(e) {
            kopa_accordion_click(jQuery(this));
            e.preventDefault();
        });
        
        var titles = jQuery('.accordion-title');
        
        jQuery.each(titles,function(){
            kopa_accordion_click(jQuery(this));
        });
    }        
});

function kopa_accordion_click (obj) {
    if( obj.next().is(':hidden') ) {
        obj.parent().find(jQuery('.active')).removeClass('active').next().slideUp(300);
        obj.toggleClass('active').next().slideDown(300);
                            
    }
jQuery('.accordion-title span').addClass('fa-plus-square-o');
    if (obj.hasClass('active')) {
        obj.find('span').removeClass('fa-plus-square-o');
        obj.find('span').addClass('fa-minus-square-o');              
    } 
}


/* =========================================================
11. Dynamic Progress Bar
============================================================ */
jQuery(window).load(function(){    
  jQuery('.progress-bar').css('width',  function(){ return ($(this).attr('data-percentage')+'%')});
});


/* =========================================================
12. Boostrap slider
============================================================ */
jQuery('.sl1').slider();


/* =========================================================
13. Google Map
============================================================ */
var map;

if (jQuery('.kp-map').length > 0) {
      var id_map = jQuery('.kp-map').attr('id');
      var lat = parseFloat(jQuery('.kp-map').attr('data-latitude'));
      var lng = parseFloat(jQuery('.kp-map').attr('data-longitude'));
      var place = jQuery('.kp-map').attr('data-place');

  map = new GMaps({
      el: '#'+id_map,
      lat: lat,
      lng: lng,
      zoomControl : true,
      zoomControlOpt: {
          style : 'SMALL',
          position: 'TOP_LEFT'
      },
      panControl : false,
      streetViewControl : false,
      mapTypeControl: false,
      overviewMapControl: false
    });
    map.addMarker({
      lat: lat,
        lng: lng,
      title: place
    });
};