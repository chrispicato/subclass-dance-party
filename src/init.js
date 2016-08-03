$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      2000
      //Math.random() * 2000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);

  });

  $('.lineUp').on('click', function(event) {

    // var $pandaGirl = $(".pandaGirl");
    // var $panda = $(".panda");

    // for (var i = 0; i < window.dancers.length; i++) {
    //   $('<div></div>').append(window.dancers[i]);
    //   console.log($('.container'));
    // for (var i = 0; i < window.dancers.length; i++) {
    //   var leftVal = 30;
    //   window.dancers[i].$node.offset({top: 700, left: leftVal});
    //   leftVal = leftVal + 30;
    // }
    // $pandaGirl.position("absolute");
    // $panda.position("absolute");
    // var dancersDiv = $('<div></div>');
    // dancersDiv.prependTo('body');

    for (var i = 0; i < window.dancers.length; i++) {
      $('span.container').append('<img height="100" width="100" src="./img/panda2.png"></img>');
      $('span.container').append('<img height="100" width="100" src="./img/pandadancer.png"></img>');
    }


    // for (var i = 0; i < window.dancers.length; i++) {
    //   $('<div></div>').prepend(window.dancers[i]);
    // }

  });

  $('.pandaGirl').on('click', function() {
    $(this.$node).animate({'background': 'black'});
  });
});
