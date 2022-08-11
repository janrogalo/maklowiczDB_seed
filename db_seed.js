// Firstly you have to install MongoDB on your machine to do it follow the docs
// https://www.mongodb.com/docs/manual/installation/

const mongoose = require('mongoose');
const Recipe = require('./models/recipe');

mongoose.connect('mongodb://localhost:27017/maklowiczRecipes', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Succefully connected to database")
    })
    .catch(err => {
        console.log("Connection error")
        console.log(err)
    })

const recipe = new Recipe({
        title: 'Ogórki w chili',
        recipe: [
            'Ogórki obieramy ze skórek i kroimy w słupki',
            'Papryczkę chilli, obrane ząbki czosnku oraz koperek drobno siekamy.',
            'Do miseczki wlewamy ocet, dodajemy cukier i sól.', 'Wlewamy olej i mieszamy.',
            'Następnie wrzucamy ogórki, a także papryczki, czosnek i koperek.',
            'Wszystko mieszamy i odstawiamy do lodówki na 15 minut, aby surówka się schłodziła.'
        ],
        ingredients: [
            {
              name: 'ogórki gruntowe',
              quantity: '3-4'
            },
            {
                name: 'papryczka chilli',
                quantity: '1'
            },
            {
                name: 'ocet jabłkowy',
                quantity: '2-3 łyżki'
            },
            {
                name: 'cukier',
                quantity: '2 łyżki'
            },
            {
                name: 'czosnek',
                quantity: '2 ząbki'
            },
            {
                name: 'koperek',
                quantity: 'pęczek'
            },
        ],
        image: 'https://mowic.pl/wp-content/uploads/2018/07/Mak%C5%82owicz.jpg',
        tags: 'vegetable',
        location: {
            city: 'Sydney',
            country: 'Australia'
        },
        video: {
            datePublished: '2005',
            seriesName: 'Podróże kulinarne Roberta Makłowicza',
            episodeTitle: 'Sydney ze smakiem',
            videoUrl: 'https://www.youtube.com/watch?v=UVVa3VVDk4I'
        }
    })


recipe.save()
    .then(recipe => {
        console.log(recipe)
    })
    .catch(e => {
        console.log(e)
    })








