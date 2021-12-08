function textShadow({
    font_size,
    offset_x,
    offset_y,
    blur,
    color,
    opacity,
    rgba
}) {
   var textStyle = offset_x + "px " +  offset_y + "px " + blur + "px " + rgba;

   $('h1').css('text-shadow', textStyle);

   $('#resultHex').val('background-color: ' +color+';\nopacity:'+opacity+ '; ' +'\nfont-size: '+font_size+'px;');

   $('#resultRgba').val('text-shadow: '+offset_x + 'px ' + offset_y + 'px ' + blur + 'px; \n' + rgba + ';\nfont-size: ' + font_size + 'px ;' );
}
     textShadow({
        font_size: 40,
        offset_x: 30,
        offset_y: 5,
        blur: 0,
        color: "#14ff4f",
        opacity: 1,
        rgba:"rgba(20, 255, 79, 1)"
    });


$(document).on('input change', 'input', function(){
        var font_size = $('#font_size').val();
        var offset_x = $('#offset_x').val();
        var offset_y = $('#offset_y').val();
        var blur = $('#blur').val();
     
        var opacity = $('#opacity').val();
        var color = $('#color').val() + "";
        // Перевод цвета с формата HEX в формат RGBA
        //  var rgba 
        
        // # 1 4 f f 4 f - HEX 

        var red16 = color[1] + color[2];
        var green16 = color[3] + color[4];
        var blue16 = color[5] + color[6];

        var rgba = $('#rgba').val();

        var red10 = parseInt(red16,16);
        var green10 = parseInt(green16,16);
        var blue10 = parseInt(blue16,16);

        var rgba = "rgba(" + red10 + ", " + green10 + ", " + blue10 +  ", " + opacity + ")";  
        
        $('h1').css('fontSize', font_size+'px ');

        textShadow({
            font_size: font_size,
            offset_x: offset_x,
            offset_y: offset_y,
            blur: blur,
            opacity: opacity,
            color: color,
            rgba:rgba
        })
})

