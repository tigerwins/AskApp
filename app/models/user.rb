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

class User < ApplicationRecord
  validates :fname, :lname, :email, :password_digest, :session_token, presence: true
  validates :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  after_initialize :ensure_session_token

  has_many :questions,
    class_name: 'Question',
    primary_key: :id,
    foreign_key: :asker_id

  has_many :answers,
    class_name: 'Answer',
    primary_key: :id,
    foreign_key: :author_id

  has_many :comments
  has_many :upvotes
  has_many :upvoted_answers,
    through: :upvotes,
    source: :answer

  attr_reader :password

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user.is_password?(password) ? user : nil
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save!
    self.session_token
  end

  def password=(pw)
    @password = pw
    self.password_digest = BCrypt::Password.create(pw)
  end

  def is_password?(pw)
    BCrypt::Password.new(self.password_digest).is_password?(pw)
  end

  def name
    "#{self.fname} #{self.lname}"
  end

end
