import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import logo from '../../assets/logo.png';
import { Container, Logo, Cart, CartCounter, CartIcon } from './styles';

function Header({ products, navigation }) {
    return (
        <Container>
            <TouchableOpacity onPress={() => navigation.navigate('Main')}>
                <Logo source={logo} />
            </TouchableOpacity>
            <Cart onPress={() => navigation.navigate('Cart')}>
                <CartCounter>{products}</CartCounter>
                <CartIcon name="shopping-basket" size={30} color="#fff" />
            </Cart>
        </Container>
    );
}

Header.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired,
    products: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
    products: state.cart.length,
});

export default connect(mapStateToProps)(Header);
