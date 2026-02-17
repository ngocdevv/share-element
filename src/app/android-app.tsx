import React from 'react';

import AndroidNavigator from '@/navigation/AndroidNavigator';

/**
 * This expo-router screen serves as the Android entry point
 * after onboarding. It renders the React Navigation native-stack
 * navigator which enables shared element transitions via
 * Reanimated's sharedTransitionTag.
 */
export default function AndroidAppScreen() {
    return <AndroidNavigator />;
}
