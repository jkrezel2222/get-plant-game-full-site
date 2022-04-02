class TipSerializer < ActiveModel::Serializer
    
    def initialize(tip_object)
        @tip = tip_object
    end

    def to_serialized_json
        @tip.as_json
    end
end