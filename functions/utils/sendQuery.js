const axios = require('axios');
require('dotenv').config();

module.exports = async(query,variables) => {

    try {
        const {
            data: {data, errors},
         } = await axios({
            url: 'https://graphql.fauna.com/graphql',
            method: 'POST',
            headers:{
                Authorization: `Bearer ${process.env.FAUNA_SECRET_KEY}`,
            },
            data:{
                query,
                variables,
            },
        });
        if(errors){
            console.log(errors);
            throw new Error('Something went wrong in sendQuery.js');
        }
        return data;
        
         }catch(error){
          console.error(error)
          return formattedResponse(500,{error: 'Something went wrong in sendQuery'});    
        }  

    
}