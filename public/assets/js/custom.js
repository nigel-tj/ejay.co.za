

/*=============================================================
    Authour URI: www.binarytheme.com
    License: Commons Attribution 3.0

    http://creativecommons.org/licenses/by/3.0/

    100% To use For Personal And Commercial Use.
    IN EXCHANGE JUST GIVE US CREDITS AND TELL YOUR FRIENDS ABOUT US
   
    ========================================================  */

(function ($) {
    "use strict";
    var mainApp = {

        main_fun:function() {
            $(window).load(function () {
                $(".loader").fadeOut("slow");
            });
            $(function () {
                $.vegas('slideshow', {
                    backgrounds: [
                      { src: 'assets/img/5.jpg', fade: 1000, delay: 9000 }, //CHANGE THESE IMAGES WITH YOUR ORIGINAL IMAGES
                      { src: 'assets/img/2.jpg', fade: 1000, delay: 9000 }, //THESE IMAGES ARE FOR DEMO PURPOSE ONLY YOU, CAN NOT USE THEM WITHOUT AUTHORS PERMISSION
                       { src: 'assets/img/3.jpg', fade: 1000, delay: 9000 }, //SEE DOCUMENTATION FOR ORIGINAL URLs/LINKs OF IMAGES
                                  { src: 'assets/img/4.jpg', fade: 1000, delay: 9000 },
                                  { src: 'assets/img/1.jpg', fade: 1000, delay: 9000 },
                                  { src: 'images/uploads/deadGwadz/IMG_4101.jpg', fade: 1000, delay: 9000 },
                                  { src: 'images/uploads/deadGwadz/IMG_4102.jpg', fade: 1000, delay: 9000 },
                                  { src: 'images/uploads/deadGwadz/IMG_4104.jpg', fade: 1000, delay: 9000 },
                                  { src: 'images/uploads/deadGwadz/IMG_4105.jpg', fade: 1000, delay: 9000 },
                                  { src: 'images/uploads/deadGwadz/IMG_4393.jpg', fade: 1000, delay: 9000 },
                                  { src: 'images/uploads/deadGwadz/IMG_4413.JPG', fade: 1000, delay: 9000 },
                                  { src: 'images/uploads/deadGwadz/IMG_4414.JPG', fade: 1000, delay: 9000 },
                                  { src: 'images/uploads/deadGwadz/IMG_4415.JPG', fade: 1000, delay: 9000 },
                                  { src: 'images/uploads/deadGwadz/IMG_4416.JPG', fade: 1000, delay: 9000 },
                                  { src: 'images/uploads/deadGwadz/IMG_4417.JPG', fade: 1000, delay: 9000 },
                                  { src: 'images/uploads/deadGwadz/IMG_4418.JPG', fade: 1000, delay: 9000 },
                                  { src: 'images/uploads/deadGwadz/IMG_4419.JPG', fade: 1000, delay: 9000 },
                                  { src: 'images/uploads/deadGwadz/IMG_4420.JPG', fade: 1000, delay: 9000 },
                                  { src: 'images/uploads/deadGwadz/IMG_4421.JPG', fade: 1000, delay: 9000 }
                     
                    ]
                })('overlay', {
                    /** SLIDESHOW OVERLAY IMAGE **/
                    src: 'assets/plugins/vegas/overlays/15.png' // THERE ARE TOTAL 01 TO 15 .png IMAGES AT THE PATH GIVEN, WHICH YOU CAN USE HERE
                });

            });

            $(function () {
                var $header = $("#headLine");
                var header = ['WORKING..', 'LOADING..','ejay.co.za']; // CHANGE TEXT HERE TO YOUR TEXT , YOU CAN USE MANY WORDS SEPRATED BY , 

                var position = -1;

                !function loop() {
                    position = (position + 1) % header.length;
                    $header
                        .html(header[position])
                        .fadeIn(1000)
                        .delay(1000)
                        .fadeOut(1000, loop);
                }();
            });

        },

        initialization: function () {
            mainApp.main_fun();

        }

    }
    // Initializing ///

    $(document).ready(function () {
        mainApp.main_fun();
    });

}(jQuery));



