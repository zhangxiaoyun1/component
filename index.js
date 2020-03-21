var data = [
    ['Java', 1, '降','-0.01%'],
    ['C', 2, '升','+2.44%'],
    ['Python', 3, '升','+1.41%'],
    ['C++', 4,'降','-2.58%'],
    ['C#', 5, '升','+2.07%'],
    ['Visual Basic .NET', 6, '降','-1.17%'],
    ['JavaScript', 7, '降', '-0.85%']
  ];
  var container = document.getElementById('table');
  var hot = new Handsontable(container, {
    data: data,
    colHeaders:['语言名称','排名','升或降','变化幅度'],
    rowHeaders: false,
    filters: true,
    dropdownMenu: false,
    colWidths:'150px',
    rowHeights:'40px',
    className: "htCenter htMiddle",
    width: '600px',
    licenseKey:'38207-e0a33-365d4-20724-89851'
  });

var option = {
    xAxis: {
        type: 'category',
        data: ['2000', '2005', '2010', '2015', '2020']
    },
    yAxis: {
        type: 'value'
    },
    tooltip: {
        trigger: 'axis'
    },
    series: [{
        data: [6, 9, 8, 8, 7],
        type: 'line',
        name:'排名'
    }]
};
var myChart = echarts.init(document.getElementById('echarts'));
myChart.setOption(option);