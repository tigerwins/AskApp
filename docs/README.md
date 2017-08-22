# Ask()

[Heroku link (currently links to heroku home)][heroku]

[Trello link][trello]

[heroku]: http://www.herokuapp.com
[trello]: https://trello.com/b/RG2ciD6k/ask

Ask() is a full-stack web application based off of Quora that allows users to ask and answer questions. Its stack consists of Ruby on Rails (backend), PostgreSQL (database), and React.js and Redux (frontend). By the end of Week 9, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data, and sufficient CSS styling:

## Minimum Viable Product
- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Questions
- [ ] Answers and commenting on answers
- [ ] Question search
- [ ] Question Topics
- [ ] Production README

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: /docs/wireframes
[components]: /component-hierarchy.md
[sample-state]: /sample-state.md
[api-endpoints]: /api-endpoints.md
[schema]: /schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

### Phase 2: Questions Model, API, and components (2 days)

**Objective:** Questions can be created, read, edited and destroyed through the API.

### Phase 3: Answers and Comments (2 days)

**Objective:** Answers belong to a Question, and comments belong to an answer. Both can be created, read, edited, and destroyed through the API.

### Phase 4: Question Search (1 day)

**Objective:** Questions can be found using the search bar, which matches the substring inputted into the bar with question body text. Top matches display in a dropdown box. Selecting a search result brings the user to the question's (detail) show page.

### Phase 5: Topics (1 day, W2 Th 6pm)

**Objective:** Questions can be tagged with multiple topics, and topics can be searched for, which displays all questions with the topic.

### Bonus Features (TBD)
- [ ] Answer upvotes, order questions by popularity
- [ ] Recursive commenting
- [ ] User profiles
