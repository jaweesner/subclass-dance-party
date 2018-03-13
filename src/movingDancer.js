var makeMovingDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

makeMovingDancer.prototype = Object.create(Dancer.prototype);

makeMovingDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  if (!this.$node.hasClass('linedupDancer')){
  var x = (Math.random() * 100) - 50;
  var y = (Math.random() * 100) - 50;

  this.setPosition(this.top + x, this.left + y); 
  
  
  var checkPosition = function(y,x) {
    // var movingObj = this;
    // y = this.top;
    // x = this.left;
    window.dancers.forEach(function(el) {
      // if (el === this) {
      //   return;
      // }
      var distance = Math.sqrt(Math.pow((x-el.left),2) + Math.pow((y - el.top),2));
      if(distance <= 20 && distance > 0) {
      var sound = $('<audio ><source src = "collision.ogg" type="audio/ogg"></audio>');
      $('.collision').append(sound);
      sound[0].play().then(function(result) {
        sound.remove();
      }, function(){
        console.log('not play');
        });
      }
    });  
  };
  checkPosition(this.top, this.left);
  }
};
