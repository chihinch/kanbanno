class User < ApplicationRecord
  validates :name, :password_digest, presence: true
  validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { minimum: 6, allow_nil: true }

  after_initialize :ensure_session_token
  attr_reader :password

  has_many :own_boards,
    class_name: :Board,
    primary_key: :id,
    foreign_key: :admin_id

  has_many :boards, through: :board_memberships

  has_many :board_memberships,
    class_name: :BoardMembership,
    primary_key: :id,
    foreign_key: :member_id

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    if user.nil?
      return "There isn't an account for this email"
    else
      return "Incorrect email/password combination" unless user.is_password?(password)
    end
    user
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

end
