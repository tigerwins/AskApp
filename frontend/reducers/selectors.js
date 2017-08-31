export const allQuestions = ({ entities }) => {
  const { questions } = entities;
  return Object.keys(questions).map(id => questions[id]);
};

export const allAnswers = ({ entities }, questionId) => {
  const { answers } = entities;
  const question = entities.questions[questionId];
  const answerIds = question.answerIds;
  return answerIds.map(id => answers[id]);
};

export const unansweredQuestions = (state) => {
  const questionArray = allQuestions(state);
  return questionArray.filter(question => {
    return question.answerIds.length === 0;
  });
};
