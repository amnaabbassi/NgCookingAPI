using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;


namespace NgCookingWebAPI.Models
{
    public class Community
    {
        [JsonProperty(PropertyName = "firstname")]
        public string firstname { get; set; }
        [JsonProperty(PropertyName = "surname")]
        public string surname { get; set; }
        [JsonProperty(PropertyName = "id")]
        public int id { get; set; }
        [JsonProperty(PropertyName = "email")]
        [EmailAddress]
        public string email { get; set; }
        [JsonProperty(PropertyName = "password")]
        public string password { get; set; }
        [JsonProperty(PropertyName = "level")]
        public int level { get; set; }
        [JsonProperty(PropertyName = "picture")]
        public string picture { get; set; }
        [JsonProperty(PropertyName = "city")]
        public string city { get; set; }
        [JsonProperty(PropertyName = "birth")]
        public int birth { get; set; }
        [JsonProperty(PropertyName = "bio")]
        public string bio { get; set; }
    }
}