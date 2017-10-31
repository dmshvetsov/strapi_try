'use strict';

/**
 * Vendor.js controller
 *
 * @description: A set of functions called "actions" for managing `Vendor`.
 */

module.exports = {

  /**
   * Retrieve vendor records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    const data = await strapi.services.vendor.fetchAll(ctx.query);

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Retrieve a vendor record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    const data = await strapi.services.vendor.fetch(ctx.params);

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Create a/an vendor record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    const data = await strapi.services.vendor.add(ctx.request.body);

    // Send 201 `created`
    ctx.created(data);
  },

  /**
   * Update a/an vendor record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    const data = await strapi.services.vendor.edit(ctx.params, ctx.request.body) ;

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Destroy a/an vendor record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    const data = await strapi.services.vendor.remove(ctx.params);

    // Send 200 `ok`
    ctx.send(data);
  }
};
