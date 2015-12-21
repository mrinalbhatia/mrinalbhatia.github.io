var array1 = ["time", "number", "people", "water", "oil", "new", "sound", "work", "place", "man", 
"animal", "summer" , "fire", "legs", "paint", "winter" ,"forest", "clothes" , "flowers", "window"];
var array2 = ["be", "from", "do", "go", "see", "write", "sit", "march", "bought", "determine"];
var array3 = ["exciting", "interesting", "different" , "kind" , "hard" , "young", "dark", "heavy" , "special", "fine", 
"hot", "beautiful", "happy", "wild"];
var array4 = ["pretty", "actually", "especially", "quickly", "suddenly","helpfully"];
var array5 = ["and", "similarly", "thus", "additionally", "rather" , "for" , "nor", "or", "but", "else" , "maybe" , "perhaps" , "yet" , "also" , "to", "because"];
var array6 = ["he", "she", "they", "we", "it","we're","them"];
var array7 = ["!", "&", ",", ";", "?"];

$(".circle1").click(function() {
    var randomNum = Math.round(Math.random() * 20);
    console.log(array1[randomNum]);
    $(".poem_wrapper").append("<div class='word-wrap noun'><span class='word'>" + array1[randomNum] + "</span></div>");
})

$(".circle2").click(function() {
    var randomNum = Math.round(Math.random() * 10);
    console.log(array2[randomNum]);
    $(".poem_wrapper").append("<div class='word-wrap verb'><span class='word'>" + array2[randomNum] + "</span></div>");
})

$(".circle3").click(function() {
    var randomNum = Math.round(Math.random() * 14);
    console.log(array3[randomNum]);
    $(".poem_wrapper").append("<div class='word-wrap adjective'><span class='word'>" + array3[randomNum] + "</span></div>");
})

$(".circle4").click(function() {
    var randomNum = Math.round(Math.random() * 5);
    console.log(array4[randomNum]);
    $(".poem_wrapper").append("<div class='word-wrap adverb'><span class='word'>" + array4[randomNum] + "</span></div>");
})

$(".circle5").click(function() {
    var randomNum = Math.round(Math.random() * 15);
    console.log(array5[randomNum]);
    $(".poem_wrapper").append("<div class='word-wrap conjunction'><span class='word'>" + array5[randomNum] + "</span></div>");
})

$(".circle6").click(function() {
    var randomNum = Math.round(Math.random() * 6);
    console.log(array6[randomNum]);
    $(".poem_wrapper").append("<div class='word-wrap pronoun'><span class='word'>" + array6[randomNum] + "</span></div>");
});

$(".circle7").click(function() {
    var randomNum = Math.round(Math.random() * 4);
    console.log(array7[randomNum]);
    $(".poem_wrapper").append("<div class='word-wrap surprise'><span class='word'>" + array7[randomNum] + "</span></div>");
});

$('.circles').click(function() {
   $('.placeholder').remove();
   $(".poem_wrapper").append("<div class='noun placeholder'></div>");
   $("html, body").animate({ scrollTop: $(document).height() });
});

function placeholder(selector){
$(selector).fadeOut('slow', function(){
    $(this).fadeIn('slow', function(){
        placeholder(this);
    });
});
}

placeholder('.placeholder');