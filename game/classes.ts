class Point{
    public X: number;
    public Y: number;
    constructor(x, y){
        this.X = x;
        this.Y = y;
    }
    public Distance(p: Point){
        return Math.sqrt(Math.pow(p.X - this.X, 2) + Math.pow(p.Y - this.Y, 2));
    }
}
// ENEMIES
abstract class Enemy{
    public position: Point;
    public HP: number;
    public StartHP: number;
    public Speed: number;

    constructor(position: Point, startHP: number, speed: number) {
        this.position = position;
        this.HP = startHP;
        this.StartHP = startHP;
        this.Speed = speed;
    }

    abstract GetDamage(damage:number): void;
    abstract Dead(g: Game):void;
}
class CommonShooter extends Enemy{
    public Gun: ShootingGun;
    public GetDamage(damage:number): void {
        this.HP -= damage;
        if(this.HP <= 0) this.Dead(game);
    }

    public Dead(g: Game){
        g.Enemies.filter((enemy) => enemy !== this);
    }

    constructor(position: Point, startHP: number, speed: number, gun: ShootingGun) {
        super(position, startHP, speed);
        this.Gun = gun;
    }
}
// PROTECTIVS
abstract class Protective{
    public position: Point;
    public HP: number;
    public Size: number; // in cells
    constructor(pos:Point, hp: number, size:number){
        this.position = pos;
        this.HP = hp;
        this.Size = size;
    }
}
abstract class Cannon extends Protective{
    public Damage: number;
    public FireRate: number;
    public Accuracy: number;
    public WorkRadius: number;

    constructor(pos: Point, hp: number, size: number, damage: number, fireRate: number, accuracy: number, workRadius: number) {
        super(pos, hp, size);

        this.Damage = damage;
        this.FireRate = fireRate;
        this.Accuracy = accuracy;
        this.WorkRadius = workRadius;
    }

    abstract DrawMe(): void;
    abstract Shoot(target: Enemy): void;
}
class CommonCannon extends Cannon{
    constructor(pos: Point, hp: number, size: number, damage: number, fireRate: number, accuracy: number, workRadius: number) {
        super(pos, hp, size, damage, fireRate, accuracy, workRadius);
    }
    public DrawMe(): void {
        
    }
    public Shoot(): void {
        
    }
}
// GUNS
abstract class Gun{
    public Damage: number;
    public FireRate: number;

    constructor(damage: number, fireRate: number) {
        this.Damage = damage;
        this.FireRate = fireRate;
    }
}
abstract class ShootingGun extends Gun{
    public Accuracy: number;
    public WorkRadius: number;

    constructor(damage: number, fireRate: number, accuracy: number, workRadius: number) {
        super(damage, fireRate);
        this.Accuracy = accuracy;
        this.WorkRadius = workRadius;
    }
}
abstract class MeleeGun extends Gun{

}
// SHOP
class ShopProduct{
    public Header : string;
    public Path : string;
    public Price: number;

    constructor(header: string, path: string, price: number) {
        this.Header = header;
        this.Path = path;
        this.Price = price;
    }
}
/////////////////////
class Game{
    public Gold: number;
    public Enemies: Array<Enemy>;
    public ProtectiveItems: Array<Protective>;

    constructor(){
        this.Gold = 500;
        this.Enemies = [];
        this.ProtectiveItems = [];
    }

    public DrawMap() : void{
        var cnv: HTMLCanvasElement | null = document.getElementById("main_canvas") as HTMLCanvasElement | null;
        if(cnv){
            var context = cnv.getContext("2d");
            if(context){
                context.clearRect(0, 0, 800, 600);
                for (let i = 0; i < 800 / cell_size; i++) {
                    for (let j = 0; j < 600 / cell_size; j++) {
                        context.fillStyle = (i + j) % 2 == 0 ? "#0F0" : "#0B0";
                        context.fillRect(i * cell_size, j * cell_size, cell_size, cell_size);
                    }
                }
            }
            else throw new Error("Canvas context was not found");
        }
        else throw new Error("Canvas was not found");
    }
}