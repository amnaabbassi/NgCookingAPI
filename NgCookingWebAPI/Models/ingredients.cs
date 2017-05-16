using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

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

        [JsonProperty(PropertyName = "id")]
        public virtual List<categories> category { get; set; }
    }
}