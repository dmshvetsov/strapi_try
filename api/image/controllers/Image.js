'use strict';

/**
 * Image.js controller
 *
 * @description: A set of functions called "actions" for managing `Image`.
 */

module.exports = {

  /**
   * Retrieve image records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    const data = await strapi.services.image.fetchAll(ctx.query);

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Retrieve a image record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    const data = await strapi.services.image.fetch(ctx.params);

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Create a/an image record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    const data = await strapi.services.image.add(ctx.request.body);

    // Send 201 `created`
    ctx.created(data);
  },

  /**
   * Update a/an image record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    const data = await strapi.services.image.edit(ctx.params, ctx.request.body) ;

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Destroy a/an image record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    const data = await strapi.services.image.remove(ctx.params);

    // Send 200 `ok`
    ctx.send(data);
  }
};
