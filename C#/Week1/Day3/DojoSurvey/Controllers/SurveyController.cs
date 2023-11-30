using Microsoft.AspNetCore.Mvc;

namespace SurveyController.Controllers;
public class SurveyController : Controller {

    [HttpGet("")]
    public ViewResult Survey() {
        return View("Index");
    }

    [HttpPost("submitform")]
    public IActionResult SubmitForm(string Name, string Location, string FavoriteLanguage, string Comment) {
        ViewBag.Name = Name;
        ViewBag.Location = Location;
        ViewBag.FavoriteLanguage = FavoriteLanguage;
        ViewBag.Comment = Comment;

        return View("Results");
    }

    [HttpGet("results")]
    public ViewResult Results() {
        return View();
    }
}