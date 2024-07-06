import Image from "next/image";
import Link from "next/link";

const DrinksList = ({ drinks }) => {
  return (
    <ul className="grid sm:grid-cols-2 gap-6 mt-6 justify-items-center">
      {drinks?.map((drink) => (
        <li key={drink.idDrink}>
          <Link className="text-xl font-medium" href={`/bar/${drink.idDrink}`}>
            <div className="relative h-60 w-60 mb-4">
              <Image
                src={drink.strDrinkThumb}
                alt={drink.strDrinkThumb}
                fill
                className="rounded-md object-cover"
              />
            </div>
            {drink.strDrink}
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default DrinksList;
