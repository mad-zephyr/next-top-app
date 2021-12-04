import { useState, useEffect } from 'react'; 
import { RatingProps } from './Rating.props';
import styles from './Rating.module.css';
import StartIcon from './star.svg';
import cn from 'classnames';

export const Rating = ({isEditadble = false, rating, setRating, ...props}: RatingProps): JSX.Element => {
  
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  useEffect(() => {
    cosntructRating(rating);
  }, [rating]);

  const cosntructRating = (curentRating: number) => {
    const updatedArray = ratingArray.map((r: JSX.Element, i:number ) => {
      return (
        <StartIcon
          className={cn(styles.star, {
            [styles.filled]: i < curentRating,
            [styles.editable]: isEditadble

          })}
          onMouseEnter={() => changeDisplay(i+1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick= {() => console.log(i+1)}
        />
      );
    }); 
    setRatingArray(updatedArray);
  };

  const changeDisplay = (i:number) => {
    if(!isEditadble){
      return
    }
    cosntructRating(i)
  }

  return (
     <div {...props} style={{display: 'flex'}}>
       {ratingArray.map((r,i) => <span key={i}> {r} </span>)}
     </div>
  ); 
};