using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProductsAndCategories.Models;

namespace CategorysAndCategories.Controllers;

public class CategoryController : Controller
{
    private readonly ILogger<CategoryController> _logger;
    private MyContext _context;

    public CategoryController(ILogger<CategoryController> logger, MyContext context)
    {
        _logger = logger;
        _context = context;
    }

    [HttpGet("categories")]
    public ViewResult Categories() {
        List<Category> CategoriesFromDB = _context.Categories.OrderByDescending(c => c.CreatedAt).ToList();

        return View(CategoriesFromDB);
    }

    [HttpPost("categories/create")]
    public IActionResult CreateCategory(Category NewCategory) {
        if (!ModelState.IsValid) {
            List<Category> CategoriesFromDB = _context.Categories.OrderByDescending(c => c.CreatedAt).ToList();

            return View(CategoriesFromDB);
        }

        _context.Categories.Add(NewCategory);
        _context.SaveChanges();

        return RedirectToAction("Categories");
    }

    [HttpGet("categories/{CategoryId}")]
    public IActionResult ViewCategory(int CategoryId) {
        Category? ReqCategory = _context.Categories.Include(c => c.CategoryProducts).ThenInclude(cp => cp.Product).FirstOrDefault(c => c.CategoryId == CategoryId);

        if (ReqCategory == null) {
            return RedirectToAction("Index");
        }
        ViewBag.Products = new List<Product>();
        List<Product> Categories = _context.Products.OrderByDescending(p => p.CreatedAt).ToList();
        foreach (Product product in Categories) {
            if (ReqCategory.CategoryProducts.Any(cp => cp.ProductId == product.ProductId)) {
                continue;
            }
            else {
                ViewBag.Products.Add(product);
            }
        }

        return View(ReqCategory);
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
