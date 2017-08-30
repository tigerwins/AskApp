export const createQuestionTopic = questionTopic => {
  return $.ajax({
    method: "POST",
    url: "/api/question_topics/",
    data: { question_topic: questionTopic }
  });
};

export const destroyQuestionTopic = ({ questionId, topicId }) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/question_topics/${questionId}/${topicId}`,
  });
};
