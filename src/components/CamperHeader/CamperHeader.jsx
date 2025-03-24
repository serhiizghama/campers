import PropTypes from 'prop-types';
import clsx from 'clsx';

import Icon from '@/components/Icon';
import FavoriteButton from '@/components/FavoriteButton';

import css from './CamperHeader.module.css';

const CamperHeader = ({ name, price, id, rating, reviews, location, detailsPage, onReviewsClick }) => {
	return (
		<div>
			<div className={css.headerFirstRow}>
				<h3 className={css.title}>{name}</h3>
				{!detailsPage && (
					<div className={css.priceHolder}>
						<span className={css.price}>{price}</span>
						<FavoriteButton id={id} />
					</div>
				)}
			</div>
			<ul className={css.headerSecondRow}>
				<li className={css.headerSecondRowItem}>
					<Icon className={css.ratingIcon} name="rating" width={16} height={16} />
					<span
						onClick={onReviewsClick}
						className={css.reviewLink} // добавь этот класс в CSS
						style={{ cursor: 'pointer', textDecoration: 'underline' }}
					>
						{rating} ({reviews} Reviews)
					</span>
				</li>
				<li className={css.headerSecondRowItem}>
					<Icon name="map" width={16} height={16} />
					<span>{location}</span>
				</li>
			</ul>
			{detailsPage && <span className={clsx(css.price, css.detailsPagePrice)}>{price}</span>}
		</div>
	);
};


CamperHeader.propTypes = {
	name: PropTypes.string,
	price: PropTypes.string,
	id: PropTypes.string,
	rating: PropTypes.number,
	reviews: PropTypes.number,
	location: PropTypes.string,
	detailsPage: PropTypes.bool,
};
export default CamperHeader;
