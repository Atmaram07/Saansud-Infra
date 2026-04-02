
(function($) {
    $(document).ready(function(){
        //dropdown-menu on hover
        if ($(window).width() > 767) {
            $('li.dropdown').hover(function() {
                $(this).find('.dropdown-menu').stop(true, true).fadeIn();
            }, function() {
                $(this).find('.dropdown-menu').stop(true, true).fadeOut();
            });
        }

         // Bootstrap 5 uses 'show' class to indicate when navbar is open
        $('.navbar-toggler').on('click', function() {
            if ($(this).hasClass('collapsed')) {
            // Remove 'menu-open' when collapsing
            $('body').removeClass('menu-open');
            } else {
            // Add 'menu-open' when expanding
            $('body').addClass('menu-open');
            }
        });

        //Collapsable content 
        $('ul.features .title').on('click', function(e){
            e.preventDefault();
            if(!$(this).hasClass('active')){
                $('.collapsable-content').slideUp();
                $('ul.features .title').removeClass('active');
                $(this).addClass('active');
                $(this).closest('li').find('.collapsable-content').slideDown();
            }else{
                $(this).removeClass('active');
                $(this).closest('li').find('.collapsable-content').slideUp();
            }
        });

        AOS.init(); //Animation init
        jQuery('[data-vbg]').youtube_background();

        //Share Projects
        function shareProject(title, url) {
            var subject = encodeURIComponent("Check out this project: " + title);
            var body = encodeURIComponent("Hey,\n\nI found this amazing project and thought you might like it:\n" + title + "\n\nYou can check it out here: <a href='"+url+"'>" + url + "</a>");
            
            var mailtoLink = "mailto:?subject=" + subject + "&body=" + body;
        
            // Open the email client with the pre-filled email
            window.location.href = mailtoLink;
        }
        $('.share-project').on('click', function(e){
            e.preventDefault();
            let title = $(this).closest('.project-card').find('.title a').text();
            let url = $(this).closest('.project-card').find('.title a').attr('href');
            url = window.location.hostname + '/' + url;
            //shareProject(title, url);
            window.open("https://www.linkedin.com/sharing/share-offsite/?url=" + url, '_blank');
        });

        // Generic Article Sharing for Blog pages
        function shareArticle(title, url) {
            if (!url) {
                url = window.location.href;
            }

            if (navigator.share) {
                navigator.share({
                    title: title || document.title,
                    text: title || document.title,
                    url: url
                }).catch(function (err) {
                    console.warn('Share failed:', err);
                });
                return;
            }

            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(url).then(function () {
                    alert('Link copied to clipboard. You can paste it anywhere to share.');
                }).catch(function () {
                    window.prompt('Copy this URL to share', url);
                });
            } else {
                window.prompt('Copy this URL to share', url);
            }
        }

        $('.btn-share').on('click', function (e) {
            e.preventDefault();

            var $btn = $(this);
            var title = $btn.data('title') || document.title;
            var url = $btn.data('url') || window.location.href;

            var path = $btn.data('path');
            if (path) {
                if (path.match(/^https?:\/\//i)) {
                    url = path;
                } else {
                    url = window.location.origin.replace(/\/$/, '') + '/' + path.replace(/^\/+/, '');
                }
            }

            shareArticle(title, url);
        });

        // Hero Slider
        new Swiper(".heroSlider", {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            effect: 'fade',
            autoplay: {
                delay: 4500,
                disableOnInteraction: false,
              },
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },

        }); 
        // leadershipSlider Slider
        new Swiper(".leadershipSlider", {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: false,
            effect: 'fade',
            autoplay: {
                delay: 6500,
                disableOnInteraction: false,
              },
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
        }); 
        // Media Slider
        new Swiper(".mediaSlider", {
            slidesPerView: 2,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
              },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                },
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 120,
                },
            }
        }); 
        // recognitionsSlider Slider
        new Swiper(".recognitionsSlider", {
            slidesPerView: 2,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
              },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 30,
                },
                1200: {
                    slidesPerView: 6,
                    spaceBetween: 40,
                },
            }
        }); 
        // Project Slider
        new Swiper(".projectSlider", {
            slidesPerView: 1,
            spaceBetween: 10,
            loop: false,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
              },
            navigation: {
              nextEl: ".slide-next-projectSlider",
              prevEl: ".slide-prev-projectSlider",
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
              },
            breakpoints: {
                768: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            }
        });
        // Testimonial Slider
        new Swiper(".testimonialSlider", {
            slidesPerView: 1,
            spaceBetween: 10,
            loop: false,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
              },
            navigation: {
              nextEl: ".slide-next-testimonialSlider",
              prevEl: ".slide-prev-testimonialSlider",
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
              },
            breakpoints: {
                768: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            }
        }); 


        $('.job-list-sec .nav-link').on('click', function(){
          
            if($(window).width() < 993){
                
                let getItem = $(this).attr('data-bs-target');

                // Scroll to the target section
                $('html, body').animate({
                    scrollTop: $(getItem).offset().top - 50
                }, 500);
            }
        });



    });
})( jQuery );