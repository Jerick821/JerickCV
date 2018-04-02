$(document).ready(function() {
    //initial
    $('#experience-content').load('content/experience.html');
    $('#project-content').load('content/project/PHP.html');
    $('#contact').hide();




    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    /* ---------------------------------------------
         typist init
        --------------------------------------------- */
    if (typeof Typist == "function") {
        new Typist(document.querySelector(".typist-text"), {
            letterInterval: 60,
            textInterval: 3000
        });
     }
     
     // Highlight the top nav as scrolling occurs
     $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    


    //Filter
    $(document).ready(function(){
        $("#filter-node").click(function () {
            $('#project-content').load('content/project/node.html', slideContent);     
        });
        $("#filter-react").click(function () {
            $('#project-content').load('content/project/react.html', slideContent);
        });
        $("#filter-php").click(function () {
            $('#project-content').load('content/project/PHP.html', slideContent);     
        });
        $("#filter-duda").click(function () {
            $('#project-content').load('content/project/duda.html', slideContent);     
        });
        $("#filter-angular").click(function () {
            $('#project-content').load('content/project/angular.html', slideContent);     
        });
        $("#filter-illustration").click(function () {
            $('#project-content').load('content/project/illustration.html', slideContent);     
        });
        $("#filter-csharp").click(function () {
            $('#project-content').load('content/project/c-sharp.html', slideContent);     
        });

        function slideContent() {
            $(this).hide();
            $(this).show().addClass("w3-animate-left") ;
        }

    });
});



$(function(){
    $('.contact-toggle').click(function() {
        $(this).hide('slow');
        $("#contact").slideDown('slow');
        $('html, body').animate({scrollTop: $("#contact").offset().top}, 'slow');
        
        return false;
    });
});

// email jquery ajax
function _(id){ return document.getElementById(id); }

function submitForm(){
    _("mybtn").disabled = true;
    var formdata = new FormData();
    formdata.append( "n", _("n").value );
    formdata.append( "m", _("m").value );
    formdata.append( "e", _("e").value );
    var ajax = new XMLHttpRequest();
    ajax.open( "POST", "content/contact.php" );
    ajax.onreadystatechange = function() {
        if(ajax.readyState == 4 && ajax.status == 200) {
            if(ajax.responseText == "success"){
                $("#my_form")[0].reset();
                _("my_form").innerHTML += '<div class="contact-success">SENT!</div>';
                _("mybtn").disabled = false;
            } else {
                _("status").innerHTML = ajax.responseText;
                _("mybtn").disabled = false;
            }
        }
    }
    ajax.send( formdata );
}    