$(document).ready(function(){
  $('.btn-primary').click(function(){

    // Check text area has content before showing results
    //swap out id for class later or conflicts will emerge with other html files
    if($('#exampleFormControlTextarea1').val() !== ''){
      $('.results-content').css('visibility', 'visible')
    }
  })
  $('.btn-secondary').click(function(){
    $('#exampleFormControlTextarea1').val('')
  })
});
