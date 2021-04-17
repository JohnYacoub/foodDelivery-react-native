import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {COLORS, icons, SIZES, FONTS} from '../../constants';
import Header from './Header';
import MainCategories from './MainCategories';
import RestaurantList from './RestaurantList';
import {
  categoryData,
  initialCurrentLocation,
  restaurantData,
} from '../../mockData/DummyData';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray4,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
});

const Home = ({navigation}) => {
  const [categories, setCategories] = React.useState(categoryData);
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [restaurants, setRestaurants] = React.useState(restaurantData);
  const [currentLocation, setCurrentLocation] = React.useState(
    initialCurrentLocation,
  );

  const onSelectCategory = category => {
    let restaurantList = restaurantData.filter(a =>
      a.categories.includes(category.id),
    );
    setRestaurants(restaurantList);
    setSelectedCategory(category);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header currentLocation={currentLocation} />
      <MainCategories
        categories={categories}
        selectedCategory={selectedCategory}
        styles={styles}
        onSelectCategory={onSelectCategory}
      />
      <RestaurantList
        restaurants={restaurants}
        styles={styles}
        categories={categories}
        navigation={navigation}
      />
    </SafeAreaView>
  );
};

export default Home;
