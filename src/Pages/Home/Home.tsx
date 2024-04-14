import "./Home.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import image1 from "../../assets/images/Home/1.jpg";
import image2 from "../../assets/images/Home/2.jpg";
import image3 from "../../assets/images/Home/3.jpg";
import image4 from "../../assets/images/Home/4.jpg";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  const imagesArray = [image1, image2, image3, image4];

  return (
    <div className="home">
      <div className="home-text">
        <h1>{t("home.title")}</h1>
        <p>{t("home.desc")}</p>
      </div>
      <div className="home-img">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1.2}
        >
          {imagesArray.map((item: any, index: number) => {
            return (
              <SwiperSlide key={index}>
                <img src={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
