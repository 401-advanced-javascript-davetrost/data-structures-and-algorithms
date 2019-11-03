module.exports = {

  mergeLists(llA, llB) {
    let currentA = llA.head;
    let currentB = llB.head;
    let nextA, nextB;
   
    while(currentA && currentB) {
      nextA = currentA.next;
      nextB = currentB.next;

      currentA.next = currentB;
      if(nextA) currentB.next = nextA;
      
      currentA = nextA;
      currentB = nextB;
    }

    if(!llA.head) llA.head = llB.head;
  },

  mergeAndSortLists(llA, llB) {
    let currentA = llA.head;
    let currentB = llB.head;
    let nextA, nextB;
    
    while(currentA && currentB) {
      if(currentA.next && currentA.value > currentA.next.value) throw 'Exception: list A was not provided as a sorted list.';
      if(currentB.next && currentB.value > currentB.next.value) throw 'Exception: list B was not provided as a sorted list.';
      
      nextA = currentA.next;
      nextB = currentB.next;

      if(!nextA && currentA.value < currentB.value) {
        currentA.next = currentB;
        currentA = nextA;
      }
      else if(!nextB && currentB.value < currentA.value) {
        currentB.next = currentA;
        currentB = nextB;
      }
      else if(nextA && currentA.value < currentB.value && currentB.value < nextA.value) {
        currentA.next = currentB;
        currentB.next = nextA;
        currentA = nextA;
      }
      else if(nextB && currentB.value < currentA.value && currentA.value < nextB.value) {
        currentB.next = currentA;
        currentA.next = nextB;
        currentB = nextB;
      }
      else if(currentA.value < currentB.value) {
        currentA = nextA;
      }
      else {
        currentB = nextB;
      }
      
    }
    
    if(!llA.head) llA.head = llB.head;
    if(llA.head && llA.head.value > llB.head.value) llA.head = llB.head;
  },

};