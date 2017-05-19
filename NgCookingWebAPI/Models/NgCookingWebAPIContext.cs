using System.Data.Entity;

namespace NgCookingWebAPI.Models
{
    public class NgCookingWebAPIContext : DbContext
    {
        // You can add custom code to this file. Changes will not be overwritten.
        // 
        // If you want Entity Framework to drop and regenerate your database
        // automatically whenever you change your model schema, please use data migrations.
        // For more information refer to the documentation:
        // http://msdn.microsoft.com/en-us/data/jj591621.aspx
    
        public NgCookingWebAPIContext() : base("name=NgCookingWebAPIContext")
        {
        }

        public DbSet<Community> Communities { get; set; }

        public DbSet<categorie> categories { get; set; }

        public DbSet<ingredients> ingredients { get; set; }

  
    }
}
