import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '../../components/Header';
import {
    Container,
    CartCard,
    CartEmpty,
    CartEmptyText,
    CartItems,
} from './styles';

export default class Cart extends Component {
    static propTypes = {
        navigation: PropTypes.shape({}).isRequired,
    };

    state = {
        products: [],
    };

    render() {
        const { products } = this.state;
        const { navigation } = this.props;
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
                        <CartItems />
                    )}
                </CartCard>
            </Container>
        );
    }
}
