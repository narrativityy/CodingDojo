class RangedFighter : Enemy {
    public int distance;
    public RangedFighter(string name) : base(name) {
        this.AttackList.Add(new Attack("Shoot", 20));
        this.AttackList.Add(new Attack("Throw", 15));
        this.distance = 5;
    }

    public override void PerformAttack(Enemy Target, Attack ChosenAttack) {
        if (this.distance < 10){
            Console.WriteLine("Cannot Perform Attack, too close to the target.");
        }
        else {
            Target.Health -= ChosenAttack.DamageAmount;
            Console.WriteLine($"{Name} attacks {Target.Name} with {ChosenAttack.Name}, dealing {ChosenAttack.DamageAmount} damage and reducing {Target.Name}'s health to {Target.Health}!!");
        }
    }

    public void Dash() {
        this.distance = 20;
        Console.WriteLine("You dashed away to create distance between you and the enemy");
    }
}