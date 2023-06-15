import { useEffect } from "react";
import { useForm } from "react-hook-form";
import "./styles/formUser.css";

const FormUsers = ({
    createNewUser,
    updateInf,
    setUpdateInf,
    updateUserById,
    setIsCloseForm,
}) => {
    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        reset(updateInf);
    }, [updateInf]);

    const submit = (data) => {
        if (updateInf) {
            updateUserById("/users", updateInf.id, data);
            setUpdateInf();
        } else {
            createNewUser("/users", data);
        }
        reset({
            email: "",
            password: "",
            first_name: "",
            last_name: "",
            birthday: "",
        });
        setIsCloseForm(true);
    };
    const handleExit = () => {
        reset({
            email: "",
            password: "",
            first_name: "",
            last_name: "",
            birthday: "",
        });
        setIsCloseForm(true);
        setUpdateInf();
    };

    return (
        <form className='form' onSubmit={handleSubmit(submit)}>
            <h2 className='form__title'>Form User</h2>
            <span onClick={handleExit} className='form__x'>
                X
            </span>
            <div className='form__section'>
                <label className='form__label' htmlFor='email'>
                    Email
                </label>
                <input
                    className='form__input'
                    {...register("email")}
                    id='email'
                    type='text'
                    required
                    placeholder='Enter your e-mail address'
                />
            </div>
            <div className='form__section'>
                <label className='form__label' htmlFor='password'>
                    Password
                </label>
                <input
                    className='form__input'
                    {...register("password")}
                    id='password'
                    type='password'
                    required
                    placeholder='Password'
                />
            </div>
            <div className='form__section'>
                <label className='form__label' htmlFor='first_name'>
                    First Name
                </label>
                <input
                    className='form__input'
                    {...register("first_name")}
                    id='first_name'
                    type='text'
                    required
                    placeholder='Enter your name'
                />
            </div>
            <div className='form__section'>
                <label className='form__label' htmlFor='last_name'>
                    Last Name
                </label>
                <input
                    className='form__input'
                    {...register("last_name")}
                    id='last_name'
                    type='text'
                    required
                    placeholder='Enter your last name'
                />
            </div>
            <div className='form__section'>
                <label className='form__label' htmlFor='birthday'>
                    Birthday
                </label>
                <input
                    className='form__input'
                    {...register("birthday")}
                    id='birthday'
                    type='date'
                    required
                    placeholder='Select your birthday'
                />
            </div>
            <button className='form__btn'>
                {updateInf ? "Update" : "Create"}
            </button>
        </form>
    );
};

export default FormUsers;