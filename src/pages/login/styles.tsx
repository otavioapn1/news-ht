import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    box: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    login: {
        margin: theme.spacing(3, 0, 2),
    },
}));