import { Grid } from '@mui/material';
import AlignItemList from './component/Card';
import { CountriesCard } from './component/config';
import Countries from './component/AppCard';
import Card from './component/AppCard';
import CardItem from './component/AppCard';

function App() {
  return (
    <div>
      {/* <Grid container spacing={2}>
        {DataCard.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <AlignItemList
              primary={item.label}
              secondary={item.date}
              img={item.avatar_image}
              image={item.image} />
          </Grid>
        ))}
      </Grid> */}
      <CardItem />
      {/* {CountriesCard.map((card,index) => 
        (<Countries key={index} 
          image={card.image}
        name={card.label} 
        mobile={card.android} 
        pc={card.microsoft} 
        app={card.apple}/>))} */}
    </div>
  );
}

export default App;
