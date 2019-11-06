import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
    align-items: center;
    padding: 20px;
`;

export const Logo = styled.Image`
    width: 200px;
    height: 25px;
`;

export const Cart = styled.TouchableOpacity`
    flex: 1;
    align-items: flex-end;
    justify-content: flex-end;
`;

export const CartCounter = styled.Text`
    position: absolute;
    text-align: center;
    top: -8px;
    right: -8px;
    min-width: 18px;
    min-height: 18px;
    background: #7159c1;
    color: #fff;
    font-size: 12px;
    padding: 2px;
    border-radius: 9px;
    overflow: hidden;
`;

export const CartIcon = styled(Icon)``;
