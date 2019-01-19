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
          name: 'Positive',
          color: "#33dca5"
      }, {
          id: 'B',
          name: 'Neutral',
          color: "#f3d333"
      }, {
          id: 'O',
          name: 'Negative',
          color: '#cc2f3d'
      }, {
          name: '',
          parent: 'A',
          value: 5
      }, {
          name: '',
          parent: 'B',
          value: 4
      }, {
          name: '',
          parent: 'O',
          value: 4
      }]
    }],
    title: {
        text: 'Fruit consumption',
        style:{
          display: 'none'
        }
    },
    tooltip: {
        useHTML: true,
        style: {
          borderRadius: '4px',
        }
    }
  });
});
