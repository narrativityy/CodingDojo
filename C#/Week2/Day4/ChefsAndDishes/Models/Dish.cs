#pragma warning disable CS8618

using System.ComponentModel.DataAnnotations;

namespace ChefsAndDishes.Models;

public class Dish {

    [Key]
    public int DishId {get;set;}

    [Required]
    public string Name {get;set;}

    [Required]
    [Range(0,5)]
    public int Tastiness {get;set;}

    [Required]
    [Range(0, Int32.MaxValue)]
    public int Calories {get;set;}

    public DateTime CreatedAt { get; set; } = DateTime.Now;
    public DateTime UpdatedAt { get; set; } = DateTime.Now;

    public int ChefId {get;set;}

    public Chef? Creator {get;set;}
}