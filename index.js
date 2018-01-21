var recipes = {}
function updateObjectWithKeyAndValue(object, key, value) {
  var obj = Object.assign({},object,{key:value});
  return obj
}
function destructivelyUpdateObjectWithKeyAndValue (object, key, value) {
  return object[key] = value;
}
function deleteFromObjectByKey(object, key) {
  var obj = delete object.key;
  return obj
}
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.key;
}
