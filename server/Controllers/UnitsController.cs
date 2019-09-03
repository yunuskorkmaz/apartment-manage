using System.Linq;
using Microsoft.AspNetCore.Mvc;
using server.Context;
using server.Entities;
using server.Models;

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

        [HttpGet]
        public IActionResult GetAll()
        {
            var result = Db.Units.ToList();
            return Ok(result);
        }
        
        [HttpPost]
        public IActionResult Create([FromBody]Unit model)
        {
            Db.Units.Add(model);
            Db.SaveChanges();
            return Ok(model);
        }

        [HttpGet]
        public IActionResult Delete(int id)
        {
            
            var entity = Db.Units.FirstOrDefault(a => a.Id == id);
            if (entity != null)
            {
                Db.Remove(entity);
                Db.SaveChanges();
                return Ok(new Result<int>()
                {
                    success = true,
                    data = entity.Id
                });
            }
            else
            {
                return Ok(new Result<int>()
                {
                    success = false,
                    message = "Kayıt silinirken hata oluştu"
                });
            }
        }
    }
}