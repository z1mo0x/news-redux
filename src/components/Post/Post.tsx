import styles from './Post.module.css';

type PostProps = {
    id: number;
    title: string;
    text: string;
};

export default function Post({ id, title, text }: PostProps) {
    return (
        <div className={styles.post}>
            <div className={styles.post__number}>{id}</div>
            <div className={styles.post__title}>{title}</div>
            <div className={styles.post__text}>{text}</div>
        </div>
    );
}
