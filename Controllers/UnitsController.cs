using System.Linq;
using apartment_manage.Context;
using apartment_manage.Entities;
using apartment_manage.Models;
using Microsoft.AspNetCore.Mvc;

namespace apartment_manage.Controllers
{   
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class UnitsController : ControllerBase
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