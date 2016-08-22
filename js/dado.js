var but = document.getElementById('button1');
var inNum = document.getElementById('inNum');

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
     stage.style.display="none"; //quita el dado
     document.getElementById('banner').innerHTML="";//quita el banner
     if(inNum.value.length !== 0){
       //setTimeout(stage.style.display="flex", 3000);
       setTimeout(showDice, 1000);
       setTimeout(checkInput, 4000);
     }
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
       if(parseInt(n.value) === randNum){
         document.getElementById('banner').innerHTML="<h2 id='win'>YOU WIN!</h2>";
       }
       else {
         document.getElementById('banner').innerHTML="<h2 id='looser'>YOU LOOSE!</h2>";
       }

     }

          changeButtonLayout();
           //sets the button to play again if it said play before
          setFocus(); //sets the focus and cursor on the input tag

} ////END ShowDivs

        function changeButtonLayout() {
          if(inNum.value.length === 0){
            but.innerHTML = "PLAY";
          }else {
            but.innerHTML = "PLAY AGAIN!";
          }


          //si hay valor en input, y si se le da click en el boton play again
          // que corra de nuevo el proceso del numero random y el dado si no
          //que regrese al placeholder y tome el valor de input de nuevo ya que el user haya
          //ingresado el valor.

        }


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
        else {
          input.css("text-align", "right");
          //button changes to 'play' only when user erases the value from the input
          changeButtonLayout();
        }

      }

      function playSameNum() {
        //Play again if, there is a value on input and you hit the button1
        var inNum = document.getElementById('inNum');
        if (inNum.value) {
          stage.style.display="none"; //quita el dado
          document.getElementById('banner').innerHTML=""; //quita el banner
          setTimeout(showDivs, 3000);
        }
      }

      function showDice() {
        stage.style.display="flex";
      }
