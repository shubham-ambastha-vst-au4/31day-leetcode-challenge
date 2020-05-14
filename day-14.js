// Question: Implement Tries Methods

function trieNode(word) {
    this.word = word,
        this.children = {},
        this.isWord = false
}

var Trie = function () {
    this.root = new trieNode('');
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.search = function (word) {
    var currNode = this.root;
    var letter = word.slice(0, 1);
    word = word.slice(1);

    while (letter.length > 0) {
        if (currNode.children[letter]) {
            currNode = currNode.children[letter];
            if (word.length == 0) {
                return currNode.isWord;
            }
            letter = word.slice(0, 1);
            word = word.slice(1);
        } else {
            return false;
        }
    }
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.insert = function (word) {
    var currNode = this.root;
    var letter = word.slice(0, 1);
    word = word.slice(1);

    var child;

    while (letter.length > 0) {
        if (currNode.children[letter] === undefined) {
            child = new trieNode(letter);
            currNode.children[letter] = child;
        } else {
            child = currNode.children[letter];
        }
        currNode = child;
        letter = word.slice(0, 1);
        word = word.slice(1);
    }
    child.isWord = true;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    var currNode = this.root;
    var letter = prefix.slice(0, 1);
    prefix = prefix.slice(1);

    while (letter.length > 0) {
        if (currNode.children[letter]) {
            currNode = currNode.children[letter];
            letter = prefix.slice(0, 1);
            prefix = prefix.slice(1);
        } else {
            return false;
        }
    }
    return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */