using apartment_manage.Entities;
using Microsoft.EntityFrameworkCore;

namespace apartment_manage.Context
{
    public class MainContext : DbContext
    {
        public MainContext(DbContextOptions<MainContext> options) : base(options)
        {
            ChangeTracker.LazyLoadingEnabled = false;
        }

        public DbSet<Unit> Units { get; set; }
    }
}