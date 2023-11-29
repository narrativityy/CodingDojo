class Enemy {
    public string Name;
    public int Health;
    public List<Attack> AttackList;

    public Enemy(string nameIn, int healthIn = 100) {
        Name = nameIn;
        Health = healthIn;
        AttackList = new List<Attack>();
    }

    public Attack RandomAttack() {
        Random rand = new Random();
        return AttackList[rand.Next(0, AttackList.Count)];
    }

    public virtual void PerformAttack(Enemy Target, Attack ChosenAttack) {
        Target.Health -= ChosenAttack.DamageAmount;
        Console.WriteLine($"{Name} attacks {Target.Name} with {ChosenAttack.Name}, dealing {ChosenAttack.DamageAmount} damage and reducing {Target.Name}'s health to {Target.Health}!!");
    }
}