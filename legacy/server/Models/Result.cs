using Swashbuckle.AspNetCore.Swagger;

namespace server.Models
{
    public class Result<T>
    {
        public bool success { get; set; }
        public string message { get; set; }
        public T data { get; set; }
    }
}