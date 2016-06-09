/**
 * Created by Shoom on 09.06.2016.
 */
class Chart {
    constructor() {
        this.offsetX = this.offsetX || 10*this.width/100;
        this.offsetY = this.offsetY || 15*this.height/100;
        this.percentY = this.offsetY*100/this.height*2;
        this.percentX = this.offsetX*100/this.width*2;
        this.pointOffset = 10;
        this.tooltipShow = false;
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
    /**
     * Mouse move event handler
     * @param e {Event}
     */
    mouseMove(e){
        let rect = e.currentTarget.getBoundingClientRect();
        this.cursorX = e.pageX - rect.left;
        this.cursorY = e.pageY - rect.top;
    }

    /**
     * Check if data point is active show tooltip
     * @param point {object} data point model
     * @returns {boolean} this method binded to ng-class
     */
    activePoint(point){
        let pointX = this.axisX(point.x);
        let isActive = this.cursorX > pointX-this.pointOffset && this.cursorX < pointX+this.pointOffset;
        if(isActive){
            if(this.tooltipShow != point) this.tooltipShow = point;
        }else{
            if(this.tooltipShow == point) this.tooltipShow = false;
        }

        return isActive;
    }
}

module.exports = {
    templateUrl: 'js/components/chart/chart.html',
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