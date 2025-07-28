import { useDispatch, useSelector } from 'react-redux'
import Post from '../Post/Post'
import styles from './Hero.module.css'
import { type AppDispatch, type RootState } from '../../store/store'
import { fetchPosts } from '../../store/actions/postsActions'
import { useEffect } from 'react'
import InfoBlock from '../InfoBlock/InfoBlock'

type Props = {}

const text: string[] = [
    'Добро пожаловать на наш сайт — здесь вы всегда найдете самые свежие и актуальные материалы. Мы собираем для вас лучшие статьи, новости и аналитические обзоры, чтобы вы были в курсе событий и могли принимать обоснованные решения.',
    'Каждый день мы публикуем новые посты, которые помогут вам расширить кругозор, узнать что-то новое и вдохновиться на действия. Наш контент тщательно отбирается и создается с заботой о вас.',
    'Присоединяйтесь к нашей аудитории, читайте, комментируйте и делитесь понравившимися материалами. Вместе мы создаем сообщество людей, стремящихся к развитию и новым знаниям.'];

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
                        (<Post className={`${styles.post__main}`} key={0} title={'...'} text={'...'} id={0} />)
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