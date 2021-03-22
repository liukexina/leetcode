var spiralOrder = function(matrix) {
	if (!matrix.length || !matrix[0].length) {
			return [];
	}

	const rows = matrix.length, columns = matrix[0].length;
	const order = [];
	let left = 0, right = columns - 1, top = 0, bottom = rows - 1;
	while (left <= right && top <= bottom) {
			for (let column = left; column <= right; column++) {
					order.push(matrix[top][column]);
			}
			for (let row = top + 1; row <= bottom; row++) {
					order.push(matrix[row][right]);
			}
			if (left < right && top < bottom) {
					for (let column = right - 1; column > left; column--) {
							order.push(matrix[bottom][column]);
					}
					for (let row = bottom; row > top; row--) {
							order.push(matrix[row][left]);
					}
			}
			[left, right, top, bottom] = [left + 1, right - 1, top + 1, bottom - 1];
	}
	return order;
};

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/shun-shi-zhen-da-yin-ju-zhen-lcof/solution/shun-shi-zhen-da-yin-ju-zhen-by-leetcode-solution/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。