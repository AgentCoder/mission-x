


function paces() {

    // Grabbing the inputs

    var a1 = document.getElementById("slider11").value;
    var a2 = document.getElementById("slider21").value;
    var a3 = document.getElementById("slider31").value;
    var a4 = document.getElementById("slider41").value;
    var b1 = document.getElementById("slider12").value;
    var b2 = document.getElementById("slider22").value;
    var b3 = document.getElementById("slider32").value;
    var b4 = document.getElementById("slider42").value;
    var scale = document.getElementById("slider13").value;
    var dipdirection1 = document.getElementById('select111').value;
    var dipdirection2 = document.getElementById('select112').value;
    var dipdirection3 = document.getElementById('select113').value;
    var dipdirection4 = document.getElementById('select114').value;

    // Display of slider inputs
    document.getElementById('degreeResult1').innerHTML = a1;
    document.getElementById('pacesResult1').innerHTML = b1;
    document.getElementById('degreeResult2').innerHTML = a2;
    document.getElementById('pacesResult2').innerHTML = b2;
    document.getElementById('degreeResult3').innerHTML = a3;
    document.getElementById('pacesResult3').innerHTML = b3;
    document.getElementById('degreeResult4').innerHTML = a4;
    document.getElementById('pacesResult4').innerHTML = b4;
    document.getElementById('scaleResultX').innerHTML = scale;

    
    var canvas = document.getElementById('pacescanvas');
    var gl = canvas.getContext('experimental-webgl');


    /*======= Defining and storing the geometry ======*/


    // CARD 1

    var radians1 = Number(a1) * (Math.PI / 180);
    var x_cordinate1 = Math.sin(radians1);
    var y_cordinate1 = Math.cos(radians1);
    var x_dippoint1 = 0.0;
    var y_dippoint1 = 0.0;
    
    if (dipdirection1 == "NE") {
        x_dippoint1 = x_cordinate1;
        y_dippoint1 = y_cordinate1;
    }

    else if (dipdirection1 == "NW") {
        x_dippoint1 = -x_cordinate1;
        y_dippoint1 = y_cordinate1;
    }
    else if (dipdirection1 == "SW") {
        x_dippoint1 = -x_cordinate1;
        y_dippoint1 = -y_cordinate1;
    }
    else if (dipdirection1 == "SE") {
        x_dippoint1 = x_cordinate1;
        y_dippoint1 = -y_cordinate1;
    }




    //CARD 2


    var radians2 = Number(a2) * (Math.PI / 180);
    var x_cordinate2 = Math.sin(radians2);
    var y_cordinate2 = Math.cos(radians2);
    var x_dippoint2 = 0.0;
    var y_dippoint2 = 0.0;
   
    if (dipdirection2 == "NE") {
        x_dippoint2 = x_cordinate2;
        y_dippoint2 = y_cordinate2;
    }

    else if (dipdirection2 == "NW") {
        x_dippoint2 = -x_cordinate2;
        y_dippoint2 = y_cordinate2;
    }
    else if (dipdirection2 == "SW") {
        x_dippoint2 = -x_cordinate2;
        y_dippoint2 = -y_cordinate2;
    }
    else if (dipdirection2 == "SE") {
        x_dippoint2 = x_cordinate2;
        y_dippoint2 = -y_cordinate2;
    }

   



    var vertices = [
       0.0,0.0,0.0,
       x_dippoint1 * (b1 * 0.05), y_dippoint1 * (b1 * 0.05), 0.0,

       x_dippoint1 * (b1 * 0.05), y_dippoint1 * (b1 * 0.05), 0.0,
       x_dippoint2 * (b2 * 0.05), y_dippoint2 * (b2 * 0.05), 0.0
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

    var Sx = scale/10, Sy = scale/10, Sz = 1.0;
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
    gl.drawArrays(gl.LINES, 0, 4);


    // POINTS, LINE_STRIP, LINE_LOOP, LINES,
    // TRIANGLE_STRIP,TRIANGLE_FAN, TRIANGLES




}