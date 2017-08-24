export const allQuestions = ({ entities }) => {
  const { questions } = entities;
  return Object.keys(questions).map(id => questions[id]);
};
