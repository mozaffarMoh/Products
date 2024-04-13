import { useNavigate } from "react-router-dom";
import { endPoint } from "../../api/endPoint";
import useGet from "../../api/useGet";
import { FilterProducts, Loading } from "../../components";
import "./AllProducts.scss";
import React from "react";

const AllProducts = () => {
  const [data, loading]: any = useGet(endPoint.allProducts);
  const [products, setProducts]: any = React.useState(null);
  const navigate = useNavigate();

  const handleChooseProduct = (productId: number) => {
    navigate("/single-product", { state: { productId: productId } });
  };

  return (
    <div className="all-products flexCenterColumn">
      {loading && <Loading />}
      <div className="products-text">
        <h1>Choose your product</h1>
      </div>
      <FilterProducts
        data={data}
        products={products}
        setProducts={setProducts}
      />
      <div className="products-items flexCenter">
        {data &&
          (products ? products : data).map((item: any, index: number) => {
            return (
              <div
                className="product flexCenterColumn"
                key={index}
                onClick={() => handleChooseProduct(item.id)}
              >
                <img src={item.image} />
                <p className="mt-4">{item.title}</p>
                <p>{item.price}&nbsp;$</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default AllProducts;
