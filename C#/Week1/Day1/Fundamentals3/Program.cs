﻿static void PrintList(List<string> MyList)
{
    foreach(string item in MyList) {
        System.Console.WriteLine(item);
    }
}
List<string> TestStringList = new List<string>() {"Harry", "Steve", "Carla", "Jeanne"};
PrintList(TestStringList);

static void SumOfNumbers(List<int> IntList)
{
    int sum = 0;
    foreach(int num in IntList) {
        sum += num;
    }
    System.Console.WriteLine(sum);
}
List<int> TestIntList = new List<int>() {2,7,12,9,3};
// You should get back 33 in this example
SumOfNumbers(TestIntList);

static int FindMax(List<int> IntList)
{
    int max = IntList[0];
    foreach(int num in IntList) {
        if (num > max)
            max = num;
    }
    return max;
}
List<int> TestIntList2 = new List<int>() {-9,12,10,3,17,5};
// You should get back 17 in this example
System.Console.WriteLine(FindMax(TestIntList2));

static List<int> SquareValues(List<int> IntList)
{
    for (int i = 0; i < IntList.Count; i++) {
        IntList[i] = IntList[i] * IntList[i];
    }
    return IntList;
}
List<int> TestIntList3 = new List<int>() {1,2,3,4,5};
// You should get back [1,4,9,16,25], think about how you will show that this worked
SquareValues(TestIntList3);

static int[] NonNegatives(int[] IntArray)
{
    for (int i = 0; i < IntArray.Length; i++) {
        if (IntArray[i] < 0) {
            IntArray[i] = 0;
        }
    }
    return IntArray;
}
int[] TestIntArray = new int[] {-1,2,3,-4,5};
// You should get back [0,2,3,0,5], think about how you will show that this worked
NonNegatives(TestIntArray);

static void PrintDictionary(Dictionary<string,string> MyDictionary)
{
    foreach(KeyValuePair<string, string> pair in MyDictionary) {
        System.Console.WriteLine($"{pair.Key} : {pair.Value}");
    }
}
Dictionary<string,string> TestDict = new Dictionary<string,string>();
TestDict.Add("HeroName", "Iron Man");
TestDict.Add("RealName", "Tony Stark");
TestDict.Add("Powers", "Money and intelligence");
PrintDictionary(TestDict);

static bool FindKey(Dictionary<string,string> MyDictionary, string SearchTerm)
{
    foreach(KeyValuePair<string, string> pair in MyDictionary) {
        if (pair.Key == SearchTerm) {
            return true;
        }
    }
    return false;
}
// Use the TestDict from the earlier example or make your own
// This should print true
Console.WriteLine(FindKey(TestDict, "RealName"));
// This should print false
Console.WriteLine(FindKey(TestDict, "Name"));

// Ex: Given ["Julie", "Harold", "James", "Monica"] and [6,12,7,10], return a dictionary
// {
//	"Julie": 6,
//	"Harold": 12,
//	"James": 7,
//	"Monica": 10
// } 
static Dictionary<string,int> GenerateDictionary(List<string> Names, List<int> Numbers)
{
    Dictionary<string, int> returnDict = new Dictionary<string, int>();
    for (int i = 0; i < Names.Count; i++) {
        returnDict.Add(Names[i], Numbers[i]);
    }
    return returnDict;
}
// We've shown several examples of how to set your tests up properly, it's your turn to set it up!
// Your test code here
List<string> names = new List<string>();
names.Add("bob");
names.Add("tom");
names.Add("jerry");
List<int> nums = new List<int>();
nums.Add(1);
nums.Add(4);
nums.Add(9);
GenerateDictionary(names, nums);
