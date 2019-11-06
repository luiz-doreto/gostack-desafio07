import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

export default class Main extends Component {
    static propTypes = {
        navigation: PropTypes.shape({}).isRequired,
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
        const { navigation } = this.props;

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
                                onPress={() => console.tron.log('eai')}
                            >
                                <ProductButtonCartContainer>
                                    <ProductButtonIcon
                                        name="add-shopping-cart"
                                        size={20}
                                        color="#fff"
                                    />
                                    <ProductButtonCartText>
                                        {0}
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
