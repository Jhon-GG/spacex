

export const getIdRoadster = async (roadsterId) => {
    const response = await fetch(`https://api.spacexdata.com/v4/roadster/${roadsterId}`);
    const data = await response.json();
    return data;
}

export const getRoadster = async () => {
    const response = await fetch("https://api.spacexdata.com/v4/roadster");
    const data = await response.json();
    return data;
}