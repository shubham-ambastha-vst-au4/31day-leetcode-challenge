// Question: Flood Fill

var floodFill = function (image, sr, sc, newColor) {
    let first = image[sr][sc]
    if (first === newColor) {
        return image;
    }
    function helper(img, i, j, color, newColor) {
        if (i < 0 || j < 0 || i >= img.length || j >= img[0].length || img[i][j] != color) {
            return;
        }
        img[i][j] = newColor;
        helper(img, i, j - 1, color, newColor)
        helper(img, i, j + 1, color, newColor)
        helper(img, i - 1, j, color, newColor)
        helper(img, i + 1, j, color, newColor)
    }
    helper(image, sr, sc, image[sr][sc], newColor)
    return image
};