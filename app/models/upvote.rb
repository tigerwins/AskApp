# == Schema Information
#
# Table name: upvotes
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  answer_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Upvote < ApplicationRecord
  validates :user, :answer, presence: true
  validates :user_id, uniqueness: { scope: [:answer_id] }

  belongs_to :user
  belongs_to :answer
end
