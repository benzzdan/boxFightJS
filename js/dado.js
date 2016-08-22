//Funcion que nos va a mostrar el dado//
function showDivs(){
 //elige numero random
 var randNum = Math.floor(Math.random()*6)+1;
 //agarra el div stage

 var stage = document.getElementById('stage');
 //cambia la imagen face1 por el numero que salio
 var img = document.getElementById('face1').getElementsByTagName('img');
 //cambia la cara de la imagen face1, ya que esta es la ultima imagen que muestra el dado cuando acaba la animacion
 img.first.src="images/dice"+randNum+".png"; //cambie la imagen a mostrar
 //Si el stage esta mostrandose cuando se le da click al boton, entonces, lo quita y quita lo que diga el banner
 if (stage.style.display === "flex"){
     stage.style.display="none";
     document.getElementById('banner').innerHTML="";
     }
  //en caso de que no estre mostrandose el dado, lo va a mostrar y va a mostrar el banner
 else{
    stage.style.display="flex";
    setTimeout(checkInput, 3000);
     }
     //Funcion checa el input del user

     function checkInput() {
       var n = document.getElementById('inNum');
       //sacar el valor y compararlo con el de randNum y determinar si ganaste
       if(parseInt(n.innerHTML) === randNum){
         document.getElementById('banner').innerHTML="<h2 id='win'>GANASTE!</h2>";
       }
       else {
         document.getElementById('banner').innerHTML="<h2 id='looser'>PERDISTE!</h2>";
       }

     }
     //Funcion que muestra el banner de ganador o perdedor
     function Banners(){
            if(randNum === 6){
              document.getElementById('banner').innerHTML="<h2 id='mega'>MEGA GANASTE!</h2>";
            }
            else if(randNum % 2 === 0) {
              document.getElementById('banner').innerHTML="<h2 id='win'>GANASTE!</h2>";
            }
            else{
              document.getElementById('banner').innerHTML="<h2 id='looser'>PERDISTE!</h2>";
            }
          }
          playAgain();
          setFocus();
        }

        function playAgain() {
          var but = document.getElementById('button1')
          if(but.innerHTML === "PLAY"){
            but.innerHTML = "PLAY AGAIN!"
          }
          else {
            but.innerHTML = "PLAY"
            var inNum = document.getElementById('inNum');
            inNum.value="";
            //setCursor();
          }
        }

        //autofocus

        //Blinker function
/* //////////nice function that makes placeholder blink its content///////////
        function blinker() {
          //gets the placeholder of input
          if($('input[type=text]').attr('placeholder'))
          {
            //sets the placeholder empty if it has something
            $('input[type=text]').attr('placeholder', '');
          }
          else
          {
            $('input[type=text]').attr('placeholder', 'Ingresa un número');

          }

          setTimeout(blinker, 1000);
          setFocus();
          setCursor();
        }
        */

//////Cuando se ejecuta el documento se carga este script //////
        function setFocus() {
          document.getElementById('inNum').focus();
          setCursor();
        }

        function setCursor() {
            var input = $('#inNum');
            if(input[0].value.length === 0){
              /*
            var strLength = input[0].placeholder.length;
            input.focus();
            input[0].setSelectionRange(strLength, strLength); */
            input.css("text-align", "right");
          }


      }

      function setPosVal() {
        var input = $('#inNum');
        if(input[0].value){
          input.css("text-align", "center");
        }
      }
