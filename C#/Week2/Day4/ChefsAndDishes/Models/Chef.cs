#pragma warning disable CS8618

using System.ComponentModel.DataAnnotations;

namespace ChefsAndDishes.Models;

public class Chef {

    [Key]
    public int ChefId {get;set;}

    [Required]
    public string FirstName {get;set;}

    [Required]
    public string LastName {get;set;}

    [Required]
    [PastDateOfBirth]
    public DateTime DateOfBirth {get;set;}

    public DateTime CreatedAt { get; set; } = DateTime.Now;
    public DateTime UpdatedAt { get; set; } = DateTime.Now;

    public List<Dish> AllDishes {get;set;} = new List<Dish>();
}

public class PastDateOfBirthAttribute : ValidationAttribute
{
    protected override ValidationResult? IsValid(object? value, ValidationContext validationContext)
    {
        // Though we have Required as a validation, sometimes we make it here anyways
        // In which case we must first verify the value is not null before we proceed
        if (value == null)
        {
            // If it was, return the required error
            return new ValidationResult("Date of birth is required!");
        }

        if (DateTime.Now < (DateTime)value) {
            return new ValidationResult("Date must be in the past");
        }
        return ValidationResult.Success;
    }
}