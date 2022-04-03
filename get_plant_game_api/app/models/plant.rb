class Plant < ApplicationRecord
    belongs_to :admin

    # include ImageUploader::Attachment(:image)
    validates :title, presence: true
    validates :description, presence: true
end
