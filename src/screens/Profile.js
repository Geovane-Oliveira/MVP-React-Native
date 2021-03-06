import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { connect } from 'react-redux'
import Firebase from '../../config/Firebase'

class Profile extends React.Component {
	handleSignout = () => {
		Firebase.auth().signOut()
		this.props.navigation.navigate('Welcome')
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>Dashboard do usuário</Text>
				<Text>Olá {this.props.user.name}</Text>
				<Text>{this.props.user.email}</Text>
				<Text>Seu ID: {this.props.user.uid}</Text>
				<Button title='Sair' onPress={this.handleSignout} />
				<Button title='Inicio' onPress={() => this.props.navigation.navigate('Welcome')} />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
})

const mapStateToProps = state => {
	return {
		user: state.user
	}
}

export default connect(mapStateToProps)(Profile)
