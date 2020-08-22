import React from 'react';
import Header from '../../components/header'
import { Grid, Box, Button, TextField, Typography } from '@material-ui/core';

const Add: React.FC = () => {
    return (
        <>
            <Header />
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                md={12}
            >

                <Box style={{ width: '45%', marginTop: '45px' }}>
                    <TextField style={{ width: '100%' }} id="outlined-basic" label="Título" variant="outlined" />
                </Box>
                <Box style={{ width: '45%', marginTop: '10px' }}>
                    <Typography>
                        Imagem:
                    </Typography>
                    <input id="image-file" type="file" />
                </Box>
                <Box style={{ width: '45%', marginTop: '10px' }}>
                    <TextField multiline={true} rows={10} style={{ width: '100%' }} id="outlined-basic" label="Conteúdo" variant="outlined" />
                </Box>
                <Box style={{ width: '45%', marginTop: '10px' }}>
                    <Button variant='contained'>
                        Salvar
                 </Button>
                </Box>

            </Grid>
        </>
    )
}

export default Add;