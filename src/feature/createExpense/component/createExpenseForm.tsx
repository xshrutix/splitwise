import { ChangeEvent, Fragment, useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { currentDate, memberMapper } from 'shared/constant/constant';
import { validateCheckbox } from 'shared/constant/validation-schema';
import { IFriends } from '../interface/createExpense.interface';


const CreateExpenseForm = () => {
    const [memberData, setMemberData] = useState<IFriends[]>([]);
    const navigate = useNavigate();
    const friendList = localStorage.getItem("userData");
    const retrievedUserData = friendList && JSON.parse(friendList);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = useCallback((data: any, e: any) => {
        const createdDate = { createdDate: currentDate };
        const settledBillStatus = {
            amountStatus: false,
            billStatus: 'Settled'
        };
        const updatedFriendBillStatus = data.chooseCb.reduce((acc: { [key: string]: boolean }, participant: string) => {
            acc[participant] = false;
            return acc;
        }, {});

        const dataArray = JSON.parse(localStorage.getItem('Expense') || '[]');
        const mergedData = { ...data, ...createdDate, ...settledBillStatus, friendBilStatus: updatedFriendBillStatus };
        dataArray.push(mergedData);
        localStorage.setItem('Expense', JSON.stringify(dataArray));
        e.target.reset();
        navigate('/homePage');
    }, []);

    const handleSelectChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
        const selectedFriend = e.target.value;
        const index = retrievedUserData.friend.findIndex((friend: IFriends) => friend.name === selectedFriend);
        if (index !== -1) {
            const updatedFriendArray = [...retrievedUserData.friend];
            updatedFriendArray.splice(index, 1);
            setMemberData(updatedFriendArray);
        }
    }, [memberData]);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex--column width--90-per m--0-auto">
            <div className='mt--30 flex flex--column'>
                <label htmlFor="billName" className='font-family--medium font-size--18 mb--10'>Bill Name:</label>
                <input type="text" placeholder="Eg: Friend birthday" {...register("billName", { required: true, maxLength: 80 })} className='height--50-px b-radius--10 b--none pl--15'
                />
                {errors.billName && (
                    <span className="error font-size--14px mt--10">
                        Bill Name is required*
                    </span>
                )}
            </div>

            <div className='mt--30 flex flex--column'>
                <label htmlFor="typeOfBill" className='font-family--medium font-size--18 mb--10'>Type of bill:</label>
                <input type="text" placeholder="Eg: fast food or gift" {...register("typeOfBill", { required: true, maxLength: 100 })} className='height--50-px b-radius--10 b--none pl--15' />
                {errors.typeOfBill && (
                    <span className="error font-size--14px mt--10">
                        Type of bill Name is required*
                    </span>
                )}
            </div>

            <div className='mt--30 flex flex--column'>
                <label htmlFor="amount" className='font-family--medium font-size--18 mb--10'>Amount:</label>
                <input
                    type="number"
                    placeholder="Eg: 400"
                    className='height--50-px b-radius--10 b--none pl--15'
                    {...register("amount", {
                        required: true,
                        minLength: 1,
                        maxLength: 5
                    })}
                />
                {errors.amount && (
                    <span className="error font-size--14px mt--10">
                        Bill amount is required*
                    </span>
                )}
            </div>

            <div className='mt--30 mb--30 flex flex--column'>
                <label htmlFor="paidBy" className='font-family--medium font-size--18 mb--10'>Paid by:</label>
                <select {...register("paidBy", { required: true })} className='height--50-px b-radius--10 b--none pl--15' onChange={handleSelectChange}>
                    <option value=''>Select friend</option>);
                    {retrievedUserData?.friend.map((friendName: IFriends, index: number) => {
                        const { name } = friendName;
                        return (
                            <option value={name} key={index}>{name}</option>);
                    })}
                </select>
                {errors.paidBy && (
                    <span className="error font-size--14px mt--10">
                        Paid by is required*
                    </span>
                )}
            </div>

            <div className='mb--30 flex flex--column'>
                {memberData.length > 0 && <p className='font-family--medium font-size--18 mb--10'>Select Member:</p>}
                <div className='flex justify__content--between flex--wrap mt--30'>
                    {memberData?.map((member: IFriends, index: number) => {
                        const { name, value } = member;
                        return (
                            <Fragment key={index}>
                                <label htmlFor="chooseCb" className='cursor--pointer'>
                                    <input
                                        type="checkbox"
                                        value={value}
                                        id={name}
                                        {...register('chooseCb', { validate: validateCheckbox })}
                                    />
                                    <div className='flex flex--column align__items--center '>
                                        <img src={`${memberMapper[value].image}`} alt={name} className='width--50-px mr--10' />
                                        <p className='font-weight--600'>{name}</p>
                                    </div>
                                </label>
                            </Fragment>
                        );
                    })}
                </div>
                {errors.chooseCb && (
                    <span className="error font-size--14px mt--10">
                        Please select at least one checkbox*
                    </span>
                )}
            </div>

            <div className='mt--30 mb--30 flex flex--column'>
                <input type="submit" className="primary--btn font-size--16px font-weight--600 line-height--20px b-radius--25 width--100-px cursor--pointer m--0-auto" />
            </div>
        </form >
    );
};

export default CreateExpenseForm;