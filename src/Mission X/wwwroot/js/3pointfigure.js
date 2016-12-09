


function param() {

   
  
             /*=================Creating a canvas=========================*/
             var canvas = document.getElementById('my_Canvas');
    gl = canvas.getContext('experimental-webgl'); 
    var radians = Number(document.getElementById("pointA").value) * (Math.PI / 180);
    var xb = Math.cos(radians);
    var yb= Math.sin(radians);
		
		
    var radians1 = Number(document.getElementById("pointB").value) * (Math.PI / 180);
    var xc = Math.cos(radians1);
    var yc= Math.sin(radians1);
		
    var radians2 = Number(document.getElementById("pointC").value) * (Math.PI / 180);
    var xs = Math.cos(radians2);
    var ys= Math.sin(radians2);
		
    var radians3 = Number(document.getElementById('msg2').value) * (Math.PI / 180);
    var xdip = Math.cos(radians3);
    var ydip= Math.sin(radians3);
		
		
	   						
    /*===========Defining and storing the geometry==============*/
    var vertices = [
        1.5,0.0,0.0,
        -1.5,0.0,0.0,
        0.0,-1.5,0.0,
        0.0,1.5,0.0,
        0.0,0.0,0.0,
			
        xb,yb,0.0,
        0.0,0.0,0.0,
        xc,yc,0.0,
        xb,yb,0.0,
        xc,yc,0.0,
			
        0.0,0.0,0.0,
        xs,ys,0.0,
        0.0,0.0,0.0,
        -xs,-ys,0.0,
			
        xs,ys,0.0,
        xs-(2*ys),ys+2*xs,0.0,
        xs,ys,0.0,
        (xs+(2*ys)),(ys-2*xs),0.0,
			
			
        xb,yb,0.0,
        xs,ys,0.0,
    ];
			
          
            
    //Create an empty buffer object and store vertex data
            
    var vertex_buffer = gl.createBuffer();                                                     
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);                                                
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);           
    gl.bindBuffer(gl.ARRAY_BUFFER, null);  
            
    /*========================Shaders============================*/
           
    //Vertex shader source code
    var vertCode =
       'attribute vec4 coordinates;' + 
       'uniform mat4 u_xformMatrix;' +
       'void main(void) {' +
          '  gl_Position = u_xformMatrix * coordinates;' +
       '}';
               
    //Create a vertex shader program object and compile it                
    var vertShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertShader, vertCode);
    gl.compileShader(vertShader);
            
    //fragment shader source code
    var fragCode =
       'void main(void) {' +
          '   gl_FragColor = vec4(0.0, 0.0,1.0,2);' +
       '}';
            
    //Create a fragment shader program object and compile it 
    var fragShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragShader, fragCode);
    gl.compileShader(fragShader);
  
    //Create and use combiened shader program
    var shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertShader);
    gl.attachShader(shaderProgram, fragShader);
    gl.linkProgram(shaderProgram);
   
    gl.useProgram(shaderProgram); 
          
    /*===================scaling==========================*/
          
    var Sx = 0.5, Sy = 0.5, Sz = 0.6;
    var xformMatrix = new Float32Array([
       Sx,   0.0,  0.0,  0.0,
       0.0,  Sy,   0.0,  0.0,
       0.0,  0.0,  Sz,   0.0,
       0.0,  0.0,  0.0,  1.0  
    ]);
   
    var u_xformMatrix = gl.getUniformLocation(shaderProgram, 'u_xformMatrix');
    gl.uniformMatrix4fv(u_xformMatrix, false, xformMatrix);
      
    /* ===========Associating shaders to buffer objects============*/
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);   
   
    var coordinatesVar = gl.getAttribLocation(shaderProgram, "coordinates"); 
    gl.vertexAttribPointer(coordinatesVar, 3, gl.FLOAT, false, 0, 0);  
    gl.enableVertexAttribArray(coordinatesVar);
   
    /*=================Drawing the Quad========================*/ 
    gl.clearColor(255, 255, 255, 0.9);
    gl.enable(gl.DEPTH_TEST);
   
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.viewport(0,0,canvas.width,canvas.height);
    gl.drawArrays(gl.LINES, 0, 20);
		 		
						
  
    
}