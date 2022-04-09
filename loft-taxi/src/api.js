export const serverLogin = async (email, password) => {
    return fetch(
        `https://loft-taxi.glitch.me/auth?username=${email}&password=${password}`
    ).then(res => res.json()).then(data => data.success).catch(error=>console.log('Error: '+ error))
}

export const serverLogin2 = async (email, password) => {
    const data = {
        'email': email,
        'password': password
    }
    return fetch(
        `https://loft-taxi.glitch.me/auth`,{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(data)
    }
    ).then(res => res.json()).catch(error=>console.log('Error: '+ error))
}

export const postCards = async (cardNumber, expiryDate, cardName, cvc) => {
    const data = {
        'cardNumber': cardNumber,
        'expiryDate': expiryDate,
        'cardName': cardName,
        'cvc': cvc,
        'token': 'AUTH_TOKEN'
    }
    return fetch(
        `https://loft-taxi.glitch.me/card`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }
    ).then(res => res.json()).catch(error=>console.log('Error: '+ error))
}

export const getCards = async (token) => {
    return fetch(
        `https://loft-taxi.glitch.me/card?token=${token}`, {method: 'GET'}
    ).then(res => res.json()).catch(error=>console.log('Error: '+ error))
}

export const registration = async (data) => {
    // const data = {
    //     'email': email,
    //     'password': password,
    //     'name': name,
    //     'surname': surname
    // }
    return fetch(
        `https://loft-taxi.glitch.me/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }
    ).then(res => res.json()).catch(error=>console.log('Error: '+ error))
}

export const route = async (address1, address2) => {
    return fetch(
        `https://loft-taxi.glitch.me/route?address1=${address1}&address2=${address2}`
    ).then(res => res.json()).catch(error=>console.log('Error: '+ error))
}

export const addressList = async () => {
    return fetch(
        `https://loft-taxi.glitch.me/addressList`
    ).then(res => res.json()).catch(error=>console.log('Error: '+ error))
}