import { Minus, Plus, Trash2 } from "lucide-react";
import { books } from "../../services";

export function Cart() {
  const cartBooks = books.slice(0, 3);
  const total = cartBooks.reduce((sum, p) => sum + p.price, 0);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-xl font-bold text-orange-600 mb-4">Savat</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          {cartBooks.map((book) => (
            <div
              key={book.id}
              className="flex items-center justify-between p-4 border rounded-lg shadow-sm"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={book.img}
                  alt={book.title}
                  className="w-16 h-16 object-contain"
                />
                <div>
                  <h3 className="text-md font-semibold text-orange-600">
                    {book.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {book.description.slice(0, 20)}...
                  </p>
                </div>
              </div>
              <div className="">
                <p className="text-md font-bold text-orange-600 text-right mb-2">
                  {book.price.toLocaleString()}$
                </p>
                <div className="flex items-end md:items-center gap-4 flex-col md:flex-row ">
                  <div
                    className="inline-flex items-center justify-center bg-white border border-orange-600 text-orange-600 rounded-lg overflow-hidden "
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      className="px-2 py-1 hover:bg-orange-100 transition"
                    >
                      <Minus className="w-4 h-4" />
                    </button>

                    <span className="px-2  text-base font-medium">1</span>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      className="px-2 py-1 hover:bg-orange-100 transition"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <button className="text-gray-400 hover:text-red-500">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="border rounded-lg shadow-md p-4 sticky top-4 h-fit">
          <h3 className="text-lg font-semibold text-orange-600 mb-2">
            Buyurtmangiz
          </h3>
          <p className="text-sm text-gray-500">
            Mahsulotlar soni: {cartBooks.length}
          </p>
          <p className="text-lg font-bold text-orange-600 mt-2">
            Jami: {total.toLocaleString()}$
          </p>
          <button className="w-full mt-4 bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition">
            Rasmiylashtirishga o'tish
          </button>
        </div>
      </div>
    </div>
  );
}
