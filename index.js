var exist = function(board, word) {
	rows = board.length;
	cols = board[0].length;
	for(let i = 0; i < rows; i++) {
			for(let j = 0; j < cols; j++) {
					if(dfs(board, word, i, j, 0)) return true;
			}
	}
	return false;
};


function dfs(board, word, i, j, k) {
	if(i >= rows || i < 0 || j >= cols || j < 0 || board[i][j] != word[k]) return false;
	if(k == word.length - 1) return true;
	board[i][j] = '';
	res = dfs(board, word, i + 1, j, k + 1) || dfs(board, word, i - 1, j, k + 1) || 
								dfs(board, word, i, j + 1, k + 1) || dfs(board, word, i , j - 1, k + 1);
	board[i][j] = word[k];
	return res;
}