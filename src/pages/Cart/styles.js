import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
    flex: 1;
    background: #191920;
`;

export const CartCard = styled.View`
    width: auto;
    min-height: 150px;
    margin: 20px;
    padding: 10px;
    background: #fff;
    border-radius: 4px;
`;

export const CartEmpty = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const CartEmptyText = styled.Text`
    margin-top: 5px;
    font-size: 21px;
`;

export const CartItems = styled.FlatList``;

export const CartItem = styled.View``;

export const CartItemHeader = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const CartItemImage = styled.Image`
    width: 80px;
    height: 80px;
`;

export const CartItemInfo = styled.View`
    flex: 1;
    margin-left: 10px;
`;

export const CartItemTitle = styled.Text`
    font-size: 15px;
`;

export const CartItemPrice = styled.Text`
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
`;

export const CartItemRemove = styled(Icon)`
    align-self: center;
    padding: 10px;
`;

export const CartItemAmount = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    border-radius: 4px;
    background: #f0f0f0;
`;

export const CartItemQuantity = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const CartItemQuantityButton = styled(Icon)`
    padding: 0 5px;
`;

export const CartItemQuantityInput = styled.TextInput`
    height: 30px;
    width: 40px;
    background: #fff;
    border-radius: 4px;
    padding: 4px;
`;

export const CartItemTotal = styled.Text`
    padding-right: 5px;
    font-size: 15px;
`;

export const CartFooter = styled.View`
    justify-content: center;
    align-items: center;
`;
export const CartTotal = styled.View`
    margin: 20px 0;
    align-items: center;
    justify-content: center;
`;
export const CartTotalTitle = styled.Text`
    font-size: 16px;
    text-transform: uppercase;
`;
export const CartTotalPrice = styled.Text`
    margin-top: 10px;
    font-size: 25px;
    font-weight: bold;
`;
export const CartFinishButton = styled(RectButton)`
    height: 45px;
    width: 100%;
    background: #7159c1;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
`;
export const CartFinishButtonText = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 15px;
    text-transform: uppercase;
`;
