'use strict';

/**
 * A set of functions called "actions" for `delete-exercise-answers`
 */

 const deleteMany = async (tableName, whereClause) => { //Created because of known bug "deleteMany not working when filter by nested entity" Github: #11998
 try { const toDelete = await strapi.db .query(tableName) .findMany({ where: whereClause }); return strapi.db .query(tableName) .deleteMany({ where: { id: { $in: toDelete.map(({ id }) => id) } } }); } catch (error) { console.error("Error deleting records from ${tableName}: ${error.message}"); throw error; } };

module.exports = {
  async deleteExerciseAnswers(ctx, next) {
    try {
      console.log();
      const data = deleteMany('api::exercise-answer.exercise-answer', {
        user: {
          id: ctx.params.user
        }
      });
      ctx.body = data;
    } catch (err) {
      ctx.badRequest('Delete exercise answers error', { moreDetails: err })
    }
  }
};
