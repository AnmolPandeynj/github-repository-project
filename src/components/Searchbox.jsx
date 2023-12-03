
import './SearchBox.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useState} from 'react'



function Searchbox(props) {
  const [message,setMessage] = useState('');
  //const [updated, setUpdated] = useState(message);
    const [state,setState] = useState(false);
    const element = <FontAwesomeIcon icon={faMagnifyingGlass} className='icon' onClick={handleClick}/>
    const elementShake = <FontAwesomeIcon icon={faMagnifyingGlass} className='icon' shake onClick={handleClick}/>  
    

    function handleClick() {
      //setUpdated(message);
      setState(false);
      props.setInput(message);
    }


    let typingTimer; // Timer to track typing interval
    const typingTimeout = 1000; // 1 second timeout
    const resetTimeout = 10000;

    function searchComplete(event) {
      const inputValue = event.target.value;

        clearTimeout(typingTimer);
        // Start a new timer to check if the user has finished typing
    typingTimer = setTimeout(() => {
         // Typing is complete, update the state
      setState(true);
      setMessage(inputValue);
        // Typing is complete, update the state
        setTimeout(() => {
            setState(false);
          }, resetTimeout);
        }, typingTimeout);
      }

      function handleEnterKeyPress(event) {
        if (event.key === 'Enter') {
          handleClick();
          setState(false)
        }
      }
    
    return <> <div className='searchbox'>
        <div className='color color-1'></div>
        <div className='color color-2'></div>
        <div className='color color-3'></div>
        <div className='color color-4'></div>
        <div className='color color-5'></div>
        <input type="text" name="text" class="input" placeholder="Name goes here" input={message} onChange={searchComplete} onKeyDown={handleEnterKeyPress} />
        <i>{state ? elementShake : element} </i>
        </div>
        
        </>
};

export default Searchbox