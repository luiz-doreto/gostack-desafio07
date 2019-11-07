import React, { useMemo } from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';

import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';

import Header from '../../components/Header';
import {
    Container,
    CartCard,
    CartEmpty,
    CartEmptyText,
    CartItems,
    CartItem,
    CartItemHeader,
    CartItemImage,
    CartItemInfo,
    CartItemTitle,
    CartItemPrice,
    CartItemRemove,
    CartItemAmount,
    CartItemQuantity,
    CartItemQuantityButton,
    CartItemQuantityInput,
    CartItemTotal,
    CartFooter,
    CartTotal,
    CartTotalTitle,
    CartTotalPrice,
    CartFinishButton,
    CartFinishButtonText,
} from './styles';

export default function Cart({ navigation }) {
    const products = useSelector(state =>
        state.cart.map(prod => ({
            ...prod,
            subtotal: formatPrice(prod.price * prod.amount),
        }))
    );
    const total = useSelector(state =>
        formatPrice(
            state.cart.reduce((sumTotal, prod) => {
                return sumTotal + prod.price * prod.amount;
            }, 0)
        )
    );
    const dispatch = useDispatch();
    const isEmpty = useMemo(() => products.length === 0, [products]);

    function increment(product) {
        const { id, amount } = product;

        dispatch(CartActions.updateAmountRequest(id, amount + 1));
    }

    function decrement(product) {
        const { id, amount } = product;

        dispatch(CartActions.updateAmountRequest(id, amount - 1));
    }

    return (
        <Container>
            <Header navigation={navigation} />
            <CartCard>
                {isEmpty ? (
                    <CartEmpty>
                        <Icon
                            name="remove-shopping-cart"
                            size={70}
                            color="#666"
                        />
                        <CartEmptyText>Seu carrinho está vazio</CartEmptyText>
                    </CartEmpty>
                ) : (
                    <>
                        <CartItems
                            data={products}
                            keyExtractor={prod => String(prod.id)}
                            renderItem={({ item }) => (
                                <CartItem>
                                    <CartItemHeader>
                                        <CartItemImage
                                            source={{ uri: item.image }}
                                        />
                                        <CartItemInfo>
                                            <CartItemTitle>
                                                {item.title}
                                            </CartItemTitle>
                                            <CartItemPrice>
                                                {item.formattedPrice}
                                            </CartItemPrice>
                                        </CartItemInfo>
                                        <TouchableOpacity
                                            onPress={() =>
                                                dispatch(
                                                    CartActions.removeFromCart(
                                                        item.id
                                                    )
                                                )
                                            }
                                        >
                                            <CartItemRemove
                                                name="delete"
                                                size={25}
                                                color="#7159c1"
                                            />
                                        </TouchableOpacity>
                                    </CartItemHeader>
                                    <CartItemAmount>
                                        <CartItemQuantity>
                                            <TouchableOpacity
                                                onPress={() => decrement(item)}
                                            >
                                                <CartItemQuantityButton
                                                    name="remove-circle-outline"
                                                    size={25}
                                                    color="#7159c1"
                                                />
                                            </TouchableOpacity>
                                            <CartItemQuantityInput
                                                editable={false}
                                                value={String(item.amount)}
                                            />
                                            <TouchableOpacity
                                                onPress={() => increment(item)}
                                            >
                                                <CartItemQuantityButton
                                                    name="add-circle-outline"
                                                    size={25}
                                                    color="#7159c1"
                                                />
                                            </TouchableOpacity>
                                        </CartItemQuantity>
                                        <CartItemTotal>
                                            {item.subtotal}
                                        </CartItemTotal>
                                    </CartItemAmount>
                                </CartItem>
                            )}
                        />
                        <CartFooter>
                            <CartTotal>
                                <CartTotalTitle>Total</CartTotalTitle>
                                <CartTotalPrice>{total}</CartTotalPrice>
                            </CartTotal>
                            <CartFinishButton>
                                <CartFinishButtonText>
                                    Finalizar Pedido
                                </CartFinishButtonText>
                            </CartFinishButton>
                        </CartFooter>
                    </>
                )}
            </CartCard>
        </Container>
    );
}

Cart.propTypes = {
    navigation: PropTypes.shape({}).isRequired,
};
