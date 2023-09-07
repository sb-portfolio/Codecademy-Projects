const checkMillionDollarIdea = (req, res, next) => {

    const numWeeks = req.body.numWeeks
    const weeklyRevenue = req.body.weeklyRevenue
    const yield = numWeeks * weeklyRevenue

    const allDataPresent = !numWeeks||!weeklyRevenue
    const invalidWeeksAndRevenueType =  typeof numWeeks === 'string' || 
                                        typeof weeklyRevenue === 'string'
    const yieldToLow = yield < 1000000

    if(allDataPresent||invalidWeeksAndRevenueType||yieldToLow){
        res.status(400).send()
    } else{
        next()
    }

};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
