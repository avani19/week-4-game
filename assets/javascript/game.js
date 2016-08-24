var selectedNumbers=[20, 1, 14, 8];
var counter=0;
var score = "Your total score is: ";
var randomNumberTarget = $("#randomNumber");
var win = 0;
var winword= "Wins: ";
var loss = 0;
var lossword= "losses: ";
var randomNumber = Math.floor((Math.random() * 100) - 1);
var randomNumberTarget = $("#randomNumber");
randomNumberTarget.html(randomNumber);

$(document).ready(function(){

  // console.log("working properly");
  $("#score").text(score + counter);

  for(i=0; i<selectedNumbers.length; i++){
    // give every image an single value
    var crystalImage = $('<img>');
    crystalImage.attr('data-num', selectedNumbers[i]);
    crystalImage.attr('src', 'assets/images/ruby'+(parseInt([i])+1)+'.jpg');
    crystalImage.attr('alt', 'crystals');
    crystalImage.addClass('image');
    // for every single value add an image
    $('#img1').append(crystalImage);
  }

  $('.image').on('click', function(){
    counter = counter + parseInt($(this).data('num'));;
    $("#score").text(score + counter);
    if(counter == randomNumber){
      win+=1;
      // alert('you\'ve won!');
      $("#win").html(winword + win);
    } else if (counter > randomNumber){
      loss+=1;
      // alert('you\'ve lost!');
      $("#loss").html(lossword + loss);
    }
  });

});
