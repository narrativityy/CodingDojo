using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using ChefsAndDishes.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace ChefsAndDishes.Controllers;

public class DishController : Controller
{
    private readonly ILogger<DishController> _logger;
    private MyContext _context;

    public DishController(ILogger<DishController> logger, MyContext context)
    {
        _logger = logger;
        _context = context;
    }

    [HttpGet("dishes")]
    public ViewResult Dishes() {
        List<Dish> AllDishes = _context.Dishes.Include(d => d.Creator).OrderByDescending(d => d.CreatedAt).ToList();

        return View(AllDishes);
    }

    [HttpGet("dishes/new")]
    public ViewResult NewDish() {
        ViewBag.Chefs = _context.Chefs.OrderBy(c => c.FirstName).ToList();
        return View();
    }

    [HttpPost("dishes/create")]
    public IActionResult CreateDish(Dish newDish) {
        if (!ModelState.IsValid) {
            ViewBag.Chefs = _context.Chefs.OrderBy(c => c.FirstName).ToList();
            return View("NewDish");
        }

        _context.Dishes.Add(newDish);
        _context.SaveChanges();

        return RedirectToAction("Dishes");
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
