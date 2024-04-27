"use client";

import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "./ui/button";

const data = [
  "/images/slide-1.jpg",
  "/images/slide-2.jpg",
  "/images/slide-3.jpg",
];

const Hero = () => {
  return (
    <div className="w-full h-[calc(100vh-82px)]">
      <Swiper
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        grabCursor={true}
        navigation={true}
        speed={500}
        modules={[Autoplay, Navigation, Pagination]}
        className="w-full h-full"
      >
        {data.map((url, i) => (
          <SwiperSlide key={i + url}>
            <div className="w-full h-full relative">
              <Image
                src={url}
                alt="food"
                fill
                priority
                className="w-full h-full object-cover"
              />
              <div className="absolute z-[1] top-0 right-0 left-0 bottom-0 w-full h-full bg-black/20"></div>
              <div className="absolute z-[2] top-0 left-0 right-0 bottom-0 w-full h-full container mx-auto text-center flex flex-col gap-5 items-center justify-center text-white md:p-20">
                <h1 className="text-5xl md:text-7xl font-bold">
                  Discover tasty food like never before
                </h1>
                <p className="md:text-xl">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
                  dolorum quis alias. Officiis totam cumque aliquam molestiae
                  velit excepturi ipsa facilis et tempore consequuntur, atque
                  rem, necessitatibus nemo officia ab?
                </p>
                <Link href="/#get_started">
                  <Button size="lg" className="md:text-xl bg-pink-500">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
