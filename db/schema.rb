# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170829232312) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"
  enable_extension "fuzzystrmatch"
  enable_extension "pg_trgm"
  enable_extension "unaccent"

  create_table "answers", force: :cascade do |t|
    t.text     "body",        null: false
    t.integer  "author_id",   null: false
    t.integer  "question_id", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["author_id", "question_id"], name: "index_answers_on_author_id_and_question_id", unique: true, using: :btree
    t.index ["author_id"], name: "index_answers_on_author_id", using: :btree
    t.index ["question_id"], name: "index_answers_on_question_id", using: :btree
  end

  create_table "comments", force: :cascade do |t|
    t.text     "body",              null: false
    t.integer  "parent_comment_id"
    t.integer  "answer_id",         null: false
    t.integer  "user_id",           null: false
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
    t.index ["answer_id"], name: "index_comments_on_answer_id", using: :btree
    t.index ["parent_comment_id"], name: "index_comments_on_parent_comment_id", using: :btree
    t.index ["user_id"], name: "index_comments_on_user_id", using: :btree
  end

  create_table "question_topics", force: :cascade do |t|
    t.integer  "question_id", null: false
    t.integer  "topic_id",    null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["question_id", "topic_id"], name: "index_question_topics_on_question_id_and_topic_id", unique: true, using: :btree
    t.index ["question_id"], name: "index_question_topics_on_question_id", using: :btree
    t.index ["topic_id"], name: "index_question_topics_on_topic_id", using: :btree
  end

  create_table "questions", force: :cascade do |t|
    t.string   "body",       null: false
    t.integer  "asker_id",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["asker_id"], name: "index_questions_on_asker_id", using: :btree
  end

  create_table "topics", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "fname",            null: false
    t.string   "lname",            null: false
    t.string   "email",            null: false
    t.string   "password_digest",  null: false
    t.string   "session_token",    null: false
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
    t.string   "provider"
    t.string   "uid"
    t.text     "image"
    t.string   "fb_access_token"
    t.string   "fb_refresh_token"
    t.string   "fb_uid"
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  end

end
