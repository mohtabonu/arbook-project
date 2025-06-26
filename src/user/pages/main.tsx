import { type FunctionComponent } from "react";
import { books} from "../../services";
import {BookCard} from "../components";

export const Main: FunctionComponent = () => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 p-4">
        {books.map(book => (
            <BookCard
              book={book}
            />
        ))}
      </div>
    </div>
  );
};
