using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using server.Context;

namespace server.Configuration
{
    public static class ContextConfiguration
    {
        public static void AddMainContext(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddEntityFrameworkNpgsql()
            .AddDbContext<MainContext>(options =>{
                var env = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT");
                string connStr;
                string connUrl;
                var connTemplate ="{0}";
                if(env == "Development"){
                    connUrl = configuration.GetConnectionString("DevelopmentLocal");
                    connTemplate = "{0};sslmode=Prefer;Trust Server Certificate=true";
                }
                else{
                    connUrl = Environment.GetEnvironmentVariable("DATABASE_URL");}

                connUrl = connUrl.Replace("postgres://", string.Empty);

                var pgUserPass = connUrl.Split("@")[0];
                var pgHostPortDb = connUrl.Split("@")[1];
                var pgHostPort = pgHostPortDb.Split("/")[0];

                var pgDb = pgHostPortDb.Split("/")[1];
                var pgUser = pgUserPass.Split(":")[0];
                var pgPass = pgUserPass.Split(":")[1];
                var pgHost = pgHostPort.Split(":")[0];
                var pgPort = pgHostPort.Split(":")[1];

                connStr = $"Server={pgHost};Port={pgPort};User Id={pgUser};Password={pgPass};Database={pgDb}";
                connStr = String.Format(connTemplate, connStr);
                options.UseNpgsql(connStr);
            });
        }
    }
}