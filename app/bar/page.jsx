import DrinksList from "@/components/DrinksList";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=z";

const Bar = async () => {
  let data = null;

  try {
    const response = await fetch(url);
    data = await response.json();

    console.log(data, "Data");

    if (!response.ok) {
      throw new Error("Error while fetching");
    }
  } catch (error) {
    console.log(error);
    throw new Error("something went wrong");
  }

  return (
    <div>
      <DrinksList drinks={data?.drinks} />
    </div>
  );
};

export default Bar;
