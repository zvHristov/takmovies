import { useRef, useState } from 'react';

import MovieBottomSheetComponent from './component/moviesBottomSheetComponent';

export const useSpot = () => {

  const [selectedSpot, setSelectedSpot] = useState(null);
  
  const spotSheetRef = useRef(null);
  return { 
    MovieBottomSheetComponent, 
    spotSheetRef, 
    selectedSpot, 
    setSelectedSpot,
   };
};