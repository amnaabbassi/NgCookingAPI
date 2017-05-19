using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations.Schema;

namespace NgCookingWebAPI.Models
{
    public class ingredients
    {
        [JsonProperty(PropertyName = "id")]
        public string id { get; set; }

        [JsonProperty(PropertyName = "name")]
        public string name { get; set; }

        [JsonProperty(PropertyName = "isAvailable")]
        public bool isAvailable { get; set; }

        [JsonProperty(PropertyName = "picture")]
        public string picture { get; set; }

        [JsonProperty(PropertyName = "calories")]
        public int calories { get; set; }

        [JsonProperty(PropertyName = "category")]
        public int category { get; set; }

        [ForeignKey("id")]
        public virtual categorie idCategory { get; set; }
        
        //public virtual List<recette> recette { get; set; }
    }
}