/**
 * Created by Shoom on 09.06.2016.
 */
class Chart {
    constructor() {
        this.offsetX = this.offsetX || 10*this.width/100;
        this.offsetY = this.offsetY || 15*this.height/100;
        this.percentY = this.offsetY*100/this.height*2;
        this.percentX = this.offsetX*100/this.width*2;
    }
    /**
     * Generate string of coordinates for polyline
     * @returns {string}
     */
    path(){
        let path = [];
        for(var i=0; i<this.data.length; i++){
            path.push(this.axisX(this.data[i].x)+','+this.axisY(this.data[i].y));
        }
        return path.join(' ');
    }
    /**
     * Coordinate of point by X axis
     * @param x {number}
     * @returns {number}
     */
    axisX(x){
        let max = this.x[this.x.length-1].val;
        return (this.width*(x-(x*this.percentX/100))/max)+this.offsetX;
    }
    /**
     * Coordinate of point by Y axis
     * @param y {number}
     * @returns {number}
     */
    axisY(y){
        let max = this.y[this.y.length-1].val;
        return this.height-((this.height*(y-(y*this.percentY/100))/max)+this.offsetY);
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
        offsetX: '<',
        offsetY: '<',
        data: '<'
    }
};