

const DisplayPosts = (props) => {
    return ( 
        <table>
            {props.parentPosts.map((post, i) => {
                return (
                    <tbody>
                    <tr>Name: {post.userName}</tr>
                    <tr>Post: {post.content}</tr>
                    <tr><button type="button">Like</button><button type="button">dislike</button></tr>
                    </tbody>
                )  
            })}
        </table>
     );
}
 
export default DisplayPosts;