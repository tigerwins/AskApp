# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

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
  password: "QuoraCEO"
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
