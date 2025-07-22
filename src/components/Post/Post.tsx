import styles from './Post.module.css';

type PostProps = {
    id: number;
    title: string;
    text: string;
    className: string;
};

export default function Post({ id, className, title, text }: PostProps) {
    return (
        <div className={`${styles.post} ${className ? className : ''}`}>
            <div className={styles.post__number}>{id}</div>
            <div className={styles.post__title}>{title}</div>
            <div className={styles.post__text}>{text}</div>
        </div>
    );
}
