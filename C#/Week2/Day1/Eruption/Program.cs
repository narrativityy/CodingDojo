List<Eruption> eruptions = new List<Eruption>()
{
    new Eruption("La Palma", 2021, "Canary Is", 2426, "Stratovolcano"),
    new Eruption("Villarrica", 1963, "Chile", 2847, "Stratovolcano"),
    new Eruption("Chaiten", 2008, "Chile", 1122, "Caldera"),
    new Eruption("Kilauea", 2018, "Hawaiian Is", 1122, "Shield Volcano"),
    new Eruption("Hekla", 1206, "Iceland", 1490, "Stratovolcano"),
    new Eruption("Taupo", 1910, "New Zealand", 760, "Caldera"),
    new Eruption("Lengai, Ol Doinyo", 1927, "Tanzania", 2962, "Stratovolcano"),
    new Eruption("Santorini", 46, "Greece", 367, "Shield Volcano"),
    new Eruption("Katla", 950, "Iceland", 1490, "Subglacial Volcano"),
    new Eruption("Aira", 766, "Japan", 1117, "Stratovolcano"),
    new Eruption("Ceboruco", 930, "Mexico", 2280, "Stratovolcano"),
    new Eruption("Etna", 1329, "Italy", 3320, "Stratovolcano"),
    new Eruption("Bardarbunga", 1477, "Iceland", 2000, "Stratovolcano")
};
// Example Query - Prints all Stratovolcano eruptions
IEnumerable<Eruption> stratovolcanoEruptions = eruptions.Where(c => c.Type == "Stratovolcano");
PrintEach(stratovolcanoEruptions, "Stratovolcano eruptions.");
// Execute Assignment Tasks here!

Eruption ChileEruption = eruptions.First(e => e.Location == "Chile");
System.Console.WriteLine(ChileEruption.ToString());

Eruption? HawaiianEruption = eruptions.FirstOrDefault(e => e.Location == "Hawaiian Is");
if (HawaiianEruption != null) {
    System.Console.WriteLine(HawaiianEruption.ToString());
}
else {
    System.Console.WriteLine("No Hawaiian Is Eruption Found");
}

Eruption? GreenlandEruptions = eruptions.FirstOrDefault(e => e.Location == "Greenland");
if (GreenlandEruptions != null) {
    System.Console.WriteLine(GreenlandEruptions.ToString());
}
else {
    System.Console.WriteLine("No Greenland Eruption Found");
}

Eruption NewZealandAfter1900 = eruptions.First(e => e.Year > 1900 && e.Location == "New Zealand");
System.Console.WriteLine(NewZealandAfter1900.ToString());

PrintEach(eruptions.Where(e => e.ElevationInMeters > 2000));

IEnumerable<Eruption> LVolvanos = eruptions.Where(e => e.Volcano[0] == 'L');
PrintEach(LVolvanos);
System.Console.WriteLine(LVolvanos.ToList().Count + " volcanos that start with L");

int HighestElevation = eruptions.Select(e => e.ElevationInMeters).Max();
System.Console.WriteLine(HighestElevation);

Eruption HighestElevationVolcano = eruptions.First(e => e.ElevationInMeters == HighestElevation);
System.Console.WriteLine(HighestElevationVolcano.Volcano);

List<string> SortedVolcanos = eruptions.OrderBy(e => e.Volcano).Select(e => e.Volcano).ToList();
foreach(string Volcano in SortedVolcanos) {
    System.Console.WriteLine(Volcano);
}

int ElevationSum = eruptions.Sum(e => e.ElevationInMeters);
System.Console.WriteLine(ElevationSum);

System.Console.WriteLine(eruptions.Any(e => e.Year == 2000));

IEnumerable<Eruption> ThreeStratovolcanoes = eruptions.Where(e => e.Type == "Stratovolcano").Take(3);
PrintEach(ThreeStratovolcanoes); 

IEnumerable<Eruption> EarlyVolcanoesSorted = eruptions.Where(e => e.Year < 1000).OrderBy(e => e.Volcano);
PrintEach(EarlyVolcanoesSorted);

List<string> EarlyVolcanoNamesSorted = eruptions.Where(e => e.Year < 1000).OrderBy(e => e.Volcano).Select(e => e.Volcano).ToList();
foreach (string Name in EarlyVolcanoNamesSorted) {
    System.Console.WriteLine(Name);
}

// Helper method to print each item in a List or IEnumerable. This should remain at the bottom of your class!
static void PrintEach(IEnumerable<Eruption> items, string msg = "")
{
    Console.WriteLine("\n" + msg);
    foreach (Eruption item in items)
    {
        Console.WriteLine(item.ToString());
    }
}