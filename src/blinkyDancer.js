var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  this.$node = $('<img class="dancer panda" src="img/panda2.png"/>');
  Dancer.prototype.setPosition.call(this, top, left);
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);

BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function(timeBetweenSteps) {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};