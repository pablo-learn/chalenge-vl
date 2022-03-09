import Link from 'next/link'

export default function RenderItems({ shipments }) {
    return (
        <ul className="list-none my-5 border-t-2 pt-3 grid gap-5">
            {shipments ? (
                shipments.map((shipment, i) => (
                    <li key={i} className='border-b-2 grid'>
                        {shipment?.name || "cant find item sorry..."}
                        {shipment?.id && <Link href={`/item/${shipment?.id}`}><a className='hover:text-blue-500 underline'>See element</a></Link>}
                    </li>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </ul>
    );
}
