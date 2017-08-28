$(document).ready(function() {
  $("#lion").click(function() {
    $("#lionInfo").show();
    $("#tigerInfo").hide();
    $("#bearInfo").hide();
  });
  $("#tiger").click(function() {
    $("#lionInfo").hide();
    $("#tigerInfo").show();
    $("#bearInfo").hide();
  });
  $("#bear").click(function() {
    $("#lionInfo").hide();
    $("#tigerInfo").hide();
    $("#bearInfo").show();
  });

});
