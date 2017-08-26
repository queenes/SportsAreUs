$(document).ready(function() {
  $("form#pingpong").submit(function(event) {
    event.preventDefault();
       $("ul#display").empty();


    var number = $("input#number").val();

        for (i = 1; i <= number; i++)
          if (i % 3 === 0 && i % 5 === 0) {
            $("ul#display").append("<li>pingpong</li>");

          } else if (i % 3 === 0) {
          $("ul#display").append("<li>ping</li>");

        } else if (i % 5 === 0) {
          $("ul#display").append("<li>pong</li>");

        } else {
          $("ul#display").append("<li>" + i + "</li>");
        }
        $(".result").show();

  });
});
