import Button from "./Button";
import { CiSearch } from "react-icons/ci";

export default function Search() {
  return (
    <div className="search-container">
      <div className="search-bar">
        <CiSearch color="white" size="20px" />
        <input
          className="search-input"
          type="search"
          placeholder="Search disease, hospitals, countries"
        />
      </div>
      <Button type="explore" label="Explore Premium Care" />
    </div>
  );
}
