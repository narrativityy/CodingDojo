using System.ComponentModel.DataAnnotations;

namespace DojoSurveyValidations.Models;
public class Survey {
    [Required]
    public string? Name {get;set;}
    [Required]
    public string? Location {get;set;}
    [Required]
    public string? FavoriteLanguage {get;set;}
    [MinLength(20)]
    public string? Comment {get;set;}
}