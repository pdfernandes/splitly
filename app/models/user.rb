class User < ApplicationRecord
    validates :username, :email, :fname, :lname, :password_digest, :session_token, presence: true
    validates :password, length: {minimum: 7, allow_nil: true}
    validates_uniqueness_of :session_token, :email
    after_initialize :ensure_session_token
    attr_reader :password

    def self.find_by_credential(username, password)
        user = User.find_by(username: username)
        return user if user and user.is_password?(password)
        nil
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64(16)
    end

    def reset_session_token!
        self.session_token = self.class.generate_session_token
        self.save!
        self.session_token
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def ensure_session_token
        self.session_token ||= self.class.generate_session_token
    end


    


end
