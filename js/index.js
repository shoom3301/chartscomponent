import angular from 'angular';
import chart from './components/chart.js';

let data = {
    width: 800,
    height: 250,
    x: [
        [0, 'january'], [20, 'february'], [40, 'mart'], [60, 'april'], [80, 'may'], [100, 'june']
    ],
    y: [
        [20, '20'], [40, '40'], [60, '60'], [80, '80'], [100, '100'], [120, '120']
    ],
    data: [
        [0,0,'2 jan.'], [12,62,'18 jan.'], [28,78,'4 feb.'], [40,20,'1 mar.'], [64,48,'3 apr.'], [82,78,'8 jun.']
    ]
};

angular.module('app', [])
    .component('chart', chart)
    .controller('chart', function($scope){
        $scope.chart = data;
    }
);