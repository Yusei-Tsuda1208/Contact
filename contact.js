$(function(){
    $('.error').hide();
    $('#button').click(function(){
        var form_name = $('#form_name').val();
        var form_mail = $('#form_mail').val();
        var form_phone = $('#form_phone').val();
        var form_body = $('#form_body').val();
        var form_select =$('#request').val();
        if(form_name == ''||form_mail == ''||form_phone == ''||form_body == ''||form_select == 0){
            $('.error').fadeIn();
            return false;
          }
        
        $(".popup").fadeIn();
    })
    
});

