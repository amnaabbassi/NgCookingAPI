using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NgCookingWebAPI.Models
{
    public class Community
    {
        public string firstname { get; set; }
        public string surname { get; set; }
        public int id { get; set; }
        public string email { get; set; }
        public string password { get; set; }
        public int level { get; set; }
        public string picture { get; set; }
        public string city { get; set; }
        public int birth { get; set; }
        public string bio { get; set; }
    }
}