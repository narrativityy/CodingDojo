using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using SessionWorkshop.Models;

namespace SessionWorkshop.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        if (HttpContext.Session.GetString("Name") != null) {
            return RedirectToAction("Dashboard");
        }
        return View();
    }

    [HttpPost("submit")]
    public IActionResult Submit(string Name) {
        // System.Console.WriteLine($"******************** {Name}");
        HttpContext.Session.SetString("Name", Name);
        HttpContext.Session.SetInt32("Counter", 0);
        return Redirect("dashboard");
    }

    [HttpGet("dashboard")]
    public IActionResult Dashboard() {
        if (HttpContext.Session.GetString("Name") == null) {
            return RedirectToAction("Index");
        }
        return View();
    }

    public IActionResult Add1() {
        if (HttpContext.Session.GetString("Name") != null) {
            HttpContext.Session.SetInt32("Counter", ((int)HttpContext.Session.GetInt32("Counter") + 1));
            return RedirectToAction("Dashboard");
        }
        return RedirectToAction("Index");
    }

    public IActionResult Subtract1() {
        if (HttpContext.Session.GetString("Name") != null) {
            HttpContext.Session.SetInt32("Counter", ((int)HttpContext.Session.GetInt32("Counter") - 1));
            return RedirectToAction("Dashboard");
        }
        return RedirectToAction("Index");
    }

    public IActionResult Multiply2() {
        if (HttpContext.Session.GetString("Name") != null) {
            HttpContext.Session.SetInt32("Counter", ((int)HttpContext.Session.GetInt32("Counter") * 2));
            return RedirectToAction("Dashboard");
        }
        return RedirectToAction("Index");
    }

    public IActionResult AddRandom() {
        if (HttpContext.Session.GetString("Name") != null) {
            Random rand = new Random();
            HttpContext.Session.SetInt32("Counter", ((int)HttpContext.Session.GetInt32("Counter") + rand.Next(0, 1001)));
            return RedirectToAction("Dashboard");
        }
        return RedirectToAction("Index");
    }

    public IActionResult Logout() {
        HttpContext.Session.Clear();
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
