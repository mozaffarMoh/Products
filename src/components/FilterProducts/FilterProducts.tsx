import React from "react";
import "./FilterProducts.scss";

const FilterProducts = ({ data, setProducts }: any) => {
  const [categoryArray, setCategoryArray]: any = React.useState([]);
  const [price, setPrice]: any = React.useState(0);

  /* Fill category array */
  React.useEffect(() => {
    if (categoryArray.length === 0) {
      data.forEach((item: any) => {
        setCategoryArray((prevArray: any) => {
          if (!prevArray.includes(item?.category)) {
            return [...prevArray, item?.category];
          } else {
            return prevArray;
          }
        });
      });
    }
  }, [data, categoryArray]);

  /* change price value */
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPrice = parseInt(e.target.value);
    setPrice(newPrice);
    let newArrayPrices = data.filter((item: any) => {
      return item?.price > newPrice;
    });
    setProducts([...newArrayPrices]);
  };

  /* Search By Title */
  const handleSearchByTitle = (e: any) => {
    const value = e.target.value?.toLowerCase();
    let newArray = data.filter((item: any) => {
      return item?.title?.toLowerCase().startsWith(value);
    });
    if (value) {
      setProducts([...newArray]);
    } else {
      setProducts(null);
    }
  };

  return (
    <div className="filter-products flexCenter">
      <div>
        <input
          type="text"
          placeholder="Search by title"
          className="search-by-title"
          onChange={handleSearchByTitle}
        />
      </div>
      <div className="search-by-range ">
        <div className="flexBetween pr-10">
          <p>Select price</p>
          <p>{price} &nbsp; $</p>
        </div>
        <input
          type="range"
          min={0}
          max={1000}
          className="search-by-range"
          onChange={handlePriceChange}
        />
      </div>
      <div>
        <p className="position-absolute bottom-10">Select Category</p>
        <select>
          {categoryArray.map((item: any, index: number) => {
            return (
              <option value="asc" key={index}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <select>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
      </div>
    </div>
  );
};

export default FilterProducts;
