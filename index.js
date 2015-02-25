var _ = require('underscore');

module.exports = function objectPatch(object, patch) { 
  _.each(patch, function(value, key) {
    var increment = (_.isObject(value) ? value : {})['$inc'];

    // Unset key on object if value is null or undefined
    if (_.isNull(value) || _.isUndefined(value)) {
      return delete object[key];
    }

    // Overwrite value of key prop on object with value 
    // if value is array.
    if (_.isArray(value)) {
      return object[key] = value;
    }

    // If increment operator, increment (+=) value of 
    // object's key prop with increment.
    if (increment) {
      return object[key] += increment;
    }

    // If value is an object, objectPatch object's key prop 
    // with value.
    if (_.isObject(value)) {
      return objectPatch(object[key], value);
    }

    // Value is not null, undefined, an array, an increment 
    // operator value, or an object.  Overwrite key prop on 
    // object with value.
    object[key] = value;
  });

  return object;
};

