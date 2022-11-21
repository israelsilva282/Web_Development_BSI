import useSWR from "swr";

import { useRouter } from "next/router";
import { Error, GoBack } from "..";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

export default function Movies() {
  const router = useRouter();
  const { imdbID } = router.query;

  const { data, error } = useSWR(
    "https://www.omdbapi.com/?apikey=cfaaddf1&i=" + imdbID,
    fetcher
  );

  if (error) {
    return (
      <>
        <Error error={error} />
        <GoBack />
      </>
    );
  }

  if (!data || data.Search === "") {
    const antIcon = (
      <LoadingOutlined
        style={{
          fontSize: 24,
        }}
        spin
      />
    );
    return <Spin size="large" indicator={antIcon} style={{ width: "100%", justifyContent: "center" }}/>;
  }

  return (
    <div style={{ marginTop: "20px" }}>
      <center>
        <div>
          <img src={data.Poster}></img>
          <br />
          <h1>
            {data.Title} ({data.Year})
          </h1>
          <p>{data.Plot}</p>
        </div>
        <GoBack />
      </center>
    </div>
  );
}

async function fetcher(url) {
  const res = await fetch(url);

  const json = await res.json();

  return json;
}
