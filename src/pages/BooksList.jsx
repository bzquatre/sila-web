import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Categories from "../components/CategorySlider";
import Footer from "../components/Footer";
import { Loading } from "../components/Loading";
import { BookCard } from '../components/BookCard';
import Pagination from '../components/Pagination';

function BookList() {
    const [books, setBooks] = useState([]);
    const [keyword, setKeyword] = useState('');
    const [currentPage, setCurrentPage] = useState(1)
    const [booksPerPage] = useState(6); 
    const [loading, setLoading] = useState(true);
        
      useEffect(() => {
        const fetchBooks = async () => {
          const response = await axios.get(`/database.json`);
          const data = await response.data;
          setBooks(data);
          setLoading(false)
      };

      fetchBooks();
      }, []);
      const filteredBooks = books.filter(book => {
        const searchTerm = keyword.toLowerCase();
        return (
            book.title.toLowerCase().includes(searchTerm) ||
            book.ISBN.toLowerCase().includes(searchTerm) ||
            book.abstract.toLowerCase().includes(searchTerm) ||
            book.publishingHouse.toLowerCase().includes(searchTerm) ||
            book.authors.some(author => author.name.toLowerCase().includes(searchTerm)) ||
            book.categories.some(category => category.name.toLowerCase().includes(searchTerm))
        );
    });
    // Get current books for the current page
    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Calculate total pages
    const totalPages = Math.ceil(filteredBooks.length / booksPerPage);
    return ( <>
    <div class="flex  w-screen items-center justify-center p-5">
  <div class="w-full rounded-lg bg-gray-200  ">
    <div class="flex">
      <div class="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5">
        <svg viewBox="0 0 20 20" aria-hidden="true" class="pointer-events-none absolute w-5 fill-gray-500 transition">
          <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
        </svg>
      </div>
      <input type="text"  class="w-full bg-white pl-2 text-base font-semibold outline-0" placeholder="" id="" value={keyword}
              onChange={(e) => setKeyword(e.target.value)} />
      <input type="button" value="" class="bg-blue-500 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors"/>
    </div>
  </div>
</div>
    {loading ? (
        <Loading />
      ) : (
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
    {currentBooks.map((book) => (<BookCard data={book} />))}
    </div>
  </div>
</section>  ) }
<Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={paginate}/>
<Footer/> 
    </> );
}

export default BookList;