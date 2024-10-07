import {useRouteError} from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.log(error);

    return (
        <>
            <h1>ErrorPage</h1>
            {error.message}

        </>
    )
}