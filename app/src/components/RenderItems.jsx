export default function RenderItems({ shipments }) {
    return (
        <>
            {shipments ? (
                shipments.map((shipment, i) => (
                    <li key={shipment?.id}>
                        {shipment?.name || "name isnt provided"}
                    </li>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </>
    );
}
