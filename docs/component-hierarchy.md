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
 - AskModal

**HomeContainer**
 - AskBox
      + AskModal
 - QuestionIndexContainer
 - FeedSidebar

**QuestionIndexContainer**
 - QuestionIndex
      + Question
          + AnswerContainer

**QuestionDetailContainer**
 - Question
 - AnswerIndexContainer
 - RelatedQuestions

**AnswerContainer**
 - Answer
 - CommentContainer

**Search**
**AskBox**
**AskModal**


## Routes

|Path   | Component   |
|-------|-------------|
| "/" | "AuthFormContainer", "HomeContainer" |
| "/answer" | "AnswerQuestionIndexContainer" |
| "/questions/:questionId" | "QuestionDetailContainer" |
| "/topics/:topicId" | "TopicQuestionIndexContainer" |
