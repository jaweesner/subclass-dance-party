var makeSizeDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.maxSize =  Math.random() * 200;
  this.minSize = Math.random() * 50;
  this.sizeTime = Math.random() * 1000;
};

makeSizeDancer.prototype = Object.create(Dancer.prototype);

makeSizeDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.animate({'height': this.maxSize + 'px', 'width': this.maxSize + 'px'}, this.sizeTime);
  this.$node.animate({'height': this.minSize + 'px', 'width': this.minSize + 'px'}, this.sizeTime);
};
