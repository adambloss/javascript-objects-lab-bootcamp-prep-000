var recipes = {}
function updateObjectWithKeyAndValue(object, key, value) {
  var obj = Object.assign({key:'value'}, object);
  return obj
}
function destructivelyUpdateObjectWithKeyAndValue (object, key, value) {
  object[key] = value;
  return object
}
function deleteFromObjectByKey(object, key) {
  var obj = delete object.key;
  return obj
}
function destructivelyDeleteFromObjectByKey(object, key) {
  var obj = Object.assign({key:object.key}, object, {})
  object = obj
  return object
}
