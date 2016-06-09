import angular from 'angular';
import chart from './components/chart.js';

let data = {
    width: 800,
    height: 250,
    x: [
        {val: 0, label: 'january'},
        {val: 20, label: 'february'},
        {val: 40, label: 'mart'},
        {val: 60, label: 'april'},
        {val: 80, label: 'may'},
        {val: 100, label: 'june'}
    ],
    y: [
        {val: 0, label: '0'},
        {val: 20, label: '20'},
        {val: 40, label: '40'},
        {val: 60, label: '60'},
        {val: 80, label: '80'}
    ],
    data: [
        {x: 0, y: 0, label: '2 jan.'},
        {x: 12, y: 62, label: '18 jan.'},
        {x: 28, y: 78, label: '4 feb.'},
        {x: 40, y: 20, label: '1 mar.'},
        {x: 64, y: 48, label: '3 apr.'},
        {x: 82, y: 78, label: '8 jun.'}
    ]
};

angular.module('app', [])
    .component('chart', chart)
    .controller('chart', function($scope){
        $scope.chart = data;
    }
);