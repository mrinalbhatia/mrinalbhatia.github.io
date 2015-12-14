var array1 = ["word1", "word2", "word3", "word4", "word5"];
var array2 = ["word6", "word7", "word8", "word9", "word10"];
var array3 = ["word11", "word12", "word13", "word14", "word15"];

$(".circle1").click(function() {
    var randomNum = Math.round(Math.random() * 4);
    console.log(array1[randomNum]);
    $(".poem_wrapper").append("<div class='noun'>" + array1[randomNum] + "</div>");
    // $(".poem_wrapper").append(array1[randomNum)
    // $(".poem_wrapper").append(
})