```js
{
  session: {
    currentUser: {
      id: 2,
      username: "guest-user",
      questionIds: [],
      answerIds: [1],
      commentIds: [2]
    }
  },
  entities: {
    users: {
      1: {
        id: 1,
        firstName: "John",
        lastName: "Smith",
        questionIds: [1],
        answerIds: [],
        commentIds: [2]
      }
    },
    questions: {
      1: {
        id: 1,
        body: "What is the meaning of life?",
        askerId: 1,
        answerIds: [1]
        topicIds: [1, 5]
      }
    },
    answers: {
      1: {
        id: 1,
        body: "Life has no meaning. You have to make your own meaning!",
        authorId: 2,
        questionId: 1,
        commentIds: [1, 2]
      }
    },
    comments: {
      1: {
        id: 1,
        body: "Good answer",
        userId: 1,
        answerId: 1,
      }
    },
    topics: {
      1: {
        id: 1,
        name: "Life",
        questionIds: [1]
      }
    }    
  },
  ui: {
    loading: {
      indexLoading: false,
      detailLoading: false
    },
    modal: {
      display: false,
      component: null // is an actual React component if display is true
    }
  },
  errors: {
    errorType: "login",
    errorList: ["Invalid credentials"]
  }
}
```
