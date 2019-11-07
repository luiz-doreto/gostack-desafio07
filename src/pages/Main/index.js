import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

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

export default function Main({ navigation }) {
    const [products, setProducts] = useState([]);
    const amount = useSelector(state =>
        state.cart.reduce((sumAmount, product) => {
            sumAmount[product.id] = product.amount;
            return sumAmount;
        }, {})
    );
    const dispatch = useDispatch();

    useEffect(() => {
        async function loadProducts() {
            const response = await api.get('/products');

            const data = response.data.map(prod => ({
                ...prod,
                formattedPrice: formatPrice(prod.price),
            }));

            setProducts(data);
        }

        loadProducts();
    }, []);

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
                            onPress={() =>
                                dispatch(CartActions.addToCartRequest(item.id))
                            }
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
                                <ProductButtonText>Adicionar</ProductButtonText>
                            </ProductButtonTextContainer>
                        </ProductButton>
                    </ProductCard>
                )}
            />
        </Container>
    );
}

Main.propTypes = {
    navigation: PropTypes.shape({}).isRequired,
};
