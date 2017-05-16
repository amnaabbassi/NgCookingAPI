using Newtonsoft.Json;
using System.Collections.Generic;

namespace NgCookingWebAPI.Models
{
    public class recette
    {
        [JsonProperty(PropertyName = "id")]
        public string id { get; set; }

        [JsonProperty(PropertyName = "name")]
        public string name { get; set; }

        [JsonProperty(PropertyName = "creatorId")]
        public int creatorId { get; set; }

        [JsonProperty(PropertyName = "isAvailable")]
        public bool isAvailable { get; set; }

        [JsonProperty(PropertyName = "picture")]
        public string picture { get; set; }

        [JsonProperty(PropertyName = "calories")]
        public string calories { get; set; }

        [JsonProperty(PropertyName = "id")]
        public virtual List<ingredients> Ingredients  { get; set; }
    }
}