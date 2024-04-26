import axios from "axios";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import css from "./modal.module.css";

const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";
const APP_KEY = "4bceebe1d1f9bc99c966449bdeaecb86";

export const Modal = ({ item, onClickModal, toggle }) => {
  const [data, setData] = useState({});
console.log(toggle)
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${item}?api_key=${APP_KEY}`)
      .then((res) => {
        res.data;
        setData(res.data);
      });
  }, [item]);

  const onClickClose = (evt) => {
    evt.preventDefault();
    onClickModal(!toggle);
  };

  const genreList = data.genres;
  let genreName = []
  if(genreList){
    for(const item of genreList){
      genreName.push(item.name)
    }
  }


  return (
    <div className={css.modalBackground}>
    <div className={css.box}>
       <button className={css.btnClose} type="button" onClick={onClickClose}>
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 8L22 22" stroke="black" strokeWidth="2" />
            <path d="M8 22L22 8" stroke="black" strokeWidth="2" />
          </svg>
        </button>
      <img src={IMAGE_BASE + data.poster_path} className={css.image} />
      <div>
      <h2 className={css.title}>{data.original_title} </h2>
      <p className={css.description}>
        Vote / Votes:{" "}
        <span className={css.info}>
          {data.vote_average} / {data.vote_count}{" "}
        </span>
      </p>
      <p className={css.description}>
        Popularity: <span className={css.info}>{data.popularity}</span>{" "}
      </p>
      <p className={css.genreName}>
        Genre :{" "}
        <ul className={css.genreList}>
          {genreName &&
            genreName.map((genre) => (
              <li key={genre.id} className={css.genre}>
                {genreName.splice(0, 3).join(", ")}
              </li>
            ))}
        </ul>{" "}
      </p>

      <p className={css.about}>About: <span className={css.view}>{data.overview}</span> </p>
      </div>
    </div>
    </div>
  );
};
Modal.propTypes = {
  item: PropTypes.number,
  onClickModal: PropTypes.func,
  toggle: PropTypes.bool
};
