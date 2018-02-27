$( document ).ready(function(){
    var Random=Math.floor(Math.random()*101+19)
    
    // Random Number  between 19 - 120
    //
    $('#randomNumber').text(Random);
    // Randomized number Appending to the randomNumber
    //
    var num1= Math.floor(Math.random()*11+1)
    var num2= Math.floor(Math.random()*11+1)
    var num3= Math.floor(Math.random()*11+1)
    var num4= Math.floor(Math.random()*11+1)
    // 
    // Random number  between 1 - 12
    // 
    var playerTotal= 0; 
    var wins= 0;
    var losses = 0;


    //  wins vs losses
  $('#numberWins').text(wins);
  $('#numberLosses').text(losses);


  //resets the game
  function reset(){
        Random=Math.floor(Math.random()*101+19);
        console.log(Random)
        $('#randomNumber').text(Random);
        num1= Math.floor(Math.random()*11+1);
        num2= Math.floor(Math.random()*11+1);
        num3= Math.floor(Math.random()*11+1);
        num4= Math.floor(Math.random()*11+1);
        userTotal= 0;
        $('#finalTotal').text(playerTotal);
        } 




  // sum of playerTotal 
  function Awesome(){
  alert("Awesome! You won!");
    wins++; 
    $('#numberWins').text(wins);
    reset();
  }
  //addes the losses to the userTotal
  function loser(){
  alert ("Sorry,You lose!");
    losses++;
    $('#numberLosses').text(losses);
    reset()
  }
  //sets up click for jewels
    $('#one').on ('click', function(){
      playerTotal = playerTotal + num1;
      console.log("New playerTotal= " + playerTotal);
      $('#finalTotal').text(playerTotal); 
            //sets win/lose conditions
          if (playerTotal == Random){
            Awesome();
          }
          else if ( playerTotal > Random){
            loser();
          }   
    })  
    $('#two').on ('click', function(){
      playerTotal = playerTotal + num2;
      console.log("New playerTotal= " + playerTotal);
      $('#finalTotal').text(playerTotal); 
          if (playerTotal == Random){
            Awesome();
          }
          else if ( playerTotal > Random){
            loser();
          } 
    })  
    $('#three').on ('click', function(){
      playerTotal = playerTotal + num3;
      console.log("New playerTotal= " + playerTotal);
      $('#finalTotal').text(playerTotal);
  //sets win/lose conditions
            if (playerTotal == Random){
            Awesome();
          }
          else if ( playerTotal > Random){
            loser();
          } 




    })  
    $('#four').on ('click', function(){
     playerTotal = playerTotal + num4;
      console.log("New playerTotal= " + playerTotal);
      $('#finalTotal').text(playerTotal); 
        
            if (playerTotal == Random){
            Awesome();
          }
          else if ( playerTotal > Random){
            loser();
          }
    });   
  }); 