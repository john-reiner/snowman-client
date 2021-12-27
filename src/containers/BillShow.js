import React, {useState} from 'react'

import ConfirmDelete from './ConfirmDelete';
import EditBill from './EditBill';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Grid, Container } from '@mui/material';

export default function BillShow(props) {

    const [confirmShow, setConfirmShow] = useState(false)
    const [editShow, setEditShow] = useState(false)

    const handleDelete = () => setConfirmShow(true)
    const handleEditShow = () => setEditShow(true)

    console.log(props.title)

    return (
        <Container>
            <EditBill setReloadBills={props.setReloadBills} id={props.id} editShow={editShow} setEditShow={setEditShow}/>
            <ConfirmDelete setReloadBills={props.setReloadBills} id={props.id} title={props.title} handleClose={setConfirmShow} handleDelete={handleDelete} open={confirmShow} />
            <Grid container direction="row" justifyContent="space-between" alignItems="center">
                <Grid item >
                    <IconButton aria-label="edit"
                        onClick={handleEditShow}
                    >
                        <EditIcon />
                    </IconButton> 
                    <IconButton aria-label="delete"
                        onClick={handleDelete}
                    >
                        <DeleteIcon />
                    </IconButton> 
                </Grid>
            </Grid>
        </Container>
    )
}

