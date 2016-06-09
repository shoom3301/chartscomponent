import angular from 'angular';
import chart from './components/chart.js';

let data = {
    x: [
        [0, 'январь'], [20, 'февраль'], [40, 'март'], [60, 'апрель'], [80, 'май'], [100, 'июнь']
    ],
    y: [
        [20, '20'], [40, '40'], [60, '60'], [80, '80']
    ],
    data: [
        [0,0,'2 января'], [12,62,'18 января'], [28,78,'4 февраля'], [40,20,'1 марта'], [64,48,'3 апреля'], [82,78,'8 июня']
    ]
};

angular.module('app', [])
    .component('chart', chart)
    .controller('chart', function($scope){
        $scope.chart = data;
    }
);