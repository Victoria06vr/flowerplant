
export default function SearchField({ filterText, handleInput }){
    return(
        <input
            type="text"
            placeholder="Type to search..."
            value={filterText}       
            onChange={handleInput}   
            className="searchField"
        />
    )
}