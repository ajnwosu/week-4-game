$( document ).ready( function() {

  var wins = 0;

  var losses = 0;

  // This will need it's own function

  var targetNumber = Math.floor( ( Math.random() * 120 ) + 19 );

  $( '#number-to-guess' ).text( targetNumber )

  var userCounter = 0;

  var myImage = $( 'img' )

  console.log( myImage );



  function numberOptions() {
    return Math.floor( ( Math.random() * 12 ) + 1 );
  }



  // We need a start game function 

  function startGame() {


    targetNumber = Math.floor( ( Math.random() * 120 ) + 19 );
    $( '#number-to-guess' ).text( targetNumber )
    userCounter = 0;
    $( '#finalTotal' ).text( userCounter );

  }


  // Next we create a for loop to create crystals for every numberOption.

  myImage.each( function() {

    $( this ).attr( 'data-value', numberOptions() )

  } )

  console.log( myImage )


  $( myImage ).on( "click", function() {

    var crystalValue = ( $( this ).attr( "data-value" ) );
    crystalValue = parseInt( crystalValue );


    // console.log(userCounter)

    userCounter += crystalValue;

    console.log( crystalValue )

    $( '#finalTotal' ).text( userCounter );



    if ( userCounter === targetNumber ) {
      wins++;
      // $("#win-lose").html("<h2>Winner!</h2>");
      $( "#win-counter" ).html( "<h3>" + 'Wins: '+ wins + "</h3>" );
      alert( "You win!" );

      startGame ()

    } else if ( userCounter >= targetNumber ) {
      losses++
      // $("#win-lose").html("<h2>Loser!</h2>");
      $( "#loss-counter" ).html( "<h3>" + 'Losses: '+ losses + "</h3>" );
      alert( "You lost!" );
      
      startGame ()

    }




  } );

} );