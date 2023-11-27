int[] firstArr = {0,1,2,3,4,5,6,7,8,9};
string[] secondArr = {"Tim", "Martin", "Nikki", "Sara"};
bool[] thirdArr = new bool[10];

for (int i = 0; i <  thirdArr.Length; i++) {
    if (i % 2 == 0) {
        thirdArr[i] = true;
    }
    else {
        thirdArr[i] = false;
    }
}

List<string> flavors = new List<string>();
flavors.Add("vanilla");
flavors.Add("chocolate");
flavors.Add("strawberry");
flavors.Add("cookies and cream");
flavors.Add("bubble gum");
System.Console.WriteLine(flavors.Count);
System.Console.WriteLine(flavors[2]);
flavors.RemoveAt(2);
System.Console.WriteLine(flavors.Count);

Dictionary<string, string> things = new Dictionary<string, string>();
Random rand = new Random();

foreach (string name in secondArr) {
    things.Add(name, flavors[rand.Next(0, flavors.Count)]);
}

foreach (KeyValuePair<string, string> pair in things) {
    System.Console.WriteLine($"{pair.Key} : {pair.Value}");
}