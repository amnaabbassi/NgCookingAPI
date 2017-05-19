using Newtonsoft.Json;

namespace NgCookingWebAPI.Models
{
    public class categorie
    {
        [JsonProperty(PropertyName = "id")]
        public string id { get; set; }

        [JsonProperty(PropertyName = "nameToDisplay")]
        public string nameToDisplay { get; set; }
    }
}