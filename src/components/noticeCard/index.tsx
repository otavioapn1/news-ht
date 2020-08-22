import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { IPost } from '../../interfaces'
import { useStyles } from './styles'
import CardMedia from '@material-ui/core/CardMedia';

const NoticeCard: React.FC<IPost> = ({ title, author, image, notice }) => {
    const classes = useStyles();
    return (
        <>
            <Card className={classes.card}>
                <CardContent>
                    <Typography align="center" variant="h5" component="h3">
                        {title}
                    </Typography>
                    <Typography align="center" variant="body2" color="textSecondary" className={classes.pos} component="h3">
                        {author}
                    </Typography>
                    <Typography align="center" variant="body2" className={classes.pos} >
                        <CardMedia
                            className={classes.media}
                            image={image}
                        />
                    </Typography>
                    <Typography align="justify" variant="body2" className={classes.pos}>
                        {notice}
                    </Typography>
                </CardContent>
            </Card>
        </>
    )

}

export default NoticeCard;