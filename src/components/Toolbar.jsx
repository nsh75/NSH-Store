function Toolbar({
  categories,
  selectedCategory,
  setSelectedCategory,
  searchKeyword,
  setSearchKeyword,
  sortOption,
  setSortOption,
  ratingFilter,
  setRatingFilter,
}) {
  return (
    <section className="toolbar" id="catalog">
      <div>
        <label>Search Product</label>
        <input
          type="search"
          value={searchKeyword}
          onChange={(event) => setSearchKeyword(event.target.value)}
          placeholder="Search racing gear, jacket, electronics..."
        />
      </div>

      <div>
        <label>Category</label>
        <select
          value={selectedCategory}
          onChange={(event) => setSelectedCategory(event.target.value)}
        >
          <option value="all">All Categories</option>
          {categories.map((category) => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Sort Price</label>
        <select
          value={sortOption}
          onChange={(event) => setSortOption(event.target.value)}
        >
          <option value="default">Default</option>
          <option value="low-high">Lowest Price</option>
          <option value="high-low">Highest Price</option>
        </select>
      </div>

      <div>
        <label>Minimum Rating</label>
        <select
          value={ratingFilter}
          onChange={(event) => setRatingFilter(event.target.value)}
        >
          <option value="all">All Ratings</option>
          <option value="3">3.0+</option>
          <option value="4">4.0+</option>
          <option value="4.5">4.5+</option>
        </select>
      </div>
    </section>
  );
}

export default Toolbar;