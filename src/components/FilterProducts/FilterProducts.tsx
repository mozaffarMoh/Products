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

  /* change price value */
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPrice = parseInt(e.target.value);
    setPrice(newPrice);
    let newArrayPrices = data.filter((item: any) => {
      return item?.price > newPrice;
    });
    setProducts([...newArrayPrices]);
  };

  /* Search By Category */
  const handleSearchByCategory = (e: any) => {
    const value = e.target.value;

    if (!value) {
      setProducts([...data]);
    } else {
      let newArray = data.filter((item: any) => {
        return item?.category === value;
      });
      setProducts([...newArray]);
    }
  };

  /* Sort elements */
  const handleSort = (e: any) => {
    const value = e.target.value;
    let sortedProducts = [...data];

    if (value === "asc") {
      sortedProducts.sort((a, b) => {
        return a.title.localeCompare(b.title);
      });
    } else if (value === "desc") {
      sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
    }

    setProducts(sortedProducts);
  };

  return (
    <div className="filter-products flexCenter">
      <div>
        <p>Select title</p>
        <input
          type="text"
          placeholder="Search by title"
          className="search-by-title"
          onChange={handleSearchByTitle}
        />
      </div>
      <div>
        <div className="flexBetween search-by-range ">
          <p>Select price</p>
          <p>{price} &nbsp; $</p>
        </div>
        <input
          type="range"
          min={0}
          max={1000}
          className="range-input"
          onChange={handlePriceChange}
        />
      </div>
      <div>
        <p>Select Category</p>
        <select onChange={handleSearchByCategory}>
          <option value="">Default</option>
          {categoryArray.map((item: any, index: number) => {
            return (
              <option value={item} key={index}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <p>Sort elements</p>
        <select onChange={handleSort}>
          <option value="">Default</option>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
      </div>
    </div>
  );
};

export default FilterProducts;
