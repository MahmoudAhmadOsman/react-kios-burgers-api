import React from 'react'

const MessageBox = (props) => {
    return (
        <section className={`alert alert-${props.variant || "danger"}`}>
        {/* Show the content of the message */}
        {props.children}
      </section>
    )
}

export default MessageBox
