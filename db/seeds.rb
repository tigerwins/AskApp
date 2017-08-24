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
  fname: "Derek",
  lname: "Bangle",
  email: "dbangle@gmail.com",
  password: "MCWoWS"
)
demo_user = User.create!(
  fname: "Godot",
  lname: "was Here",
  email: "demo_user@me.com",
  password: "hiddenPassword"
)

Question.destroy_all
q1 = Question.create!(
  body: "Testing 123, is this working?",
  details: "",
  asker_id: user1.id
)

q2 = Question.create!(
  body: "What is the meaning of life?",
  details: "",
  asker_id: user2.id
)

q3 = Question.create!(
  body: "What is the airspeed velocity of an unladen swallow?",
  details: "And is it an African or a European swallow?",
  asker_id: demo_user.id
)

q4 = Question.create!(
  body: "What is your favorite story about an historic battle?",
  details: "",
  asker_id: user1.id
)
q5 = Question.create!(
  body: "What's the best place to buy board games in NYC?",
  details: "Specifically in Manhattan",
  asker_id: user3.id
)
q6 = Question.create!(
  body: "If I want to become a software developer in NYC, how would I be able to go about doing that?",
  details: "Specifically in Manhattan",
  asker_id: user2.id
)
