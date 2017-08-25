# == Schema Information
#
# Table name: topics
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Topic < ApplicationRecord
  validates :name, presence: :true
  validates :name, uniqueness: :true

  has_many :question_topics
  has_many :questions, through: :question_topics
end
