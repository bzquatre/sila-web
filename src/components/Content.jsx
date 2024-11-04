import iqraa from "../assets/images/iqraa.png"
const Content = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-lg sm:text-center sm:mx-auto">
          <a
            href="https://st.iqraa.opu.dz"
            aria-label="Go Home"
            title="Logo"
            className="inline-block mb-4"
          >
            <div className="flex items-center justify-center w-24 h-24 rounded-full ">
              <img src={iqraa}/>
            </div>
          </a>
          <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-32 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="6b0188f3-b7a1-4e9b-b95e-cad916bb3042"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#6b0188f3-b7a1-4e9b-b95e-cad916bb3042)"
                  width="52"
                  height="24"
                />
              </svg>
            </span>{' '}
            منصة الكتب
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
          تطبيق "اقرأ" هو منصة لعرض الكتب مخصصة لطلاب الجامعات، حيث يمكن تصفح الآلاف من الكتب في مختلف التخصصات الجامعية.
          </p>
          <hr className="my-8 border-gray-300" />
          <div className="flex items-center mb-3 sm:justify-center">
            <a href="https://apps.apple.com/app/id1600937920" className="mr-3 transition duration-300 hover:shadow-lg">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/1000px-Download_on_the_App_Store_Badge.svg.png"
                className="object-cover object-top w-32 mx-auto"
                alt=""
              />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.opu.opu" className="transition duration-300 hover:shadow-lg">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1000px-Google_Play_Store_badge_EN.svg.png"
                className="object-cover object-top w-32 mx-auto"
                alt=""
              />
            </a>
          </div>
          <p className="max-w-xs text-xs text-gray-600 sm:text-sm sm:max-w-sm sm:mx-auto">
          تتوفر المنصة بتطبيق مخصص للهواتف المحمولة على نظامي أندرويد وآيفون.
          </p>
        </div>
      </div>
    );
  };
export default Content;