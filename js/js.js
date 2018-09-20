$.validator.addMethod('customphone', function (value, element) {
    return this.optional(element) || /^\(\d{3}\)-\d{3}-\d{4}$/.test(value);
}, "Введите корректный номер телефона (XXX-XXX-XXXX)");

window.onload = function(){
    
    var validation;
    
    $('#phone').mask('(000)-000-0000');
    
    //$("#upButton").hide();
    var CheckPosition = function(){
        if ($(this).scrollTop() > 400){
				$("#upButton").fadeIn();
			} else{
				$("#upButton").fadeOut();
			}
        
        if ($(this).scrollTop() > 130){
            $(".work_group").fadeIn("slow");
        }
        
        if ($(this).scrollTop() > 1000){
            $("#table_prices").fadeIn("slow");
        }  
        
        if ($(this).scrollTop() > 1600){
            $(".work_kontacts").fadeIn("slow");
        }  
        
        if ($(this).scrollTop() > 1600){
            $(".work_map").fadeIn("slow");
        } 
    }
    
jQuery.validator.setDefaults({
  debug: true,
  success: "valid"
});
    
validation = $( "#myform" ).validate({
  rules: {
    email_addr: {
      required: true,
      email: true
    },
      clientName: {
      required: true,
    }
      ,
      phone: {
      required: true, 
      customphone : true,
      minlength : 14,
      maxlength : 14
    }
      ,
      comment: {
      required: true,
    }
  }
});
    
     $('#btnModal').click(function(){ 
            $('#email_addr').val("");
            $('#phone').val("");
            $('#clientName').val("");
            $('#comment').val("");
         $("#myform").trigger( 'reset' );
     });
    
    
    $('#btnSendMail').click(function(){ 
        var email = $('#email_addr').val();
        var phone = $('#phone').val();
        var clientName = $('#clientName').val();
        var comment = $('#comment').val();
        var err = $('#myform').valid();
        
        if(err != false)
        {
            var mail_text = "\nИмя отправителя: " + clientName + "\n\nКонтактный телефон: " + phone
            + "\n\nEmail адрес: " + email
            + "\n\nСопровидительное письмо:\n\n" + comment;
            
            Email.send("skibavictor@static-void.ru",
                   "skibaviktor@mail.ru",
                   clientName,
                   mail_text,
                   {token: "c8899959-bb90-459c-ac61-6bdfec7b1410"});
            
            $('.modalMesage').fadeIn("slow");
            
            setTimeout(function(){
                $('#myModal').modal('hide');
                $( "#myform" ).trigger( 'reset' );
                $('.modalMesage').hide();
                }, 5000);
        }
    });
    
    $('#btnInModalClose').click(function(){ 
        $( "label.error" ).hide();
    });
    
    CheckPosition();
    //SendMail();
    
    $(window).scroll(function (){
			CheckPosition();
		});
    
        $("#upButton").click(function() {
            $("html, body").animate({ scrollTop: 0 }, "slow");
            return false;
        });
    
    $("#worksBtn").click(function(){
        $("html, body").animate({ scrollTop: $("#work_list").offset().top }, "slow");
    });
    
    $("#priceBtn").click(function(){
        $("html, body").animate({ scrollTop: $("#price_list").offset().top }, "slow");
    });
    
    $("#contactsBtn").click(function(){
        $("html, body").animate({ scrollTop: $("#findMap").offset().top }, "slow");
    });
    
    
   jQuery.extend(jQuery.validator.messages, {
    required: "Это поле обязательно для заполнения.",
    remote: "Please fix this field.",
    email: "Введите корректный Email адрес.",
    url: "Please enter a valid URL.",
    date: "Please enter a valid date.",
    dateISO: "Please enter a valid date (ISO).",
    number: "Please enter a valid number.",
    digits: "Please enter only digits.",
    creditcard: "Please enter a valid credit card number.",
    equalTo: "Please enter the same value again.",
    accept: "Please enter a value with a valid extension.",
    maxlength: jQuery.validator.format("Please enter no more than {0} characters."),
    minlength: jQuery.validator.format("Please enter at least {0} characters."),
    rangelength: jQuery.validator.format("Please enter a value between {0} and {1} characters long."),
    range: jQuery.validator.format("Please enter a value between {0} and {1}."),
    max: jQuery.validator.format("Please enter a value less than or equal to {0}."),
    min: jQuery.validator.format("Please enter a value greater than or equal to {0}.")
});

}