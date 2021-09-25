const axios = require('axios')


const getCurency = async (date) => {          
       
    try {

        const info =  await axios.get('https://iss.moex.com//iss/statistics/engines/futures/markets/indicativerates/securities.xml?iss.meta=off&date='+date)
       
        return info.data

     } catch (err) {
       console.log(err)
  
     }
       
     
  }


const getToday= async (req, res)=>{

    const getTodayCurency =  getCurency('today')
    res.status(200).json(getTodayCurency)

}

const getAnotherDay= async (req, res)=>{
    
    const {date}= req.body 
    const getAnotherDayCurency =  getCurency(date)
    res.status(200).json(getAnotherDayCurency)

}

module.exports= {
    getToday,
    getAnotherDay

}




