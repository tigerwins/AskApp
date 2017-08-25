## Component Hierarchy

**App**
 - HeaderContainer
 - Content
 - EntryPage

**EntryPage**
 - SignupFormContainer
 - LoginFormContainer

**Content** (switch routing)
 - TopicShowContainer
 - QuestionDetailContainer
 - NewQuestionsContainer
 - Home

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
