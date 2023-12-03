import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'
import {faSquareUpRight} from '@fortawesome/free-solid-svg-icons'
import './Repositories.css'

function Repositories({posts, loading}) {
    const repo_icon_1 = <FontAwesomeIcon icon={faStar} />
    const repo_icon_2 = <FontAwesomeIcon icon={faSquareUpRight} />

 if (loading) {
    return  <> <div className='repositories'>
    <div className='repo'>
                <div class="container">
                    <div class="box">
                        <span class="title loading loading-text"></span>
                        <div>
                            <strong className='loading loading-text'>Loading...</strong>
                            <p className='loading loading-text'>Loading...</p>
                            <span className='loading loading-text'>Loading...</span> <span className='loading loading-text'>Loading...</span>
                        </div>
                    </div>
                </div>              
    </div>   
</div>
<div className='repositories'>
    <div className='repo'>
                <div class="container">
                    <div class="box">
                        <span class="title loading loading-text"></span>
                        <div>
                            <strong className='loading loading-text'>Loading...</strong>
                            <p className='loading loading-text'>Loading...</p>
                            <span className='loading loading-text'>Loading...</span> <span className='loading loading-text'>Loading...</span>
                        </div>
                    </div>
                </div>              
    </div>   
</div>
<div className='repositories'>
    <div className='repo'>
                <div class="container">
                    <div class="box">
                        <span class="title loading loading-text"></span>
                        <div>
                            <strong className='loading loading-text'>Loading...</strong>
                            <p className='loading loading-text'>Loading...</p>
                            <span className='loading loading-text'>Loading...</span> <span className='loading loading-text'>Loading...</span>
                        </div>
                    </div>
                </div>              
    </div>   
</div>
<div className='repositories'>
    <div className='repo'>
                <div class="container">
                    <div class="box">
                        <span class="title loading loading-text"></span>
                        <div>
                            <strong className='loading loading-text'>Loading...</strong>
                            <p className='loading loading-text'>Loading...</p>
                            <span className='loading loading-text'>Loading...</span> <span className='loading loading-text'>Loading...</span>
                        </div>
                    </div>
                </div>              
    </div>   
</div>
</>
 }

  return (
    <>{posts.map(post => (
        <div className='repositories'>
<div className='repo'>
            <div class="container">
                <div className='fancy-color'></div>
                <div class="box">
                    <span class="title"><a href={post.html_url} target='_blank'>{post.name} {repo_icon_2}</a></span>
                    <div>
                        <strong>{post.description}</strong>
                        <p></p>
                        <span>{post.language}</span> <span>{post.stargazers_count}{repo_icon_1}</span>
                    </div>
                </div>
            </div>
        </div>   
</div>   
))}
    </>
  )
}

export default Repositories;