'use strict';

/**
 * exercise-answer service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::exercise-answer.exercise-answer');
