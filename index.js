function movingCount(m, n, k) {
	if (k == 0)  return 1;
	let vis = []
	for(let i = 0 ; i < m ; i++) {
		vis[i] = [];
		for(let j = 0 ; j < n ; j++) {
			vis[i][j] = false; 
		}
	}
	let ans = 1;
	vis[0][0] = true;
	for (let i = 0; i < m; ++i) {
			for (let j = 0; j < n; ++j) {
					if ((i == 0 && j == 0) || getTotal(i,j) > k) {
							continue;
					}
					// 边界判断
					if (i - 1 >= 0) {
							vis[i][j] |= vis[i - 1][j];
					}
					if (j - 1 >= 0) {
							vis[i][j] |= vis[i][j - 1];
					}
					ans += vis[i][j] ? 1 : 0;
			}
	}
	return ans;
}

function getTotal(i,j,k) {
		i = i + '';
		j = j + '';
		let total = 0;
		for (const iterator of i) {
			total += parseInt(iterator)
		}
		for (const iterator of j) {
			total += parseInt(iterator)
		}
		return total;
}