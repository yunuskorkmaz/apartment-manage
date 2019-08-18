using Microsoft.EntityFrameworkCore;
using server.Entities;

namespace server.Context
{
    public class MainContext : DbContext
    {
        public MainContext(DbContextOptions<MainContext> options) :base(options)
        {
            
        }

        public DbSet<TestEntity> Test{ get; set; }
    }
}