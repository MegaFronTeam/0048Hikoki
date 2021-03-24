"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Dropzone.autoDiscover = false;
var JSCCommon = {
	btnToggleMenuMobile: [].slice.call(document.querySelectorAll(".toggle-menu-mobile--js, .burger--js")),
	menuMobile: document.querySelector(".menu-mobile--js"),
	menuMobileLink: [].slice.call(document.querySelectorAll(".menu-mobile--js ul li a")),
	modalCall: function modalCall() {
		$(".link-modal").fancybox({
			arrows: false,
			infobar: false,
			touch: false,
			type: 'inline',
			autoFocus: false,
			i18n: {
				en: {
					CLOSE: "Закрыть",
					NEXT: "Вперед",
					PREV: "Назад"
				}
			},
			beforeLoad: function beforeLoad() {
				document.querySelector("html").classList.add("fixed");
			},
			afterClose: function afterClose() {
				document.querySelector("html").classList.remove("fixed");
			}
		});
		$(".modal-close-js").click(function () {
			$.fancybox.close();
		});
		$.fancybox.defaults.backFocus = false;
		var linkModal = document.querySelectorAll('.link-modal');

		function addData() {
			linkModal.forEach(function (element) {
				element.addEventListener('click', function () {
					var modal = document.querySelector(element.getAttribute("href"));
					var data = element.dataset;

					function setValue(val, elem) {
						if (elem && val) {
							var el = modal.querySelector(elem);
							el.tagName == "INPUT" ? el.value = val : el.innerHTML = val; // console.log(modal.querySelector(elem).tagName)
						}
					}

					setValue(data.title, '.ttu');
					setValue(data.text, '.after-headline');
					setValue(data.btn, '.btn');
					setValue(data.order, '.order');
				});
			});
		}

		if (linkModal) addData();
	},
	// /modalCall
	toggleMenu: function toggleMenu() {
		var toggle = this.btnToggleMenuMobile;
		var menu = this.menuMobile;
		document.addEventListener("click", function (event) {
			var toggleEv = event.target.closest(".toggle-menu-mobile--js");
			if (!toggleEv) return;
			toggle.forEach(function (el) {
				return el.classList.toggle("on");
			});
			menu.classList.toggle("active");
			[document.body, document.querySelector('html')].forEach(function (el) {
				return el.classList.toggle("fixed");
			});
		}, {
			passive: true
		});
	},
	closeMenu: function closeMenu() {
		if (!this.menuMobile) return;
		this.btnToggleMenuMobile.forEach(function (element) {
			return element.classList.remove("on");
		});
		this.menuMobile.classList.remove("active");
		[document.body, document.querySelector('html')].forEach(function (el) {
			return el.classList.remove("fixed");
		});
	},
	mobileMenu: function mobileMenu() {
		var _this2 = this;

		if (!this.menuMobileLink) return;
		this.toggleMenu();
		document.addEventListener('mouseup', function (event) {
			var container = event.target.closest(".menu-mobile--js.active"); // (1)

			var link = event.target.closest(".navMenu__link"); // (1)

			if (!container || link) _this2.closeMenu();
		}, {
			passive: true
		});
		window.addEventListener('resize', function () {
			if (window.matchMedia("(min-width: 992px)").matches) _this2.closeMenu();
		}, {
			passive: true
		});
	},
	// /mobileMenu
	// tabs  .
	tabscostume: function tabscostume(tab) {
		var tabs = {
			Btn: [].slice.call(document.querySelectorAll(".".concat(tab, "__btn"))),
			BtnParent: [].slice.call(document.querySelectorAll(".".concat(tab, "__caption"))),
			Content: [].slice.call(document.querySelectorAll(".".concat(tab, "__content")))
		};
		tabs.Btn.forEach(function (element, index) {
			element.addEventListener('click', function () {
				if (!element.classList.contains('active')) {
					//turn off old
					var oldActiveEl = element.closest(".".concat(tab)).querySelector(".".concat(tab, "__btn.active"));
					var oldActiveContent = tabs.Content[index].closest(".".concat(tab)).querySelector(".".concat(tab, "__content.active"));
					oldActiveEl.classList.remove('active');
					oldActiveContent.classList.remove('active'); //turn on new(cklicked el)

					element.classList.add('active');
					tabs.Content[index].classList.add('active');
				}
			});
		});
	},
	// /tabs
	inputMask: function inputMask() {
		// mask for input
		var InputTel = [].slice.call(document.querySelectorAll('input[type="tel"]'));
		InputTel.forEach(function (element) {
			return element.setAttribute("pattern", "[+][0-9]{1}[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}");
		});
		Inputmask("+9(999)999-99-99").mask(InputTel);
	},
	// /inputMask
	ifie: function ifie() {
		var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

		if (isIE11) {
			document.body.insertAdjacentHTML("beforeend", '<div class="browsehappy">	<p class=" container">К сожалению, вы используете устаревший браузер. Пожалуйста, <a href="http://browsehappy.com/" target="_blank">обновите ваш браузер</a>, чтобы улучшить производительность, качество отображаемого материала и повысить безопасность.</p></div>');
		}
	},
	sendForm: function sendForm() {
		var gets = function () {
			var a = window.location.search;
			var b = new Object();
			var c;
			a = a.substring(1).split("&");

			for (var i = 0; i < a.length; i++) {
				c = a[i].split("=");
				b[c[0]] = c[1];
			}

			return b;
		}(); // form


		$(document).on('submit', "form", function (e) {
			e.preventDefault();
			var th = $(this);
			var data = th.serialize();
			th.find('.utm_source').val(decodeURIComponent(gets['utm_source'] || ''));
			th.find('.utm_term').val(decodeURIComponent(gets['utm_term'] || ''));
			th.find('.utm_medium').val(decodeURIComponent(gets['utm_medium'] || ''));
			th.find('.utm_campaign').val(decodeURIComponent(gets['utm_campaign'] || ''));
			$.ajax({
				url: 'action.php',
				type: 'POST',
				data: data
			}).done(function (data) {
				$.fancybox.close();
				$.fancybox.open({
					src: '#modal-thanks',
					type: 'inline'
				}); // window.location.replace("/thanks.html");

				setTimeout(function () {
					// Done Functions
					th.trigger("reset"); // $.magnificPopup.close();
					// ym(53383120, 'reachGoal', 'zakaz');
					// yaCounter55828534.reachGoal('zakaz');
				}, 4000);
			}).fail(function () {});
		});
	},
	heightwindow: function heightwindow() {
		// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
		var vh = window.innerHeight * 0.01; // Then we set the value in the --vh custom property to the root of the document

		document.documentElement.style.setProperty('--vh', "".concat(vh, "px")); // We listen to the resize event

		window.addEventListener('resize', function () {
			// We execute the same script as before
			var vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
		}, {
			passive: true
		});
	},
	animateScroll: function animateScroll() {
		$(document).on('click', " .top-nav li a, .scroll-link", function () {
			var elementClick = $(this).attr("href");
			var destination = $(elementClick).offset().top;
			$('html, body').animate({
				scrollTop: destination
			}, 1100);
			return false;
		});
	},
	getCurrentYear: function getCurrentYear(el) {
		var now = new Date();
		var currentYear = document.querySelector(el);
		if (currentYear) currentYear.innerText = now.getFullYear();
	},
	//taken from good planet
	customRange: function customRange() {
		$(".range-wrap").each(function () {
			var _this = $(this);

			var $d3 = _this.find(".slider-js");

			var slider = $d3.ionRangeSlider({
				skin: "round",
				type: "double",
				grid: false,
				grid_snap: false,
				hide_min_max: true,
				hide_from_to: true,
				onStart: function onStart(data) {
					_this.find('.minus').val(data.from);

					_this.find('.plus').val(data.to);
				},
				onChange: function onChange(data) {
					_this.find('.minus').val(data.from);

					_this.find('.plus').val(data.to);
				},
				onFinish: function onFinish(data) {
					_this.find('.minus').val(data.from);

					_this.find('.plus').val(data.to);
				},
				onUpdate: function onUpdate(data) {
					_this.find('.minus').val(data.from);

					_this.find('.plus').val(data.to);
				}
			});
			var $d3_instance = slider.data("ionRangeSlider");
			$(this).on('change  input  cut  copy  paste', '.minus', function () {
				var th = $(this);
				var data = th.val();
				var min = +data; // th.val(data + ' т')

				console.log(1);
				$d3_instance.update({
					from: min
				});
			});
			$(this).on('change  input  cut  copy  paste', '.plus', function () {
				var th = $(this);
				var data = th.val();
				var max = +data; //max => new val of max inp
				//min => value of the min inp

				var min = Number(document.querySelector('.range-result.range-result--minus.minus').value);

				if (min >= max) {
					min = 0;
					$d3_instance.update({
						from: min,
						to: max
					});
				} else {
					$d3_instance.update({
						to: max
					});
				}
			}); // $d3.on("change", function () {
			// 	var $inp = $(this);
			// 	var from = $inp.prop("value"); // reading input value
			// 	var from2 = $inp.data("from"); // reading input data-from attribute
			// 	_this.find('range-result--minus').val(from); // FROM value
			// 	_this.find('range-result--plus').val(from); // FROM value
			// });
		});
	} //taken from good planet

};
var $ = jQuery;

function eventHandler() {
	JSCCommon.ifie();
	JSCCommon.modalCall();
	JSCCommon.tabscostume('tabs');
	JSCCommon.mobileMenu();
	JSCCommon.inputMask();
	JSCCommon.sendForm();
	JSCCommon.heightwindow();
	JSCCommon.animateScroll();
	JSCCommon.customRange(); // JSCCommon.CustomInputFile(); 

	var x = window.location.host;
	var screenName = '04-360.png';

	if (screenName && x.includes("localhost:30")) {
		document.body.insertAdjacentHTML("beforeend", "<div class=\"pixel-perfect\" style=\"background-image: url(screen/".concat(screenName, ");\"></div>"));
	}

	function whenResize() {
		var topNav = document.querySelector('.top-nav  ');
		if (!topNav) return;
		window.addEventListener('scroll', function (e) {
			this.scrollY > 0 ? topNav.classList.add('fixed') : topNav.classList.remove('fixed');
		}, {
			passive: true
		});
	}

	window.addEventListener('resize', function () {
		whenResize();
	}, {
		passive: true
	});
	whenResize(); // let defaultSl = {
	// 	spaceBetween: 0,
	// 	lazy: {
	// 		loadPrevNext: true,
	// 	},
	// 	watchOverflow: true,
	// 	spaceBetween: 0,
	// 	loop: true,
	// 	navigation: {
	// 		nextEl: '.swiper-button-next',
	// 		prevEl: '.swiper-button-prev',
	// 	},
	// 	pagination: {
	// 		el: ' .swiper-pagination',
	// 		type: 'bullets',
	// 		clickable: true,
	// 		// renderBullet: function (index, className) {
	// 		// 	return '<span class="' + className + '">' + (index + 1) + '</span>';
	// 		// }
	// 	},
	// }
	//
	// const swiper4 = new Swiper('.sBanners__slider--js', {
	// 	// slidesPerView: 5,
	// 	...defaultSl,
	// 	slidesPerView: 'auto',
	// 	freeMode: true,
	// 	loopFillGroupWithBlank: true,
	// 	touchRatio: 0.2,
	// 	slideToClickedSlide: true,
	// 	freeModeMomentum: true,
	//
	// });
	// modal window
	//luckyone js

	var defaultSl = {
		loop: true,
		loopedSlides: 5,
		//looped slides should be the same
		lazy: {
			loadPrevNextAmount: 5,
			loadPrevNext: true
		}
	};
	var greenLine = document.querySelector(".green-line--js");
	var topNav = document.querySelector(".top-nav--js");

	function calcGreenLineHeight() {
		document.documentElement.style.setProperty('--green-line-h', "".concat(greenLine.offsetHeight, "px"));
		document.documentElement.style.setProperty('--top-nav-bot', "".concat(topNav.offsetHeight + greenLine.offsetHeight, "px"));
	}

	window.addEventListener('resize', calcGreenLineHeight, {
		passive: true
	});
	window.addEventListener('scroll', calcGreenLineHeight, {
		passive: true
	});
	calcGreenLineHeight(); //

	var galleryTop = new Swiper('.gallery-top', _objectSpread(_objectSpread({}, defaultSl), {}, {
		spaceBetween: 30,
		slidesPerView: 1,
		//
		navigation: {
			nextEl: $(this).find('.swiper-next'),
			prevEl: $(this).find('.swiper-prev')
		},
		//
		pagination: {
			el: $(this).find('.swiper-pagination'),
			type: 'bullets',
			clickable: true
		}
	})); //

	$(".sCatalog").each(function () {
		var sliderCatalog = new Swiper($(this).find(".sCatalog__slider--js"), _objectSpread(_objectSpread({}, defaultSl), {}, {
			spaceBetween: 30,
			slidesPerView: 'auto',
			navigation: {
				nextEl: $(this).find('.swiper-next'),
				prevEl: $(this).find('.swiper-prev')
			}
		}));
	});

	function makeDDGroup(qSelecorts) {
		var _iterator = _createForOfIteratorHelper(qSelecorts),
				_step;

		try {
			for (_iterator.s(); !(_step = _iterator.n()).done;) {
				var parentSelect = _step.value;
				var parent = document.querySelector(parentSelect);

				if (parent) {
					(function () {
						// childHeads, kind of funny))
						var ChildHeads = parent.querySelectorAll('.dd-head-js');
						$(ChildHeads).click(function () {
							var clickedHead = this;
							$(ChildHeads).each(function () {
								if (this === clickedHead) {
									//parent element gain toggle class, style head change via parent
									$(this.parentElement).toggleClass('active');
									$(this.parentElement).find('.dd-content-js').slideToggle(function () {
										$(this).toggleClass('active');
									});
								} else {
									$(this.parentElement).removeClass('active');
									$(this.parentElement).find('.dd-content-js').slideUp(function () {
										$(this).removeClass('active');
									});
								}
							});
						});
					})();
				}
			}
		} catch (err) {
			_iterator.e(err);
		} finally {
			_iterator.f();
		}
	}

	makeDDGroup(['.footer-dd-group-js', '.cat-aside-dd-js']); //filter custom pop-up

	$('.filter-bar-btns .filter-bar-btns__filter-btn').click(function () {
		$('body').addClass('stop-scrolling');
		$('.filter-bl').addClass('filter-visiable');
	});
	$('.filter-bl__back-btn').click(function () {
		closeFilterPopUp();
	});

	function closeFilterPopUp() {
		$('body').removeClass('stop-scrolling');
		$('.filter-bl').removeClass('filter-visiable');
	}

	function closeFiltersOnResize() {
		if (window.matchMedia("(min-width: 992px)").matches) {
			closeFilterPopUp();
		}
	}

	window.addEventListener('resize', closeFiltersOnResize, {
		passive: true
	}); // dropzone

	$("#props-dz").dropzone({
		url: "/file/post",
		dictDefaultMessage: 'Перенесите сюда файл или выберите на компьютере'
	}); //end luckyone js
	// todo
	// 1 clean js file
	// 2 search, cart, mob menu pp
}

;

if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
} // window.onload = function () {
// 	document.body.classList.add('loaded_hiding');
// 	window.setTimeout(function () {
// 		document.body.classList.add('loaded');
// 		document.body.classList.remove('loaded_hiding');
// 	}, 500);
// }