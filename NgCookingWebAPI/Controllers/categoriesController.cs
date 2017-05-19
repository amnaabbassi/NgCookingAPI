using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Web.Http;
using System.Web.Http.Description;
using NgCookingWebAPI.Models;
using NgCookingWebAPI.Migrations;

namespace NgCookingWebAPI.Controllers
{
    public class categoriesController : ApiController
    {
        private NgCookingWebAPIContext db = new NgCookingWebAPIContext();

        // GET: api/categories
        public IQueryable<categorie> Getcategories()
        {
            Configuration config = new Configuration();
            config.Seed(db);
            return db.categories;
        }

        // GET: api/categories/5
        [ResponseType(typeof(categorie))]
        public IHttpActionResult Getcategorie(string id)
        {
            categorie categorie = db.categories.Find(id);
            if (categorie == null)
            {
                return NotFound();
            }

            return Ok(categorie);
        }

        // PUT: api/categories/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Putcategorie(string id, categorie categorie)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != categorie.id)
            {
                return BadRequest();
            }

            db.Entry(categorie).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!categorieExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/categories
        [ResponseType(typeof(categorie))]
        public IHttpActionResult Postcategorie(categorie categorie)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.categories.Add(categorie);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (categorieExists(categorie.id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = categorie.id }, categorie);
        }

        // DELETE: api/categories/5
        [ResponseType(typeof(categorie))]
        public IHttpActionResult Deletecategorie(string id)
        {
            categorie categorie = db.categories.Find(id);
            if (categorie == null)
            {
                return NotFound();
            }

            db.categories.Remove(categorie);
            db.SaveChanges();

            return Ok(categorie);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool categorieExists(string id)
        {
            return db.categories.Count(e => e.id == id) > 0;
        }
    }
}