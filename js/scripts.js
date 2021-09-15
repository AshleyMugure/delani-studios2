$(document).ready(function() {
  $('#design').click(function(){
    $('#designp').toggle()
    $('#designimg').toggle()
  })
  $('.mouse_click2').click(function(){
    $('.ficha2').slideToggle(1000);
    $('.show2').slideToggle(1500);
  });
    $('.mouse_click3').click(function(){
    $('.ficha3').slideToggle(1000);
    $('.show3').slideToggle(1500);
  });

  $('#myForm').submit(function(event){
    event.preventDefault();
    var name = $('input#name').val();
    var email = $('input#email').val();
    var message = $('textarea#messageFill').val();
    if ($('input#name').val() && $('input#email').val()){
        alert (name  + ", message recieved. We appreciate your feedback!");                
    }
    else {
        alert('Please enter your name and email.');
    };
  });

})
