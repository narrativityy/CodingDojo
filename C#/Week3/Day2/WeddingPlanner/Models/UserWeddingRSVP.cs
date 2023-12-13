#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;

namespace WeddingPlanner.Models;
public class UserWeddingRSVP
{

    [Key]
    public int UserWeddingRSVPId {get;set;}

    public int UserId {get;set;}

    public int WeddingId {get;set;}

    public DateTime CreatedAt {get;set;} = DateTime.Now;
    public DateTime UpdatedAt {get;set;} = DateTime.Now;

    public User? RSVPedBy {get;set;}

    public Wedding? RSVPedWedding {get;set;}

}

