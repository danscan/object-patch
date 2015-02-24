var _ = require('underscore');

module.exports = function extend(object, patch) { 
  _.each(patch, function(value, key) {
    var increment = value['$inc'];

    object[key] = (_.isObject(value)
      ? (increment !== undefined
        ? object[key] += increment
        : extend(object[key], value))
      : value);
  });

  return object;
};

