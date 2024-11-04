import StarRating from "./StarRating";

export const BookCard = ({ data,price }) => {
    console.log(price)
    return (

        <div class="max-w-2xl mx-auto py-5 px-2">


            <div class="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
                <div className="relative inline-block">
                    <a href={"/books/" + data.id}>
                        <img class="rounded-t-lg p-8"
                            src={"https://st.iqraa.opu.dz/api/image/book/" + data.cover}
                            alt="product image" />
                    </a>
                    {data.releaseDate.split('-')[0]==="2024" ? (<span className="absolute top-20 left-0 bg-green-500 text-white text-xl font-bold py-2 px-12 ">
                        جديد
                    </span>) : (<></>) }
                    
                </div>

                <div class="px-5 pb-5">
                <h2 class="text-sm title-font text-gray-500 tracking-widest">{data.categories[0].name}</h2>
                    <a href="#">
                        <h3 class="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">

                            {data.title.length > 50 ? `${data.title.slice(0, 50)}...` : data.title}
                        </h3>
                    </a>
                    <StarRating rating={data.rating} />

                    <div class="flex items-center justify-between">
                        
                    <span class="title-font font-medium text-2xl text-gray-900">{data.pricing} DZ</span>
                        
                    </div>
                </div>
            </div>
        </div>
    )
};

/* */
