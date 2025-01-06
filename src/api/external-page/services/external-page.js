'use strict';

/**
 * external-page service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::external-page.external-page');
