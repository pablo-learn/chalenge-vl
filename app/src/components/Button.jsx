import Link from "next/link";

export default function Button() {
    return (
        <Link href="/">
            <a className="p-1 bg-blue-500">BACK TO HOME PAGE!</a>
        </Link>
    );
}
