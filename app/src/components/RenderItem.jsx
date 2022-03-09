import { useState, useEffect } from "react";
import { getData } from "src/connectors/getData";
import Button from "src/components/Button";

export default function RenderItem({ id }) {
    const [item, setItem] = useState(null);

    useEffect(async () => {
        const res = await getData(id);
        console.log(res);
        setItem(res);
    }, []);

    return (
        item && (
            <section>
                <Button>Back to home</Button>
                <h2>Name: {item?.name || "cant find item sorry..."}</h2>
                <div>Code: {item?.mode}</div>
                <div>Origin: {item?.origin}</div>
                <div>Status: {item?.status}</div>
                <div>Type: {item?.type}</div>

                {/* render cargos */}
                <div className="bg-gray-200 p-3">
                    <h3 className="font-bold">Cargos:</h3>
                    <ul>
                        {item?.cargo?.map((item, i) => (
                            <ul key={i} className="bg-white border-b-2">
                                <li>Type:{item?.type || "not specified"}</li>
                                <li>destination:{item?.destination}</li>
                            </ul>
                        ))}{" "}
                    </ul>
                </div>
            </section>
        )
    );
}
