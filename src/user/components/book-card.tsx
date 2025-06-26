import React from "react";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { type BookType } from "../../services";
import { useNavigate } from "react-router-dom";

interface Props {
  book: BookType;
}

export const BookCard: React.FC<Props> = ({ book }) => {
  const inCart = false;
  const navigate = useNavigate()

  return (
    <div key={book.id} onClick={() => navigate(`/book/${book.id}`)}>
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition cursor-pointer flex flex-col h-full lg:w-75">
        <img
          src={book.img}
          alt={book.title}
          className="w-full h-44 sm:h-48 md:h-52 object-cover rounded-t-xl"
        />
        <div className="flex flex-col justify-between flex-1 p-3">
          <div>
            <h2 className="text-sm sm:text-base font-semibold text-gray-800 line-clamp-2 mb-1">
              {book.title}
            </h2>
            <p className="text-orange-600 font-bold text-sm sm:text-base">
              ${book.price}
            </p>
          </div>

          {inCart ? (
            <div
              className="mt-3 inline-flex items-center justify-center bg-white border border-orange-600 text-orange-600 rounded-lg overflow-hidden "
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="px-3 py-1 hover:bg-orange-100 transition"
              >
                <Minus className="w-4 h-4" />
              </button>

              <span className="px-4 py-1 text-base font-medium">1</span>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="px-3 py-1 hover:bg-orange-100 transition"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <button
              className="mt-3 flex items-center justify-center gap-2 bg-orange-600 text-white text-[12px] sm:text-[14px] px-2 py-2 rounded-lg hover:bg-orange-700 transition"
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
  );
};

