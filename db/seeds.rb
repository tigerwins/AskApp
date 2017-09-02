User.destroy_all
user1 = User.create!(
  fname: "John",
  lname: "Smith",
  email: "jsmith@me.com",
  password: "password"
)
user2 = User.create!(
  fname: "Jane",
  lname: "Doe",
  email: "jdoe@me.com",
  password: "password"
)
user3 = User.create!(
  fname: "Adam",
  lname: "D'Angelo",
  email: "dangelo@mail.com",
  password: "quoraguy"
)
user4 = User.create!(
  fname: "Michael",
  lname: "Williams",
  email: "mfwill@gmail.com",
  password: "qwerty123"
)
demo_user = User.create!(
  fname: "Demo",
  lname: "User",
  email: "demo_user@me.com",
  password: "hiddenPassword"
)
tommy = User.create!(
  fname: "Tommy",
  lname: "Duek",
  email: "tduek@appacademy.io",
  password: "appAcademyRules"
)

Question.destroy_all
q1 = Question.create!(
  body: "I'm planning on investing my life savings. What would be the best thing for me to do if I'm currently 40 years old?",
  asker_id: user1.id
)
q2 = Question.create!(
  body: "What is the meaning of life?",
  asker_id: user2.id
)
q3 = Question.create!(
  body: "What is the airspeed velocity of an unladen swallow? And is it an African or a European swallow?",
  asker_id: demo_user.id
)
q4 = Question.create!(
  body: "What is your favorite story about an historic battle?",
  asker_id: user1.id
)
q5 = Question.create!(
  body: "What's the best place to buy board games in NYC?",
  asker_id: user3.id
)
q6 = Question.create!(
  body: "If I want to become a software developer in NYC, how would I be able to go about doing that?",
  asker_id: user2.id
)
q7 = Question.create!(
  body: "I'm just about to start college this fall. Can you give me some advice to avoid the common pitfalls of undergrad?",
  asker_id: user4.id
)

Answer.destroy_all
a1 = Answer.create!(body: "What do you mean? African or European swallow? The European swallow has an average cruising airspeed velocity of roughly 24 miles per hour (or 11 meters per second).", question_id: q3.id, author_id: user4.id)

a2 = Answer.create!(body: "You should obviously attend App Academy; it is rated the #1 coding bootcamp, and the deferred tuition means you don't have to pay until you get a job! We have motivated and inspiring teachers, and our program currently has a 98% job placement rate and an average NYC starting salary of 89k. Sounds like a pretty good deal to me!", question_id: q6.id, author_id: tommy.id)

Topic.destroy_all
t1 = Topic.create!(id: 1, name: "Technology")
t2 = Topic.create!(id: 2, name: "Science")
t3 = Topic.create!(id: 3, name: "Money")
t4 = Topic.create!(id: 4, name: "History")
t5 = Topic.create!(id: 5, name: "Hypothetical Scenarios")
t6 = Topic.create!(id: 6, name: "Career Advice")

QuestionTopic.destroy_all
qt1 = QuestionTopic.create!(topic_id: t1.id, question_id: q6.id)
qt2 = QuestionTopic.create!(topic_id: t6.id, question_id: q6.id)
qt3 = QuestionTopic.create!(topic_id: t3.id, question_id: q1.id)
qt4 = QuestionTopic.create!(topic_id: t5.id, question_id: q3.id)
qt5 = QuestionTopic.create!(topic_id: t4.id, question_id: q4.id)
