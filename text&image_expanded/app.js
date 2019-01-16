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
    Highcharts.chart('treemap-container', {
    series: [{
        type: "treemap",
        layoutAlgorithm: 'stripes',
        alternateStartingDirection: true,
        levels: [{
            level: 1,
            layoutAlgorithm: 'sliceAndDice',
            dataLabels: {
                enabled: true,
                align: 'left',
                verticalAlign: 'top',
                style: {
                    fontSize: '15px',
                    fontWeight: 'bold'
                }
            }
        }],
        data: [{
            id: 'A',
            name: 'Apples',
            color: "#EC2500"
        }, {
            id: 'B',
            name: 'Bananas',
            color: "#ECE100"
        }, {
            id: 'O',
            name: 'Oranges',
            color: '#EC9800'
        }, {
            name: 'Anne',
            parent: 'A',
            value: 5
        }, {
            name: 'Rick',
            parent: 'A',
            value: 3
        }, {
            name: 'Peter',
            parent: 'A',
            value: 4
        }, {
            name: 'Anne',
            parent: 'B',
            value: 4
        }, {
            name: 'Rick',
            parent: 'B',
            value: 10
        }, {
            name: 'Peter',
            parent: 'B',
            value: 1
        }, {
            name: 'Anne',
            parent: 'O',
            value: 1
        }, {
            name: 'Rick',
            parent: 'O',
            value: 3
        }, {
            name: 'Peter',
            parent: 'O',
            value: 3
        }, {
            name: 'Susanne',
            parent: 'Kiwi',
            value: 2,
            color: '#9EDE00'
        }]
      }],
      title: {
          text: 'Fruit consumption'
      }
    });
  });
});
