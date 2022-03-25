import { AddCircle } from '@mui/icons-material';
import { Box, Button, Container, FormControl, Grid, IconButton, Modal, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Footer from '../../component/footer/footer';
import Logo from '../../component/logo/logo';
import { Link } from 'react-router-dom'

const ProfileScreen = () => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 450,
        background: 'rgba(0, 0, 0, 0.4)',
        backgroundImage: `linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.6) 0,
          rgba(0, 0, 0, 0) 60%,
          rgba(0, 0, 0, 0.8) 100%
        )`,
        boxShadow: 24,
        p: 7,
    };

    const [profiles, setProfiles] = useState<any>(() => {
        const savedProfiles = localStorage.getItem("profiles");
        console.log(savedProfiles);
        if (savedProfiles) {
            return JSON.parse(savedProfiles);
        } else {
            return [];
        }
    });

    const [profile, setProfile] = useState<string>("");
    const [profilePic, setProfilePic] = useState<string>("");
    const [manageProfile, setManageProfile] = useState<boolean>(false);
    const [currentProfile, setCurrentProfile] = useState<any>({});
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [openEdit, setOpenEdit] = useState(false);
    const handleEditClose = () => setOpenEdit(false);

    useEffect(() => {
        localStorage.setItem("profiles", JSON.stringify(profiles));
    }, [profiles]);

    function handleInputChange(e: any) {
        setProfile(e.target.value);
    }

    function handleInputPicChange(e: any) {
        setProfilePic(e.target.value);
    }

    function handleEditInputChange(e: any) {
        setCurrentProfile({ ...currentProfile, text: e.target.value });
    }

    function handleEditInputPicChange(e: any) {
        setCurrentProfile({ ...currentProfile, pic: e.target.value });
    }

    function handleFormSubmit(e: any) {
        e.preventDefault();
        if (profile !== "" || profilePic !== "") {
            setProfiles([
                ...profiles,
                {
                    id: profiles.length + 1,
                    text: profile.trim(),
                    pic: profilePic.trim()
                }
            ]);
        }
        setProfile("");
        setProfilePic("");
    }

    function handleEditFormSubmit(e: any) {
        e.preventDefault();
        handleUpdateProfile(currentProfile.id, currentProfile);
        setOpenEdit(false);
    }

    function handleDeleteClick(id: number) {
        const removeItem = profiles.filter((profile: { id: number; }) => {
            return profile.id !== id;
        });
        setProfiles(removeItem);
    }

    function handleUpdateProfile(id: number, updatedProfile: {}) {

        const updatedItem = profiles.map((profile: { id: number; }) => {
            return profile.id === id ? updatedProfile : profile;
        });
        setProfiles(updatedItem);
    }

    function handleEditClick(profile: React.SetStateAction<{}>) {
        setOpenEdit(true);
        setCurrentProfile({ ...profile });
    }

    return (
        <Box>
            <Logo />
            <Box>
                <Container maxWidth="lg" sx={{ py: 6, mt: 12 }}>
                    <Grid item xs={12}>
                        <Typography
                            variant="h2"
                            component="h1"
                            sx={{ textAlign: { xs: 'center', } }}
                        >
                            Who's watching ?
                        </Typography>
                    </Grid>
                    <Grid sx={{ py: 6, mt: 2 }}
                        container
                        rowSpacing={1}
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Grid container justifyContent="center" item xs={3}>
                            <Stack>
                                <Link to="../showsList">
                                    <img style={{ maxHeight: '200px', border: '5px solid #1e1e1e' }} src='../img/profile-avatarA.png' alt='ProfilePicture' />
                                    <Typography
                                        variant="h5"
                                        component="h2"
                                        sx={{ mt: 2, textAlign: { xs: 'center' }, color: '#808080', }}
                                    >
                                        Tom
                                    </Typography>
                                </Link>
                            </Stack>
                        </Grid>

                        {profiles.map((profile: any, index: React.Key | null | undefined) => (
                            <Grid container justifyContent="center" item xs={3} key={index}>
                                <Stack>
                                    <Link to="../showsList">
                                        <img style={{ maxHeight: '200px', maxWidth: '200px', border: '5px solid #1e1e1e' }} src={profile.pic} alt={profile.pic} />
                                        <Typography
                                            variant="h5"
                                            component="h2"
                                            sx={{ mt: 2, textAlign: { xs: 'center' }, color: '#808080', }}
                                        >
                                            {profile.text}
                                        </Typography>
                                    </Link>
                                    {manageProfile ?
                                        <Stack direction="row" spacing={1}>
                                            <Button onClick={() => handleDeleteClick(profile.id)} type="submit" variant="outlined" size="large" fullWidth>
                                                Delete
                                            </Button>
                                            <Button onClick={() => handleEditClick(profile)} type="submit" variant="outlined" size="large" fullWidth>
                                                Edit
                                            </Button>

                                        </Stack>
                                        : null}
                                </Stack>

                            </Grid>
                        ))}
                        <Grid container justifyContent="center" item xs={3}>
                            <Stack>
                                <Box style={{ height: '199px', textAlign: 'center', paddingTop: '35%' }}>
                                    <IconButton onClick={handleOpen} sx={{ color: '#808080' }}>
                                        <AddCircle style={{ fontSize: 100 }} />
                                    </IconButton>
                                </Box>
                                <Typography
                                    variant="h5"
                                    component="h2"
                                    sx={{ mt: 2, textAlign: { xs: 'center' }, color: '#808080', }}
                                >
                                    Add Profile
                                </Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="center">
                        <Button variant="outlined" sx={{ color: '#808080', border: 'solid 1px #808080', borderRadius: '0' }} onClick={() => setManageProfile(!manageProfile)}>
                            Manage Profiles
                        </Button>
                    </Grid>
                </Container>
            </Box>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form onSubmit={handleFormSubmit}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Add profile
                        </Typography>
                        <FormControl sx={{ mb: 2, }} fullWidth>
                            <TextField
                                className='text__field'
                                id="profile"
                                label="Profile name"
                                name="profile"
                                type="text"
                                placeholder="Create a new profile"
                                value={profile}
                                onChange={handleInputChange}
                                variant="filled"
                                sx={{ backgroundColor: '#333333', input: { color: 'white' } }}
                                InputLabelProps={{
                                    style: { color: '#7a7a7a', },
                                }}
                            />
                        </FormControl>
                        <FormControl sx={{ mb: 2, }} fullWidth>
                            <TextField
                                className='text__field'
                                id="profilePic"
                                label="Profile Picture (url)"
                                name="profilePic"
                                type="text"
                                placeholder="Create a new profilePic"
                                value={profilePic}
                                onChange={handleInputPicChange}
                                variant="filled"
                                sx={{ backgroundColor: '#333333', input: { color: 'white' } }}
                                InputLabelProps={{
                                    style: { color: '#7a7a7a', },
                                }}
                            />
                        </FormControl>
                        <Button type="submit" variant="contained" size="large" fullWidth>
                            Add
                        </Button>
                    </form>
                </Box>
            </Modal>
            <Modal
                open={openEdit}
                onClose={handleEditClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form onSubmit={handleEditFormSubmit}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Edit profile
                        </Typography>
                        <FormControl sx={{ mb: 2, }} fullWidth>
                            <TextField
                                className='text__field'
                                id="profileEdit"
                                label="Profile name"
                                name="editProfile"
                                type="text"
                                placeholder="Edit profile name"
                                value={currentProfile.text}
                                onChange={handleEditInputChange}
                                sx={{ backgroundColor: '#333333', input: { color: 'white' } }}
                                InputLabelProps={{
                                    style: { color: '#7a7a7a', },
                                }}
                            />
                        </FormControl>
                        <FormControl sx={{ mb: 2, }} fullWidth>
                            <TextField
                                className='text__field'
                                id="profilePicEdit"
                                label="Profile Picture (url)"
                                name="editProfilePic"
                                type="text"
                                placeholder="Edit profile picture (url)"
                                value={currentProfile.pic}
                                onChange={handleEditInputPicChange}
                                variant="filled"
                                sx={{ backgroundColor: '#333333', input: { color: 'white' } }}
                                InputLabelProps={{
                                    style: { color: '#7a7a7a', },
                                }}
                            />
                        </FormControl>
                        <Button type="submit" variant="contained" size="large" fullWidth>
                            Save
                        </Button>
                    </form>
                </Box>
            </Modal>
            <Footer />
        </Box>

    )
}

export default ProfileScreen