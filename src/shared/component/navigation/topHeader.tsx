import friendImageOne from 'assets/image/friend-image-one.png';

export const TopHeader = () => {
	return (
		<div className='flex width--full justify__content--between mt--30 align__items--center header-wrapper'>
			<p className='font-size--30 
			font-family--bold ml--35 header__wrapper--title'>
				Split Mate
			</p>
			<img src={friendImageOne} alt="Olivia Davis" title={'Olivia Davis'} className='width--75-px mr--40 d-block header__wrapper--profile-image header__wrapper--profile-image' />

			<div className='align__items--center user-profile--wrapper d-none'><img src={friendImageOne} alt="Olivia Davis" className='width--50-px mr--10' />
				<p className='font-family--bold font-size--18'>Olivia Davis</p>
			</div>
		</div>
	);
};
