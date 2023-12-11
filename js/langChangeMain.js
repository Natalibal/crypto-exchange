const langChangeMain = () => {

const langButtons = document.querySelectorAll("[data-btn]");
const allLangs = ["ru", "en"];
const currentPathName = window.location.pathname;
let currentLang =
	localStorage.getItem("language") || checkBrowserLang() || "en";
let currentTexts = {};

const homeTexts = {
	"home_page-title": {
		ru: "Крипто",
		en: "Crypto",
	},
	"hero-page__h1": {
		ru: "Навигация по цифровому миру",
		en: "Navigating the digital world",
	},
	"hero-page__txt": {
		ru: "МГНОВЕННАЯ ТОРГОВЛЯ: ТОРГОВЛЯ БИТКОИНОМ В РЕЖИМЕ РЕАЛЬНОГО ВРЕМЕНИ И АВТОМАТИЧЕСКИЕ ПЛАТЕЖИ ЕЩЕ НИКОГДА НЕ БЫЛИ ТАКИЕ ПРОСТЫЕ!",
		en: "INSTANT TRADING: REAL-TIME & AUTOMATED PAYMENTS TRADING BITCOIN HAS NEVER BEEN SO EASY!",
	},
	"hero-page__btn": {
		ru: "НАЧАТЬ ОБМЕН",
		en: "START EXCHANGE",
	},
	"converter__container-working": {
		ru: "Часы работы 24/7",
		en: "Working hours 24/7",
	},
    "container-give": {
		ru: "Вы даете",
		en: "You give",
	},
    "give-min": {
		ru: "Мин:",
		en: "Min:",
	},
	"give-max": {
		ru: "Макс:",
		en: "Max:",
	},
    "convertor__container-all": {
		ru: "Все",
		en: "All",
	},
	"convertor__container-banks": {
		ru: "Банки",
		en: "Banks",
	},
	"convertor__container-crypto": {
		ru: "Криптовалюта",
		en: "Crypto",
	},
	"convertor__container-payment": {
		ru: "Платежные системы",
		en: "Payment systems",
	},
	"converter__container-get": {
		ru: "Вы получаете",
		en: "You get",
	},
	"get-min": {
		ru: "Мин:",
		en: "Min:",
	},
	"get-max": {
		ru: "Макс:",
		en: "Max:",
	},
	"convertor-all": {
		ru: "Все",
		en: "All",
	},
	"convertor-banks": {
		ru: "Банки",
		en: "Banks",
	},
	"convertor-crypto": {
		ru: "Криптовалюта",
		en: "Crypto",
	},
	"convertor-payment": {
		ru: "Платежные системы",
		en: "Payment systems",
	},
	"convertor__form-title": {
		ru: "Подробности курса",
		en: "Course details",
	},
	"convertor__form-text": {
		ru: "Обмен по курсу:",
		en: "Exchange at the rate of:",
	},
	"convertor__form-txt": {
		ru: "Вы выбрали актив. Убедитесь, что ваш адрес выхода/приема поддерживает эту сеть.Если другая платформа не поддерживает эту сеть, вы можете потерять свои активы.",
		en: "You have selected the asset. Check that your output/receive address supports this network. If the other platform doesn’t support the network, you may lose your assets.",
	},
	"convertor__form-tx": {
		ru: "Отправка только выбранного актива, отправка с использованием любых других сетей приведет к потере средств.",
		en: "Send only the selected asset, sending using any other networks will result in loss of funds.",
	},
	"convertor__form-checkbox": {
		ru: "Я согласен с политикой",
		en: "I agree with the policy",
	},
	"convertor__form-rules": {
		ru: "правил обмена",
		en: "exchange rules",
	},
	"convertor__form-btn": {
		ru: "Начало обмена",
		en: "Start exchange",
	},
	"convertor__form-checkbox": {
		ru: "Я согласен с политикой",
		en: "I agree with the policy",
	},
	"currency__titl": {
		ru: "Последние операции",
		en: "Latest Transactions",
	},
	"coinvision__titl": {
		ru: "Почему COINVISION",
		en: "Why COINVISION",
	},
	
};

// Проверка пути страницы сайта
function checkPagePathName() {
	switch (currentPathName) {
		case "/index.html":
			currentTexts = homeTexts;
			break;
		

		default: 
			const url = './index.html'; 
			window.open(url); 
			break;
	}
}
checkPagePathName();

// Изменение языка у текстов
function changeLang() {
	for (const key in currentTexts) {
		let elem = document.querySelector(`[data-lang=${key}]`);
		if (elem) {
			elem.textContent = currentTexts[key][currentLang];
		}
	}
}
changeLang();

// Вешаем обработчики на каждую кнопку
langButtons.forEach((btn) => {
	btn.addEventListener("click", (event) => {
		if (!event.target.classList.contains("header__btn_active")) {
			currentLang = event.target.dataset.btn;
			localStorage.setItem("language", event.target.dataset.btn);
			resetActiveClass(langButtons, "header__btn_active");
			btn.classList.add("header__btn_active");
			changeLang();
		}
	});
});

// Сброс активного класса у переданного массива элементов
function resetActiveClass(arr, activeClass) {
	arr.forEach((elem) => {
		elem.classList.remove(activeClass);
	});
}

// Проверка активной кнопки
function checkActiveLangButton() {
	switch (currentLang) {
		case "ru":
			document
				.querySelector('[data-btn="ru"]')
				.classList.add("header__btn_active");
			break;
		case "en":
			document
				.querySelector('[data-btn="en"]')
				.classList.add("header__btn_active");
			break;
		default:
			document
				.querySelector('[data-btn="en"]')
				.classList.add("header__btn_active");
			break;
	}
}
checkActiveLangButton();

// Проверка языка браузера
function checkBrowserLang() {
	const navLang = navigator.language.slice(0, 2).toLowerCase();
	const result = allLangs.some((elem) => {
		return elem === navLang;
	});
	if (result) {
		return navLang;
	}
}

console.log("navigator.language", checkBrowserLang());

} 
 
export default langChangeMain;