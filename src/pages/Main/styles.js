import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { darken } from 'polished';

export const Container = styled.SafeAreaView`
    flex: 1;
    background: #191920;
`;

export const ProductList = styled.FlatList`
    flex: 1;
    padding: 20px;
`;
export const ProductCard = styled.View`
    background: #fff;
    width: 250px;
    height: 60%;
    padding: 20px;
    margin-right: 20px;
    border-radius: 4px;
`;
export const ProductImage = styled.Image`
    align-self: center;
    width: 200px;
    height: 200px;
`;
export const ProductTitle = styled.Text`
    font-size: 15px;
`;
export const ProductPrice = styled.Text`
    margin-top: 10px;
    font-weight: bold;
    font-size: 21px;
`;

export const ProductButton = styled(RectButton)`
    flex-direction: row;
    height: 45px;
    background: #7159c1;
    border-radius: 4px;
    margin-top: auto;
`;

export const ProductButtonCartContainer = styled.View`
    flex-direction: row;
    background: ${darken(0.03, '#7159c1')};
    align-items: center;
    padding: 10px;
`;

export const ProductButtonIcon = styled(Icon)`
    margin-right: 2px;
`;

export const ProductButtonCartText = styled.Text`
    color: #fff;
`;

export const ProductButtonTextContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const ProductButtonText = styled.Text`
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
`;
