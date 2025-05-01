import { CiDeliveryTruck } from "react-icons/ci";
import { IoWalletOutline } from "react-icons/io5";
import { FaHeadset } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { BsArrowRepeat } from "react-icons/bs";

export default function Services() {
  // Translation
  const t = useTranslations();

  // Variables
  const servicesCards = [
    {
      icon: <CiDeliveryTruck className="w-8 h-8 text-white "/>,
      title: t("free-delivery"),
      desc: t("orders-over-120"),
    },
    {
      icon: <BsArrowRepeat  className="w-8 h-8 text-white "/>,
      title: t("get-refund"),
      desc: t("within-30-days-returns"),
    },
    {
      icon: <IoWalletOutline className="w-8 h-8 text-white "/>,
      title: t("safe-payment"),
      desc: t("100-secure-payment"),
    },
    {
      icon: <FaHeadset className="w-8 h-8 text-white "/>,
      title: t("24-7-support"),
      desc: t("feel-free-to-call-us"),
    },
  ];

  return (
    <div className="container">
      <ul className="bg-rose-25  flex flex-col lg:flex-row justify-between items-center gap-4 p-10 rounded-2xl mt-20">
        {servicesCards.map((card, index) => (
          <li key={index} className="flex flex-col lg:flex-row items-center gap-4">
            {/* Icon  */}
            <div className="w-16 h-16 text-white img-container bg-rose-900 p-4 rounded-full flex items-center justify-center">
              {card.icon}
            </div>

            <div className="flex flex-col items-center">
              {/* Offer title */}
              <p className="text-custom-blue-900 font-bold text-xl">{card.title}</p>

              {/* Offer description */}
              <p className="text-custom-blue-500">{card.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
