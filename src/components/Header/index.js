import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import logo from '../../assets/logo.png';
import { Container, Logo, Cart, CartCounter, CartIcon } from './styles';

function Header({ navigation }) {
    return (
        <Container>
            <TouchableOpacity onPress={() => navigation.navigate('Main')}>
                <Logo source={logo} />
            </TouchableOpacity>
            <Cart onPress={() => navigation.navigate('Cart')}>
                <CartCounter>{0}</CartCounter>
                <CartIcon name="shopping-basket" size={30} color="#fff" />
            </Cart>
        </Container>
    );
}

Header.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired,
};

export default Header;
