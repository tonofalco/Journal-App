
import { IconButton, Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"
import { AddOutlined } from '@mui/icons-material';


export const JournalPage = () => {
    return (
        <JournalLayout>

            {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus delectus qui dolorum inventore ab obcaecati itaque quo, sapiente ipsum omnis quia facere, cum dolores, saepe possimus hic mollitia culpa eaque? */}

            {/* <NothingSelectedView /> */}
            <NoteView />

            <IconButton
                size="large"
                sx={{
                    color: 'white',
                    backgroundColor: 'error.main',
                    ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
                    position: 'fixed',
                    right: 50,
                    bottom: 50
                }}
            >
                <AddOutlined sx={{fontSize: 30}}/>
            </IconButton>


        </JournalLayout>
    )
}