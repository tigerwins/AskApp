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

require 'test_helper'

class QuestionTopicTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
