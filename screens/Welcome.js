import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { login, signup } from '../actions/user'

class Welcome extends React.Component {



    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Entre ou cadastre-se.</Text>
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Login')}>
					<Text style={styles.buttonText}>Entrar</Text>
				</TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Signup')}>
					<Text style={styles.buttonText}>Cadastrar</Text>
				</TouchableOpacity>
            </View>
        )

    }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#00A7E1',
		alignItems: 'center',
		justifyContent: 'center',
		paddingBottom: 1,
    	paddingTop: 50
	},
	inputBox: {
		width: '70%',
		margin: 10,
		padding: 15,
		fontSize: 16,
		borderColor: '#d3d3d3',
		borderBottomWidth: 1,
		textAlign: 'center',
		paddingHorizontal: 4,
    	paddingTop: 4
	},
	button: {
		marginTop: 30,
		marginBottom: 20,
		paddingVertical: 10,
		alignItems: 'center',
		backgroundColor: '#2C2929',
		borderColor: '#000000',
		borderWidth: 1,
		borderRadius: 5,
		width: 200
	},
	buttonText: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#fff'
	},
	buttonSignup: {
		fontSize: 12
    },
    text: {
        fontSize: 16,
        lineHeight: 26,
        color: '#FDFDFF',
        textAlign: "center",
        marginBottom: 14
      }
})

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ login, signup }, dispatch)
}

const mapStateToProps = state => {
	return {
		user: state.user
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Welcome)