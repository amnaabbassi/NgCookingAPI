namespace NgCookingWebAPI.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialCreate : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Communities",
                c => new
                    {
                        id = c.Int(nullable: false, identity: true),
                        firstname = c.String(),
                        surname = c.String(),
                        email = c.String(),
                        password = c.String(),
                        level = c.Int(nullable: false),
                        picture = c.String(),
                        city = c.String(),
                        birth = c.Int(nullable: false),
                        bio = c.String(),
                    })
                .PrimaryKey(t => t.id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Communities");
        }
    }
}
