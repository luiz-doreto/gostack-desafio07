import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background: #191920;
`;

export const CartCard = styled.View`
    width: auto;
    min-height: 150px;
    margin: 20px;
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
