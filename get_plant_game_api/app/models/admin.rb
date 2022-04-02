class Admin < ApplicationRecord

has_many :tip

has_secure_password
validates :username, uniqueness: { case_sensitive: false }
end
