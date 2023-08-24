const express = require('express');
const app = express();

let { quotes } = require('./data');
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
            res.status(404).send([])
        }
        
    }

  
})

quotesRouter.post('/', (req, res, next) => {
    const newQuote = req.query

    if(newQuote.quote&&newQuote.person){
        quotes.push(newQuote)
        res.status(201).send({quote: newQuote})
    } else{
        res.status(400).send()
    }

    
})

quotesRouter.delete('/:id', (req, res, next) => {
    const quoteId = req.params.id
    const quoteIndex = quotes.findIndex(quote => quote.id===quoteId)

    if(quoteIndex!==-1){
        quotes.splice(quoteIndex,1)
        res.status(201).send({
            quotes: quotes
        })
    } else{
        res.status(400).send()
    }   
})

quotesRouter.put('/:id', (req, res, next) => {
    const quoteId = req.params.id
    const quoteIndex = quotes.findIndex(quote => quote.id===quoteId)
    const quoteBody = req.query.quote
    const personName = req.query.person

    if(quoteIndex!==-1&&quoteBody&&personName){

        quotes = quotes.map(quote => {
            if(quote.id===quoteId){
                return {
                    ...quote,
                    quote: quoteBody,
                    person: personName
                }   
            } else{
                return quote
            }
        })

        res.status(201).send({
            quotes: quotes
        })
    } else{
        res.status(400).send()
    }   
})

app.use('/api/quotes', quotesRouter)


app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`)
})
