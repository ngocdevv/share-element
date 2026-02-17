import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, ImageBackground, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, { FadeInDown, FadeInUp, ZoomIn } from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');

export default function OnboardingScreen() {
  const router = useRouter();

  const handleGetStarted = () => {
    if (Platform.OS === 'android') {
      // Android: navigate to React Navigation host for shared element transitions
      router.replace('/android-app');
    } else {
      // iOS: keep existing expo-router tab flow with AppleZoom
      router.replace('/(tabs)');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground
        source={require('../../assets/images/onboarding_bg.png')}
        style={styles.background}
        resizeMode="cover"
      >
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.8)']}
          style={styles.gradient}
        />

        <View style={styles.content}>
          <Animated.View entering={FadeInUp.delay(300).duration(1000)} style={styles.headerContainer}>
            <View style={styles.decorationDots}>
              {[...Array(5)].map((_, i) => (
                <View key={i} style={[styles.dot, { opacity: (5 - i) / 5 }]} />
              ))}
            </View>
          </Animated.View>

          <View style={styles.textContainer}>
            <Animated.Text entering={FadeInDown.delay(500).duration(1000)} style={styles.subTitle}>
              It's a Big World
            </Animated.Text>
            <Animated.Text entering={FadeInDown.delay(700).duration(1000)} style={styles.title}>
              Out There,
            </Animated.Text>
            <Animated.Text entering={FadeInDown.delay(900).duration(1000)} style={[styles.title, styles.highlight]}>
              Go Explore
            </Animated.Text>
          </View>

          <Animated.View entering={ZoomIn.delay(1200).duration(800)} style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleGetStarted} activeOpacity={0.8}>
              <Text style={styles.buttonText}>Get Started →</Text>
            </TouchableOpacity>
            <Text style={styles.footerText}>Privacy Policy</Text>
          </Animated.View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    width: width,
    height: height,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    top: '40%',
  },
  content: {
    flex: 1,
    paddingHorizontal: 30,
    paddingBottom: 50,
    justifyContent: 'space-between',
  },
  headerContainer: {
    marginTop: 60,
  },
  decorationDots: {
    flexDirection: 'row',
    gap: 5
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#2D9CDB',
  },
  textContainer: {
    marginTop: 'auto',
    marginBottom: 40,
  },
  subTitle: {
    fontSize: 20,
    color: '#E0E0E0',
    fontWeight: '600',
    marginBottom: 10,
  },
  title: {
    fontSize: 52,
    color: '#FFFFFF',
    fontWeight: '800',
    lineHeight: 56,
  },
  highlight: {
    color: '#FFF',
  },
  buttonContainer: {
    alignItems: 'center',
    gap: 20,
  },
  button: {
    backgroundColor: '#00BFA6',
    paddingVertical: 18,
    paddingHorizontal: 40,
    borderRadius: 30,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#00BFA6',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footerText: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 12,
  },
});
