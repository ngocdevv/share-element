import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import AndroidTabNavigator from '@/navigation/AndroidTabNavigator';
import AndroidCityDetailScreen from '@/screens/android/CityDetailScreen';

export type AndroidStackParamList = {
    MainTabs: undefined;
    CityDetail: {
        id: string;
        name: string;
        location: string;
        rating: number;
        image: string;
    };
};

const Stack = createNativeStackNavigator<AndroidStackParamList>();

export default function AndroidNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="MainTabs" component={AndroidTabNavigator} />
            <Stack.Screen
                name="CityDetail"
                component={AndroidCityDetailScreen}
                options={{
                    animation: 'fade',
                }}
            />
        </Stack.Navigator>
    );
}
