export const getAllLaunches = async (page, limit) => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                page,
                limit
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/launches/query", config)
    let data = await res.json();
    console.log(data);
    return data;
}

export const getIdLaunches = async (launchId) => {
    const response = await fetch(`https://api.spacexdata.com/v4/launches/${launchId}`);
    const data = await response.json();
    return data;
}