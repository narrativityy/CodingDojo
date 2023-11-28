class MagicCaster : Enemy {
    public MagicCaster(string name) : base(name, 80) {
        this.AttackList.Add(new Attack("Fireball", 25));
        this.AttackList.Add(new Attack("Lightning Bolt", 20));
        this.AttackList.Add(new Attack("Staff Strike", 10));
    }

    public void Heal(Enemy Target) {
        Target.Health += 40;
        Console.WriteLine($"You healed {Target.Name}'s health for 40 points, increasing it to {Target.Health}.");
    }
}