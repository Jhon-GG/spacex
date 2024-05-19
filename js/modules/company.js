
export const getCompanyById = async (companyId) => {
    const response = await fetch(`https://api.spacexdata.com/v4/company/${companyId}`);
    const data = await response.json();
    return data;
}


export const getCompany = async ()=>{

    let res = await fetch("https://api.spacexdata.com/v4/company")
    let data = await res.json();

    return data;
}