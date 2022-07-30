export const ChatPreview = ({ msg }) => {
    return <section className="chat-preview flex justify-center pad-10x">
        <div className="msg-wrapper flex column justify-center pad-10x">
            <div className="msg-header">{msg?.by.username}</div>
            <div className="msg-body">{msg?.txt}</div>
        </div>
    </section>
}