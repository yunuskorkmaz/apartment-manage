using System;
using System.ComponentModel.DataAnnotations;

namespace server.Entities
{
    public class TestEntity
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
