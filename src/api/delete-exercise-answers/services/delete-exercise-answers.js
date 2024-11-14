'use strict';

/**
 * delete-exercise-answers service
 */

module.exports = {
  deleteExerciseAnswers: async () => {
    try {
      await strapi.db.query('api::exercise-answer.exercise-answer').deleteMany({
        where: {
          user: ''
        },
      });
    } catch (err) {
      return err;
    }
  }
}

