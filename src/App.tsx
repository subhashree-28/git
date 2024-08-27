import { Grid } from '@mui/material';
import AlignItemList from './component/Card';
import { DataCard } from './component/config';

function App() {
  return (
    <div>
      <Grid container>
      {DataCard.map((item, index) => (
        <Grid xs={12} md={4} key={index}>
        <AlignItemList  
        primary={item.label} 
        secondary={item.date} 
        img={item.avatar_image} 
        image={item.image} />
        </Grid>
      ))}
      </Grid>
    </div>
  );
}

export default App;
