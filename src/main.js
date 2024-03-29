import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { FlashCard } from './flashcard.js';


$(document).ready(function(){
  $("#btn").click(function(){


      let request = new XMLHttpRequest(); // AJAX
      const url = 'https://opentdb.com/api.php?amount=10&category=18&difficulty=medium';

      request.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
          const response = JSON.parse(this.responseText);
          getElements(response);
        }
      };

      request.open("GET", url, true);
      request.send();


    const getElements= function(response){
      $('#result').text('Here is question:' + response.results[0].question);
      $('#labelA').text(response.results[0].correct_answer);
      $('#labelB').text(response.results[0].incorrect_answers[0]);
      $('#labelC').text(response.results[0].incorrect_answers[1]);
      $('#labelD').text(response.results[0].incorrect_answers[2]);

    };
    let flashcard = new FlashCard("JS");
    var random = flashcard.getRandomQuestion(4,1);
    var myTime =flashcard.setTime();
    $("#time").text(myTime);
    $("#score").text(flashcard.score);
    $("#result").text(random);
    $("input[type='radio']").click(function(){
      let request = new XMLHttpRequest(); // AJAX
      const url = 'https://opentdb.com/api.php?amount=10&category=18&difficulty=medium';

      request.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
          const response = JSON.parse(this.responseText);
          getElements(response);
        }
      };

      request.open("GET", url, true);
      request.send();


    const getElements= function(response){
      $('#result').text('Here is question:' + response.results[0].question);
      $('#labelA').text(response.results[0].correct_answer);
      $('#labelB').text(response.results[0].incorrect_answers[0]);
      $('#labelC').text(response.results[0].incorrect_answers[1]);
      $('#labelD').text(response.results[0].incorrect_answers[2]);

    };
      // const getElements= function(response){
      //   $('#result').text('Here is question:' + response.results[0].question);
      // };
      // flashcard.showNextQuestion(4,1);
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
