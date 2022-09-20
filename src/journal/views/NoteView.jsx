import { Grid, Typography, Button, TextField } from "@mui/material"
import { SaveOutlined } from '@mui/icons-material'
import { ImageGallery } from "../components"


export const NoteView = () => {
    return (

        <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1 }}>
            <Grid item>
                <Typography fontSize={39} fontWeight='light'>28 de Agosto, 2023</Typography>
            </Grid>
            <Grid item>
                <Button color="primary" sx={{ padding: 2 }}>
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} /> Guardar
                </Button>
            </Grid>

            <Grid container>
                <TextField
                    type='text'
                    variant="filled"
                    fullWidth
                    placeholder="Ingese un titulo"
                    sx={{ boder: 'none', mb: 1 }}
                />
            </Grid>

            <Grid container>
                <TextField
                    type='text'
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="¿Que sucedio el dia de hoy?"
                    label='Titulo'
                    minRows={5}
                />
            </Grid>

            {/* image galerry */}
            <ImageGallery />

        </Grid>

    )
}
