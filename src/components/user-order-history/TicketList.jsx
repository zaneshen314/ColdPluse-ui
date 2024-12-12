import React from 'react';
import {Box, Chip, Divider, Grid} from '@mui/material';
import ETicket from "../Payment/ETicket";

const TicketList = ({ tickets }) => {
    return (
        <Box>
            <Divider
                sx={{
                    marginBottom: 1,
                    marginTop: 2,
                    fontSize: "1.3rem",
                    fontWeight: "bold",
                }}
            >
                <Chip label="Ticket Folder" />
            </Divider>

            <Grid container spacing={2}>
                {tickets.map((ticket, index) => {
                    const eticket = {
                        id: ticket.id,
                        idCardNum: ticket.idCardNum,
                        viewerName: ticket.viewerName
                    };
                    return (
                        <Grid item xs={12 / tickets.length} key={index} sx={{ textAlign: 'center' }}>
                            <ETicket ticket={eticket}/>
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
};

export default TicketList;