import React from 'react'

const MessageBox = () => {
    return (
        <section className={`alert alert-${props.variant || "danger"}`}>
        {/* Show the content of the message */}
        {props.children}
      </section>
    )
}

export default MessageBox
