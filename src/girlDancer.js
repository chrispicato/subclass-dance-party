var GirlDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  this.$node = $('<img class="dancer pandaGirl" src="img/pandadancer.png"/>');
  Dancer.prototype.setPosition.call(this, top, left);
};

GirlDancer.prototype = Object.create(Dancer.prototype);

GirlDancer.prototype.constructor = GirlDancer;

GirlDancer.prototype.step = function(timeBetweenSteps) {
  Dancer.prototype.step.call(this);
  this.$node.slideToggle();
};