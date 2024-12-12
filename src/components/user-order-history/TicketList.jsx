import React from 'react';
import {Box, Chip, Divider, Grid} from '@mui/material';
import ETicket from "../Payment/ETicket";

const TicketList = ({ tickets }) => {
    return (
        <Box>
            <Box sx={{marginBottom: 1,marginTop: 2,}}>
                <Divider
                    sx={{borderColor: 'white', // Change the border color
                        '&::before, &::after': {
                          borderColor: 'white', // Ensure pseudo-elements are also styled
                        },}}
                >
                    <Chip 
                        label="Ticket" 
                        sx={{color:"white", 
                            fontWeight: 'bold',
                            backgroundImage: 'linear-gradient(90deg, #0ba360 0%, #3cba92 100%)',
                        }}                        
                        />
                </Divider>
            </Box>


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