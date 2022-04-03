class TipSerializer < ActiveModel::Serializer
    attributes :title, :image_data, :description

    def initialize(tip_object)
        @tip = tip_object
    end

    def to_serialized_json
        @tip.to_json
    end
end