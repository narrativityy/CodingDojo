using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using ProductsAndCategories.Models;

namespace ProductsAndCategories.Controllers;

public class ProductCategoryController : Controller
{
    private readonly ILogger<ProductCategoryController> _logger;
    private MyContext _context;

    public ProductCategoryController(ILogger<ProductCategoryController> logger, MyContext context)
    {
        _logger = logger;
        _context = context;
    }

    [HttpPost("productcategories/add")]
    public IActionResult AddProductCategory(ProductCategory NewProductCategory) {
        if (!ModelState.IsValid) {
            return RedirectToAction("Index", "Product");
        }
        _context.Add(NewProductCategory);
        _context.SaveChanges();

        return Redirect(HttpContext.Request.Headers.Referer);
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
