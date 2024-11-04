import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from "../components/Footer";

import axios from 'axios';
import LoadingDetail from '../components/LoadingDetail';
import StarRating from '../components/StarRating';
import Banner from '../components/Banner';
function BookDetail() {
  const { bookId } = useParams(); // Get the bookId from the URL parameters
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(`/database.json`);
        setBook(response.data.find(item => item.id === bookId)); // Adjust based on the API response structure
      } catch (err) {
        setError('Error fetching book details');
      } finally {
        setLoading(false);
      }
    };

    fetchBookDetails();
  }, [bookId]);

  // Loading state

  return (<>
    <Banner/>
    {loading ? (<LoadingDetail />) : (
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <img alt="ecommerce" src={"https://st.iqraa.opu.dz/api/image/book/" + book.cover} class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" />
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 class="text-sm title-font text-gray-500 tracking-widest">{book.categories[0].name}</h2>
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{book.title}</h1>
              <StarRating rating={book.rating} />
              <p class="leading-relaxed">{book.summary}</p>
              {book.authors.map(author => (
                <div class="flex mt-2 items-center  ">
                  <div class="shadow-lg rounded-2xl bg-white dark:bg-gray-800 p-2">
                    <div class="flex-row gap-4 flex justify-center items-center">
                      <div class="flex-shrink-0">
                        <a href="#" class="relative block">
                          <img alt="profil" src="data:image/png;base64,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" class="mx-auto object-cover rounded-full h-8 w-8 " />
                        </a>
                      </div>
                      <div class=" flex flex-col">
                        <span class="text-lg font-medium text-gray-600 dark:text-white">
                          {author.name}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>))}
              <p>

              </p>
              <div class="flex items-center justify-between">
                <span class="text-3xl font-bold text-gray-900 dark:text-white">{book.pricing + ' DZ'}</span>

              </div>
            </div>
          </div>
        </div>
      </section>)}
    <Footer />
  </>);
}


export default BookDetail;