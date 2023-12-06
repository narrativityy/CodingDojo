using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using ClassNotes.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration.UserSecrets;

namespace ClassNotes.Controllers;

public class UserController : Controller
{
    private readonly ILogger<UserController> _logger;
    private MyContext _context;

    public UserController(ILogger<UserController> logger, MyContext context)
    {
        _logger = logger;
        _context = context;
    }

    [HttpGet("")]
    public IActionResult Index()
    {
        return View();
    }

    [HttpPost("users/register")]
    public IActionResult RegisterUser(User newUser) {
        if (!ModelState.IsValid) {
            return View("Index");
        }
        PasswordHasher<User> Hasher = new PasswordHasher<User>();
        newUser.Password = Hasher.HashPassword(newUser, newUser.Password);
        _context.Add(newUser);
        _context.SaveChanges();

        HttpContext.Session.SetInt32("UserId", newUser.UserId);
        return RedirectToAction("Posts", "Post");
    }

    [HttpPost("users/login")]
    public IActionResult LoginUser(LogUser logUser) {
        if (!ModelState.IsValid) {
            return View("Index");
        }

        User? dbUser = _context.Users.FirstOrDefault(u => u.Email == logUser.LogEmail);

        if (dbUser == null) {
            ModelState.AddModelError("LogPassword", "Email/Password Not Found");
            return View("Index");
        }

        PasswordHasher<LogUser> Hasher = new PasswordHasher<LogUser>();
        PasswordVerificationResult pwCompare = Hasher.VerifyHashedPassword(logUser, dbUser.Password, logUser.LogPassword);

        if (pwCompare == 0) {
            ModelState.AddModelError("LogPassword", "Email/Password Not Found");
            return View("Index");
        }

        HttpContext.Session.SetInt32("UserId", dbUser.UserId);
        return RedirectToAction("Posts", "Post");
    }

    [SessionCheck]
    public RedirectToActionResult LogoutUser() {
        HttpContext.Session.Clear();
        return RedirectToAction("Index");
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
