import { useParams } from "react-router-dom";
import { useFetchData } from "../../hooks/useFetchData";
import { useEffect } from "react";
import ArtworkView from "./ArtworkView";
import Layout from "../Layout";

function Artwork() {
  let { id } = useParams();
  const dataUrl = `/data/${id}.json`;

  const [{ data, isLoading }, doFetch] = useFetchData(dataUrl);

  useEffect(() => {
    doFetch(dataUrl);
  }, [dataUrl, doFetch, id]);

  return isLoading || !data ? (
    <Layout>
      <p>Loading...</p>
    </Layout>
  ) : (
    <Layout>
      <ArtworkView data={data} />
    </Layout>
  );
}

export default Artwork;
