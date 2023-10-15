// Your code here
class Polygon{
    constructor(arraySide){
     this.arraySide= arraySide
    }
    get countSides(){
        return this.arraySide.length
    }
    get perimeter(){
        return this.arraySide.reduce((total , side) => total + side , 0 );
        
    }
}
class Triangle extends Polygon{
   
    get isValid(){
        if(this.arraySide[0] + this.arraySide[1] > this.arraySide[2] && this.arraySide[1] + this.arraySide[2] > this.arraySide[0] &&
            this.arraySide[0] + this.arraySide[2] > this.arraySide[1]){
                return true
            }
            else {
                return false
            }
    }
}
class Square extends Polygon{
   

    get isValid(){
      if(this.arraySide[0] == this.arraySide[1] && this.arraySide[1] == this.arraySide[2] && this.arraySide[2] == this.arraySide[3])
    {
      return true}
     else{return false}}
    get area(){
        return this.arraySide[0]** 2
    }
}

let myPolygon = new Polygon([2,2,2,2])
console.log(myPolygon);