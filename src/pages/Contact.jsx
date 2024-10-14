// src/components/Contact.jsx

import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, email, message });
        setSubmitted(true);
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <Container maxWidth="sm" className="contact-container pb-20 pt-24">
            <Typography variant="h4" component="h1" gutterBottom>
                Contact Us
            </Typography>
            {submitted ? (
                <Box className="success-message">
                    <Typography variant="h6">
                        Thank you for contacting us! We will get back to you soon.
                    </Typography>
                </Box>
            ) : (
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Name"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <TextField
                        label="Message"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        multiline
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                    <Button variant="contained" color="primary" fullWidth type="submit">
                        Send Message
                    </Button>
                </form>
            )}
        </Container>
    );
};

export default Contact;
