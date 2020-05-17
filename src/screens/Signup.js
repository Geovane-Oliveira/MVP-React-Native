import React from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateName, updateEmail, updatePassword, signup } from '../../actions/user'

class Signup extends React.Component {
	handleSignUp = () => {
		this.props.signup()
		this.props.navigation.navigate('Profile')
	}

	render() {
		return (
			<View style={styles.container}>
				<TextInput
					style={styles.inputBox}
					value={this.props.user.name}
					onChangeText={name => this.props.updateName(name)}
					placeholder='Nome'
				/>
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
				<TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
					<Text style={styles.buttonText}>Cadastrar</Text>
				</TouchableOpacity>

				<View style={styles.row}>
       			 	<Text style={styles.label}>Ja tem uma conta? </Text>
        			<TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
          				<Text style={styles.link}>Entrar</Text>
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
		justifyContent: 'center',
		paddingBottom: 1,
    	paddingTop: 50
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
	return bindActionCreators({ updateName, updateEmail, updatePassword, signup }, dispatch)
}

const mapStateToProps = state => {
	return {
		user: state.user
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Signup)