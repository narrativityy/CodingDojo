class Enemy {
    public string name;
    public int health;
    public List<Attack> attackList;

    public Enemy(string nameIn, int healthIn = 100) {
        name = nameIn;
        health = healthIn;
        attackList = new List<Attack>();
    }

    public Attack RandomAttack() {
        Random rand = new Random();
        return attackList[rand.Next(0, attackList.Count)];
    }
}