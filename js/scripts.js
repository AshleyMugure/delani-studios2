$(document).ready(function() {
  $('#design').click(function(){
    $('#designimg').slideToggle(1000);
    $('#designp').slideToggle(1500)
  })
  $('#development').click(function(){
    $('#devp').slideToggle(1000);
    $('#devimg').slideToggle(1500);
  });
    $('#project').click(function(){
    $('#projectp').slideToggle(1000);
    $('#productimg').slideToggle(1500);
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
