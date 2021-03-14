$(function() {
    $("#anotherburger").on("click", function(event) {
      var id = $(this).data("id");
      var devourAgain = {
        devour: 1
    };
  
      // Send the PUT request.
      $.ajax("/burgers/new" + id, {
        type: "PUT",
        data: devourAgain
      }).then(
        function() {
          console.log("devour test", devourAgain);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    // $("anotherburger").on("submit", function(event) {
    //   // Make sure to preventDefault on a submit event.
    //   event.preventDefault();
  
    //   var newFoodTwo = {
    //     burger_name: $("[name=burger_name]").val().trim()

    //   };
  
    //   // Send the POST request.
    //   $.ajax("/burgers/new", {
    //     type: "POST",
    //     data: newFoodTwo
    //   }).then(
    //     function() {
    //       console.log("Working");
    //       // Reload the page to get the updated list
    //       location.reload();
    //     }
    //   );
    // });
});
