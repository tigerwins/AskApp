# == Schema Information
#
# Table name: answers
#
#  id          :integer          not null, primary key
#  body        :text             not null
#  author_id   :integer          not null
#  question_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Answer < ApplicationRecord
  validates :body, :author, :question, presence: true
  validates :author_id, uniqueness: { scope: [:question_id] }

  belongs_to :author,
    class_name: "User",
    primary_key: :id,
    foreign_key: :author_id

  belongs_to :question

  has_many :comments, dependent: :destroy
end
