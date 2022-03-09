import Head from "next/head";

export default function Layout({ children, titlePage }) {
    return (
        <div className="bg-stone-100 h-screen">
            <Head>
                <title>{titlePage}</title>
            </Head>
            <main className="container p-10">{children}</main>
            <footer></footer>
        </div>
    );
}
