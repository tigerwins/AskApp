# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Questions

- `GET /api/questions`
  - Questions index/search
  - accepts `search` query param to list questions by search string
- `POST /api/questions`
- `GET /api/questions/:id`
- `PATCH /api/questions/:id`
- `DELETE /api/questions/:id`

### Answers

- Answers will only be viewable in a question's show page
- `GET /api/questions/:id/answers`
- `POST /api/questions/:id/answers`
- `PATCH /api/answers/:id`
- `DELETE /api/answers/:id`

### Comments

- `POST /api/answers/:id/comments`
- `DELETE /api/comments/:id`

### Topics

- A question's topics will be included in the question show page
- `POST /api/topics`
- `GET /api/topics/:id`
