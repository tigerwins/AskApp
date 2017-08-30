export const createQuestionTopic = questionTopic => {
  return $.ajax({
    method: "POST",
    url: "/api/question_topics/",
    data: { question_topic: questionTopic }
  });
};

export const destroyQuestionTopic = questionTopic => {
  return $.ajax({
    method: "DELETE",
    url: `/api/question_topics/${questionTopic.id}`,
    data: { question_topic: questionTopic }
  });
};
