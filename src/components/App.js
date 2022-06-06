import React, {useState} from "react";
import Nav from "./Nav";
import ListItem from "./ListItem"
import Filter from "./Filter"

import hogs from "../porkers_data";

function App() {
	//console.log(hogs)
	const [greasedFilter, setGreasedFilter] = useState(false)
	const [isSorted, setSort] = useState("name")

	const filterHogs = hogs
		.filter((hog) => (greasedFilter ? hog.greased : true))
		.sort((fHog, sHog) =>{
			if(isSorted === "weight"){
				return fHog.weight - sHog.weight
			} else {
				return fHog.name.localeCompare(sHog.name)
			}
		})

	return (
		<div className="App">
			<Nav />
			<Filter greasedFilter={greasedFilter} onChangeGreaseFilter={setGreasedFilter} isSorted={isSorted} onChangeSort={setSort} />
			<ListItem hogs={filterHogs}/>
		</div>
	);
}

export default App;
