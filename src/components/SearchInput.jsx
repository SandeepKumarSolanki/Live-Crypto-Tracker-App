const SearchInput = ({ value, onChange }) => (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Search..."
      className="w-full p-2 rounded border"
    />
  );
  
  export default SearchInput;
  