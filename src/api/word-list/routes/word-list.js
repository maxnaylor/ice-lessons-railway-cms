'use strict';

/**
 * word-list router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::word-list.word-list');
