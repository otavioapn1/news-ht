import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({

    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    card: {
        marginTop: 10,
        width: '800px'
    },
    media: {
        height: '300px',
        width: '500px',
        display: 'inline-block'

    }
});