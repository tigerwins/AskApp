## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**App**
 - Header
 - HomeContainer
 - AnswerQuestionIndexContainer
 - QuestionDetailContainer
 - TopicQuestionIndexContainer

**Header**
 - Search
      + SearchResults
 - ProfileOptions

**HomeContainer**
 - QuestionPrompt
      + AskBox
 - QuestionIndexContainer
 - FeedSidebar

**QuestionIndexContainer**
 - QuestionIndex
      + Question
          + AnswerContainer

**QuestionDetailContainer**
 - QuestionDetail
 - AnswerIndexContainer
 - RelatedQuestions

**AnswerContainer**
 - Answer
 - CommentContainer

**Search**
**AskBox**


## Routes

|Path   | Component   |
|-------|-------------|
| "/" | "AuthFormContainer", "HomeContainer" |
| "/answer" | "AnswerQuestionIndexContainer" |
| "/questions/:questionId" | "QuestionDetailContainer" |
| "/topics/:topicId" | "TopicQuestionIndexContainer" |
