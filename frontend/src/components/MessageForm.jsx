import React from 'react'

const MessageForm = () => {
  return (
    <>
    <div className="container form-component message-form">
        <h2>Send Us A Message</h2>
        <form>
          <div>
            <input
              type="text"
              placeholder="First Name"
            />
            <input
              type="text"
              placeholder="Last Name"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Email"
            />
            <input
              type="number"
              placeholder="Mobile Number"
            />
          </div>
          <textarea
            rows={7}
            placeholder="Message"
          />
          <div style={{ justifyContent: "center", alignItems: "center" }}>
            <button type="submit">Send</button>
          </div>
        </form>
        <img src="/Vector.png" alt="vector" />
      </div>
    </>
  )
}

export default MessageForm