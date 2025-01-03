"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Card from "@/app/_components/ui/Card";

type CardData = {
  id: number;
  icon: string;
  title: string;
  description: string;
};

type SliderCardProps = {
  cards: CardData[];
};

const Slider: React.FC<SliderCardProps> = ({ cards }) => {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        pagination={{ clickable: true, el: ".custom-pagination" }}
        navigation
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <Card
              title={card.title}
              icon={card.icon}
              description={card.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-pagination mt-4 mb-4 flex justify-center gap-4"></div>
    </div>
  );
};

export default Slider;
