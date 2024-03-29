import $ from 'jquery';
export class FlashCard{
  constructor (name)
  {
    this.name = name;
    this.score = 100;
    this.time = 31;
    this.dict = {
      1: "What is JS?",
      2: "Explain MVC",
      3: "Scope var",
      4: "Local var"
    }

    this.dict1 = {
      "What is JS?" : "a",
      "Explain MVC" : "b",
      "Scope var" : "a",
      "Local var" : "c"
    }
  }

setTime()
{
  setInterval(()=>{
    if(this.time > 0 && $("input:checked").val() === undefined)
    {

    this.time --;
    $("#time").text(this.time);
  }
  },1000);
}

showNextQuestion(max,min)
{
  setTimeout(()=>{
;
  $("#result").text(this.getRandomQuestion(4,1));
  $("input[name= 'firstQ']").prop('checked',false);
  this.time = 31;
},1000);
}


getRandomQuestion(max,min)
{

  return this.dict[Math.floor(Math.random() * (max - min)) + min];
}

countScore( question,userAnswer)
 {
   if(this.checkAnswer( question,userAnswer))
   {
     this.score += this.time;
   }
   else {
     this.score -= this.time;
   }
   return this.score;
 }


checkAnswer(question, userAnswer)
{

  if (userAnswer === this.dict1[question])
  {
    return true;
  }
  else
  {
    return false;
  }
    return true;
}






}
