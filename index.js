/**
 * initialize your data structure here.
 */
var MedianFinder = function () {
  this.arr = [];
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  sortN(this.arr, num);
  function sortN(arr, num) {
    low = 0;
    high = arr.length - 1;

    while (low <= high) {
      m = Math.floor((low + high) / 2);
      if (arr[m] > num) high = m - 1;
      else low = m + 1;
    }

    if (low === 0) {
      arr.unshift(num);
    } else {
      arr.splice(low, 0, num);
    }
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  let middle = (this.arr.length - 1) / 2;
  if (Number.isInteger(middle)) {
    return this.arr[middle];
  } else {
    return (this.arr[Math.ceil(middle)] + this.arr[Math.floor(middle)]) / 2;
  }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
