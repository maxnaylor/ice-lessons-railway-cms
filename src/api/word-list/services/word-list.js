'use strict';

/**
 * word-list service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::word-list.word-list');
