import { Ionicons } from '@expo/vector-icons';
import { SymbolWeight } from 'expo-symbols';
import React from 'react';
import { ColorValue, StyleProp, TextStyle } from 'react-native';

export function IconSymbol({
    name,
    size = 24,
    color,
    style,
}: {
    name: string;
    size?: number;
    color: string | ColorValue;
    style?: StyleProp<TextStyle>;
    weight?: SymbolWeight;
}) {
    // Mapping some SF Symbols to Ionicons for cross-platform compatibility
    const iconMap: Record<string, keyof typeof Ionicons.glyphMap> = {
        'house.fill': 'home',
        'house': 'home-outline',
        'paperplane.fill': 'paper-plane',
        'chevron.left.forwardslash.chevron.right': 'code-slash',
        'chevron.right': 'chevron-forward',
        'square.grid.2x2.fill': 'grid',
        'square.grid.2x2': 'grid-outline',
        'heart.fill': 'heart',
        'heart': 'heart-outline',
        'person.fill': 'person',
        'person': 'person-outline',
        'compass.fill': 'compass',
        'compass': 'compass-outline',
    } as const;

    const iconName = iconMap[name] || 'help-circle';

    return <Ionicons name={iconName} size={size} color={color} style={style} />;
}
