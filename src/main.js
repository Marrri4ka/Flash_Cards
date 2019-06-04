import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FlashCard } from './flashcard.js';


$(document).ready(function(){
  $("#btn").click(function(){
    let flashcard = new FlashCard("JS");
    var random = flashcard.getRandomQuestion(4,1);
    var myTime =flashcard.setTime();
    $("#time").text(myTime);
    $("#score").text(flashcard.score);
    $("#result").text(random);
    $("input[type='radio']").click(function(){
      flashcard.showNextQuestion(4,1);
    let answer = $("input:checked").val();

    if (flashcard.checkAnswer(random,answer))
    {
      $("#youranswer").text("correct");
         $("#score").text(flashcard.countScore(random,answer));
    }
    else
    {
      $("#youranswer").text("incorrect");
       $("#score").text(flashcard.countScore(random,answer));
    }


        // $("#myanswer").text(answer);
    });






});
});