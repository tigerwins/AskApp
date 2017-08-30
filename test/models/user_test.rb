# == Schema Information
#
# Table name: users
#
#  id               :integer          not null, primary key
#  fname            :string           not null
#  lname            :string           not null
#  email            :string           not null
#  password_digest  :string           not null
#  session_token    :string           not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  provider         :string
#  uid              :string
#  image            :text
#  fb_access_token  :string
#  fb_refresh_token :string
#  fb_uid           :string
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
