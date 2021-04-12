Player1display=localStorage.getItem("player1");
Player2display=localStorage.getItem("player2");
player1score=0;
player2score=0;

document.getElementById("player1name").innerHTML=Player1display + " : ";
document.getElementById("player2name").innerHTML=Player2display + " : ";
document.getElementById("player1score").innerHTML=player1score;
document.getElementById("player2score").innerHTML=player2score;
document.getElementById("playerquestion").innerHTML="Question turn : "+ Player1display;
document.getElementById("playeranswer").innerHTML="Answer turn : "+ Player2display;

function send(){

   number1=document.getElementById("number1").value;
   number2=document.getElementById("number2").value;
   actual_answer=parseInt(number1) * parseInt(number2);
 questionnumber= "<h2>"+number1 + "x" + number2 + "</h2>";
 inputbox= "<br>Answer :<input type='text' id='input_check_box'>";
 checkbutton="<br><br><button class='btn btn-info' onclick='check()'>check</button>";
 row= questionnumber+inputbox+checkbutton;
document.getElementById("output").innerHTML = row;
document.getElementById("number1").value = "";
document.getElementById("number2").value = "";


}

questionturn="player1";
answerturn="player2";

function check(){

    getanswer=document.getElementById("input_check_box").value;
    

    if(getanswer == actual_answer){


 if(answerturn == "player1"){

    player1score= player1score + 1 ;
    document.getElementById("player1score").innerHTML=player1score;

 }
 else{
 player2score= player2score + 1 ;
    document.getElementById("player2score").innerHTML=player2score;
    
 }

    }

   if(questionturn == "player1"){

      questionturn="player2";
      document.getElementById("playerquestion").innerHTML="Question turn : " + Player2display;

   }
   else{

      questionturn="player1";
      document.getElementById("playerquestion").innerHTML="Question turn : " + Player1display;
      
   }

   if(answerturn == "player1"){

      answerturn="player2";
      document.getElementById("playeranswer").innerHTML="Answer turn : " + Player2display;

   }
   else{

      answerturn="player1";
      document.getElementById("playeranswer").innerHTML="Answer turn : " + Player1display;
      
   }
   document.getElementById("output").innerHTML = "";
}

