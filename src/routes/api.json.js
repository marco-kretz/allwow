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
		title: 'Raidbots',
		description: 'Find the best Gear for you Character',
		url: 'https://www.raidbots.com/simbot',
		image: '/images/raidbots.png'
	},
	{
		title: 'QE Live',
		description: 'Like Raidbots, but for Healers :)',
		url: 'https://questionablyepic.com/live/',
		image:
			'data:image/png;base64,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'
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
