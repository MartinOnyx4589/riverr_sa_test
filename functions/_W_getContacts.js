const axios = require('axios')
require('dotenv').config();

exports.handler = async (event) =>{
    const GET_CONTACTS = `
    query{
        allContacts{
          data{
            name
            message
            email
            _id
          }
        }
      }`;
      const{data} = await axios({
        url: 'https://graphql.fauna.com/graphql',
        method: 'POST',
        headers:{
            Authorization: `Bearer ${process.env.FAUNA_SECRET_KEY}`
        },
        data: {
            query: GET_CONTACTS,
            variables:{}
        }

      });
      console.log(data);
      return {statusCode: 200,
    body: JSON.stringify(data)
};
};
