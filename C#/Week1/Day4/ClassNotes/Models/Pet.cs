using System.ComponentModel.DataAnnotations;

namespace ClassNotes.Models;

public class Pet {
    [Required]
    [NoZNames]
    public string? Name {get;set;}
    [Required]
    [NoHumansAsPets]
    public string? Type {get;set;}
    [Required(ErrorMessage = "Age is required.")]
    [Range(0, 120)]
    public int? Age {get;set;}
    [Display(Name = "Your Pet's Favorite Food")]
    public string? FavoriteFood {get;set;}
}

// Create a class that inherits from ValidationAttribute
public class NoZNamesAttribute : ValidationAttribute
{    
    // Call upon the protected IsValid method
    protected override ValidationResult IsValid(object value, ValidationContext validationContext)    
    {   
        if(value == null) {
            // return new ValidationResult("this is a required field");
            return ValidationResult.Success;
        }
        // We are expecting the value coming in to be a string
        // so we need to do a bit of type casting to our object
        // Strings work similarly to arrays under the hood 
        // so we can grab the first letter using its index   
        // If we discover that the first letter of our string is z...  
        if (((string)value).ToLower()[0] == 'z')
        {        
            // we return an error message in ValidationResult we want to render    
            return new ValidationResult("No names that start with Z allowed!");   
        } else {   
            // Otherwise, we were successful and can report our success  
            return ValidationResult.Success;  
        }  
    }
}

public class NoHumansAsPetsAttribute : ValidationAttribute {
    protected override ValidationResult IsValid(object value, ValidationContext validationContext)
    {   
        if (value == null) {
            return ValidationResult.Success;
        }
        if (((string)value).ToLower() == "human") {
            return new ValidationResult("Type cannot be human");
        }
        return ValidationResult.Success;
    }
}