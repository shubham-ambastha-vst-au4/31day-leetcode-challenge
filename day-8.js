// Question: Check If It is a Straight line

var checkStraightLine = function(coordinates) {
    let len = coordinates.length
    if(len === 2) return true;
    // y2-y1/x2-x1 = y3-y1/x3-x1;
    
    let y1 = coordinates[0][1]
    let x1 = coordinates[0][0]
    let slope1 = (coordinates[1][1] - y1)/(coordinates[1][0] - x1)

    for(let i = 2; i<len; i++){
        let y3 = coordinates[i][1]
        let x3 = coordinates[i][0]
        let slope2 = (y3-y1)/(x3-x1)
        if(slope1 !== slope2){
            return false
        }
    }
    return true
};