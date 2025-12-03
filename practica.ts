const apiKey = "LW4Gk6jUgr8IVZghfirc6HGvzWD6qjqTJ0csEzuZ";
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
interface NasaData {
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
}

async function NasaApiAxios() {
  fetch(apiUrl)
    .then((res: Response) => {
      if (!res.ok) {
        throw new Error("Cannot fetch data");
      }
      return res.json() as Promise<NasaData>;
    })
    .then((data) => {
      const {
        date,
        explanation,
        hdurl,
        media_type,
        service_version,
        title,
        url,
      } = data;
      console.log("fetching data using Axios: ", date);
    })
    .catch((error: Error) => {
      console.error(error);
    });
}

NasaApiAxios();

async function NasaFetch() {
  try {
    const res = await fetch(apiUrl);
    if (!res.ok) {
      throw new Error("Cannot fetch data");
    }

    const data: NasaData = await res.json();
    const {
      date,
      explanation,
      hdurl,
      media_type,
      service_version,
      title,
      url,
    } = data;
    console.log("fetching api using fetch: ", explanation);
  } catch (error) {
    console.error(error);
  }
}

NasaFetch();
