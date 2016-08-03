var GirlDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  this.$node = $('<img class="pandaGirl" src="img/pandadancer.png"/>');
};

GirlDancer.prototype = Object.create(Dancer.prototype);

GirlDancer.prototype.constructor = GirlDancer;

GirlDancer.prototype.step = function(timeBetweenSteps) {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};