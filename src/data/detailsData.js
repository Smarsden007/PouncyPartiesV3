
import { MdCleanHands } from 'react-icons/md';
import {TbTruckDelivery, TbHeartHandshake} from 'react-icons/tb'

const iconStyle = (Icon) => <Icon size="6rem" color="#E6BEAE" />;


export const detailsData = [
	{
		title: "FREE DELIVERY",
		desc: "We proudly offer free delivery and set-up in Sonoma, Marin and Napa counties, additional charges apply outside of these area's. We truly provide a hassle free experience from start to finish!",
		icon: iconStyle(MdCleanHands),
		imgClass: 'one',
	},
	{
		title: 'DISINFECTING',
		desc: "We proudly offer free delivery and set-up in Sonoma, Marin and Napa counties, additional charges apply outside of these area's. We truly provide a hassle free experience from start to finish!",
        icon: iconStyle(TbTruckDelivery),

	
	},
	{
		title: 'COMMITMENT',
		desc: "We proudly offer free delivery and set-up in Sonoma, Marin and Napa counties, additional charges apply outside of these area's. We truly provide a hassle free experience from start to finish!",
        icon: iconStyle(TbHeartHandshake),

	},
];
