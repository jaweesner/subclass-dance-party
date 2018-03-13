var makeMovingDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

makeMovingDancer.prototype = Object.create(Dancer.prototype);

makeMovingDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  var x = (Math.random() * 100) - 50;
  var y = (Math.random() * 100) - 50;

  this.setPosition(this.top + x, this.left + y); 
  
  
  var checkPosition = function() {
    var movingObj = this;
    y = this.top;
    x = this.left;
    window.dancers.forEach(function(el) {
      if (el === this) {
        return;
      }
      var distance = Math.sqrt(Math.pow((x-el.left),2) + Math.pow((y - el.left),2));
      if(distance <= 115) {
        $('.collision').play();
      }
    });  
  };
  checkPosition();
};
