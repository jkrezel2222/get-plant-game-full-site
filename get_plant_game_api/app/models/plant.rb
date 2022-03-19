class Plant < ApplicationRecord
    belongs_to :admin

    include ImageUploader::Attachment(:image)
    validates :title, presence: true, length: { minimum: 1, maximum: 500 }
    validates :description, length: { minimum: 1, maximum: 1200 }
end
