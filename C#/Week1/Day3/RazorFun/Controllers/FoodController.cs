using Microsoft.AspNetCore.Mvc;

namespace FoodController.Controllers;
public class FoodController : Controller {
    [HttpGet("")]
    public ViewResult Index() {
        return View("FoodView");
    }
}