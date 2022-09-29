
import { MdCleanHands } from 'react-icons/md';
import {TbTruckDelivery, TbHeartHandshake} from 'react-icons/tb'

const iconStyle = (Icon) => <Icon size="6rem" color="white" />;


export const bouncersData = [
	{
		title: "Classic Castle",
		desc: "We proudly offer free delivery and set-up in Sonoma, Marin and Napa counties, additional charges apply outside of these area's. We truly provide a hassle free experience from start to finish!",
		icon: iconStyle(MdCleanHands),
		imgClass: 'one',
	},
	{
		title: 'The Bastille',
		desc: "We proudly offer free delivery and set-up in Sonoma, Marin and Napa counties, additional charges apply outside of these area's. We truly provide a hassle free experience from start to finish!",
        icon: iconStyle(TbTruckDelivery),

	
	},
	{
		title: 'The Toddler',
		desc: "We proudly offer free delivery and set-up in Sonoma, Marin and Napa counties, additional charges apply outside of these area's. We truly provide a hassle free experience from start to finish!",
        icon: iconStyle(TbHeartHandshake),

	},
  

	
];
