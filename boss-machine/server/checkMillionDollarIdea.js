const checkMillionDollarIdea = (req, res, next) => {

    const numWeeks = req.body.numWeeks
    const weeklyRevenue = req.body.weeklyRevenue

    if(!numWeeks||!weeklyRevenue){
        res.status(400).send()
        return
    }
    if(typeof numWeeks === 'string' || typeof weeklyRevenue === 'string'){
        console.log("type error")
        res.status(400).send()
        return
    }

    const yield = numWeeks * weeklyRevenue

    if(yield<1000000){
        res.status(400).send()
        return
    } else{
        next()
    }

};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
