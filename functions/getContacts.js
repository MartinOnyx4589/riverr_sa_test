const axios = require('axios');
require('dotenv').config();
const{GET_CONTACTS} = require('./utils/contactQueries.js');
const sendQuery = require('./utils/sendQuery');
const formattedResponse = require('./utils/formattedResponse');

exports.handler = async(event)=>{
    
  try{
      const res = await sendQuery(GET_CONTACTS);
      const data = res.allContacts.data;
      return formattedResponse(200,data);
  }catch(error){
    console.error(error)
    return formattedResponse(500,{error: 'Something went wrong'});    
  }
      
      
};