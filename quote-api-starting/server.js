const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

const quotesRouter = express.Router()

quotesRouter.get('/random', (req, res, next) => {
    const randomQuote = getRandomElement(quotes)
    const randomQuoteObject = {
        quote: randomQuote
    }

    res.send(randomQuoteObject)
})

quotesRouter.get('/', (req, res, next) => {
    const quoteAuthor = req.query.person


    if(!quoteAuthor){
        const quotesObject = {
            quotes: quotes
        }
    
        res.send(quotesObject)
    } else {
        const quoteByAuthor = quotes.filter((quote) => {
            return quote.person === quoteAuthor
        })
        if(quoteByAuthor.length>0){
            const quoteByAuthorObject = {
                quotes: quoteByAuthor
            }

            res.send(quoteByAuthorObject)
        } else{
            res.status(404).send()
        }
        
    }

  
})

app.use('/api/quotes', quotesRouter)


app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`)
})
