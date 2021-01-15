
class Chain {
constructor (body1,body2,offsetX,offsetY)
{
 this.offsetX=offsetX
 this.offsetY=offsetY
var options ={
   
    bodyA: body1,
    bodyB: body2,
    pointB :{x: this.offsetX , y: this.offsetY}
}
 this.rope = con.create(options)
World.add(world,this.rope)
}
display(){
push()
    strokeWeight (3)
var pointA=this.rope.bodyA.position
var pointB =this.rope.bodyB.position

var a1x=pointA.x
var a1y=pointA.y
var a2x=pointB.x+this.offsetX
var a2y=pointB.y+this.offsetY
line (a1x,a1y,a2x,a2y)
pop ()
}
}