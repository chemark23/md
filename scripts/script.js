$(document).ready(function(){
    /*$('#center_img img').hide();
    //$('#name_site').hide();
    //$('#name_site').fadeIn(2000);
    $('#img1').fadeIn(1000);
    $('#img2').delay(1000).fadeIn(1000);
    $('#img3').delay(2000).fadeIn(1000);
    $('#img4').delay(3000).fadeIn(1000);   */
    
    $('.main_table tr:odd').addClass('add_color_odd');
    $('.main_table tr:even').addClass('add_color_even');
    
    $('.main_table tr:not(.main_table tr:first)').hover(
        (function(){
            $(this).addClass('add_svet');
        }),
        
        (function(){
            $(this).removeClass('add_svet');        
        })
    
    );
    
    $('#hide_text').toggle(
        function(){
            $('#center_block').fadeOut(1500);
            $(this).text('Развернуть картинки');
        },
        function(){
            $('#center_block').fadeIn(1500);
            $(this).text('Свернуть картинки');
        }
    
    );
    
    
});//конец jquery