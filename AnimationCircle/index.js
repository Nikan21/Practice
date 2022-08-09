"use strict";

const showCircle = (cx, cy, radius) => {
    const circleStyle = circle.style
    const diametr = radius * 2
    
    circleStyle.top = cx + 'px'
    circleStyle.left = cy + 'px'
    circleStyle.width = diametr + 'px'
    circleStyle.height = diametr + 'px'
}

button.onclick = function(event) {
    showCircle(150, 150, 100)
}