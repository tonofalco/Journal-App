import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { TurnedInNot } from '@mui/icons-material'

export const SideBar = ({ drawerWidht }) => {
    return (
        <Box
            component={'nav'}
            sx={{ width: { sm: drawerWidht }, flexShrink: { sm: 0 } }}
        >
            <Drawer
                variant="permanent" //temporary
                open
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidht }
                }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component='div'>Antonio Garcia</Typography>
                </Toolbar>
                <Divider />

                <List>
                    {
                        ['enero', 'febrero', 'marzo', 'abril'].map(text => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot />
                                    </ListItemIcon>
                                    <Grid container>
                                        <ListItemText primary={text} />
                                        <ListItemText  secondary={'Lorem ipsum dolor sit amet consectetur adipisicing.'}/>
                                        
                                    </Grid>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>

            </Drawer>

        </Box>
    )
}
