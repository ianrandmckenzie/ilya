/**
 * Print out text in console
 *
 * @return {[type]} [description]
 */
// let test = (a, b) => {
//   return `Test: ${a} and ${b}`;
// };

// console.log(test('yo', 'bro'));

$("#logo_1").click(function(){
  getCheffy(".shape_1", "#ilya");
  $("#profile_photo").hide();
  $("#profile_photo").fadeIn(2000);
});

$("#logo_2").click(function(){
  getCheffy(".shape_1", "#social");
});

$("#logo_3").click(function(){
  getCheffy(".shape_1", "#bio");
});

$("#logo_4").click(function(){
  getCheffy(".shape_1", "#extra");
});

$("#logo_5").click(function(){
  getCheffy(".shape_2", "#portfolio");
  $("#portfolio").show();
});

function getCheffy(shape,id){
  $(".cls-1").css("fill", "#c1272d");
  $(this).css("fill", "#e7e7e7");
  $(".info-panel").hide();
  $(shape).width("0px");
  $(shape).animate({
    width: "100%",
  }, 1500, "linear");
  $(id).show();
}
