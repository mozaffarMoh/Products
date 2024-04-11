import { useLocation } from "react-router-dom";
import { endPoint } from "../../api/endPoint";
import useGet from "../../api/useGet";
import "./SingleProduct.scss";
import { Loading } from "../../components";
import { MdStarBorder } from "react-icons/md";
import { MdStarHalf } from "react-icons/md";
import { MdStar } from "react-icons/md";
import React from "react";

const SingleProduct = () => {
  const location = useLocation();
  const [starsArray, setStarsArray]: any = React.useState<any>(
    Array(5).fill(MdStarBorder)
  );
  const [data, loading]: any = useGet(
    endPoint.allProducts + "/" + location.state.productId
  );

  /* Check rates stars */
  React.useEffect(() => {
    if (data?.rating?.rate) {
      let rate = data?.rating?.rate;
      let newArray = starsArray.map((_: any, index: number) => {
        if (rate >= index + 1) {
          return MdStar;
        } else {
          if (Number.isInteger(rate)) {
            return MdStarBorder;
          } else {
            rate = Math.ceil(rate);
            return MdStarHalf;
          }
        }
      });
      setStarsArray(newArray);
    }
  }, [data]);

  return (
    <div className="single-product flexCenter">
      {loading && <Loading />}
      {data && data.title && (
        <div className="single-product-container flexCenter ">
          <div className="single-product-image flexCenter">
            <img src={data.image} />
          </div>
          <div className="single-product-text flexStartColumn">
            <h1>{data.category}</h1>
            <h3>{data.title}</h3>
            <h3>{data.price}&nbsp;$</h3>
            <p>{data.description}</p>
            <p>{data.rating?.count} Rates</p>
            <div className="rates-stars flexStart">
              <p>{data.rating?.rate}</p>
              <div className="ml-3 flexCenter">
                {starsArray.map((item: any, index: number) => {
                  const Star = item;
                  return <Star key={index} color={item.color} />;
                })}
              </div>{" "}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
