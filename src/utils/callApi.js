const apiUrl = "https://swapi.co/api";
const baseImageUrl = "https://starwars-visualguide.com/assets/img";

export async function getData(endpoint, id = "") {
  const response = await fetch(`${apiUrl}${endpoint}${id}`);
  if (!response.ok) {
    throw new Error("Couldnt fetch");
  }
  return await response.json();
  // try {
  //   const response = await fetch(`${apiUrl}${endpoint}${id}`);
  //   console.log("response", response.ok);
  //   return response.json();
  // } catch (error) {
  //   // console.log("error in callApi", error);
  //   throw new Error("throw new Error in callApi");
  // }
}
export function getId(url) {
  const regular = /\/([0-9]*)\/$/;
  const id = url.match(regular)[1];
  return id;
}

export async function getRandomPlanet(id) {
  try {
    const response = await fetch(`${apiUrl}/planets/${id}`);
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
export function getDetails(endpoint, data) {
  switch (endpoint) {
    case "/people":
      return [
        { label: "", value: data.name },
        { label: "Birth year", value: data.birth_year },
        { label: "Gender", value: data.gender },
        { label: "Birth year", value: data.birth_year }
      ];

    case "/planets":
      return [
        { label: "", value: data.name },
        { label: "Population", value: data.population },
        { label: "Diameter", value: data.diameter },
        { label: "Rotation_period", value: data.rotation_period },
        { label: "Terrain", value: data.terrain }
      ];

    case "/starships":
      return [
        { label: "", value: data.name },
        { label: "Model", value: data.model },
        { label: "Cost", value: data.cost_in_credits },
        { label: "Length", value: data.length },
        { label: "Max speed", value: data.max_atmosphering_speed },
        { label: "Hyperdrive Rating", value: data.hyperdrive_rating },
        { label: "Starship Class", value: data.starship_class }
      ];

    default:
      return [];
  }
}
export async function showImage(endpoint, id) {
  let imageUrl = null;
  if (endpoint === "/people") {
    endpoint = "/characters";
  }
  const url = await fetch(`${baseImageUrl}${endpoint}/${id}.jpg`);
  if (url.status === 200) {
    imageUrl = url.url;
  } else {
    imageUrl =
      "https://starwars-visualguide.com/assets/img/big-placeholder.jpg";
  }
  return imageUrl;
}
