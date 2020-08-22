import React, { useState } from 'react';
import Header from '../../components/header'
import { Grid } from '@material-ui/core';
import NoticeCard from '../../components/noticeCard'
import { IPost } from '../../interfaces';


const Home: React.FC = () => {
    const [data, setData] = useState<IPost[]>([
        {
            title: 'Intérpretes de Libras: o que fazem e qual a sua importância na comunidade surda?',
            author: 'by Otavio',
            image: 'https://blog.handtalk.me/wp-content/uploads/2020/06/098-capa_blog_interprete.png',
            notice: 'É muito comum vermos a participação desses profissionais em propagandas eleitorais e comunicados federais, mas eles estão mais presentes na vida dos surdos do que se imagina. A atuação dos intérpretes de Libras é necessária também em escolas, eventos culturais e até mesmo em consultas médicas. No entanto, para que a pessoa realize esse tipo de trabalho é necessário que ela possua qualificação adequada e especialização na área em que atua (corporativa, jurídica, cultural, entre outras). Além disso, pelo fato da Libras ser uma língua viva, ela constantemente passa por melhorias e formação de novos vocábulos, e é aí que o profissional que está sempre atualizado se destaca'
        },
        {
            title: 'Capacitismo: o que é e como acontece no ambiente de trabalho',
            author: 'by Otavio',
            image: 'https://blog.handtalk.me/wp-content/uploads/2020/06/094-capa_blog_blend_edu.png',
            notice: 'O sexismo em relação às mulheres, o racismo contra as pessoas negras e a homofobia, transfobia e outras formas de discriminação de gênero em relação ao grupo LGBT+, são conceitos que já são mais amplamente debatidos na pauta nacional e ganharam destaque nos últimos anos. Isso se deve graças a eventos de alcance nacional, como a Parada do Orgulho LGBT, e programas de entretenimento na TV aberta, como o caso do BBB 20, que recentemente mobilizou a audiência em torno do feminismo e da sororidade.'
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
                        image={post.image}
                        notice={post.notice}
                    />
                )}
            </Grid>
        </>
    );
}

export default Home;