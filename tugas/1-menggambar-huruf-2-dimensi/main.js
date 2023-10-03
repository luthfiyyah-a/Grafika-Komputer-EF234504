function main() {
    var canvas = document.getElementById("myCanvas");
    var gl = canvas.getContext("webgl");

    const position = new Float32Array([
        // huruf L
        0.1, 0.45, // a
        0.2, 0.45, // b
        0.1, 0.05, // c

        0.2, 0.45, // b
        0.1, 0.05, // c
        0.2, 0.05, // d
        
        0.2, 0.15, // e
        0.3, 0.15, // f
        0.2, 0.05, // d
        
        0.3, 0.15, // f
        0.2, 0.05, // d
        0.3, 0.05, // g


        // huruf H
        0.5, 0.45, // a
        0.6, 0.45, // b
        0.5, 0.05, // c
        
        0.6, 0.45, // b
        0.5, 0.05, // c
        0.6, 0.05, // d
        
        0.6, 0.3, // e
        0.75, 0.3, // f
        0.6, 0.2, // g
        
        0.75, 0.3, // f
        0.6, 0.2, // g
        0.75, 0.2, // h
        
        0.75, 0.45, // i
        0.85, 0.45, // j
        0.75, 0.05, // k
        
        0.85, 0.45, // j
        0.75, 0.05, // k
        0.85, 0.05 // l
    ]);
    
    var vertexShaderCode = `
        void main() {
            gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
            gl_PointSize = 10.0;
        }
    `;

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

    gl.clearColor(1.0, 1.0, 1.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.drawArrays(gl.POINTS, 0, 1);                         
}