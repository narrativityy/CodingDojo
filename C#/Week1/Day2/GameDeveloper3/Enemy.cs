class Enemy {
    public string Name;
    public int Health;
    public List<Attack> AttackList;
    private bool ZeroHP;

    public Enemy(string nameIn, int healthIn = 100) {
        Name = nameIn;
        Health = healthIn;
        AttackList = new List<Attack>();
        ZeroHP = false;
    }

    public Attack RandomAttack() {
        Random rand = new Random();
        return AttackList[rand.Next(0, AttackList.Count)];
    }

    public virtual void PerformAttack(Enemy Target, Attack ChosenAttack) {
        if (this.ZeroHP) {
            Console.WriteLine("You have 0hp, get healed before you can attack again");
        }
        else if (Target.ZeroHP) {
            Console.WriteLine("Your target has 0 hp. Please choose another target.");
        }
        else {
            Target.Health -= ChosenAttack.DamageAmount;
            if (Target.Health <= 0) {
                Target.ZeroHP = true;
            }
            Console.WriteLine($"{Name} attacks {Target.Name} with {ChosenAttack.Name}, dealing {ChosenAttack.DamageAmount} damage and reducing {Target.Name}'s health to {Target.Health}!!");
        }
    }
}