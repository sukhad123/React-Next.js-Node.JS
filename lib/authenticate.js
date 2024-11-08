import { jwtDecode } from 'jwt-decode';
function setToken(token) {
    localStorage.setItem('access_token', token);
}

export function getToken() {
    if (typeof localStorage !== 'undefined') {
        return localStorage.getItem('access_token');
    }
    return null; // Or handle appropriately if localStorage is not available
}
 
 

export function readToken() {
    const token = getToken();
    return (token) ? jwtDecode(token) : null;
}

export function isAuthenticated() {
    const token = readToken();
    return (token) ? true : false;
}

export function removeToken() {
    localStorage.removeItem('access_token');
}
export async function authenticateUser(user, password) {
    const res = await fetch("https://node-backend-1-t6x9.onrender.com/signIn", {
        method: 'POST',
        body: JSON.stringify({ userName: user, password: password }),
        headers: {
            'content-type': 'application/json',
        },
    });

    const data = await res.json();


    if (res.status === 200) {
        setToken(data.token);
        return true;
    } else {
        throw new Error(data.message);
    }
}
