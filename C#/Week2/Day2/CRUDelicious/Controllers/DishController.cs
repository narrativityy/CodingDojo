using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using CRUDelicious.Models;
using Microsoft.AspNetCore.Authentication.Cookies;

namespace CRUDelicious.Controllers;

public class DishController : Controller
{
    private readonly ILogger<DishController> _logger;
    private MyContext _context;

    public DishController(ILogger<DishController> logger, MyContext context)
    {
        _logger = logger;
        _context = context;
    }

    public IActionResult Index()
    {
        return View("Index", _context.Dishes.OrderByDescending(d => d.CreatedAt).ToList());
    }

    [HttpGet("dish/new")]
    public ViewResult NewDish() {
        return View();
    }

    [HttpPost("dish/create")]
    public IActionResult CreateDish(Dish newDish) {
        if (!ModelState.IsValid) {
            return View("NewDish");
        }
        _context.Add(newDish);
        _context.SaveChanges();
        return RedirectToAction("Index");
    }

    [HttpGet("dishes/{id}")]
    public IActionResult ViewDish(int id) {
        return View("ViewDish", _context.Dishes.First(d => d.DishId == id));
    }

    [HttpPost("dishes/{id}/delete")]
    public RedirectToActionResult DeleteDish(int id) {
        Dish? DishToBeDeleted = _context.Dishes.FirstOrDefault(d => d.DishId == id);
        if (DishToBeDeleted != null) {
            _context.Dishes.Remove(DishToBeDeleted);
            _context.SaveChanges();
        }
        return RedirectToAction("Index");
    }

    [HttpGet("dishes/{id}/edit")]
    public IActionResult EditDish(int id) {
        Dish? OneDish = _context.Dishes.FirstOrDefault(d => d.DishId == id);

        if (OneDish == null) {
            return RedirectToAction("Index");
        }

        return View("EditPost", OneDish);
    }

    [HttpPost("dishes/{id}/update")]
    public IActionResult UpdateDish(int id, Dish EditedDish) {
        Dish? OldDish = _context.Dishes.FirstOrDefault(d => d.DishId == id);

        if (ModelState.IsValid) {
            OldDish.Name = EditedDish.Name;
            OldDish.Chef = EditedDish.Chef;
            OldDish.Tastiness = EditedDish.Tastiness;
            OldDish.Calories = EditedDish.Calories;
            OldDish.Description = EditedDish.Description;

            _context.SaveChanges();

            return RedirectToAction("Index");
        }

        return View("EditPost", EditedDish);
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
