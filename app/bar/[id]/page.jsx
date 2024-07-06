import Image from "next/image";
import Link from "next/link";

const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=`;

const getDrink = async (id) => {
  const response = await fetch(`${url}${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch a drink");
  }

  return response.json();
};
const DrinkPage = async ({ params }) => {
  const data = await getDrink(params.id);
  const name = data?.drinks[0]?.strDrink;
  const thumb = data?.drinks[0]?.strDrinkThumb;
  const instructions = data?.drinks[0]?.strInstructions;
  console.log(name, thumb, instructions, "data");
  return (
    <div className="p-12">
      <Link href="/bar" className="btn btn-secondary ">
        Go back home{" "}
      </Link>
      <h1 className="text-4xl my-6">{name}</h1>
      <p className="my-6">{instructions}</p>
      <Image
        src={thumb}
        width={300}
        height={400}
        alt="drink"
        className="rounded "
      />
    </div>
  );
};
export default DrinkPage;
