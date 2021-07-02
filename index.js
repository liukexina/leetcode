var isValidSudoku = function (board) {
	rows = [];
	colums = [];
	boxes = [];

	for (let i = 0; i < 9; i++) {
		rows[i] = [];
		colums[i] = [];
		boxes[i] = [];
	}

	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			const num = board[i][j];
			if (num != '.') {
				let n = Number(num);
				let box_index = Math.floor(i / 3) * 3 + Math.floor(j / 3);

				if (rows[i].indexOf(n) !== -1 || colums[j].indexOf(n) !== -1 || boxes[box_index].indexOf(n) !== -1) {
					return false;
				} else {
					rows[i].push(n);
					colums[j].push(n);
					boxes[box_index].push(n);
				}
			}
		}
	}
	return true;
};
