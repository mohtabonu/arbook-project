import type { FunctionComponent } from "react";
import { Search, User, ShoppingCart} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export const Header: FunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto py-4 px-4 lg:py-6 lg:px-12">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-white">
        <div className="flex flex-wrap items-center justify-between w-full gap-4">
          <Link to="/" className="flex items-end gap-2">
            <img
              src="/assets/icon.png"
              alt="logo"
              className="w-10 lg:w-12 h-auto"
            />
            <h1 className="font-bold text-[20px] lg:text-[24px] text-orange-600">
              AR BOOK
            </h1>
          </Link>

          <div className="hidden  md:flex items-center gap-2 bg-white border border-orange-600 rounded-full px-4 py-2 shadow-sm w-full max-w-md mx-auto md:mx-0">
            <Search className="text-orange-600 w-5 h-5" />
            <input
              type="text"
              placeholder="Qidirish..."
              className="outline-none w-full text-sm text-gray-700 placeholder-gray-400"
            />
          </div>

          <div className="flex items-center gap-4 text-sm">

            <button
              onClick={() => navigate("/login")}
              className="flex items-center gap-1 text-gray-500 hover:text-gray-700 transition cursor-pointer"
            >
              <User className="w-5 h-5 text-orange-600 hover:text-orange-700"/>
              <span className="hidden sm:block">Kirish</span>
            </button>

            {/* <button
              onClick={() => navigate("/login")}
              className="flex items-center gap-1 text-gray-500 hover:text-gray-700 transition cursor-pointer"
            >
              <QrCode className="w-5 h-5 text-orange-600 hover:text-orange-700" />
              <span className="hidden sm:block">QR</span>
            </button> */}

            <button
              onClick={() => navigate("/cart")}
              className="flex items-center gap-1 text-gray-500 hover:text-gray-700 transition cursor-pointer"
            >
              <ShoppingCart className="w-5 h-5 text-orange-600 hover:text-orange-700" />
              <span className="hidden sm:block">Savat</span>
            </button>

          </div>
        </div>

        <div className="flex md:hidden items-center gap-2 bg-white border border-orange-600 rounded-full px-4 py-2 shadow-sm w-full max-w-md mx-auto md:mx-0">
          <Search className="text-orange-600 w-5 h-5" />
          <input
            type="text"
            placeholder="Qidirish..."
            className="outline-none w-full text-sm text-gray-700 placeholder-gray-400"
          />
        </div>
      </div>
    </div>
  );
};
