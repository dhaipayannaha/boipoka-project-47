import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utility/addToDB';
import Book from '../Book/Book';

const ReadList = () => {
    const [readList, setReadList] = useState([])
    const [sort, setSort] = useState('')
    const data = useLoaderData()

    useEffect(() => {
        const storedBookData = getStoredBook()
        const convertedBook = storedBookData.map(book => Number(book))
        const myReadList = data.filter(book => convertedBook.includes(book.bookId))
        setReadList(myReadList)
    }, [])

    const handleSort = (type) => {
        setSort(type)
        if(type === "pages"){
            const soredByPage = [...readList].sort((a,b) => a.totalPages - b.totalPages);
            setReadList(soredByPage)
        }

        if(type === "rating"){
            const soredByRating = [...readList].sort((a,b) => a.rating - b.rating);
            setReadList(soredByRating)
        }
    }


    return (
        <div>
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1">Sort By: {sort ? sort : ''}</div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a onClick={() => handleSort('pages')}>Pages</a></li>
                    <li><a onClick={() => handleSort('rating')}>Ratings</a></li>
                </ul>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Read Book List</Tab>
                    <Tab>My Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2>ReadcList {readList.length}</h2>
                    {
                        readList.map(b => <Book key={b.bookId} book={b}></Book>)
                    }
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;