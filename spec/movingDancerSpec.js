describe('movingDancer', function() {

  var movingDancer, clock;
  var timeBetweenSteps = 100;
  window.dancers = [];

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    movingDancer = new makeMovingDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(movingDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that moves the dancer', function() {
    // sinon.spy(movingDancer.$node, 'toggle');
    var x = movingDancer.left;
    var y = movingDancer.top;
    movingDancer.step();
    expect(movingDancer.left).to.not.be.equal(x);
    expect(movingDancer.top).to.not.be.equal(y);
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(movingDancer, 'step');
      expect(movingDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(movingDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(movingDancer.step.callCount).to.be.equal(2);
    });
  });
});
