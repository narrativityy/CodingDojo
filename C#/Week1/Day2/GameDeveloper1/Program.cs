Enemy enemy = new Enemy("Monster");

Attack attack1 = new Attack("Punch", 20);
Attack attack2 = new Attack("Fireball", 35);
Attack attack3 = new Attack("Throw", 25);

enemy.attackList.Add(attack1);
enemy.attackList.Add(attack2);
enemy.attackList.Add(attack3);

Console.WriteLine(enemy.RandomAttack().name);
Console.WriteLine(enemy.RandomAttack().name);
Console.WriteLine(enemy.RandomAttack().name);