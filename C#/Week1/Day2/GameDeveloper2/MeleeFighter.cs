class MeleeFighter : Enemy {
    public MeleeFighter(string name) : base(name, 120) {
        this.AttackList.Add(new Attack("Punch", 20));
        this.AttackList.Add(new Attack("Kick", 15));
        this.AttackList.Add(new Attack("Tackle", 25));
    }

    public void Rage(Enemy Target) {
        Random rand = new Random();
        Attack ChosenAttack = this.AttackList[rand.Next(0, this.AttackList.Count)];
        Target.Health -= (ChosenAttack.DamageAmount + 10);
        Console.WriteLine($"{Name} attacks {Target.Name} with {ChosenAttack.Name}, dealing {ChosenAttack.DamageAmount + 10} damage and reducing {Target.Name}'s health to {Target.Health}!!");
    }
}