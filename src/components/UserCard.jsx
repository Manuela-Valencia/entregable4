import { useState } from "react";

const UsersCard = ({
    user,
    deleteUserById,
    setUpdateInf,
    setIsCloseForm,
    setModal,
    modal,
}) => {
    const [animation, setAnimation] = useState  (false);
    const handleEdit = () => {
        setUpdateInf(user);
        setIsCloseForm(false);
    };

    const handleDeleteUser = () => {
        setModal(true);
        if (modal) {
            setAnimation(true);
            setTimeout(() => {
                setAnimation(false);
            }, 700);
            deleteUserById("/users", user.id);
            setModal(false);
        }
    };

    return (
        <article className={`card__content ${animation && "card__animation"}`}>
            <h2 className='card__titulo'>{`${user.first_name} ${user.last_name}`}</h2>
            <hr />
            <ul className='card__body'>
                <li className='card__li'>
                    <span className='card__span'>Email:</span>
                    <span className='card__inf'>{user.email}</span>
                </li>
                <li className='card__li'>
                    <span className='card__span'>Birthday: </span>
                    <span className='card__inf'>{user.birthday}</span>
                </li>
            </ul>
            <hr />
            <nav className='card__sectionBtn'>
                <button className='btn btn__delete' onClick={handleDeleteUser}>
                    <i className='bx bx-trash'></i>
                </button>
                <button className='btn btn__edit' onClick={handleEdit}>
                    <i className='bx bxs-edit-alt'></i>
                </button>
            </nav>
        </article>
    );
};

export default UsersCard;