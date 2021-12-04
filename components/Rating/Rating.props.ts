import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface RatingProps extends DetailedHTMLProps <HTMLAttributes <HTMLDivElement>, HTMLDivElement>{
  isEditadble?: boolean
  rating: number
  setRating?: (rating: number) => void; 
}