export const createComment = comment => {
  return $.ajax({
    method: "POST",
    url: `/api/answers/${comment.answerId}/comments`,
    data: { comment },
  });
};

export const destroyComment = comment => {
  return $.ajax({
    method: "DELETE",
    url: `/api/comments/${comment.id}`,
  });
};
