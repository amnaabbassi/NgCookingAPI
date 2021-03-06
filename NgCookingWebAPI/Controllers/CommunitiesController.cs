﻿using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using NgCookingWebAPI.Models;
using NgCookingWebAPI.Migrations;

namespace NgCookingWebAPI.Controllers
{
    public class CommunitiesController : ApiController
    {
        private NgCookingWebAPIContext db = new NgCookingWebAPIContext();

        // GET: api/Communities
        public IQueryable<Community> GetCommunities()
        {
            Configuration config = new Configuration();
            config.Seed(db);
            return db.Communities;
        }

        // GET: api/Communities/5
        [ResponseType(typeof(Community))]
        public IHttpActionResult GetCommunity(int id)
        {
            Community community = db.Communities.Find(id);
            if (community == null)
            {
                return NotFound();
            }

            return Ok(community);
        }

        // PUT: api/Communities/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutCommunity(int id, Community community)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != community.id)
            {
                return BadRequest();
            }

            db.Entry(community).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CommunityExists(id))
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

        // POST: api/Communities
        [ResponseType(typeof(Community))]
        public IHttpActionResult PostCommunity(Community community)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Communities.Add(community);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = community.id }, community);
        }

        // DELETE: api/Communities/5
        [ResponseType(typeof(Community))]
        public IHttpActionResult DeleteCommunity(int id)
        {
            Community community = db.Communities.Find(id);
            if (community == null)
            {
                return NotFound();
            }

            db.Communities.Remove(community);
            db.SaveChanges();

            return Ok(community);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CommunityExists(int id)
        {
            return db.Communities.Count(e => e.id == id) > 0;
        }
    }
}