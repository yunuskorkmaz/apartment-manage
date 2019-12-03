using System;
using Microsoft.Extensions.DependencyInjection;
using Swashbuckle.AspNetCore.Swagger;

namespace server.Configuration
{
    public static class SwaggerConfiguration
    {
        public static void AddCustomSwaggerConfiguration(this IServiceCollection services)
        {
            services.AddSwaggerGen(
                c => {
                    c.SwaggerDoc("Apartman Yönetim" , new Info{
                        Title = "Apartman Yönetim Programı",
                        Version = "1.0.0",
                        Description = "",
                        Contact = new Contact(){
                            Name = "Yunus Korkmaz",
                            Email = "yunuskorkmaz95@gmail.com"
                        },
                        TermsOfService = "http://swagger.io/terms/"
                    });
                }
            );
        }
    }
}
