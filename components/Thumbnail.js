import { forwardRef } from "react";
import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";
const Thumbnail = forwardRef(({ result }, ref) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  // console.log(result);
  // /backdrop_path: "/pfcj8IYB5bK8RTWiHwOCGfIzVw6.jpg"
  // poster_path: "/piGZDwFW4urLYDWGiYJMrt6hdCS.jpg"
  // https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mPbGr0IjNxLsxXIJ7QeUtZK0RLH.jpg
  // https://www.themoviedb.org/t/p/w220_and_h330_face/mPbGr0IjNxLsxXIJ7QeUtZK0RLH.jpg

  return (
    <div
      ref={ref}
      className="p-2 group cursor-pointer transition duration-100 ease-in transform sm:hover:scale-105 hover:z-50"
    >
      <Image
        src={
          `${BASE_URL}${result.backdrop_path}` ||
          `${BASE_URL}${result.poster_path}` ||
          `${result.poster_path}`
        }
        layout="responsive"
        height={1080}
        width={1920}
      />
      <div className="p-2">
        <p className="truncate max-w-md">{result.overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.title || result.originla_name}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {result.media_type && `${result.media_type} •`}{" "}
          {result.release_date || result.first_air_date} •{" "}
          <ThumbUpIcon className="h-5 mx-2" />
          {result.vote_count}
        </p>
      </div>
    </div>
  );
});

export default Thumbnail;
