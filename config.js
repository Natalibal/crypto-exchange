const currenciesConfig = {
	'BTC': {
		'min': 0.004103, 'max': 75, 'name': 'Bitcoin', 'shortName': 'BTC', 'type': 'crypto', 'imgName': 'bitcoin', 'currToUSD': 27470, 'wallet':"1NhLtkCH8MezD3hFpE6yXNiBRQC5kqdTQC",
	},
	'Bitcoin BEP20': {
		'min': 0.00435, 'max': 42, 'name': 'Bitcoin BEP20', 'shortName': 'Bitcoin BEP20', 'type': 'crypto', 'imgName': 'bitcoin', 'currToUSD': 36469.86,'wallet':"0x28a95708440a8269aecb78d609cbbfc4e4d46537",
	},
	'DOG': {
		'min': 2133, 'max':  7747316.77, 'name': 'DOGE', 'shortName': 'DOG', 'type': 'crypto','imgName': 'DOGE', 'currToUSD': 0.07156,'wallet':"DAeKY8YX5W9GXqVVYzRwrTmsgy82m5gskm",

	},'DOGE BEP20': {
		'min': 2133, 'max':  7747316.77, 'name': 'DOGE BEP20', 'shortName': 'DOG BEP20', 'type': 'crypto','imgName': 'DOGE', 'currToUSD': 0.07156,'wallet':"0x28a95708440a8269aecb78d609cbbfc4e4d46537",

	},'LIT': {
		'min': 2.14, 'max': 65434, 'name': 'Litecoin', 'shortName': 'LIT', 'type': 'crypto','imgName': 'Litecoin', 'currToUSD': 71.52,'wallet':"LeeqDuD3ggJmgT7RBh2BbGAzyPStoFA5VJ",

	}, 'BNB': {
		'min': 0.6577, 'max': 8435, 'name': 'BNB', 'shortName': 'BNB','type': 'crypto','imgName': 'BNB','currToUSD': 246.42,'wallet':"0x28a95708440a8269aecb78d609cbbfc4e4d46537",

	}, 'TRON': {
		'min': 1155, 'max': 4932514.19, 'name': 'TRON', 'shortName': 'TRON', 'type': 'crypto','imgName': 'Tron','currToUSD': 0.09839,'wallet':"TKhMkSZSFs5rzm2f7ntHNRUUfWxudgt9rz",

	}, 'BTC Cash': {
		'min': 0.6176, 'max': 686, 'name': 'Bitcoin Cash', 'shortName': 'BTC Cash', 'type': 'crypto','imgName': 'Bitcoin Cash','currToUSD': 234.86,'wallet':"1NhLtkCH8MezD3hFpE6yXNiBRQC5kqdTQC",

	}, 'ETH': {
		'min':  0.084, 'max': 225, 'name': 'ETH', 'shortName': 'ETH', 'type': 'crypto','imgName': 'ETH','currToUSD': 2019.80,'wallet':"0x28a95708440a8269aecb78d609cbbfc4e4d46537",

	}, 'Xrp': {
		'min': 246.71, 'max': 305437.22, 'name': 'XRP', 'shortName': 'XRP', 'type': 'crypto','imgName': 'Xrp','currToUSD': 0.6599,'wallet':"rNxp4h8apvRis6mJf9Sh8C6iRxfrDWN7AV XRP Tag: 321617312",
	}, 
	    'Mon': {
		'min': 0.88, 'max': 2345, 'name': 'Monero', 'shortName': 'Monero', 'type': 'crypto','imgName': 'Monero','currToUSD': 163.22,'wallet':"88Mn5YWzHs4TWTbttrKrNgVs9rQjdq3Af15PS3SQwWE8NCbYa6Csp3yD2U4yLFNPNTYM9s5nkai2dNJWE3QWvwd7BzHTaRV",

	}, 'Alg': {
		'min': 1360, 'max': 5713965.14, 'name': 'ALGO', 'shortName': 'ALGO', 'type': 'crypto','imgName': 'ALGO','currToUSD': 0.1204,'wallet':"5TGYGHXYE6XYGION3DT3NCVXUNWIAB6XEIBIJKJ5GFTIWHLL4XTDLLGHC4",

	}, 'Sol': {
		'min': 4.12, 'max': 14121, 'name': 'SOL', 'shortName': 'SOL', 'type': 'crypto','imgName': 'SOL','currToUSD': 45.01,'wallet':"6ntQ6Ln8RkZmX6VYq1J8dGEnRsGf9gbse1rMHF9cbTJM",

	}, 'Pol': {
		'min': 230.39, 'max': 189585, 'name': 'Polygon', 'shortName': 'Polygon', 'type': 'crypto','imgName': 'Polygon', 'currToUSD': 0.8096,'wallet':"0x28a95708440a8269aecb78d609cbbfc4e4d46537",
	}, 'Zc': {
		'min': 5.23, 'max': 34340, 'name': 'Zcash', 'shortName': 'Zcash', 'type': 'crypto','imgName': 'Zcash','currToUSD': 28.59,'wallet':"t1XMyXsNuq3qWRtqz5pcWHYuKbhwfh3i3uS",

	}, 'Stel': {
		'min': 1223, 'max': 2342436.94, 'name': ' Stellar BEP20', 'shortName': 'Stellar BEP20', 'type': 'crypto','imgName': 'Stellar BEP20','currToUSD': 0.1222,'wallet':"0x28a95708440a8269aecb78d609cbbfc4e4d46537",
	},
	    'SHIB BEP20': {
		'min': 18866983, 'max': 51263924963, 'name': 'SHIB BEP20', 'shortName': 'SHIB', 'type': 'crypto','imgName': 'SHIB BEP20','currToUSD': 0.00000824,'wallet':"0x28a95708440a8269aecb78d609cbbfc4e4d46537",

	}, 'Lun': {
		'min': 2318684, 'max': 8131397006, 'name': 'Luna', 'shortName': 'Luna', 'type': 'crypto','imgName': 'Luna','currToUSD': 0.00006639,'wallet':"terra1frh79vmtur5fmrghz6gfjvfhpa3u2c0uemv4af LUNC MEMO: 100950874",

	}, 'Dash': {
		'min': 4.99, 'max': 6435, 'name': 'Dash', 'shortName': 'Dash', 'type': 'crypto','imgName': 'Dash','currToUSD': 30.08,'wallet':"Xb97xx2h6yopCom8NC5JoK2W4zVjwBNHBT",

	}, 'Tet TRC20': {
		'min': 150, 'max': 1349359, 'name': 'Tether TRC20', 'shortName': 'Tether TRC20', 'type': 'crypto','imgName': 'TetherUSDT','currToUSD': 1,'wallet':"TKhMkSZSFs5rzm2f7ntHNRUUfWxudgt9rz",

	},  'USDC TRC20': {
		'min': 150, 'max': 467584, 'name': 'USDC TRC20', 'shortName': 'USDC TRC20', 'type': 'crypto','imgName': 'USDC TRC20','currToUSD': 1,'wallet':"TKhMkSZSFs5rzm2f7ntHNRUUfWxudgt9rz",

	}, 'USDC ERC20': {
		'min': 150, 'max': 642424, 'name': 'USDC ERC20', 'shortName': 'USDC ERC20', 'type': 'crypto','imgName': 'USDC TRC20','currToUSD': 1,'wallet':"0x28a95708440a8269aecb78d609cbbfc4e4d46537",

	},'Tether SOL': {
		'min': 150, 'max': 345033, 'name': 'Tether SOL', 'shortName': 'Tether SOL', 'type': 'crypto','imgName': 'TetherUSDT','currToUSD': 1,'wallet':"6ntQ6Ln8RkZmX6VYq1J8dGEnRsGf9gbse1rMHF9cbTJM",
	
	}, 'Tether': {
		'min': 150, 'max': 752452, 'name': 'Tether ERC20', 'shortName': 'Tether ERC20', 'type': 'crypto','imgName': 'TetherUSDT','currToUSD': 1,'wallet':"0x28a95708440a8269aecb78d609cbbfc4e4d46537",
	},
	



	 'Sber': {
		'min': 0.2, 'max': 180, 'name': 'Sberbank RU', 'shortName': 'Sberbank RU', 'type': 'banks','imgName': 'Sberbank RU','currToUSD': 0.3,'wallet':"Xb97xx2h6yopCom8NC5JoK2W4zVjwBNHBT",

	},  'Visa/MC kzt': {
		'min': 0.2, 'max': 180, 'name': 'Visa/MC kzt', 'shortName': 'Visa-MC kzt', 'type': 'payment','imgName': 'VisaMC kzt','currToUSD': 0.3,'wallet':"Xb97xx2h6yopCom8NC5JoK2W4zVjwBNHBT",

	 }, 'Visa/MC RU': {
		'min': 0.2, 'max': 180, 'name': 'Visa/MC RU', 'shortName': 'Visa-MC RU', 'type': 'payment','imgName': 'VisaMC kzt','currToUSD': 0.3,'wallet':"Xb97xx2h6yopCom8NC5JoK2W4zVjwBNHBT",

	}, 'HalykB': {
		'min': 0.2, 'max': 180, 'name': 'Halyk Bank', 'shortName': 'Halyk Bank', 'type': 'banks','imgName': 'Halyk Bank','currToUSD': 0.3,'wallet':"Xb97xx2h6yopCom8NC5JoK2W4zVjwBNHBT",

    }, 'СБП': {
	 	'min': 0.2, 'max': 180, 'name': 'СБП', 'shortName': 'СБП', 'type': 'banks','imgName': 'СБП','currToUSD': 0.3,'wallet':"Xb97xx2h6yopCom8NC5JoK2W4zVjwBNHBT",

	 }, 'RNCB': {
		'min': 0.2, 'max': 180, 'name': 'RNCB', 'shortName': 'RNCB', 'type': 'banks','imgName': 'RNCB','currToUSD': 0.3,'wallet':"Xb97xx2h6yopCom8NC5JoK2W4zVjwBNHBT",

	 }, 'VTB': {
	 	'min': 0.2, 'max': 180, 'name': 'VTB', 'shortName': 'VTB', 'type': 'banks','imgName': 'VTB','currToUSD': 0.3,'wallet':"Xb97xx2h6yopCom8NC5JoK2W4zVjwBNHBT",

	 }, 'Gaz': {
	 	'min': 0.2, 'max': 180, 'name': 'Gazprombank', 'shortName': 'Gazprom', 'type': 'banks','imgName': 'Gazprombank','currToUSD': 0.3,'wallet':"Xb97xx2h6yopCom8NC5JoK2W4zVjwBNHBT",

	 },
	 'Alfa': {
	 	'min': 0.2, 'max': 180, 'name': 'Alfabank', 'shortName': 'Alfa', 'type': 'banks','imgName': 'Alfabank','currToUSD': 0.3,'wallet':"Xb97xx2h6yopCom8NC5JoK2W4zVjwBNHBT",

	 }, 'Kaspi': {
	 	'min': 0.2, 'max': 180, 'name': 'Kaspi Bank', 'shortName': 'Kaspi Bank', 'type': 'banks','imgName': 'Kaspi Bank','currToUSD': 0.3,'wallet':"Xb97xx2h6yopCom8NC5JoK2W4zVjwBNHBT",

	 }, 'Otk': {
	   'min': 0.2, 'max': 180, 'name': 'Otkritie', 'shortName': 'Otkritie', 'type': 'banks','imgName': 'Otkritie','currToUSD': 0.3,'wallet':"Xb97xx2h6yopCom8NC5JoK2W4zVjwBNHBT",

	 }, 'Ros': {
	 	'min': 0.2, 'max': 180, 'name': 'RosBank', 'shortName': 'RosBank', 'type': 'banks','imgName': 'RosBank',

	 }, 'Bereke': {
	 	'min': 0.2, 'max': 180, 'name': 'Bereke Bank KZT', 'shortName': 'Bereke Bank KZT', 'type': 'banks','imgName': 'Bereke Bank KZT',

	 }, 'MIR': {
		'min': 0.2, 'max': 180, 'name': 'MIR', 'shortName': 'MIR', 'type': 'banks','imgName': 'MIR',

	 }, 'Home Credit': {
	 	'min': 0.2, 'max': 180, 'name': 'Home Credit', 'shortName': 'Home Credit', 'type': 'banks','imgName': 'Home Credit',

	 }, 'QIWI': {
	 	'min': 0.2, 'max': 180, 'name': 'QIWI', 'shortName': 'QIWI', 'type': 'payment','imgName': 'QIWI',

	 }, 'Jusan': {
		'min': 0.2, 'max': 180, 'name': 'Jusan Bank', 'shortName': 'Jusan', 'type': 'banks','imgName': 'Jusan Bank',

	}, 'ЮMoney': {
	 	'min': 0.2, 'max': 180, 'name': 'ЮMoney', 'shortName': 'ЮMoney', 'type': 'payment','imgName': 'ЮMoney',

	 }
}



export default currenciesConfig;

