import { useRouter } from "next/router";
import Layout from "components/Layout";
import TitlePage from "components/TitlePage";
import RenderItem from "src/components/RenderItem";

export default function id() {
    const router = useRouter();
    const { id } = router.query;
    console.log(id);

    return (
        <Layout titlePage={`specific element: ${id}`}>
            <TitlePage title={`Item: ${id || "id no provided"}`} />
            <RenderItem id={id} />
        </Layout>
    );
}
