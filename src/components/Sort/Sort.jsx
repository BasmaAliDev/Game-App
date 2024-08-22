import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import Card from '../Card/Card';
import { useParams } from 'react-router-dom';
export default function Sort() {
    let { type } = useParams();
    const [allCategory, setAllCategory] = useState(null);

    const getAllCategory = async () => {
        const {data} = await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=${type}`, {
            headers: {
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
                'x-rapidapi-key': 'cf0d354a93msha6cf1d2ff183363p17a174jsnc24f4f4f6d47'
            }
        });
        return data;
    };

    const { data, isLoading } = useQuery(['AllGame', type], getAllCategory);

    useEffect(() => {
        if (data) {
            setAllCategory(data);
            console.log(allCategory);
        }
    }, [data, allCategory]);

    if (isLoading) return <Loading />;

 return <>
{

<div className="container py-5">
<div className="row g-4">
{allCategory?.map((game,idx)=>{
return <Card key={idx} game={game}/>
 })}
</div>
</div>
}


  </>

}
