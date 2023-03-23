Highcharts.chart('container', {
  chart: {
    type: 'bar',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  title: {
    text: 'Amount of Experience Using Various Languages, Frameworks and Libraries',
    align: 'center',
  },
  xAxis: {
    categories: ['Java', 'Python', 'HTML', 'CSS', 'Javascript', 'Bootstrap', 'C++'],
    title: {
      text: null
    },
    labels: {
      style: {
        color: 'white',
        fontSize:'20px'
      }
    }
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Experience (years)',
      align: 'high',
      style: {
        color: 'white',
        fontSize:'14px'
      }
    },
    labels: {
      overflow: 'justify',
      style: {
        color: 'white',
        fontSize:'20px'
      }
    }
  },
  tooltip: {
    valueSuffix: ' years'
  },
  plotOptions: {
    bar: {
      dataLabels: {
        enabled: true
      }
    }
  },
  credits: {
    enabled: false
  },
  series: [{
    name: 'Years of Experience',
    data: [6, 2, 3, 3, 3, 0.5, 1]
  }]
});
