import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as CartActions from '../../store/modules/cart/actions';

import {
    Container,
    ProductList,
    ProductCard,
    ProductImage,
    ProductTitle,
    ProductPrice,
    ProductButton,
    ProductButtonIcon,
    ProductButtonText,
    ProductButtonCartContainer,
    ProductButtonCartText,
    ProductButtonTextContainer,
} from './styles';
import Header from '../../components/Header';

import { formatPrice } from '../../util/format';
import api from '../../services/api';

class Main extends Component {
    static propTypes = {
        navigation: PropTypes.shape({}).isRequired,
        addToCartRequest: PropTypes.func.isRequired,
        amount: PropTypes.shape({}).isRequired,
    };

    state = {
        products: [],
    };

    async componentDidMount() {
        const response = await api.get('/products');

        const data = response.data.map(prod => ({
            ...prod,
            formattedPrice: formatPrice(prod.price),
        }));

        this.setState({ products: data });
    }

    render() {
        const { products } = this.state;
        const { navigation, addToCartRequest, amount } = this.props;

        return (
            <Container>
                <Header navigation={navigation} />
                <ProductList
                    data={products}
                    horizontal
                    keyExtractor={prod => String(prod.id)}
                    renderItem={({ item }) => (
                        <ProductCard>
                            <ProductImage source={{ uri: item.image }} />
                            <ProductTitle>{item.title}</ProductTitle>
                            <ProductPrice>{item.formattedPrice}</ProductPrice>
                            <ProductButton
                                onPress={() => addToCartRequest(item.id)}
                            >
                                <ProductButtonCartContainer>
                                    <ProductButtonIcon
                                        name="add-shopping-cart"
                                        size={20}
                                        color="#fff"
                                    />
                                    <ProductButtonCartText>
                                        {amount[item.id] || 0}
                                    </ProductButtonCartText>
                                </ProductButtonCartContainer>
                                <ProductButtonTextContainer>
                                    <ProductButtonText>
                                        Adicionar
                                    </ProductButtonText>
                                </ProductButtonTextContainer>
                            </ProductButton>
                        </ProductCard>
                    )}
                />
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    amount: state.cart.reduce((amount, product) => {
        amount[product.id] = product.amount;
        return amount;
    }, {}),
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(CartActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);
