var MaxQueue = function() {
  this.arr = [];
  this.max = [];
};

MaxQueue.prototype.max_value = function() {
  return this.max.length ? this.max[0] : -1;
};

MaxQueue.prototype.push_back = function(value) {
  this.arr.push(value);
  while(this.max.length && this.max[this.max.length-1] < value) {
    this.max.pop()
  }
  this.max.push(value)
};

MaxQueue.prototype.pop_front = function() {
  if(!this.arr.length) return -1;
  const value = this.arr.shift();
  if(value === this.max[0]) this.max.shift();
  return value;
};