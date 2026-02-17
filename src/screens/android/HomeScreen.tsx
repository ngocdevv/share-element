import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Image } from 'expo-image';
import React from 'react';
import { Dimensions, Pressable, Image as RNImage, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CATEGORIES, CITIES } from '@/constants/cities';
import { AndroidStackParamList } from '@/navigation/AndroidNavigator';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<AndroidStackParamList, 'MainTabs'>;

export default function AndroidHomeScreen() {
    const navigation = useNavigation<NavigationProp>();

    const handleCityPress = (city: typeof CITIES[0]) => {
        navigation.navigate('CityDetail', {
            id: city.id,
            name: city.name,
            location: city.location,
            rating: city.rating,
            image: RNImage.resolveAssetSource(city.image).uri,
        });
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>

                {/* Header */}
                <View style={styles.header}>
                    <View>
                        <Text style={styles.greeting}>Hi Williamson,</Text>
                        <Text style={styles.headline}>Where do you want{'\n'}to go?</Text>
                    </View>
                    <Image source={{ uri: 'https://i.pravatar.cc/150?img=12' }} style={styles.avatar} />
                </View>

                {/* Search Bar */}
                <View style={styles.searchContainer}>
                    <Ionicons name="search" size={20} color="#9DA3B4" style={styles.searchIcon} />
                    <TextInput
                        placeholder="Discover a city"
                        placeholderTextColor="#9DA3B4"
                        style={styles.searchInput}
                    />
                    <View style={styles.filterIcon}>
                        <Ionicons name="options-outline" size={20} color="#9DA3B4" />
                    </View>
                </View>

                {/* Explore Cities */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Explore Cities</Text>
                </View>

                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoriesScroll}>
                    <Text style={[styles.categoryText, styles.activeCategory]}>All</Text>
                    <Text style={styles.categoryText}>Popular</Text>
                    <Text style={styles.categoryText}>Recommended</Text>
                    <Text style={styles.categoryText}>Most Viewed</Text>
                    <Text style={styles.categoryText}>Recent</Text>
                </ScrollView>

                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.cardsScroll} snapToInterval={width * 0.7 + 20} decelerationRate="fast">
                    {CITIES.map((city) => (
                        <Pressable key={city.id} style={styles.card} onPress={() => handleCityPress(city)}>
                            <Animated.Image
                                source={city.image}
                                style={styles.cardImage}
                                resizeMode="cover"
                                sharedTransitionTag={`city-image-${city.id}`}
                            />

                            <View style={styles.cardOverlay}>
                                <View style={styles.cardContent}>
                                    <Text style={styles.cardTitle} numberOfLines={1}>{city.name}</Text>
                                    <View style={styles.cardRow}>
                                        <View style={styles.locationContainer}>
                                            <Ionicons name="location-outline" size={12} color="#5F6368" />
                                            <Text style={styles.cardLocation}>{city.location}</Text>
                                        </View>
                                        <View style={styles.ratingContainer}>
                                            <Ionicons name="star" size={12} color="#5F6368" />
                                            <Text style={styles.cardRating}>{city.rating}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </Pressable>
                    ))}
                </ScrollView>

                {/* Categories */}
                <View style={[styles.sectionHeader, { marginTop: 30 }]}>
                    <Text style={styles.sectionTitle}>Categories</Text>
                    <Text style={styles.seeAll}>See all {'>'}</Text>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.bottomCategoriesScroll}>
                    {CATEGORIES.map((cat) => (
                        <View key={cat.id} style={styles.bottomCategoryItem}>
                            <View style={[styles.bottomCategoryIcon, cat.id === '2' && styles.activeBottomCategory]}>
                                <Image source={cat.image} style={styles.bottomCategoryImage} />
                            </View>
                            <Text style={[styles.bottomCategoryText, cat.id === '2' && styles.activeBottomText]}>{cat.name}</Text>
                        </View>
                    ))}
                </ScrollView>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9F9F9',
    },
    scrollContent: {
        paddingBottom: 100,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 24,
        marginTop: 10,
        marginBottom: 20
    },
    greeting: {
        fontSize: 14,
        fontWeight: '600',
        color: '#2F2F2F',
        marginBottom: 4
    },
    headline: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#1A1A1A',
        lineHeight: 34
    },
    avatar: {
        width: 44,
        height: 44,
        borderRadius: 22,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        marginHorizontal: 24,
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
        marginBottom: 30
    },
    searchIcon: {
        marginRight: 10
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        color: '#1A1A1A'
    },
    filterIcon: {
        marginLeft: 10
    },
    sectionHeader: {
        paddingHorizontal: 24,
        marginBottom: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1A1A1A'
    },
    seeAll: {
        fontSize: 14,
        color: '#5F6368',
        fontWeight: '500'
    },
    categoriesScroll: {
        paddingHorizontal: 24,
        marginBottom: 20,
        gap: 20
    },
    categoryText: {
        fontSize: 16,
        color: '#9DA3B4',
        fontWeight: '500'
    },
    activeCategory: {
        color: '#1A1A1A',
        fontWeight: 'bold'
    },
    cardsScroll: {
        paddingHorizontal: 24,
        gap: 20,
        paddingBottom: 20
    },
    card: {
        width: width * 0.7,
        height: width * 0.9,
        borderRadius: 24,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 15,
        },
        shadowOpacity: 0.1,
        shadowRadius: 20,
        elevation: 8,
        position: 'relative',
        overflow: 'hidden',
    },
    cardImage: {
        width: '100%',
        height: '100%',
        borderRadius: 24,
    },
    cardOverlay: {
        position: 'absolute',
        bottom: 15,
        left: 15,
        right: 15,
        backgroundColor: 'rgba(255,255,255,0.85)',
        padding: 15,
        borderRadius: 16,
        overflow: 'hidden'
    },
    cardContent: {
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1A1A1A',
        marginBottom: 6
    },
    cardRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4
    },
    cardLocation: {
        fontSize: 12,
        color: '#5F6368'
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4
    },
    cardRating: {
        fontSize: 12,
        color: '#1A1A1A',
        fontWeight: '600'
    },
    bottomCategoriesScroll: {
        paddingHorizontal: 24,
        gap: 20
    },
    bottomCategoryItem: {
        alignItems: 'center',
        gap: 8
    },
    bottomCategoryIcon: {
        width: 60,
        height: 60,
        borderRadius: 16,
        overflow: 'hidden',
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 2,
    },
    activeBottomCategory: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.15,
        shadowRadius: 12,
        elevation: 6
    },
    bottomCategoryImage: {
        width: '100%',
        height: '100%'
    },
    bottomCategoryText: {
        fontSize: 12,
        color: '#9DA3B4',
        fontWeight: '500'
    },
    activeBottomText: {
        color: '#1A1A1A',
        fontWeight: 'bold'
    }
});
