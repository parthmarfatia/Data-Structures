class LinkedList {
  constructor(data) {
    this.head = {
      value: data,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(data) {
    const newNode = {
      value: data,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  prepend(data) {
    const newNode = {
      value: data,
      next: null,
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  traversing(req) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== req) {
      counter++;
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  insert(index, data) {
    const newNode = {
      value: data,
      next: null,
    };
    if (index === 0) {
      this.prepend(data);
    } else {
      const leaderNode = this.traversing(index - 1);
      const nextNode = leaderNode.next;
      leaderNode.next = newNode;
      newNode.next = nextNode;
    }
    this.length++;
  }

  delete(index) {
    const leaderNode = this.traversing(index - 1);
    const nextNode = leaderNode.next.next;
    leaderNode.next = nextNode;
    this.length--;
  }

  reverse() {
    let i = 0;
    let j = this.length - 1;
    while (i < j) {
      let startNode = this.traversing(i);
      let endNode = this.traversing(j);
      [startNode.value, endNode.value] = [endNode.value, startNode.value];
      i++;
      j--;
    }
  }

  reverse2() {
    let first = this.head;
    this.tail = this.head;
    let second = this.head.next;

    while (second) {
      let temp = second.next;
      second.next = first;

      first = second;
      second = temp;
    }

    this.head.next = null;
    this.head = first;
  }
}

function linkedListToArray(root) {
  let res = [];
  for (let node = root; node !== null; node = node.next) {
    res.push(node.value);
  }
  console.log(res);
  return res;
}

let myList = new LinkedList(10);
myList.append(16);
myList.append(19);
myList.append(20);
myList.reverse2();
linkedListToArray(myList.head);
console.log(myList);
