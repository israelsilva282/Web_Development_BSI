import useSWR from 'swr'
import { useRouter } from 'next/router'

import { Spin } from 'antd';
import 'antd/dist/reset.css';
import { Error, GoBack } from '..';
import Link from 'next/link';

import React from 'react';
import { Button, Popover } from 'antd';

export default function Movie() {
    const router = useRouter();
    const { key } = router.query;

    const { data, error } = useSWR("https://www.omdbapi.com/?apikey=cfaaddf1&s=" + key, fetcher);

    return (
        <div>
            <TheMovies data={error ? { error: 'Erro na pesquisa' } : data ? data : { Search: '' }} />
        </div>
    )
}

export function TheMovies({ data }) {
    const router = useRouter();

    if (data.Error) {
        return (
            <>
                <Error error={data.Error} />
                <Button style={{ display: "block", margin: "1rem auto" }}><GoBack /></Button>
            </>
        )
    }

    if (!data || data.Search === '') {
        return <Spin />
    }

    let dados = Array.isArray(data.Search) ? data.Search.map((m) => {
        return {
            ...m,
            key: m.imdbID
        };
    }) : () => {
        data.Title = <a href={"onemovie/" + m.imdbID}>{m.Title}</a>;
        return {
            ...data,
            key: data.imdbID
        }
    }

    document.body.style.backgroundImage = `url("https://images5.alphacoders.com/774/774369.jpg")`;

    return (
        <>
            <section className='container' style={{
                background: "white",
                maxWidth: "30%",
                margin: "50px auto",
                padding: "20px",
                borderRadius: "10px",
            }}>
                <div className='row' >
                    <div className='col p-0 mt-3'>
                        <h2 style={{ display: "flex", width: "100%", justifyContent: "center", background: "white", borderRadius: "5px", padding: "10px", color: "#1677ff" }} > Filmes encontrados:</h2>
                        <div>
                            {data.Search.map((m) => (
                                <Popover content={(content) => {
                                    return content = (
                                        <img src={m.Poster}></img>
                                    );
                                }} placement="right" trigger="hover" >
                                    <Button style={{ display: "block", margin: "1rem auto" }}><Link href={`/onemovie/${m.imdbID}`}>
                                        {m.Title} ({m.Year})
                                    </Link></Button>
                                </Popover>
                            ))}
                        </div>
                        <Button style={{ display: "block", margin: "1rem auto" }}><GoBack /></Button>
                    </div>
                </div>
            </section >
        </>
    )
}

async function fetcher(url) {

    const res = await fetch(url);

    const json = await res.json();

    return json;

}