import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

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

class Cart extends Component {
    static propTypes = {
        navigation: PropTypes.shape({}).isRequired,
        updateAmountRequest: PropTypes.func.isRequired,
        removeFromCart: PropTypes.func.isRequired,
        products: PropTypes.arrayOf().isRequired,
        total: PropTypes.string.isRequired,
    };

    increment = product => {
        const { updateAmountRequest } = this.props;
        const { id, amount } = product;

        updateAmountRequest(id, amount + 1);
    };

    decrement = product => {
        const { updateAmountRequest } = this.props;
        const { id, amount } = product;

        updateAmountRequest(id, amount - 1);
    };

    render() {
        const { navigation, removeFromCart, products, total } = this.props;
        const isEmpty = products.length === 0;

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
                            <CartEmptyText>
                                Seu carrinho está vazio
                            </CartEmptyText>
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
                                                    removeFromCart(item.id)
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
                                                    onPress={() =>
                                                        this.decrement(item)
                                                    }
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
                                                    onPress={() =>
                                                        this.increment(item)
                                                    }
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
}

const mapDispatchToProps = dispatch =>
    bindActionCreators(CartActions, dispatch);

const mapStateToProps = state => ({
    products: state.cart.map(prod => ({
        ...prod,
        subtotal: formatPrice(prod.price * prod.amount),
    })),
    total: formatPrice(
        state.cart.reduce((total, prod) => {
            return total + prod.price * prod.amount;
        }, 0)
    ),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);
