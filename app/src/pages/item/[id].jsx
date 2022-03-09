import { useRouter } from "next/router";
import Layout from "components/Layout";
import TitlePage from "components/TitlePage";
import RenderItem from "src/components/RenderItem";

export default function id() {
    const router = useRouter();
    const { id } = router.query;
    // console.log(id);

    // obtener el id de forma asincronica
    // ocurren problemas en la recarga si no obtenemos el id de esa manera
    // osea manejando la asincronica!!
    // para revisar eso asi pasarle correctamente al componente el id
    return (
        <Layout titlePage={`specific element: ${id}`}>
            <TitlePage title={`Item: ${id || "id no provided"}`} />
            {id && <RenderItem id={id} />}
        </Layout>
    );
}
