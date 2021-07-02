var Trie = function () {
	this.trie = [];
};

Trie.prototype.insert = function (word) {
	this.trie.push(word);
};

Trie.prototype.search = function (word) {
	return this.trie.indexOf(word) !== -1;
};

Trie.prototype.startsWith = function (prefix) {
	if (this.trie.length === 0) return false;
	for (const iterator of this.trie) {
		if (iterator.startsWith(prefix)) return true;
	}
	return false;
};
