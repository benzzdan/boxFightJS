var b1hp = parseInt($('#b1hpbar')[0].style.width);
var b2hp = parseInt($('#b2hpbar')[0].style.width);

var r = 1;

var b1={
  sps:1, //velocidad estandar
  spAcum:0, //vel acumulada
  hp:b1hp, //vida
  st:2, //fuerza
  name:"Little Mac"
};

var b2={
  sps:1,
  spAcum:0,
  hp:b2hp,
  st:1,
  name:"Fat Jim"
};


  var h1;


function dado(){
  var dado = Math.floor(Math.random()*6)+1;
  return dado;
}


  function boxeador1() {

    b1.spAcum = b1.spAcum + b1.sps;
    if(b1.spAcum >= 1) {
      b1.spAcum --; //se le resta una unidad de velocidad acumulada
      h1=dado(); //se ejecuta dado y se asigna a h1
      if(h1 > 3){ //se evalua si se saco el 50% de prob para el golpe
        b2.hp = b2.hp - b1.st;//si evalua true, se le resta a la vida del boxeador 2
        //mostrar golpe
        //$('#anounce').css("background-image", "")
        $('#b2hpbar').animate({width: '-=10%'});
        $('.boxeador2').addClass('punchBox2');
        setTimeout(function(){ $('.boxeador2').removeClass('punchBox2');}, 200);
        $('#anounce').css({"background-image": "url('images/powe.jpeg')"});
        setTimeout(function(){
        $('#anounce').css({"background-image": ""});
      }, 500);
        //$('#anounce').animate({background-image: url("../images/powe.jpeg"),
        //background-size: "200px 200px"});
        //alert(b1.name+" pego!----> "+b1.name+" HP:"+b1.hp+"---- "+b2.name+" HP:"+b2.hp); //alerta para saber que si pego
        if(b2.hp <= 0){ //se checa si tiene vida todavia el boxeador2
            document.getElementById('msg').innerHTML=b1.name+" won!";
            r=5; //para que el programa termine
            b1.sps= 0; // para que terminen los whiles
            b2.sps = 0; //para que no se ejecute el while del boxeador 2
          }
      }
    }
    $('#btnBox1').css("display", "none");
    $('#btnBox2').css("display", "block");
  } //fin funcion boxeador 1


  ///funcion boxeador2

   function boxeador2(){
     b2.spAcum = b2.spAcum + b1.sps;
     if(b2.spAcum >= 1) {
       b2.spAcum --; //se le resta una unidad de velocidad acumulada
       h1=dado(); //se ejecuta dado y se asigna a h1
       if(h1 > 3){ //se evalua si se saco el 50% de prob para el golpe
         b1.hp = b1.hp - b2.st;//si evalua true, se le resta a la vida del boxeador 2
         //pega una vez animacion
        //$('.boxdosBrazo').css("animation", "");//SI PEGA PERO SOLO UNA VEZ Y YA DESPUES NO PEGA MAS!
         $('#b1hpbar').animate({width: '-=10%'});
         $('.boxeador').addClass('punchBox');
         setTimeout(function(){ $('.boxeador').removeClass('punchBox');}, 200);
         $('#anounce').css({"background-image": "url('images/powe.jpeg')"});
         setTimeout(function(){
         $('#anounce').css({"background-image": ""});
       }, 500);
         //alert(b1.name+" pego!----> "+b1.name+" HP:"+b1.hp+"---- "+b2.name+" HP:"+b2.hp); //alerta para saber que si pego
         if(b1.hp <= 0){ //se checa si tiene vida todavia el boxeador2
             setTimeout(function(){
               document.getElementById('msg').innerHTML=b2.name+" won!";
             }, 2000);
             r=5; //para que el programa termine
             b1.sps= 0; // para que terminen los whiles
             b2.sps = 0; //para que no se ejecute el while del boxeador 2
           }
       }
     }



     $('#btnBox2').css("display", "none");
     $('#btnBox1').css("display", "block");
     addRound();

     //siempre terminara el round con este boxeador2, checar el roundCount


   }

    //ends boxeador2 function


    function addRound() {
      if(r<5){
        r = r+1;
        $('#roundCount')[0].innerHTML="Round   "+r;
      }else{
        endFight();
      }


    }


 function Inicio() {
   $('#roundCount')[0].innerHTML="Round   "+r;
   $('#startBtn').css("display", "none");
   $('#btnBox1').css("display", "block");
   //muestra botonboxeador1, cuando termine boxeador1, oculata el boton y pone el del boxeador 2
 }

 function endFight(){
     $('#btnBox2').css("display", "none");
     $('#btnBox1').css("display", "none");
     if(b1.hp > b2.hp){
       setTimeout(function(){
         document.getElementById('msg').innerHTML=b1.name+" won!";
       }, 500);
     }else{
       setTimeout(function(){
         document.getElementById('msg').innerHTML=b2.name+" won!";
       }, 500);
     }

     $('#restart').css("display", "block");

 }


 function playAgain(){
   r = 1;
   $('#restart').css("display", "none");
   $('#startBtn').css("display", "block");
   //banner
   $('#msg')[0].innerHTML="";

   //roundCount
   $('#roundCount')[0].innerHTML="";
   //barras de vida
   $('#b1hpbar').animate({width: "100%"});
   $('#b2hpbar').animate({width: "100%"});
 }
