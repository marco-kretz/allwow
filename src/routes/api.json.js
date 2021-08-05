const addonManagers = [
	{
		name: 'Ajour',
		url: 'https://www.getajour.com',
		image:
			'https://uploads-ssl.webflow.com/5f6386ad54bb290e47450199/5f75c250dd86beac36cffd9d_ajour.png',
		bgColor: '#211510',
		pros: [
			'Ultra leightweight',
			'Open source',
			'Additional addon providers',
			'wago.io support',
			'Install from URL',
			'Customizable'
		],
		cons: ['Weak browsing experience']
	},
	{
		name: 'CurseForge',
		url: 'https://download.curseforge.com',
		image: 'https://www.curseforge.com/Content/2-0-7887-19616/Skins/CurseForge/images/anvil.svg',
		bgColor: '#0D0D0D',
		pros: ['"Official" addon manager', 'Best browsing experience', 'Supports multiple games'],
		cons: ['Closed source', 'Overwolf framework', 'No additional addon sources']
	},
	{
		name: 'Wago App',
		url: 'https://addons.wago.io',
		image: 'https://addons.wago.io/images/wago-logo.svg',
		bgColor: 'rgba(34,35,37,1)',
		pros: ['WeakAuras support', 'Supports addon devs', 'Recommendation system'],
		cons: ['Currently in beta']
	},
	{
		name: 'WowUp',
		url: 'https://wowup.io',
		image: 'https://wowup.io/assets/images/wowup_white_lg_nopad.png',
		bgColor: '#504fa1',
		pros: [
			'Easy to use',
			'Open source',
			'Companion Addon',
			'Additional addon providers',
			'Install from URL'
		],
		cons: ['Based on Electron']
	}
];

const discordServers = [
	{
		class: 'Demonhunter (The Fel Hammer)',
		icon: 'images/dh.png',
		url: 'https://goo.gl/yDLlMY'
	},
	{
		class: 'Druid (Dreamgrove)',
		icon: 'images/druid.png',
		url: 'https://goo.gl/VoRO6a'
	},
	{
		class: 'Warlock (Council of the Black Harvest)',
		icon: 'images/warlock.png',
		url: 'https://goo.gl/sJCfF9'
	},
	{
		class: 'Hunter (Trueshot Lodge)',
		icon: 'images/hunter.png',
		url: 'https://goo.gl/lJdmwp'
	},
	{
		class: 'Warrior',
		icon: 'images/warrior.png',
		url: 'https://goo.gl/jSMjpB'
	},
	{
		class: 'Mage (Altered Time)',
		icon: 'images/mage.png',
		url: 'https://goo.gl/EcMW0x'
	},
	{
		class: 'Monk (Peak of Serenity)',
		icon: 'images/monk.png',
		url: 'https://goo.gl/VoRO6a'
	},
	{
		class: 'Paladin (Hammer of Wrath)',
		icon: 'images/pala.png',
		url: 'https://goo.gl/VoRO6a'
	},
	{
		class: 'Priest (Warcraft Priests)',
		icon: 'images/priest.png',
		url: 'https://goo.gl/VoRO6a'
	},
	{
		class: 'Shaman (Earthshrine)',
		icon: 'images/shaman.png',
		url: 'https://goo.gl/VoRO6a'
	},
	{
		class: 'Rogue (Ravenholdt)',
		icon: 'images/rogue.png',
		url: 'https://goo.gl/VoRO6a'
	},
	{
		class: 'Deathknight (Acherus)',
		icon: 'images/dk.png',
		url: 'https://goo.gl/VoRO6a'
	}
];

const generalWebsites = [
	{
		title: 'Wowhead',
		description: '#1 Source for WoW News, Guids, etc.',
		url: 'https://www.wowhead.com',
		image: 'https://wow.zamimg.com/images/logos/horizontal/wowhead.webp'
	},
	{
		title: 'Icy Veins',
		description: 'News & Guides',
		url: 'https://www.icy-veins.com/',
		image: 'https://static.icy-veins.com/images/common/logo.png'
	},
	{
		title: 'Raider.IO',
		description: 'Rankings for Mythic+ & Raids',
		url: 'https://raider.io',
		image: 'https://cdnassets.raider.io/images/brand/Logo_2ColorWhite.svg'
	},
	{
		title: 'WoWProgress',
		description: 'Rankings for Mythic+ & Raids, find Guilds & Members',
		url: 'https://www.wowprogress.com'
	},
	{
		title: 'Mythic Trap',
		description: 'Detailed Guides for Dungeons & Raids',
		url: 'https://mythictrap.com/'
	},
	{
		title: 'Subcreation',
		description: 'Tier lists & Top builds',
		url: 'https://mplus.subcreation.net'
	}
];

export async function get() {
	return {
		body: {
			addonManagers,
			discordServers,
			generalWebsites
		}
	};
}