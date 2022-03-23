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

export const postCard = async (cardNumber, expiryDate, cardName, cvc) => {
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

export const getCard = async () => {
    return fetch(
        `https://loft-taxi.glitch.me/card?token=AUTH_TOKEN`
    ).then(res => res.json()).catch(error=>console.log('Error: '+ error))
}