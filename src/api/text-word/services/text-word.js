'use strict';

/**
 * text-word service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::text-word.text-word');
