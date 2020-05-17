import React from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Button } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateName, updateEmail, updatePassword, login, getUser } from '../../actions/user'
import Firebase from '../../config/Firebase'

class Login extends React.Component {
	componentDidMount = () => {
		Firebase.auth().onAuthStateChanged(user => {
			if (user) {
				this.props.getUser(user.uid)
				if (this.props.user != null) {
					this.props.navigation.navigate('Profile')
				}
			}
		})
	}

	render() {
		return (
			<View style={styles.container}>
				<TextInput
					style={styles.inputBox}
					value={this.props.user.email}
					onChangeText={email => this.props.updateEmail(email)}
					placeholder='Email'
					autoCapitalize='none'
					autoCompleteType="email"
        			textContentType="emailAddress"
        			keyboardType="email-address"
				/>
				<TextInput
					style={styles.inputBox}
					value={this.props.user.password}
					onChangeText={password => this.props.updatePassword(password)}
					placeholder='Senha'
					secureTextEntry={true}
					autoCapitalize="none"
				/>
				<TouchableOpacity style={styles.button} onPress={() => this.props.login()}>
					<Text style={styles.buttonText}>Entrar</Text>
				</TouchableOpacity>

				<View style={styles.row}>
       			 	<Text style={styles.label}>Não tem uma conta? </Text>
        			<TouchableOpacity onPress={() => this.props.navigation.navigate('Signup')}>
          				<Text style={styles.link}>Cadastre-se</Text>
        			</TouchableOpacity>
      			</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#00A7E1',
		alignItems: 'center',
		justifyContent: 'center'
	},
	inputBox: {
		width: '70%',
		margin: 10,
		padding: 15,
		fontSize: 16,
		borderColor: '#0000',
		borderRadius: 5,
		borderBottomWidth: 1,
		//paddingHorizontal: 4,
		//paddingTop: 4,
		marginVertical: 12,
		backgroundColor: '#ffffff'
	},
	button: {
		marginTop: 20,
		marginBottom: 20,
		paddingVertical: 10,
		alignItems: 'center',
		backgroundColor: '#2C2929',
		borderColor: '#0000',
		borderWidth: 1,
		borderRadius: 5,
		//width: 200,
		width: "70%",
    	marginVertical: 10
	},
	buttonText: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#fff'
	},
	buttonSignup: {
		fontSize: 12
	},
	row: {
		flexDirection: "row",
		marginTop: 4
	},
	link: {
		fontWeight: "bold",
		color: "#2C2929"
	},
	label: {
		color: "#FDFDFF"
	},
})

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ updateEmail, updatePassword, login, getUser }, dispatch)
}

const mapStateToProps = state => {
	return {
		user: state.user
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Login)
