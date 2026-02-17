import { ImageSourcePropType } from 'react-native';

export type CityItem = {
    id: string;
    name: string;
    location: string;
    rating: number;
    image: ImageSourcePropType;
};

export type CategoryItem = {
    id: string;
    name: string;
    image: ImageSourcePropType;
};

export const CITIES: CityItem[] = [
    { id: '1', name: 'Mar caribe, avenida lago', location: 'Thailand', rating: 4.9, image: require('../../assets/images/city_1.png') },
    { id: '2', name: 'Passo Rolle, TN', location: 'Italia', rating: 4.7, image: require('../../assets/images/city_2.png') },
    { id: '3', name: 'Autumn Lake', location: 'Canada', rating: 4.8, image: require('../../assets/images/city_3.png') },
    { id: '4', name: 'Neon Tokyo', location: 'Japan', rating: 4.9, image: require('../../assets/images/city_4.png') },
    { id: '5', name: 'Kyoto zen', location: 'Japan', rating: 5.0, image: require('../../assets/images/city_5.png') },
];

export const CATEGORIES: CategoryItem[] = [
    { id: '1', name: 'Mountains', image: require('../../assets/images/city_2.png') },
    { id: '2', name: 'Camp', image: require('../../assets/images/city_3.png') },
    { id: '3', name: 'Beach', image: require('../../assets/images/city_1.png') },
    { id: '4', name: 'Park', image: require('../../assets/images/city_5.png') },
];
