// Question: Kth smallest element in BST

var kthSmallest = function (root, k) {
    let elems = [];
    function inorder(node) {
        if (node) {
            if (node.left) inorder(node.left)
            elems.push(node.val)
            if (node.right) inorder(node.right)
        }
    }
    inorder(root)
    return elems[k - 1]
};