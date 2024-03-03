let GlobalDamageFactor = 1;
let GlobalFireRateFactor = 1;
let GlobalAccuracyFactor = 1;
let cell_size = 40;
function GetCellNumber(x: number, y: number): [number, number] {
    var X = Math.floor((x / cell_size));
    var Y = Math.floor((y / cell_size));
    return [X, Y];
}
function MaxCellIndex(): Object {
    return {X: (800 / cell_size) - 1, Y: (600 / cell_size) - 1};
}
let ShopAssortment = [new ShopProduct("Common cannon", "pictures/Icons/Shop/CannonIcon.jpg", 2500)];
var game = new Game();
game.DrawMap();