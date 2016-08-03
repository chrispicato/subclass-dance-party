describe('blinkyDancer and GirlDancer', function() {

  var blinkyDancer, clock;
  var girlDancer;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new BlinkyDancer(10, 20, timeBetweenSteps);
  });

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    girlDancer = new GirlDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a jQuery $node object', function() {
    expect(girlDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    girlDancer.step();
    expect(girlDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(blinkyDancer, 'step');
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);
      clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });
});

describe('GirlDancer', function() {

  var girlDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    girlDancer = new GirlDancer(10, 20, timeBetweenSteps);
    console.log(girlDancer);
  });

  it('should have a jQuery $node object', function() {
    expect(girlDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(girlDancer.$node, 'toggle');
    girlDancer.step();
    expect(girlDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(girlDancer, 'step');
      expect(girlDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);
      clock.tick(timeBetweenSteps);

      expect(girlDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      
      expect(girlDancer.step.callCount).to.be.equal(2);
    });
  });
});