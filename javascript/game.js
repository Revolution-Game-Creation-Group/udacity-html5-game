var setup = function() {
    // Grab the body element using document.getElementById,
    // assume the body element has an id of 'body'.
    // Create a canvas element using document.createElement,
    // then set the width and height properties to 1200 and
    // 720, respectively.
    // Finally, append the canvas element to the body.
    var body = document.getElementById('body');// YOUR CODE HERE
    var canvas = document.createElement('canvas');// YOUR CODE HERE
    canvas.id = 'canvas';

    canvas.width = 1200;// YOUR CODE HERE
    canvas.height = 720;// YOUR CODE HERE

    body.appendChild(canvas);// YOUR CODE HERE

    draw(canvas);
};

var draw = function(canvas) {
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.fillStyle = 'rgb(200,0,0)';
        ctx.fillRect (10, 10, 55, 50);

        ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
        ctx.fillRect (30, 30, 55, 50);
    }
}

setup();
