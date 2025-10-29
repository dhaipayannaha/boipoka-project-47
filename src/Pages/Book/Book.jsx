// import React, { use } from 'react';
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const Book = ({ book }) => {

    // const data = use(bookPromise)
    console.log(book)
    const {bookId, bookName, author, image, review, rating, category, tags, totalPages, yearOfPublishing, publisher} = book

    return (
        <Link to={`/bookDetails/${bookId}`}>
        <div className="card bg-base-100 w-96 shadow-sm border p-6">
            <figure className="bg-gray-100 w-2/3 mx-auto p-4">
                <img
                className="h-[166px]"
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <div className="flex justify-center gap-4">
                    {
                    tags.map(tag => <button>{tag}</button>)
                }
                </div>
                <h2 className="card-title">
                   {bookName}
                    <div className="badge badge-secondary">{yearOfPublishing}</div>
                </h2>
                <p>Book By : {publisher}</p>
                <div className="border-t-2 border-dashed"></div>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{category}</div>
                    <div className="badge badge-outline">{rating} <FaStar /></div>
                    
                </div>
            </div>
        </div>
        </Link>
    );
};

export default Book;