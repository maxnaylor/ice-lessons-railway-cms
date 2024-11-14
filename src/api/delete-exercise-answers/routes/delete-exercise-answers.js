module.exports = {
  routes: [
    {
     method: 'DELETE',
     path: '/delete-exercise-answers/:user',
     handler: 'delete-exercise-answers.deleteExerciseAnswers',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
