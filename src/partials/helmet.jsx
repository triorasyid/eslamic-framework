import { Helmet as ReactHelment } from "react-helmet-async";

export function Helmet({ children }) {
    return (
        <ReactHelment>
            {children}
        </ReactHelment>
    )
}