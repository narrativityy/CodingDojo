using System.Net.Security;

Console.Write("What is your name? ");
string Name = Console.ReadLine();

Console.WriteLine("1. Melee Fighter");
Console.WriteLine("2. Ranged Fighter");
Console.WriteLine("3. Mage");
Console.Write($"Hello {Name}, which character would you like to play? ");
int Character = Console.Read();

if (Character == 1) {
    MeleeFighter Player = new MeleeFighter(Name);
}
else if (Character == 2) {
    RangedFighter Player = new RangedFighter(Name);
}
else {
    MagicCaster Player = new MagicCaster(Name);
}

Console.WriteLine($"Thanks for choosing a character. ");