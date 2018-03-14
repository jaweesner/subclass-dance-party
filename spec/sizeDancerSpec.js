describe('sizeDancer', function() {

  var sizeDancer, clock;
  var timeBetweenSteps = 100;
  window.dancers = [];

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    sizeDancer = new makeSizeDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(sizeDancer.$node).to.be.an.instanceof(jQuery);
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(sizeDancer, 'step');
      expect(sizeDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(sizeDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(sizeDancer.step.callCount).to.be.equal(2);
    });
  });
});