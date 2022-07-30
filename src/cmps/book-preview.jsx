

export function BookPreview({ book, removeBook }) {
    return <section className="book-preview flex">
        <div className="book-title-wish flex">{book.title}</div>
        <button onClick={() => removeBook(book._id)} className="remove-wish">x</button>
    </section>
}