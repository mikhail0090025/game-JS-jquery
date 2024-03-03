var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.X = x;
        this.Y = y;
    }
    Point.prototype.Distance = function (p) {
        return Math.sqrt(Math.pow(p.X - this.X, 2) + Math.pow(p.Y - this.Y, 2));
    };
    return Point;
}());
// ENEMIES
var Enemy = /** @class */ (function () {
    function Enemy(position, startHP, speed) {
        this.position = position;
        this.HP = startHP;
        this.StartHP = startHP;
        this.Speed = speed;
    }
    return Enemy;
}());
var CommonShooter = /** @class */ (function (_super) {
    __extends(CommonShooter, _super);
    function CommonShooter(position, startHP, speed, gun) {
        var _this = _super.call(this, position, startHP, speed) || this;
        _this.Gun = gun;
        return _this;
    }
    CommonShooter.prototype.GetDamage = function (damage) {
        this.HP -= damage;
        if (this.HP <= 0)
            this.Dead(game);
    };
    CommonShooter.prototype.Dead = function (g) {
        var _this = this;
        g.Enemies.filter(function (enemy) { return enemy !== _this; });
    };
    return CommonShooter;
}(Enemy));
// PROTECTIVS
var Protective = /** @class */ (function () {
    function Protective(pos, hp, size) {
        this.position = pos;
        this.HP = hp;
        this.Size = size;
    }
    return Protective;
}());
var Cannon = /** @class */ (function (_super) {
    __extends(Cannon, _super);
    function Cannon(pos, hp, size, damage, fireRate, accuracy, workRadius) {
        var _this = _super.call(this, pos, hp, size) || this;
        _this.Damage = damage;
        _this.FireRate = fireRate;
        _this.Accuracy = accuracy;
        _this.WorkRadius = workRadius;
        return _this;
    }
    return Cannon;
}(Protective));
var CommonCannon = /** @class */ (function (_super) {
    __extends(CommonCannon, _super);
    function CommonCannon(pos, hp, size, damage, fireRate, accuracy, workRadius) {
        return _super.call(this, pos, hp, size, damage, fireRate, accuracy, workRadius) || this;
    }
    CommonCannon.prototype.DrawMe = function () {
    };
    CommonCannon.prototype.Shoot = function () {
    };
    return CommonCannon;
}(Cannon));
// GUNS
var Gun = /** @class */ (function () {
    function Gun(damage, fireRate) {
        this.Damage = damage;
        this.FireRate = fireRate;
    }
    return Gun;
}());
var ShootingGun = /** @class */ (function (_super) {
    __extends(ShootingGun, _super);
    function ShootingGun(damage, fireRate, accuracy, workRadius) {
        var _this = _super.call(this, damage, fireRate) || this;
        _this.Accuracy = accuracy;
        _this.WorkRadius = workRadius;
        return _this;
    }
    return ShootingGun;
}(Gun));
var MeleeGun = /** @class */ (function (_super) {
    __extends(MeleeGun, _super);
    function MeleeGun() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MeleeGun;
}(Gun));
// SHOP
var ShopProduct = /** @class */ (function () {
    function ShopProduct(header, path, price) {
        this.Header = header;
        this.Path = path;
        this.Price = price;
    }
    return ShopProduct;
}());
/////////////////////
var Game = /** @class */ (function () {
    function Game() {
        this.Gold = 500;
        this.Enemies = [];
        this.ProtectiveItems = [];
    }
    Game.prototype.DrawMap = function () {
        var cnv = document.getElementById("main_canvas");
        if (cnv) {
            var context = cnv.getContext("2d");
            if (context) {
                context.clearRect(0, 0, 800, 600);
                for (var i = 0; i < 800 / cell_size; i++) {
                    for (var j = 0; j < 600 / cell_size; j++) {
                        context.fillStyle = (i + j) % 2 == 0 ? "#0F0" : "#0B0";
                        context.fillRect(i * cell_size, j * cell_size, cell_size, cell_size);
                    }
                }
            }
            else
                throw new Error("Canvas context was not found");
        }
        else
            throw new Error("Canvas was not found");
    };
    return Game;
}());
