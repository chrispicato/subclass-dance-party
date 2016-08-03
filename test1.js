var addArrayValues = function () {
  var result = [];
  var args = Array.prototype.slice.call(arguments);
  var recursiveHelper = function (arr) {
    for (var i = 0; i < args.length; i++) {
      var arrayIndex = 0;
      results.push(args[i][arrayIndex]);
      arrayIndex++;
    }
  };
  return result;
};

var arr1 = [1, 2, 3]


// [6, 9, 12]~