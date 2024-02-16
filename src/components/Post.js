import '../componentsCSS/post.css';
import photo from '../assets/photo.jpg';

function Post(){
    return (
        <article className="post">
                <div className="postHeader">
                    <div className="leftSide">
                        <h3 className="postTitle">Lorem ipsum i ten tego</h3>
                        <p className="date">11:58:36 15-02-2024</p>
                    </div>
                    <div className="author">
                        <p className="userName">Marek Książek</p>
                        <img src={photo} alt="userPhoto" className="userPhoto"/>
                    </div>
                </div>
                <div className="postBody">
                    <p className="postText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptatum a rerum suscipit alias dolorem explicabo at fugit cum, unde, dolor error laudantium corporis sint, voluptatem tempore expedita tenetur. Dolorem impedit mollitia fugit autem exercitationem excepturi obcaecati vero reprehenderit ratione aliquam in reiciendis voluptatibus, quae nemo ipsum quod porro recusandae!</p>
                </div> 
            </article>
    );
}

export default Post;