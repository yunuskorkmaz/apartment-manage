using Microsoft.AspNetCore.Mvc;
using server.Context;
using server.Entities;

namespace server.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class UnitsController : Controller
    {
        private readonly MainContext Db;
        public UnitsController(MainContext _db)
        {
            Db = _db;
        }
        
        [HttpPost]
        public IActionResult Create([FromBody]Unit model)
        {
            Db.Units.Add(model);
            Db.SaveChanges();
            return Ok(model);
        }
    }
}