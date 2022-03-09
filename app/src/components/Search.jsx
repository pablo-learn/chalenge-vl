import { useState, useEffect } from "react";
import { getData } from "src/connectors/getData";

export default function Search({ setShipments }) {
    const [target, setTarget] = useState("");

    useEffect(async () => {
        // cuando i target cambie buscar datos y setearlos en el estado semi global

        const res = await getData(target);
        // const bool = res.length > 0 || Boolean(res?.name);

        res.length ? setShipments(res): setShipments([res]);
    }, [target]); //  S1000

    /* 
    TODO: mejorar la forma en la que se está buscando, optimizarla, puede ser en menos líneas!
    */
    return (
        <>
            <div className="flex items-center justify-center ">
                <div className="flex border-2 border-gray-200 rounded">
                    <input
                        type="text"
                        className="px-4 py-2 w-80"
                        placeholder={"search by id"}
                        onChange={event => {
                            setTarget(event.target.value);
                        }}
                        value={target}
                    />
                </div>
            </div>
        </>
    );
}
