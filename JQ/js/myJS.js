function go(){//function för att kalla på de första händelserna i index filen
    $(document).ready(function(){

        // funktion åt barnen, blir stora och mindre ock får text 
        //Länkar där jag har hittat kod för att lära mig hantera funktionerna
        //  http://api.jquery.com/animate/
        // http://api.jquery.com/ 

        $( "#go" ).click(function() {
          $( ".questionText" ).animate({
                width: "400px",
                height: "400px",
                opacity: 100, 
                borderWidth: "10px",
                borderRadius: "50%"
          }, 3000 );
          $( ".imgMove" ).animate({
                width: "300px",
                height: "300px",
                opacity: 100, 
                marginLeft: "45px",
                marginTop: "45px",
          }, 3000 );
         $( ".questionText1" ).animate({
                position:"absolute",
                width: "300px",
                height: "300px",
                opacity: 100, 
                left: "245px",
                top: "20px",
          }, 3000 );
         $( ".questionText2" ).animate({
                position:"absolute",
                width: "300px",
                height: "300px",
                opacity: 100, 
                left: "845px",
                fontSize: "3em",
                top: "60px",
          }, 3000 );
        $( ".questionText" ).animate({
                width: "100px",
                height: "100px",
                opacity: 100, 
                borderWidth: "1px",
                borderRadius: "50%"
          }, 6000 );
        $( ".imgMove" ).animate({
                width: "60px",
                height: "60px",
                opacity: 100, 
                marginLeft: "18px",
                opacity: 0.4, 
                margin: "15px",
          }, 7000 );
        });
        //https://www.sitepoint.com/jquery-settimeout-function-examples/
        // funktion åt pil
        function arrow(){
           // $(".showArrow").fadeIn(1000).delay(1000).fadeOut(1000);
                $(".showArrow").fadeIn(1000).delay(1000).fadeOut(1000).fadeIn(1000).delay(1000).fadeOut(1000);  
                $(".arrowDown").fadeIn(1000).delay(1000).fadeOut(1000).fadeIn(1000).delay(1000).fadeOut(1000);
          }

        setTimeout(arrow, 9000);

        function blink(direcction) {
                $(direcction || this).delay(150).fadeOut(1000).delay(150).fadeIn(1000, blink); 
          }//http://stackoverflow.com/questions/11777997/jquery-infinite-fadeout-fadein-effect
        blink($('.showArrow2'));
        blink($('.arrowDown2'));         
        //Slut funktion åt pil
        //for accordion boiling coffe and brushing shoes
        $(".byt").click(function(){
                    $(".showText").slideToggle("slow");
            });
         $(".byt2").click(function(){
                    $(".showText2").slideToggle("slow");   
            });              
        $(".byt3").click(function(){
                    $(".showText3").slideToggle("slow");     
            });    
    }); 
}
//Slut function go
//Börjar andra deln av sidan
function go2(){
    $(document).ready(function(){
        //Kaffe effekter
        //http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_slideup_slidedown_call
        $(".a").hover(function(){
                    $(this).slideUp("slow", "swing" );
                    $(this).slideDown("slow", "swing" );
                    $(this).slideUp("slow", "swing" );
                    $(this).slideDown("slow", "swing" );
        $(this).slideUp("slow", "swing", function(){
        //http://stackoverflow.com/questions/6016988/applying-css3-gradients-with-jquery   
        $(" .coffeePot").css({background:'linear-gradient(-180deg,#1d0c00,  #8e3c00,#ff710a, #ff710a, #1d0c00)'});
            }); // http://www.w3schools.com/css/css3_gradients.asp

        });

        $('.p1').hover(function() {
            $(this).css({"display": "none"});
            }); 
        $('.p2').hover(function() {
              $(this).css({"display": "none"});
            });
        $('.p3').hover(function() {
           $(this).css({"display": "none"});
            }); 
        $('.p4').hover(function() {
              $(this).css({"display": "none"});
            }); 
        $('.p5').hover(function() {
           $(this).css({"display": "none"});
            }); 
        $('.p6').hover(function() {
            $(this).css({"display": "none"});
            });
        $('.p7').hover(function() {
           $(this).css({"display": "none"});
            }); 
        $('.p8').hover(function() {
            $(this).css({"display": "none"});
            }); 
         $('.p9').hover(function() {
            $(this).css({"display": "none"});
         }); 
        $('.p10').hover(function() {
            $(this).css({"display": "none"});
            });
        $('.p11').hover(function() {
            $(this).css({"display": "none"});
            }); 
        $('.p12').hover(function() {
            $(this).css({"display": "none"});
            }); 
        $('.p13').hover(function() {
            $(this).css({"display": "none"});
            }); 
        $('.p14').hover(function() {
            $(this).css({"display": "none"});
            });
        $('.p15').hover(function() {
            $(this).css({"display": "none"});
            }); 
        $('.p16').hover(function() {
            $(this).css({"display": "none"});
            }); 
        //Slut på kaffe             
        //Sko effekte               
        $( ".box" ).hover(function() {
            $( '.shoe2' ).fadeOut( 6000 );
            $( '.shoe2' ).fadeIn( 6000 );
            });  
        //http://html-tuts.com/move-div-in-another-div-with-jquery/
        $(".byt4").click(function(){
            $('.actualPlaceBSc').prependTo('.newPlaceBSc');
            $(".imgMove22").animate({         
                marginTop:"-=370px",
                height: '+=320px',
                width: '+=200px'
            },
          {
                duration: 'slow',
                easing: 'easeOutBounce'

          }, 6000);
            $(".imgMove22").effect( "shake", {times:4}, 6000 );
            $( ".imgMove3" ).effect( "shake", {times:14}, 0 );
            $(".imgMove3").animate({ 'zoom':0.002 }, 4000);
            //För att visa text efter skellett och barn animation
            $( ".imgMove3" ).queue(function() {//https://api.jquery.com/queue/ 
            $('.bye').show("scale",{direction: "horizontal"  }, 2000);//http://api.jquery.com/show/  https://api.jqueryui.com/scale-effect/
            $( this ).dequeue();
            });
        });

    });
}
//Slut funktion åt barnen, blir stor ock får text 