module.exports = {

  mergeLists(llA, llB) {
    let currentA = llA.head;
    let currentB = llB.head;
    let nextA, nextB;
   
    while(currentA !== null && currentB !== null) {
      nextA = currentA.next;
      nextB = currentB.next;
      if(currentB !== null) currentA.next = currentB;
      if(nextA !== null) currentB.next = nextA;
      currentA = nextA;
      currentB = nextB;
    }

    if(llA.head === null) llA.head = llB.head;
  },

  mergeAndSortLists(llA, llB) {
    return true;
  },

};