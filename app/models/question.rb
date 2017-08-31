# == Schema Information
#
# Table name: questions
#
#  id         :integer          not null, primary key
#  body       :string           not null
#  asker_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Question < ApplicationRecord
  include PgSearch
  validates :body, :asker, presence: true

  pg_search_scope :search_questions,
    against: :body,
    ignoring: :accents,
    using: {
      tsearch: { any_word: true, prefix: true },
      dmetaphone: { any_word: true, sort_only: true },
      trigram: { threshold: 0.75 }
    }

  belongs_to :asker,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :asker_id

  has_many :answers
  has_many :question_topics
  has_many :topics, through: :question_topics
end
