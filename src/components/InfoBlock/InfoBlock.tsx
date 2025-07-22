import styles from "./InfoBlock.module.css";
import heroImage from "../../assets/hero-image.jpg"
import LinkButton from "../LinkButton/LinkButton";

type Props = {
    text: string[];
}

function InfoBlock({ text }: Props) {
    return (
        <div className={styles.hero__block}>
            <div className={styles.hero__image}>
                <img src={heroImage} alt="" />
            </div>
            <div className={styles.hero__info}>
                <div className={styles.hero__text}>
                    {text.map(item => (
                        <p>{item}</p>
                    ))}
                </div>
                <LinkButton to={'/posts'}>Перейти к новостям</LinkButton>
            </div>
        </div>
    )
}

export default InfoBlock