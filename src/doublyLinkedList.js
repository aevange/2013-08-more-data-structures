var makeLinkedList = function(){
  var list = {};
  list.tail = null;
  list.head = null;

  list.addToTail = function(val){
    var temp = list.tail;
    list.tail = makeNode(val);
    if(list.head === null){
      list.head = list.tail;
    } else {
      temp.next = list.tail;
      list.tail.previous = temp;
    }
  };

  list.removeHead = function(){
    var result;
    if(list.head === list.tail){
      if(list.head === null){
        result = undefined;
      } else {
        list.tail = null;
      }
    }
    result = list.head.value;
    list.head = list.head.next;
    return result;
  };

  list.contains = function(val){
    
    var search = function(node){
      if (node === null) {
        return false;
      } else if (node.value === val){
        return true;
      } else {
        return search(node.next);
      }
    };

    return search(list.head);
  };

  //Extra Credit
  list.addToHead = function(val){
    var temp = list.head;
    list.head = makeNode(val);
    if(temp){
      list.head.next = temp;
      temp.previous = list.head;
    } else {
      list.tail = list.head;
    }
  };

  list.removeTail = function(){
    var result = null;
    if(list.tail){
      result = list.tail.value;
    }
    list.tail = list.tail.previous;
    list.tail.next = null;
    return result;
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;
  node.previous = null;
  return node;
};