import Head from "next/head";

export default function Layout({ children, titlePage }) {
    return (
        <>
            <Head>
                <title>{titlePage}</title>
            </Head>
            <div className="container p-10">{children}</div>
        </>
    );
}
