/**
 * Created by Shoom on 09.06.2016.
 */
class Chart {
    constructor() {

    }
}

module.exports = {
    templateUrl: 'js/components/chart.svg',
    controller: Chart,
    bindings: {
        x: '<',
        y: '<',
        data: '<'
    }
};