$(document).ready(function(){

  $('[data-toggle="tooltip"]').tooltip()
  // $('[data-toggle="tooltip"]').tooltip({ container: '.text-negative'})
  $('text_expanded-analysed').tooltip({container: 'span'})

  $('.no-text-warning-area').hide()
  $('.results-content').hide()

  $('.btn-primary').on('click', function(){
    // Check text area has content before showing results
    if ($('#text_truncated').val() == ''){
      $('.no-text-warning-area').show()
    } else{
      $('.results-content').show()
      $('.no-text-warning-area').hide()
    }
  });

  $('.btn-secondary').click(function(){
    $('#text_truncated').val('')
  });

  $('.page-title-link').click(function(){
    location.reload()
  });

});
