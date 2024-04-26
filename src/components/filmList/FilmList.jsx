import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import filmOperations from "../../redux/film-operation";
import { filmList, isLoanging } from "../../redux/film-select";
import { FilmItem } from "./FilmItem";
import genreOperations from "../../redux/genre-operation";
import usePagination from "../../hook/pagination";
import css from "./filmList.module.css";
import classNames from "classnames";

export const FilmList = () => {
  const dispatch = useDispatch();
  const films = useSelector(filmList);
  const isLoader = useSelector(isLoanging);

  const { nextPage, prevPage, page, setPage, totalPages } = usePagination({
    contentPerPage: 20,
    count: 300,
  });
  useEffect(() => {
    dispatch(genreOperations.genreList());
    dispatch(filmOperations.filmList(page));
  }, [dispatch, page]);

  return (
    <div className={css.boxList}>
      <ul className={css.filmList}>
        {isLoader ? (
          <p>Loader</p>
        ) : (
          films.map((film) => (
            <li key={film.id}>
              <FilmItem film={film} />
            </li>
          ))
        )}
      </ul>
      <div className={css.pagination}>
        <button onClick={prevPage} className={css.page}>
          &larr;
        </button>
        {/* @ts-ignore */}
        {[...Array(totalPages).keys()].map((el) => (
          <button
            onClick={() => setPage(el + 1)}
            key={el}
            className={classNames(css.page, page === el + 1 ? css.active : "")}
          >
            {el + 1}
          </button>
        ))}
        <button onClick={nextPage} className={css.page}>
          &rarr;
        </button>
      </div>
    </div>
  );
};
