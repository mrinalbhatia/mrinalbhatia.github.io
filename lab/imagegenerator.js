$(window).click(function() {
    $(".button").each(function() {
        var topPosition = Math.floor(Math.random()*($(window).height()-100)) + "px";
        var leftPosition = Math.floor(Math.random()*($(window).width()-100)) + "px";
        $(this).css("top",topPosition).css("left",leftPosition);
        var newColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  $(this).css("border-color",newColor);
    });
});

