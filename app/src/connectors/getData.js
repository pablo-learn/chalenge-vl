export const getData = async id => {
    //TODO: revisar el try catch
    try {
        // console.log(`http://localhost:3000/shipments`);
        const response = await fetch(
            `http://localhost:3000/shipments${id ? `/${id}` : ""}`
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("The app have an error: ", error);
        return null;
    }
};
