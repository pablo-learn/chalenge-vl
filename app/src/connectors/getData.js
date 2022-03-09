export const getData = async (id) => {
    console.log(`http://localhost:3000/shipments`)
    const response = await fetch(`http://localhost:3000/shipments${id ? `/${id}` : ''}`);
    const data = await response.json();
    return data;
}