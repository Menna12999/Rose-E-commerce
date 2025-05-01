import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Category({ category }: { category: Category }) {
  // Translation
  const t = useTranslations();

  return (
    <div className="bg-dark flex-col items-center justify-center md:flex-row md:justify-start  bg-rose-25 flex rounded-2xl p-4 gap-4 cursor-grab">
      {/* Image */}
      <div className="bg-rose-900 p-4 rounded-full flex items-center justify-center">
        <Image
          width={40}
          height={0}
          src={category.image}
          className="brightness-[9]"
          alt={category.name}
        />
      </div>

      {/* Card info */}
      <div>
        {/* Name */}
        <p className="text-custom-blue-900 capitalize">{category.name}</p>

        {/* Count */}
        <p className="text-custom-blue-500">
          {category.productsCount} {t("items")}
        </p>
      </div>
    </div>
  );
}
