import { ReactNode, useEffect } from 'react';
import { TopHeader } from 'shared/component/navigation/topHeader';
import { userData } from 'shared/constant/constant';

interface IParentComponentProps {
	children: ReactNode;
}
const Layout: React.FC<IParentComponentProps> = (props) => {
	const user = userData;
	useEffect(() => {
		localStorage.setItem('userData', JSON.stringify(user));
	}, [user]);

	return (
		<div>
			{<TopHeader />}
			{props.children}
		</div>
	);
};

export default Layout;
