import { useDispatch, useSelector } from 'react-redux'
import Post from '../Post/Post'
import styles from './Hero.module.css'
import { type AppDispatch, type RootState } from '../../store/store'
import { fetchPosts } from '../../store/actions/postsActions'
import { useEffect } from 'react'
import InfoBlock from '../InfoBlock/InfoBlock'

type Props = {}

const text: string[] = [];

function Hero({ }: Props) {

    const dispatch = useDispatch<AppDispatch>()
    const { posts, error, loading } = useSelector((state: RootState) => state.posts)

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);


    return (
        <div className={styles.hero}>
            <div className={styles.hero__wrapper}>
                <div className={styles.hero__title}>Новость недели</div>
                {
                    loading
                        ?
                        (<p>Загрузка...</p>)
                        :
                        error
                            ?
                            (<p>Ошибка: {error}</p>)
                            :
                            <div className={styles.hero__post}>
                                {posts.length > 0
                                    ? <Post className={`${styles.post__main} `} key={posts[0].id} title={posts[0].title} text={posts[0].body} id={posts[0].id} />
                                    : ''
                                }
                            </div>
                }
            </div>
            <InfoBlock text={text} />


        </div >
    )
}

export default Hero