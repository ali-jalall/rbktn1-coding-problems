  /*
  *
  * Linked List Intersection
  *
  * Write a function linkedListIntersection that returns the node 
  * at which the intersection of two linked lists begins, 
  * or null if there is no such intersection.
  * 
  * Example:
  * 
  * Given the following two linked lists list1 and list2, 
  * linkedListIntersection(list1,list2) should return D 
  * as the node of intersection.
  * 
  *    A → B → C
  *             ↘
  *               D → E → F
  *             ↗
  *        X → Y
  * 
  * Given the following two linked lists list1 and list2, 
  * linkedListIntersection(list1,list2) should return NULL 
  * as there is no point of intersection.
  * 
  *    A → B → C → D
  *    X → Y → Z
  * 
  */

  // Helper function (do not edit)
  function Node (val) {
    var obj = {};
    obj.value = val || null;
    obj.next = null;
    return obj;
  }


  let list1 = Node(1)
  list1.next = Node(2)
  list1.next.next = Node(3)
  list1.next.next.next = Node(4)

  let list2 = Node(5)
  list2.next = Node(3)
  list2.next.next = Node(7)
  list2.next.next.next = Node(8)

  function linkedListIntersection(list1, list2) {
    let list1Values = '';
    let list2Values = '';

    if (list1.next !== null) {
      list1Values += getValues(list1.next)
      linkedListIntersection(list1.next, list2)
    }

    if(list2.next !== null) {
      list2Values += getValues(list2.next)
      linkedListIntersection(list1, list2.next)
    }

    return list1Values
  }

  const getValues = (obj) => {
    return Object.values(obj)
  }