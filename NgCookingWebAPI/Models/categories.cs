using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NgCookingWebAPI.Models
{
    public class categories
    {
        [JsonProperty(PropertyName = "id")]
        public string id { get; set; }

        [JsonProperty(PropertyName = "nameToDisplay")]
        public string nameToDisplay { get; set; }
    }
}