## Component Hierarchy

**App**
 - HeaderContainer
 - Content (Switch)
     + TopicShowContainer
     + QuestionDetailContainer
     + NewQuestionsContainer
     + Home
 - EntryPage

**EntryPage**
 - SignupFormContainer
 - LoginFormContainer

**Header**
 - Search
      + SearchResults
 - ProfileOptions
 - AskButton
      + QuestionModal

**Home**
 - Feeds
 - QuestionIndexContainer

**QuestionIndex**
 - QuestionPrompt
      + QuestionModal
 - QuestionIndexContainer

**QuestionIndexContainer**
 - QuestionIndex
      + QuestionIndexItem
          + Answer

**QuestionDetailContainer**
 - Question
 - AnswerIndex
 - RelatedQuestions

**AnswerContainer**
 - Answer
 - CommentsContainer

**Search**
**AskBox**


## Routes

|Path   | Component   |
|-------|-------------|
| "/" | "EntryPage", "Home" |
| "/answer" | "NewQuestionsContainer" |
| "/questions/:questionId" | "QuestionDetailContainer" |
| "/topics/:topicId" | "TopicShowContainer" |
