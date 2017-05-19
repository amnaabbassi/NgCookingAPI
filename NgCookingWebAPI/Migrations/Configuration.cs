namespace NgCookingWebAPI.Migrations
{
    using Models;
    using Newtonsoft.Json;
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.IO;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<NgCookingWebAPI.Models.NgCookingWebAPIContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        public  void Seed(NgCookingWebAPIContext context)
        {
            List<Community> items;
            List<categorie> itemsCategorie;
            List<ingredients> itemsIngredients;

            try
            {
                // 1. read a json file and Deserialize the data
                using (StreamReader r = new StreamReader(@"C:\Users\C17 Developer\Documents\Visual Studio 2015\Projects\NewApp\NgCookingWebAPI\json\communaute.json"))
                {
                    string json = r.ReadToEnd();
                    items = JsonConvert.DeserializeObject<List<Community>>(json);
                }
                using (StreamReader r = new StreamReader(@"C:\Users\C17 Developer\Documents\Visual Studio 2015\Projects\NewApp\NgCookingWebAPI\json\categories.json"))
                {
                    string json = r.ReadToEnd();
                    itemsCategorie = JsonConvert.DeserializeObject<List<categorie>>(json);
                }
                using (StreamReader r = new StreamReader(@"C:\Users\C17 Developer\Documents\Visual Studio 2015\Projects\NewApp\NgCookingWebAPI\json\ingredients.json"))
                {
                    string json = r.ReadToEnd();
                    itemsIngredients = JsonConvert.DeserializeObject<List<ingredients>>(json);
                }
                // 2. fill the table
                foreach (Community comm in items)
                {
                    context.Communities.AddOrUpdate(comm);
                }
                foreach (categorie cat in itemsCategorie)
                {
                    context.categories.AddOrUpdate(cat);
                }
                foreach (ingredients ing in itemsIngredients)
                {
                    context.ingredients.AddOrUpdate(ing);
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

