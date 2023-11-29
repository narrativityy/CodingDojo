abstract class Vehicle : INeedFuel {
    public string FuelType {get;set;}
    public int FuelTotal {get;set;}
    public Vehicle(string fuelType) {
        this.FuelType = fuelType;
        this.FuelTotal = 10;
    }

    public void GiveFuel(int Amount) {
        this.FuelTotal -= Amount;
    }
}