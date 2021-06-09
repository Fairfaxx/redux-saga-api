import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import users from '../reducers/users';

const NewUserForm = ({ onSubmit }) => {
	const [ users, setUsers ] = useState({
		firstName: '',
		lastName: ''
	});


	const handlerNameChanged = (e) => {
		setUsers({
			...users,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit({
			firstName: users.firstName,
			lastName: users.lastName
		});
	};

	return (
		<Form onSubmit={handleSubmit} style={{ marginTop: '35px' }}>
			<FormGroup>
				<Label>First Name</Label>
				<Input placeholder="First Name" onChange={handlerNameChanged} name="firstName" />
			</FormGroup>
			<FormGroup style={{ marginTop: '25px', marginBottom: '25px' }}>
				<Label>Last Name</Label>
				<Input placeholder="First Name" onChange={handlerNameChanged} name="lastName" />
			</FormGroup>
			<FormGroup style={{ marginBottom: '35px' }}>
				<Button block outline type="submit" color="primary">
					Create
				</Button>
			</FormGroup>
		</Form>
	);
};

export default NewUserForm;
