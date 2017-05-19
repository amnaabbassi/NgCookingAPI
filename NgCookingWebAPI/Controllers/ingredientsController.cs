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
    public class ingredientsController : ApiController
    {
        private NgCookingWebAPIContext db = new NgCookingWebAPIContext();

        // GET: api/ingredients
        public IQueryable<ingredients> Getingredients()
        {
            Configuration config = new Configuration();
            config.Seed(db);
            return db.ingredients;
        }

        // GET: api/ingredients/5
        [ResponseType(typeof(ingredients))]
        public IHttpActionResult Getingredients(string id)
        {
            ingredients ingredients = db.ingredients.Find(id);
            if (ingredients == null)
            {
                return NotFound();
            }

            return Ok(ingredients);
        }

        // PUT: api/ingredients/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Putingredients(string id, ingredients ingredients)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != ingredients.id)
            {
                return BadRequest();
            }

            db.Entry(ingredients).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ingredientsExists(id))
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

        // POST: api/ingredients
        [ResponseType(typeof(ingredients))]
        public IHttpActionResult Postingredients(ingredients ingredients)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.ingredients.Add(ingredients);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (ingredientsExists(ingredients.id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = ingredients.id }, ingredients);
        }

        // DELETE: api/ingredients/5
        [ResponseType(typeof(ingredients))]
        public IHttpActionResult Deleteingredients(string id)
        {
            ingredients ingredients = db.ingredients.Find(id);
            if (ingredients == null)
            {
                return NotFound();
            }

            db.ingredients.Remove(ingredients);
            db.SaveChanges();

            return Ok(ingredients);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ingredientsExists(string id)
        {
            return db.ingredients.Count(e => e.id == id) > 0;
        }
    }
}