var makeMovingDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
};

makeMovingDancer.prototype = Object.create(Dancer.prototype);

makeMovingDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  var x = (Math.random()*100)-50;
  var y = (Math.random()*100)-50;

  this.setPosition(this.top + x, this.left+y); 
  
};