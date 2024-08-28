import {
  Autocomplete,
  Box,
  Button,
  FormControlLabel,
  Grid,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

export default function Form() {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <UserImage />
      </Grid>
      <Grid item>
        <UserDetails />
      </Grid>
    </Grid>
  );
}

function UserImage() {
  return (
    <Box height={400} width={250} my={4} p={2} boxShadow={2}>
      <CameraAltIcon fontSize="large" />
      <Typography variant="body2" textAlign="center" mt={13} color="grey">
        Allowed *.jpeg, *.jpg, *.png, *.gif max size of 3 Mb
      </Typography>
      <Typography mt={10} ml={2}>
        Email verified
      </Typography>

      <FormControlLabel
        value="start"
        control={<Switch color="primary" />}
        label="Disabling this will automatically send the user a verification email"
        labelPlacement="start"
      />
    </Box>
  );
}

function UserDetails() {
  return (
    <Box height={400} width={450} my={4} p={2} boxShadow={2}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Full name"
            variant="outlined"
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Email address"
            variant="outlined"
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Enter phone number"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <Autocomplete
            id="Country-select-demo"
            options={["India", "America", "Dubai"]}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Country"
                placeholder="Choose a country"
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="State/region"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="City"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Address"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Zip/code"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Company"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Role"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs={6}>
          <Button
            variant="contained"
            color="success"
            sx={{ marginLeft: "auto" }}
          >
            Create user
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
