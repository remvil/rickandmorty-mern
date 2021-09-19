
/**
 * Check is the passed value is undefined or null or is an object/string length is 0
 **/
const isEmpty = (val) => {
  console.log(val);
  return (
    val === undefined ||
    val === null ||
    (typeof val == 'object' && Object.keys(val).length === 0) ||
    (typeof val == 'string' && val.trim().length === 0)
  );
}

module.exports = isEmpty;