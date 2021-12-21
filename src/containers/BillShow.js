import React, {useState} from 'react'

import ConfirmDelete from './ConfirmDelete';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography'

export default function BillShow(props) {

    const [confirmShow, setConfirmShow] = useState(false)

    const handleDelete = () => {
        setConfirmShow(true)
        console.log(props.id)
    }

    return (
        <div>
            <ConfirmDelete title={props.title} handleClose={setConfirmShow} handleDelete={handleDelete} open={confirmShow} />
            <Typography variant="p" color="initial"> 
                Delete {props.title} 
                <IconButton aria-label="delete"
                    onClick={handleDelete}
                >
                    <DeleteIcon />
                </IconButton> 
            </Typography>
        </div>
    )
}

