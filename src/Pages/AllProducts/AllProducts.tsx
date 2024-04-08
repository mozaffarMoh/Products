import { useNavigate } from "react-router-dom";
import { endPoint } from "../../api/endPoint";
import useGet from "../../api/useGet";
import { Loading } from "../../components";
import "./AllProducts.scss";

const AllProducts = () => {
  const [data, loading]: any = useGet(endPoint.allProducts);
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
      <div className="products-items flexCenter">
        {data &&
          data.map((item: any, index: number) => {
            return (
              <div
                className="product flexCenterColumn"
                key={index}
                onClick={() => handleChooseProduct(item.id)}
              >
                <img src={item.image} />
                <p className="mt-4">{item.title}</p>
                <p>{item.price}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default AllProducts;
