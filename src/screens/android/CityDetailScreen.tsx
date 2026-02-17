import { Ionicons } from '@expo/vector-icons';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Image } from 'expo-image';
import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AndroidStackParamList } from '@/navigation/AndroidNavigator';

const { width, height } = Dimensions.get('window');

type CityDetailRouteProp = RouteProp<AndroidStackParamList, 'CityDetail'>;
type NavigationProp = NativeStackNavigationProp<AndroidStackParamList, 'CityDetail'>;

export default function AndroidCityDetailScreen() {
    const navigation = useNavigation<NavigationProp>();
    const route = useRoute<CityDetailRouteProp>();
    const { id, name, location, rating, image } = route.params;
    const insets = useSafeAreaInsets();

    return (
        <View style={styles.container}>
            {/* Background Image with Shared Transition */}
            <View style={styles.imageContainer}>
                <Animated.Image
                    source={{ uri: image }}
                    style={styles.image}
                    resizeMode="cover"
                    sharedTransitionTag={`city-image-${id}`}
                />

                {/* Header Icons */}
                <View style={[styles.header, { paddingTop: insets.top + 10 }]}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconButton}>
                        <Ionicons name="chevron-back" size={24} color="#1A1A1A" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconButton}>
                        <Ionicons name="heart-outline" size={24} color="#1A1A1A" />
                    </TouchableOpacity>
                </View>

                {/* Floating Images (Decorative) */}
                <View style={styles.floatingImagesContainer}>
                    <View style={styles.miniImageWrapper}>
                        <Image source={{ uri: image }} style={styles.miniImage} />
                    </View>
                    <View style={styles.miniImageWrapper}>
                        <Image source={{ uri: image }} style={styles.miniImage} />
                    </View>
                    <View style={styles.miniImageWrapper}>
                        <Image source={{ uri: image }} style={styles.miniImage} />
                    </View>
                    <View style={[styles.miniImageWrapper, styles.miniImageMore]}>
                        <Text style={styles.moreText}>+16</Text>
                    </View>
                </View>
            </View>

            {/* Content Sheet */}
            <View style={styles.contentSheet}>
                <View style={styles.handleBar} />

                <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                    <View style={styles.titleRow}>
                        <Text style={styles.title}>{name}</Text>
                        <View style={styles.ratingContainer}>
                            <Ionicons name="star" size={16} color="#FFD700" />
                            <Text style={styles.ratingText}>{rating} (9k review)</Text>
                        </View>
                    </View>

                    <View style={styles.locationRow}>
                        <Ionicons name="location-outline" size={16} color="#9DA3B4" />
                        <Text style={styles.locationText}>{location}</Text>
                        <TouchableOpacity style={{ marginLeft: 'auto' }}>
                            <Text style={styles.mapLink}>Map Direction</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Text style={styles.sectionTitle}>Facilities</Text>
                            <Text style={styles.seeAll}>See all {'>'}</Text>
                        </View>
                        <View style={styles.facilitiesRow}>
                            <View style={styles.facilityItem}>
                                <Ionicons name="bed-outline" size={20} color="#9DA3B4" />
                                <Text style={styles.facilityText}>1 Bed</Text>
                            </View>
                            <View style={[styles.facilityItem, styles.activeFacility]}>
                                <Ionicons name="people-outline" size={20} color="#fff" />
                                <Text style={[styles.facilityText, styles.activeFacilityText]}>Guide</Text>
                            </View>
                            <View style={styles.facilityItem}>
                                <Ionicons name="restaurant-outline" size={20} color="#9DA3B4" />
                                <Text style={styles.facilityText}>Dinner</Text>
                            </View>
                            <View style={styles.facilityItem}>
                                <Ionicons name="wifi-outline" size={20} color="#9DA3B4" />
                                <Text style={styles.facilityText}>Wifi</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Description</Text>
                        <Text style={styles.descriptionText} numberOfLines={4}>
                            The Rolle Pass is a high mountain pass in Trentino in Italy. It connects the Fiemme and Primiero valleys, and the communities of Predazzo, San Martino di Castrozza and Fiera di Primiero. The pass road was built between 1863 and 1874.
                        </Text>
                    </View>
                </ScrollView>

                {/* Footer Price & Button */}
                <View style={styles.footer}>
                    <View>
                        <Text style={styles.price}>$780</Text>
                        <Text style={styles.priceLabel}>/ person</Text>
                    </View>
                    <TouchableOpacity style={styles.bookButton}>
                        <Text style={styles.bookButtonText}>Book Now →</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    imageContainer: {
        width: width,
        height: height * 0.55,
        position: 'relative'
    },
    image: {
        width: '100%',
        height: '100%',
    },
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        zIndex: 10
    },
    iconButton: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 4
    },
    floatingImagesContainer: {
        position: 'absolute',
        bottom: 40,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10,
        zIndex: 5
    },
    miniImageWrapper: {
        width: 50,
        height: 50,
        borderRadius: 12,
        overflow: 'hidden',
        borderWidth: 2,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)',
    },
    miniImage: {
        width: '100%',
        height: '100%'
    },
    miniImageMore: {
        backgroundColor: 'rgba(0,0,0,0.4)',
    },
    moreText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold'
    },
    contentSheet: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        marginTop: -30,
        paddingHorizontal: 24,
        paddingTop: 10,
    },
    handleBar: {
        width: 40,
        height: 4,
        backgroundColor: '#E0E0E0',
        borderRadius: 2,
        alignSelf: 'center',
        marginBottom: 20
    },
    scrollContent: {
        paddingBottom: 20
    },
    titleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1A1A1A',
        flex: 1
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4
    },
    ratingText: {
        fontSize: 12,
        color: '#9DA3B4'
    },
    locationRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 24
    },
    locationText: {
        fontSize: 14,
        color: '#9DA3B4',
        marginLeft: 6
    },
    mapLink: {
        fontSize: 14,
        color: '#00BFA6',
        fontWeight: '600'
    },
    section: {
        marginBottom: 24
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1A1A1A'
    },
    seeAll: {
        fontSize: 14,
        color: '#9DA3B4'
    },
    facilitiesRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    facilityItem: {
        padding: 12,
        borderRadius: 16,
        backgroundColor: '#F9F9F9',
        alignItems: 'center',
        gap: 8,
        minWidth: 70
    },
    activeFacility: {
        backgroundColor: '#2D3436'
    },
    facilityText: {
        fontSize: 12,
        color: '#9DA3B4',
        fontWeight: '500'
    },
    activeFacilityText: {
        color: '#fff'
    },
    descriptionText: {
        fontSize: 14,
        color: '#9DA3B4',
        lineHeight: 22
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 30,
        borderTopWidth: 1,
        borderTopColor: '#F0F0F0'
    },
    price: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1A1A1A'
    },
    priceLabel: {
        fontSize: 12,
        color: '#9DA3B4'
    },
    bookButton: {
        backgroundColor: '#00BFA6',
        paddingVertical: 16,
        paddingHorizontal: 32,
        borderRadius: 24,
        shadowColor: '#00BFA6',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.3,
        shadowRadius: 16,
        elevation: 8
    },
    bookButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    }
});
