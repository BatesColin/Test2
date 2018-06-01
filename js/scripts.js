$(document).ready(function() {
  $("#formOne").submit(function(event) {
var answer1 = $("select#question1").val();
var answer2 = $("select#question2").val();
var answer3 = $("select#question3").val();
var answer4 = $("select#question4").val();
var answer5 = $("select#question5").val();
var css = 0

if (answer1 === "Front End"){
  css = css +1;
}
else if (answer1 === "Back End"){
  ruby = ruby +1;
}
else if (answer1 === "Bit of Both"){
  c# = c# +1;
}
else if (answer2 === "Yes Definitly!"){
  c# = c# +1;
}
else if (answer2 === "I wouldnt Say No."){
  ruby = ruby +1;
}
else if (answer2 === "No"){
  css = css +1;
}
else if (answer3 === "Very Easy"){
  css = css +1;
}
else if (answer3 === "Fairly Easy"){
  ruby = ruby +1;
}
else if (answer3 === "Good to know but not as easy to learn."){
  c# = c# +1;
}
else if (answer4 === "Yes, all the time"){
  css = css +1;
}
else if (answer4 === "Not Really, but maybe if they offered me a job!"){
  c# = c# +1;
}
else if (answer4 === "as long as i dont have to make it look nice."){
  ruby = ruby +1;
}
else if (answer5 === ){
   =  +1;
}
else if (answer5 === ){
   =  +1;
}
else if (answer5 === ){
   =  +1;
}
if (css > ruby && css > c#)
