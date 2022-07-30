export function BookDetails({ book, setIsChecked }) {
    return <section className="book-details flex column">
        <div className="book-title flex">
            <div>{book.title}</div>
            <div><input type="checkBox" name="" id="" checked={book.isCheck} onChange={(ev) => setIsChecked(ev.target.checked, book._id)} /></div>
        </div>
        <div className="book-author">{book.author}</div>
        <div className="book-desc">{book.description}</div>
        <div className="book-rating">Rating: {book.rating}</div>
        <div className="book-price">Price: ${book.price}</div>
    </section>
}