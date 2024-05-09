import { useNavigate } from 'react-router-dom';
import summaryStyle from '../style/summary.module.scss';
import SummaryList from './summaryList';

const Summary = () => {
    const navigate = useNavigate();
    return (
        <div className={`${summaryStyle['summary']} width--90-per m--0-auto b-radius--25 mb--40`}>
            <div className={`${summaryStyle['summary__title']} flex justify__content--between align__items--center mt--50 pt--20`}>
                <p className="ml--30 font-size--23 font-family--semi-bold">Split Summary</p>
                <button className="primary--btn font-size--16px font-weight--600 line-height--20px b-radius--25 width--auto cursor--pointer mr--40" onClick={() => navigate('/createExpense')}>Create Expense</button>
            </div>
            <SummaryList />
        </div>
    );
};

export default Summary;