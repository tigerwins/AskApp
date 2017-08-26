# == Schema Information
#
# Table name: comments
#
#  id                :integer          not null, primary key
#  body              :text             not null
#  parent_comment_id :integer
#  answer_id         :integer          not null
#  user_id           :integer          not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

class Comment < ApplicationRecord
  validates :body, :answer, :user, presence: true

  belongs_to :user
  belongs_to :answer

  # has_many :child_comments,
  #   class_name: "Comment",
  #   primary_key: :id,
  #   foreign_key: :parent_comment_id

  # belongs_to :parent_comment,
  #   class_name: "Comment",
  #   primary_key: :id,
  #   foreign_key: :parent_comment_id,
  #   optional: true

  # ^^^^^should probably delete this for now

end
