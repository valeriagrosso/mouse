import {canvas, IMAGES as images} from './initialize.js'
import {ctx, drawObj, run, start, dT} from './initialize.js'

let balones = []

let Balon = {
    x:200,
    y:200,
    r:15,
    vX: 50,
    vY: -50,
    dibujarse:function(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 2*Math.PI, 0);
        ctx.fillStyle = "rgba(0,0,0,0.5)"
        ctx.stroke();
        ctx.fill();
    },
    moverse:function(){
        this.x = this.x + this.vX * dT/1000;
        this.y = this.y + this.vY * dT/1000;
    }

}

drawObj.draw =  function(){
    ctx.clearRect(0, 0, 400, 400);
    for (let balon of balones){
        balon.dibujarse()
        balon.moverse()
    }
}
run()

function crearParticula(bbb){
    let nuevoBalon = Object.create(Balon)
    nuevoBalon.x = bbb.offsetX
    nuevoBalon.y = bbb.offsetY
    let ang = 2 * Math.PI * Math.random()
    let v = 200 * Math.random()
    nuevoBalon.vX = v * Math.cos(ang)
    nuevoBalon.vY = v * Math.sin(ang)
    balones.push(nuevoBalon)
    console.log(balones)
}
canvas.onclick = crearParticula
