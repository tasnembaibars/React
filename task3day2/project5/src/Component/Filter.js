import { useState } from "react";

function Filter(){
    const names=["Khozama","Mohammad","Lujain","Nada","Ayman"];
    const [searchValue, setSearchValue] = useState("")
    return (
      <>
        <h4>Search names</h4>
        <input
          type="text"
          name="search"
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
        />
    
          {names
            .filter(name => name.match(new RegExp(searchValue, "i")))
            .map(name => {
              return <div key={name}>{name} </div>
            })}
  
      </>
    )
}
export default Filter;