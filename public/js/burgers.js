$(function() {
    $(".devour-btn").on("click", function(event) {
      var id = $(this).data(".this-btn").val();
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
      }).then(function(data) {
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
});