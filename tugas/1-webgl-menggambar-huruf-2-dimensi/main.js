function main() {
    var canvas = document.getElementById("myCanvas");
    var gl = canvas.getContext("webgl");

    var vertices = new Float32Array([
        // huruf L
        -0.4, -0.05, // a
        -0.3, -0.05, // b
        -0.4, -0.45, // c
    
        -0.3, -0.05, // b
        -0.4, -0.45, // c
        -0.3, -0.45, // d
    
        -0.3, -0.35, // e
        -0.2, -0.35, // f
        -0.3, -0.45, // d
    
        -0.2, -0.35, // f
        -0.3, -0.45, // d
        -0.2, -0.45, // g
    
        // huruf H
        0.0, -0.05, // a
        0.1, -0.05, // b
        0.0, -0.45, // c
    
        0.1, -0.05, // b
        0.0, -0.45, // c
        0.1, -0.45, // d
    
        0.1, -0.20, // e
        0.25, -0.20, // f
        0.1, -0.30, // g
    
        0.25, -0.20, // f
        0.1, -0.30, // g
        0.25, -0.30, // h
    
        0.25, -0.05, // i
        0.35, -0.05, // j
        0.25, -0.45, // k
    
        0.35, -0.05, // j
        0.25, -0.45, // k
        0.35, -0.45 // l
    ]);
    
    
    var vertexShaderCode = `
    attribute vec2 aposition;    
    void main() {
            gl_Position = vec4(aposition, 0.0, 1.0);
            gl_PointSize = 10.0;
        }
    `;

    var positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderCode);
    gl.compileShader(vertexShader);
    
    var fragmentShaderCode = document.getElementById("vertexShaderCode").text;
    
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderCode);
    gl.compileShader(fragmentShader);
    
    var program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.useProgram(program);
    
    
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    var aPosition = gl.getAttribLocation(program, "aposition");
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(aPosition);

    gl.clearColor(253.0 / 255.0, 240.0 / 255.0, 240.0 / 255.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    // gl.drawArrays(gl.POINTS, 0, 1);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    gl.drawArrays(gl.TRIANGLES, 3, 3);
    gl.drawArrays(gl.TRIANGLES, 6, 3);
    gl.drawArrays(gl.TRIANGLES, 9, 3);

    gl.drawArrays(gl.TRIANGLES, 12, 3);
    gl.drawArrays(gl.TRIANGLES, 15, 3);
    gl.drawArrays(gl.TRIANGLES, 18, 3);
    gl.drawArrays(gl.TRIANGLES, 21, 3);
    gl.drawArrays(gl.TRIANGLES, 24, 3);
    gl.drawArrays(gl.TRIANGLES, 27, 3);
}