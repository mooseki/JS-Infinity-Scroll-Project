// Unsplash API

const count = 10;
const apiKey = 's4BM0MhEJQ7h2_lfFKEK4PAUbfcBCl6L1kGc310Sv_c';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${}&count=${count}`

// Get photos from Unspash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data)
    } catch (error) {
        // Catch Error Here
    }
}

// On Load
getPhotos();