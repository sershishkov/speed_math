import Grid from '@mui/material/Grid';
import DigitWithStarOrDot from './DigitWithStarOrDot';

function NumbersList({ numbersList, direction = 'flex-end' }) {
  return (
    <Grid
      container
      flexDirection='row'
      alignItems='center'
      justifyContent={direction}
    >
      {numbersList &&
        numbersList.length > 0 &&
        numbersList.map((item, index) => (
          <DigitWithStarOrDot
            key={`${item}-${index}`}
            isStar={item.isStar}
            isDot={item.isDot}
            item={item.digit}
            color={item.color}
            dots={item.dots}
          />
        ))}
    </Grid>
  );
}

export default NumbersList;
