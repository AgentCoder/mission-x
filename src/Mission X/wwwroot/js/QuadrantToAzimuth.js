

function quadrantToAzimuth() {
    var quadNot = document.getElementById("quadrant").value;

    quadNot = quadNot.trim();
    quadNot = quadNot.toUpperCase();

    var val = Number(quadNot.slice(1, 3));
    var generatedValue = 0;
    var angle = 0;

    if (quadNot.charAt(0) == "N" && quadNot.charAt(3) == "E") {
        generatedValue = val;
        angle = 90 - Number(generatedValue);
    }
    else if (quadNot.charAt(0) == "N" && quadNot.charAt(3) == "W") {
        generatedValue = 360 - Number(val);
        angle = 90 + Number(val);

    }
    else if (quadNot.charAt(0) == "S" && quadNot.charAt(3) == "E") {

        generatedValue = 180 - Number(val);
        angle = 270 + Number(generatedValue);
    }
    else if (quadNot.charAt(0) == "S" && quadNot.charAt(3) == "W") {
        generatedValue = 180 + Number(val);
        angle = 270 - Number(generatedValue);
    }
    window.alert(angle);
    $(azimuthlabel).hide();
    $(azimuthal).val(generatedValue + quadNot.substr(4));
    // window.alert(generatedValue + quadNot.substr(4));

    generateFigure(angle);

    
}

function generateFigure(angle)
{
    var radians = Number(angle) * (Math.PI / 180);
    var y_cordinate = Math.sin(radians);
    var x_cordinate = Math.cos(radians);
      
   
    var canvas = document.getElementById('my_Canvas');
    var gl = canvas.getContext('experimental-webgl');


    /*======= Defining and storing the geometry ======*/

    var vertices = [
       -1.0, 0.0, 0,
       1.0, 0.0, 0,
       0.0, -1.0, 0,
       0.0, 1.0, 0,
       x_cordinate, y_cordinate, 0,
       0.0, 0.0, 0,
       -x_cordinate, -y_cordinate, 0,
       0.0,0.0,0
    ]

    // Create an empty buffer object
    var vertex_buffer = gl.createBuffer();

    // Bind appropriate array buffer to it
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);

    // Pass the vertex data to the buffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    // Unbind the buffer
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    /*=================== Shaders ====================*/

    // Vertex shader source code
    var vertCode =
       'attribute vec3 coordinates;' +
       'void main(void) {' +
          ' gl_Position = vec4(coordinates, 1.0);' +
       '}';

    // Create a vertex shader object
    var vertShader = gl.createShader(gl.VERTEX_SHADER);

    // Attach vertex shader source code
    gl.shaderSource(vertShader, vertCode);

    // Compile the vertex shader
    gl.compileShader(vertShader);

    // Fragment shader source code
    var fragCode =
       'void main(void) {' +
          'gl_FragColor = vec4(0.0, 0.0, 0.0, 0.1);' +
       '}';

    // Create fragment shader object
    var fragShader = gl.createShader(gl.FRAGMENT_SHADER);

    // Attach fragment shader source code
    gl.shaderSource(fragShader, fragCode);

    // Compile the fragmentt shader
    gl.compileShader(fragShader);

    // Create a shader program object to store
    // the combined shader program
    var shaderProgram = gl.createProgram();

    // Attach a vertex shader
    gl.attachShader(shaderProgram, vertShader);

    // Attach a fragment shader
    gl.attachShader(shaderProgram, fragShader);

    // Link both the programs
    gl.linkProgram(shaderProgram);

    // Use the combined shader program object
    gl.useProgram(shaderProgram);

    /*======= Associating shaders to buffer objects ======*/

    // Bind vertex buffer object
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);

    // Get the attribute location
    var coord = gl.getAttribLocation(shaderProgram, "coordinates");

    // Point an attribute to the currently bound VBO
    gl.vertexAttribPointer(coord, 3, gl.FLOAT, false, 0, 0);

    // Enable the attribute
    gl.enableVertexAttribArray(coord);

    /*============ Drawing the triangle =============*/

    // Clear the canvas
    gl.clearColor(0.5, 0.5, 0.5, 0.9);

    // Enable the depth test
    gl.enable(gl.DEPTH_TEST);

    // Clear the color and depth buffer
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    // Set the view port
    gl.viewport(0, 0, canvas.width, canvas.height);

    // Draw the triangle
    gl.drawArrays(gl.LINES, 0, 4);
    gl.drawArrays(gl.LINES, 4, 4);




     
}




