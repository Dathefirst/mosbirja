const axios = require('axios')
const xml2js = require('xml2js')



const getCurency = async (date) => {  
    
    const url =    'https://iss.moex.com//iss/statistics/engines/futures/markets/indicativerates/securities.xml?iss.meta=off&date='     
       
       
        if (date !='today')
        {   // проверка даты что он выходной, и если да то заменить на предидушый рабочый день
            const dateCheck= new Date(date)
            const dateDay=dateCheck.getDay() 

            if (dateDay == 6){
                date= new Date(dateCheck.setDate(dateCheck.getDate()-1)).toISOString().substring(0,10)
            }
            else if(dateDay == 0){
                date= new Date(dateCheck.setDate(dateCheck.getDate()-2)).toISOString().substring(0,10)
            }
            else {
                date = dateCheck.toISOString().substring(0,10)
            }
        }else {date='today'}

    try {
        console.log(date)   
        // делаем респонс на апи мос биржу
        const response = await axios.get(url+date);
        if (response.status === 200) { 
           
            const [info] = await Promise.all([response.data])  
           return info
               
       }
        return false;
   } catch (err) {
        console.error(err)
        return false;
   }
}
       
 

const getToday= async (req, res)=>{

    const [getTodayCurency] = await Promise.all([getCurency('today')]) 
    

    xml2js.parseString(getTodayCurency, {mergeAttrs: true}, (err, result) =>{
           
        
        res.status(200).json(result)
    })
  

}

const getAnotherDay= async (req, res)=>{
    
    const {date}= req.body 
    const [getAnotherDayCurency] = await Promise.all([getCurency(date)]) 
   console.log(date)
    console.log(getAnotherDayCurency)

    xml2js.parseString(getAnotherDayCurency, {mergeAttrs: true}, (err, result) =>{

        
        
        res.status(200).json(result)
    })
  

}

module.exports= {
    getToday,
    getAnotherDay

}




