import { AppBar, Grid, Select, Toolbar, MenuItem, Button, Icon, ListItemIcon, ListItemText, Stack, Typography, Box, Container} from '@mui/material'
import React from 'react'
import LanguageIcon from '@mui/icons-material/Language';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'common.black', color: 'grey.700' }}>

      <Container maxWidth="md" sx={{ py: 6 }}>
        <Stack spacing={4}>

          <Typography>
            Questions ? Call (+33) 0805-543-064
          </Typography>

          <Box>
            <Grid container spacing={4}>
              <Grid item xs={6} md={3}>
                <Stack spacing={2}>
                  <Typography variant="caption" component="a" href="#">
                    FAQ
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                    Investor Relations
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                    Ways to Watch
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                    Corporate information
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                    Only on Netflix
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={6} md={3}>
                <Stack spacing={2}>
                  <Typography variant="caption" component="a" href="#">
                    Help Center
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                    Jobs
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                    Terms of use
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                    Contact Us
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={6} md={3}>
                <Stack spacing={2}>
                  <Typography variant="caption" component="a" href="#">
                    Account
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                    Redeem Gift Cards
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                    Privacy 
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                    Speed Test
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={6} md={3}>
                <Stack spacing={2}>
                  <Typography variant="caption" component="a" href="#">
                    Media Center
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                    Buy Gift Cards
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                    Cookie Preferences
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                    Legal Notices
                  </Typography>
                </Stack>
              </Grid>

            </Grid>
          </Box>

          <Box>
            <Select
              name="lang"
              variant="outlined"
              size="small"
              defaultValue="EN"
              sx={{
                borderWidth: '2px',
                borderStyle: 'solid',
                borderColor: 'common.white',
                color: 'common.white',
                '& .MuiSelect-icon': {
                  color: 'common.white'
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  border: 'none'
                }
              }}
            >
              <MenuItem value="FR">France</MenuItem>
              <MenuItem value="EN">English</MenuItem>
            </Select>
          </Box>

          <Typography variant="caption">Netflix France</Typography>

        </Stack>
      </Container>

    </Box>
  )
}

export default Footer