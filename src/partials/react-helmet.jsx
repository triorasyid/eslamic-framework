import { Helmet } from "react-helmet-async";

export function ReactHelmet({ children }) {
    return (
        <Helmet>
            {children}
        </Helmet>
    )
}