

function send_something_via_ajax(){
  $.post('localhost/sample', function(output){
    //...
    return output;
  });
  return null;
}
//your codes
send_something_via_ajax();
send_something_via_ajax();
send_something_via_ajax();