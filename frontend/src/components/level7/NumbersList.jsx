import Grid from '@mui/material/Grid';
import DigitWithStarOrDot from './DigitWithStarOrDot';

function NumbersList({ numbersList }) {
  return (
    <Grid
      container
      flexDirection='row'
      alignItems='center'
      justifyContent='flex-end'
    >
      {numbersList &&
        numbersList.length > 0 &&
        numbersList.map((item, index) => (
          <DigitWithStarOrDot
            key={`${item}-${index}`}
            isStar={item.isStar}
            isDot={item.isDot}
            item={item.digit}
          />
        ))}
    </Grid>
  );
}

export default NumbersList;
