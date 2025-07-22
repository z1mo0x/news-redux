import { NavLink } from "react-router"
import styles from "./LinkButton.module.css"

type Props = {
    to: string;
    children: React.ReactNode;

}

function LinkButton({ to, children }: Props) {
    return (
        <NavLink className={styles.button} to={to}>{children}</NavLink>
    )
}

export default LinkButton