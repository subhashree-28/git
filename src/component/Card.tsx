import { Avatar, Card, CardContent, CardMedia, Grid, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GroupIcon from '@mui/icons-material/Group';

interface DataProps {
  primary: string,
  secondary: string,
  img: string,
  image: string
}

export default function AlignItemList({ primary, secondary, img, image }: DataProps) {

  return (
    
        <Card sx={{ width: 300, ml: "1ch", height: 400, mt: "1ch" }}>
          <CardContent>
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar alt="river" src={img} />
                </ListItemAvatar>
                <ListItemText primary={primary} secondary={secondary} />
              </ListItem>
            </List>
          </CardContent>
          <List>
            <Grid xs={4}>
              <ListItemButton>
                <ListItemIcon >
                  <CalendarMonthIcon />
                  <ListItemText primary="3 days 2 nights" />
                </ListItemIcon>
                <ListItemIcon >
                  <GroupIcon sx={{ marginLeft: 2 }} />
                  <ListItemText primary="3-5 guests" sx={{ marginLeft: 1 }} />
                </ListItemIcon>
              </ListItemButton>
            </Grid>
          </List>
          <CardMedia
            component="img"
            height="194"
            sx={{
              borderRadius: "8px", width: "30ch", ml: "1.5ch"
            }}
            image={image}
          />
        </Card>
     
  )
}