// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");

string name = "jake";

Console.WriteLine($"Hello {name}!");
Console.WriteLine("Hello again, {0}", name);

int[] numArray1 = new int[5];
int[] numArray2 = {1,2,3,4,5};

foreach (int num in numArray2) {
    Console.WriteLine(num);
}

// Lists

List<string> names = new List<string>();

names.Add("jake");
names.Add("alexis");
names.Add("example");

for (int i = 0; i < names.Count; i++) {
    Console.WriteLine($"Name: {names[i]}");
}

names.ForEach(Console.WriteLine);

// Dictionaries

Dictionary<string, string> pets = new Dictionary<string, string>();

pets.Add("Name", "Scout");
pets.Add("Type", "Dog");
pets.Add("Breed", "Mutt");

foreach (KeyValuePair<string, string> pet in pets) {
    Console.WriteLine($"{pet.Key}: {pet.Value}");
}