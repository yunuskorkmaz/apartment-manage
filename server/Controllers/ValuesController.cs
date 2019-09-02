using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using server.Context;

namespace server.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        public readonly MainContext  Db;
        public ValuesController(MainContext _db)
        {
            Db = _db;
        }

        [HttpGet]
        public IActionResult Get(){
            
            var result = Db.Test.ToList();
            return Ok(result);
        }
    }
}
