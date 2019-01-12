$(document).ready(function(){
  $('.no-text-warning-area').hide()
  $('.btn-primary').on('click', function(){
    // Check text area has content before showing results
    // TODO: swap out id for class later or conflicts will emerge with other html file
    if ($('#exampleFormControlTextarea1').val() == ''){
      $('.no-text-warning-area').show()

    } else{
      $('.results-content').css('visibility', 'visible')
      $('.no-text-warning-area').hide()

    }
  })

  $('.btn-secondary').click(function(){
    $('#exampleFormControlTextarea1').val('')
  })
});
