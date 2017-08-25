# == Schema Information
#
# Table name: question_topics
#
#  id          :integer          not null, primary key
#  question_id :integer          not null
#  topic_id    :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class QuestionTopic < ApplicationRecord
  validates :question_id, :topic_id, presence: :true
  validates :question_id, uniqueness: { scope: [:topic_id] }

  belongs_to :question
  belongs_to :topic
end
