import React, { useState } from 'react';
import Header from '../../components/header'
import { Grid } from '@material-ui/core';
import NoticeCard from '../../components/noticeCard'
import { IPost } from '../../interfaces';


const Home: React.FC = () => {
    const [data, setData] = useState<IPost[]>([
        {
            title: 'TESSTE',
            author: 'DASDAD',
            date: new Date(),
            image: 'https://catracalivre.com.br/wp-content/uploads/2020/06/istock-876560704-910x607.jpg',
            notice: 'dsffffsfdsfsfsdf'
        },
        {
            title: 'TESaadadadadadadSTE',
            author: 'DASDdaASDSADEFTHUJJUIJAD',
            date: new Date(),
            image: 'https://catracalivre.com.br/wp-content/uploads/2020/06/istock-876560704-910x607.jpg',
            notice: 'dsffffsfdsfsfsdf'
        }

    ])

    return (
        <>
            <Header />
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                {data.map((post: IPost) =>
                    <NoticeCard
                        title={post.title}
                        author={post.author}
                        date={post.date}
                        image={post.image}
                        notice={post.notice}
                    />
                )}
            </Grid>
        </>
    );
}

export default Home;