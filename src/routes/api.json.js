const addonManagers = [
	{
		name: 'Ajour',
		url: 'https://www.getajour.com',
		image: '',
		description: ''
	},
	{
		name: 'CurseForge',
		url: 'https://download.curseforge.com',
		image: '',
		description: ''
	},
	{
		name: 'Minion',
		url: 'https://www.minion.gg',
		image: '',
		description: ''
	},
	{
		name: 'Wago App',
		url: 'https://addons.wago.io',
		image: '',
		description: ''
	},
	{
		name: 'WowUp',
		url: 'https://wowup.io',
		image: '',
		description: ''
	}
];

export async function get() {
	return {
		body: {
			addonManagers
		}
	};
}
