import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Companies() {
  //   Translations
  const t = useTranslations();

  //   Variables
  //   Trusted companies images
  const companiesImg = [
    { src:"/assets/images/companies/1.png" },
    { src:"/assets/images/companies/2.png" },
    { src:"/assets/images/companies/3.png" },
    { src:"/assets/images/companies/4.png" },
    { src:"/assets/images/companies/5.png" },
    { src:"/assets/images/companies/6.png" },
  ];

  return (
    <section className="p-6 container  bg-rose-25 my-20">
    <div className="flex justify-center py-10 ">
        <h2 className="before:absolute before:w-40 before:h-[2px] before:bg-rose-900 before:bottom-0 relative font-inter font-bold md:text-[30px] text-[20px] leading-9 tracking-[0] text-custom-blue-900 ">
        {t('trusted-by-over-4-5k-companies')}
        </h2>
      </div>

      <div className=" flex justify-between pb-10">
        {companiesImg.map((image) => (
          <div>
            <Image src={image.src} alt="company logo" width={151} height={0} objectFit="cover" />
          </div>
        ))}
      </div>
    </section>
  );
}
