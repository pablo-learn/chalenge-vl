import Layout from "src/components/Layout";
import { getData } from "src/connectors/getData";
import { useState, useEffect } from "react";
import RenderItems from "src/components/RenderItems";
import TitlePage from "src/components/TitlePage";

export default function Home() {
    // states
    const [shipments, setShipments] = useState(null);

    // use effect t fetch the data
    useEffect(async () => {
        const res = await getData();
        setShipments(res);
    }, []);
    // use effect to set data into state
    /* useEffect(async () => {
        setShipments(res);
    }, [shipments]); */

    return (
        <>
            <Layout titlePage='Vexel chaleng.'>
                <TitlePage> Chaleng. vexel </TitlePage>
                <RenderItems {...{ shipments }} />
            </Layout>
        </>
    );
}
