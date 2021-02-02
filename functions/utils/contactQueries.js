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

const CREATE_CONTACT =`
mutation($name: String!, $message: String!, $email: String!) {
    createContact(data: {name:$name, message:$message, email:$email}) {
        name
        _id
        message
        email
    }
}
`;

module.exports = {
    GET_CONTACTS,
    CREATE_CONTACT,
}