import { Toolbar } from "@mui/material"
import { Box, display } from "@mui/system"
import { NavBar, SideBar } from "../components/"


const drawerWidht = 240


export const JournalLayout = ({ children }) => {
    return (
        <Box sx={{ display: 'flex' }}>

            <NavBar drawerWidht={drawerWidht} />

            <SideBar drawerWidht={drawerWidht} />

            <Box
                component='main'
                sx={{ flexGrow: 1, p: 3 }}
            >
                <Toolbar />

                {children}

            </Box>

        </Box>
    )
}
