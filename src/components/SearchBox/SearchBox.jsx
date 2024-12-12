import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filters/filtersSlice";
import { selectNameFilter } from "../../redux/filters/selectors";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleSearch = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={css.searchBox}>
      <input
        type="text"
        value={filter}
        onChange={handleSearch}
        placeholder="Search contacts..."
        className={css.searchInput}
      />
    </div>
  );
};

export default SearchBox;
