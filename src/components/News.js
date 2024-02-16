import '../componentsCSS/news.css';
import Post from './Post';

function News() {
    return (
        <div className="newsWrapper">
            <h1 className="newsTitle">News:</h1>
            <Post />
            <Post />
            <Post />
        </div>
    );
}

export default News;