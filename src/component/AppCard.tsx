import { Avatar, Button, Card, CardContent, Dialog, Grid, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText, Tooltip, Typography } from "@mui/material";
import AdbIcon from '@mui/icons-material/Adb';
import MicrosoftIcon from '@mui/icons-material/Microsoft';
import AppleIcon from '@mui/icons-material/Apple';
import { Authors, CountriesCard } from "./config";
import FavoriteIcon from '@mui/icons-material/Favorite';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { useState } from "react";


function Countries() {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true)
  }
   
  const handleClickClose = () => {
    setOpen(false)
  }

  const DisplayData = (open && CountriesCard.length > 5) ?
    CountriesCard.slice(5) : CountriesCard;

  return (
    <Card sx={{ maxHeight: "420px" }}>
      <CardContent>
        <Grid display="flex" justify-content="space-between">
          <Typography fontSize={20} fontWeight={"bold"}>Top installed countries</Typography>
          <Button sx={{ ml: "5ch" }} onClick={handleClickOpen}>View All </Button>
        </Grid>
        <Dialog open={open} onClose={handleClickClose}>
          <Card>
            {DisplayData.map((card, index) => (
              <List key={index}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar src={card.image} />
                  </ListItemAvatar>
                  <ListItemText primary={card.label} />
                  <ListItemIcon >
                    <AdbIcon />
                    <ListItemText primary={card.android} />
                    <MicrosoftIcon sx={{ ml: "1ch" }} />
                    <ListItemText primary={card.microsoft} />
                    <AppleIcon sx={{ ml: "1ch" }} />
                    <ListItemText primary={card.apple} />
                  </ListItemIcon>
                </ListItem>
              </List>))}
          </Card>
        </Dialog>
        {CountriesCard.map((card, index) => (
          <List key={index}>
            <ListItem>
              <ListItemAvatar>
                <Avatar src={card.image} />
              </ListItemAvatar>
              <ListItemText primary={card.label} />

              <ListItemIcon >
                <AdbIcon />
                <ListItemText primary={card.android} />
                <MicrosoftIcon sx={{ ml: "1ch" }} />
                <ListItemText primary={card.microsoft} />
                <AppleIcon sx={{ ml: "1ch" }} />
                <ListItemText primary={card.apple} />
              </ListItemIcon>
            </ListItem>
          </List>))}
      </CardContent>
    </Card>
  )
}

function CardAuthors() {
  return (
    <Card >
      <CardContent>
        <Typography fontSize={20} fontWeight={"bold"}>Top authors</Typography>
        {Authors.map((author, index) => (
         <Grid item>
            <List key={index}>
            <ListItem>
              <ListItemAvatar>
                <Tooltip title={author.mail}>
                  <Avatar src={author.avatar_image} />
                </Tooltip>
              </ListItemAvatar>
              <ListItemText primary={author.label}
                secondary={<List>
                  <ListItemText>
                    <ListItemIcon>
                      <FavoriteIcon />
                      <ListItemText primary={author.fav} sx={{ ml: "1ch" }} />
                    </ListItemIcon>
                  </ListItemText>
                </List>} />
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: "lightseagreen" }}>
                  <EmojiEventsIcon />
                </Avatar>
              </ListItemAvatar>
            </ListItem>
          </List>
          </Grid>
        ))}
      </CardContent>
    </Card>
  )
}

function CardProgress() {
  return (

    <><Card sx={{ bgcolor: "lightgreen", width: 280, height: 150, ml: "1ch", mt: "1ch", mb: "1ch" }}>
      <Typography color={"white"} fontSize={30}>38,566</Typography>
      <Typography color={"white"}>Conversion</Typography>
    </Card><Card sx={{ bgcolor: "lightblue", width: 280, height: 150, ml: "1ch", mt: "1ch", mb: "1ch" }}>
        <Typography color={"white"} fontSize={30}>555,66</Typography>
        <Typography color={"white"}>Applications</Typography>
      </Card></>

  )
}

export default function CardItem() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4} md={4}>
        <Countries />
      </Grid>
      <Grid item xs={12} sm={4} md={4}>
        <CardAuthors />
      </Grid>
      <Grid item xs={12} sm={4} md={4}>
        <CardProgress />
      </Grid>
    </Grid>
  )
}