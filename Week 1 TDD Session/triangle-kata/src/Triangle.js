function Triangle(lengthA, lengthB, lengthC) {
	this.lengthA = lengthA;
	this.lengthB = lengthB;
	this.lengthC = lengthC;

}

Triangle.prototype.isValidTriangle = function(){

  if(this.lengthA === 0 || this.lengthB === 0 || this.lengthC === 0){
    return false;
  }
  if(this.lengthA === this.lengthB || this.lengthB === this.lengthC ){
    return true;
  }

};
