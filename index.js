function SumOfkNumber(sum, n, list){
	const list1 = JSON.parse(JSON.stringify(list))
	const list2 = JSON.parse(JSON.stringify(list))
	// 递归出口
	if (n <= 0 || sum <= 0)
			return;
	if (sum == n){
		// 反转list
		list.reverse();
		console.log((list.join(' ') + ' '+ n))
		list.reverse()//此处还需反转回来
	}

	list1.unshift(n); //典型的01背包问题
	SumOfkNumber(sum - n, n - 1, list1);   //“放”n，前n-1个数“填满”sum-n
	// list2.pop();
	SumOfkNumber(sum, n - 1, list2);     //不“放”n，n-1个数“填满”sum
}

SumOfkNumber(8,10,list);