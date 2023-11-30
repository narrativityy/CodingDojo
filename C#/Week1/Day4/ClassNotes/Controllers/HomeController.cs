using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using ClassNotes.Models;

namespace ClassNotes.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    [HttpPost("submit")]
    public IActionResult SubmitPet(Pet newPet) {
        if (!ModelState.IsValid)  {
            Console.WriteLine("There was an error");
            return View("Index");
        }

        System.Console.WriteLine($"Name: {newPet.Name}");
        System.Console.WriteLine($"Type: {newPet.Type}");
        System.Console.WriteLine($"Age: {newPet.Age}");
        System.Console.WriteLine($"Favorite Food: {newPet.FavoriteFood}");

        return View("DisplayPet", newPet);
        // return Redirect("/");
    }

    public IActionResult Index()
    {
        return View();
    }

    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
