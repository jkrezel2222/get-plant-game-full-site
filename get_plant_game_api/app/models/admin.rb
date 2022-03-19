class Admin < ApplicationRecord

has_many :plant

has_secure_password
validates :username, presence: true, uniqueness: { case_sensitive: false }, length: { minimum: 4, maximum: 254 }

end
