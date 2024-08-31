import ProductItemSkeleton from "./ProductItemSkeleton";
import Title from "../Title";

const ProductDetailsSkeleton = () => {
  return (
    <div className="border-t-2 pt-10">
      {/*----------- Product Data-------------- */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/*---------- Product Images------------- */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full gap-2">
            {Array.from({ length: 5 }).map((_, i) => {
              return (
                <div
                  className="flex items-center justify-center h-24 w-full mb-4 bg-gray-300 rounded dark:bg-gray-700"
                  key={i}
                >
                  <svg
                    className="w-10 h-10 text-gray-200 dark:text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 20"
                  >
                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                  </svg>
                </div>
              );
            })}
          </div>
          <div className="w-full sm:w-[80%] ">
            <div className="flex items-center justify-center h-96 sm:h-full mb-4 bg-gray-300 rounded dark:bg-gray-700">
              <svg
                className="w-10 h-10 text-gray-200 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 20"
              >
                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
              </svg>
            </div>
          </div>
        </div>

        {/* -------- Product Info ---------- */}
        <div className="flex-1">
          <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 mt-2"></div>
          <div className="h-5 w-1/4 bg-gray-200 rounded-full dark:bg-gray-700 mt-4"></div>
          <div className="h-5 w-24 bg-gray-200 rounded-full dark:bg-gray-700 mt-4 mb-8"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5 mt-16"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2 w-9/12 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>

          <div className="h-4 bg-gray-300 rounded-full dark:bg-gray-700 w-32 mt-8"></div>
          <div className="flex justify-start gap-2">
            <div className="h-12 bg-gray-300  dark:bg-gray-700 w-12 mt-8"></div>
            <div className="h-12 bg-gray-300  dark:bg-gray-700 w-12 mt-8"></div>
            <div className="h-12 bg-gray-300  dark:bg-gray-700 w-12 mt-8"></div>
            <div className="h-12 bg-gray-300  dark:bg-gray-700 w-12 mt-8"></div>
            <div className="h-12 bg-gray-300  dark:bg-gray-700 w-12 mt-8"></div>
          </div>
          <div className="h-16 bg-gray-300  dark:bg-gray-700 w-48 mt-8"></div>
        </div>
      </div>
      <div className="my-24">
        <div className=" text-center text-3xl py-2">
          <Title text1={"RELATED"} text2={"PRODUCTS"} />
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {Array.from({ length: 10 }).map((_, i) => {
          return <ProductItemSkeleton key={i} />;
        })}
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;
