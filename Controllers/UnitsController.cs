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
            var result = new Result<Unit>();
            if (Db.Units.Any(u => u.No == model.No))
            {
                result.success = false;
                result.message = "Daire numarası var";
            }
            else
            {
                var entity = Db.Units.Add(model);
                result.success = true;
                result.data = entity.Entity;
                Db.SaveChanges();
            }
            return Ok(result);
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

        [HttpPost]
        public IActionResult Edit(int id,[FromBody]Unit model)
        {
            var result = new Result<Unit>();
            var entity = Db.Units.FirstOrDefault(u => u.Id == id);
            if (entity != null)
            {
                entity.No = model.No;
                entity.Status = model.Status;
                var data = Db.Units.Update(entity);
                Db.SaveChanges();
                result.success = true;
                result.data = data.Entity;
            }
            else
            {
                result.success = false;
                result.message = "Hata oluştu";
            }
            return Ok(result);
        }
    }
}