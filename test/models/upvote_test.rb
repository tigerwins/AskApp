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

require 'test_helper'

class UpvoteTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
