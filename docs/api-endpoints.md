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
- `POST /api/questions`
- `GET /api/questions/:id`
- `PATCH /api/questions/:id`
- `DELETE /api/questions/:id`

### Answers

- `GET /api/questions/:question_id/answers`
- `POST /api/questions/:question_id/answers`
- `GET /api/answer/:id`
- `PATCH /api/answers/:id`
- `DELETE /api/answers/:id`

### Comments

- `POST /api/answers/:answer_id/comments`
- `DELETE /api/comments/:id`

### Topics

- `POST /api/topics`
- `GET /api/topics/:id`
