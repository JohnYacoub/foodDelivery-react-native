import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

const MainCategories = ({
  categories,
  styles,
  onSelectCategory,
  selectedCategory,
}) => {
  const renderItem = ({item}) => {
    const mainCategoriesStyles = StyleSheet.create({
      categoryIconContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:
          selectedCategory?.id === item.id ? COLORS.white : COLORS.lightGray,
      },
      categoryIcon: {
        width: 30,
        height: 30,
      },
      touchableCategoriesContainer: {
        padding: SIZES.padding,
        paddingBottom: SIZES.padding * 2,
        backgroundColor:
          selectedCategory?.id === item.id ? COLORS.primary : COLORS.white,
        borderRadius: SIZES.radius,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: SIZES.padding,
        ...styles.shadow,
      },
    });

    return (
      <TouchableOpacity
        style={mainCategoriesStyles.touchableCategoriesContainer}
        onPress={() => onSelectCategory(item)}>
        <View style={mainCategoriesStyles.categoryIconContainer}>
          <Image
            source={item.icon}
            resizeMode="contain"
            style={mainCategoriesStyles.categoryIcon}
          />
        </View>
        <Text
          style={{
            marginTop: SIZES.padding,
            color:
              selectedCategory?.id === item.id ? COLORS.white : COLORS.black,
            ...FONTS.body5,
          }}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{padding: SIZES.padding * 2}}>
      <Text style={{...FONTS.h1}}>Main</Text>
      <Text style={{...FONTS.h1}}>Categories</Text>
      <FlatList
        data={categories}
        showsHorizontalScrollIndicator={false}
        horizontal
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
        contentContainerStyle={{paddingVertical: SIZES.padding * 2}}
      />
    </View>
  );
};

export default MainCategories;
