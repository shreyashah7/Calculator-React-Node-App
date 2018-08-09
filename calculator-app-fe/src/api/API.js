const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3001'

const headers = {
    'Accept': 'application/json'
};

/* calc-app:comment - Function for sending two 
numbers and perform specified operation from the server
Input - two numbers
Output - calculator operation of two number*/
export const calculateValue = (payload) =>
    fetch(`${api}/calculator/calculate`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(res => {
        return res.json();
    }).catch(error => {
        return error;
    });
