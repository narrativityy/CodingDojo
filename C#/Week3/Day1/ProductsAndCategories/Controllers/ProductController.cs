using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProductsAndCategories.Models;

namespace ProductsAndCategories.Controllers;

public class ProductController : Controller
{
    private readonly ILogger<ProductController> _logger;
    private MyContext _context;

    public ProductController(ILogger<ProductController> logger, MyContext context)
    {
        _logger = logger;
        _context = context;
    }

    [HttpGet("/")]
    public IActionResult Index()
    {
        List<Product> ProductsFromDB = _context.Products.OrderByDescending(p => p.CreatedAt).ToList();
        return View("Products", ProductsFromDB);
    }

    [HttpPost("products/create")]
    public IActionResult CreateProduct(Product NewProduct) {
        if (!ModelState.IsValid) {
            List<Product> ProductsFromDB = _context.Products.OrderByDescending(p => p.CreatedAt).ToList();
            return View("Products", ProductsFromDB);
        }

        _context.Products.Add(NewProduct);
        _context.SaveChanges();

        return RedirectToAction("Index");
    }

    [HttpGet("products/{ProductId}")]
    public IActionResult ViewProduct(int ProductId) {
        Product? ReqProduct = _context.Products.Include(p => p.ProductCategories).ThenInclude(pc => pc.Category).FirstOrDefault(p => p.ProductId == ProductId);

        if (ReqProduct == null) {
            return RedirectToAction("Index");
        }
        ViewBag.Categories = new List<Category>();
        List<Category> Categories = _context.Categories.OrderByDescending(c => c.CreatedAt).ToList();
        foreach (Category category in Categories) {
            if (ReqProduct.ProductCategories.Any(pc => pc.CategoryId == category.CategoryId)) {
                continue;
            }
            else {
                ViewBag.Categories.Add(category);
            }
        }

        return View(ReqProduct);
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
