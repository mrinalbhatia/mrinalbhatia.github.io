

$(window).click(function() {
    $(".boxes").each(function() {
        var topPosition = Math.floor(Math.random()*($(window).height()-100)) + "px";
        var leftPosition = Math.floor(Math.random()*($(window).width()-100)) + "px";
        $(this).css("top",topPosition).css("left",leftPosition);
        var newColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  $(this).css("border-color",newColor);
    });
});



(function makeDiv(){
   var divsize = ((Math.random()*80) + 50).toFixed();
   var color = '#'+ Math.round(0xffffff * Math.random()).toString(16);
   $boxes = $('<div/>').addClass("destruct").css({
       'width':divsize+'px',
       'height':divsize+'px',
       'background-image': 'url(bw/bw1' + '.png)'
   });

   var posx = (Math.random() * ($(document).width() - divsize)).toFixed();
   var posy = (Math.random() * ($(document).height() - divsize)).toFixed();

   $boxes.css({
       'position':'absolute',
       'left':posx+'px',
       'top':posy+'px',
       'display':'none',
       'border-radius': '60px'
   }).appendTo( 'body' ).fadeIn(2000, function(){
      makeDiv(); 
   }); 
})();

$(document).ready(function() {
   $(document).on('mouseover', '.destruct', function(){
      $(this).remove();
   });
});

