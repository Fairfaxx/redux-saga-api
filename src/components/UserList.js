import React from 'react';
import { Button, ListGroup, ListGroupItem } from 'reactstrap';

const UserList = (props) => {
	const { users } = props;
	return (
		<div>
			<ListGroup>
				{users
					.sort((a, b) => {
						if (a.firstName > b.firstName) {
							return 1;
						} else if (a.firstName < b.firstName) {
							return -1;
						} else if (a.lastName > b.lastName) {
							return 1;
						} else if (a.lastName < b.lastName) {
							return -1;
						} else {
							return 0;
						}
					})
					.map((user) => {
						return (
							<ListGroupItem key={user.id}>
								<section style={{ display: 'flex' }}>
									<div style={{ flexGrow: 1, margin: 'auto 0' }}>
										{user.firstName} {user.lastName}
									</div>
									<div>
										<Button outline color="danger">
											click to delete
										</Button>
									</div>
								</section>
							</ListGroupItem>
						);
					})}
			</ListGroup>
		</div>
	);
};

export default UserList;
