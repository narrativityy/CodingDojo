#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;

namespace WeddingPlanner.Models;
public class Wedding
{
    [Key]
    public int WeddingId {get;set;}

    [Required]
    public string WedderOne { get; set; }

    [Required]
    public string WedderTwo {get;set;}

    [Required]
    [ValidDate]
    public DateTime Date {get;set;}

    [Required]
    public string Address {get;set;}

    public DateTime CreatedAt {get;set;} = DateTime.Now;
    public DateTime UpdatedAt { get; set; } = DateTime.Now;

    public int UserId {get;set;}
    public User? Creator {get;set;}

    public List<UserWeddingRSVP> UserRSVPs {get;set;} = new List<UserWeddingRSVP>();

}

public class ValidDateAttribute : ValidationAttribute
{
    protected override ValidationResult? IsValid(object? value, ValidationContext validationContext)
    {
        // Though we have Required as a validation, sometimes we make it here anyways
        // In which case we must first verify the value is not null before we proceed
        if (value == null)
        {
            // If it was, return the required error
            return new ValidationResult("Date is required!");
        }

        if (DateTime.Now > (DateTime)value) {
            return new ValidationResult("Date must be in the future");
        }
        return ValidationResult.Success;
    }
}