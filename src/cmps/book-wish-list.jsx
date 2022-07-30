import { BookPreview } from "./book-preview";


export function BookWishList({ wishList, removeBook }) {
    var totalPrice = 0
    calcPrice()
    function calcPrice() {
        wishList.map(wish => {
            totalPrice += (+wish.price)
        })
        totalPrice = +totalPrice.toFixed(2)
    }

    return <section className="book-wish-list-wrapper flex column">
        <div className="wish-list-header">
            <h1>Wish list</h1>
        </div>
        <div className="preview-footer-wrapper flex column">
            <div>
                {wishList && wishList.map((book, idx) => {
                    return <BookPreview removeBook={removeBook} book={book} key={idx} />
                })}
            </div>
            <div className="wish-list-footer flex">
                <div className="footer flex">
                    <div>
                        <span>Number of items:</span> {wishList.length}
                    </div>
                    <div>
                        <span>Total price:</span> ${totalPrice} </div>
                </div>
            </div>
        </div>
    </section>
}