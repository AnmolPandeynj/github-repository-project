import React, {useState, useEffect}  from 'react';
import axios from 'axios';
import './App.css'
import Repositories from './components/Repositories'
import Searchbox from './components/searchbox'
import UserProfile from './components/userProfile'
import Pagination from './components/pagination';
function App() { 
    const [input,setInput] = useState('');
    const [profile,setProfile] = useState({});
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    // fetching API
    var API_url = 'https://api.github.com/users/' + input;
    console.log('fetching API : ' + API_url)
    // fetching repositories
    var repository_url = 'https://api.github.com/users/' + input + '/repos?sort=created' //https://api.github.com/users/google/repos
    useEffect (() => {
        const fetchPosts = async () => {
            setLoading(true);
            try {
            const res = await axios.get( API_url);
            const res2 = await axios.get(repository_url);
           
            setPosts(res2.data);
            setProfile(res.data);
            setLoading(false);
            }
            catch (error) {
                console.error("Error fetching data:", error);
                alert("An error occurred while fetching data. Please try again."); 
              
               }
        }
        fetchPosts();
    },[input]);


    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);


    const paginate = (pageNumber) => setCurrentPage(pageNumber);


return (
<>
    <Searchbox setInput = {setInput}/>
    <UserProfile profile = {profile} loading={loading}/>
    <Repositories posts={currentPosts} loading={loading} />
    <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
</>
)
}

export default App
