import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Container, Divider, Grid, Stack, TextField, Typography, } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const ColorIcon = {
  color: '#cccccc', 
  fontSize: 40
}

const ColorAccordion = {
  bgcolor: '#303030', 
  color: 'white'
}

const FaQuestion = () => {

  return (
    <Box>
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Typography
          sx={{ mb: 6 }}
          variant="h3"
          component="h3"
          color="white"
          align="center"
        >
          Frequently Asked Questions
        </Typography>
        <Stack spacing={1} mb={8}>
          <Accordion square sx={ColorAccordion}>
            <AccordionSummary
              expandIcon={<AddIcon sx={ColorIcon} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h5">What is Netflix ?</Typography>
            </AccordionSummary>
            <Divider sx={{ bgcolor: 'black' }} />
            <AccordionDetails>
              <Typography variant="h5" mb={4}>
                Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
              </Typography>
              <Typography variant="h5">
                You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There is always something new to discover and new TV shows and movies are added every week!
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion square sx={ColorAccordion}>
            <AccordionSummary
              expandIcon={<AddIcon sx={ColorIcon} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h5">How much does Netflix cost ?</Typography>
            </AccordionSummary>
            <Divider sx={{ bgcolor: 'black' }} />
            <AccordionDetails>
              <Typography variant="h5" mb={4}>
                Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EUR8.99 to EUR17.99 a month.  No extra costs, no contracts.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion square sx={ColorAccordion}>
            <AccordionSummary
              expandIcon={<AddIcon sx={ColorIcon} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h5">Where can I watch ?</Typography>
            </AccordionSummary>
            <Divider sx={{ bgcolor: 'black' }} />
            <AccordionDetails>
              <Typography variant="h5" mb={4}>
                Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.              </Typography>
              <Typography variant="h5">
                You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion square sx={ColorAccordion}>
            <AccordionSummary
              expandIcon={<AddIcon sx={ColorIcon} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h5">How do I cancel ?</Typography>
            </AccordionSummary>
            <Divider sx={{ bgcolor: 'black' }} />
            <AccordionDetails>
              <Typography variant="h5" mb={4}>
                Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion square sx={ColorAccordion}>
            <AccordionSummary
              expandIcon={<AddIcon sx={ColorIcon} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h5">What can I watch on Netflix</Typography>
            </AccordionSummary>
            <Divider sx={{ bgcolor: 'black' }} />
            <AccordionDetails>
              <Typography variant="h5" mb={4}>
                Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion square sx={ColorAccordion}>
            <AccordionSummary
              expandIcon={<AddIcon sx={ColorIcon} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h5">Is Netflix good for kids</Typography>
            </AccordionSummary>
            <Divider sx={{ bgcolor: 'black' }} />
            <AccordionDetails>
              <Typography variant="h5" mb={4}>
                The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.
              </Typography>
              <Typography variant="h5">
                Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Stack>
        <Box sx={{ px: 12 }}>
          <Typography
            sx={{ my: 3 }}
            variant="h6"
            component="p"
            color="white"
            textAlign="center"
          >
            Ready to watch? Enter your email to create or restart your membership.
          </Typography>
          <Grid container>
              <Grid item xs>
                <TextField
                  sx={{ bgcolor: 'white' }}
                  variant="filled"
                  label="Email address"
                  fullWidth
                />
              </Grid>
              <Grid item xs="auto">
                <Button
                  sx={{ height: '100%', borderRadius: '2px'}}
                  variant="contained"
                  size="large"
                  color="primary"
                >
                  Get started <ChevronRightIcon/>
                </Button>
              </Grid>
            </Grid>

        </Box>

      </Container>
      <Divider sx={{ bgcolor: '#222222', height: '8px', }} />
    </Box>
    
  )
}

export default FaQuestion