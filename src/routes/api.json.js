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

export async function get() {
	return {
		body: {
			addonManagers
		}
	};
}
