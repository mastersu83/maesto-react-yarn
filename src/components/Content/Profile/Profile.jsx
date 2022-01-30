import React from 'react';
import avatar from '../../../assets/img/Avatar.png';
import editBtn from '../../../assets/img/edit-btn.svg';
import addBtn from '../../../assets/img/add-btn.svg';
import { useSelector } from 'react-redux';
import { AddPopup } from '../../Popup/AddPopup';
import { EditPopup } from '../../Popup/EditPopup';
import {
	getNameSelector,
	getPostSelector,
} from '../../../redux/selectors/profile_selectors';

export const Profile = () => {
	const [editPopup, setEditPopup] = React.useState(false);
	const [addPopup, setAddPopup] = React.useState(false);

	const openEditPopup = () => {
		setEditPopup(!editPopup);
	};
	const openAddPopup = () => {
		setAddPopup(!addPopup);
	};

	const name = useSelector(getNameSelector);
	const post = useSelector(getPostSelector);

	return (
		<>
			<section className="profile">
				<div className="container">
					<div className="profile__header">
						<img className="profile__avatar" src={avatar} alt="avatar" />
						<div className="profile__info">
							<div className="profile__data">
								<h2 id="name" className="profile__name">
									{name}
								</h2>
								<span id="post" className="profile__post">
									{post}
								</span>
							</div>
							<div className="profile__edit-link">
								<button className="popup-linkEdit popup-link">
									<img
										onClick={openEditPopup}
										className="profile__edit-button"
										src={editBtn}
										alt=""
									/>
								</button>
							</div>
						</div>
						<div className="profile__add">
							<button className="popup-linkAdd popup-link">
								<img
									onClick={openAddPopup}
									className="profile__add-button"
									src={addBtn}
									alt=""
								/>
							</button>
						</div>
					</div>
				</div>
			</section>
			<EditPopup editPopup={editPopup} openEditPopup={openEditPopup} />
			<AddPopup addPopup={addPopup} openAddPopup={openAddPopup} />
		</>
	);
};
