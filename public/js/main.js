var myCanvas = document.getElementById("myCanvas");
var context = myCanvas.getContext("2d");
var map = new Image();
var face = new Image();
var timer = 0;
var x = 268, y = 5;
var dx = 0, dy = 0;

function procesKey(e) {
    if(e.keyCode == 38){
        //up
        dx = 0;
        dy = -1;
        clearTimeout(timer);
        drawFrame();
    }
    else if(e.keyCode == 40){
        //down
        dx = 0;
        dy = 1;
        clearTimeout(timer);
        drawFrame();
    }
    else if(e.keyCode == 37){
        dx = -1;
        dy = 0;
        clearTimeout(timer);
        drawFrame();
    }
    else if(e.keyCode == 39){
        dx = 1;
        dy = 0;
        clearTimeout(timer);
        drawFrame();
    }
}

function checkForCollision() {
    var imgData = context.getImageData(x-1, y-1, 15+2, 15+2);
    var pixels = imgData.data;
    for (var i = 0; n = pixels.length, i < n; i += 4) {
        var red = pixels[i];
        var green = pixels[i+1];
        var blue = pixels[i+2];
        var alpha = pixels[i+3];
        // 寻找黑色墙壁（表示碰撞）
        if (red == 0 && green == 0 && blue == 0) {
            return true;
        }
        // 寻找灰色边缘空间（表示碰撞）。
        if (red == 169 && green == 169 && blue == 169) {
            return true;
        }
    }
    return false; // 返回未碰撞
}

function drawFrame() {
    if (dx != 0 || dy != 0) {
        // 清除当前笑脸位置，并留下一个路径影子
        context.beginPath();
        context.fillStyle = "rgb(254,244,207)";
        context.rect(x, y, 15, 15);
        context.fill();
        // 移动笑脸位置
        x += dx;
        y += dy;
        // 撞墙时停止笑脸移动
        if (checkForCollision()) {
            x -= dx;
            y -= dy;
            dx = 0;
            dy = 0;
        }
        context.drawImage(face, x, y);
        if (y > (myCanvas.height - 17)) {
            alert("You win!");
        }
        else {
            timer = setTimeout(drawFrame, 1000/60);
        }
    }
}

map.src = "images/maze.png";
face.src = "images/face.png";

map.onload = function() {
    context.drawImage(map, 0, 0);
    context.drawImage(face, 268, 5);
}

window.onkeydown = procesKey;//添加键盘的事件