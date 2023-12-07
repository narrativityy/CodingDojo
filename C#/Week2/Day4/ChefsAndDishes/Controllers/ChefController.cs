using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using ChefsAndDishes.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace ChefsAndDishes.Controllers;

public class ChefController : Controller
{
    private readonly ILogger<ChefController> _logger;
    private MyContext _context;

    public ChefController(ILogger<ChefController> logger, MyContext context)
    {
        _logger = logger;
        _context = context;
    }

    public IActionResult Index()
    {
        List<Chef> AllChefs = _context.Chefs.Include(c => c.AllDishes).OrderBy(c => c.FirstName).ToList();

        return View(AllChefs);
    }

    [HttpGet("chef/new")]
    public ViewResult NewChef() {
        return View();
    }

    [HttpPost("chef/create")]
    public IActionResult CreateChef(Chef newChef) {
        if (!ModelState.IsValid) {
            return View("NewChef");
        }

        _context.Chefs.Add(newChef);
        _context.SaveChanges();

        return RedirectToAction("Index");
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
