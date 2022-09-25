
import { MdCleanHands } from 'react-icons/md';
import { IoBalloonSharp } from 'react-icons/io5';

import {TbTruckDelivery, TbHeartHandshake} from 'react-icons/tb'
import {GiBalloonDog, GiPartyFlags} from 'react-icons/gi'

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
    {
		title: "BALLOON ARCHES",
		desc: "We proudly offer free delivery and set-up in Sonoma, Marin and Napa counties, additional charges apply outside of these area's. We truly provide a hassle free experience from start to finish!",
		icon: iconStyle(IoBalloonSharp),
		imgClass: 'one',
	},
	{
		title: 'CUSTOM DESIGNS',
		desc: "We proudly offer free delivery and set-up in Sonoma, Marin and Napa counties, additional charges apply outside of these area's. We truly provide a hassle free experience from start to finish!",
        icon: iconStyle(GiBalloonDog),

	
	},
	{
		title: 'PARTY PROPS',
		desc: "We proudly offer free delivery and set-up in Sonoma, Marin and Napa counties, additional charges apply outside of these area's. We truly provide a hassle free experience from start to finish!",
        icon: iconStyle(GiPartyFlags),

	},

	
];