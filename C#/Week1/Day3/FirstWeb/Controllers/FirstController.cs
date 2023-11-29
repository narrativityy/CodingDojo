using Microsoft.AspNetCore.Mvc;

namespace FirstController.Controllers;
public class FirstController : Controller {

    [HttpGet]
    [Route("")]
    public string Index() {
        return "Hello from the controller"; 
    }

    [HttpGet("pagetwo")]
    public string PageTwo() {
        return "The Second Page!";
    }

    [HttpGet("user/{id}/{food}")]
    public string FavoriteFood(int id, string food) {
        return $"Hello user {id}, your favorite food is {food}";
    }

    // using a View cshtml File
    [HttpGet("firstview")]
    public ViewResult FirstView() {

        ViewBag.Name = "Jake";
        ViewBag.Number = 29;
        ViewBag.Pets = new List<string>(){"scout", "bourbon"};

        // return View("FirstView");
        return View();
    }

    [HttpGet("{**path}")]
    public string NoPage() {
        return "Oops! This page does not exist.";
    }

    [HttpGet("formview")]
    public ViewResult FormView() {
        return View();
    }

    // [HttpPost("submitform")]
    // public RedirectResult SubmitForm(string Name, string Animal) {
    //     Console.WriteLine($"Submitted Data : Name : {Name} - Animal : {Animal}");
    //     return Redirect("formview");
    // }

    // [HttpPost("submitform")]
    // public RedirectToActionResult SubmitForm(string Name, string Animal) {
    //     Console.WriteLine($"Submitted Data : Name : {Name} - Animal : {Animal}");
    //     return RedirectToAction("formview");
    // }

    [HttpPost("submitform")]
    public IActionResult SubmitForm(string Name, string Animal) {

        if (Animal == "Red Panda") {
            return View("RedPanda");
        }

        ViewBag.Name = Name;
        ViewBag.Animal = Animal;

        Console.WriteLine($"Submitted Data : Name : {Name} - Animal : {Animal}");
        return View("FormResult");
    }

}