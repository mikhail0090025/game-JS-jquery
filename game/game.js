var GlobalDamageFactor = 1;
var GlobalFireRateFactor = 1;
var GlobalAccuracyFactor = 1;
var cell_size = 40;
function GetCellNumber(x, y) {
    var X = Math.floor((x / cell_size));
    var Y = Math.floor((y / cell_size));
    return [X, Y];
}
var ShopAssortment = [new ShopProduct("Common cannon", "pictures/Icons/Shop/CannonIcon.jpg", 2500)];
var game = new Game();
game.DrawMap();
