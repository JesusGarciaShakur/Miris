const lienzo = document.querySelector('#lienzo');

const ctx = lienzo.getContext('2d');

ctx.fillStyle = 'black'
//contorno de corazón
ctx.fillRect(180, 120, 30, 30);
//ctx.strokeRect(180, 120, 30, 30);
//parte arriba izquierda de corazón
ctx.fillRect(210, 120, 30, 30);
ctx.fillRect(240, 120, 30, 30);
ctx.fillRect(150, 150, 30, 30);
ctx.fillRect(270, 150, 30, 30);
//borde derecho
ctx.fillRect(120, 180, 30, 30);
ctx.fillRect(120, 210, 30, 30);
ctx.fillRect(120, 240, 30, 30);
ctx.fillRect(120, 270, 30, 30);
//punta izquierda
ctx.fillRect(150, 300, 30, 30);
ctx.fillRect(180, 330, 30, 30);
ctx.fillRect(210, 360, 30, 30);
ctx.fillRect(240, 390, 30, 30);
ctx.fillRect(270, 420, 30, 30);
//punta central
ctx.fillRect(300, 450, 30, 30);
//punta derecha
ctx.fillRect(330, 420, 30, 30);
ctx.fillRect(360, 390, 30, 30);
ctx.fillRect(390, 360, 30, 30);
ctx.fillRect(420, 330, 30, 30);
ctx.fillRect(450, 300, 30, 30);
//borde izquierdo
ctx.fillRect(480, 270, 30, 30);
ctx.fillRect(480, 240, 30, 30);
ctx.fillRect(480, 210, 30, 30);
ctx.fillRect(480, 180, 30, 30);
//centro de corazón
ctx.fillRect(300, 180, 30, 30);
//parte arriba derecha de corazón
ctx.fillRect(330, 150, 30, 30);
ctx.fillRect(360, 120, 30, 30);
ctx.fillRect(390, 120, 30, 30);
ctx.fillRect(420, 120, 30, 30);
ctx.fillRect(450, 150, 30, 30);

ctx.fillStyle = 'white'
ctx.fillRect(180, 180, 30, 30)
ctx.strokeRect(180, 180, 30, 30)
ctx.fillRect(210, 180, 30, 30)
ctx.strokeRect(210, 180, 30, 30)
ctx.fillRect(180, 210, 30, 30);
ctx.strokeRect(180, 210, 30, 30);
ctx.fillRect(180, 270, 30, 30);
ctx.strokeRect(180, 270, 30, 30);

ctx.fillStyle = 'purple'
ctx.fillRect(240, 150, 30, 30);
ctx.strokeRect(240, 150, 30, 30);
ctx.fillRect(210, 150, 30, 30);
ctx.strokeRect(210, 150, 30, 30);
ctx.fillRect(180, 150, 30, 30);
ctx.strokeRect(180, 150, 30, 30);
ctx.fillRect(360, 150, 30, 30);
ctx.strokeRect(360, 150, 30, 30);
ctx.fillRect(390, 150, 30, 30);
ctx.strokeRect(390, 150, 30, 30);
ctx.fillRect(420, 150, 30, 30);
ctx.strokeRect(420, 150, 30, 30);
ctx.fillRect(150, 180, 30, 30);
ctx.strokeRect(150, 180, 30, 30);
//color completo
ctx.fillRect(240, 180, 30, 30);
ctx.fillRect(270, 180, 30, 30);
ctx.fillRect(330, 180, 30, 30);
ctx.fillRect(360, 180, 30, 30);
ctx.fillRect(390, 180, 30, 30);
ctx.fillRect(420, 180, 30, 30);
ctx.fillRect(450, 180, 30, 30);
ctx.fillRect(150, 210, 30, 30);
ctx.fillRect(210, 210, 30, 30);
ctx.fillRect(240, 210, 30, 30);
ctx.fillRect(270, 210, 30, 30);
ctx.fillRect(300, 210, 30, 30);
ctx.fillRect(330, 210, 30, 30);
ctx.fillRect(360, 210, 30, 30);
ctx.fillRect(390, 210, 30, 30);
ctx.fillRect(420, 210, 30, 30);
ctx.fillRect(450, 210, 30, 30);
ctx.fillRect(150, 240, 30, 30);
ctx.fillRect(180, 240, 30, 30);
ctx.fillRect(210, 240, 30, 30);
ctx.fillRect(240, 240, 30, 30);
ctx.fillRect(270, 240, 30, 30);
ctx.fillRect(300, 240, 30, 30);
ctx.fillRect(330, 240, 30, 30);
ctx.fillRect(360, 240, 30, 30);
ctx.fillRect(390, 240, 30, 30);
ctx.fillRect(420, 240, 30, 30);
ctx.fillRect(450, 240, 30, 30);
ctx.fillRect(150, 270, 30, 30);
ctx.fillRect(210, 270, 30, 30);
ctx.fillRect(240, 270, 30, 30);
ctx.fillRect(270, 270, 30, 30);
ctx.fillRect(300, 270, 30, 30);
ctx.fillRect(330, 270, 30, 30);
ctx.fillRect(360, 270, 30, 30);
ctx.fillRect(390, 270, 30, 30);
ctx.fillRect(420, 270, 30, 30);
ctx.fillRect(450, 270, 30, 30);
ctx.fillRect(180, 300, 30, 30);
ctx.fillRect(210, 300, 30, 30);
ctx.fillRect(240, 300, 30, 30);
ctx.fillRect(270, 300, 30, 30);
ctx.fillRect(300, 300, 30, 30);
ctx.fillRect(330, 300, 30, 30);
ctx.fillRect(360, 300, 30, 30);
ctx.fillRect(390, 300, 30, 30);
ctx.fillRect(420, 300, 30, 30);
ctx.fillRect(210, 330, 30, 30);
ctx.fillRect(240, 330, 30, 30);
ctx.fillRect(270, 330, 30, 30);
ctx.fillRect(300, 330, 30, 30);
ctx.fillRect(330, 330, 30, 30);
ctx.fillRect(360, 330, 30, 30);
ctx.fillRect(390, 330, 30, 30);
ctx.fillRect(240, 360, 30, 30);
ctx.fillRect(270, 360, 30, 30);
ctx.fillRect(300, 360, 30, 30);
ctx.fillRect(330, 360, 30, 30);
ctx.fillRect(360, 360, 30, 30);
ctx.fillRect(270, 390, 30, 30);
ctx.fillRect(300, 390, 30, 30);
ctx.fillRect(330, 390, 30, 30);
ctx.fillRect(300, 420, 30, 30);
// bordes negros
ctx.strokeRect(240, 180, 30, 30);
ctx.strokeRect(270, 180, 30, 30);
ctx.strokeRect(330, 180, 30, 30);
ctx.strokeRect(360, 180, 30, 30);
ctx.strokeRect(390, 180, 30, 30);
ctx.strokeRect(420, 180, 30, 30);
ctx.strokeRect(450, 180, 30, 30);
ctx.strokeRect(150, 210, 30, 30);
ctx.strokeRect(210, 210, 30, 30);
ctx.strokeRect(240, 210, 30, 30);
ctx.strokeRect(270, 210, 30, 30);
ctx.strokeRect(300, 210, 30, 30);
ctx.strokeRect(330, 210, 30, 30);
ctx.strokeRect(360, 210, 30, 30);
ctx.strokeRect(390, 210, 30, 30);
ctx.strokeRect(420, 210, 30, 30);
ctx.strokeRect(450, 210, 30, 30);
ctx.strokeRect(150, 240, 30, 30);
ctx.strokeRect(180, 240, 30, 30);
ctx.strokeRect(210, 240, 30, 30);
ctx.strokeRect(240, 240, 30, 30);
ctx.strokeRect(270, 240, 30, 30);
ctx.strokeRect(300, 240, 30, 30);
ctx.strokeRect(330, 240, 30, 30);
ctx.strokeRect(360, 240, 30, 30);
ctx.strokeRect(390, 240, 30, 30);
ctx.strokeRect(420, 240, 30, 30);
ctx.strokeRect(450, 240, 30, 30);
ctx.strokeRect(150, 270, 30, 30);
ctx.strokeRect(210, 270, 30, 30);
ctx.strokeRect(240, 270, 30, 30);
ctx.strokeRect(270, 270, 30, 30);
ctx.strokeRect(300, 270, 30, 30);
ctx.strokeRect(330, 270, 30, 30);
ctx.strokeRect(360, 270, 30, 30);
ctx.strokeRect(390, 270, 30, 30);
ctx.strokeRect(420, 270, 30, 30);
ctx.strokeRect(450, 270, 30, 30);
ctx.strokeRect(180, 300, 30, 30);
ctx.strokeRect(210, 300, 30, 30);
ctx.strokeRect(240, 300, 30, 30);
ctx.strokeRect(270, 300, 30, 30);
ctx.strokeRect(300, 300, 30, 30);
ctx.strokeRect(330, 300, 30, 30);
ctx.strokeRect(360, 300, 30, 30);
ctx.strokeRect(390, 300, 30, 30);
ctx.strokeRect(420, 300, 30, 30);
ctx.strokeRect(210, 330, 30, 30);
ctx.strokeRect(240, 330, 30, 30);
ctx.strokeRect(270, 330, 30, 30);
ctx.strokeRect(300, 330, 30, 30);
ctx.strokeRect(330, 330, 30, 30);
ctx.strokeRect(360, 330, 30, 30);
ctx.strokeRect(390, 330, 30, 30);
ctx.strokeRect(240, 360, 30, 30);
ctx.strokeRect(270, 360, 30, 30);
ctx.strokeRect(300, 360, 30, 30);
ctx.strokeRect(330, 360, 30, 30);
ctx.strokeRect(360, 360, 30, 30);
ctx.strokeRect(270, 390, 30, 30);
ctx.strokeRect(300, 390, 30, 30);
ctx.strokeRect(330, 390, 30, 30);
ctx.strokeRect(300, 420, 30, 30);