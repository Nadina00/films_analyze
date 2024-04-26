import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { genreList } from "../../redux/genre-select";
import { Modal } from "../modal/Modal";
import { useState } from "react";
import { Link } from "react-router-dom";
import css from "./filmList.module.css";
const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

export const FilmItem = ({ film }) => {
  const genres = useSelector(genreList);
  const [toggle, setToggle] = useState(false);
  let genreLib = [];

  for (const item of film.genre_ids) {
    for (const genre of genres) {
      if (item === genre.id) {
        genreLib.push(genre.name);
      }
    }
  }

  const onClick = () => {
    setToggle(!toggle);
  };
  
  const time = film.release_date.slice(0, 4);

  return (
    <div>
      <Link onClick={onClick} className={css.block}>
        <img src={IMAGE_BASE + film.poster_path} className={css.image} />
        <h2 className={css.title}>{film.title ? film.title : film.name}</h2>
        <p className={css.genre}>
          {genreLib.join(", ")} <span className={css.date}>{time}</span>
        </p>
      </Link>
      {toggle && (
        <Modal
          item={film.id}
          className={css.modal}
          toggle={toggle}
          onClickModal={onClick}
        />
      )}
    </div>
  );
};

FilmItem.propTypes = {
  film: PropTypes.object,
};
