import React, { useState, useEffect } from "react"
import Menu from "./Menu"
import Categories from "./Categories"
import items from "./data"


// get all categories from data.js first
const itemsCategories = ["all", ...new Set((items.map((item) => 
  item.category 
)))]


function App() {
  // set state 
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(itemsCategories)

  // filter function
  const filterItems = (category) => {
    // if all show all items
    if(category === "all") {
      setMenuItems(items)
      return
    }
    // if not all set filter items in list according to category passed in
    const filteredItems = items.filter((item) => item.category === category)
    // show items filtered
    setMenuItems(filteredItems)
  }
  
 
  return (
    <main>
      <section className="menu-section">
        <div className="title">
          <h2>Our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} categories={categories} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
