const axios = require('axios');
require('dotenv').config();
const{CREATE_CONTACT} = require('./utils/contactQueries.js');
const sendQuery = require('./utils/sendQuery');
const formattedResponse = require('./utils/formattedResponse');

exports.handler = async(event)=>{
    const {name,message,email}= JSON.parse(event.body);
    const variables = {name, message, email};
  try{
      const {createContact: createdContact} = await sendQuery(CREATE_CONTACT,variables);
      return formattedResponse(200,createdContact);
  }catch(error){
    console.error(error)
    return formattedResponse(500,{error: 'Something went wrong still'});    
  }     
};