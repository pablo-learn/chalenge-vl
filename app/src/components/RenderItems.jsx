export default function RenderItems({ shipments }) {
    return (
        <ul className="list-none my-5 border-t-2 pt-3">
            {shipments ? (
                shipments.map((shipment, i) => (
                    <li key={i}>
                        {shipment?.name || "cant find item sorry..."}
                    </li>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </ul>
    );
}
