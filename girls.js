var girlDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  this.$node = $('<span class="dancer"><img src="panda.png"/></span>');
};

girlDancer.prototype = Object.create(Dancer.prototype);

girlDancer.prototype.constructor = girlDancer;

girlDancer.prototype.step = function(timeBetweenSteps) {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};