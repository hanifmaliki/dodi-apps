import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const EditUserDialog = ({ isOpen, setIsOpen }) => {
    const [name, setName] = React.useState('')
    const [age, setAge] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const handleSubmit = () => {
        if (validateForm()) {
            setIsOpen(false);
        }
    }

    const validateForm = () => {
        if (name === '' || age === '' || email === '' || password === '') {
            alert('Please fill all forms.')
            return false
        }
        return true
    }

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <Dialog open={isOpen} onClose={handleClose}>
            <DialogTitle>Edit User</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Please fill this form with latest user data.
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Name"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="age"
                    label="Age"
                    type="number"
                    fullWidth
                    variant="standard"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="email"
                    label="Email"
                    type="email"
                    fullWidth
                    variant="standard"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="password"
                    label="Password"
                    type="password"
                    fullWidth
                    variant="standard"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSubmit}>Submit</Button>
            </DialogActions>
        </Dialog>
    );
}

export default EditUserDialog