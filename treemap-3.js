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
          name: 'Positive',
          parent: 'A',
          value: 92,
          entities: 3,
          keyphrases: 1
      }, {
          name: 'neutral',
          parent: 'B',
          value: 06,
          entities: 0,
          keyphrases: 0
      }, {
          name: 'Negative',
          parent: 'O',
          value: 0,
          entities: 0,
          keyphrases: 0
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
        },
        formatter: function(){
          var html = "<div class='treemap-tooltip-sentiment'> <div class='treemap-tooltip-sentiment-number'>" + this.point.value + "% </div> <div class='treemap-tooltip-sentiment-label'>" + this.point.name + "<br>" + "</div></div> <div class='tremap-tooltip-entities-keyphrases'> Entities: " + this.point.entities + "/3 </div> " + " <div class='tremap-tooltip-entities-keyphrases'> Key Phrases: " + this.point.keyphrases + "/1</div>";
          return html;
        }
    },
    plotOptions: {
      series: {
        dataLabels: {
          enabled: false,
        }
      }
    }
  });
});
