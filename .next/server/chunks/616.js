exports.id = 616;
exports.ids = [616];
exports.modules = {

/***/ 579:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Home_container__bCOhY",
	"nightMode": "Home_nightMode__VzM14",
	"clock": "Home_clock__yrr_f",
	"digitalClock": "Home_digitalClock__dk9Ea",
	"analogClock": "Home_analogClock__cSXzy",
	"hourHand": "Home_hourHand__Urv36",
	"minuteHand": "Home_minuteHand__Hl29h",
	"secondHand": "Home_secondHand__s9MJr",
	"time": "Home_time__Rvsxh",
	"toggleModeButton": "Home_toggleModeButton__8cXsZ",
	"switchContainer": "Home_switchContainer__1THCs",
	"slider": "Home_slider__ZQUgN",
	"dayMode": "Home_dayMode__GdbIv",
	"nightSky": "Home_nightSky__SpTfe",
	"daySky": "Home_daySky__cUTKL",
	"stars": "Home_stars__EmbvY",
	"clouds": "Home_clouds__Lzvq1",
	"moon": "Home_moon___K3cX",
	"sun": "Home_sun___DbwV"
};


/***/ }),

/***/ 616:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(579);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);



const Home = ()=>{
    const [time, setTime] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Date());
    const [isNightMode, setIsNightMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const timer = setInterval(()=>{
            setTime(new Date());
        }, 1000);
        return ()=>clearInterval(timer);
    }, []);
    const toggleNightMode = ()=>{
        setIsNightMode(!isNightMode);
    };
    const getFormattedTime = ()=>{
        const options = {
            hour: "numeric",
            minute: "numeric",
            second: "numeric"
        };
        return time.toLocaleString("en-US", options);
    };
    const getHourRotation = ()=>{
        const hour = time.getHours() % 12;
        return hour * 30 + time.getMinutes() * 0.5;
    };
    const getMinuteRotation = ()=>{
        return time.getMinutes() * 6 + time.getSeconds() * 0.1;
    };
    const getSecondRotation = ()=>{
        return time.getSeconds() * 6;
    };
    const handleSliderClick = ()=>{
        setIsNightMode(!isNightMode);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: isNightMode ? `${(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().container)} ${(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().nightMode)}` : (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().clock),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().digitalClock),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().time),
                        children: getFormattedTime()
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().analogClock),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().hourHand),
                            style: {
                                transform: `rotate(${getHourRotation()}deg)`
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().minuteHand),
                            style: {
                                transform: `rotate(${getMinuteRotation()}deg)`
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().secondHand),
                            style: {
                                transform: `rotate(${getSecondRotation()}deg)`
                            }
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().switchContainer),
                    onClick: handleSliderClick,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `${(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().slider)} ${isNightMode ? (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().nightMode) : (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().dayMode)}`,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().nightSky),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().stars)
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().moon)
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().daySky),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().clouds)
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().sun)
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);


/***/ })

};
;