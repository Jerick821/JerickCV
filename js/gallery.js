// Lightbox Gallery link: http://dimsemenov.com/plugins/magnific-popup/
    $(document).ready(function() {
        $('.popup-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0,1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                /* titleSrc: function(item) {
                    return item.el.attr('title') + '<small>by Jerick Semeros</small>';
                   
                } */
                
                titleSrc: function(item) {
                    return '<strong class="color">' + item.el.attr('title') + '</strong>'
                            + '<br>' + 
                    
                            'Github Link - ' + '<a href="' + item.el.attr('github-link') + '" target="_blank">' 
                                    + item.el.attr('github-link') + '</a>' 
                    
                            + '<br>' + 

                            'Website Link - ' + '<a href="' + item.el.attr('website-link') + '" target="_blank">' 
                                    + item.el.attr('website-link') + '</a>' 
                   
                }

            }
        });

        $('.popup-gallery-illus').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0,1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                /* titleSrc: function(item) {
                    return item.el.attr('title') + '<small>by Jerick Semeros</small>';
                   
                } */
                
                titleSrc: function(item) {
                    return ''
                   
                }

            }
        });
    });