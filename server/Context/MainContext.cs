using Microsoft.EntityFrameworkCore;
using server.Entities;

namespace server.Context
{
    public class MainContext : DbContext
    {
        public MainContext(DbContextOptions<MainContext> options) :base(options)
        {
            ChangeTracker.LazyLoadingEnabled = false;
        }

        public DbSet<TestEntity> Test{ get; set; }
        public DbSet<Unit> Units{ get; set; }
        
    }
}