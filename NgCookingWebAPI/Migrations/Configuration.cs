using System.Data.Entity.Migrations;
using NgCookingWebAPI.Models;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Web.Hosting;
using System.IO;
using System;

namespace NgCookingWebAPI.Migrations
{
    internal sealed class Configuration : DbMigrationsConfiguration<NgCookingWebAPI.Models.NgCookingWebAPIContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        public void Seed(NgCookingWebAPIContext context)
        {
            List<Community> items;
            try
            {
                // 1. read a json file and Deserialize the data
                //string filename = HostingEnvironment.MapPath(@"/json/communaute.json");
                //List<Community> communauteData = JsonConvert.DeserializeObject<List<Community>>(filename);
                using (StreamReader r = new StreamReader(@"C:\Users\C17 Developer\Documents\Visual Studio 2015\Projects\NewApp\NgCookingWebAPI\json\communaute.json"))
                {
                    string json = r.ReadToEnd();
                    items = JsonConvert.DeserializeObject<List<Community>>(json);
                }
                // 2. fill the table
                foreach (Community comm in items)
                {
                    context.Communities.AddOrUpdate(comm);
                }
                context.SaveChanges();
                //base.Seed(context);
            }
            catch (System.Exception ex)
            {

                Console.WriteLine("the file could not be read:");
                Console.WriteLine(ex.Message);
            }
        }
    }
}
