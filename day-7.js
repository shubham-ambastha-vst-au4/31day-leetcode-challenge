// Question: Cousins in binary tree

var isCousins = function (root, x, y) {
    let depths = []
    let parents = []
    function dfs(node, parent, depth) {
        if (!node) {
            return false
        }
        if (node.val === x || node.val === y) {
            parents.push(parent);
            depths.push(depth)
        }
        dfs(node.left, node.val, depth + 1)
        dfs(node.right, node.val, depth + 1)
    }
    dfs(root, root.val, 0)
    return ((depths[0] === depths[1]) && (parents[0] !== parents[1]))
};