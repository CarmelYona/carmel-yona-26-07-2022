export const ChatPreview = ({ msg }) => {
    return <section className="chat-preview">
        <div className="msg-wrapper flex column">
            <div className="msg-header">{msg?.by.username}</div>
            <div className="msg-body">{msg?.txt}</div>
        </div>
    </section>
}