class User < ApplicationRecord
  validates :name, :password_digest, presence: true

  # Validation of a unique email address with a valid format (built into Ruby)
  validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP }

  validates :password, length: { minimum: 6, allow_nil: true }

  after_initialize :ensure_session_token
  attr_reader :password
  
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
