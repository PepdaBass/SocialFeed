

const DisplayPosts = (props) => {
    return ( 
        <table>
            {props.parentPosts.map((post, i) => {
                return (
                    <tbody key={i}>
                    <tr>
                        <td>Name: {post.userName}<br /></td>
                    </tr>
                    <tr>
                        <td>Post: {post.content}<br /></td>
                    </tr>
                    <tr>
                        <td><label>Like</label><input type="checkbox"/>
                        <label>Dislike</label><input type="checkbox"/></td>
                    </tr>
                    </tbody>
                )  
            })}
        </table>
     );
}
 
export default DisplayPosts;