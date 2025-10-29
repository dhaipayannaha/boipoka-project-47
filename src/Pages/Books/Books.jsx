import React, { Suspense, useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {
    // const [allBooks, setAllBooks] = useState([])

    // useEffect(() => {
    //     fetch('../../../public/booksData.json')
    //         .then(res => res.json())
    //         .then(data => setAllBooks(data))
    // }, [])
    // console.log(allBooks)

    // const bookPromise =  fetch('./booksData.json')
    // .then(res => res.json());



    return (
        <div>
            <h1 className='text-3xl text-center p-6'>Books</h1>

            <Suspense fallback ={<span> Loadding ...</span>}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                    data.map(book => <Book key={book.bookId} book={book}></Book>)
                }
                </div>
            </Suspense>
        </div>
    );
};

export default Books;