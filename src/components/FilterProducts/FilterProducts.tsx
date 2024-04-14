import React from "react";
import "./FilterProducts.scss";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const FilterProducts = ({ data, products, setProducts }: any) => {
  const { t } = useTranslation();
  const [categoryArray, setCategoryArray]: any = React.useState([]);
  const [title, setTitle]: any = React.useState("");
  const [price, setPrice]: any = React.useState(0);
  const [category, setCategory]: any = React.useState("");
  const [sortValue, setSortValue]: any = React.useState("");

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

  /* Change title value*/
  const handleSearchByTitle = (e: any) => {
    const value = e.target.value?.toLowerCase();
    setTitle(value);
  };

  /* Change price value */
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPrice = parseInt(e.target.value);
    setPrice(newPrice);
  };

  /* Change category value*/
  const handleSearchByCategory = (e: any) => {
    const value = e.target.value;
    setCategory(value);
  };

  /* Sort elements */
  const handleSort = (e: any) => {
    const value = e.target.value;
    setSortValue(value);
    let sortedProducts = products ? [...products] : [...data];
    if (value === "asc") {
      sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
    } else if (value === "desc") {
      sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
    }

    setProducts(sortedProducts);
  };

  /* Search click button */
  const handleSearchClick = () => {
    let filteredArray = data.filter((item: any) => {
      if (item?.title?.toLowerCase().startsWith(title) && item?.price > price) {
        if (category) {
          return item?.category === category;
        } else {
          return item;
        }
      }
    });

    setProducts([...filteredArray]);
  };

  /* Reset to default */
  const handleReset = () => {
    setProducts(null);
    setPrice(0);
    setCategory("");
    setTitle("");
    setSortValue("");
  };

  return (
    <div className="flexCenterColumn w-100">
      <div className="filter-products flexCenter">
        <div>
          <p>{t("products.selectTitle")}</p>
          <input
            type="text"
            value={title}
            placeholder={t("products.titlePlaceholder")}
            className="search-by-title"
            onChange={handleSearchByTitle}
          />
        </div>
        <div>
          <div className="flexBetween search-by-range ">
            <p>{t("products.selectPrice")}</p>
            <p>{price} &nbsp; $</p>
          </div>
          <input
            type="range"
            min={0}
            max={1000}
            value={price}
            className="range-input"
            onChange={handlePriceChange}
          />
        </div>
        <div>
          <p>{t("products.selectCategory")}</p>
          <select onChange={handleSearchByCategory} value={category}>
            <option value="">{t("products.categoryDefault")}</option>
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
          <p>{t("products.selectSort")}</p>
          <select onChange={handleSort} value={sortValue}>
            <option value="">{t("products.sortDefault")}</option>
            <option value="asc">{t("products.a-z")}</option>
            <option value="desc">{t("products.z-a")}</option>
          </select>
        </div>
      </div>
      <div className="flexEvenly search-events">
        <Button variant="info" onClick={handleSearchClick}>
          {t("products.search")}
        </Button>
        <Button variant="danger" onClick={handleReset}>
          {t("products.reset")}
        </Button>
      </div>
    </div>
  );
};

export default FilterProducts;
