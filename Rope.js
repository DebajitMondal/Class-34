class Rope{
constructor(bodyA,pointB){
var options = {
 bodyA:bodyA,
 pointB:pointB,
 stifness:1.2,
 length:200
}
this.pointB = pointB
this.Rope = Constraint.create(options)
World.add(world,this.Rope)



}
display(){
var pointA = this.Rope.bodyA.position
var pointB = this.pointB
push()
stroke("black")
line(pointA.x,pointA.y,pointB.x,pointB.y)
pop()

}


}