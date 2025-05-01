import { useTranslations } from "next-intl";
import Image from "next/image";


export default function OurGallery() {
  const t = useTranslations();

  const galleryImgs = [
    { src: "/assets/images/gallrey/1.png" },
    { src: "/assets/images/gallrey/2.png" },
    { src: "/assets/images/gallrey/3.png" },
    { src: "/assets/images/gallrey/4.png" },
    { src: "/assets/images/gallrey/5.png" },
  ];

  return (
    <section>
      {/* Header */}
      <div className=" mb-9 flex items-center flex-col ">
        <h2 className="text-center font-roboto font-bold text-xs leading-8 tracking-[4px] rtl:text-xl rtl:tracking-[0]  text-rose-900 mb-2 uppercase">
          {t("our-gallery")}
        </h2>
        <h3 className="relative text-[30px] capitalize font-inter font-bold leading-9 tracking-[0] text-custom-blue-900 after:absolute after:h-[2px] after:w-40 after:bottom-0 after:bg-rose-900  after:left-0 rtl:after:right-0 rtl:before:right-0 rtl:before:rounded-tl-[20px] rtl:before:rounded-bl-[20px] text-center ">
          {t("lets-check-our-photo")}
        </h3>
      </div>

      {/* Photos sections */}
      <div className="grid md:px-4  grid-cols-6 gap-4">
        {/* Galley images photo no 4 will take to cols */}
        {galleryImgs.map((image, index) => (
          <div
            className={`relative  px-6 h-[411px]  col-span-6 w-full ${index === 3 ? "md:col-span-4" : "md:col-span-2"}`}
           
          >
            <Image
              className="rounded-[40px] w-full"
              sizes="100%"
              alt="Gallery photo"
              src={image.src}
              objectFit="cover"
              fill
            />
          </div>
        ))}
      </div>
    </section>
  );
}
