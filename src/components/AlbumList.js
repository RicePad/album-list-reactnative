import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';



export const ROOT_URL = "http://reduxblog.herokuapp.com/api/music_albums"


class AlbumList extends Component {
	constructor(props){
		super(props);

		this.state = {
			albums: []
		}
	}

	componentWillMount() {
			axios.get(`${ROOT_URL}`)
				.then(response => {
					console.log(response)
					this.setState({albums: response.data})
				})

				.catch(error => console.log(error))
		}

	render(){
		return(
				<Text>Album List</Text>
			)
	}
}


export default AlbumList;