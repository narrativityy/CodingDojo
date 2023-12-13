using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WeddingPlanner.Models;

namespace WeddingPlanner.Controllers;

[SessionCheck]
public class WeddingController : Controller
{
    private readonly ILogger<WeddingController> _logger;
    private MyContext _context;

    public WeddingController(ILogger<WeddingController> logger, MyContext context)
    {
        _logger = logger;
        _context = context;
    }

    [HttpGet("weddings")]
    public IActionResult Weddings()
    {
        ViewBag.User = _context.Users.First(u => u.UserId == HttpContext.Session.GetInt32("UserId"));
        List<Wedding> Weddings = _context.Weddings.Include(w => w.Creator).Include(w => w.UserRSVPs).ThenInclude(ur => ur.RSVPedBy).OrderByDescending(u => u.CreatedAt).ToList();

        return View(Weddings);
    }

    [HttpGet("weddings/new")]
    public ViewResult NewWedding() {
        ViewBag.User = _context.Users.First(u => u.UserId == HttpContext.Session.GetInt32("UserId"));
        return View();
    }

    [HttpPost("weddings/create")]
    public IActionResult CreateWedding(Wedding NewWedding) {
        if (!ModelState.IsValid) {
            ViewBag.User = _context.Users.First(u => u.UserId == HttpContext.Session.GetInt32("UserId"));
            return View("NewWedding");
        }

        NewWedding.UserId = (int)HttpContext.Session.GetInt32("UserId");

        _context.Weddings.Add(NewWedding);
        _context.SaveChanges();

        return RedirectToAction("Weddings");
    }

    [HttpGet("weddings/{WeddingId}/View")]
    public IActionResult ViewWedding(int WeddingId) {
        Wedding? WeddingToView = _context.Weddings.Include(w => w.UserRSVPs).ThenInclude(ur => ur.RSVPedBy).FirstOrDefault(w => w.WeddingId == WeddingId);

        if (WeddingToView == null) {
            return RedirectToAction("Weddings");
        }

        ViewBag.User = _context.Users.First(u => u.UserId == HttpContext.Session.GetInt32("UserId"));
        return View(WeddingToView);
    }

    [HttpPost("weddings/{WeddingId}/delete")]
    public IActionResult DeleteWedding(int WeddingId) {
        Wedding? WeddingToDelete = _context.Weddings.FirstOrDefault(w => w.WeddingId == WeddingId);

        if (WeddingToDelete == null) {
            return RedirectToAction("Weddings");
        }

        _context.Weddings.Remove(WeddingToDelete);
        _context.SaveChanges();

        return RedirectToAction("Weddings");
    }

    [HttpPost("weddings/{WeddingId}/rsvp")]
    public IActionResult ToggleRSVP(int WeddingId) {
        int UserId = (int)HttpContext.Session.GetInt32("UserId");

        UserWeddingRSVP? existingRSVP = _context.UserWeddingRSVPs.FirstOrDefault(uwr => uwr.WeddingId == WeddingId && uwr.UserId == UserId);

        if (existingRSVP == null) {
            UserWeddingRSVP newRSVP = new() {UserId = UserId, WeddingId = WeddingId};
            _context.Add (newRSVP);
        }
        else {
            _context.Remove(existingRSVP);
        }
        _context.SaveChanges();

        return Redirect(HttpContext.Request.Headers.Referer);
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
