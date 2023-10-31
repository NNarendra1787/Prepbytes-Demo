import React from 'react'
import msg from "../img/message.png"

function DownPage() {
  return (
    <div>
        <div className='Message-icon'>
        {/* <i class="fa-regular fa-message"></i> */}
        {/* <a href="https://www.flaticon.com/free-icons/comments" title="comments icons">Comments icons created by Graphics Plazza - Flaticon</a> */}
          <img src={msg} alt="/" />
        </div>
        <div className='down'>
            <h4>Need Help? Talk to us on </h4>
            <h4>079 6900 2111 or</h4>
            <h4>Request Callback</h4>
        </div>
    </div>
  )
}

export default DownPage