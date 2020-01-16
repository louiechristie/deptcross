import  React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {

  const [posts, updatePosts] = useState([]);

  fetch(`http://test.local/wp-json/wp/v2/posts`)
  .then((response)=> response.json())
  .then((json)=> {
    updatePosts(json);
  })

  return (
    <div className="App">
      {posts && posts.map((post: any)=> {
        // return <pre>{JSON.stringify(posts, null, "  ")}</pre>
              return <>
                <h2>{(post.title.rendered.toString())}</h2>

                <p>{(post.content.rendered.toString())}</p>
              
              </>

      })}

      <hr />

      <h2><pre>Debug section</pre></h2>

      <pre>{JSON.stringify(posts, null, "  ")}</pre>
    </div>
  );
}

export default App;
