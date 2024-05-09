import { useNavigate } from 'react-router-dom';
import CreateExpenseForm from './createExpenseForm';
import createExpenseStyle from '../style/createExpense.module.scss';

const CreateExpense = () => {
    const navigate = useNavigate();
    return (
        <div className={`${createExpenseStyle['expense-form']} m--0-auto mt--30 b-radius--25`}>
            <div className={`${createExpenseStyle['expense__form--title-wrapper']} pt--20 flex justify__content--between align__items--center`}>
                <p className={`${createExpenseStyle['expense-form--title']} font-family--bold font-size--24 ml--35 mb--0`}>Create Expense</p>
                <button className="font-size--16px font-weight--600 width--auto cursor--pointer mr--40 text--blue b--none bg--transparent" onClick={() => navigate(-1)}>Back</button>
            </div>
            <CreateExpenseForm />
        </div>
    );
};

export default CreateExpense;