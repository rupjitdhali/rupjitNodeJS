async function apiCall() {
    try {
        let response = await fetch("https://ai.suhail.app");
        console.log(response.data);
        console.log(response.status);
    } catch (error) {
        console.log(error);
    }    
}

apiCall();