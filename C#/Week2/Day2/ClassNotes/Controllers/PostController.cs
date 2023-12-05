using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using ClassNotes.Models;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace ClassNotes.Controllers;

public class PostController : Controller
{
    private readonly ILogger<PostController> _logger;
    private MyContext _context;

    public PostController(ILogger<PostController> logger, MyContext context)
    {
        _logger = logger;
        _context = context;
    }

    public IActionResult Index()
    {
        return View();
    }

    [HttpGet("posts/new")]
    public ViewResult NewPost() => View();

    [HttpPost("posts/create")]
    public IActionResult CreatePost(Post newPost) {
        if (!ModelState.IsValid) {
            return View("NewPost");
        }
        _context.Add(newPost);
        _context.SaveChanges();

        return Redirect($"/posts/{newPost.PostId}");
        // return RedirectToAction("ViewPost", new {PostId = newPost.PostId});
    }

    [HttpGet("posts")]
    public ViewResult Posts() {
        return View("Posts", _context.Posts.OrderByDescending(p => p.CreatedAt).ToList());
    }

    [HttpGet("posts/{PostId}")]
    public IActionResult ViewPost(int PostId) {
        Post? OnePost = _context.Posts.FirstOrDefault(p => p.PostId == PostId);

        if (OnePost == null) {
            return RedirectToAction("Posts");
        }

        return View("ViewPost", OnePost);
    }

    [HttpPost("posts/{PostId}/delete")]
    public RedirectToActionResult DeletePost(int PostId) {
        Post? PostToDelete = _context.Posts.FirstOrDefault(p => p.PostId == PostId);
        if (PostToDelete != null) {
            _context.Posts.Remove(PostToDelete);
            _context.SaveChanges();
        }
        return RedirectToAction("Posts");
    }

    [HttpGet("posts/{PostId}/edit")] 
    public IActionResult EditPost(int PostId) {
        Post? OnePost = _context.Posts.FirstOrDefault(p => p.PostId == PostId);

        if (OnePost == null) {
            return RedirectToAction("Posts");
        }

        return View("EditPost", OnePost);
    }

    [HttpPost("posts/{PostId}/update")]
    public IActionResult UpdatePost(int PostId, Post EditedPost) {
        Post? OldPost = _context.Posts.FirstOrDefault(p => p.PostId == PostId);

        if (ModelState.IsValid) {
            OldPost.Topic = EditedPost.Topic;
            OldPost.Body = EditedPost.Body;
            OldPost.ImgURL = EditedPost.ImgURL;
            OldPost.UpdatedAt = DateTime.Now;

            _context.SaveChanges();
            return RedirectToAction("Posts");
        }
        return View("EditPost", EditedPost);
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
