function paces(x,a,b,c){

  
    var tempB = b / 100 ;
    document.getElementById('degreeResult1').innerHTML = x
    document.getElementById('pacesResult1').innerHTML = a
    document.getElementById('scaleResultX').innerHTML = b
    var dipdirection = document.getElementById('select111').value;
    var canvas = document.getElementById('pacescanvas');
    var gl = canvas.getContext('experimental-webgl');


    /*======= Defining and storing the geometry ======*/

    var radians = Number(x) * (Math.PI / 180);
    var x_cordinate = Math.sin(radians);
    var y_cordinate = Math.cos(radians);
    var x_dippoint = 0.0;
    var y_dippoint = 0.0;
    var x_origin = 0.0;
    var y_origin = 0.0;
    if (dipdirection == "NE") {
        x_dippoint = x_cordinate;
        y_dippoint = y_cordinate;
    }

    else if (dipdirection == "NW") {
        x_dippoint = -x_cordinate;
        y_dippoint = y_cordinate;
    }
    else if (dipdirection == "SW") {
        x_dippoint = -x_cordinate;
        y_dippoint = -y_cordinate;
    }
    else if (dipdirection == "SE") {
        x_dippoint = x_cordinate;
        y_dippoint = -y_cordinate;
    }
   



    var vertices = [
       0.0,0.0,0.0,
       x_dippoint * (a * 0.05), y_dippoint * (a * 0.05), 0.0
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
              'attribute vec4 coordinates;' +
              'uniform mat4 u_xformMatrix;' +
              'void main(void) {' +
                 '  gl_Position = u_xformMatrix * coordinates;' +
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
          'gl_FragColor = vec4(0.0, 0.0, 0.0, 1);' +
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



    // Shading Code Snippet

    var Sx = b/10, Sy = c/10, Sz = 1.0;
    var xformMatrix = new Float32Array([
       Sx, 0.0, 0.0, 0.0,
       0.0, Sy, 0.0, 0.0,
       0.0, 0.0, Sz, 0.0,
       0.0, 0.0, 0.0, 1.0
    ]);

    var u_xformMatrix = gl.getUniformLocation(shaderProgram, 'u_xformMatrix');
    gl.uniformMatrix4fv(u_xformMatrix, false, xformMatrix);

    // End of Code - Shading Program

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

    gl.clearColor(255, 250, 250, 0.4);

    // Enable the depth test
    gl.enable(gl.DEPTH_TEST);

    // Clear the color and depth buffer
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    // Set the view port
    gl.viewport(0, 0, canvas.width, canvas.height);

    // Draw the triangle
    gl.drawArrays(gl.LINES, 0, 2);


    // POINTS, LINE_STRIP, LINE_LOOP, LINES,
    // TRIANGLE_STRIP,TRIANGLE_FAN, TRIANGLES


}