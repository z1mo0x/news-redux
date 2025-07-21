import styles from './Posts.module.css'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts, setCurrentPage } from '../../store/actions/postsActions';
import { type AppDispatch, type RootState } from '../../store/store';
import Post from '../../components/Post/Post';
import Layout from '../../components/Layout/Layout';
import { useSearchParams } from 'react-router';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import gsap from 'gsap';

type Props = {

}

gsap.registerPlugin(ScrollToPlugin)

export default function Posts({ }: Props) {

    const [searchParams, setSearchParams] = useSearchParams();
    const pageParam = searchParams.get('page');
    const pageFromUrl = pageParam ? parseInt(pageParam, 10) : 1;

    const dispatch = useDispatch<AppDispatch>();
    const { posts, loading, postsPerPage, error } = useSelector((state: RootState) => state.posts);

    const currentPage = useSelector((state: RootState) => state.posts.currentPage);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

    const totalPages = Math.ceil(posts.length / postsPerPage)


    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    useEffect(() => {
        dispatch(setCurrentPage(pageFromUrl));
    }, [pageFromUrl, dispatch]);
    if (loading) return <p>Загрузка...</p>;

    if (error) return <p>Ошибка: {error}</p>;

    const handlePageChange = (page: number) => {
        gsap.to(window, {
            duration: .5,
            scrollTo: 0
        })
        dispatch(setCurrentPage(page));
        setSearchParams({ page: page.toString() });
    };

    return (
        <Layout>
            <div className={styles.posts__wrapper}>
                {currentPosts.map(el => <Post key={el.id} title={el.title} id={el.id} text={el.body} />)}
            </div>
            <div className={styles.posts__pagination}>
                {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                    page =>
                        <button key={page} onClick={() => { handlePageChange(page) }} disabled={page === currentPage}>
                            {page}
                        </button>
                )}
            </div>
        </Layout>
    )
}