import type { FunctionComponent } from "react";
import { books, type BookType } from "../../services";
import { useNavigate, useParams } from "react-router-dom";
import { Minus, Plus, ShoppingCart } from "lucide-react";

export const Book: FunctionComponent = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: BookType["id"] }>();
  const book = books.find((b) => b.id === id) as BookType;
  const inCart = false;

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-orange-100 to-orange-200 p-4 flex items-center justify-center">
      <div className="w-full max-w-xs sm:max-w-md md:max-w-3xl lg:max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 flex items-center justify-center p-5 sm:p-6 md:p-4 lg:p-6">
            <img
              src={book.img}
              alt={book.title}
              className="w-full h-auto max-w-xs sm:max-w-sm rounded-xl object-cover shadow-md"
            />
          </div>

          <div className="w-full md:w-2/3 p-5 sm:p-6 md:p-4 lg:p-6 flex flex-col justify-between">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-orange-800 mb-3 md:text-left">
                {book.title}
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-orange-600 mb-4 md:text-left">
                ${book.price.toFixed(2)}
              </p>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-sm lg:text-base">
                {book.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 mt-6">
              <button
                onClick={() => navigate("/")}
                className="cursor-pointer w-full sm:w-auto text-[14px] bg-orange-600 hover:bg-orange-700 text-white font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow transition-all duration-200"
              >
                ← Orqaga qaytish
              </button>

              {inCart ? (
                <div
                  className="cursor-pointer w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white border border-orange-600 text-orange-600 font-semibold px-4 py-1 sm:px-9 sm:py-3 rounded-full shadow transition-all duration-200"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); 
                    }}
                    className="p-1 rounded-full hover:bg-orange-100 transition"
                  >
                    <Minus className="w-4 h-4" />
                  </button>

                  <span className="px-2 text-base">1</span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation(); 
                    }}
                    className="p-1 rounded-full hover:bg-orange-100 transition"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <button
                  className="cursor-pointer w-full sm:w-auto flex items-center justify-center gap-2 text-[14px] bg-orange-600 hover:bg-orange-700 text-white font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow transition-all duration-200"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <ShoppingCart className="w-4 h-4" />
                  Savatga qo‘shish
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
