import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useNavigate, useSearchParams } from 'react-router-dom';


const CategorySlider = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const category = searchParams.get('category') || '';

  const handleFilterChange = (category_id) => {
    const newCategory = category_id;
    console.log(category_id)
    const params = new URLSearchParams(searchParams);
    if (newCategory) {
      params.set('category', newCategory);
    } else {
      params.delete('category');
    }
    navigate(`/books?${params.toString()}`);
  };
  const categories = [
    {
        "category_id": "bbee5aa8-0278-45f2-99ff-bac0f4decd64",
        "category_name": "العلوم الاجتماعية",
        "children_id": "624fa588-2063-44ec-b0ff-9eee44ad3fb8",
        "children_name": "علم الاجتماع"
    },
    {
        "category_id": "bbee5aa8-0278-45f2-99ff-bac0f4decd64",
        "category_name": "العلوم الاجتماعية",
        "children_id": "84dfc944-a5cb-4737-aaf6-48331915e580",
        "children_name": "المعلومات والاتصالات"
    },
    {
        "category_id": "1e3267e8-b456-4afc-9670-a7437ca79ad5",
        "category_name": "العلوم الطبية",
        "children_id": "f3a71a27-f4e4-4edb-8bcd-894214c0800f",
        "children_name": "الطب"
    },
    {
        "category_id": "bbee5aa8-0278-45f2-99ff-bac0f4decd64",
        "category_name": "العلوم الاجتماعية",
        "children_id": "1f7d25b4-9c09-4a30-8197-e0028e92729b",
        "children_name": "الأدب العربي"
    },
    {
        "category_id": "bbee5aa8-0278-45f2-99ff-bac0f4decd64",
        "category_name": "العلوم الاجتماعية",
        "children_id": "34892272-12ae-44ef-b73e-5acb80fc455e",
        "children_name": "التربية البدنية والرياضية"
    },
    {
        "category_id": "1e3267e8-b456-4afc-9670-a7437ca79ad5",
        "category_name": "العلوم الطبية",
        "children_id": "b2807ea1-b29a-48e8-9e75-c3fff5b21923",
        "children_name": "جراحة الأسنان"
    },
    {
        "category_id": "d151d75c-0ffd-4194-a87c-535358244fd8",
        "category_name": "العلوم الدقيقة وعلوم الأرض والطبيعة",
        "children_id": "06e9721e-2a9c-4523-98c0-640b41898825",
        "children_name": "الفيزياء"
    },
    {
        "category_id": "05802234-6622-4c0b-ad75-94c53f9413bc",
        "category_name": "التكنولوجيا",
        "children_id": "581bf2b7-f9bb-44b1-8faf-dfb5960f0483",
        "children_name": "الزراعة"
    },
    {
        "category_id": "d151d75c-0ffd-4194-a87c-535358244fd8",
        "category_name": "العلوم الدقيقة وعلوم الأرض والطبيعة",
        "children_id": "5ed28d20-9186-4918-8ca1-67acd585a6b7",
        "children_name": "الكيمياء"
    },
    {
        "category_id": "bbee5aa8-0278-45f2-99ff-bac0f4decd64",
        "category_name": "العلوم الاجتماعية",
        "children_id": "c65370bd-8bcd-4549-b5ab-150b8fca47a8",
        "children_name": "الاقتصاد"
    },
    {
        "category_id": "05802234-6622-4c0b-ad75-94c53f9413bc",
        "category_name": "التكنولوجيا",
        "children_id": "8902cbb3-e991-4b30-8f41-229955fa52ad",
        "children_name": "الإلكترونيات"
    },
    {
        "category_id": "d151d75c-0ffd-4194-a87c-535358244fd8",
        "category_name": "العلوم الدقيقة وعلوم الأرض والطبيعة",
        "children_id": "60258a0e-8974-48bd-ba7a-ce89f2e8e2e0",
        "children_name": "علم الأحياء"
    },
    {
        "category_id": "d151d75c-0ffd-4194-a87c-535358244fd8",
        "category_name": "العلوم الدقيقة وعلوم الأرض والطبيعة",
        "children_id": "0e9003ed-1b17-4dcd-93b0-df7540cbf809",
        "children_name": "الرياضيات"
    },
    {
        "category_id": "05802234-6622-4c0b-ad75-94c53f9413bc",
        "category_name": "التكنولوجيا",
        "children_id": "aaefcdbc-7945-4252-80f6-e873f1aa570e",
        "children_name": "الهندسة النووية"
    },
    {
        "category_id": "bbee5aa8-0278-45f2-99ff-bac0f4decd64",
        "category_name": "العلوم الاجتماعية",
        "children_id": "24f3cfc2-77b6-4c20-b1fc-d235c1658fb8",
        "children_name": "علم النفس وعلوم التربية"
    },
    {
        "category_id": "05802234-6622-4c0b-ad75-94c53f9413bc",
        "category_name": "التكنولوجيا",
        "children_id": "cfb7c03f-1195-4300-9c6f-39bd5f42261f",
        "children_name": "الهندسة المعمارية والتخطيط الحضري"
    },
    {
        "category_id": "bbee5aa8-0278-45f2-99ff-bac0f4decd64",
        "category_name": "العلوم الاجتماعية",
        "children_id": "4cf16401-43de-4a8f-ba75-0aef4b3e5bac",
        "children_name": "الفنون التشكيلية والموسيقى والوسائط السمعية"
    },
    {
        "category_id": "bbee5aa8-0278-45f2-99ff-bac0f4decd64",
        "category_name": "العلوم الاجتماعية",
        "children_id": "f24b1a0d-6274-4974-8b8c-8be56c5f799f",
        "children_name": "علم المكتبات"
    },
    {
        "category_id": "d151d75c-0ffd-4194-a87c-535358244fd8",
        "category_name": "العلوم الدقيقة وعلوم الأرض والطبيعة",
        "children_id": "8e7d2e9c-3675-4aa5-ba4e-5e455c94aacb",
        "children_name": "الجغرافيا"
    },
    {
        "category_id": "bbee5aa8-0278-45f2-99ff-bac0f4decd64",
        "category_name": "العلوم الاجتماعية",
        "children_id": "ab5395f4-205d-4c2f-8bbd-9fb164394a2e",
        "children_name": "التاريخ"
    },
    {
        "category_id": "05802234-6622-4c0b-ad75-94c53f9413bc",
        "category_name": "التكنولوجيا",
        "children_id": "5fd0a295-3fc4-4199-aa20-368c0897ef98",
        "children_name": "الهيدروليكا"
    },
    {
        "category_id": "05802234-6622-4c0b-ad75-94c53f9413bc",
        "category_name": "التكنولوجيا",
        "children_id": "248f78d1-ca13-4068-80ab-0c62b3fd6b23",
        "children_name": "الهندسة المدنية"
    },
    {
        "category_id": "bbee5aa8-0278-45f2-99ff-bac0f4decd64",
        "category_name": "العلوم الاجتماعية",
        "children_id": "1097ad9e-d0a7-4d30-a9c4-a0509c84d1e1",
        "children_name": "قانونية وإدارية"
    },
    {
        "category_id": "bbee5aa8-0278-45f2-99ff-bac0f4decd64",
        "category_name": "العلوم الاجتماعية",
        "children_id": "17782c20-e059-46cb-be16-aed3804f2524",
        "children_name": "الإعلام"
    }
];
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={2} // Default for mobile screens
      breakpoints={{
        640: { // For medium screens
          slidesPerView: 2,
        },
        768: { // For larger screens like PC
          slidesPerView: 4,
        },
        1024: { // For wider PC screens
          slidesPerView: 6,
        },
      }}
    >
        
      {categories.map((category, index) => (     
        <SwiperSlide key={index}>
          <button type="button" onClick={()=>{handleFilterChange(category.children_id)}} class="py-2 px-4  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 ">
          {category.children_name}
          </button>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CategorySlider;

