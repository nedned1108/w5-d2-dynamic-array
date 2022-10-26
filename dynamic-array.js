class DynamicArray {

  constructor(defaultSize=4) {
    this.length = 0;
    this.capacity = defaultSize;
    this.data = new Array(this.capacity);
  }

  read(index) {

    return this.data[index]
  }

  push(val) {
    if (this.length === this.capacity) {
      this.resize()
    }
    this.data[this.length] = val;
    return this.length++; 
  }


  pop() {
    this.data[this.length] = null;
    return this.length--
  }

  unshift(val) {
    if (this.length === this.capacity) {
      this.resize()
    }
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = val;
    this.length++
    return this.length;
  }
  
  shift() {
    let remove = this.data[0];
    for (let i = 0; i < this.capacity - 1; i++) {
      this.data[i] = this.data[i + 1]
    }
    this.length--;
    return remove;
  }

  indexOf (val) {
    for (let i = 0; i < this.capacity; i++) {
      if (val === this.data[i]) {
        return i
      }
    }
    return -1
  }

  resize () {
    this.capacity *= 2;
    let newArr = new Array(this.capacity)
    for (let i = 0; i < this.capacity; i++) {
      newArr[i] = this.data[i]
    }
    return this.data = newArr;
    
  }
}


module.exports = DynamicArray;
