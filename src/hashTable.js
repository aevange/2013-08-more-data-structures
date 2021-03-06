var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var values = this._storage.get(i) || [];
  values.push([k,v]);
  this._storage.set(i, values);
};

HashTable.prototype.retrieve = function(k){
  var value;
  var i = getIndexBelowMaxForKey(k, this._limit);
  var elements = this._storage.get(i);
  _.each(elements, function(el){
    el[0] === k && (value = el[1]);
  });
  return value;
};

HashTable.prototype.remove = function(k){
  var value;
  var i = getIndexBelowMaxForKey(k, this._limit);
  var elements = this._storage.get(i);

  _.each(elements, function(el,i,array){
    el[0] === k && (value = el[1]) && array.splice(i,1);
  });
  return value;
};
