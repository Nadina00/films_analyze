import { useState } from "react";
import { useDispatch } from "react-redux";
import filmOperations from "../../redux/film-operation";
import css from "./seach.module.css";


export const Search = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onClick = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(filmOperations.filmSearch(value));
    setValue("");
  };
  return (
    <form onSubmit={onSubmit} className={css.formSearch}>
      <input
        onChange={onClick}
        placeholder="Movie search"
        className={css.input}
        value={value}
      ></input>

      <button type="submit" className={css.btnFind}>
        {" "}
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.5 9.5C7.70914 9.5 9.5 7.70914 9.5 5.5C9.5 3.29086 7.70914 1.5 5.5 1.5C3.29086 1.5 1.5 3.29086 1.5 5.5C1.5 7.70914 3.29086 9.5 5.5 9.5Z"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.5 10.5002L8.32495 8.3252"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </form>
  );
};
