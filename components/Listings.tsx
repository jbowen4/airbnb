import { View, Text } from 'react-native';
import React, { useEffect } from 'react';

interface Props {
  listings: any[];
  refresh: number;
  category: string;
}

const Listings = ({ listings: items, refresh, category }: Props) => {
   // Update the view to scroll the list back top
   useEffect(() => {
    // if (refresh) {
    //   scrollListTop();
    // }
  }, [refresh]);

  return (
    <View>
      <Text>Listings</Text>
    </View>
  );
};

export default Listings;
