import paymentTexts from './langChangePayment.js'
import verificationTexts from './langChangeVerification.js'
import finalTexts from './langChangeFinal.js'
import rejectedTexts from './langChangeRejected.js'


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
	"coinvision__titl-1": {
		ru: "Для нас пользователи на первом месте",
		en: "For us, users come first",
	},
	"coinvision__text-1": {
		ru: "Пользователи всегда на первом месте. С самого с самого начала безопасность пользователей была нашим главным приоритетом. Именно поэтому мы внедрили передовые средства защиты и контроль конфиденциальности данных во всех системах COINVISION экосистеме",
		en: "Users always come first. From the very beginning, the security of users was our top priority. That's why we implemented advanced security tools and data confidentiality control in all COINVISION ecosystem",
	},
	"coinvision__titl-2": {
		ru: "Онлайн поддержка 24/7",
		en: "Online support 24/7",
	},
	"coinvision__text-2": {
		ru: "Наши опытные специалисты из службы поддержки всегда готовы помочь вам по любому вопросу",
		en: "Our experienced specialists from the support service are always ready to help you with any question",
	},
	"coinvision__titl-3": {
		ru: "Проверенные поставщики",
		en: "Proven providers",
	},
	"coinvision__text-3": {
		ru: "Мы сотрудничаем только с надежными фиатными провайдерами, чтобы обеспечить лучший сервис на криптовалютном рынке",
		en: "We cooperate only with reliable fiat providers to provide the best service in the crypto market",
	},
	"coinvision__titl-4": {
		ru: "Области",
		en: "Areas",
	},
	"coinvision__text-4": {
		ru: "Наш сервис предоставляет огромный выбор выбор валют:RUB, USD, UAH, EUR, KZT, INR, AZN, UZS, GBP, CNY.Classic Bitcoin и Ethereum, а также стейблкоины USDT, USDC",
		en: "Our service provides a huge range of currency choices:RUB, USD, UAH, EUR, KZT, INR, AZN, UZS, GBP, CNY.Classic Bitcoin and Ethereum, as well as stablecoins USDT, USDC",
	},
	"reviews__titl": {
		ru: "Что говорят о нас клиенты",
		en: "What clients say about us",
	},
	"reviews__name-1": {
		ru: "Артем",
		en: "Artem",
	},
	"reviews__txt-1": {
		ru: "Супер быстрый обмен, доволен результатом.",
		en: "Super fast exchange, happy with the result.",
	},
	"reviews__name-2": {
		ru: "Саша",
		en: "Sasha",
	},
	"reviews__txt-2": {
		ru: "Рекомендую этот обменник всем своим знакомым и друзьям.",
		en: "I recommend this exchange to all my friends and acquaintances.",
	},
	"reviews__name-3": {
		ru: "Артур",
		en: "Artur",
	},
	"reviews__txt-3": {
		ru: "Я очень доволен скоростью и качеством услуг по обмену.",
		en: "I am very pleased with the speed and quality of the exchange service.",
	},
	"reviews__name-4": {
		ru: "Дмитрий",
		en: "Dmitriy",
	},
	"reviews__txt-4": {
		ru: "Спасибо за быстрый обмен, все было отлично.",
		en: "Thank you for the quick exchange, everything was great.",
	},
	"footer__menu-rules": {
		ru: "Правила обмена",
		en: "Exchange rules",
	},
	"footer__menu-help": {
		ru: "Помощь",
		en: "Help",
	},
	"footer__menu-contacts": {
		ru: "Контакты",
		en: "Contacts",
	},
};

// Проверка пути страницы сайта
function checkPagePathName() {
	switch (currentPathName) {
		case "/index.html":
			currentTexts = homeTexts;
			setEventListener();
			checkActiveLangButton();
			break;
		case '/payment.html':
			currentTexts = paymentTexts;
			break;
		case '/verification.html':
			currentTexts = verificationTexts;
			break;
		case '/final.html':
			currentTexts = finalTexts;
			break;
		case '/rejected.html':
			currentTexts = rejectedTexts;
			break;
	}
}
console.log(currentTexts);

console.log("currentPathName", currentPathName);
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
function setEventListener() {
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
}

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
			default:
				document
					.querySelector('[data-btn="en"]')
					.classList.add("header__btn_active");
				break;
		}
	}



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

} 

export default langChangeMain;