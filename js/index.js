import angular from 'angular';
import chart from './components/chart.js';

let data = {
    x: [
        [0, '������'], [20, '�������'], [40, '����'], [60, '������'], [80, '���'], [100, '����']
    ],
    y: [
        [20, '20'], [40, '40'], [60, '60'], [80, '80']
    ],
    data: [
        [0,0,'2 ������'], [12,62,'18 ������'], [28,78,'4 �������'], [40,20,'1 �����'], [64,48,'3 ������'], [82,78,'8 ����']
    ]
};

angular.module('app', [])
    .component('chart', chart)
    .controller('chart', function($scope){
        $scope.chart = data;
    }
);