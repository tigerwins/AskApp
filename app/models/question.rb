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
  validates :body, :asker, presence: true

  belongs_to :asker,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :asker_id


    
end
