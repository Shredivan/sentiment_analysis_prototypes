$(document).ready(function(){

  $('[data-toggle="tooltip"]').tooltip()

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

  $(function () {
    var myChart = Highcharts.chart('treemap-container', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Fruit Consumption'
        },
        xAxis: {
            categories: ['Apples', 'Bananas', 'Oranges']
        },
        yAxis: {
            title: {
                text: 'Fruit eaten'
            }
        },
        series: [{
            name: 'Jane',
            data: [1, 0, 4]
        }, {
            name: 'John',
            data: [5, 7, 3]
        }]
    });
  });
});
