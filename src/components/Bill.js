import React, {useState} from 'react'

import { Table, TableRow, TableCell, IconButton,TableHead, TableBody, Typography, Collapse, Box } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function Bill(props) {

    const [open, setOpen] = useState(false)

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">{props.title}</TableCell>
                <TableCell align="right">{props.due_date}</TableCell>
                <TableCell align="right">{props.amount_due}</TableCell>
                <TableCell align="right">{props.interest_rate}</TableCell>
                <TableCell align="right">{props.balance}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <Box sx={{ margin: 1 }}>
                        <Typography variant="h6" gutterBottom component="div">
                            Something about the {props.title} bill
                        </Typography>
                    </Box>
                </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    )
}

        // <tr onClick={() => props.handleBillModalShow(props.id)}>
        //     <td>{props.title}</td>
        //     <td>{props.due_date}</td>
        //     <td>{props.amount_due}</td>
        //     <td>{props.interest_rate}</td>
        //     <td>{props.balance}</td>
        // </tr>