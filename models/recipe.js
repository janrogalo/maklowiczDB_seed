const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// We do not need to include recipe Id as it is generated automatically in Mongo.

const RecipeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    recipe: [{
        type: String,
        required: true
    }],
    ingredients: [{
        name: {
            type: String
        },
        quantity:{
        type: String
       }
    }],
    image: {
        type: String,
    },
    tags: {
        type: String,
        lowercase: true,
        // tags, have to be specified beforehand and will be all options available
        enum: ['fruit', 'vegetable', 'dairy']
    },
    location:{
        city: String,
        country: String,
    },
    video:{
        datePublished: String,
        seriesName: String,
        episodeTitle: String,
        episodeDescription: String,
        videoUrl: String
    }
})

module.exports = mongoose.model('Recipe', RecipeSchema);





