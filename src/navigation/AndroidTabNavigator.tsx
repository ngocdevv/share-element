import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AndroidHomeScreen from '@/screens/android/HomeScreen';

const Tab = createBottomTabNavigator();

// Placeholder screens — matching iOS tab structure
function ExploreTab() {
    return (
        <SafeAreaView style={styles.placeholder}>
            <Text style={styles.placeholderText}>Explore</Text>
        </SafeAreaView>
    );
}

function AppsTab() {
    return (
        <SafeAreaView style={styles.placeholder}>
            <Text style={styles.placeholderText}>Apps</Text>
        </SafeAreaView>
    );
}

function FavoritesTab() {
    return (
        <SafeAreaView style={styles.placeholder}>
            <Text style={styles.placeholderText}>Favorites</Text>
        </SafeAreaView>
    );
}

function ProfileTab() {
    return (
        <SafeAreaView style={styles.placeholder}>
            <Text style={styles.placeholderText}>Profile</Text>
        </SafeAreaView>
    );
}

export default function AndroidTabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#00BFA6',
                tabBarInactiveTintColor: '#9DA3B4',
                tabBarStyle: {
                    backgroundColor: '#fff',
                    borderTopWidth: 0,
                    elevation: 12,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: -4 },
                    shadowOpacity: 0.06,
                    shadowRadius: 12,
                    height: 64,
                    paddingBottom: 8,
                    paddingTop: 8,
                },
                tabBarLabelStyle: {
                    fontSize: 11,
                    fontWeight: '600',
                },
            }}
        >
            <Tab.Screen
                name="Home"
                component={AndroidHomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home-outline" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Explore"
                component={ExploreTab}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="compass-outline" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Apps"
                component={AppsTab}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="grid-outline" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Favorites"
                component={FavoritesTab}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="heart-outline" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileTab}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person-outline" size={size} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    placeholder: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F9F9F9',
    },
    placeholderText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1A1A1A',
    },
});
