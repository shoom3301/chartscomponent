/**
 * Created by Shoom on 09.06.2016.
 */
class Chart {
    constructor() {
        this.offsetX = 50;
        this.offsetY = 40;
    }

    /**
     * Coordinate of point by X axis
     * @param x {number}
     * @returns {number}
     */
    axisX(x){
        let max = this.x[this.x.length-1][0];
        return (this.width*x/max)+this.offsetX;
    }
    /**
     * Coordinate of point by Y axis
     * @param y {number}
     * @returns {number}
     */
    axisY(y){
        let max = this.y[this.y.length-1][0];
        return (this.height*y/max)-this.offsetY;
    }
}

module.exports = {
    templateUrl: 'js/components/chart.html',
    controller: Chart,
    bindings: {
        width: '<',
        height: '<',
        x: '<',
        y: '<',
        data: '<'
    }
};