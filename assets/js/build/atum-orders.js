/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/src/orders.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/src/components/_blocker.ts":
/*!**********************************************!*\
  !*** ./assets/js/src/components/_blocker.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Blocker = {
    block: function ($selector, opts) {
        opts = Object.assign({
            message: null,
            overlayCSS: {
                background: '#000',
                opacity: 0.5,
            },
        }, opts);
        $selector.block(opts);
    },
    unblock: function ($selector) {
        $selector.unblock();
        if ($selector.find('.blockUI').length) {
            $selector.find('.blockUI').remove();
        }
    },
};
/* harmony default export */ __webpack_exports__["default"] = (Blocker);


/***/ }),

/***/ "./assets/js/src/components/_date-time-picker.ts":
/*!*******************************************************!*\
  !*** ./assets/js/src/components/_date-time-picker.ts ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _vendor_bootstrap_datetimepicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../vendor/bootstrap-datetimepicker */ "./assets/js/vendor/bootstrap-datetimepicker.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var DateTimePicker = (function () {
    function DateTimePicker(settings) {
        this.settings = settings;
        this.defaults = {};
        var langs = ['haz', 'as', 'ar', 'as', 'azb', 'bo', 'dz', 'fa', 'gu', 'he', 'hi', 'hy', 'ka', 'kk', 'km', 'kn', 'ko', 'ku', 'lo', 'ml', 'mr', 'my', 'ne', 'pa', 'ps', 'sd', 'si', 'skr', 'ta', 'ur'];
        var mylang = langs.includes(this.settings.get('calendarLocale')) ? 'en' : this.settings.get('calendarLocale');
        this.defaults = {
            format: this.settings.get('dateFormat'),
            useCurrent: false,
            showClose: true,
            icons: {
                time: 'atum-icon atmi-clock',
                date: 'atum-icon atmi-calendar-full',
                up: 'atum-icon atmi-chevron-up',
                down: 'atum-icon atmi-chevron-down',
                previous: 'atum-icon atmi-chevron-left',
                next: 'atum-icon atmi-chevron-right',
                today: 'atum-icon atmi-frame-expand',
                clear: 'atum-icon atmi-trash',
                close: 'atum-icon atmi-ok',
            },
            minDate: new Date(),
            showClear: true,
            showTodayButton: true,
            widgetPositioning: {
                horizontal: 'right',
                vertical: 'bottom',
            },
            tooltips: {
                today: this.settings.get('goToToday'),
                clear: this.settings.get('clearSelection'),
                close: this.settings.get('closePicker'),
                selectMonth: this.settings.get('selectMonth'),
                prevMonth: this.settings.get('prevMonth'),
                nextMonth: this.settings.get('nextMonth'),
                selectYear: this.settings.get('selectYear'),
                prevYear: this.settings.get('prevYear'),
                nextYear: this.settings.get('nextYear'),
                selectDecade: this.settings.get('selectDecade'),
                prevDecade: this.settings.get('prevDecade'),
                nextDecade: this.settings.get('nextDecade'),
                prevCentury: this.settings.get('prevCentury'),
                nextCentury: this.settings.get('nextCentury'),
                incrementHour: this.settings.get('incrementHour'),
                pickHour: this.settings.get('pickHour'),
                decrementHour: this.settings.get('decrementHour'),
                incrementMinute: this.settings.get('incrementMinute'),
                pickMinute: this.settings.get('pickMinute'),
                decrementMinute: this.settings.get('decrementMinute'),
                incrementSecond: this.settings.get('incrementSecond'),
                pickSecond: this.settings.get('pickSecond'),
                decrementSecond: this.settings.get('decrementSecond'),
            },
            locale: mylang || 'en',
        };
    }
    DateTimePicker.prototype.addDateTimePickers = function ($selector, opts) {
        var _this = this;
        if (opts === void 0) { opts = {}; }
        $selector.each(function (index, elem) {
            var $dateTimePicker = $(elem);
            var data = $dateTimePicker.data() || {};
            if (data.hasOwnProperty('DateTimePicker')) {
                _this.destroyDateTimePickers($dateTimePicker);
            }
            $dateTimePicker.bsDatetimepicker(__assign(__assign(__assign({}, _this.defaults), data), opts));
        })
            .on('dp.change dp.clear', function (evt) {
            var _a;
            evt.stopImmediatePropagation();
            var $dpField = $(evt.currentTarget), $fieldLabel = $dpField.siblings('.field-label');
            if ($fieldLabel.length) {
                var currentLabel = $fieldLabel.text().trim(), dateTimePicker = $dpField.data('DateTimePicker'), newLabel = typeof evt.date === 'object' ? evt.date.format(((_a = dateTimePicker === null || dateTimePicker === void 0 ? void 0 : dateTimePicker.options()) === null || _a === void 0 ? void 0 : _a.format) || _this.settings.get('dateFormat')) : _this.settings.get('none');
                if (newLabel !== currentLabel) {
                    $fieldLabel.addClass('unsaved').text(newLabel);
                }
                else {
                    $fieldLabel.removeClass('unsaved');
                }
            }
            $dpField.trigger('atum-dp-change');
        })
            .on('dp.show', function (evt) {
            var $input = $(evt.currentTarget);
            $selector.not($input).filter(function (index, elem) {
                if ($(elem).children('.bootstrap-datetimepicker-widget').length) {
                    return true;
                }
                return false;
            }).each(function (index, elem) {
                $(elem).data('DateTimePicker').hide();
            });
            if ($input.data('range-max') || $input.data('range-min')) {
                _this.checkRange($input);
            }
        });
    };
    DateTimePicker.prototype.destroyDateTimePickers = function ($selector) {
        $selector.each(function (index, elem) {
            var dateTimePicker = $(elem).data('DateTimePicker');
            if (typeof dateTimePicker !== 'undefined') {
                dateTimePicker.destroy();
            }
        });
    };
    DateTimePicker.prototype.checkRange = function ($dpInput) {
        var dp = $dpInput.data('DateTimePicker');
        if ($dpInput.data('range-max')) {
            var $rangeMaxField = $($dpInput.data('range-max'));
            if ($rangeMaxField.length) {
                var rangeMaxDp = $rangeMaxField.data('DateTimePicker');
                dp.maxDate(rangeMaxDp.date() || false);
            }
        }
        else if ($dpInput.data('range-min')) {
            var $rangeMinField = $($dpInput.data('range-min'));
            if ($rangeMinField.length) {
                var rangeMinDp = $rangeMinField.data('DateTimePicker');
                dp.minDate(rangeMinDp.date() || false);
            }
        }
    };
    return DateTimePicker;
}());
/* harmony default export */ __webpack_exports__["default"] = (DateTimePicker);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./assets/js/src/components/_enhanced-select.ts":
/*!******************************************************!*\
  !*** ./assets/js/src/components/_enhanced-select.ts ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var EnhancedSelect = (function () {
    function EnhancedSelect() {
        var _this = this;
        this.addAtumClasses();
        $('body').on('wc-enhanced-select-init', function () { return _this.addAtumClasses(); });
    }
    EnhancedSelect.prototype.maybeRestoreEnhancedSelect = function () {
        $('.select2-container--open').remove();
        $('body').trigger('wc-enhanced-select-init');
    };
    EnhancedSelect.prototype.doSelect2 = function ($selector, options, avoidEmptySelections) {
        var _this = this;
        if (options === void 0) { options = {}; }
        if (avoidEmptySelections === void 0) { avoidEmptySelections = false; }
        if (typeof $.fn['select2'] !== 'function') {
            return;
        }
        options = Object.assign({
            minimumResultsForSearch: 10,
        }, options);
        $selector.each(function (index, elem) {
            var $select = $(elem), selectOptions = __assign({}, options);
            if ($select.hasClass('atum-select-multiple') && $select.prop('multiple') === false) {
                $select.prop('multiple', true);
            }
            if (!$select.hasClass('atum-select2')) {
                $select.addClass('atum-select2');
                _this.addAtumClasses($select);
            }
            if (avoidEmptySelections) {
                $select.on('select2:selecting', function (evt) {
                    var $select = $(evt.currentTarget), value = $select.val();
                    if (Array.isArray(value) && ($.inArray('', value) > -1 || $.inArray('-1', value) > -1)) {
                        $.each(value, function (index, elem) {
                            if (elem === '' || elem === '-1') {
                                value.splice(index, 1);
                            }
                        });
                        $select.val(value);
                    }
                });
            }
            $select.select2(selectOptions);
            $select.siblings('.select2-container').addClass('atum-select2');
            _this.maybeAddTooltip($select);
        });
    };
    EnhancedSelect.prototype.addAtumClasses = function ($selects) {
        var _this = this;
        if ($selects === void 0) { $selects = null; }
        $selects = $selects || $('select').filter('.atum-select2, .atum-enhanced-select');
        if (!$selects.length) {
            return;
        }
        $selects
            .each(function (index, elem) {
            var $select = $(elem), $select2Container = $select.siblings('.select2-container').not('.atum-select2, .atum-enhanced-select');
            if ($select2Container.length) {
                $select2Container.addClass($select.hasClass('atum-select2') ? 'atum-select2' : 'atum-enhanced-select');
                _this.maybeAddTooltip($select);
            }
        })
            .on('select2:opening', function (evt) {
            var $select = $(evt.currentTarget), select2Data = $select.data();
            if (select2Data.hasOwnProperty('select2')) {
                var $dropdown = select2Data.select2.dropdown.$dropdown;
                if ($dropdown.length) {
                    $dropdown.addClass('atum-select2-dropdown');
                }
            }
        });
    };
    EnhancedSelect.prototype.maybeAddTooltip = function ($select) {
        if ($select.hasClass('atum-tooltip')) {
            var $select2Rendered = $select.siblings('.select2-container').find('.select2-selection__rendered');
            $select2Rendered.addClass('atum-tooltip');
        }
    };
    return EnhancedSelect;
}());
/* harmony default export */ __webpack_exports__["default"] = (EnhancedSelect);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./assets/js/src/components/_stupid-table.ts":
/*!***************************************************!*\
  !*** ./assets/js/src/components/_stupid-table.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {var StupidTable = {
    init: function ($table) {
        $table.stupidtable();
        $table.on('aftertablesort', this.addArrows);
    },
    addArrows: function (evt, data) {
        var $th = $(evt.currentTarget).find('th'), arrow = data.direction === 'asc' ? '&uarr;' : '&darr;', index = data.column;
        $th.find('.atum-arrow').remove();
        $th.eq(index).append('<span class="atum-arrow">' + arrow + '</span>');
    }
};
/* harmony default export */ __webpack_exports__["default"] = (StupidTable);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./assets/js/src/components/_tooltip.ts":
/*!**********************************************!*\
  !*** ./assets/js/src/components/_tooltip.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var bootstrap_js_dist_tooltip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/js/dist/tooltip */ "./node_modules/bootstrap/js/dist/tooltip.js");
/* harmony import */ var bootstrap_js_dist_tooltip__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_dist_tooltip__WEBPACK_IMPORTED_MODULE_0__);

var Tooltip = (function () {
    function Tooltip(initialize) {
        if (initialize === void 0) { initialize = true; }
        if (initialize) {
            this.addTooltips();
        }
    }
    Tooltip.prototype.addTooltips = function ($wrapper) {
        var _this = this;
        if (!$wrapper) {
            $wrapper = $('body');
        }
        $wrapper.find('.tips, .atum-tooltip').each(function (index, elem) {
            var $tipEl = $(elem), title = $tipEl.data('tip') || $tipEl.attr('title') || $tipEl.attr('data-bs-original-title');
            if (title) {
                if (_this.getInstance($tipEl)) {
                    return;
                }
                new bootstrap_js_dist_tooltip__WEBPACK_IMPORTED_MODULE_0___default.a($tipEl.get(0), {
                    html: true,
                    title: title,
                    container: 'body',
                    delay: {
                        show: 100,
                        hide: 200,
                    },
                });
                $tipEl.on('inserted.bs.tooltip', function (evt) {
                    var tooltipId = $(evt.currentTarget).attr('aria-describedby');
                    $('.tooltip[class*="bs-tooltip-"]').not("#".concat(tooltipId)).remove();
                });
            }
        });
    };
    Tooltip.prototype.destroyTooltips = function ($wrapper) {
        var _this = this;
        if (!$wrapper) {
            $wrapper = $('body');
        }
        $wrapper.find('.tips, .atum-tooltip').each(function (index, elem) {
            var tooltip = _this.getInstance($(elem));
            if (tooltip) {
                tooltip.dispose();
            }
        });
    };
    Tooltip.prototype.getInstance = function ($tipEl) {
        return bootstrap_js_dist_tooltip__WEBPACK_IMPORTED_MODULE_0___default.a.getInstance($tipEl.get(0));
    };
    return Tooltip;
}());
/* harmony default export */ __webpack_exports__["default"] = (Tooltip);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./assets/js/src/components/orders/_add-items-popup.ts":
/*!*************************************************************!*\
  !*** ./assets/js/src/components/orders/_add-items-popup.ts ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _blocker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_blocker */ "./assets/js/src/components/_blocker.ts");

var AddItemsPopup = (function () {
    function AddItemsPopup(settings, $container, atumOrders, tooltip) {
        var _this = this;
        this.settings = settings;
        this.$container = $container;
        this.atumOrders = atumOrders;
        this.tooltip = tooltip;
        this.wpHooks = window['wp']['hooks'];
        $('body')
            .on('wc_backbone_modal_loaded', function (evt, target) { return _this.init(evt, target); })
            .on('wc_backbone_modal_response', function (evt, target, data) { return _this.response(evt, target, data); });
    }
    AddItemsPopup.prototype.init = function (evt, target) {
        if ('atum-modal-add-products' === target) {
            $('body').trigger('wc-enhanced-select-init');
        }
    };
    AddItemsPopup.prototype.response = function (evt, target, data) {
        if ('atum-modal-add-tax' === target) {
            var rateId = data.add_atum_order_tax, manualRateId = '';
            if (data.manual_tax_rate_id) {
                manualRateId = data.manual_tax_rate_id;
            }
            this.addTax(rateId, manualRateId);
        }
        if ('atum-modal-add-products' === target) {
            this.addItem(data.add_atum_order_items);
        }
    };
    AddItemsPopup.prototype.addItem = function (itemIds) {
        var _this = this;
        if (itemIds) {
            _blocker__WEBPACK_IMPORTED_MODULE_0__["default"].block(this.$container);
            var data = {
                action: 'atum_order_add_item',
                item_to_add: itemIds,
                atum_order_id: this.settings.get('postId'),
                security: this.settings.get('atumOrderItemNonce'),
            };
            $.post(window['ajaxurl'], data, function (response) {
                if (response.success) {
                    $('#atum_order_line_items').append(response.data.html);
                    _this.wpHooks.doAction('atum_orderItems_addItem_added', itemIds, _this.settings.get('postId'));
                }
                else {
                    _this.atumOrders.showAlert('error', _this.settings.get('error'), response.data.error);
                }
                _this.tooltip.addTooltips();
                _blocker__WEBPACK_IMPORTED_MODULE_0__["default"].unblock(_this.$container);
            }, 'json');
        }
    };
    AddItemsPopup.prototype.addTax = function (rateId, manualRateId) {
        if (manualRateId) {
            rateId = manualRateId;
        }
        if (!rateId) {
            return false;
        }
        var rates = $('.atum-order-tax-id').map(function (index, elem) {
            return $(elem).val();
        }).get();
        if (-1 === $.inArray(rateId, rates)) {
            this.atumOrders.loadItemsTable({
                action: 'atum_order_add_tax',
                rate_id: rateId,
                atum_order_id: this.settings.get('postId'),
                security: this.settings.get('atumOrderItemNonce'),
            }, 'json');
        }
        else {
            this.atumOrders.showAlert('error', this.settings.get('error'), this.settings.get('taxRateAlreadyExists'));
        }
    };
    return AddItemsPopup;
}());
/* harmony default export */ __webpack_exports__["default"] = (AddItemsPopup);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./assets/js/src/components/orders/_atum-orders.ts":
/*!*********************************************************!*\
  !*** ./assets/js/src/components/orders/_atum-orders.ts ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _add_items_popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_add-items-popup */ "./assets/js/src/components/orders/_add-items-popup.ts");
/* harmony import */ var _order_items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_order-items */ "./assets/js/src/components/orders/_order-items.ts");
/* harmony import */ var _blocker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_blocker */ "./assets/js/src/components/_blocker.ts");
/* harmony import */ var _bulk_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_bulk-actions */ "./assets/js/src/components/orders/_bulk-actions.ts");
/* harmony import */ var _stupid_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_stupid-table */ "./assets/js/src/components/_stupid-table.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "sweetalert2");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/_utils */ "./assets/js/src/utils/_utils.ts");







var AtumOrders = (function () {
    function AtumOrders(settings, tooltip, dateTimePicker) {
        this.settings = settings;
        this.tooltip = tooltip;
        this.dateTimePicker = dateTimePicker;
        this.wpHooks = window['wp']['hooks'];
        this.$container = $('#atum_order_items');
        this.$itemsBlocker = this.$container.find('.items-blocker');
        this.$supplierDropdown = $('.dropdown_supplier');
        this.$multipleSuppliers = $('#multiple_suppliers');
        this.areItemsSelectable = this.settings.get('enableSelectItems');
        this.isEditable = $('#atum_order_is_editable').val();
        _stupid_table__WEBPACK_IMPORTED_MODULE_4__["default"].init($('table.atum_order_items'));
        new _order_items__WEBPACK_IMPORTED_MODULE_1__["default"](this.settings, this.$container, this);
        new _bulk_actions__WEBPACK_IMPORTED_MODULE_3__["default"](this.settings, this.$container, this);
        new _add_items_popup__WEBPACK_IMPORTED_MODULE_0__["default"](this.settings, this.$container, this, this.tooltip);
        this.dateTimePicker.addDateTimePickers($('.atum-datepicker'), { minDate: false });
        this.bindEvents();
        if (!window.hasOwnProperty('atum')) {
            window['atum'] = {};
        }
        window['atum']['AtumOrders'] = this;
    }
    AtumOrders.prototype.bindEvents = function () {
        var _this = this;
        this.$container
            .on('change', 'input.quantity', function (evt) { return _this.quantityChanged(evt); })
            .on('keyup change', '.split-input :input', function (evt) {
            var $input = $(evt.currentTarget), $subtotal = $input.parent().prev().find(':input');
            if ($subtotal && ($subtotal.val() === '' || $subtotal.is('.match-total'))) {
                $subtotal.val($input.val()).addClass('match-total');
            }
        })
            .on('keyup', '.split-input :input', function (evt) {
            $(evt.currentTarget).removeClass('match-total');
        });
        if (this.areItemsSelectable) {
            this.$container
                .on('click', 'tr.item, tr.fee, tr.shipping', function (evt) { return _this.selectRow(evt); })
                .on('click', 'tr.item :input, tr.fee :input, tr.shipping :input, tr.item a, tr.fee a, tr.shipping a', function (evt) { return evt.stopPropagation(); });
        }
        $('#atum_order_type').change(function (evt) { return _this.toggleExtraFields(evt); }).change();
        this.$supplierDropdown.change(function () { return _this.savePurchaseOrderSupplier(); });
        this.$multipleSuppliers.change(function () { return _this.toggleSupplierField(); });
        $('#wc_order').change(function (evt) { return _this.importOrderItems($(evt.currentTarget), 'IL'); });
        $('.wp-heading-inline').append($('.page-title-action').show());
        $(window).on('load', function () {
            if ($('.footer-box').hasClass('no-style')) {
                $('#wpfooter').css('position', 'relative').show();
                $('#wpcontent').css('min-height', '95vh');
            }
        });
    };
    AtumOrders.prototype.savePurchaseOrderSupplier = function () {
        var _this = this;
        var $searcher = $('#add_item_id'), atumOrderId = this.settings.get('postId'), supplierId = this.$supplierDropdown.val();
        this.toggleItemsBlocker(!(!supplierId && !this.$multipleSuppliers.is(':checked')));
        $.ajax({
            url: window['ajaxurl'],
            data: {
                action: 'atum_save_po_supplier',
                security: this.settings.get('atumOrderItemNonce'),
                atum_order_id: atumOrderId,
                supplier: supplierId,
            },
            dataType: 'json',
            method: 'POST',
            success: function (response) {
                if (supplierId && !_this.$multipleSuppliers.is(':checked')) {
                    _this.toggleItemsBlocker(0 !== response.data.supplier);
                }
                if (!$searcher.data('limit')) {
                    $searcher.data('limit', atumOrderId);
                }
            },
        });
    };
    AtumOrders.prototype.saveMultipleSuppliers = function (val) {
        $.ajax({
            url: window['ajaxurl'],
            data: {
                action: 'atum_save_po_multiple_supplier',
                security: this.settings.get('atumOrderItemNonce'),
                atum_order_id: this.settings.get('postId'),
                multiple: val,
            },
            dataType: 'json',
            method: 'POST',
        });
    };
    AtumOrders.prototype.quantityChanged = function (evt) {
        var _this = this;
        var $input = $(evt.currentTarget), $row = $input.closest('tr.item'), qty = $input.val(), oQty = $input.data('qty'), $lineTotal = $row.find('input.line_total'), $lineSubtotal = $row.find('input.line_subtotal');
        var unitTotal = _utils_utils__WEBPACK_IMPORTED_MODULE_6__["default"].unformat($lineTotal.data('total'), this.settings.get('priceDecimalSep')) / oQty;
        $lineTotal.val(parseFloat(_utils_utils__WEBPACK_IMPORTED_MODULE_6__["default"].formatNumber(unitTotal * qty, this.settings.get('roundingPrecision'), ''))
            .toString()
            .replace('.', this.settings.get('priceDecimalSep')));
        var unitSubtotal = _utils_utils__WEBPACK_IMPORTED_MODULE_6__["default"].unformat($lineSubtotal.data('subtotal'), this.settings.get('priceDecimalSep')) / oQty;
        $lineSubtotal.val(parseFloat(_utils_utils__WEBPACK_IMPORTED_MODULE_6__["default"].formatNumber(unitSubtotal * qty, this.settings.get('roundingPrecision'), ''))
            .toString()
            .replace('.', this.settings.get('priceDecimalSep')));
        $row.find('input.line_tax').each(function (index, elem) {
            var $lineTotalTax = $(elem), taxId = $lineTotalTax.data('tax_id'), unitTotalTax = _utils_utils__WEBPACK_IMPORTED_MODULE_6__["default"].unformat($lineTotalTax.data('total_tax'), _this.settings.get('priceDecimalSep')) / oQty, $lineSubtotalTax = $row.find("input.line_subtotal_tax[data-tax_id=\"".concat(taxId, "\"]")), unitSubtotalTax = _utils_utils__WEBPACK_IMPORTED_MODULE_6__["default"].unformat($lineSubtotalTax.data('subtotal_tax'), _this.settings.get('priceDecimalSep')) / oQty;
            if (0 < unitTotalTax) {
                $lineTotalTax.val(parseFloat(_utils_utils__WEBPACK_IMPORTED_MODULE_6__["default"].formatNumber(unitTotalTax * qty, _this.settings.get('roundingPrecision'), ''))
                    .toString()
                    .replace('.', _this.settings.get('priceDecimalSep')));
            }
            if (0 < unitSubtotalTax) {
                $lineSubtotalTax.val(parseFloat(_utils_utils__WEBPACK_IMPORTED_MODULE_6__["default"].formatNumber(unitSubtotalTax * qty, _this.settings.get('roundingPrecision'), ''))
                    .toString()
                    .replace('.', _this.settings.get('priceDecimalSep')));
            }
        });
        $input.trigger('quantity_changed');
    };
    AtumOrders.prototype.loadItemsTable = function (data, dataType, callback) {
        var _this = this;
        _blocker__WEBPACK_IMPORTED_MODULE_2__["default"].block(this.$container);
        dataType = dataType || 'html';
        $.ajax({
            url: window['ajaxurl'],
            data: data,
            dataType: dataType,
            method: 'POST',
            success: function (response) {
                if ((typeof response === 'object' && response.success === true) || typeof response !== 'object') {
                    var itemsTable = dataType === 'html' ? response : response.data.html;
                    _this.$container.find('.inside').empty().append(itemsTable);
                    _this.tooltip.addTooltips();
                    _stupid_table__WEBPACK_IMPORTED_MODULE_4__["default"].init($('table.atum_order_items'));
                }
                else if (typeof response === 'object' && response.success === false) {
                    _this.showAlert('error', _this.settings.get('error'), response.data.error);
                }
                _blocker__WEBPACK_IMPORTED_MODULE_2__["default"].unblock(_this.$container);
                if (callback) {
                    callback();
                }
                _this.wpHooks.doAction('atum_orders_afterLoadItemsTable');
                if ('atum_order_import_items' === data.action) {
                    _this.wpHooks.doAction('atum_orders_afterImportItems');
                }
            },
        });
    };
    AtumOrders.prototype.reloadItems = function (callback) {
        this.loadItemsTable({
            atum_order_id: this.settings.get('postId'),
            action: 'atum_order_load_items',
            security: this.settings.get('atumOrderItemNonce'),
        }, 'html', callback);
    };
    AtumOrders.prototype.showAlert = function (type, title, message) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: title,
            text: message,
            icon: type,
            confirmButtonText: this.settings.get('ok'),
        });
    };
    AtumOrders.prototype.selectRow = function (evt) {
        var $row = $(evt.currentTarget).is('tr') ? $(evt.currentTarget) : $(evt.currentTarget).closest('tr'), $table = $row.closest('table');
        if ($row.is('.selected')) {
            $row.removeClass('selected');
        }
        else {
            $row.addClass('selected');
        }
        var $rows = $table.find('tr.selected'), $editControlsWrapper = $('div.atum-order-item-bulk-edit');
        if ($rows.length) {
            var $stockChangeButtons = $('.bulk-decrease-stock, .bulk-increase-stock');
            if ($('table.atum_order_items').find('tr.item.selected').length) {
                $stockChangeButtons.show();
            }
            else {
                $stockChangeButtons.hide();
            }
            $editControlsWrapper.slideDown();
        }
        else {
            $editControlsWrapper.slideUp();
        }
    };
    AtumOrders.prototype.toggleExtraFields = function (evt) {
        var $atumOrderType = $(evt.currentTarget), typeValue = $atumOrderType.val();
        $('[data-dependency]').each(function (index, elem) {
            var $elem = $(elem), dependency = $elem.data('dependency').split(':');
            if (dependency[0] === $atumOrderType.attr('id')) {
                if (dependency[1] === typeValue) {
                    $elem.fadeIn();
                }
                else if ($elem.is(':visible')) {
                    $elem.hide();
                }
            }
        });
    };
    AtumOrders.prototype.toggleSupplierField = function () {
        var $body = $('body'), $dropdownWrapper = this.$supplierDropdown.parent();
        if (this.$multipleSuppliers.is(':checked')) {
            this.saveMultipleSuppliers('yes');
            this.$supplierDropdown.val('').change();
            $body.addClass('allow-multiple-suppliers');
            this.toggleItemsBlocker();
            $dropdownWrapper.slideUp();
        }
        else {
            this.saveMultipleSuppliers('no');
            $body.removeClass('allow-multiple-suppliers');
            this.toggleItemsBlocker(this.$supplierDropdown.val() !== null);
            $dropdownWrapper.slideDown();
        }
    };
    AtumOrders.prototype.checkPoIdExistsInQuerystring = function () {
        var queryString = window.location.search.substring(1);
        var check = false;
        var queries = queryString.split('&');
        queries.forEach(function (indexQuery) {
            var indexPair = indexQuery.split('=');
            var queryKey = decodeURIComponent(indexPair[0]);
            var queryValue = decodeURIComponent(indexPair.length > 1 ? indexPair[1] : '');
            if ('post' === queryKey && queryValue.length > 0) {
                check = true;
            }
        });
        return check;
    };
    AtumOrders.prototype.toggleItemsBlocker = function (on) {
        if (on === void 0) { on = true; }
        if (!this.$itemsBlocker.length) {
            return;
        }
        if (on === true) {
            this.$itemsBlocker.addClass('unblocked');
        }
        else {
            this.$itemsBlocker.removeClass('unblocked');
        }
    };
    AtumOrders.prototype.importOrderItems = function ($wcOrder, orderType) {
        var _this = this;
        var orderId = $wcOrder.val();
        if (!orderId || this.isEditable == 'false') {
            return false;
        }
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            text: this.settings.get("importOrderItems".concat(orderType)),
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: this.settings.get('yes'),
            cancelButtonText: this.settings.get('no'),
            reverseButtons: true,
            allowOutsideClick: false,
            preConfirm: function () {
                return new Promise(function (resolve, reject) {
                    _this.loadItemsTable({
                        action: 'atum_order_import_items',
                        wc_order_id: orderId,
                        atum_order_id: _this.settings.get('postId'),
                        security: _this.settings.get('importOrderItemsNonce'),
                    }, 'json', resolve);
                });
            },
        });
    };
    return AtumOrders;
}());
/* harmony default export */ __webpack_exports__["default"] = (AtumOrders);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./assets/js/src/components/orders/_bulk-actions.ts":
/*!**********************************************************!*\
  !*** ./assets/js/src/components/orders/_bulk-actions.ts ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _blocker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_blocker */ "./assets/js/src/components/_blocker.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "sweetalert2");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);


var OrdersBulkActions = (function () {
    function OrdersBulkActions(settings, $container, atumOrders) {
        var _this = this;
        this.settings = settings;
        this.$container = $container;
        this.atumOrders = atumOrders;
        this.askRemoval = true;
        this.wpHooks = window['wp']['hooks'];
        this.$container
            .on('click', 'button.bulk-delete-items', function (evt) { return _this.doBulkDelete(evt); })
            .on('click', 'button.bulk-increase-stock', function (evt) {
            evt.preventDefault();
            _this.bulkChangeStock('increase');
        })
            .on('click', 'button.bulk-decrease-stock', function (evt) {
            evt.preventDefault();
            _this.bulkChangeStock('decrease');
        });
    }
    OrdersBulkActions.prototype.doBulkDelete = function (evt) {
        var _this = this;
        evt.preventDefault();
        var $rows = $('table.atum_order_items').find('tr.selected');
        var deferred = [];
        if ($rows.length) {
            if (this.askRemoval === true) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                    text: this.settings.get('removeItemNotice'),
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: this.settings.get('continue'),
                    cancelButtonText: this.settings.get('cancel'),
                    reverseButtons: true,
                    allowOutsideClick: false,
                    showLoaderOnConfirm: true,
                    preConfirm: function () {
                        return new Promise(function (resolve, reject) {
                            deferred = _this.bulkDeleteItems($rows);
                            if (deferred.length) {
                                $.when.apply($, deferred).done(function () {
                                    _this.atumOrders.reloadItems();
                                    resolve();
                                });
                            }
                            else {
                                resolve();
                            }
                        });
                    },
                });
            }
            else {
                deferred = this.bulkDeleteItems($rows);
                this.askRemoval = true;
                if (deferred.length) {
                    $.when.apply($, deferred).done(function () {
                        _this.atumOrders.reloadItems(function () {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.close();
                        });
                    });
                }
            }
        }
    };
    OrdersBulkActions.prototype.bulkDeleteItems = function ($rows) {
        _blocker__WEBPACK_IMPORTED_MODULE_0__["default"].block(this.$container);
        var deleteItems = [], deferred = [];
        $.map($rows, function ($row) {
            deleteItems.push(parseInt($row.data('atum_order_item_id'), 10));
            return;
        });
        if (deleteItems.length) {
            deferred.push($.ajax({
                url: window['ajaxurl'],
                data: {
                    atum_order_id: this.settings.get('postId'),
                    atum_order_item_ids: deleteItems,
                    action: 'atum_order_remove_item',
                    security: this.settings.get('atumOrderItemNonce'),
                },
                type: 'POST',
            }));
        }
        return deferred;
    };
    OrdersBulkActions.prototype.bulkChangeStock = function (action) {
        var _this = this;
        var $rows = $('table.atum_order_items').find('tr.selected');
        var checkItems = this.wpHooks.applyFilters('atum_ordersBulkActions_checkChangeStock', true, $rows);
        var confirmProcessItems = this.wpHooks.applyFilters('atum_ordersBulkActions_confirmProcessItemsChangeStock', '', $rows, action);
        if (checkItems) {
            _blocker__WEBPACK_IMPORTED_MODULE_0__["default"].block(this.$container);
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                title: this.settings.get('areYouSure'),
                html: (this.settings.get(action === 'increase' ? 'increaseStockMsg' : 'decreaseStockMsg')) + confirmProcessItems,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: this.settings.get('continue'),
                cancelButtonText: this.settings.get('cancel'),
                reverseButtons: true,
                allowOutsideClick: false,
                showLoaderOnConfirm: true,
                preConfirm: function () {
                    return new Promise(function (resolve, reject) {
                        var modeProcess = $('#bulk-change-stock-mode').length > 0 && $('#bulk-change-stock-mode').is(':checked') ? 'yes' : 'no';
                        var maybeProcessItems = _this.wpHooks.applyFilters('atum_ordersBulkActions_bulkChangeStock', true, $rows, action, modeProcess, resolve);
                        if (maybeProcessItems) {
                            var quantities_1 = {}, itemIds_1 = [];
                            $rows.each(function (index, elem) {
                                var $elem = $(elem);
                                itemIds_1.push(parseInt($elem.data('atum_order_item_id'), 10));
                                if ($elem.find('input.quantity').length) {
                                    quantities_1[$elem.data('atum_order_item_id')] = $elem.find('input.quantity').val();
                                }
                            });
                            $.ajax({
                                url: window['ajaxurl'],
                                data: {
                                    atum_order_id: _this.settings.get('postId'),
                                    atum_order_item_ids: itemIds_1,
                                    quantities: quantities_1,
                                    mode: modeProcess,
                                    action: "atum_order_".concat(action, "_items_stock"),
                                    security: _this.settings.get('atumOrderItemNonce'),
                                },
                                method: 'POST',
                                dataType: 'json',
                                success: function (response) {
                                    if (response.data.length) {
                                        $('#atum_order_notes .inside .atum-meta-box').empty().html(response.data);
                                    }
                                    if (response.success !== true) {
                                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.showValidationMessage(response.data);
                                    }
                                    resolve();
                                },
                            });
                        }
                    });
                }
            })
                .then(function (result) {
                if (result.isConfirmed) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                        title: _this.settings.get('done'),
                        text: _this.settings.get(action === 'increase' ? 'stockIncreased' : 'stockDecreased'),
                        icon: 'success',
                        confirmButtonText: _this.settings.get('ok'),
                    });
                }
                _blocker__WEBPACK_IMPORTED_MODULE_0__["default"].unblock(_this.$container);
            });
        }
    };
    return OrdersBulkActions;
}());
/* harmony default export */ __webpack_exports__["default"] = (OrdersBulkActions);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./assets/js/src/components/orders/_order-items.ts":
/*!*********************************************************!*\
  !*** ./assets/js/src/components/orders/_order-items.ts ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _blocker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_blocker */ "./assets/js/src/components/_blocker.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "sweetalert2");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/_utils */ "./assets/js/src/utils/_utils.ts");



var AtumOrderItems = (function () {
    function AtumOrderItems(settings, $container, atumOrders) {
        var _this = this;
        this.settings = settings;
        this.$container = $container;
        this.atumOrders = atumOrders;
        this.wpHooks = window['wp']['hooks'];
        this.$container
            .on('click', 'button.add-line-item', function (evt) { return _this.addLineItem(evt); })
            .on('click', '.cancel-action', function (evt) { return _this.cancel(evt); })
            .on('click', 'button.add-atum-order-item', function (evt) { return _this.addItem(evt); })
            .on('click', 'button.add-atum-order-fee', function (evt) { return _this.addFee(evt); })
            .on('click', 'button.add-atum-order-shipping', function (evt) { return _this.addShipping(evt); })
            .on('click', 'button.add-atum-order-tax', function (evt) { return _this.addTax(evt); })
            .on('click', 'a.delete-atum-order-tax', function (evt) { return _this.deleteTax(evt); })
            .on('click', 'button.calculate-action', function (evt) { return _this.recalculate(evt); })
            .on('click', 'a.edit-atum-order-item', function (evt) { return _this.editItem(evt); })
            .on('click', 'a.delete-atum-order-item', function (evt) { return _this.deleteItem(evt); })
            .on('click', 'button.save-action', function (evt) { return _this.saveLineItems(evt); })
            .on('click', 'button.add-atum-order-item-meta', function (evt) { return _this.addItemMeta(evt); })
            .on('click', 'button.remove-atum-order-item-meta', function (evt) { return _this.removeItemMeta(evt); })
            .on('click', 'button.set-purchase-price', function (evt) {
            evt.preventDefault();
            _this.setPurchasePrice($(evt.currentTarget).closest('.item'));
        });
        if (!window.hasOwnProperty('atum')) {
            window['atum'] = {};
        }
        window['atum']['AtumOrderItems'] = this;
    }
    AtumOrderItems.prototype.addLineItem = function (evt) {
        evt.preventDefault();
        $('div.atum-order-add-item').slideDown();
        $('div.atum-order-data-row-toggle').not('div.atum-order-add-item').slideUp();
    };
    AtumOrderItems.prototype.cancel = function (evt) {
        evt.preventDefault();
        $('div.atum-order-data-row-toggle').not('div.atum-order-bulk-actions').slideUp();
        $('div.atum-order-bulk-actions, div.atum-order-totals-items').slideDown();
        $('.atum-order-edit-line-item .atum-order-edit-line-item-actions').show();
        if (true === $(evt.currentTarget).data('reload')) {
            this.atumOrders.reloadItems();
        }
    };
    AtumOrderItems.prototype.addItem = function (evt) {
        evt.preventDefault();
        $(evt.currentTarget).WCBackboneModal({
            template: 'atum-modal-add-products',
        });
    };
    AtumOrderItems.prototype.addFee = function (evt) {
        var _this = this;
        evt.preventDefault();
        _blocker__WEBPACK_IMPORTED_MODULE_0__["default"].block(this.$container);
        var data = {
            action: 'atum_order_add_fee',
            atum_order_id: this.settings.get('postId'),
            security: this.settings.get('atumOrderItemNonce'),
        };
        $.post(window['ajaxurl'], data, function (response) {
            if (response.success) {
                $('#atum_order_fee_line_items').append(response.data.html);
            }
            else {
                _this.atumOrders.showAlert('error', _this.settings.get('error'), response.data.error);
            }
            _blocker__WEBPACK_IMPORTED_MODULE_0__["default"].unblock(_this.$container);
            _this.wpHooks.doAction('atum_orderItems_afterAddingFee');
        }, 'json');
    };
    AtumOrderItems.prototype.addShipping = function (evt) {
        var _this = this;
        evt.preventDefault();
        _blocker__WEBPACK_IMPORTED_MODULE_0__["default"].block(this.$container);
        var data = {
            action: 'atum_order_add_shipping',
            atum_order_id: this.settings.get('postId'),
            security: this.settings.get('atumOrderItemNonce'),
        };
        $.post(window['ajaxurl'], data, function (response) {
            if (response.success) {
                $('#atum_order_shipping_line_items').append(response.data.html);
            }
            else {
                _this.atumOrders.showAlert('error', _this.settings.get('error'), response.data.error);
            }
            _blocker__WEBPACK_IMPORTED_MODULE_0__["default"].unblock(_this.$container);
            _this.wpHooks.doAction('atum_orderItems_afterAddingShipping');
        }, 'json');
    };
    AtumOrderItems.prototype.addTax = function (evt) {
        evt.preventDefault();
        $(evt.currentTarget).WCBackboneModal({
            template: 'atum-modal-add-tax',
        });
    };
    AtumOrderItems.prototype.deleteTax = function (evt) {
        var _this = this;
        evt.preventDefault();
        var $item = $(evt.currentTarget);
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            text: this.settings.get('deleteTaxNotice'),
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: this.settings.get('continue'),
            cancelButtonText: this.settings.get('cancel'),
            reverseButtons: true,
            allowOutsideClick: false,
            showLoaderOnConfirm: true,
            preConfirm: function () {
                return new Promise(function (resolve, reject) {
                    _this.atumOrders.loadItemsTable({
                        action: 'atum_order_remove_tax',
                        rate_id: $item.data('rate_id'),
                        atum_order_id: _this.settings.get('postId'),
                        security: _this.settings.get('atumOrderItemNonce'),
                    }, 'html', resolve);
                });
            },
        });
    };
    AtumOrderItems.prototype.recalculate = function (evt) {
        var _this = this;
        evt.preventDefault();
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            text: this.settings.get('calcTotals'),
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: this.settings.get('continue'),
            cancelButtonText: this.settings.get('cancel'),
            reverseButtons: true,
            allowOutsideClick: false,
            showLoaderOnConfirm: true,
            preConfirm: function () {
                return new Promise(function (resolve, reject) {
                    _this.atumOrders.loadItemsTable({
                        action: 'atum_order_calc_line_taxes',
                        atum_order_id: _this.settings.get('postId'),
                        items: $('table.atum_order_items :input[name], .atum-order-totals-items :input[name]').serialize(),
                        security: _this.settings.get('calcTotalsNonce'),
                    }, 'html', resolve);
                });
            },
        });
    };
    AtumOrderItems.prototype.editItem = function (evt) {
        evt.preventDefault();
        var $item = $(evt.currentTarget);
        $item.closest('tr').find('.view').hide();
        $item.closest('tr').find('.edit').show();
        $item.hide();
        $('button.add-line-item').click();
        $('button.cancel-action').data('reload', true);
    };
    AtumOrderItems.prototype.deleteItem = function (evt) {
        var _this = this;
        evt.preventDefault();
        var $item = $(evt.currentTarget).closest('tr.item, tr.fee, tr.shipping'), atumOrderItemId = $item.data('atum_order_item_id'), $container = $item.closest('#atum_order_items');
        var options = [], modal;
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            html: this.wpHooks.applyFilters('atum_ordersItems_deleteItemConfirmMessage', this.settings.get('removeItemNotice'), $item, atumOrderItemId),
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: this.settings.get('continue'),
            cancelButtonText: this.settings.get('cancel'),
            reverseButtons: true,
            allowOutsideClick: false,
            showLoaderOnConfirm: true,
            didOpen: function (element) {
                modal = $(element);
            },
            preConfirm: function () { return _this.processDeleteItem(atumOrderItemId); },
        })
            .then(function (result) {
            options = _this.wpHooks.applyFilters('atum_ordersItems_deleteItemOptions', options, modal);
            if (result.isConfirmed) {
                $item.remove();
                _this.wpHooks.doAction('atum_orderItems_deleteItem_removed', $container, atumOrderItemId, options);
            }
            _blocker__WEBPACK_IMPORTED_MODULE_0__["default"].unblock(_this.$container);
        });
    };
    AtumOrderItems.prototype.processDeleteItem = function (atumOrderItemId) {
        var _this = this;
        return new Promise(function (resolve) {
            _blocker__WEBPACK_IMPORTED_MODULE_0__["default"].block(_this.$container);
            $.ajax({
                url: window['ajaxurl'],
                data: {
                    atum_order_id: _this.settings.get('postId'),
                    atum_order_item_ids: atumOrderItemId,
                    action: 'atum_order_remove_item',
                    security: _this.settings.get('atumOrderItemNonce'),
                },
                method: 'POST',
                dataType: 'json',
                success: function (response) {
                    if (!response.success) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.showValidationMessage(response.data);
                    }
                    resolve();
                },
            });
        });
    };
    AtumOrderItems.prototype.saveLineItems = function (evt) {
        evt.preventDefault();
        var data = this.wpHooks.applyFilters('atum_orderItems_saveLineItems_data', {
            atum_order_id: this.settings.get('postId'),
            items: $('table.atum_order_items :input[name], .atum-order-totals-items :input[name]').serialize(),
            action: 'atum_order_save_items',
            security: this.settings.get('atumOrderItemNonce'),
        });
        this.atumOrders.loadItemsTable(data);
        this.wpHooks.doAction('atum_orderItems_saveLineItems_itemsSaved');
    };
    AtumOrderItems.prototype.addItemMeta = function (evt) {
        evt.preventDefault();
        var $button = $(evt.currentTarget), $item = $button.closest('tr.item, tr.shipping'), $items = $item.find('tbody.meta_items'), index = $items.find('tr').length + 1, $row = "\n\t\t\t\t<tr data-meta_id=\"0\">\n\t\t\t        <td>\n\t\t\t            <input type=\"text\" placeholder=\"".concat(this.settings.get('metaPlaceholderName'), "\" name=\"meta_key[").concat($item.data('atum_order_item_id'), "][new-").concat(index, "]\" />\n\t\t\t            <textarea placeholder=\"").concat(this.settings.get('metaPlaceholderValue'), "\" name=\"meta_value[").concat($item.data('atum_order_item_id'), "][new-").concat(index, "]\"></textarea>\n\t\t\t        </td>\n\t\t\t        <td width=\"1%\"><button class=\"remove-atum-order-item-meta button\">&times;</button></td>\n\t\t\t    </tr>");
        $items.append($row);
    };
    AtumOrderItems.prototype.removeItemMeta = function (evt) {
        evt.preventDefault();
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            text: this.settings.get('removeItemMeta'),
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: this.settings.get('continue'),
            cancelButtonText: this.settings.get('cancel'),
            reverseButtons: true,
            allowOutsideClick: false,
            preConfirm: function () {
                return new Promise(function (resolve, reject) {
                    var $row = $(evt.currentTarget).closest('tr');
                    $row.find('[name^="meta_value"]').val('');
                    $row.hide();
                    resolve();
                });
            },
        });
    };
    AtumOrderItems.prototype.setPurchasePrice = function ($item, purchasePrice, purchasePriceTxt, itemName) {
        var _this = this;
        var $lineSubTotal = $item.find('input.line_subtotal'), $lineTotal = $item.find('input.line_total');
        if (!itemName) {
            itemName = $item.find('.atum-order-item-name').text().trim();
        }
        if (!purchasePrice) {
            var qty = parseFloat($item.find('input.quantity').val() || 1), lineTotal = qty !== 0 ? _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].unformat($lineTotal.val() || 0, this.settings.get('priceDecimalSep')) : 0;
            purchasePrice = qty !== 0 ? lineTotal / qty : 0;
        }
        if (!purchasePriceTxt) {
            var purchasePriceFmt = purchasePrice % 1 !== 0 ? _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].formatNumber(purchasePrice, this.settings.get('priceNumDecimals'), '', this.settings.get('priceDecimalSep')) : purchasePrice.toString();
            purchasePriceTxt = purchasePriceFmt;
            var rates = $item.find('.item_cost').data('productTaxRates');
            if (typeof rates === 'object') {
                var taxes = this.calcTaxesFromBase(purchasePrice, rates);
                if (taxes) {
                    var purchasePriceWithTaxesFmt = (purchasePrice + taxes) % 1 !== 0 ? _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].formatNumber(purchasePrice + taxes, this.settings.get('priceNumDecimals'), '', this.settings.get('priceDecimalSep')) : (purchasePrice + taxes).toString();
                    purchasePriceTxt = "".concat(purchasePriceWithTaxesFmt, " (").concat(purchasePriceFmt, " + ").concat(taxes, " ").concat(this.settings.get('taxesName'), ")");
                    purchasePrice = _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].unformat(purchasePriceWithTaxesFmt, this.settings.get('priceDecimalSep'));
                }
            }
            else {
                purchasePrice = _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].unformat(purchasePriceFmt, this.settings.get('priceDecimalSep'));
            }
        }
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: this.settings.get('confirmPurchasePriceTitle'),
            html: this.settings.get('confirmPurchasePrice').replace('{{number}}', "<code>".concat(purchasePriceTxt, "</code>")).replace('{{name}}', "<code>".concat(itemName, "</code>")),
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: this.settings.get('continue'),
            confirmButtonColor: '#00B8DB',
            cancelButtonText: this.settings.get('cancel'),
            reverseButtons: true,
            showCloseButton: true,
            showLoaderOnConfirm: true,
            preConfirm: function () {
                return new Promise(function (resolve) {
                    var _a;
                    $.ajax({
                        url: window['ajaxurl'],
                        data: (_a = {
                                action: 'atum_order_change_purchase_price',
                                security: _this.settings.get('atumOrderItemNonce'),
                                atum_order_id: _this.settings.get('postId'),
                                atum_order_item_id: $item.data('atum_order_item_id')
                            },
                            _a[_this.settings.get('purchasePriceField')] = purchasePrice,
                            _a),
                        type: 'POST',
                        dataType: 'json',
                        success: function (response) {
                            if (response.success === false) {
                                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.showValidationMessage(response.data);
                            }
                            resolve();
                        },
                    });
                });
            },
        })
            .then(function (result) {
            if (result.isConfirmed) {
                if ($lineSubTotal.length && $lineTotal.length) {
                    $lineSubTotal.val($lineTotal.val());
                    $lineSubTotal.data('subtotal', $lineTotal.data('total'));
                }
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                    title: _this.settings.get('done'),
                    text: _this.settings.get('purchasePriceChanged'),
                    icon: 'success',
                    confirmButtonText: _this.settings.get('ok'),
                });
            }
        });
    };
    AtumOrderItems.prototype.calcTaxesFromBase = function (price, rates) {
        var taxes = [0], preCompoundTaxes;
        $.each(rates, function (i, rate) {
            if ('yes' === rate['compound']) {
                return true;
            }
            taxes.push(price * rate['rate'] / 100);
        });
        preCompoundTaxes = taxes.reduce(function (a, b) { return a + b; }, 0);
        $.each(rates, function (i, rate) {
            var currentTax;
            if ('no' === rate['compound']) {
                return true;
            }
            currentTax = (price + preCompoundTaxes) * rate['rate'] / 100;
            taxes.push(currentTax);
            preCompoundTaxes += currentTax;
        });
        return taxes.reduce(function (a, b) { return a + b; }, 0);
    };
    return AtumOrderItems;
}());
/* harmony default export */ __webpack_exports__["default"] = (AtumOrderItems);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./assets/js/src/components/orders/_order-notes.ts":
/*!*********************************************************!*\
  !*** ./assets/js/src/components/orders/_order-notes.ts ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _blocker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_blocker */ "./assets/js/src/components/_blocker.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "sweetalert2");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);


var OrderNotes = (function () {
    function OrderNotes(settings) {
        var _this = this;
        this.settings = settings;
        this.$container = $('#atum_order_notes');
        this.$textarea = $('textarea#add_atum_order_note');
        this.$container
            .on('click', 'button.add_note', function (evt) { return _this.addNote(evt); })
            .on('click', 'a.delete_note', function (evt) { return _this.deleteNote(evt); });
    }
    OrderNotes.prototype.addNote = function (evt) {
        var _this = this;
        evt.preventDefault();
        var note = this.$textarea.val();
        if (!note) {
            return;
        }
        _blocker__WEBPACK_IMPORTED_MODULE_0__["default"].block(this.$container);
        var data = {
            action: 'atum_order_add_note',
            post_id: $('#post_ID').val(),
            note: note,
            security: this.settings.get('addNoteNonce'),
        };
        $.post(window['ajaxurl'], data, function (response) {
            $('ul.atum_order_notes').prepend(response);
            _blocker__WEBPACK_IMPORTED_MODULE_0__["default"].unblock(_this.$container);
            _this.$textarea.val('');
            _this.$container.trigger('atum_added_note');
        });
    };
    OrderNotes.prototype.deleteNote = function (evt) {
        var _this = this;
        evt.preventDefault();
        var $note = $(evt.currentTarget).closest('li.note');
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            text: this.settings.get('deleteNote'),
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: this.settings.get('continue'),
            cancelButtonText: this.settings.get('cancel'),
            reverseButtons: true,
            allowOutsideClick: false,
            preConfirm: function () {
                return new Promise(function (resolve, reject) {
                    _blocker__WEBPACK_IMPORTED_MODULE_0__["default"].block($note);
                    var data = {
                        action: 'atum_order_delete_note',
                        note_id: $note.attr('rel'),
                        security: _this.settings.get('deleteNoteNonce'),
                    };
                    $.post(window['ajaxurl'], data, function () { return resolve(); });
                });
            },
        })
            .then(function (result) {
            if (result.isConfirmed) {
                $note.remove();
                _this.$container.trigger('atum_removed_note');
            }
        });
    };
    return OrderNotes;
}());
/* harmony default export */ __webpack_exports__["default"] = (OrderNotes);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./assets/js/src/config/_settings.ts":
/*!*******************************************!*\
  !*** ./assets/js/src/config/_settings.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Settings = (function () {
    function Settings(varName, defaults) {
        if (defaults === void 0) { defaults = {}; }
        this.varName = varName;
        this.defaults = defaults;
        this.settings = {};
        var localizedOpts = typeof window[varName] !== 'undefined' ? window[varName] : {};
        Object.assign(this.settings, defaults, localizedOpts);
    }
    Settings.prototype.get = function (prop) {
        if (typeof this.settings[prop] !== 'undefined') {
            return this.settings[prop];
        }
        return undefined;
    };
    Settings.prototype.getAll = function () {
        return this.settings;
    };
    Settings.prototype.delete = function (prop) {
        if (this.settings.hasOwnProperty(prop)) {
            delete this.settings[prop];
        }
    };
    return Settings;
}());
/* harmony default export */ __webpack_exports__["default"] = (Settings);


/***/ }),

/***/ "./assets/js/src/orders.ts":
/*!*********************************!*\
  !*** ./assets/js/src/orders.ts ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(jQuery) {/* harmony import */ var _components_orders_atum_orders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/orders/_atum-orders */ "./assets/js/src/components/orders/_atum-orders.ts");
/* harmony import */ var _components_date_time_picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/_date-time-picker */ "./assets/js/src/components/_date-time-picker.ts");
/* harmony import */ var _components_enhanced_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/_enhanced-select */ "./assets/js/src/components/_enhanced-select.ts");
/* harmony import */ var _components_orders_order_notes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/orders/_order-notes */ "./assets/js/src/components/orders/_order-notes.ts");
/* harmony import */ var _config_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config/_settings */ "./assets/js/src/config/_settings.ts");
/* harmony import */ var _components_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/_tooltip */ "./assets/js/src/components/_tooltip.ts");






jQuery(function ($) {
    var settings = new _config_settings__WEBPACK_IMPORTED_MODULE_4__["default"]('atumOrder');
    var tooltip = new _components_tooltip__WEBPACK_IMPORTED_MODULE_5__["default"]();
    var dateTimePicker = new _components_date_time_picker__WEBPACK_IMPORTED_MODULE_1__["default"](settings);
    new _components_enhanced_select__WEBPACK_IMPORTED_MODULE_2__["default"]();
    new _components_orders_atum_orders__WEBPACK_IMPORTED_MODULE_0__["default"](settings, tooltip, dateTimePicker);
    new _components_orders_order_notes__WEBPACK_IMPORTED_MODULE_3__["default"](settings);
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./assets/js/src/utils/_utils.ts":
/*!***************************************!*\
  !*** ./assets/js/src/utils/_utils.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var js_big_decimal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-big-decimal */ "./node_modules/js-big-decimal/dist/node/js-big-decimal.js");
/* harmony import */ var js_big_decimal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_big_decimal__WEBPACK_IMPORTED_MODULE_0__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};

var Utils = {
    settings: {
        delayTimer: 0,
        number: {
            precision: 0,
            grouping: 3,
            thousand: ',',
            decimal: '.',
        },
        currency: {
            symbol: '$',
            format: '%s%v',
            decimal: '.',
            thousand: ',',
            precision: 2,
            grouping: 3,
        },
    },
    delay: function (callback, ms) {
        clearTimeout(this.settings.delayTimer);
        this.settings.delayTimer = setTimeout(callback, ms);
    },
    filterQuery: function (query, variable) {
        var vars = query.split('&');
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split('=');
            if (pair[0] === variable) {
                return pair[1];
            }
        }
        return false;
    },
    filterByData: function ($elem, prop, val) {
        if (typeof val === 'undefined') {
            return $elem.filter(function (index, elem) {
                return typeof $(elem).data(prop) !== 'undefined';
            });
        }
        ;
        return $elem.filter(function (index, elem) {
            return $(elem).data(prop) == val;
        });
    },
    addNotice: function (type, msg) {
        var $notice = $("<div class=\"".concat(type, " notice is-dismissible\"><p><strong>").concat(msg, "</strong></p></div>")).hide(), $dismissButton = $('<button />', { type: 'button', class: 'notice-dismiss' }), $headerEnd = $('.wp-header-end');
        $headerEnd.siblings('.notice').remove();
        $headerEnd.before($notice.append($dismissButton));
        $notice.slideDown(100);
        $dismissButton.on('click.wp-dismiss-notice', function (evt) {
            evt.preventDefault();
            $notice.fadeTo(100, 0, function () {
                $notice.slideUp(100, function () {
                    $notice.remove();
                });
            });
        });
    },
    imagesLoaded: function ($wrapper) {
        var $imgs = $wrapper.find('img[src!=""]');
        if (!$imgs.length) {
            return $.Deferred().resolve().promise();
        }
        var dfds = [];
        $imgs.each(function (index, elem) {
            var dfd = $.Deferred(), img = new Image();
            dfds.push(dfd);
            img.onload = function () { return dfd.resolve(); };
            img.onerror = function () { return dfd.resolve(); };
            img.src = $(elem).attr('src');
        });
        return $.when.apply($, dfds);
    },
    getUrlParameter: function (name) {
        if (typeof URLSearchParams !== 'undefined') {
            var urlParams = new URLSearchParams(window.location.search);
            return urlParams.get(name);
        }
        else {
            name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
            var regex = new RegExp('[\\?&]' + name + '=([^&#]*)'), results = regex.exec(window.location.search);
            return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
        }
    },
    htmlDecode: function (input) {
        var e = document.createElement('div');
        e.innerHTML = input;
        return e.childNodes[0].nodeValue;
    },
    areEquivalent: function (a, b, strict) {
        if (strict === void 0) { strict = false; }
        var aProps = Object.getOwnPropertyNames(a), bProps = Object.getOwnPropertyNames(b);
        if (aProps.length != bProps.length) {
            return false;
        }
        for (var i = 0; i < aProps.length; i++) {
            var propName = aProps[i];
            if ((strict && a[propName] !== b[propName]) || (!strict && a[propName] != b[propName])) {
                return false;
            }
        }
        return true;
    },
    toggleNodes: function (nodes, openOrClose) {
        for (var i = 0; i < nodes.length; i++) {
            nodes[i].isExpanded = openOrClose == 'open';
            if (nodes[i].children && nodes[i].children.length > 0) {
                this.toggleNodes(nodes[i].children, openOrClose);
            }
        }
    },
    formatNumber: function (number, precision, thousand, decimal, stripZeros) {
        var _this = this;
        if (Array.isArray(number)) {
            return $.map(number, function (val) { return _this.formatNumber(val, precision, thousand, decimal, stripZeros); });
        }
        number = this.unformat(number);
        var defaults = __assign({}, this.settings.number), paramOpts = typeof decimal === 'undefined' ? { precision: precision, thousand: thousand } : { precision: precision, thousand: thousand, decimal: decimal }, opts = __assign(__assign({}, defaults), paramOpts), usePrecision = this.checkPrecision(opts.precision), negative = number < 0 ? '-' : '', base = parseInt(this.toFixed(Math.abs(number || 0), usePrecision), 10) + '', mod = base.length > 3 ? base.length % 3 : 0;
        var decimalsPart = '';
        if (usePrecision) {
            decimalsPart = this.toFixed(Math.abs(number), usePrecision);
            if (stripZeros) {
                decimalsPart = Number(decimalsPart).toString();
            }
            decimalsPart = decimalsPart.includes('.') ? opts.decimal + decimalsPart.split('.')[1] : '';
        }
        return negative + (mod ? base.substr(0, mod) + opts.thousand : '') + base.substr(mod).replace(/(\d{3})(?=\d)/g, '$1' + opts.thousand) + decimalsPart;
    },
    formatMoney: function (number, symbol, precision, thousand, decimal, format) {
        var _this = this;
        if (Array.isArray(number)) {
            return $.map(number, function (val) { return _this.formatMoney(val, symbol, precision, thousand, decimal, format); });
        }
        number = this.unformat(number);
        var defaults = __assign({}, this.settings.currency), opts = __assign({ defaults: defaults }, {
            symbol: symbol,
            precision: precision,
            thousand: thousand,
            decimal: decimal,
            format: format,
        }), formats = this.checkCurrencyFormat(opts.format), useFormat = number > 0 ? formats.pos : number < 0 ? formats.neg : formats.zero;
        return useFormat.replace('%s', opts.symbol).replace('%v', this.formatNumber(Math.abs(number), this.checkPrecision(opts.precision), opts.thousand, opts.decimal));
    },
    unformat: function (value, decimal) {
        var _this = this;
        if (Array.isArray(value)) {
            return $.map(value, function (val) { return _this.unformat(val, decimal); });
        }
        value = value || 0;
        if (typeof value === 'number') {
            return value;
        }
        decimal = decimal || this.settings.number.decimal;
        var regex = new RegExp("[^0-9-".concat(decimal, "]"), 'g'), unformatted = parseFloat(('' + value)
            .replace(/\((.*)\)/, '-$1')
            .replace(regex, '')
            .replace(decimal, '.'));
        return !isNaN(unformatted) ? unformatted : 0;
    },
    checkPrecision: function (val, base) {
        if (base === void 0) { base = 0; }
        val = Math.round(Math.abs(val));
        return isNaN(val) ? base : val;
    },
    toFixed: function (value, precision) {
        precision = this.checkPrecision(precision, this.settings.number.precision);
        var power = Math.pow(10, precision);
        return (Math.round(this.unformat(value) * power) / power).toFixed(precision);
    },
    checkCurrencyFormat: function (format) {
        var defaults = this.settings.currency.format;
        if (typeof format === 'function') {
            format = format();
        }
        else if (typeof format === 'string' && format.match('%v')) {
            return {
                pos: format,
                neg: format.replace('-', '').replace('%v', '-%v'),
                zero: format,
            };
        }
        else if (!format || !format.pos || !format.pos.match('%v')) {
            return (typeof defaults !== 'string') ? defaults : this.settings.currency.format = {
                pos: defaults,
                neg: defaults.replace('%v', '-%v'),
                zero: defaults,
            };
        }
        return format;
    },
    isNumeric: function (n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    },
    convertElemsToString: function ($elems) {
        return $('<div />').append($elems).html();
    },
    mergeArrays: function (arr1, arr2) {
        return Array.from(new Set(__spreadArray(__spreadArray([], arr1, true), arr2, true)));
    },
    restrictNumberInputValues: function ($input) {
        if ($input.attr('type') !== 'number') {
            return;
        }
        var qty = $input.val();
        var value = parseFloat(qty || '0'), min = parseFloat($input.attr('min') || '0'), max = parseFloat($input.attr('max') || '0');
        if (!$.isNumeric(qty)) {
            $input.val(undefined !== $input.attr('min') && !isNaN(min) && min > 0 ? min : 0);
        }
        else if (undefined !== $input.attr('min') && value < min) {
            $input.val(min);
        }
        else if (undefined !== $input.attr('max') && value > max) {
            $input.val(max);
        }
    },
    checkRTL: function (value) {
        var isRTL = false;
        if ($('html[ dir="rtl" ]').length > 0) {
            isRTL = true;
        }
        switch (value) {
            case 'isRTL':
            case 'reverse':
                return isRTL;
                break;
            case 'xSide':
                if (isRTL) {
                    return 'right';
                }
                else {
                    return 'left';
                }
                break;
            default:
                break;
        }
    },
    multiplyDecimal: function (multiplicand, multiplier) {
        return parseFloat(js_big_decimal__WEBPACK_IMPORTED_MODULE_0___default.a.multiply(multiplicand.toString(), multiplier.toString()));
    },
    divideDecimal: function (dividend, divisor, precision) {
        return parseFloat(js_big_decimal__WEBPACK_IMPORTED_MODULE_0___default.a.divide(dividend.toString(), divisor.toString(), precision));
    },
    sumDecimal: function (summand1, summand2) {
        return parseFloat(js_big_decimal__WEBPACK_IMPORTED_MODULE_0___default.a.add(summand1.toString(), summand2.toString()));
    },
    subtractDecimal: function (minuend, subtrahend) {
        return parseFloat(js_big_decimal__WEBPACK_IMPORTED_MODULE_0___default.a.subtract(minuend.toString(), subtrahend.toString()));
    },
};
/* harmony default export */ __webpack_exports__["default"] = (Utils);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./assets/js/vendor/bootstrap-datetimepicker.js":
/*!******************************************************!*\
  !*** ./assets/js/vendor/bootstrap-datetimepicker.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(jQuery) {/* harmony import */ var moment_min_moment_with_locales_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment/min/moment-with-locales.min */ "./node_modules/moment/min/moment-with-locales.min.js");
/* harmony import */ var moment_min_moment_with_locales_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment_min_moment_with_locales_min__WEBPACK_IMPORTED_MODULE_0__);
/*! version : 4.17.47
 =========================================================
 bootstrap-datetimejs
 https://github.com/Eonasdan/bootstrap-datetimepicker
 Copyright (c) 2015 Jonathan Peterson
 =========================================================
 
 MODIFIED BY ATUM TO BE COMPATIBLE WITH WEBPACK
 ALSO REPLACED datepicker AND timepicker CLASSES TO bs-datepicker AND bs-timepicker
 AND CHANGED PLUGIN NAME FROM datetimepicker TO bsDatetimepicker
 */
/*
 The MIT License (MIT)

 Copyright (c) 2015 Jonathan Peterson

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 */



(function ($, moment) {
	'use strict';
	if (!moment) {
		throw new Error('bootstrap-datetimepicker requires Moment.js to be loaded first');
	}
	
	var dateTimePicker = function (element, options) {
		var picker = {},
		    date,
		    viewDate,
		    unset = true,
		    input,
		    component = false,
		    widget = false,
		    use24Hours,
		    minViewModeNumber = 0,
		    actualFormat,
		    parseFormats,
		    currentViewMode,
		    datePickerModes = [
			    {
				    clsName: 'days',
				    navFnc: 'M',
				    navStep: 1
			    },
			    {
				    clsName: 'months',
				    navFnc: 'y',
				    navStep: 1
			    },
			    {
				    clsName: 'years',
				    navFnc: 'y',
				    navStep: 10
			    },
			    {
				    clsName: 'decades',
				    navFnc: 'y',
				    navStep: 100
			    }
		    ],
		    viewModes = ['days', 'months', 'years', 'decades'],
		    verticalModes = ['top', 'bottom', 'auto'],
		    horizontalModes = ['left', 'right', 'auto'],
		    toolbarPlacements = ['default', 'top', 'bottom'],
		    keyMap = {
			    'up': 38,
			    38: 'up',
			    'down': 40,
			    40: 'down',
			    'left': 37,
			    37: 'left',
			    'right': 39,
			    39: 'right',
			    'tab': 9,
			    9: 'tab',
			    'escape': 27,
			    27: 'escape',
			    'enter': 13,
			    13: 'enter',
			    'pageUp': 33,
			    33: 'pageUp',
			    'pageDown': 34,
			    34: 'pageDown',
			    'shift': 16,
			    16: 'shift',
			    'control': 17,
			    17: 'control',
			    'space': 32,
			    32: 'space',
			    't': 84,
			    84: 't',
			    'delete': 46,
			    46: 'delete'
		    },
		    keyState = {},
		
		    /********************************************************************************
		     *
		     * Private functions
		     *
		     ********************************************************************************/
		
		    hasTimeZone = function () {
			    return moment.tz !== undefined && options.timeZone !== undefined && options.timeZone !== null && options.timeZone !== '';
		    },
		
		    getMoment = function (d) {
			    var returnMoment;
			
			    if (d === undefined || d === null) {
				    returnMoment = moment(); //TODO should this use format? and locale?
			    } else if (moment.isDate(d) || moment.isMoment(d)) {
				    // If the date that is passed in is already a Date() or moment() object,
				    // pass it directly to moment.
				    returnMoment = moment(d);
			    } else if (hasTimeZone()) { // There is a string to parse and a default time zone
				    // parse with the tz function which takes a default time zone if it is not in the format string
				    returnMoment = moment.tz(d, parseFormats, options.useStrict, options.timeZone);
			    } else {
				    returnMoment = moment(d, parseFormats, options.useStrict);
			    }
			
			    if (hasTimeZone()) {
				    returnMoment.tz(options.timeZone);
			    }
			
			    return returnMoment;
		    },
		
		    isEnabled = function (granularity) {
			    if (typeof granularity !== 'string' || granularity.length > 1) {
				    throw new TypeError('isEnabled expects a single character string parameter');
			    }
			    switch (granularity) {
				    case 'y':
					    return actualFormat.indexOf('Y') !== -1;
				    case 'M':
					    return actualFormat.indexOf('M') !== -1;
				    case 'd':
					    return actualFormat.toLowerCase().indexOf('d') !== -1;
				    case 'h':
				    case 'H':
					    return actualFormat.toLowerCase().indexOf('h') !== -1;
				    case 'm':
					    return actualFormat.indexOf('m') !== -1;
				    case 's':
					    return actualFormat.indexOf('s') !== -1;
				    default:
					    return false;
			    }
		    },
		
		    hasTime = function () {
			    return (isEnabled('h') || isEnabled('m') || isEnabled('s'));
		    },
		
		    hasDate = function () {
			    return (isEnabled('y') || isEnabled('M') || isEnabled('d'));
		    },
		
		    getDatePickerTemplate = function () {
			    var headTemplate = $('<thead>')
				        .append($('<tr>')
					        .append($('<th>').addClass('prev').attr('data-action', 'previous')
						        .append($('<span>').addClass(options.icons.previous))
					        )
					        .append($('<th>').addClass('picker-switch').attr('data-action', 'pickerSwitch').attr('colspan', (options.calendarWeeks ? '6' : '5')))
					        .append($('<th>').addClass('next').attr('data-action', 'next')
						        .append($('<span>').addClass(options.icons.next))
					        )
				        ),
			        contTemplate = $('<tbody>')
				        .append($('<tr>')
					        .append($('<td>').attr('colspan', (options.calendarWeeks ? '8' : '7')))
				        );
			
			    return [
				    $('<div>').addClass('datepicker-days')
					    .append($('<table>').addClass('table-condensed')
						    .append(headTemplate)
						    .append($('<tbody>'))
					    ),
				    $('<div>').addClass('datepicker-months')
					    .append($('<table>').addClass('table-condensed')
						    .append(headTemplate.clone())
						    .append(contTemplate.clone())
					    ),
				    $('<div>').addClass('datepicker-years')
					    .append($('<table>').addClass('table-condensed')
						    .append(headTemplate.clone())
						    .append(contTemplate.clone())
					    ),
				    $('<div>').addClass('datepicker-decades')
					    .append($('<table>').addClass('table-condensed')
						    .append(headTemplate.clone())
						    .append(contTemplate.clone())
					    )
			    ];
		    },
		
		    getTimePickerMainTemplate = function () {
			    var topRow = $('<tr>'),
			        middleRow = $('<tr>'),
			        bottomRow = $('<tr>');
			
			    if (isEnabled('h')) {
				    topRow.append($('<td>')
					    .append($('<a>').attr({ href: '#', tabindex: '-1', 'title': options.tooltips.incrementHour }).addClass('btn').attr('data-action', 'incrementHours').append($('<span>').addClass(options.icons.up))));
				    middleRow.append($('<td>')
					    .append($('<span>').addClass('timepicker-hour').attr({ 'data-time-component': 'hours', 'title': options.tooltips.pickHour }).attr('data-action', 'showHours')));
				    bottomRow.append($('<td>')
					    .append($('<a>').attr({ href: '#', tabindex: '-1', 'title': options.tooltips.decrementHour }).addClass('btn').attr('data-action', 'decrementHours').append($('<span>').addClass(options.icons.down))));
			    }
			    if (isEnabled('m')) {
				    if (isEnabled('h')) {
					    topRow.append($('<td>').addClass('separator'));
					    middleRow.append($('<td>').addClass('separator').html(':'));
					    bottomRow.append($('<td>').addClass('separator'));
				    }
				    topRow.append($('<td>')
					    .append($('<a>').attr({ href: '#', tabindex: '-1', 'title': options.tooltips.incrementMinute }).addClass('btn').attr('data-action', 'incrementMinutes')
						    .append($('<span>').addClass(options.icons.up))));
				    middleRow.append($('<td>')
					    .append($('<span>').addClass('timepicker-minute').attr({ 'data-time-component': 'minutes', 'title': options.tooltips.pickMinute }).attr('data-action', 'showMinutes')));
				    bottomRow.append($('<td>')
					    .append($('<a>').attr({ href: '#', tabindex: '-1', 'title': options.tooltips.decrementMinute }).addClass('btn').attr('data-action', 'decrementMinutes')
						    .append($('<span>').addClass(options.icons.down))));
			    }
			    if (isEnabled('s')) {
				    if (isEnabled('m')) {
					    topRow.append($('<td>').addClass('separator'));
					    middleRow.append($('<td>').addClass('separator').html(':'));
					    bottomRow.append($('<td>').addClass('separator'));
				    }
				    topRow.append($('<td>')
					    .append($('<a>').attr({ href: '#', tabindex: '-1', 'title': options.tooltips.incrementSecond }).addClass('btn').attr('data-action', 'incrementSeconds')
						    .append($('<span>').addClass(options.icons.up))));
				    middleRow.append($('<td>')
					    .append($('<span>').addClass('timepicker-second').attr({ 'data-time-component': 'seconds', 'title': options.tooltips.pickSecond }).attr('data-action', 'showSeconds')));
				    bottomRow.append($('<td>')
					    .append($('<a>').attr({ href: '#', tabindex: '-1', 'title': options.tooltips.decrementSecond }).addClass('btn').attr('data-action', 'decrementSeconds')
						    .append($('<span>').addClass(options.icons.down))));
			    }
			
			    if (!use24Hours) {
				    topRow.append($('<td>').addClass('separator'));
				    middleRow.append($('<td>')
					    .append($('<button>').addClass('btn btn-primary').attr({ 'data-action': 'togglePeriod', tabindex: '-1', 'title': options.tooltips.togglePeriod })));
				    bottomRow.append($('<td>').addClass('separator'));
			    }
			
			    return $('<div>').addClass('timepicker-picker')
				    .append($('<table>').addClass('table-condensed')
					    .append([topRow, middleRow, bottomRow]));
		    },
		
		    getTimePickerTemplate = function () {
			    var hoursView = $('<div>').addClass('timepicker-hours')
				        .append($('<table>').addClass('table-condensed')),
			        minutesView = $('<div>').addClass('timepicker-minutes')
				        .append($('<table>').addClass('table-condensed')),
			        secondsView = $('<div>').addClass('timepicker-seconds')
				        .append($('<table>').addClass('table-condensed')),
			        ret = [getTimePickerMainTemplate()];
			
			    if (isEnabled('h')) {
				    ret.push(hoursView);
			    }
			    if (isEnabled('m')) {
				    ret.push(minutesView);
			    }
			    if (isEnabled('s')) {
				    ret.push(secondsView);
			    }
			
			    return ret;
		    },
		
		    getToolbar = function () {
			    var row = [];
			    if (options.showTodayButton) {
				    row.push($('<td>').append($('<a>').attr({ 'data-action': 'today', 'title': options.tooltips.today }).append($('<span>').addClass(options.icons.today))));
			    }
			    if (!options.sideBySide && hasDate() && hasTime()) {
				    row.push($('<td>').append($('<a>').attr({ 'data-action': 'togglePicker', 'title': options.tooltips.selectTime }).append($('<span>').addClass(options.icons.time))));
			    }
			    if (options.showClear) {
				    row.push($('<td>').append($('<a>').attr({ 'data-action': 'clear', 'title': options.tooltips.clear }).append($('<span>').addClass(options.icons.clear))));
			    }
			    if (options.showClose) {
				    row.push($('<td>').append($('<a>').attr({ 'data-action': 'close', 'title': options.tooltips.close }).append($('<span>').addClass(options.icons.close))));
			    }
			    return $('<table>').addClass('table-condensed').append($('<tbody>').append($('<tr>').append(row)));
		    },
		
		    getTemplate = function () {
			    var template = $('<div>').addClass('bootstrap-datetimepicker-widget dropdown-menu'),
			        dateView = $('<div>').addClass('bs-datepicker').append(getDatePickerTemplate()),
			        timeView = $('<div>').addClass('bs-timepicker').append(getTimePickerTemplate()),
			        content = $('<ul>').addClass('list-unstyled'),
			        toolbar = $('<li>').addClass('picker-switch' + (options.collapse ? ' accordion-toggle' : '')).append(getToolbar());
			
			    if (options.inline) {
				    template.removeClass('dropdown-menu');
			    }
			
			    if (use24Hours) {
				    template.addClass('usetwentyfour');
			    }
			
			    if (isEnabled('s') && !use24Hours) {
				    template.addClass('wider');
			    }
			
			    if (options.sideBySide && hasDate() && hasTime()) {
				    template.addClass('timepicker-sbs');
				    if (options.toolbarPlacement === 'top') {
					    template.append(toolbar);
				    }
				    template.append(
					    $('<div>').addClass('row')
						    .append(dateView.addClass('col-md-6'))
						    .append(timeView.addClass('col-md-6'))
				    );
				    if (options.toolbarPlacement === 'bottom') {
					    template.append(toolbar);
				    }
				    return template;
			    }
			
			    if (options.toolbarPlacement === 'top') {
				    content.append(toolbar);
			    }
			    if (hasDate()) {
				    content.append($('<li>').addClass((options.collapse && hasTime() ? 'collapse in' : '')).append(dateView));
			    }
			    if (options.toolbarPlacement === 'default') {
				    content.append(toolbar);
			    }
			    if (hasTime()) {
				    content.append($('<li>').addClass((options.collapse && hasDate() ? 'collapse' : '')).append(timeView));
			    }
			    if (options.toolbarPlacement === 'bottom') {
				    content.append(toolbar);
			    }
			    return template.append(content);
		    },
		
		    dataToOptions = function () {
			    var eData,
			        dataOptions = {};
			
			    if (element.is('input') || options.inline) {
				    eData = element.data();
			    } else {
				    eData = element.find('input').data();
			    }
			
			    if (eData.dateOptions && eData.dateOptions instanceof Object) {
				    dataOptions = $.extend(true, dataOptions, eData.dateOptions);
			    }
			
			    $.each(options, function (key) {
				    var attributeName = 'date' + key.charAt(0).toUpperCase() + key.slice(1);
				    if (eData[attributeName] !== undefined) {
					    dataOptions[key] = eData[attributeName];
				    }
			    });
			    return dataOptions;
		    },
		
		    place = function () {
			    var position = (component || element).position(),
			        offset = (component || element).offset(),
			        vertical = options.widgetPositioning.vertical,
			        horizontal = options.widgetPositioning.horizontal,
			        parent;
			
			    if (options.widgetParent) {
				    parent = options.widgetParent.append(widget);
			    } else if (element.is('input')) {
				    parent = element.after(widget).parent();
			    } else if (options.inline) {
				    parent = element.append(widget);
				    return;
			    } else {
				    parent = element;
				    element.children().first().after(widget);
			    }
			
			    // Top and bottom logic
			    if (vertical === 'auto') {
				    if (offset.top + widget.height() * 1.5 >= $(window).height() + $(window).scrollTop() &&
					    widget.height() + element.outerHeight() < offset.top) {
					    vertical = 'top';
				    } else {
					    vertical = 'bottom';
				    }
			    }
			
			    // Left and right logic
			    if (horizontal === 'auto') {
				    if (parent.width() < offset.left + widget.outerWidth() / 2 &&
					    offset.left + widget.outerWidth() > $(window).width()) {
					    horizontal = 'right';
				    } else {
					    horizontal = 'left';
				    }
			    }
			
			    if (vertical === 'top') {
				    widget.addClass('top').removeClass('bottom');
			    } else {
				    widget.addClass('bottom').removeClass('top');
			    }
			
			    if (horizontal === 'right') {
				    widget.addClass('pull-right');
			    } else {
				    widget.removeClass('pull-right');
			    }
			
			    // find the first parent element that has a non-static css positioning
			    if (parent.css('position') === 'static') {
				    parent = parent.parents().filter(function () {
					    return $(this).css('position') !== 'static';
				    }).first();
			    }
			
			    if (parent.length === 0) {
				    throw new Error('datetimepicker component should be placed within a non-static positioned container');
			    }
			
			    widget.css({
				    top: vertical === 'top' ? 'auto' : position.top + element.outerHeight(),
				    bottom: vertical === 'top' ? parent.outerHeight() - (parent === element ? 0 : position.top) : 'auto',
				    left: horizontal === 'left' ? (parent === element ? 0 : position.left) : 'auto',
				    right: horizontal === 'left' ? 'auto' : parent.outerWidth() - element.outerWidth() - (parent === element ? 0 : position.left)
			    });
		    },
		
		    notifyEvent = function (e) {
			    if (e.type === 'dp.change' && ((e.date && e.date.isSame(e.oldDate)) || (!e.date && !e.oldDate))) {
				    return;
			    }
			    element.trigger(e);
		    },
		
		    viewUpdate = function (e) {
			    if (e === 'y') {
				    e = 'YYYY';
			    }
			    notifyEvent({
				    type: 'dp.update',
				    change: e,
				    viewDate: viewDate.clone()
			    });
		    },
		
		    showMode = function (dir) {
			    if (!widget) {
				    return;
			    }
			    if (dir) {
				    currentViewMode = Math.max(minViewModeNumber, Math.min(3, currentViewMode + dir));
			    }
			    widget.find('.bs-datepicker > div').hide().filter('.datepicker-' + datePickerModes[currentViewMode].clsName).show();
		    },
		
		    fillDow = function () {
			    var row = $('<tr>'),
			        currentDate = viewDate.clone().startOf('w').startOf('d');
			
			    if (options.calendarWeeks === true) {
				    row.append($('<th>').addClass('cw').text('#'));
			    }
			
			    while (currentDate.isBefore(viewDate.clone().endOf('w'))) {
				    row.append($('<th>').addClass('dow').text(currentDate.format('dd')));
				    currentDate.add(1, 'd');
			    }
			    widget.find('.datepicker-days thead').append(row);
		    },
		
		    isInDisabledDates = function (testDate) {
			    return options.disabledDates[testDate.format('YYYY-MM-DD')] === true;
		    },
		
		    isInEnabledDates = function (testDate) {
			    return options.enabledDates[testDate.format('YYYY-MM-DD')] === true;
		    },
		
		    isInDisabledHours = function (testDate) {
			    return options.disabledHours[testDate.format('H')] === true;
		    },
		
		    isInEnabledHours = function (testDate) {
			    return options.enabledHours[testDate.format('H')] === true;
		    },
		
		    isValid = function (targetMoment, granularity) {
			    if (!targetMoment.isValid()) {
				    return false;
			    }
			    if (options.disabledDates && granularity === 'd' && isInDisabledDates(targetMoment)) {
				    return false;
			    }
			    if (options.enabledDates && granularity === 'd' && !isInEnabledDates(targetMoment)) {
				    return false;
			    }
			    if (options.minDate && targetMoment.isBefore(options.minDate, granularity)) {
				    return false;
			    }
			    if (options.maxDate && targetMoment.isAfter(options.maxDate, granularity)) {
				    return false;
			    }
			    if (options.daysOfWeekDisabled && granularity === 'd' && options.daysOfWeekDisabled.indexOf(targetMoment.day()) !== -1) {
				    return false;
			    }
			    if (options.disabledHours && (granularity === 'h' || granularity === 'm' || granularity === 's') && isInDisabledHours(targetMoment)) {
				    return false;
			    }
			    if (options.enabledHours && (granularity === 'h' || granularity === 'm' || granularity === 's') && !isInEnabledHours(targetMoment)) {
				    return false;
			    }
			    if (options.disabledTimeIntervals && (granularity === 'h' || granularity === 'm' || granularity === 's')) {
				    var found = false;
				    $.each(options.disabledTimeIntervals, function () {
					    if (targetMoment.isBetween(this[0], this[1])) {
						    found = true;
						    return false;
					    }
				    });
				    if (found) {
					    return false;
				    }
			    }
			    return true;
		    },
		
		    fillMonths = function () {
			    var spans = [],
			        monthsShort = viewDate.clone().startOf('y').startOf('d');
			    while (monthsShort.isSame(viewDate, 'y')) {
				    spans.push($('<span>').attr('data-action', 'selectMonth').addClass('month').text(monthsShort.format('MMM')));
				    monthsShort.add(1, 'M');
			    }
			    widget.find('.datepicker-months td').empty().append(spans);
		    },
		
		    updateMonths = function () {
			    var monthsView = widget.find('.datepicker-months'),
			        monthsViewHeader = monthsView.find('th'),
			        months = monthsView.find('tbody').find('span');
			
			    monthsViewHeader.eq(0).find('span').attr('title', options.tooltips.prevYear);
			    monthsViewHeader.eq(1).attr('title', options.tooltips.selectYear);
			    monthsViewHeader.eq(2).find('span').attr('title', options.tooltips.nextYear);
			
			    monthsView.find('.disabled').removeClass('disabled');
			
			    if (!isValid(viewDate.clone().subtract(1, 'y'), 'y')) {
				    monthsViewHeader.eq(0).addClass('disabled');
			    }
			
			    monthsViewHeader.eq(1).text(viewDate.year());
			
			    if (!isValid(viewDate.clone().add(1, 'y'), 'y')) {
				    monthsViewHeader.eq(2).addClass('disabled');
			    }
			
			    months.removeClass('active');
			    if (date.isSame(viewDate, 'y') && !unset) {
				    months.eq(date.month()).addClass('active');
			    }
			
			    months.each(function (index) {
				    if (!isValid(viewDate.clone().month(index), 'M')) {
					    $(this).addClass('disabled');
				    }
			    });
		    },
		
		    updateYears = function () {
			    var yearsView = widget.find('.datepicker-years'),
			        yearsViewHeader = yearsView.find('th'),
			        startYear = viewDate.clone().subtract(5, 'y'),
			        endYear = viewDate.clone().add(6, 'y'),
			        html = '';
			
			    yearsViewHeader.eq(0).find('span').attr('title', options.tooltips.prevDecade);
			    yearsViewHeader.eq(1).attr('title', options.tooltips.selectDecade);
			    yearsViewHeader.eq(2).find('span').attr('title', options.tooltips.nextDecade);
			
			    yearsView.find('.disabled').removeClass('disabled');
			
			    if (options.minDate && options.minDate.isAfter(startYear, 'y')) {
				    yearsViewHeader.eq(0).addClass('disabled');
			    }
			
			    yearsViewHeader.eq(1).text(startYear.year() + '-' + endYear.year());
			
			    if (options.maxDate && options.maxDate.isBefore(endYear, 'y')) {
				    yearsViewHeader.eq(2).addClass('disabled');
			    }
			
			    while (!startYear.isAfter(endYear, 'y')) {
				    html += '<span data-action="selectYear" class="year' + (startYear.isSame(date, 'y') && !unset ? ' active' : '') + (!isValid(startYear, 'y') ? ' disabled' : '') + '">' + startYear.year() + '</span>';
				    startYear.add(1, 'y');
			    }
			
			    yearsView.find('td').html(html);
		    },
		
		    updateDecades = function () {
			    var decadesView = widget.find('.datepicker-decades'),
			        decadesViewHeader = decadesView.find('th'),
			        startDecade = moment({ y: viewDate.year() - (viewDate.year() % 100) - 1 }),
			        endDecade = startDecade.clone().add(100, 'y'),
			        startedAt = startDecade.clone(),
			        minDateDecade = false,
			        maxDateDecade = false,
			        endDecadeYear,
			        html = '';
			
			    decadesViewHeader.eq(0).find('span').attr('title', options.tooltips.prevCentury);
			    decadesViewHeader.eq(2).find('span').attr('title', options.tooltips.nextCentury);
			
			    decadesView.find('.disabled').removeClass('disabled');
			
			    if (startDecade.isSame(moment({ y: 1900 })) || (options.minDate && options.minDate.isAfter(startDecade, 'y'))) {
				    decadesViewHeader.eq(0).addClass('disabled');
			    }
			
			    decadesViewHeader.eq(1).text(startDecade.year() + '-' + endDecade.year());
			
			    if (startDecade.isSame(moment({ y: 2000 })) || (options.maxDate && options.maxDate.isBefore(endDecade, 'y'))) {
				    decadesViewHeader.eq(2).addClass('disabled');
			    }
			
			    while (!startDecade.isAfter(endDecade, 'y')) {
				    endDecadeYear = startDecade.year() + 12;
				    minDateDecade = options.minDate && options.minDate.isAfter(startDecade, 'y') && options.minDate.year() <= endDecadeYear;
				    maxDateDecade = options.maxDate && options.maxDate.isAfter(startDecade, 'y') && options.maxDate.year() <= endDecadeYear;
				    html += '<span data-action="selectDecade" class="decade' + (date.isAfter(startDecade) && date.year() <= endDecadeYear ? ' active' : '') +
					    (!isValid(startDecade, 'y') && !minDateDecade && !maxDateDecade ? ' disabled' : '') + '" data-selection="' + (startDecade.year() + 6) + '">' + (startDecade.year() + 1) + ' - ' + (startDecade.year() + 12) + '</span>';
				    startDecade.add(12, 'y');
			    }
			    html += '<span></span><span></span><span></span>'; //push the dangling block over, at least this way it's even
			
			    decadesView.find('td').html(html);
			    decadesViewHeader.eq(1).text((startedAt.year() + 1) + '-' + (startDecade.year()));
		    },
		
		    fillDate = function () {
			    var daysView = widget.find('.datepicker-days'),
			        daysViewHeader = daysView.find('th'),
			        currentDate,
			        html = [],
			        row,
			        clsNames = [],
			        i;
			
			    if (!hasDate()) {
				    return;
			    }
			
			    daysViewHeader.eq(0).find('span').attr('title', options.tooltips.prevMonth);
			    daysViewHeader.eq(1).attr('title', options.tooltips.selectMonth);
			    daysViewHeader.eq(2).find('span').attr('title', options.tooltips.nextMonth);
			
			    daysView.find('.disabled').removeClass('disabled');
			    daysViewHeader.eq(1).text(viewDate.format(options.dayViewHeaderFormat));
			
			    if (!isValid(viewDate.clone().subtract(1, 'M'), 'M')) {
				    daysViewHeader.eq(0).addClass('disabled');
			    }
			    if (!isValid(viewDate.clone().add(1, 'M'), 'M')) {
				    daysViewHeader.eq(2).addClass('disabled');
			    }
			
			    currentDate = viewDate.clone().startOf('M').startOf('w').startOf('d');
			
			    for (i = 0; i < 42; i++) { //always display 42 days (should show 6 weeks)
				    if (currentDate.weekday() === 0) {
					    row = $('<tr>');
					    if (options.calendarWeeks) {
						    row.append('<td class="cw">' + currentDate.week() + '</td>');
					    }
					    html.push(row);
				    }
				    clsNames = ['day'];
				    if (currentDate.isBefore(viewDate, 'M')) {
					    clsNames.push('old');
				    }
				    if (currentDate.isAfter(viewDate, 'M')) {
					    clsNames.push('new');
				    }
				    if (currentDate.isSame(date, 'd') && !unset) {
					    clsNames.push('active');
				    }
				    if (!isValid(currentDate, 'd')) {
					    clsNames.push('disabled');
				    }
				    if (currentDate.isSame(getMoment(), 'd')) {
					    clsNames.push('today');
				    }
				    if (currentDate.day() === 0 || currentDate.day() === 6) {
					    clsNames.push('weekend');
				    }
				    notifyEvent({
					    type: 'dp.classify',
					    date: currentDate,
					    classNames: clsNames
				    });
				    row.append('<td data-action="selectDay" data-day="' + currentDate.format('L') + '" class="' + clsNames.join(' ') + '">' + currentDate.date() + '</td>');
				    currentDate.add(1, 'd');
			    }
			
			    daysView.find('tbody').empty().append(html);
			
			    updateMonths();
			
			    updateYears();
			
			    updateDecades();
		    },
		
		    fillHours = function () {
			    var table = widget.find('.timepicker-hours table'),
			        currentHour = viewDate.clone().startOf('d'),
			        html = [],
			        row = $('<tr>');
			
			    if (viewDate.hour() > 11 && !use24Hours) {
				    currentHour.hour(12);
			    }
			    while (currentHour.isSame(viewDate, 'd') && (use24Hours || (viewDate.hour() < 12 && currentHour.hour() < 12) || viewDate.hour() > 11)) {
				    if (currentHour.hour() % 4 === 0) {
					    row = $('<tr>');
					    html.push(row);
				    }
				    row.append('<td data-action="selectHour" class="hour' + (!isValid(currentHour, 'h') ? ' disabled' : '') + '">' + currentHour.format(use24Hours ? 'HH' : 'hh') + '</td>');
				    currentHour.add(1, 'h');
			    }
			    table.empty().append(html);
		    },
		
		    fillMinutes = function () {
			    var table = widget.find('.timepicker-minutes table'),
			        currentMinute = viewDate.clone().startOf('h'),
			        html = [],
			        row = $('<tr>'),
			        step = options.stepping === 1 ? 5 : options.stepping;
			
			    while (viewDate.isSame(currentMinute, 'h')) {
				    if (currentMinute.minute() % (step * 4) === 0) {
					    row = $('<tr>');
					    html.push(row);
				    }
				    row.append('<td data-action="selectMinute" class="minute' + (!isValid(currentMinute, 'm') ? ' disabled' : '') + '">' + currentMinute.format('mm') + '</td>');
				    currentMinute.add(step, 'm');
			    }
			    table.empty().append(html);
		    },
		
		    fillSeconds = function () {
			    var table = widget.find('.timepicker-seconds table'),
			        currentSecond = viewDate.clone().startOf('m'),
			        html = [],
			        row = $('<tr>');
			
			    while (viewDate.isSame(currentSecond, 'm')) {
				    if (currentSecond.second() % 20 === 0) {
					    row = $('<tr>');
					    html.push(row);
				    }
				    row.append('<td data-action="selectSecond" class="second' + (!isValid(currentSecond, 's') ? ' disabled' : '') + '">' + currentSecond.format('ss') + '</td>');
				    currentSecond.add(5, 's');
			    }
			
			    table.empty().append(html);
		    },
		
		    fillTime = function () {
			    var toggle, newDate, timeComponents = widget.find('.bs-timepicker span[data-time-component]');
			
			    if (!use24Hours) {
				    toggle = widget.find('.bs-timepicker [data-action=togglePeriod]');
				    newDate = date.clone().add((date.hours() >= 12) ? -12 : 12, 'h');
				
				    toggle.text(date.format('A'));
				
				    if (isValid(newDate, 'h')) {
					    toggle.removeClass('disabled');
				    } else {
					    toggle.addClass('disabled');
				    }
			    }
			    timeComponents.filter('[data-time-component=hours]').text(date.format(use24Hours ? 'HH' : 'hh'));
			    timeComponents.filter('[data-time-component=minutes]').text(date.format('mm'));
			    timeComponents.filter('[data-time-component=seconds]').text(date.format('ss'));
			
			    fillHours();
			    fillMinutes();
			    fillSeconds();
		    },
		
		    update = function () {
			    if (!widget) {
				    return;
			    }
			    fillDate();
			    fillTime();
		    },
		
		    setValue = function (targetMoment) {
			    var oldDate = unset ? null : date;
			
			    // case of calling setValue(null or false)
			    if (!targetMoment) {
				    unset = true;
				    input.val('');
				    element.data('date', '');
				    notifyEvent({
					    type: 'dp.change',
					    date: false,
					    oldDate: oldDate
				    });
				    update();
				    return;
			    }
			
			    targetMoment = targetMoment.clone().locale(options.locale);
			
			    if (hasTimeZone()) {
				    targetMoment.tz(options.timeZone);
			    }
			
			    if (options.stepping !== 1) {
				    targetMoment.minutes((Math.round(targetMoment.minutes() / options.stepping) * options.stepping)).seconds(0);
				
				    while (options.minDate && targetMoment.isBefore(options.minDate)) {
					    targetMoment.add(options.stepping, 'minutes');
				    }
			    }
			
			    if (isValid(targetMoment)) {
				    date = targetMoment;
				    viewDate = date.clone();
				    input.val(date.format(actualFormat));
				    element.data('date', date.format(actualFormat));
				    unset = false;
				    update();
				    notifyEvent({
					    type: 'dp.change',
					    date: date.clone(),
					    oldDate: oldDate
				    });
			    } else {
				    if (!options.keepInvalid) {
					    input.val(unset ? '' : date.format(actualFormat));
				    } else {
					    notifyEvent({
						    type: 'dp.change',
						    date: targetMoment,
						    oldDate: oldDate
					    });
				    }
				    notifyEvent({
					    type: 'dp.error',
					    date: targetMoment,
					    oldDate: oldDate
				    });
			    }
		    },
		
		    /**
		     * Hides the widget. Possibly will emit dp.hide
		     */
		    hide = function () {
			    var transitioning = false;
			    if (!widget) {
				    return picker;
			    }
			    // Ignore event if in the middle of a picker transition
			    widget.find('.collapse').each(function () {
				    var collapseData = $(this).data('collapse');
				    if (collapseData && collapseData.transitioning) {
					    transitioning = true;
					    return false;
				    }
				    return true;
			    });
			    if (transitioning) {
				    return picker;
			    }
			    if (component && component.hasClass('btn')) {
				    component.toggleClass('active');
			    }
			    widget.hide();
			
			    $(window).off('resize', place);
			    widget.off('click', '[data-action]');
			    widget.off('mousedown', false);
			
			    widget.remove();
			    widget = false;
			
			    notifyEvent({
				    type: 'dp.hide',
				    date: date.clone()
			    });
			
			    input.blur();
			
			    viewDate = date.clone();
			
			    return picker;
		    },
		
		    clear = function () {
			    setValue(null);
			
			    // ATUM enhancement to notify date clears.
			    notifyEvent({
				    type: 'dp.clear'
			    });
		    },
		
		    parseInputDate = function (inputDate) {
			    if (options.parseInputDate === undefined) {
				    if (!moment.isMoment(inputDate) || inputDate instanceof Date) {
					    inputDate = getMoment(inputDate);
				    }
			    } else {
				    inputDate = options.parseInputDate(inputDate);
			    }
			    //inputDate.locale(options.locale);
			    return inputDate;
		    },
		
		    /********************************************************************************
		     *
		     * Widget UI interaction functions
		     *
		     ********************************************************************************/
		    actions = {
			    next: function () {
				    var navFnc = datePickerModes[currentViewMode].navFnc;
				    viewDate.add(datePickerModes[currentViewMode].navStep, navFnc);
				    fillDate();
				    viewUpdate(navFnc);
			    },
			
			    previous: function () {
				    var navFnc = datePickerModes[currentViewMode].navFnc;
				    viewDate.subtract(datePickerModes[currentViewMode].navStep, navFnc);
				    fillDate();
				    viewUpdate(navFnc);
			    },
			
			    pickerSwitch: function () {
				    showMode(1);
			    },
			
			    selectMonth: function (e) {
				    var month = $(e.target).closest('tbody').find('span').index($(e.target));
				    viewDate.month(month);
				    if (currentViewMode === minViewModeNumber) {
					    setValue(date.clone().year(viewDate.year()).month(viewDate.month()));
					    if (!options.inline) {
						    hide();
					    }
				    } else {
					    showMode(-1);
					    fillDate();
				    }
				    viewUpdate('M');
			    },
			
			    selectYear: function (e) {
				    var year = parseInt($(e.target).text(), 10) || 0;
				    viewDate.year(year);
				    if (currentViewMode === minViewModeNumber) {
					    setValue(date.clone().year(viewDate.year()));
					    if (!options.inline) {
						    hide();
					    }
				    } else {
					    showMode(-1);
					    fillDate();
				    }
				    viewUpdate('YYYY');
			    },
			
			    selectDecade: function (e) {
				    var year = parseInt($(e.target).data('selection'), 10) || 0;
				    viewDate.year(year);
				    if (currentViewMode === minViewModeNumber) {
					    setValue(date.clone().year(viewDate.year()));
					    if (!options.inline) {
						    hide();
					    }
				    } else {
					    showMode(-1);
					    fillDate();
				    }
				    viewUpdate('YYYY');
			    },
			
			    selectDay: function (e) {
				    var day = viewDate.clone();
				    if ($(e.target).is('.old')) {
					    day.subtract(1, 'M');
				    }
				    if ($(e.target).is('.new')) {
					    day.add(1, 'M');
				    }
				    setValue(day.date(parseInt($(e.target).text(), 10)));
				    if (!hasTime() && !options.keepOpen && !options.inline) {
					    hide();
				    }
			    },
			
			    incrementHours: function () {
				    var newDate = date.clone().add(1, 'h');
				    if (isValid(newDate, 'h')) {
					    setValue(newDate);
				    }
			    },
			
			    incrementMinutes: function () {
				    var newDate = date.clone().add(options.stepping, 'm');
				    if (isValid(newDate, 'm')) {
					    setValue(newDate);
				    }
			    },
			
			    incrementSeconds: function () {
				    var newDate = date.clone().add(1, 's');
				    if (isValid(newDate, 's')) {
					    setValue(newDate);
				    }
			    },
			
			    decrementHours: function () {
				    var newDate = date.clone().subtract(1, 'h');
				    if (isValid(newDate, 'h')) {
					    setValue(newDate);
				    }
			    },
			
			    decrementMinutes: function () {
				    var newDate = date.clone().subtract(options.stepping, 'm');
				    if (isValid(newDate, 'm')) {
					    setValue(newDate);
				    }
			    },
			
			    decrementSeconds: function () {
				    var newDate = date.clone().subtract(1, 's');
				    if (isValid(newDate, 's')) {
					    setValue(newDate);
				    }
			    },
			
			    togglePeriod: function () {
				    setValue(date.clone().add((date.hours() >= 12) ? -12 : 12, 'h'));
			    },
			
			    togglePicker: function (e) {
				    var $this = $(e.target),
				        $parent = $this.closest('ul'),
				        expanded = $parent.find('.in'),
				        closed = $parent.find('.collapse:not(.in)'),
				        collapseData;
				
				    if (expanded && expanded.length) {
					    collapseData = expanded.data('collapse');
					    if (collapseData && collapseData.transitioning) {
						    return;
					    }
					    if (expanded.collapse) { // if collapse plugin is available through bootstrap.js then use it
						    expanded.collapse('hide');
						    closed.collapse('show');
					    } else { // otherwise just toggle in class on the two views
						    expanded.removeClass('in');
						    closed.addClass('in');
					    }
					    if ($this.is('span')) {
						    $this.toggleClass(options.icons.time + ' ' + options.icons.date);
					    } else {
						    $this.find('span').toggleClass(options.icons.time + ' ' + options.icons.date);
					    }
					
					    // NOTE: uncomment if toggled state will be restored in show()
					    //if (component) {
					    //    component.find('span').toggleClass(options.icons.time + ' ' + options.icons.date);
					    //}
				    }
			    },
			
			    showPicker: function () {
				    widget.find('.bs-timepicker > div:not(.timepicker-picker)').hide();
				    widget.find('.bs-timepicker .timepicker-picker').show();
			    },
			
			    showHours: function () {
				    widget.find('.bs-timepicker .timepicker-picker').hide();
				    widget.find('.bs-timepicker .timepicker-hours').show();
			    },
			
			    showMinutes: function () {
				    widget.find('.bs-timepicker .timepicker-picker').hide();
				    widget.find('.bs-timepicker .timepicker-minutes').show();
			    },
			
			    showSeconds: function () {
				    widget.find('.bs-timepicker .timepicker-picker').hide();
				    widget.find('.bs-timepicker .timepicker-seconds').show();
			    },
			
			    selectHour: function (e) {
				    var hour = parseInt($(e.target).text(), 10);
				
				    if (!use24Hours) {
					    if (date.hours() >= 12) {
						    if (hour !== 12) {
							    hour += 12;
						    }
					    } else {
						    if (hour === 12) {
							    hour = 0;
						    }
					    }
				    }
				    setValue(date.clone().hours(hour));
				    actions.showPicker.call(picker);
			    },
			
			    selectMinute: function (e) {
				    setValue(date.clone().minutes(parseInt($(e.target).text(), 10)));
				    actions.showPicker.call(picker);
			    },
			
			    selectSecond: function (e) {
				    setValue(date.clone().seconds(parseInt($(e.target).text(), 10)));
				    actions.showPicker.call(picker);
			    },
			
			    clear: clear,
			
			    today: function () {
				    var todaysDate = getMoment();
				    if (isValid(todaysDate, 'd')) {
					    setValue(todaysDate);
				    }
			    },
			
			    close: hide
		    },
		
		    doAction = function (e) {
			    if ($(e.currentTarget).is('.disabled')) {
				    return false;
			    }
			    actions[$(e.currentTarget).data('action')].apply(picker, arguments);
			    return false;
		    },
		
		    /**
		     * Shows the widget. Possibly will emit dp.show and dp.change
		     */
		    show = function () {
			    var currentMoment,
			        useCurrentGranularity = {
				        'year': function (m) {
					        return m.month(0).date(1).hours(0).seconds(0).minutes(0);
				        },
				        'month': function (m) {
					        return m.date(1).hours(0).seconds(0).minutes(0);
				        },
				        'day': function (m) {
					        return m.hours(0).seconds(0).minutes(0);
				        },
				        'hour': function (m) {
					        return m.seconds(0).minutes(0);
				        },
				        'minute': function (m) {
					        return m.seconds(0);
				        }
			        };
			
			    if (input.prop('disabled') || (!options.ignoreReadonly && input.prop('readonly')) || widget) {
				    return picker;
			    }
			    if (input.val() !== undefined && input.val().trim().length !== 0) {
				    setValue(parseInputDate(input.val().trim()));
			    } else if (unset && options.useCurrent && (options.inline || (input.is('input') && input.val().trim().length === 0))) {
				    currentMoment = getMoment();
				    if (typeof options.useCurrent === 'string') {
					    currentMoment = useCurrentGranularity[options.useCurrent](currentMoment);
				    }
				    setValue(currentMoment);
			    }
			    widget = getTemplate();
			
			    fillDow();
			    fillMonths();
			
			    widget.find('.timepicker-hours').hide();
			    widget.find('.timepicker-minutes').hide();
			    widget.find('.timepicker-seconds').hide();
			
			    update();
			    showMode();
			
			    $(window).on('resize', place);
			    widget.on('click', '[data-action]', doAction); // this handles clicks on the widget
			    widget.on('mousedown', false);
			
			    if (component && component.hasClass('btn')) {
				    component.toggleClass('active');
			    }
			    place();
			    widget.show();
			    if (options.focusOnShow && !input.is(':focus')) {
				    input.focus();
			    }
			
			    notifyEvent({
				    type: 'dp.show'
			    });
			    return picker;
		    },
		
		    /**
		     * Shows or hides the widget
		     */
		    toggle = function () {
			    return (widget ? hide() : show());
		    },
		
		    keydown = function (e) {
			    var handler = null,
			        index,
			        index2,
			        pressedKeys = [],
			        pressedModifiers = {},
			        currentKey = e.which,
			        keyBindKeys,
			        allModifiersPressed,
			        pressed = 'p';
			
			    keyState[currentKey] = pressed;
			
			    for (index in keyState) {
				    if (keyState.hasOwnProperty(index) && keyState[index] === pressed) {
					    pressedKeys.push(index);
					    if (parseInt(index, 10) !== currentKey) {
						    pressedModifiers[index] = true;
					    }
				    }
			    }
			
			    for (index in options.keyBinds) {
				    if (options.keyBinds.hasOwnProperty(index) && typeof (options.keyBinds[index]) === 'function') {
					    keyBindKeys = index.split(' ');
					    if (keyBindKeys.length === pressedKeys.length && keyMap[currentKey] === keyBindKeys[keyBindKeys.length - 1]) {
						    allModifiersPressed = true;
						    for (index2 = keyBindKeys.length - 2; index2 >= 0; index2--) {
							    if (!(keyMap[keyBindKeys[index2]] in pressedModifiers)) {
								    allModifiersPressed = false;
								    break;
							    }
						    }
						    if (allModifiersPressed) {
							    handler = options.keyBinds[index];
							    break;
						    }
					    }
				    }
			    }
			
			    if (handler) {
				    handler.call(picker, widget);
				    e.stopPropagation();
				    e.preventDefault();
			    }
		    },
		
		    keyup = function (e) {
			    keyState[e.which] = 'r';
			    e.stopPropagation();
			    e.preventDefault();
		    },
		
		    change = function (e) {
			    var val = $(e.target).val().trim(),
			        parsedDate = val ? parseInputDate(val) : null;
			    setValue(parsedDate);
			    e.stopImmediatePropagation();
			    return false;
		    },
		
		    attachDatePickerElementEvents = function () {
			    input.on({
				    'change': change,
				    'blur': options.debug ? '' : hide,
				    'keydown': keydown,
				    'keyup': keyup,
				    'focus': options.allowInputToggle ? show : ''
			    });
			
			    if (element.is('input')) {
				    input.on({
					    'focus': show
				    });
			    } else if (component) {
				    component.on('click', toggle);
				    component.on('mousedown', false);
			    }
		    },
		
		    detachDatePickerElementEvents = function () {
			    input.off({
				    'change': change,
				    'blur': blur,
				    'keydown': keydown,
				    'keyup': keyup,
				    'focus': options.allowInputToggle ? hide : ''
			    });
			
			    if (element.is('input')) {
				    input.off({
					    'focus': show
				    });
			    } else if (component) {
				    component.off('click', toggle);
				    component.off('mousedown', false);
			    }
		    },
		
		    indexGivenDates = function (givenDatesArray) {
			    // Store given enabledDates and disabledDates as keys.
			    // This way we can check their existence in O(1) time instead of looping through whole array.
			    // (for example: options.enabledDates['2014-02-27'] === true)
			    var givenDatesIndexed = {};
			    $.each(givenDatesArray, function () {
				    var dDate = parseInputDate(this);
				    if (dDate.isValid()) {
					    givenDatesIndexed[dDate.format('YYYY-MM-DD')] = true;
				    }
			    });
			    return (Object.keys(givenDatesIndexed).length) ? givenDatesIndexed : false;
		    },
		
		    indexGivenHours = function (givenHoursArray) {
			    // Store given enabledHours and disabledHours as keys.
			    // This way we can check their existence in O(1) time instead of looping through whole array.
			    // (for example: options.enabledHours['2014-02-27'] === true)
			    var givenHoursIndexed = {};
			    $.each(givenHoursArray, function () {
				    givenHoursIndexed[this] = true;
			    });
			    return (Object.keys(givenHoursIndexed).length) ? givenHoursIndexed : false;
		    },
		
		    initFormatting = function () {
			    var format = options.format || 'L LT';
			
			    actualFormat = format.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, function (formatInput) {
				    var newinput = date.localeData().longDateFormat(formatInput) || formatInput;
				    return newinput.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, function (formatInput2) { //temp fix for #740
					    return date.localeData().longDateFormat(formatInput2) || formatInput2;
				    });
			    });
			
			
			    parseFormats = options.extraFormats ? options.extraFormats.slice() : [];
			    if (parseFormats.indexOf(format) < 0 && parseFormats.indexOf(actualFormat) < 0) {
				    parseFormats.push(actualFormat);
			    }
			
			    use24Hours = (actualFormat.toLowerCase().indexOf('a') < 1 && actualFormat.replace(/\[.*?\]/g, '').indexOf('h') < 1);
			
			    if (isEnabled('y')) {
				    minViewModeNumber = 2;
			    }
			    if (isEnabled('M')) {
				    minViewModeNumber = 1;
			    }
			    if (isEnabled('d')) {
				    minViewModeNumber = 0;
			    }
			
			    currentViewMode = Math.max(minViewModeNumber, currentViewMode);
			
			    if (!unset) {
				    setValue(date);
			    }
		    };
		
		/********************************************************************************
		 *
		 * Public API functions
		 * =====================
		 *
		 * Important: Do not expose direct references to private objects or the options
		 * object to the outer world. Always return a clone when returning values or make
		 * a clone when setting a private variable.
		 *
		 ********************************************************************************/
		picker.destroy = function () {
			///<summary>Destroys the widget and removes all attached event listeners</summary>
			hide();
			detachDatePickerElementEvents();
			element.removeData('DateTimePicker');
			element.removeData('date');
		};
		
		picker.toggle = toggle;
		
		picker.show = show;
		
		picker.hide = hide;
		
		picker.disable = function () {
			///<summary>Disables the input element, the component is attached to, by adding a disabled="true" attribute to it.
			///If the widget was visible before that call it is hidden. Possibly emits dp.hide</summary>
			hide();
			if (component && component.hasClass('btn')) {
				component.addClass('disabled');
			}
			input.prop('disabled', true);
			return picker;
		};
		
		picker.enable = function () {
			///<summary>Enables the input element, the component is attached to, by removing disabled attribute from it.</summary>
			if (component && component.hasClass('btn')) {
				component.removeClass('disabled');
			}
			input.prop('disabled', false);
			return picker;
		};
		
		picker.ignoreReadonly = function (ignoreReadonly) {
			if (arguments.length === 0) {
				return options.ignoreReadonly;
			}
			if (typeof ignoreReadonly !== 'boolean') {
				throw new TypeError('ignoreReadonly () expects a boolean parameter');
			}
			options.ignoreReadonly = ignoreReadonly;
			return picker;
		};
		
		picker.options = function (newOptions) {
			if (arguments.length === 0) {
				return $.extend(true, {}, options);
			}
			
			if (!(newOptions instanceof Object)) {
				throw new TypeError('options() options parameter should be an object');
			}
			$.extend(true, options, newOptions);
			$.each(options, function (key, value) {
				if (picker[key] !== undefined) {
					picker[key](value);
				} else if (options.debug) {
					throw new TypeError('option ' + key + ' is not recognized!');
				}
			});
			return picker;
		};
		
		picker.date = function (newDate) {
			///<signature helpKeyword="$.fn.bsDatetimepicker.date">
			///<summary>Returns the component's model current date, a moment object or null if not set.</summary>
			///<returns type="Moment">date.clone()</returns>
			///</signature>
			///<signature>
			///<summary>Sets the components model current moment to it. Passing a null value unsets the components model current moment. Parsing of the newDate parameter is made using moment library with the options.format and options.useStrict components configuration.</summary>
			///<param name="newDate" locid="$.fn.bsDatetimepicker.date_p:newDate">Takes string, Date, moment, null parameter.</param>
			///</signature>
			if (arguments.length === 0) {
				if (unset) {
					return null;
				}
				return date.clone();
			}
			
			if (newDate !== null && typeof newDate !== 'string' && !moment.isMoment(newDate) && !(newDate instanceof Date)) {
				throw new TypeError('date() parameter must be one of [null, string, moment or Date]');
			}
			
			setValue(newDate === null ? null : parseInputDate(newDate));
			return picker;
		};
		
		picker.format = function (newFormat) {
			///<summary>test su</summary>
			///<param name="newFormat">info about para</param>
			///<returns type="string|boolean">returns foo</returns>
			if (arguments.length === 0) {
				return options.format;
			}
			
			if ((typeof newFormat !== 'string') && ((typeof newFormat !== 'boolean') || (newFormat !== false))) {
				throw new TypeError('format() expects a string or boolean:false parameter ' + newFormat);
			}
			
			options.format = newFormat;
			if (actualFormat) {
				initFormatting(); // reinit formatting
			}
			return picker;
		};
		
		picker.timeZone = function (newZone) {
			if (arguments.length === 0) {
				return options.timeZone;
			}
			
			if (typeof newZone !== 'string') {
				throw new TypeError('newZone() expects a string parameter');
			}
			
			options.timeZone = newZone;
			
			return picker;
		};
		
		picker.dayViewHeaderFormat = function (newFormat) {
			if (arguments.length === 0) {
				return options.dayViewHeaderFormat;
			}
			
			if (typeof newFormat !== 'string') {
				throw new TypeError('dayViewHeaderFormat() expects a string parameter');
			}
			
			options.dayViewHeaderFormat = newFormat;
			return picker;
		};
		
		picker.extraFormats = function (formats) {
			if (arguments.length === 0) {
				return options.extraFormats;
			}
			
			if (formats !== false && !(formats instanceof Array)) {
				throw new TypeError('extraFormats() expects an array or false parameter');
			}
			
			options.extraFormats = formats;
			if (parseFormats) {
				initFormatting(); // reinit formatting
			}
			return picker;
		};
		
		picker.disabledDates = function (dates) {
			///<signature helpKeyword="$.fn.bsDatetimepicker.disabledDates">
			///<summary>Returns an array with the currently set disabled dates on the component.</summary>
			///<returns type="array">options.disabledDates</returns>
			///</signature>
			///<signature>
			///<summary>Setting this takes precedence over options.minDate, options.maxDate configuration. Also calling this function removes the configuration of
			///options.enabledDates if such exist.</summary>
			///<param name="dates" locid="$.fn.bsDatetimepicker.disabledDates_p:dates">Takes an [ string or Date or moment ] of values and allows the user to select only from those days.</param>
			///</signature>
			if (arguments.length === 0) {
				return (options.disabledDates ? $.extend({}, options.disabledDates) : options.disabledDates);
			}
			
			if (!dates) {
				options.disabledDates = false;
				update();
				return picker;
			}
			if (!(dates instanceof Array)) {
				throw new TypeError('disabledDates() expects an array parameter');
			}
			options.disabledDates = indexGivenDates(dates);
			options.enabledDates = false;
			update();
			return picker;
		};
		
		picker.enabledDates = function (dates) {
			///<signature helpKeyword="$.fn.bsDatetimepicker.enabledDates">
			///<summary>Returns an array with the currently set enabled dates on the component.</summary>
			///<returns type="array">options.enabledDates</returns>
			///</signature>
			///<signature>
			///<summary>Setting this takes precedence over options.minDate, options.maxDate configuration. Also calling this function removes the configuration of options.disabledDates if such exist.</summary>
			///<param name="dates" locid="$.fn.bsDatetimepicker.enabledDates_p:dates">Takes an [ string or Date or moment ] of values and allows the user to select only from those days.</param>
			///</signature>
			if (arguments.length === 0) {
				return (options.enabledDates ? $.extend({}, options.enabledDates) : options.enabledDates);
			}
			
			if (!dates) {
				options.enabledDates = false;
				update();
				return picker;
			}
			if (!(dates instanceof Array)) {
				throw new TypeError('enabledDates() expects an array parameter');
			}
			options.enabledDates = indexGivenDates(dates);
			options.disabledDates = false;
			update();
			return picker;
		};
		
		picker.daysOfWeekDisabled = function (daysOfWeekDisabled) {
			if (arguments.length === 0) {
				return options.daysOfWeekDisabled.splice(0);
			}
			
			if ((typeof daysOfWeekDisabled === 'boolean') && !daysOfWeekDisabled) {
				options.daysOfWeekDisabled = false;
				update();
				return picker;
			}
			
			if (!(daysOfWeekDisabled instanceof Array)) {
				throw new TypeError('daysOfWeekDisabled() expects an array parameter');
			}
			options.daysOfWeekDisabled = daysOfWeekDisabled.reduce(function (previousValue, currentValue) {
				currentValue = parseInt(currentValue, 10);
				if (currentValue > 6 || currentValue < 0 || isNaN(currentValue)) {
					return previousValue;
				}
				if (previousValue.indexOf(currentValue) === -1) {
					previousValue.push(currentValue);
				}
				return previousValue;
			}, []).sort();
			if (options.useCurrent && !options.keepInvalid) {
				var tries = 0;
				while (!isValid(date, 'd')) {
					date.add(1, 'd');
					if (tries === 31) {
						throw 'Tried 31 times to find a valid date';
					}
					tries++;
				}
				setValue(date);
			}
			update();
			return picker;
		};
		
		picker.maxDate = function (maxDate) {
			if (arguments.length === 0) {
				return options.maxDate ? options.maxDate.clone() : options.maxDate;
			}
			
			if ((typeof maxDate === 'boolean') && maxDate === false) {
				options.maxDate = false;
				update();
				return picker;
			}
			
			if (typeof maxDate === 'string') {
				
				// ATUM enhancement to allow using the today button when the maxDate is set to "moment+1"
				if (maxDate === 'moment+1') {
					maxDate = getMoment( moment().add(1, 'minutes') );
				}
				else if (maxDate === 'now' || maxDate === 'moment') {
					maxDate = getMoment();
				}
			}
			
			var parsedDate = parseInputDate(maxDate);
			
			if (!parsedDate.isValid()) {
				throw new TypeError('maxDate() Could not parse date parameter: ' + maxDate);
			}
			if (options.minDate && parsedDate.isBefore(options.minDate)) {
				throw new TypeError('maxDate() date parameter is before options.minDate: ' + parsedDate.format(actualFormat));
			}
			options.maxDate = parsedDate;
			if (options.useCurrent && !options.keepInvalid && date.isAfter(maxDate)) {
				setValue(options.maxDate);
			}
			if (viewDate.isAfter(parsedDate)) {
				viewDate = parsedDate.clone().subtract(options.stepping, 'm');
			}
			update();
			return picker;
		};
		
		picker.minDate = function (minDate) {
			if (arguments.length === 0) {
				return options.minDate ? options.minDate.clone() : options.minDate;
			}
			
			if ((typeof minDate === 'boolean') && minDate === false) {
				options.minDate = false;
				update();
				return picker;
			}
			
			if (typeof minDate === 'string') {
				if (minDate === 'now' || minDate === 'moment') {
					minDate = getMoment();
				}
			}
			
			var parsedDate = parseInputDate(minDate);
			
			if (!parsedDate.isValid()) {
				throw new TypeError('minDate() Could not parse date parameter: ' + minDate);
			}
			if (options.maxDate && parsedDate.isAfter(options.maxDate)) {
				throw new TypeError('minDate() date parameter is after options.maxDate: ' + parsedDate.format(actualFormat));
			}
			options.minDate = parsedDate;
			if (options.useCurrent && !options.keepInvalid && date.isBefore(minDate)) {
				setValue(options.minDate);
			}
			if (viewDate.isBefore(parsedDate)) {
				viewDate = parsedDate.clone().add(options.stepping, 'm');
			}
			update();
			return picker;
		};
		
		picker.defaultDate = function (defaultDate) {
			///<signature helpKeyword="$.fn.datetimepicker.defaultDate">
			///<summary>Returns a moment with the options.defaultDate option configuration or false if not set</summary>
			///<returns type="Moment">date.clone()</returns>
			///</signature>
			///<signature>
			///<summary>Will set the picker's inital date. If a boolean:false value is passed the options.defaultDate parameter is cleared.</summary>
			///<param name="defaultDate" locid="$.fn.bsDatetimepicker.defaultDate_p:defaultDate">Takes a string, Date, moment, boolean:false</param>
			///</signature>
			if (arguments.length === 0) {
				return options.defaultDate ? options.defaultDate.clone() : options.defaultDate;
			}
			if (!defaultDate) {
				options.defaultDate = false;
				return picker;
			}
			
			if (typeof defaultDate === 'string') {
				if (defaultDate === 'now' || defaultDate === 'moment') {
					defaultDate = getMoment();
				} else {
					defaultDate = getMoment(defaultDate);
				}
			}
			
			var parsedDate = parseInputDate(defaultDate);
			if (!parsedDate.isValid()) {
				throw new TypeError('defaultDate() Could not parse date parameter: ' + defaultDate);
			}
			if (!isValid(parsedDate)) {
				throw new TypeError('defaultDate() date passed is invalid according to component setup validations');
			}
			
			options.defaultDate = parsedDate;
			
			if ((options.defaultDate && options.inline) || input.val().trim() === '') {
				setValue(options.defaultDate);
			}
			return picker;
		};
		
		picker.locale = function (locale) {
			if (arguments.length === 0) {
				return options.locale;
			}
			
			if (!moment.localeData(locale)) {
				throw new TypeError('locale() locale ' + locale + ' is not loaded from moment locales!');
			}
			
			options.locale = locale;
			date.locale(options.locale);
			viewDate.locale(options.locale);
			
			if (actualFormat) {
				initFormatting(); // reinit formatting
			}
			if (widget) {
				hide();
				show();
			}
			return picker;
		};
		
		picker.stepping = function (stepping) {
			if (arguments.length === 0) {
				return options.stepping;
			}
			
			stepping = parseInt(stepping, 10);
			if (isNaN(stepping) || stepping < 1) {
				stepping = 1;
			}
			options.stepping = stepping;
			return picker;
		};
		
		picker.useCurrent = function (useCurrent) {
			var useCurrentOptions = ['year', 'month', 'day', 'hour', 'minute'];
			if (arguments.length === 0) {
				return options.useCurrent;
			}
			
			if ((typeof useCurrent !== 'boolean') && (typeof useCurrent !== 'string')) {
				throw new TypeError('useCurrent() expects a boolean or string parameter');
			}
			if (typeof useCurrent === 'string' && useCurrentOptions.indexOf(useCurrent.toLowerCase()) === -1) {
				throw new TypeError('useCurrent() expects a string parameter of ' + useCurrentOptions.join(', '));
			}
			options.useCurrent = useCurrent;
			return picker;
		};
		
		picker.collapse = function (collapse) {
			if (arguments.length === 0) {
				return options.collapse;
			}
			
			if (typeof collapse !== 'boolean') {
				throw new TypeError('collapse() expects a boolean parameter');
			}
			if (options.collapse === collapse) {
				return picker;
			}
			options.collapse = collapse;
			if (widget) {
				hide();
				show();
			}
			return picker;
		};
		
		picker.icons = function (icons) {
			if (arguments.length === 0) {
				return $.extend({}, options.icons);
			}
			
			if (!(icons instanceof Object)) {
				throw new TypeError('icons() expects parameter to be an Object');
			}
			$.extend(options.icons, icons);
			if (widget) {
				hide();
				show();
			}
			return picker;
		};
		
		picker.tooltips = function (tooltips) {
			if (arguments.length === 0) {
				return $.extend({}, options.tooltips);
			}
			
			if (!(tooltips instanceof Object)) {
				throw new TypeError('tooltips() expects parameter to be an Object');
			}
			$.extend(options.tooltips, tooltips);
			if (widget) {
				hide();
				show();
			}
			return picker;
		};
		
		picker.useStrict = function (useStrict) {
			if (arguments.length === 0) {
				return options.useStrict;
			}
			
			if (typeof useStrict !== 'boolean') {
				throw new TypeError('useStrict() expects a boolean parameter');
			}
			options.useStrict = useStrict;
			return picker;
		};
		
		picker.sideBySide = function (sideBySide) {
			if (arguments.length === 0) {
				return options.sideBySide;
			}
			
			if (typeof sideBySide !== 'boolean') {
				throw new TypeError('sideBySide() expects a boolean parameter');
			}
			options.sideBySide = sideBySide;
			if (widget) {
				hide();
				show();
			}
			return picker;
		};
		
		picker.viewMode = function (viewMode) {
			if (arguments.length === 0) {
				return options.viewMode;
			}
			
			if (typeof viewMode !== 'string') {
				throw new TypeError('viewMode() expects a string parameter');
			}
			
			if (viewModes.indexOf(viewMode) === -1) {
				throw new TypeError('viewMode() parameter must be one of (' + viewModes.join(', ') + ') value');
			}
			
			options.viewMode = viewMode;
			currentViewMode = Math.max(viewModes.indexOf(viewMode), minViewModeNumber);
			
			showMode();
			return picker;
		};
		
		picker.toolbarPlacement = function (toolbarPlacement) {
			if (arguments.length === 0) {
				return options.toolbarPlacement;
			}
			
			if (typeof toolbarPlacement !== 'string') {
				throw new TypeError('toolbarPlacement() expects a string parameter');
			}
			if (toolbarPlacements.indexOf(toolbarPlacement) === -1) {
				throw new TypeError('toolbarPlacement() parameter must be one of (' + toolbarPlacements.join(', ') + ') value');
			}
			options.toolbarPlacement = toolbarPlacement;
			
			if (widget) {
				hide();
				show();
			}
			return picker;
		};
		
		picker.widgetPositioning = function (widgetPositioning) {
			if (arguments.length === 0) {
				return $.extend({}, options.widgetPositioning);
			}
			
			if (({}).toString.call(widgetPositioning) !== '[object Object]') {
				throw new TypeError('widgetPositioning() expects an object variable');
			}
			if (widgetPositioning.horizontal) {
				if (typeof widgetPositioning.horizontal !== 'string') {
					throw new TypeError('widgetPositioning() horizontal variable must be a string');
				}
				widgetPositioning.horizontal = widgetPositioning.horizontal.toLowerCase();
				if (horizontalModes.indexOf(widgetPositioning.horizontal) === -1) {
					throw new TypeError('widgetPositioning() expects horizontal parameter to be one of (' + horizontalModes.join(', ') + ')');
				}
				options.widgetPositioning.horizontal = widgetPositioning.horizontal;
			}
			if (widgetPositioning.vertical) {
				if (typeof widgetPositioning.vertical !== 'string') {
					throw new TypeError('widgetPositioning() vertical variable must be a string');
				}
				widgetPositioning.vertical = widgetPositioning.vertical.toLowerCase();
				if (verticalModes.indexOf(widgetPositioning.vertical) === -1) {
					throw new TypeError('widgetPositioning() expects vertical parameter to be one of (' + verticalModes.join(', ') + ')');
				}
				options.widgetPositioning.vertical = widgetPositioning.vertical;
			}
			update();
			return picker;
		};
		
		picker.calendarWeeks = function (calendarWeeks) {
			if (arguments.length === 0) {
				return options.calendarWeeks;
			}
			
			if (typeof calendarWeeks !== 'boolean') {
				throw new TypeError('calendarWeeks() expects parameter to be a boolean value');
			}
			
			options.calendarWeeks = calendarWeeks;
			update();
			return picker;
		};
		
		picker.showTodayButton = function (showTodayButton) {
			if (arguments.length === 0) {
				return options.showTodayButton;
			}
			
			if (typeof showTodayButton !== 'boolean') {
				throw new TypeError('showTodayButton() expects a boolean parameter');
			}
			
			options.showTodayButton = showTodayButton;
			if (widget) {
				hide();
				show();
			}
			return picker;
		};
		
		picker.showClear = function (showClear) {
			if (arguments.length === 0) {
				return options.showClear;
			}
			
			if (typeof showClear !== 'boolean') {
				throw new TypeError('showClear() expects a boolean parameter');
			}
			
			options.showClear = showClear;
			if (widget) {
				hide();
				show();
			}
			return picker;
		};
		
		picker.widgetParent = function (widgetParent) {
			if (arguments.length === 0) {
				return options.widgetParent;
			}
			
			if (typeof widgetParent === 'string') {
				widgetParent = $(widgetParent);
			}
			
			if (widgetParent !== null && (typeof widgetParent !== 'string' && !(widgetParent instanceof $))) {
				throw new TypeError('widgetParent() expects a string or a jQuery object parameter');
			}
			
			options.widgetParent = widgetParent;
			if (widget) {
				hide();
				show();
			}
			return picker;
		};
		
		picker.keepOpen = function (keepOpen) {
			if (arguments.length === 0) {
				return options.keepOpen;
			}
			
			if (typeof keepOpen !== 'boolean') {
				throw new TypeError('keepOpen() expects a boolean parameter');
			}
			
			options.keepOpen = keepOpen;
			return picker;
		};
		
		picker.focusOnShow = function (focusOnShow) {
			if (arguments.length === 0) {
				return options.focusOnShow;
			}
			
			if (typeof focusOnShow !== 'boolean') {
				throw new TypeError('focusOnShow() expects a boolean parameter');
			}
			
			options.focusOnShow = focusOnShow;
			return picker;
		};
		
		picker.inline = function (inline) {
			if (arguments.length === 0) {
				return options.inline;
			}
			
			if (typeof inline !== 'boolean') {
				throw new TypeError('inline() expects a boolean parameter');
			}
			
			options.inline = inline;
			return picker;
		};
		
		picker.clear = function () {
			clear();
			return picker;
		};
		
		picker.keyBinds = function (keyBinds) {
			if (arguments.length === 0) {
				return options.keyBinds;
			}
			
			options.keyBinds = keyBinds;
			return picker;
		};
		
		picker.getMoment = function (d) {
			return getMoment(d);
		};
		
		picker.debug = function (debug) {
			if (typeof debug !== 'boolean') {
				throw new TypeError('debug() expects a boolean parameter');
			}
			
			options.debug = debug;
			return picker;
		};
		
		picker.allowInputToggle = function (allowInputToggle) {
			if (arguments.length === 0) {
				return options.allowInputToggle;
			}
			
			if (typeof allowInputToggle !== 'boolean') {
				throw new TypeError('allowInputToggle() expects a boolean parameter');
			}
			
			options.allowInputToggle = allowInputToggle;
			return picker;
		};
		
		picker.showClose = function (showClose) {
			if (arguments.length === 0) {
				return options.showClose;
			}
			
			if (typeof showClose !== 'boolean') {
				throw new TypeError('showClose() expects a boolean parameter');
			}
			
			options.showClose = showClose;
			return picker;
		};
		
		picker.keepInvalid = function (keepInvalid) {
			if (arguments.length === 0) {
				return options.keepInvalid;
			}
			
			if (typeof keepInvalid !== 'boolean') {
				throw new TypeError('keepInvalid() expects a boolean parameter');
			}
			options.keepInvalid = keepInvalid;
			return picker;
		};
		
		picker.datepickerInput = function (datepickerInput) {
			if (arguments.length === 0) {
				return options.datepickerInput;
			}
			
			if (typeof datepickerInput !== 'string') {
				throw new TypeError('datepickerInput() expects a string parameter');
			}
			
			options.datepickerInput = datepickerInput;
			return picker;
		};
		
		picker.parseInputDate = function (parseInputDate) {
			if (arguments.length === 0) {
				return options.parseInputDate;
			}
			
			if (typeof parseInputDate !== 'function') {
				throw new TypeError('parseInputDate() sholud be as function');
			}
			
			options.parseInputDate = parseInputDate;
			
			return picker;
		};
		
		picker.disabledTimeIntervals = function (disabledTimeIntervals) {
			///<signature helpKeyword="$.fn.bsDatetimepicker.disabledTimeIntervals">
			///<summary>Returns an array with the currently set disabled dates on the component.</summary>
			///<returns type="array">options.disabledTimeIntervals</returns>
			///</signature>
			///<signature>
			///<summary>Setting this takes precedence over options.minDate, options.maxDate configuration. Also calling this function removes the configuration of
			///options.enabledDates if such exist.</summary>
			///<param name="dates" locid="$.fn.bsDatetimepicker.disabledTimeIntervals_p:dates">Takes an [ string or Date or moment ] of values and allows the user to select only from those days.</param>
			///</signature>
			if (arguments.length === 0) {
				return (options.disabledTimeIntervals ? $.extend({}, options.disabledTimeIntervals) : options.disabledTimeIntervals);
			}
			
			if (!disabledTimeIntervals) {
				options.disabledTimeIntervals = false;
				update();
				return picker;
			}
			if (!(disabledTimeIntervals instanceof Array)) {
				throw new TypeError('disabledTimeIntervals() expects an array parameter');
			}
			options.disabledTimeIntervals = disabledTimeIntervals;
			update();
			return picker;
		};
		
		picker.disabledHours = function (hours) {
			///<signature helpKeyword="$.fn.bsDatetimepicker.disabledHours">
			///<summary>Returns an array with the currently set disabled hours on the component.</summary>
			///<returns type="array">options.disabledHours</returns>
			///</signature>
			///<signature>
			///<summary>Setting this takes precedence over options.minDate, options.maxDate configuration. Also calling this function removes the configuration of
			///options.enabledHours if such exist.</summary>
			///<param name="hours" locid="$.fn.bsDatetimepicker.disabledHours_p:hours">Takes an [ int ] of values and disallows the user to select only from those hours.</param>
			///</signature>
			if (arguments.length === 0) {
				return (options.disabledHours ? $.extend({}, options.disabledHours) : options.disabledHours);
			}
			
			if (!hours) {
				options.disabledHours = false;
				update();
				return picker;
			}
			if (!(hours instanceof Array)) {
				throw new TypeError('disabledHours() expects an array parameter');
			}
			options.disabledHours = indexGivenHours(hours);
			options.enabledHours = false;
			if (options.useCurrent && !options.keepInvalid) {
				var tries = 0;
				while (!isValid(date, 'h')) {
					date.add(1, 'h');
					if (tries === 24) {
						throw 'Tried 24 times to find a valid date';
					}
					tries++;
				}
				setValue(date);
			}
			update();
			return picker;
		};
		
		picker.enabledHours = function (hours) {
			///<signature helpKeyword="$.fn.bsDatetimepicker.enabledHours">
			///<summary>Returns an array with the currently set enabled hours on the component.</summary>
			///<returns type="array">options.enabledHours</returns>
			///</signature>
			///<signature>
			///<summary>Setting this takes precedence over options.minDate, options.maxDate configuration. Also calling this function removes the configuration of options.disabledHours if such exist.</summary>
			///<param name="hours" locid="$.fn.bsDatetimepicker.enabledHours_p:hours">Takes an [ int ] of values and allows the user to select only from those hours.</param>
			///</signature>
			if (arguments.length === 0) {
				return (options.enabledHours ? $.extend({}, options.enabledHours) : options.enabledHours);
			}
			
			if (!hours) {
				options.enabledHours = false;
				update();
				return picker;
			}
			if (!(hours instanceof Array)) {
				throw new TypeError('enabledHours() expects an array parameter');
			}
			options.enabledHours = indexGivenHours(hours);
			options.disabledHours = false;
			if (options.useCurrent && !options.keepInvalid) {
				var tries = 0;
				while (!isValid(date, 'h')) {
					date.add(1, 'h');
					if (tries === 24) {
						throw 'Tried 24 times to find a valid date';
					}
					tries++;
				}
				setValue(date);
			}
			update();
			return picker;
		};
		/**
		 * Returns the component's model current viewDate, a moment object or null if not set. Passing a null value unsets the components model current moment. Parsing of the newDate parameter is made using moment library with the options.format and options.useStrict components configuration.
		 * @param {Takes string, viewDate, moment, null parameter.} newDate
		 * @returns {viewDate.clone()}
		 */
		picker.viewDate = function (newDate) {
			if (arguments.length === 0) {
				return viewDate.clone();
			}
			
			if (!newDate) {
				viewDate = date.clone();
				return picker;
			}
			
			if (typeof newDate !== 'string' && !moment.isMoment(newDate) && !(newDate instanceof Date)) {
				throw new TypeError('viewDate() parameter must be one of [string, moment or Date]');
			}
			
			viewDate = parseInputDate(newDate);
			viewUpdate();
			return picker;
		};
		
		// initializing element and component attributes
		if (element.is('input')) {
			input = element;
		} else {
			input = element.find(options.datepickerInput);
			if (input.length === 0) {
				input = element.find('input');
			} else if (!input.is('input')) {
				throw new Error('CSS class "' + options.datepickerInput + '" cannot be applied to non input element');
			}
		}
		
		if (element.hasClass('input-group')) {
			// in case there is more then one 'input-group-addon' Issue #48
			if (element.find('.datepickerbutton').length === 0) {
				component = element.find('.input-group-addon');
			} else {
				component = element.find('.datepickerbutton');
			}
		}
		
		if (!options.inline && !input.is('input')) {
			throw new Error('Could not initialize DateTimePicker without an input element');
		}
		
		// Set defaults for date here now instead of in var declaration
		date = getMoment();
		viewDate = date.clone();
		
		$.extend(true, options, dataToOptions());
		
		picker.options(options);
		
		initFormatting();
		
		attachDatePickerElementEvents();
		
		if (input.prop('disabled')) {
			picker.disable();
		}
		if (input.is('input') && input.val().trim().length !== 0) {
			setValue(parseInputDate(input.val().trim()));
		}
		else if (options.defaultDate && input.attr('placeholder') === undefined) {
			setValue(options.defaultDate);
		}
		if (options.inline) {
			show();
		}
		return picker;
	};
	
	/********************************************************************************
	 *
	 * jQuery plugin constructor and defaults object
	 *
	 ********************************************************************************/
	
	/**
	 * See (http://jquery.com/).
	 * @name jQuery
	 * @class
	 * See the jQuery Library  (http://jquery.com/) for full details.  This just
	 * documents the function and classes that are added to jQuery by this plug-in.
	 */
	/**
	 * See (http://jquery.com/)
	 * @name fn
	 * @class
	 * See the jQuery Library  (http://jquery.com/) for full details.  This just
	 * documents the function and classes that are added to jQuery by this plug-in.
	 * @memberOf jQuery
	 */
	/**
	 * Show comments
	 * @class bsDatetimepicker
	 * @memberOf jQuery.fn
	 */
	$.fn.bsDatetimepicker = function (options) {
		options = options || {};
		
		var args = Array.prototype.slice.call(arguments, 1),
		    isInstance = true,
		    thisMethods = ['destroy', 'hide', 'show', 'toggle'],
		    returnValue;
		
		if (typeof options === 'object') {
			return this.each(function () {
				var $this = $(this),
				    _options;
				if (!$this.data('DateTimePicker')) {
					// create a private copy of the defaults object
					_options = $.extend(true, {}, $.fn.bsDatetimepicker.defaults, options);
					$this.data('DateTimePicker', dateTimePicker($this, _options));
				}
			});
		} else if (typeof options === 'string') {
			this.each(function () {
				var $this = $(this),
				    instance = $this.data('DateTimePicker');
				if (!instance) {
					throw new Error('bootstrap-datetimepicker("' + options + '") method was called on an element that is not using DateTimePicker');
				}
				
				returnValue = instance[options].apply(instance, args);
				isInstance = returnValue === instance;
			});
			
			if (isInstance || $.inArray(options, thisMethods) > -1) {
				return this;
			}
			
			return returnValue;
		}
		
		throw new TypeError('Invalid arguments for DateTimePicker: ' + options);
	};
	
	$.fn.bsDatetimepicker.defaults = {
		timeZone: '',
		format: false,
		dayViewHeaderFormat: 'MMMM YYYY',
		extraFormats: false,
		stepping: 1,
		minDate: false,
		maxDate: false,
		useCurrent: true,
		collapse: true,
		locale: moment.locale(),
		defaultDate: false,
		disabledDates: false,
		enabledDates: false,
		icons: {
			time: 'glyphicon glyphicon-time',
			date: 'glyphicon glyphicon-calendar',
			up: 'glyphicon glyphicon-chevron-up',
			down: 'glyphicon glyphicon-chevron-down',
			previous: 'glyphicon glyphicon-chevron-left',
			next: 'glyphicon glyphicon-chevron-right',
			today: 'glyphicon glyphicon-screenshot',
			clear: 'glyphicon glyphicon-trash',
			close: 'glyphicon glyphicon-remove'
		},
		tooltips: {
			today: 'Go to today',
			clear: 'Clear selection',
			close: 'Close the picker',
			selectMonth: 'Select Month',
			prevMonth: 'Previous Month',
			nextMonth: 'Next Month',
			selectYear: 'Select Year',
			prevYear: 'Previous Year',
			nextYear: 'Next Year',
			selectDecade: 'Select Decade',
			prevDecade: 'Previous Decade',
			nextDecade: 'Next Decade',
			prevCentury: 'Previous Century',
			nextCentury: 'Next Century',
			pickHour: 'Pick Hour',
			incrementHour: 'Increment Hour',
			decrementHour: 'Decrement Hour',
			pickMinute: 'Pick Minute',
			incrementMinute: 'Increment Minute',
			decrementMinute: 'Decrement Minute',
			pickSecond: 'Pick Second',
			incrementSecond: 'Increment Second',
			decrementSecond: 'Decrement Second',
			togglePeriod: 'Toggle Period',
			selectTime: 'Select Time'
		},
		useStrict: false,
		sideBySide: false,
		daysOfWeekDisabled: false,
		calendarWeeks: false,
		viewMode: 'days',
		toolbarPlacement: 'default',
		showTodayButton: false,
		showClear: false,
		showClose: false,
		widgetPositioning: {
			horizontal: 'auto',
			vertical: 'auto'
		},
		widgetParent: null,
		ignoreReadonly: false,
		keepOpen: false,
		focusOnShow: true,
		inline: false,
		keepInvalid: false,
		datepickerInput: '.datepickerinput',
		keyBinds: {
			up: function (widget) {
				if (!widget) {
					return;
				}
				var d = this.date() || this.getMoment();
				if (widget.find('.bs-datepicker').is(':visible')) {
					this.date(d.clone().subtract(7, 'd'));
				} else {
					this.date(d.clone().add(this.stepping(), 'm'));
				}
			},
			down: function (widget) {
				if (!widget) {
					this.show();
					return;
				}
				var d = this.date() || this.getMoment();
				if (widget.find('.bs-datepicker').is(':visible')) {
					this.date(d.clone().add(7, 'd'));
				} else {
					this.date(d.clone().subtract(this.stepping(), 'm'));
				}
			},
			'control up': function (widget) {
				if (!widget) {
					return;
				}
				var d = this.date() || this.getMoment();
				if (widget.find('.bs-datepicker').is(':visible')) {
					this.date(d.clone().subtract(1, 'y'));
				} else {
					this.date(d.clone().add(1, 'h'));
				}
			},
			'control down': function (widget) {
				if (!widget) {
					return;
				}
				var d = this.date() || this.getMoment();
				if (widget.find('.bs-datepicker').is(':visible')) {
					this.date(d.clone().add(1, 'y'));
				} else {
					this.date(d.clone().subtract(1, 'h'));
				}
			},
			left: function (widget) {
				if (!widget) {
					return;
				}
				var d = this.date() || this.getMoment();
				if (widget.find('.bs-datepicker').is(':visible')) {
					this.date(d.clone().subtract(1, 'd'));
				}
			},
			right: function (widget) {
				if (!widget) {
					return;
				}
				var d = this.date() || this.getMoment();
				if (widget.find('.bs-datepicker').is(':visible')) {
					this.date(d.clone().add(1, 'd'));
				}
			},
			pageUp: function (widget) {
				if (!widget) {
					return;
				}
				var d = this.date() || this.getMoment();
				if (widget.find('.bs-datepicker').is(':visible')) {
					this.date(d.clone().subtract(1, 'M'));
				}
			},
			pageDown: function (widget) {
				if (!widget) {
					return;
				}
				var d = this.date() || this.getMoment();
				if (widget.find('.bs-datepicker').is(':visible')) {
					this.date(d.clone().add(1, 'M'));
				}
			},
			enter: function () {
				this.hide();
			},
			escape: function () {
				this.hide();
			},
			//tab: function (widget) { //this break the flow of the form. disabling for now
			//    var toggle = widget.find('.picker-switch a[data-action="togglePicker"]');
			//    if(toggle.length > 0) toggle.click();
			//},
			'control space': function (widget) {
				if (!widget) {
					return;
				}
				if (widget.find('.bs-timepicker').is(':visible')) {
					widget.find('.btn[data-action="togglePeriod"]').click();
				}
			},
			t: function () {
				this.date(this.getMoment());
			},
			'delete': function () {
				this.clear();
			}
		},
		debug: false,
		allowInputToggle: false,
		disabledTimeIntervals: false,
		disabledHours: false,
		enabledHours: false,
		viewDate: false
	};
	
	return $.fn.bsDatetimepicker;
	
}(jQuery, moment_min_moment_with_locales_min__WEBPACK_IMPORTED_MODULE_0___default.a));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/createPopper.js":
/*!*********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/createPopper.js ***!
  \*********************************************************/
/*! exports provided: popperGenerator, createPopper, detectOverflow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popperGenerator", function() { return popperGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPopper", function() { return createPopper; });
/* harmony import */ var _dom_utils_getCompositeRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-utils/getCompositeRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js");
/* harmony import */ var _dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-utils/getLayoutRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js");
/* harmony import */ var _dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-utils/listScrollParents.js */ "./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom-utils/getOffsetParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom-utils/getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _utils_orderModifiers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/orderModifiers.js */ "./node_modules/@popperjs/core/lib/utils/orderModifiers.js");
/* harmony import */ var _utils_debounce_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/debounce.js */ "./node_modules/@popperjs/core/lib/utils/debounce.js");
/* harmony import */ var _utils_validateModifiers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/validateModifiers.js */ "./node_modules/@popperjs/core/lib/utils/validateModifiers.js");
/* harmony import */ var _utils_uniqueBy_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/uniqueBy.js */ "./node_modules/@popperjs/core/lib/utils/uniqueBy.js");
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _utils_mergeByName_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/mergeByName.js */ "./node_modules/@popperjs/core/lib/utils/mergeByName.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/detectOverflow.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "detectOverflow", function() { return _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dom-utils/instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./enums.js */ "./node_modules/@popperjs/core/lib/enums.js");














var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(setOptionsAction) {
        var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: Object(_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_12__["isElement"])(reference) ? Object(_dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_2__["default"])(reference) : reference.contextElement ? Object(_dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_2__["default"])(reference.contextElement) : [],
          popper: Object(_dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_2__["default"])(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = Object(_utils_orderModifiers_js__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_utils_mergeByName_js__WEBPACK_IMPORTED_MODULE_10__["default"])([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned
        // if one of the modifiers is invalid for any reason

        if (true) {
          var modifiers = Object(_utils_uniqueBy_js__WEBPACK_IMPORTED_MODULE_8__["default"])([].concat(orderedModifiers, state.options.modifiers), function (_ref) {
            var name = _ref.name;
            return name;
          });
          Object(_utils_validateModifiers_js__WEBPACK_IMPORTED_MODULE_7__["default"])(modifiers);

          if (Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_9__["default"])(state.options.placement) === _enums_js__WEBPACK_IMPORTED_MODULE_13__["auto"]) {
            var flipModifier = state.orderedModifiers.find(function (_ref2) {
              var name = _ref2.name;
              return name === 'flip';
            });

            if (!flipModifier) {
              console.error(['Popper: "auto" placements require the "flip" modifier be', 'present and enabled to work.'].join(' '));
            }
          }

          var _getComputedStyle = Object(_dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_4__["default"])(popper),
              marginTop = _getComputedStyle.marginTop,
              marginRight = _getComputedStyle.marginRight,
              marginBottom = _getComputedStyle.marginBottom,
              marginLeft = _getComputedStyle.marginLeft; // We no longer take into account `margins` on the popper, and it can
          // cause bugs with positioning, so we'll warn the consumer


          if ([marginTop, marginRight, marginBottom, marginLeft].some(function (margin) {
            return parseFloat(margin);
          })) {
            console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', 'between the popper and its reference element or boundary.', 'To replicate margin, use the `offset` modifier, as well as', 'the `padding` option in the `preventOverflow` and `flip`', 'modifiers.'].join(' '));
          }
        }

        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {
          if (true) {
            console.error(INVALID_ELEMENT_ERROR);
          }

          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: Object(_dom_utils_getCompositeRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(reference, Object(_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_3__["default"])(popper), state.options.strategy === 'fixed'),
          popper: Object(_dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_1__["default"])(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;

        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (true) {
            __debug_loops__ += 1;

            if (__debug_loops__ > 100) {
              console.error(INFINITE_LOOP_ERROR);
              break;
            }
          }

          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Object(_utils_debounce_js__WEBPACK_IMPORTED_MODULE_6__["default"])(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {
      if (true) {
        console.error(INVALID_ELEMENT_ERROR);
      }

      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}
var createPopper = /*#__PURE__*/popperGenerator(); // eslint-disable-next-line import/no-unused-modules



/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/contains.js":
/*!***************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/contains.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return contains; });
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__["isShadowRoot"])(rootNode)) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe[prop-missing]: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getBoundingClientRect; });
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/math.js */ "./node_modules/@popperjs/core/lib/utils/math.js");
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _isLayoutViewport_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isLayoutViewport.js */ "./node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js");




function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }

  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }

  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;

  if (includeScale && Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__["isHTMLElement"])(element)) {
    scaleX = element.offsetWidth > 0 ? Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_1__["round"])(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_1__["round"])(clientRect.height) / element.offsetHeight || 1 : 1;
  }

  var _ref = Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__["isElement"])(element) ? Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element) : window,
      visualViewport = _ref.visualViewport;

  var addVisualOffsets = !Object(_isLayoutViewport_js__WEBPACK_IMPORTED_MODULE_3__["default"])() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width: width,
    height: height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x: x,
    y: y
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getClippingRect; });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _getViewportRect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getViewportRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js");
/* harmony import */ var _getDocumentRect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getDocumentRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js");
/* harmony import */ var _listScrollParents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listScrollParents.js */ "./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js");
/* harmony import */ var _getOffsetParent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getOffsetParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./getBoundingClientRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./getParentNode.js */ "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js");
/* harmony import */ var _contains_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contains.js */ "./node_modules/@popperjs/core/lib/dom-utils/contains.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _utils_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/rectToClientRect.js */ "./node_modules/@popperjs/core/lib/utils/rectToClientRect.js");
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/math.js */ "./node_modules/@popperjs/core/lib/utils/math.js");















function getInnerBoundingClientRect(element, strategy) {
  var rect = Object(_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_8__["default"])(element, false, strategy === 'fixed');
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === _enums_js__WEBPACK_IMPORTED_MODULE_0__["viewport"] ? Object(_utils_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_12__["default"])(Object(_getViewportRect_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element, strategy)) : Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_7__["isElement"])(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : Object(_utils_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_12__["default"])(Object(_getDocumentRect_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_5__["default"])(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = Object(_listScrollParents_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_getParentNode_js__WEBPACK_IMPORTED_MODULE_9__["default"])(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_6__["default"])(element).position) >= 0;
  var clipperElement = canEscapeClipping && Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_7__["isHTMLElement"])(element) ? Object(_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_4__["default"])(element) : element;

  if (!Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_7__["isElement"])(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_7__["isElement"])(clippingParent) && Object(_contains_js__WEBPACK_IMPORTED_MODULE_10__["default"])(clippingParent, clipperElement) && Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_11__["default"])(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_13__["max"])(rect.top, accRect.top);
    accRect.right = Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_13__["min"])(rect.right, accRect.right);
    accRect.bottom = Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_13__["min"])(rect.bottom, accRect.bottom);
    accRect.left = Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_13__["max"])(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getCompositeRect; });
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBoundingClientRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _getNodeScroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getNodeScroll.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getWindowScrollBarX.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _isScrollParent_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./isScrollParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js");
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/math.js */ "./node_modules/@popperjs/core/lib/utils/math.js");









function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_7__["round"])(rect.width) / element.offsetWidth || 1;
  var scaleY = Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_7__["round"])(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.


function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var isOffsetParentAnElement = Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_3__["isHTMLElement"])(offsetParent);
  var offsetParentIsScaled = Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_3__["isHTMLElement"])(offsetParent) && isElementScaled(offsetParent);
  var documentElement = Object(_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_5__["default"])(offsetParent);
  var rect = Object(_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_2__["default"])(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    Object(_isScrollParent_js__WEBPACK_IMPORTED_MODULE_6__["default"])(documentElement)) {
      scroll = Object(_getNodeScroll_js__WEBPACK_IMPORTED_MODULE_1__["default"])(offsetParent);
    }

    if (Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_3__["isHTMLElement"])(offsetParent)) {
      offsets = Object(_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = Object(_getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_4__["default"])(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getComputedStyle; });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");

function getComputedStyle(element) {
  return Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element).getComputedStyle(element);
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getDocumentElement; });
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return ((Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__["isElement"])(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getDocumentRect; });
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindowScrollBarX.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js");
/* harmony import */ var _getWindowScroll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getWindowScroll.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js");
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/math.js */ "./node_modules/@popperjs/core/lib/utils/math.js");




 // Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var _element$ownerDocumen;

  var html = Object(_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
  var winScroll = Object(_getWindowScroll_js__WEBPACK_IMPORTED_MODULE_3__["default"])(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_4__["max"])(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_4__["max"])(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + Object(_getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element);
  var y = -winScroll.scrollTop;

  if (Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__["default"])(body || html).direction === 'rtl') {
    x += Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_4__["max"])(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getHTMLElementScroll; });
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getLayoutRect; });
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBoundingClientRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
 // Returns the layout rect of an element relative to its offsetParent. Layout
// means it doesn't take into account transforms.

function getLayoutRect(element) {
  var clientRect = Object(_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;

  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }

  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }

  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js":
/*!******************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getNodeName; });
function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getNodeScroll; });
/* harmony import */ var _getWindowScroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindowScroll.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js");
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _getHTMLElementScroll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getHTMLElementScroll.js */ "./node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js");




function getNodeScroll(node) {
  if (node === Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_1__["default"])(node) || !Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_2__["isHTMLElement"])(node)) {
    return Object(_getWindowScroll_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node);
  } else {
    return Object(_getHTMLElementScroll_js__WEBPACK_IMPORTED_MODULE_3__["default"])(node);
  }
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getOffsetParent; });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _isTableElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isTableElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/isTableElement.js");
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getParentNode.js */ "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js");
/* harmony import */ var _utils_userAgent_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/userAgent.js */ "./node_modules/@popperjs/core/lib/utils/userAgent.js");








function getTrueOffsetParent(element) {
  if (!Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_3__["isHTMLElement"])(element) || // https://github.com/popperjs/popper-core/issues/837
  Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(Object(_utils_userAgent_js__WEBPACK_IMPORTED_MODULE_6__["default"])());
  var isIE = /Trident/i.test(Object(_utils_userAgent_js__WEBPACK_IMPORTED_MODULE_6__["default"])());

  if (isIE && Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_3__["isHTMLElement"])(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element);

    if (elementCss.position === 'fixed') {
      return null;
    }
  }

  var currentNode = Object(_getParentNode_js__WEBPACK_IMPORTED_MODULE_5__["default"])(element);

  if (Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_3__["isShadowRoot"])(currentNode)) {
    currentNode = currentNode.host;
  }

  while (Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_3__["isHTMLElement"])(currentNode) && ['html', 'body'].indexOf(Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_1__["default"])(currentNode)) < 0) {
    var css = Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_2__["default"])(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && Object(_isTableElement_js__WEBPACK_IMPORTED_MODULE_4__["default"])(offsetParent) && Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_2__["default"])(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && (Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_1__["default"])(offsetParent) === 'html' || Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_1__["default"])(offsetParent) === 'body' && Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_2__["default"])(offsetParent).position === 'static')) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getParentNode; });
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");



function getParentNode(element) {
  if (Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ( // DOM Element detected
    Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_2__["isShadowRoot"])(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Object(_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element) // fallback

  );
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getScrollParent; });
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getParentNode.js */ "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js");
/* harmony import */ var _isScrollParent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isScrollParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");




function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_2__["default"])(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if (Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_3__["isHTMLElement"])(node) && Object(_isScrollParent_js__WEBPACK_IMPORTED_MODULE_1__["default"])(node)) {
    return node;
  }

  return getScrollParent(Object(_getParentNode_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node));
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getViewportRect; });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindowScrollBarX.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js");
/* harmony import */ var _isLayoutViewport_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isLayoutViewport.js */ "./node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js");




function getViewportRect(element, strategy) {
  var win = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
  var html = Object(_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = Object(_isLayoutViewport_js__WEBPACK_IMPORTED_MODULE_3__["default"])();

    if (layoutViewport || !layoutViewport && strategy === 'fixed') {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + Object(_getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element),
    y: y
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js":
/*!****************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getWindow.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getWindow; });
function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getWindowScroll; });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");

function getWindowScroll(node) {
  var win = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getWindowScrollBarX; });
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBoundingClientRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _getWindowScroll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindowScroll.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js");



function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return Object(_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element)).left + Object(_getWindowScroll_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element).scrollLeft;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js ***!
  \*****************************************************************/
/*! exports provided: isElement, isHTMLElement, isShadowRoot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isElement", function() { return isElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHTMLElement", function() { return isHTMLElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isShadowRoot", function() { return isShadowRoot; });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");


function isElement(node) {
  var OwnElement = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}

function isHTMLElement(node) {
  var OwnElement = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}

function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  var OwnElement = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}



/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isLayoutViewport; });
/* harmony import */ var _utils_userAgent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/userAgent.js */ "./node_modules/@popperjs/core/lib/utils/userAgent.js");

function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(Object(_utils_userAgent_js__WEBPACK_IMPORTED_MODULE_0__["default"])());
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isScrollParent; });
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/isTableElement.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/isTableElement.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isTableElement; });
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element)) >= 0;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js":
/*!************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return listScrollParents; });
/* harmony import */ var _getScrollParent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getScrollParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js");
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getParentNode.js */ "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js");
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _isScrollParent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isScrollParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js");




/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/

function listScrollParents(element, list) {
  var _element$ownerDocumen;

  if (list === void 0) {
    list = [];
  }

  var scrollParent = Object(_getScrollParent_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_2__["default"])(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], Object(_isScrollParent_js__WEBPACK_IMPORTED_MODULE_3__["default"])(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents(Object(_getParentNode_js__WEBPACK_IMPORTED_MODULE_1__["default"])(target)));
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/enums.js":
/*!**************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/enums.js ***!
  \**************************************************/
/*! exports provided: top, bottom, right, left, auto, basePlacements, start, end, clippingParents, viewport, popper, reference, variationPlacements, placements, beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite, modifierPhases */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "top", function() { return top; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bottom", function() { return bottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "right", function() { return right; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "left", function() { return left; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auto", function() { return auto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basePlacements", function() { return basePlacements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return start; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "end", function() { return end; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clippingParents", function() { return clippingParents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewport", function() { return viewport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popper", function() { return popper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reference", function() { return reference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "variationPlacements", function() { return variationPlacements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "placements", function() { return placements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "beforeRead", function() { return beforeRead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "read", function() { return read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "afterRead", function() { return afterRead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "beforeMain", function() { return beforeMain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "main", function() { return main; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "afterMain", function() { return afterMain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "beforeWrite", function() { return beforeWrite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "write", function() { return write; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "afterWrite", function() { return afterWrite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modifierPhases", function() { return modifierPhases; });
var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/index.js ***!
  \**************************************************/
/*! exports provided: top, bottom, right, left, auto, basePlacements, start, end, clippingParents, viewport, popper, reference, variationPlacements, placements, beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite, modifierPhases, applyStyles, arrow, computeStyles, eventListeners, flip, hide, offset, popperOffsets, preventOverflow, popperGenerator, detectOverflow, createPopperBase, createPopper, createPopperLite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "top", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["top"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bottom", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["bottom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "right", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["right"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "left", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["left"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "auto", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["auto"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "basePlacements", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["basePlacements"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "start", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["start"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "end", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["end"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clippingParents", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["clippingParents"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "viewport", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["viewport"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "popper", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["popper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reference", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["reference"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "variationPlacements", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["variationPlacements"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "placements", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["placements"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "beforeRead", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["beforeRead"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "read", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["read"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "afterRead", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["afterRead"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "beforeMain", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["beforeMain"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "main", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["main"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "afterMain", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["afterMain"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "beforeWrite", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["beforeWrite"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "write", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["write"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "afterWrite", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["afterWrite"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "modifierPhases", function() { return _enums_js__WEBPACK_IMPORTED_MODULE_0__["modifierPhases"]; });

/* harmony import */ var _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifiers/index.js */ "./node_modules/@popperjs/core/lib/modifiers/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyStyles", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__["applyStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrow", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__["arrow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "computeStyles", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__["computeStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eventListeners", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__["eventListeners"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flip", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__["flip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hide", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__["hide"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offset", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__["offset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "popperOffsets", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__["popperOffsets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "preventOverflow", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__["preventOverflow"]; });

/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createPopper.js */ "./node_modules/@popperjs/core/lib/createPopper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "popperGenerator", function() { return _createPopper_js__WEBPACK_IMPORTED_MODULE_2__["popperGenerator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "detectOverflow", function() { return _createPopper_js__WEBPACK_IMPORTED_MODULE_2__["detectOverflow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPopperBase", function() { return _createPopper_js__WEBPACK_IMPORTED_MODULE_2__["createPopper"]; });

/* harmony import */ var _popper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popper.js */ "./node_modules/@popperjs/core/lib/popper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPopper", function() { return _popper_js__WEBPACK_IMPORTED_MODULE_3__["createPopper"]; });

/* harmony import */ var _popper_lite_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popper-lite.js */ "./node_modules/@popperjs/core/lib/popper-lite.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPopperLite", function() { return _popper_lite_js__WEBPACK_IMPORTED_MODULE_4__["createPopper"]; });


 // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules



/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/applyStyles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/applyStyles.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_utils_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom-utils/getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom-utils/instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");

 // This modifier takes the styles prepared by the `computeStyles` modifier
// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!Object(_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__["isHTMLElement"])(element) || !Object(_dom_utils_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!Object(_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__["isHTMLElement"])(element) || !Object(_dom_utils_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element)) {
        return;
      }

      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect,
  requires: ['computeStyles']
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/arrow.js":
/*!************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/arrow.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom-utils/getLayoutRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js");
/* harmony import */ var _dom_utils_contains_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom-utils/contains.js */ "./node_modules/@popperjs/core/lib/dom-utils/contains.js");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom-utils/getOffsetParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/getMainAxisFromPlacement.js */ "./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js");
/* harmony import */ var _utils_within_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/within.js */ "./node_modules/@popperjs/core/lib/utils/within.js");
/* harmony import */ var _utils_mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/mergePaddingObject.js */ "./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js");
/* harmony import */ var _utils_expandToHashMap_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/expandToHashMap.js */ "./node_modules/@popperjs/core/lib/utils/expandToHashMap.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../dom-utils/instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");









 // eslint-disable-next-line import/no-unused-modules

var toPaddingObject = function toPaddingObject(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return Object(_utils_mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_6__["default"])(typeof padding !== 'number' ? padding : Object(_utils_expandToHashMap_js__WEBPACK_IMPORTED_MODULE_7__["default"])(padding, _enums_js__WEBPACK_IMPORTED_MODULE_8__["basePlacements"]));
};

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name,
      options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(state.placement);
  var axis = Object(_utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_4__["default"])(basePlacement);
  var isVertical = [_enums_js__WEBPACK_IMPORTED_MODULE_8__["left"], _enums_js__WEBPACK_IMPORTED_MODULE_8__["right"]].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = Object(_dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arrowElement);
  var minProp = axis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_8__["top"] : _enums_js__WEBPACK_IMPORTED_MODULE_8__["left"];
  var maxProp = axis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_8__["bottom"] : _enums_js__WEBPACK_IMPORTED_MODULE_8__["right"];
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = Object(_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_3__["default"])(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = Object(_utils_within_js__WEBPACK_IMPORTED_MODULE_5__["within"])(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function effect(_ref2) {
  var state = _ref2.state,
      options = _ref2.options;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (true) {
    if (!Object(_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_9__["isHTMLElement"])(arrowElement)) {
      console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', 'To use an SVG arrow, wrap it in an HTMLElement that will be used as', 'the arrow.'].join(' '));
    }
  }

  if (!Object(_dom_utils_contains_js__WEBPACK_IMPORTED_MODULE_2__["default"])(state.elements.popper, arrowElement)) {
    if (true) {
      console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', 'element.'].join(' '));
    }

    return;
  }

  state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/computeStyles.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/computeStyles.js ***!
  \********************************************************************/
/*! exports provided: mapToStyles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapToStyles", function() { return mapToStyles; });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom-utils/getOffsetParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom-utils/getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom-utils/getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dom-utils/getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _utils_getVariation_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/getVariation.js */ "./node_modules/@popperjs/core/lib/utils/getVariation.js");
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/math.js */ "./node_modules/@popperjs/core/lib/utils/math.js");







 // eslint-disable-next-line import/no-unused-modules

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_7__["round"])(x * dpr) / dpr || 0,
    y: Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_7__["round"])(y * dpr) / dpr || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      variation = _ref2.variation,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets,
      isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x,
      x = _offsets$x === void 0 ? 0 : _offsets$x,
      _offsets$y = offsets.y,
      y = _offsets$y === void 0 ? 0 : _offsets$y;

  var _ref3 = typeof roundOffsets === 'function' ? roundOffsets({
    x: x,
    y: y
  }) : {
    x: x,
    y: y
  };

  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = _enums_js__WEBPACK_IMPORTED_MODULE_0__["left"];
  var sideY = _enums_js__WEBPACK_IMPORTED_MODULE_0__["top"];
  var win = window;

  if (adaptive) {
    var offsetParent = Object(_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_1__["default"])(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';

    if (offsetParent === Object(_dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_2__["default"])(popper)) {
      offsetParent = Object(_dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_3__["default"])(popper);

      if (Object(_dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_4__["default"])(offsetParent).position !== 'static' && position === 'absolute') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


    offsetParent = offsetParent;

    if (placement === _enums_js__WEBPACK_IMPORTED_MODULE_0__["top"] || (placement === _enums_js__WEBPACK_IMPORTED_MODULE_0__["left"] || placement === _enums_js__WEBPACK_IMPORTED_MODULE_0__["right"]) && variation === _enums_js__WEBPACK_IMPORTED_MODULE_0__["end"]) {
      sideY = _enums_js__WEBPACK_IMPORTED_MODULE_0__["bottom"];
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : // $FlowFixMe[prop-missing]
      offsetParent[heightProp];
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === _enums_js__WEBPACK_IMPORTED_MODULE_0__["left"] || (placement === _enums_js__WEBPACK_IMPORTED_MODULE_0__["top"] || placement === _enums_js__WEBPACK_IMPORTED_MODULE_0__["bottom"]) && variation === _enums_js__WEBPACK_IMPORTED_MODULE_0__["end"]) {
      sideX = _enums_js__WEBPACK_IMPORTED_MODULE_0__["right"];
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : // $FlowFixMe[prop-missing]
      offsetParent[widthProp];
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x: x,
    y: y
  }) : {
    x: x,
    y: y
  };

  x = _ref4.x;
  y = _ref4.y;

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref5) {
  var state = _ref5.state,
      options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

  if (true) {
    var transitionProperty = Object(_dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_4__["default"])(state.elements.popper).transitionProperty || '';

    if (adaptive && ['transform', 'top', 'right', 'bottom', 'left'].some(function (property) {
      return transitionProperty.indexOf(property) >= 0;
    })) {
      console.warn(['Popper: Detected CSS transitions on at least one of the following', 'CSS properties: "transform", "top", "right", "bottom", "left".', '\n\n', 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', 'for smooth transitions, or remove these properties from the CSS', 'transition declaration on the popper element if only transitioning', 'opacity or background-color for example.', '\n\n', 'We recommend using the popper element as a wrapper around an inner', 'element that can have any CSS property transitioned for animations.'].join(' '));
    }
  }

  var commonStyles = {
    placement: Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_5__["default"])(state.placement),
    variation: Object(_utils_getVariation_js__WEBPACK_IMPORTED_MODULE_6__["default"])(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration,
    isFixed: state.options.strategy === 'fixed'
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/eventListeners.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/eventListeners.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom-utils/getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
 // eslint-disable-next-line import/no-unused-modules

var passive = {
  passive: true
};

function effect(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = Object(_dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect,
  data: {}
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/flip.js":
/*!***********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/flip.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getOppositePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getOppositePlacement.js");
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _utils_getOppositeVariationPlacement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getOppositeVariationPlacement.js */ "./node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/detectOverflow.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _utils_computeAutoPlacement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/computeAutoPlacement.js */ "./node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _utils_getVariation_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/getVariation.js */ "./node_modules/@popperjs/core/lib/utils/getVariation.js");






 // eslint-disable-next-line import/no-unused-modules

function getExpandedFallbackPlacements(placement) {
  if (Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(placement) === _enums_js__WEBPACK_IMPORTED_MODULE_5__["auto"]) {
    return [];
  }

  var oppositePlacement = Object(_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement);
  return [Object(_utils_getOppositeVariationPlacement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(placement), oppositePlacement, Object(_utils_getOppositeVariationPlacement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [Object(_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(placement) === _enums_js__WEBPACK_IMPORTED_MODULE_5__["auto"] ? Object(_utils_computeAutoPlacement_js__WEBPACK_IMPORTED_MODULE_4__["default"])(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(placement);

    var isStartVariation = Object(_utils_getVariation_js__WEBPACK_IMPORTED_MODULE_6__["default"])(placement) === _enums_js__WEBPACK_IMPORTED_MODULE_5__["start"];
    var isVertical = [_enums_js__WEBPACK_IMPORTED_MODULE_5__["top"], _enums_js__WEBPACK_IMPORTED_MODULE_5__["bottom"]].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = Object(_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_3__["default"])(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? _enums_js__WEBPACK_IMPORTED_MODULE_5__["right"] : _enums_js__WEBPACK_IMPORTED_MODULE_5__["left"] : isStartVariation ? _enums_js__WEBPACK_IMPORTED_MODULE_5__["bottom"] : _enums_js__WEBPACK_IMPORTED_MODULE_5__["top"];

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = Object(_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(mainVariationSide);
    }

    var altVariationSide = Object(_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/hide.js":
/*!***********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/hide.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/detectOverflow.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");



function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [_enums_js__WEBPACK_IMPORTED_MODULE_0__["top"], _enums_js__WEBPACK_IMPORTED_MODULE_0__["right"], _enums_js__WEBPACK_IMPORTED_MODULE_0__["bottom"], _enums_js__WEBPACK_IMPORTED_MODULE_0__["left"]].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = Object(_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_1__["default"])(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = Object(_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_1__["default"])(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/index.js ***!
  \************************************************************/
/*! exports provided: applyStyles, arrow, computeStyles, eventListeners, flip, hide, offset, popperOffsets, preventOverflow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _applyStyles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./applyStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/applyStyles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyStyles", function() { return _applyStyles_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _arrow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arrow.js */ "./node_modules/@popperjs/core/lib/modifiers/arrow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrow", function() { return _arrow_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _computeStyles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./computeStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/computeStyles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "computeStyles", function() { return _computeStyles_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _eventListeners_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eventListeners.js */ "./node_modules/@popperjs/core/lib/modifiers/eventListeners.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eventListeners", function() { return _eventListeners_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _flip_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./flip.js */ "./node_modules/@popperjs/core/lib/modifiers/flip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flip", function() { return _flip_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _hide_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hide.js */ "./node_modules/@popperjs/core/lib/modifiers/hide.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hide", function() { return _hide_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _offset_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./offset.js */ "./node_modules/@popperjs/core/lib/modifiers/offset.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offset", function() { return _offset_js__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _popperOffsets_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./popperOffsets.js */ "./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "popperOffsets", function() { return _popperOffsets_js__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _preventOverflow_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./preventOverflow.js */ "./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "preventOverflow", function() { return _preventOverflow_js__WEBPACK_IMPORTED_MODULE_8__["default"]; });











/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/offset.js":
/*!*************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/offset.js ***!
  \*************************************************************/
/*! exports provided: distanceAndSkiddingToXY, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distanceAndSkiddingToXY", function() { return distanceAndSkiddingToXY; });
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");

 // eslint-disable-next-line import/no-unused-modules

function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement);
  var invertDistance = [_enums_js__WEBPACK_IMPORTED_MODULE_1__["left"], _enums_js__WEBPACK_IMPORTED_MODULE_1__["top"]].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [_enums_js__WEBPACK_IMPORTED_MODULE_1__["left"], _enums_js__WEBPACK_IMPORTED_MODULE_1__["right"]].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = _enums_js__WEBPACK_IMPORTED_MODULE_1__["placements"].reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_computeOffsets_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/computeOffsets.js */ "./node_modules/@popperjs/core/lib/utils/computeOffsets.js");


function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = Object(_utils_computeOffsets_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getMainAxisFromPlacement.js */ "./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js");
/* harmony import */ var _utils_getAltAxis_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getAltAxis.js */ "./node_modules/@popperjs/core/lib/utils/getAltAxis.js");
/* harmony import */ var _utils_within_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/within.js */ "./node_modules/@popperjs/core/lib/utils/within.js");
/* harmony import */ var _dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dom-utils/getLayoutRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom-utils/getOffsetParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/detectOverflow.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _utils_getVariation_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/getVariation.js */ "./node_modules/@popperjs/core/lib/utils/getVariation.js");
/* harmony import */ var _utils_getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/getFreshSideObject.js */ "./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js");
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/math.js */ "./node_modules/@popperjs/core/lib/utils/math.js");












function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = Object(_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_7__["default"])(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(state.placement);
  var variation = Object(_utils_getVariation_js__WEBPACK_IMPORTED_MODULE_8__["default"])(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = Object(_utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(basePlacement);
  var altAxis = Object(_utils_getAltAxis_js__WEBPACK_IMPORTED_MODULE_3__["default"])(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === 'number' ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis) {
    var _offsetModifierState$;

    var mainSide = mainAxis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_0__["top"] : _enums_js__WEBPACK_IMPORTED_MODULE_0__["left"];
    var altSide = mainAxis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_0__["bottom"] : _enums_js__WEBPACK_IMPORTED_MODULE_0__["right"];
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min = offset + overflow[mainSide];
    var max = offset - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === _enums_js__WEBPACK_IMPORTED_MODULE_0__["start"] ? referenceRect[len] : popperRect[len];
    var maxLen = variation === _enums_js__WEBPACK_IMPORTED_MODULE_0__["start"] ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? Object(_dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_5__["default"])(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : Object(_utils_getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_9__["default"])();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = Object(_utils_within_js__WEBPACK_IMPORTED_MODULE_4__["within"])(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && Object(_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_6__["default"])(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset + maxOffset - offsetModifierValue;
    var preventedOffset = Object(_utils_within_js__WEBPACK_IMPORTED_MODULE_4__["within"])(tether ? Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_10__["min"])(min, tetherMin) : min, offset, tether ? Object(_utils_math_js__WEBPACK_IMPORTED_MODULE_10__["max"])(max, tetherMax) : max);
    popperOffsets[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset;
  }

  if (checkAltAxis) {
    var _offsetModifierState$2;

    var _mainSide = mainAxis === 'x' ? _enums_js__WEBPACK_IMPORTED_MODULE_0__["top"] : _enums_js__WEBPACK_IMPORTED_MODULE_0__["left"];

    var _altSide = mainAxis === 'x' ? _enums_js__WEBPACK_IMPORTED_MODULE_0__["bottom"] : _enums_js__WEBPACK_IMPORTED_MODULE_0__["right"];

    var _offset = popperOffsets[altAxis];

    var _len = altAxis === 'y' ? 'height' : 'width';

    var _min = _offset + overflow[_mainSide];

    var _max = _offset - overflow[_altSide];

    var isOriginSide = [_enums_js__WEBPACK_IMPORTED_MODULE_0__["top"], _enums_js__WEBPACK_IMPORTED_MODULE_0__["left"]].indexOf(basePlacement) !== -1;

    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;

    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;

    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;

    var _preventedOffset = tether && isOriginSide ? Object(_utils_within_js__WEBPACK_IMPORTED_MODULE_4__["withinMaxClamp"])(_tetherMin, _offset, _tetherMax) : Object(_utils_within_js__WEBPACK_IMPORTED_MODULE_4__["within"])(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);

    popperOffsets[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/popper-lite.js":
/*!********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/popper-lite.js ***!
  \********************************************************/
/*! exports provided: createPopper, popperGenerator, defaultModifiers, detectOverflow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPopper", function() { return createPopper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultModifiers", function() { return defaultModifiers; });
/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createPopper.js */ "./node_modules/@popperjs/core/lib/createPopper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "popperGenerator", function() { return _createPopper_js__WEBPACK_IMPORTED_MODULE_0__["popperGenerator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "detectOverflow", function() { return _createPopper_js__WEBPACK_IMPORTED_MODULE_0__["detectOverflow"]; });

/* harmony import */ var _modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifiers/eventListeners.js */ "./node_modules/@popperjs/core/lib/modifiers/eventListeners.js");
/* harmony import */ var _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modifiers/popperOffsets.js */ "./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js");
/* harmony import */ var _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modifiers/computeStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/computeStyles.js");
/* harmony import */ var _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modifiers/applyStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/applyStyles.js");





var defaultModifiers = [_modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_1__["default"], _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_2__["default"], _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_3__["default"], _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_4__["default"]];
var createPopper = /*#__PURE__*/Object(_createPopper_js__WEBPACK_IMPORTED_MODULE_0__["popperGenerator"])({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules



/***/ }),

/***/ "./node_modules/@popperjs/core/lib/popper.js":
/*!***************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/popper.js ***!
  \***************************************************/
/*! exports provided: createPopper, popperGenerator, defaultModifiers, detectOverflow, createPopperLite, applyStyles, arrow, computeStyles, eventListeners, flip, hide, offset, popperOffsets, preventOverflow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPopper", function() { return createPopper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultModifiers", function() { return defaultModifiers; });
/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createPopper.js */ "./node_modules/@popperjs/core/lib/createPopper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "popperGenerator", function() { return _createPopper_js__WEBPACK_IMPORTED_MODULE_0__["popperGenerator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "detectOverflow", function() { return _createPopper_js__WEBPACK_IMPORTED_MODULE_0__["detectOverflow"]; });

/* harmony import */ var _modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifiers/eventListeners.js */ "./node_modules/@popperjs/core/lib/modifiers/eventListeners.js");
/* harmony import */ var _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modifiers/popperOffsets.js */ "./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js");
/* harmony import */ var _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modifiers/computeStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/computeStyles.js");
/* harmony import */ var _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modifiers/applyStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/applyStyles.js");
/* harmony import */ var _modifiers_offset_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modifiers/offset.js */ "./node_modules/@popperjs/core/lib/modifiers/offset.js");
/* harmony import */ var _modifiers_flip_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modifiers/flip.js */ "./node_modules/@popperjs/core/lib/modifiers/flip.js");
/* harmony import */ var _modifiers_preventOverflow_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modifiers/preventOverflow.js */ "./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js");
/* harmony import */ var _modifiers_arrow_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modifiers/arrow.js */ "./node_modules/@popperjs/core/lib/modifiers/arrow.js");
/* harmony import */ var _modifiers_hide_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modifiers/hide.js */ "./node_modules/@popperjs/core/lib/modifiers/hide.js");
/* harmony import */ var _popper_lite_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./popper-lite.js */ "./node_modules/@popperjs/core/lib/popper-lite.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPopperLite", function() { return _popper_lite_js__WEBPACK_IMPORTED_MODULE_10__["createPopper"]; });

/* harmony import */ var _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modifiers/index.js */ "./node_modules/@popperjs/core/lib/modifiers/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyStyles", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__["applyStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrow", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__["arrow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "computeStyles", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__["computeStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eventListeners", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__["eventListeners"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flip", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__["flip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hide", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__["hide"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offset", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__["offset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "popperOffsets", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__["popperOffsets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "preventOverflow", function() { return _modifiers_index_js__WEBPACK_IMPORTED_MODULE_11__["preventOverflow"]; });











var defaultModifiers = [_modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_1__["default"], _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_2__["default"], _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_3__["default"], _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_4__["default"], _modifiers_offset_js__WEBPACK_IMPORTED_MODULE_5__["default"], _modifiers_flip_js__WEBPACK_IMPORTED_MODULE_6__["default"], _modifiers_preventOverflow_js__WEBPACK_IMPORTED_MODULE_7__["default"], _modifiers_arrow_js__WEBPACK_IMPORTED_MODULE_8__["default"], _modifiers_hide_js__WEBPACK_IMPORTED_MODULE_9__["default"]];
var createPopper = /*#__PURE__*/Object(_createPopper_js__WEBPACK_IMPORTED_MODULE_0__["popperGenerator"])({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules



/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return computeAutoPlacement; });
/* harmony import */ var _getVariation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getVariation.js */ "./node_modules/@popperjs/core/lib/utils/getVariation.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _detectOverflow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detectOverflow.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _getBasePlacement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");




function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_1__["placements"] : _options$allowedAutoP;
  var variation = Object(_getVariation_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement);
  var placements = variation ? flipVariations ? _enums_js__WEBPACK_IMPORTED_MODULE_1__["variationPlacements"] : _enums_js__WEBPACK_IMPORTED_MODULE_1__["variationPlacements"].filter(function (placement) {
    return Object(_getVariation_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement) === variation;
  }) : _enums_js__WEBPACK_IMPORTED_MODULE_1__["basePlacements"];
  var allowedPlacements = placements.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements;

    if (true) {
      console.error(['Popper: The `allowedAutoPlacements` option did not allow any', 'placements. Ensure the `placement` option matches the variation', 'of the allowed placements.', 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(' '));
    }
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = Object(_detectOverflow_js__WEBPACK_IMPORTED_MODULE_2__["default"])(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[Object(_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_3__["default"])(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/computeOffsets.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/computeOffsets.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return computeOffsets; });
/* harmony import */ var _getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _getVariation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getVariation.js */ "./node_modules/@popperjs/core/lib/utils/getVariation.js");
/* harmony import */ var _getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getMainAxisFromPlacement.js */ "./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");




function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? Object(_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement) : null;
  var variation = placement ? Object(_getVariation_js__WEBPACK_IMPORTED_MODULE_1__["default"])(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case _enums_js__WEBPACK_IMPORTED_MODULE_3__["top"]:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case _enums_js__WEBPACK_IMPORTED_MODULE_3__["bottom"]:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case _enums_js__WEBPACK_IMPORTED_MODULE_3__["right"]:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case _enums_js__WEBPACK_IMPORTED_MODULE_3__["left"]:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? Object(_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case _enums_js__WEBPACK_IMPORTED_MODULE_3__["start"]:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case _enums_js__WEBPACK_IMPORTED_MODULE_3__["end"]:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;

      default:
    }
  }

  return offsets;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/debounce.js":
/*!***********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/debounce.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return debounce; });
function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/detectOverflow.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return detectOverflow; });
/* harmony import */ var _dom_utils_getClippingRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom-utils/getClippingRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js");
/* harmony import */ var _dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom-utils/getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _dom_utils_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom-utils/getBoundingClientRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _computeOffsets_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./computeOffsets.js */ "./node_modules/@popperjs/core/lib/utils/computeOffsets.js");
/* harmony import */ var _rectToClientRect_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rectToClientRect.js */ "./node_modules/@popperjs/core/lib/utils/rectToClientRect.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom-utils/instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mergePaddingObject.js */ "./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js");
/* harmony import */ var _expandToHashMap_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./expandToHashMap.js */ "./node_modules/@popperjs/core/lib/utils/expandToHashMap.js");








 // eslint-disable-next-line import/no-unused-modules

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$strategy = _options.strategy,
      strategy = _options$strategy === void 0 ? state.strategy : _options$strategy,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_5__["clippingParents"] : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_5__["viewport"] : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_5__["popper"] : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = Object(_mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_7__["default"])(typeof padding !== 'number' ? padding : Object(_expandToHashMap_js__WEBPACK_IMPORTED_MODULE_8__["default"])(padding, _enums_js__WEBPACK_IMPORTED_MODULE_5__["basePlacements"]));
  var altContext = elementContext === _enums_js__WEBPACK_IMPORTED_MODULE_5__["popper"] ? _enums_js__WEBPACK_IMPORTED_MODULE_5__["reference"] : _enums_js__WEBPACK_IMPORTED_MODULE_5__["popper"];
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = Object(_dom_utils_getClippingRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_6__["isElement"])(element) ? element : element.contextElement || Object(_dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = Object(_dom_utils_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_2__["default"])(state.elements.reference);
  var popperOffsets = Object(_computeOffsets_js__WEBPACK_IMPORTED_MODULE_3__["default"])({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = Object(_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_4__["default"])(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === _enums_js__WEBPACK_IMPORTED_MODULE_5__["popper"] ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === _enums_js__WEBPACK_IMPORTED_MODULE_5__["popper"] && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [_enums_js__WEBPACK_IMPORTED_MODULE_5__["right"], _enums_js__WEBPACK_IMPORTED_MODULE_5__["bottom"]].indexOf(key) >= 0 ? 1 : -1;
      var axis = [_enums_js__WEBPACK_IMPORTED_MODULE_5__["top"], _enums_js__WEBPACK_IMPORTED_MODULE_5__["bottom"]].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/expandToHashMap.js":
/*!******************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/expandToHashMap.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return expandToHashMap; });
function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/format.js":
/*!*********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/format.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return format; });
function format(str) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return [].concat(args).reduce(function (p, c) {
    return p.replace(/%s/, c);
  }, str);
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getAltAxis.js":
/*!*************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getAltAxis.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getAltAxis; });
function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getBasePlacement.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getBasePlacement; });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");

function getBasePlacement(placement) {
  return placement.split('-')[0];
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getFreshSideObject; });
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getMainAxisFromPlacement; });
function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getOppositePlacement.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getOppositePlacement.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getOppositePlacement; });
var hash = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getOppositeVariationPlacement; });
var hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash[matched];
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getVariation.js":
/*!***************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getVariation.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getVariation; });
function getVariation(placement) {
  return placement.split('-')[1];
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/math.js":
/*!*******************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/math.js ***!
  \*******************************************************/
/*! exports provided: max, min, round */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "round", function() { return round; });
var max = Math.max;
var min = Math.min;
var round = Math.round;

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/mergeByName.js":
/*!**************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/mergeByName.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mergeByName; });
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mergePaddingObject; });
/* harmony import */ var _getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getFreshSideObject.js */ "./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js");

function mergePaddingObject(paddingObject) {
  return Object.assign({}, Object(_getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(), paddingObject);
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/orderModifiers.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/orderModifiers.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return orderModifiers; });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
 // source: https://stackoverflow.com/questions/49875255

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return _enums_js__WEBPACK_IMPORTED_MODULE_0__["modifierPhases"].reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/rectToClientRect.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/rectToClientRect.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rectToClientRect; });
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/uniqueBy.js":
/*!***********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/uniqueBy.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return uniqueBy; });
function uniqueBy(arr, fn) {
  var identifiers = new Set();
  return arr.filter(function (item) {
    var identifier = fn(item);

    if (!identifiers.has(identifier)) {
      identifiers.add(identifier);
      return true;
    }
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/userAgent.js":
/*!************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/userAgent.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getUAString; });
function getUAString() {
  var uaData = navigator.userAgentData;

  if (uaData != null && uaData.brands) {
    return uaData.brands.map(function (item) {
      return item.brand + "/" + item.version;
    }).join(' ');
  }

  return navigator.userAgent;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/validateModifiers.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/validateModifiers.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return validateModifiers; });
/* harmony import */ var _format_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./format.js */ "./node_modules/@popperjs/core/lib/utils/format.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");


var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var VALID_PROPERTIES = ['name', 'enabled', 'phase', 'fn', 'effect', 'requires', 'options'];
function validateModifiers(modifiers) {
  modifiers.forEach(function (modifier) {
    [].concat(Object.keys(modifier), VALID_PROPERTIES) // IE11-compatible replacement for `new Set(iterable)`
    .filter(function (value, index, self) {
      return self.indexOf(value) === index;
    }).forEach(function (key) {
      switch (key) {
        case 'name':
          if (typeof modifier.name !== 'string') {
            console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', "\"" + String(modifier.name) + "\""));
          }

          break;

        case 'enabled':
          if (typeof modifier.enabled !== 'boolean') {
            console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', "\"" + String(modifier.enabled) + "\""));
          }

          break;

        case 'phase':
          if (_enums_js__WEBPACK_IMPORTED_MODULE_1__["modifierPhases"].indexOf(modifier.phase) < 0) {
            console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + _enums_js__WEBPACK_IMPORTED_MODULE_1__["modifierPhases"].join(', '), "\"" + String(modifier.phase) + "\""));
          }

          break;

        case 'fn':
          if (typeof modifier.fn !== 'function') {
            console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'effect':
          if (modifier.effect != null && typeof modifier.effect !== 'function') {
            console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'requires':
          if (modifier.requires != null && !Array.isArray(modifier.requires)) {
            console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', "\"" + String(modifier.requires) + "\""));
          }

          break;

        case 'requiresIfExists':
          if (!Array.isArray(modifier.requiresIfExists)) {
            console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', "\"" + String(modifier.requiresIfExists) + "\""));
          }

          break;

        case 'options':
        case 'data':
          break;

        default:
          console.error("PopperJS: an invalid property has been provided to the \"" + modifier.name + "\" modifier, valid properties are " + VALID_PROPERTIES.map(function (s) {
            return "\"" + s + "\"";
          }).join(', ') + "; but \"" + key + "\" was provided.");
      }

      modifier.requires && modifier.requires.forEach(function (requirement) {
        if (modifiers.find(function (mod) {
          return mod.name === requirement;
        }) == null) {
          console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
        }
      });
    });
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/within.js":
/*!*********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/within.js ***!
  \*********************************************************/
/*! exports provided: within, withinMaxClamp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "within", function() { return within; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withinMaxClamp", function() { return withinMaxClamp; });
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math.js */ "./node_modules/@popperjs/core/lib/utils/math.js");

function within(min, value, max) {
  return Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["max"])(min, Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["min"])(value, max));
}
function withinMaxClamp(min, value, max) {
  var v = within(min, value, max);
  return v > max ? max : v;
}

/***/ }),

/***/ "./node_modules/bootstrap/js/dist/base-component.js":
/*!**********************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/base-component.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
  * Bootstrap base-component.js v5.2.2 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! ./dom/data */ "./node_modules/bootstrap/js/dist/dom/data.js"), __webpack_require__(/*! ./util/index */ "./node_modules/bootstrap/js/dist/util/index.js"), __webpack_require__(/*! ./dom/event-handler */ "./node_modules/bootstrap/js/dist/dom/event-handler.js"), __webpack_require__(/*! ./util/config */ "./node_modules/bootstrap/js/dist/util/config.js")) :
  undefined;
})(this, (function (Data, index, EventHandler, Config) { 'use strict';

  const _interopDefaultLegacy = e => e && typeof e === 'object' && 'default' in e ? e : { default: e };

  const Data__default = /*#__PURE__*/_interopDefaultLegacy(Data);
  const EventHandler__default = /*#__PURE__*/_interopDefaultLegacy(EventHandler);
  const Config__default = /*#__PURE__*/_interopDefaultLegacy(Config);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.2): base-component.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  const VERSION = '5.2.2';
  /**
   * Class definition
   */

  class BaseComponent extends Config__default.default {
    constructor(element, config) {
      super();
      element = index.getElement(element);

      if (!element) {
        return;
      }

      this._element = element;
      this._config = this._getConfig(config);
      Data__default.default.set(this._element, this.constructor.DATA_KEY, this);
    } // Public


    dispose() {
      Data__default.default.remove(this._element, this.constructor.DATA_KEY);
      EventHandler__default.default.off(this._element, this.constructor.EVENT_KEY);

      for (const propertyName of Object.getOwnPropertyNames(this)) {
        this[propertyName] = null;
      }
    }

    _queueCallback(callback, element, isAnimated = true) {
      index.executeAfterTransition(callback, element, isAnimated);
    }

    _getConfig(config) {
      config = this._mergeConfigObj(config, this._element);
      config = this._configAfterMerge(config);

      this._typeCheckConfig(config);

      return config;
    } // Static


    static getInstance(element) {
      return Data__default.default.get(index.getElement(element), this.DATA_KEY);
    }

    static getOrCreateInstance(element, config = {}) {
      return this.getInstance(element) || new this(element, typeof config === 'object' ? config : null);
    }

    static get VERSION() {
      return VERSION;
    }

    static get DATA_KEY() {
      return `bs.${this.NAME}`;
    }

    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`;
    }

    static eventName(name) {
      return `${name}${this.EVENT_KEY}`;
    }

  }

  return BaseComponent;

}));
//# sourceMappingURL=base-component.js.map


/***/ }),

/***/ "./node_modules/bootstrap/js/dist/dom/data.js":
/*!****************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/dom/data.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
  * Bootstrap data.js v5.2.2 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory() :
  undefined;
})(this, (function () { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.2): dom/data.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * Constants
   */
  const elementMap = new Map();
  const data = {
    set(element, key, instance) {
      if (!elementMap.has(element)) {
        elementMap.set(element, new Map());
      }

      const instanceMap = elementMap.get(element); // make it clear we only want one instance per element
      // can be removed later when multiple key/instances are fine to be used

      if (!instanceMap.has(key) && instanceMap.size !== 0) {
        // eslint-disable-next-line no-console
        console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
        return;
      }

      instanceMap.set(key, instance);
    },

    get(element, key) {
      if (elementMap.has(element)) {
        return elementMap.get(element).get(key) || null;
      }

      return null;
    },

    remove(element, key) {
      if (!elementMap.has(element)) {
        return;
      }

      const instanceMap = elementMap.get(element);
      instanceMap.delete(key); // free up element references if there are no instances left for an element

      if (instanceMap.size === 0) {
        elementMap.delete(element);
      }
    }

  };

  return data;

}));
//# sourceMappingURL=data.js.map


/***/ }),

/***/ "./node_modules/bootstrap/js/dist/dom/event-handler.js":
/*!*************************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/dom/event-handler.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
  * Bootstrap event-handler.js v5.2.2 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! ../util/index */ "./node_modules/bootstrap/js/dist/util/index.js")) :
  undefined;
})(this, (function (index) { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.2): dom/event-handler.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  const namespaceRegex = /[^.]*(?=\..*)\.|.*/;
  const stripNameRegex = /\..*/;
  const stripUidRegex = /::\d+$/;
  const eventRegistry = {}; // Events storage

  let uidEvent = 1;
  const customEvents = {
    mouseenter: 'mouseover',
    mouseleave: 'mouseout'
  };
  const nativeEvents = new Set(['click', 'dblclick', 'mouseup', 'mousedown', 'contextmenu', 'mousewheel', 'DOMMouseScroll', 'mouseover', 'mouseout', 'mousemove', 'selectstart', 'selectend', 'keydown', 'keypress', 'keyup', 'orientationchange', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'pointerdown', 'pointermove', 'pointerup', 'pointerleave', 'pointercancel', 'gesturestart', 'gesturechange', 'gestureend', 'focus', 'blur', 'change', 'reset', 'select', 'submit', 'focusin', 'focusout', 'load', 'unload', 'beforeunload', 'resize', 'move', 'DOMContentLoaded', 'readystatechange', 'error', 'abort', 'scroll']);
  /**
   * Private methods
   */

  function makeEventUid(element, uid) {
    return uid && `${uid}::${uidEvent++}` || element.uidEvent || uidEvent++;
  }

  function getElementEvents(element) {
    const uid = makeEventUid(element);
    element.uidEvent = uid;
    eventRegistry[uid] = eventRegistry[uid] || {};
    return eventRegistry[uid];
  }

  function bootstrapHandler(element, fn) {
    return function handler(event) {
      hydrateObj(event, {
        delegateTarget: element
      });

      if (handler.oneOff) {
        EventHandler.off(element, event.type, fn);
      }

      return fn.apply(element, [event]);
    };
  }

  function bootstrapDelegationHandler(element, selector, fn) {
    return function handler(event) {
      const domElements = element.querySelectorAll(selector);

      for (let {
        target
      } = event; target && target !== this; target = target.parentNode) {
        for (const domElement of domElements) {
          if (domElement !== target) {
            continue;
          }

          hydrateObj(event, {
            delegateTarget: target
          });

          if (handler.oneOff) {
            EventHandler.off(element, event.type, selector, fn);
          }

          return fn.apply(target, [event]);
        }
      }
    };
  }

  function findHandler(events, callable, delegationSelector = null) {
    return Object.values(events).find(event => event.callable === callable && event.delegationSelector === delegationSelector);
  }

  function normalizeParameters(originalTypeEvent, handler, delegationFunction) {
    const isDelegated = typeof handler === 'string'; // todo: tooltip passes `false` instead of selector, so we need to check

    const callable = isDelegated ? delegationFunction : handler || delegationFunction;
    let typeEvent = getTypeEvent(originalTypeEvent);

    if (!nativeEvents.has(typeEvent)) {
      typeEvent = originalTypeEvent;
    }

    return [isDelegated, callable, typeEvent];
  }

  function addHandler(element, originalTypeEvent, handler, delegationFunction, oneOff) {
    if (typeof originalTypeEvent !== 'string' || !element) {
      return;
    }

    let [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction); // in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position
    // this prevents the handler from being dispatched the same way as mouseover or mouseout does

    if (originalTypeEvent in customEvents) {
      const wrapFunction = fn => {
        return function (event) {
          if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {
            return fn.call(this, event);
          }
        };
      };

      callable = wrapFunction(callable);
    }

    const events = getElementEvents(element);
    const handlers = events[typeEvent] || (events[typeEvent] = {});
    const previousFunction = findHandler(handlers, callable, isDelegated ? handler : null);

    if (previousFunction) {
      previousFunction.oneOff = previousFunction.oneOff && oneOff;
      return;
    }

    const uid = makeEventUid(callable, originalTypeEvent.replace(namespaceRegex, ''));
    const fn = isDelegated ? bootstrapDelegationHandler(element, handler, callable) : bootstrapHandler(element, callable);
    fn.delegationSelector = isDelegated ? handler : null;
    fn.callable = callable;
    fn.oneOff = oneOff;
    fn.uidEvent = uid;
    handlers[uid] = fn;
    element.addEventListener(typeEvent, fn, isDelegated);
  }

  function removeHandler(element, events, typeEvent, handler, delegationSelector) {
    const fn = findHandler(events[typeEvent], handler, delegationSelector);

    if (!fn) {
      return;
    }

    element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
    delete events[typeEvent][fn.uidEvent];
  }

  function removeNamespacedHandlers(element, events, typeEvent, namespace) {
    const storeElementEvent = events[typeEvent] || {};

    for (const handlerKey of Object.keys(storeElementEvent)) {
      if (handlerKey.includes(namespace)) {
        const event = storeElementEvent[handlerKey];
        removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
      }
    }
  }

  function getTypeEvent(event) {
    // allow to get the native events from namespaced events ('click.bs.button' --> 'click')
    event = event.replace(stripNameRegex, '');
    return customEvents[event] || event;
  }

  const EventHandler = {
    on(element, event, handler, delegationFunction) {
      addHandler(element, event, handler, delegationFunction, false);
    },

    one(element, event, handler, delegationFunction) {
      addHandler(element, event, handler, delegationFunction, true);
    },

    off(element, originalTypeEvent, handler, delegationFunction) {
      if (typeof originalTypeEvent !== 'string' || !element) {
        return;
      }

      const [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
      const inNamespace = typeEvent !== originalTypeEvent;
      const events = getElementEvents(element);
      const storeElementEvent = events[typeEvent] || {};
      const isNamespace = originalTypeEvent.startsWith('.');

      if (typeof callable !== 'undefined') {
        // Simplest case: handler is passed, remove that listener ONLY.
        if (!Object.keys(storeElementEvent).length) {
          return;
        }

        removeHandler(element, events, typeEvent, callable, isDelegated ? handler : null);
        return;
      }

      if (isNamespace) {
        for (const elementEvent of Object.keys(events)) {
          removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
        }
      }

      for (const keyHandlers of Object.keys(storeElementEvent)) {
        const handlerKey = keyHandlers.replace(stripUidRegex, '');

        if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
          const event = storeElementEvent[keyHandlers];
          removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
        }
      }
    },

    trigger(element, event, args) {
      if (typeof event !== 'string' || !element) {
        return null;
      }

      const $ = index.getjQuery();
      const typeEvent = getTypeEvent(event);
      const inNamespace = event !== typeEvent;
      let jQueryEvent = null;
      let bubbles = true;
      let nativeDispatch = true;
      let defaultPrevented = false;

      if (inNamespace && $) {
        jQueryEvent = $.Event(event, args);
        $(element).trigger(jQueryEvent);
        bubbles = !jQueryEvent.isPropagationStopped();
        nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
        defaultPrevented = jQueryEvent.isDefaultPrevented();
      }

      let evt = new Event(event, {
        bubbles,
        cancelable: true
      });
      evt = hydrateObj(evt, args);

      if (defaultPrevented) {
        evt.preventDefault();
      }

      if (nativeDispatch) {
        element.dispatchEvent(evt);
      }

      if (evt.defaultPrevented && jQueryEvent) {
        jQueryEvent.preventDefault();
      }

      return evt;
    }

  };

  function hydrateObj(obj, meta) {
    for (const [key, value] of Object.entries(meta || {})) {
      try {
        obj[key] = value;
      } catch (_unused) {
        Object.defineProperty(obj, key, {
          configurable: true,

          get() {
            return value;
          }

        });
      }
    }

    return obj;
  }

  return EventHandler;

}));
//# sourceMappingURL=event-handler.js.map


/***/ }),

/***/ "./node_modules/bootstrap/js/dist/dom/manipulator.js":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/dom/manipulator.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
  * Bootstrap manipulator.js v5.2.2 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory() :
  undefined;
})(this, (function () { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.2): dom/manipulator.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  function normalizeData(value) {
    if (value === 'true') {
      return true;
    }

    if (value === 'false') {
      return false;
    }

    if (value === Number(value).toString()) {
      return Number(value);
    }

    if (value === '' || value === 'null') {
      return null;
    }

    if (typeof value !== 'string') {
      return value;
    }

    try {
      return JSON.parse(decodeURIComponent(value));
    } catch (_unused) {
      return value;
    }
  }

  function normalizeDataKey(key) {
    return key.replace(/[A-Z]/g, chr => `-${chr.toLowerCase()}`);
  }

  const Manipulator = {
    setDataAttribute(element, key, value) {
      element.setAttribute(`data-bs-${normalizeDataKey(key)}`, value);
    },

    removeDataAttribute(element, key) {
      element.removeAttribute(`data-bs-${normalizeDataKey(key)}`);
    },

    getDataAttributes(element) {
      if (!element) {
        return {};
      }

      const attributes = {};
      const bsKeys = Object.keys(element.dataset).filter(key => key.startsWith('bs') && !key.startsWith('bsConfig'));

      for (const key of bsKeys) {
        let pureKey = key.replace(/^bs/, '');
        pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
        attributes[pureKey] = normalizeData(element.dataset[key]);
      }

      return attributes;
    },

    getDataAttribute(element, key) {
      return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`));
    }

  };

  return Manipulator;

}));
//# sourceMappingURL=manipulator.js.map


/***/ }),

/***/ "./node_modules/bootstrap/js/dist/dom/selector-engine.js":
/*!***************************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/dom/selector-engine.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
  * Bootstrap selector-engine.js v5.2.2 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! ../util/index */ "./node_modules/bootstrap/js/dist/util/index.js")) :
  undefined;
})(this, (function (index) { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.2): dom/selector-engine.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  const SelectorEngine = {
    find(selector, element = document.documentElement) {
      return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
    },

    findOne(selector, element = document.documentElement) {
      return Element.prototype.querySelector.call(element, selector);
    },

    children(element, selector) {
      return [].concat(...element.children).filter(child => child.matches(selector));
    },

    parents(element, selector) {
      const parents = [];
      let ancestor = element.parentNode.closest(selector);

      while (ancestor) {
        parents.push(ancestor);
        ancestor = ancestor.parentNode.closest(selector);
      }

      return parents;
    },

    prev(element, selector) {
      let previous = element.previousElementSibling;

      while (previous) {
        if (previous.matches(selector)) {
          return [previous];
        }

        previous = previous.previousElementSibling;
      }

      return [];
    },

    // TODO: this is now unused; remove later along with prev()
    next(element, selector) {
      let next = element.nextElementSibling;

      while (next) {
        if (next.matches(selector)) {
          return [next];
        }

        next = next.nextElementSibling;
      }

      return [];
    },

    focusableChildren(element) {
      const focusables = ['a', 'button', 'input', 'textarea', 'select', 'details', '[tabindex]', '[contenteditable="true"]'].map(selector => `${selector}:not([tabindex^="-"])`).join(',');
      return this.find(focusables, element).filter(el => !index.isDisabled(el) && index.isVisible(el));
    }

  };

  return SelectorEngine;

}));
//# sourceMappingURL=selector-engine.js.map


/***/ }),

/***/ "./node_modules/bootstrap/js/dist/tooltip.js":
/*!***************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/tooltip.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
  * Bootstrap tooltip.js v5.2.2 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! @popperjs/core */ "./node_modules/@popperjs/core/lib/index.js"), __webpack_require__(/*! ./util/index */ "./node_modules/bootstrap/js/dist/util/index.js"), __webpack_require__(/*! ./util/sanitizer */ "./node_modules/bootstrap/js/dist/util/sanitizer.js"), __webpack_require__(/*! ./dom/event-handler */ "./node_modules/bootstrap/js/dist/dom/event-handler.js"), __webpack_require__(/*! ./dom/manipulator */ "./node_modules/bootstrap/js/dist/dom/manipulator.js"), __webpack_require__(/*! ./base-component */ "./node_modules/bootstrap/js/dist/base-component.js"), __webpack_require__(/*! ./util/template-factory */ "./node_modules/bootstrap/js/dist/util/template-factory.js")) :
  undefined;
})(this, (function (Popper, index, sanitizer, EventHandler, Manipulator, BaseComponent, TemplateFactory) { 'use strict';

  const _interopDefaultLegacy = e => e && typeof e === 'object' && 'default' in e ? e : { default: e };

  function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    const n = Object.create(null, { [Symbol.toStringTag]: { value: 'Module' } });
    if (e) {
      for (const k in e) {
        if (k !== 'default') {
          const d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: () => e[k]
          });
        }
      }
    }
    n.default = e;
    return Object.freeze(n);
  }

  const Popper__namespace = /*#__PURE__*/_interopNamespace(Popper);
  const EventHandler__default = /*#__PURE__*/_interopDefaultLegacy(EventHandler);
  const Manipulator__default = /*#__PURE__*/_interopDefaultLegacy(Manipulator);
  const BaseComponent__default = /*#__PURE__*/_interopDefaultLegacy(BaseComponent);
  const TemplateFactory__default = /*#__PURE__*/_interopDefaultLegacy(TemplateFactory);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.2): tooltip.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  const NAME = 'tooltip';
  const DISALLOWED_ATTRIBUTES = new Set(['sanitize', 'allowList', 'sanitizeFn']);
  const CLASS_NAME_FADE = 'fade';
  const CLASS_NAME_MODAL = 'modal';
  const CLASS_NAME_SHOW = 'show';
  const SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
  const SELECTOR_MODAL = `.${CLASS_NAME_MODAL}`;
  const EVENT_MODAL_HIDE = 'hide.bs.modal';
  const TRIGGER_HOVER = 'hover';
  const TRIGGER_FOCUS = 'focus';
  const TRIGGER_CLICK = 'click';
  const TRIGGER_MANUAL = 'manual';
  const EVENT_HIDE = 'hide';
  const EVENT_HIDDEN = 'hidden';
  const EVENT_SHOW = 'show';
  const EVENT_SHOWN = 'shown';
  const EVENT_INSERTED = 'inserted';
  const EVENT_CLICK = 'click';
  const EVENT_FOCUSIN = 'focusin';
  const EVENT_FOCUSOUT = 'focusout';
  const EVENT_MOUSEENTER = 'mouseenter';
  const EVENT_MOUSELEAVE = 'mouseleave';
  const AttachmentMap = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: index.isRTL() ? 'left' : 'right',
    BOTTOM: 'bottom',
    LEFT: index.isRTL() ? 'right' : 'left'
  };
  const Default = {
    allowList: sanitizer.DefaultAllowlist,
    animation: true,
    boundary: 'clippingParents',
    container: false,
    customClass: '',
    delay: 0,
    fallbackPlacements: ['top', 'right', 'bottom', 'left'],
    html: false,
    offset: [0, 0],
    placement: 'top',
    popperConfig: null,
    sanitize: true,
    sanitizeFn: null,
    selector: false,
    template: '<div class="tooltip" role="tooltip">' + '<div class="tooltip-arrow"></div>' + '<div class="tooltip-inner"></div>' + '</div>',
    title: '',
    trigger: 'hover focus'
  };
  const DefaultType = {
    allowList: 'object',
    animation: 'boolean',
    boundary: '(string|element)',
    container: '(string|element|boolean)',
    customClass: '(string|function)',
    delay: '(number|object)',
    fallbackPlacements: 'array',
    html: 'boolean',
    offset: '(array|string|function)',
    placement: '(string|function)',
    popperConfig: '(null|object|function)',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    selector: '(string|boolean)',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string'
  };
  /**
   * Class definition
   */

  class Tooltip extends BaseComponent__default.default {
    constructor(element, config) {
      if (typeof Popper__namespace === 'undefined') {
        throw new TypeError('Bootstrap\'s tooltips require Popper (https://popper.js.org)');
      }

      super(element, config); // Private

      this._isEnabled = true;
      this._timeout = 0;
      this._isHovered = null;
      this._activeTrigger = {};
      this._popper = null;
      this._templateFactory = null;
      this._newContent = null; // Protected

      this.tip = null;

      this._setListeners();

      if (!this._config.selector) {
        this._fixTitle();
      }
    } // Getters


    static get Default() {
      return Default;
    }

    static get DefaultType() {
      return DefaultType;
    }

    static get NAME() {
      return NAME;
    } // Public


    enable() {
      this._isEnabled = true;
    }

    disable() {
      this._isEnabled = false;
    }

    toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }

    toggle() {
      if (!this._isEnabled) {
        return;
      }

      this._activeTrigger.click = !this._activeTrigger.click;

      if (this._isShown()) {
        this._leave();

        return;
      }

      this._enter();
    }

    dispose() {
      clearTimeout(this._timeout);
      EventHandler__default.default.off(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);

      if (this.tip) {
        this.tip.remove();
      }

      if (this._element.getAttribute('data-bs-original-title')) {
        this._element.setAttribute('title', this._element.getAttribute('data-bs-original-title'));
      }

      this._disposePopper();

      super.dispose();
    }

    show() {
      if (this._element.style.display === 'none') {
        throw new Error('Please use show on visible elements');
      }

      if (!(this._isWithContent() && this._isEnabled)) {
        return;
      }

      const showEvent = EventHandler__default.default.trigger(this._element, this.constructor.eventName(EVENT_SHOW));
      const shadowRoot = index.findShadowRoot(this._element);

      const isInTheDom = (shadowRoot || this._element.ownerDocument.documentElement).contains(this._element);

      if (showEvent.defaultPrevented || !isInTheDom) {
        return;
      } // todo v6 remove this OR make it optional


      if (this.tip) {
        this.tip.remove();
        this.tip = null;
      }

      const tip = this._getTipElement();

      this._element.setAttribute('aria-describedby', tip.getAttribute('id'));

      const {
        container
      } = this._config;

      if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
        container.append(tip);
        EventHandler__default.default.trigger(this._element, this.constructor.eventName(EVENT_INSERTED));
      }

      if (this._popper) {
        this._popper.update();
      } else {
        this._popper = this._createPopper(tip);
      }

      tip.classList.add(CLASS_NAME_SHOW); // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

      if ('ontouchstart' in document.documentElement) {
        for (const element of [].concat(...document.body.children)) {
          EventHandler__default.default.on(element, 'mouseover', index.noop);
        }
      }

      const complete = () => {
        EventHandler__default.default.trigger(this._element, this.constructor.eventName(EVENT_SHOWN));

        if (this._isHovered === false) {
          this._leave();
        }

        this._isHovered = false;
      };

      this._queueCallback(complete, this.tip, this._isAnimated());
    }

    hide() {
      if (!this._isShown()) {
        return;
      }

      const hideEvent = EventHandler__default.default.trigger(this._element, this.constructor.eventName(EVENT_HIDE));

      if (hideEvent.defaultPrevented) {
        return;
      }

      const tip = this._getTipElement();

      tip.classList.remove(CLASS_NAME_SHOW); // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support

      if ('ontouchstart' in document.documentElement) {
        for (const element of [].concat(...document.body.children)) {
          EventHandler__default.default.off(element, 'mouseover', index.noop);
        }
      }

      this._activeTrigger[TRIGGER_CLICK] = false;
      this._activeTrigger[TRIGGER_FOCUS] = false;
      this._activeTrigger[TRIGGER_HOVER] = false;
      this._isHovered = null; // it is a trick to support manual triggering

      const complete = () => {
        if (this._isWithActiveTrigger()) {
          return;
        }

        if (!this._isHovered) {
          tip.remove();
        }

        this._element.removeAttribute('aria-describedby');

        EventHandler__default.default.trigger(this._element, this.constructor.eventName(EVENT_HIDDEN));

        this._disposePopper();
      };

      this._queueCallback(complete, this.tip, this._isAnimated());
    }

    update() {
      if (this._popper) {
        this._popper.update();
      }
    } // Protected


    _isWithContent() {
      return Boolean(this._getTitle());
    }

    _getTipElement() {
      if (!this.tip) {
        this.tip = this._createTipElement(this._newContent || this._getContentForTemplate());
      }

      return this.tip;
    }

    _createTipElement(content) {
      const tip = this._getTemplateFactory(content).toHtml(); // todo: remove this check on v6


      if (!tip) {
        return null;
      }

      tip.classList.remove(CLASS_NAME_FADE, CLASS_NAME_SHOW); // todo: on v6 the following can be achieved with CSS only

      tip.classList.add(`bs-${this.constructor.NAME}-auto`);
      const tipId = index.getUID(this.constructor.NAME).toString();
      tip.setAttribute('id', tipId);

      if (this._isAnimated()) {
        tip.classList.add(CLASS_NAME_FADE);
      }

      return tip;
    }

    setContent(content) {
      this._newContent = content;

      if (this._isShown()) {
        this._disposePopper();

        this.show();
      }
    }

    _getTemplateFactory(content) {
      if (this._templateFactory) {
        this._templateFactory.changeContent(content);
      } else {
        this._templateFactory = new TemplateFactory__default.default({ ...this._config,
          // the `content` var has to be after `this._config`
          // to override config.content in case of popover
          content,
          extraClass: this._resolvePossibleFunction(this._config.customClass)
        });
      }

      return this._templateFactory;
    }

    _getContentForTemplate() {
      return {
        [SELECTOR_TOOLTIP_INNER]: this._getTitle()
      };
    }

    _getTitle() {
      return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute('data-bs-original-title');
    } // Private


    _initializeOnDelegatedTarget(event) {
      return this.constructor.getOrCreateInstance(event.delegateTarget, this._getDelegateConfig());
    }

    _isAnimated() {
      return this._config.animation || this.tip && this.tip.classList.contains(CLASS_NAME_FADE);
    }

    _isShown() {
      return this.tip && this.tip.classList.contains(CLASS_NAME_SHOW);
    }

    _createPopper(tip) {
      const placement = typeof this._config.placement === 'function' ? this._config.placement.call(this, tip, this._element) : this._config.placement;
      const attachment = AttachmentMap[placement.toUpperCase()];
      return Popper__namespace.createPopper(this._element, tip, this._getPopperConfig(attachment));
    }

    _getOffset() {
      const {
        offset
      } = this._config;

      if (typeof offset === 'string') {
        return offset.split(',').map(value => Number.parseInt(value, 10));
      }

      if (typeof offset === 'function') {
        return popperData => offset(popperData, this._element);
      }

      return offset;
    }

    _resolvePossibleFunction(arg) {
      return typeof arg === 'function' ? arg.call(this._element) : arg;
    }

    _getPopperConfig(attachment) {
      const defaultBsPopperConfig = {
        placement: attachment,
        modifiers: [{
          name: 'flip',
          options: {
            fallbackPlacements: this._config.fallbackPlacements
          }
        }, {
          name: 'offset',
          options: {
            offset: this._getOffset()
          }
        }, {
          name: 'preventOverflow',
          options: {
            boundary: this._config.boundary
          }
        }, {
          name: 'arrow',
          options: {
            element: `.${this.constructor.NAME}-arrow`
          }
        }, {
          name: 'preSetPlacement',
          enabled: true,
          phase: 'beforeMain',
          fn: data => {
            // Pre-set Popper's placement attribute in order to read the arrow sizes properly.
            // Otherwise, Popper mixes up the width and height dimensions since the initial arrow style is for top placement
            this._getTipElement().setAttribute('data-popper-placement', data.state.placement);
          }
        }]
      };
      return { ...defaultBsPopperConfig,
        ...(typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig)
      };
    }

    _setListeners() {
      const triggers = this._config.trigger.split(' ');

      for (const trigger of triggers) {
        if (trigger === 'click') {
          EventHandler__default.default.on(this._element, this.constructor.eventName(EVENT_CLICK), this._config.selector, event => {
            const context = this._initializeOnDelegatedTarget(event);

            context.toggle();
          });
        } else if (trigger !== TRIGGER_MANUAL) {
          const eventIn = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSEENTER) : this.constructor.eventName(EVENT_FOCUSIN);
          const eventOut = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSELEAVE) : this.constructor.eventName(EVENT_FOCUSOUT);
          EventHandler__default.default.on(this._element, eventIn, this._config.selector, event => {
            const context = this._initializeOnDelegatedTarget(event);

            context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;

            context._enter();
          });
          EventHandler__default.default.on(this._element, eventOut, this._config.selector, event => {
            const context = this._initializeOnDelegatedTarget(event);

            context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = context._element.contains(event.relatedTarget);

            context._leave();
          });
        }
      }

      this._hideModalHandler = () => {
        if (this._element) {
          this.hide();
        }
      };

      EventHandler__default.default.on(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
    }

    _fixTitle() {
      const title = this._element.getAttribute('title');

      if (!title) {
        return;
      }

      if (!this._element.getAttribute('aria-label') && !this._element.textContent.trim()) {
        this._element.setAttribute('aria-label', title);
      }

      this._element.setAttribute('data-bs-original-title', title); // DO NOT USE IT. Is only for backwards compatibility


      this._element.removeAttribute('title');
    }

    _enter() {
      if (this._isShown() || this._isHovered) {
        this._isHovered = true;
        return;
      }

      this._isHovered = true;

      this._setTimeout(() => {
        if (this._isHovered) {
          this.show();
        }
      }, this._config.delay.show);
    }

    _leave() {
      if (this._isWithActiveTrigger()) {
        return;
      }

      this._isHovered = false;

      this._setTimeout(() => {
        if (!this._isHovered) {
          this.hide();
        }
      }, this._config.delay.hide);
    }

    _setTimeout(handler, timeout) {
      clearTimeout(this._timeout);
      this._timeout = setTimeout(handler, timeout);
    }

    _isWithActiveTrigger() {
      return Object.values(this._activeTrigger).includes(true);
    }

    _getConfig(config) {
      const dataAttributes = Manipulator__default.default.getDataAttributes(this._element);

      for (const dataAttribute of Object.keys(dataAttributes)) {
        if (DISALLOWED_ATTRIBUTES.has(dataAttribute)) {
          delete dataAttributes[dataAttribute];
        }
      }

      config = { ...dataAttributes,
        ...(typeof config === 'object' && config ? config : {})
      };
      config = this._mergeConfigObj(config);
      config = this._configAfterMerge(config);

      this._typeCheckConfig(config);

      return config;
    }

    _configAfterMerge(config) {
      config.container = config.container === false ? document.body : index.getElement(config.container);

      if (typeof config.delay === 'number') {
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      }

      if (typeof config.title === 'number') {
        config.title = config.title.toString();
      }

      if (typeof config.content === 'number') {
        config.content = config.content.toString();
      }

      return config;
    }

    _getDelegateConfig() {
      const config = {};

      for (const key in this._config) {
        if (this.constructor.Default[key] !== this._config[key]) {
          config[key] = this._config[key];
        }
      }

      config.selector = false;
      config.trigger = 'manual'; // In the future can be replaced with:
      // const keysWithDifferentValues = Object.entries(this._config).filter(entry => this.constructor.Default[entry[0]] !== this._config[entry[0]])
      // `Object.fromEntries(keysWithDifferentValues)`

      return config;
    }

    _disposePopper() {
      if (this._popper) {
        this._popper.destroy();

        this._popper = null;
      }
    } // Static


    static jQueryInterface(config) {
      return this.each(function () {
        const data = Tooltip.getOrCreateInstance(this, config);

        if (typeof config !== 'string') {
          return;
        }

        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config]();
      });
    }

  }
  /**
   * jQuery
   */


  index.defineJQueryPlugin(Tooltip);

  return Tooltip;

}));
//# sourceMappingURL=tooltip.js.map


/***/ }),

/***/ "./node_modules/bootstrap/js/dist/util/config.js":
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/util/config.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
  * Bootstrap config.js v5.2.2 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! ./index */ "./node_modules/bootstrap/js/dist/util/index.js"), __webpack_require__(/*! ../dom/manipulator */ "./node_modules/bootstrap/js/dist/dom/manipulator.js")) :
  undefined;
})(this, (function (index, Manipulator) { 'use strict';

  const _interopDefaultLegacy = e => e && typeof e === 'object' && 'default' in e ? e : { default: e };

  const Manipulator__default = /*#__PURE__*/_interopDefaultLegacy(Manipulator);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.2): util/config.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Class definition
   */

  class Config {
    // Getters
    static get Default() {
      return {};
    }

    static get DefaultType() {
      return {};
    }

    static get NAME() {
      throw new Error('You have to implement the static method "NAME", for each component!');
    }

    _getConfig(config) {
      config = this._mergeConfigObj(config);
      config = this._configAfterMerge(config);

      this._typeCheckConfig(config);

      return config;
    }

    _configAfterMerge(config) {
      return config;
    }

    _mergeConfigObj(config, element) {
      const jsonConfig = index.isElement(element) ? Manipulator__default.default.getDataAttribute(element, 'config') : {}; // try to parse

      return { ...this.constructor.Default,
        ...(typeof jsonConfig === 'object' ? jsonConfig : {}),
        ...(index.isElement(element) ? Manipulator__default.default.getDataAttributes(element) : {}),
        ...(typeof config === 'object' ? config : {})
      };
    }

    _typeCheckConfig(config, configTypes = this.constructor.DefaultType) {
      for (const property of Object.keys(configTypes)) {
        const expectedTypes = configTypes[property];
        const value = config[property];
        const valueType = index.isElement(value) ? 'element' : index.toType(value);

        if (!new RegExp(expectedTypes).test(valueType)) {
          throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
        }
      }
    }

  }

  return Config;

}));
//# sourceMappingURL=config.js.map


/***/ }),

/***/ "./node_modules/bootstrap/js/dist/util/index.js":
/*!******************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/util/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
  * Bootstrap index.js v5.2.2 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? factory(exports) :
  undefined;
})(this, (function (exports) { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.2): util/index.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  const MAX_UID = 1000000;
  const MILLISECONDS_MULTIPLIER = 1000;
  const TRANSITION_END = 'transitionend'; // Shout-out Angus Croll (https://goo.gl/pxwQGp)

  const toType = object => {
    if (object === null || object === undefined) {
      return `${object}`;
    }

    return Object.prototype.toString.call(object).match(/\s([a-z]+)/i)[1].toLowerCase();
  };
  /**
   * Public Util API
   */


  const getUID = prefix => {
    do {
      prefix += Math.floor(Math.random() * MAX_UID);
    } while (document.getElementById(prefix));

    return prefix;
  };

  const getSelector = element => {
    let selector = element.getAttribute('data-bs-target');

    if (!selector || selector === '#') {
      let hrefAttribute = element.getAttribute('href'); // The only valid content that could double as a selector are IDs or classes,
      // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
      // `document.querySelector` will rightfully complain it is invalid.
      // See https://github.com/twbs/bootstrap/issues/32273

      if (!hrefAttribute || !hrefAttribute.includes('#') && !hrefAttribute.startsWith('.')) {
        return null;
      } // Just in case some CMS puts out a full URL with the anchor appended


      if (hrefAttribute.includes('#') && !hrefAttribute.startsWith('#')) {
        hrefAttribute = `#${hrefAttribute.split('#')[1]}`;
      }

      selector = hrefAttribute && hrefAttribute !== '#' ? hrefAttribute.trim() : null;
    }

    return selector;
  };

  const getSelectorFromElement = element => {
    const selector = getSelector(element);

    if (selector) {
      return document.querySelector(selector) ? selector : null;
    }

    return null;
  };

  const getElementFromSelector = element => {
    const selector = getSelector(element);
    return selector ? document.querySelector(selector) : null;
  };

  const getTransitionDurationFromElement = element => {
    if (!element) {
      return 0;
    } // Get transition-duration of the element


    let {
      transitionDuration,
      transitionDelay
    } = window.getComputedStyle(element);
    const floatTransitionDuration = Number.parseFloat(transitionDuration);
    const floatTransitionDelay = Number.parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

    if (!floatTransitionDuration && !floatTransitionDelay) {
      return 0;
    } // If multiple durations are defined, take the first


    transitionDuration = transitionDuration.split(',')[0];
    transitionDelay = transitionDelay.split(',')[0];
    return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
  };

  const triggerTransitionEnd = element => {
    element.dispatchEvent(new Event(TRANSITION_END));
  };

  const isElement = object => {
    if (!object || typeof object !== 'object') {
      return false;
    }

    if (typeof object.jquery !== 'undefined') {
      object = object[0];
    }

    return typeof object.nodeType !== 'undefined';
  };

  const getElement = object => {
    // it's a jQuery object or a node element
    if (isElement(object)) {
      return object.jquery ? object[0] : object;
    }

    if (typeof object === 'string' && object.length > 0) {
      return document.querySelector(object);
    }

    return null;
  };

  const isVisible = element => {
    if (!isElement(element) || element.getClientRects().length === 0) {
      return false;
    }

    const elementIsVisible = getComputedStyle(element).getPropertyValue('visibility') === 'visible'; // Handle `details` element as its content may falsie appear visible when it is closed

    const closedDetails = element.closest('details:not([open])');

    if (!closedDetails) {
      return elementIsVisible;
    }

    if (closedDetails !== element) {
      const summary = element.closest('summary');

      if (summary && summary.parentNode !== closedDetails) {
        return false;
      }

      if (summary === null) {
        return false;
      }
    }

    return elementIsVisible;
  };

  const isDisabled = element => {
    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
      return true;
    }

    if (element.classList.contains('disabled')) {
      return true;
    }

    if (typeof element.disabled !== 'undefined') {
      return element.disabled;
    }

    return element.hasAttribute('disabled') && element.getAttribute('disabled') !== 'false';
  };

  const findShadowRoot = element => {
    if (!document.documentElement.attachShadow) {
      return null;
    } // Can find the shadow root otherwise it'll return the document


    if (typeof element.getRootNode === 'function') {
      const root = element.getRootNode();
      return root instanceof ShadowRoot ? root : null;
    }

    if (element instanceof ShadowRoot) {
      return element;
    } // when we don't find a shadow root


    if (!element.parentNode) {
      return null;
    }

    return findShadowRoot(element.parentNode);
  };

  const noop = () => {};
  /**
   * Trick to restart an element's animation
   *
   * @param {HTMLElement} element
   * @return void
   *
   * @see https://www.charistheo.io/blog/2021/02/restart-a-css-animation-with-javascript/#restarting-a-css-animation
   */


  const reflow = element => {
    element.offsetHeight; // eslint-disable-line no-unused-expressions
  };

  const getjQuery = () => {
    if (window.jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
      return window.jQuery;
    }

    return null;
  };

  const DOMContentLoadedCallbacks = [];

  const onDOMContentLoaded = callback => {
    if (document.readyState === 'loading') {
      // add listener on the first call when the document is in loading state
      if (!DOMContentLoadedCallbacks.length) {
        document.addEventListener('DOMContentLoaded', () => {
          for (const callback of DOMContentLoadedCallbacks) {
            callback();
          }
        });
      }

      DOMContentLoadedCallbacks.push(callback);
    } else {
      callback();
    }
  };

  const isRTL = () => document.documentElement.dir === 'rtl';

  const defineJQueryPlugin = plugin => {
    onDOMContentLoaded(() => {
      const $ = getjQuery();
      /* istanbul ignore if */

      if ($) {
        const name = plugin.NAME;
        const JQUERY_NO_CONFLICT = $.fn[name];
        $.fn[name] = plugin.jQueryInterface;
        $.fn[name].Constructor = plugin;

        $.fn[name].noConflict = () => {
          $.fn[name] = JQUERY_NO_CONFLICT;
          return plugin.jQueryInterface;
        };
      }
    });
  };

  const execute = callback => {
    if (typeof callback === 'function') {
      callback();
    }
  };

  const executeAfterTransition = (callback, transitionElement, waitForTransition = true) => {
    if (!waitForTransition) {
      execute(callback);
      return;
    }

    const durationPadding = 5;
    const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
    let called = false;

    const handler = ({
      target
    }) => {
      if (target !== transitionElement) {
        return;
      }

      called = true;
      transitionElement.removeEventListener(TRANSITION_END, handler);
      execute(callback);
    };

    transitionElement.addEventListener(TRANSITION_END, handler);
    setTimeout(() => {
      if (!called) {
        triggerTransitionEnd(transitionElement);
      }
    }, emulatedDuration);
  };
  /**
   * Return the previous/next element of a list.
   *
   * @param {array} list    The list of elements
   * @param activeElement   The active element
   * @param shouldGetNext   Choose to get next or previous element
   * @param isCycleAllowed
   * @return {Element|elem} The proper element
   */


  const getNextActiveElement = (list, activeElement, shouldGetNext, isCycleAllowed) => {
    const listLength = list.length;
    let index = list.indexOf(activeElement); // if the element does not exist in the list return an element
    // depending on the direction and if cycle is allowed

    if (index === -1) {
      return !shouldGetNext && isCycleAllowed ? list[listLength - 1] : list[0];
    }

    index += shouldGetNext ? 1 : -1;

    if (isCycleAllowed) {
      index = (index + listLength) % listLength;
    }

    return list[Math.max(0, Math.min(index, listLength - 1))];
  };

  exports.defineJQueryPlugin = defineJQueryPlugin;
  exports.execute = execute;
  exports.executeAfterTransition = executeAfterTransition;
  exports.findShadowRoot = findShadowRoot;
  exports.getElement = getElement;
  exports.getElementFromSelector = getElementFromSelector;
  exports.getNextActiveElement = getNextActiveElement;
  exports.getSelectorFromElement = getSelectorFromElement;
  exports.getTransitionDurationFromElement = getTransitionDurationFromElement;
  exports.getUID = getUID;
  exports.getjQuery = getjQuery;
  exports.isDisabled = isDisabled;
  exports.isElement = isElement;
  exports.isRTL = isRTL;
  exports.isVisible = isVisible;
  exports.noop = noop;
  exports.onDOMContentLoaded = onDOMContentLoaded;
  exports.reflow = reflow;
  exports.toType = toType;
  exports.triggerTransitionEnd = triggerTransitionEnd;

  Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

}));
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/bootstrap/js/dist/util/sanitizer.js":
/*!**********************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/util/sanitizer.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
  * Bootstrap sanitizer.js v5.2.2 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? factory(exports) :
  undefined;
})(this, (function (exports) { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.2): util/sanitizer.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  const uriAttributes = new Set(['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href']);
  const ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
  /**
   * A pattern that recognizes a commonly useful subset of URLs that are safe.
   *
   * Shout-out to Angular https://github.com/angular/angular/blob/12.2.x/packages/core/src/sanitization/url_sanitizer.ts
   */

  const SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i;
  /**
   * A pattern that matches safe data URLs. Only matches image, video and audio types.
   *
   * Shout-out to Angular https://github.com/angular/angular/blob/12.2.x/packages/core/src/sanitization/url_sanitizer.ts
   */

  const DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

  const allowedAttribute = (attribute, allowedAttributeList) => {
    const attributeName = attribute.nodeName.toLowerCase();

    if (allowedAttributeList.includes(attributeName)) {
      if (uriAttributes.has(attributeName)) {
        return Boolean(SAFE_URL_PATTERN.test(attribute.nodeValue) || DATA_URL_PATTERN.test(attribute.nodeValue));
      }

      return true;
    } // Check if a regular expression validates the attribute.


    return allowedAttributeList.filter(attributeRegex => attributeRegex instanceof RegExp).some(regex => regex.test(attributeName));
  };

  const DefaultAllowlist = {
    // Global attributes allowed on any supplied element below.
    '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
    a: ['target', 'href', 'title', 'rel'],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  };
  function sanitizeHtml(unsafeHtml, allowList, sanitizeFunction) {
    if (!unsafeHtml.length) {
      return unsafeHtml;
    }

    if (sanitizeFunction && typeof sanitizeFunction === 'function') {
      return sanitizeFunction(unsafeHtml);
    }

    const domParser = new window.DOMParser();
    const createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
    const elements = [].concat(...createdDocument.body.querySelectorAll('*'));

    for (const element of elements) {
      const elementName = element.nodeName.toLowerCase();

      if (!Object.keys(allowList).includes(elementName)) {
        element.remove();
        continue;
      }

      const attributeList = [].concat(...element.attributes);
      const allowedAttributes = [].concat(allowList['*'] || [], allowList[elementName] || []);

      for (const attribute of attributeList) {
        if (!allowedAttribute(attribute, allowedAttributes)) {
          element.removeAttribute(attribute.nodeName);
        }
      }
    }

    return createdDocument.body.innerHTML;
  }

  exports.DefaultAllowlist = DefaultAllowlist;
  exports.sanitizeHtml = sanitizeHtml;

  Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

}));
//# sourceMappingURL=sanitizer.js.map


/***/ }),

/***/ "./node_modules/bootstrap/js/dist/util/template-factory.js":
/*!*****************************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/util/template-factory.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
  * Bootstrap template-factory.js v5.2.2 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! ./sanitizer */ "./node_modules/bootstrap/js/dist/util/sanitizer.js"), __webpack_require__(/*! ./index */ "./node_modules/bootstrap/js/dist/util/index.js"), __webpack_require__(/*! ../dom/selector-engine */ "./node_modules/bootstrap/js/dist/dom/selector-engine.js"), __webpack_require__(/*! ./config */ "./node_modules/bootstrap/js/dist/util/config.js")) :
  undefined;
})(this, (function (sanitizer, index, SelectorEngine, Config) { 'use strict';

  const _interopDefaultLegacy = e => e && typeof e === 'object' && 'default' in e ? e : { default: e };

  const SelectorEngine__default = /*#__PURE__*/_interopDefaultLegacy(SelectorEngine);
  const Config__default = /*#__PURE__*/_interopDefaultLegacy(Config);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.2): util/template-factory.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  const NAME = 'TemplateFactory';
  const Default = {
    allowList: sanitizer.DefaultAllowlist,
    content: {},
    // { selector : text ,  selector2 : text2 , }
    extraClass: '',
    html: false,
    sanitize: true,
    sanitizeFn: null,
    template: '<div></div>'
  };
  const DefaultType = {
    allowList: 'object',
    content: 'object',
    extraClass: '(string|function)',
    html: 'boolean',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    template: 'string'
  };
  const DefaultContentType = {
    entry: '(string|element|function|null)',
    selector: '(string|element)'
  };
  /**
   * Class definition
   */

  class TemplateFactory extends Config__default.default {
    constructor(config) {
      super();
      this._config = this._getConfig(config);
    } // Getters


    static get Default() {
      return Default;
    }

    static get DefaultType() {
      return DefaultType;
    }

    static get NAME() {
      return NAME;
    } // Public


    getContent() {
      return Object.values(this._config.content).map(config => this._resolvePossibleFunction(config)).filter(Boolean);
    }

    hasContent() {
      return this.getContent().length > 0;
    }

    changeContent(content) {
      this._checkContent(content);

      this._config.content = { ...this._config.content,
        ...content
      };
      return this;
    }

    toHtml() {
      const templateWrapper = document.createElement('div');
      templateWrapper.innerHTML = this._maybeSanitize(this._config.template);

      for (const [selector, text] of Object.entries(this._config.content)) {
        this._setContent(templateWrapper, text, selector);
      }

      const template = templateWrapper.children[0];

      const extraClass = this._resolvePossibleFunction(this._config.extraClass);

      if (extraClass) {
        template.classList.add(...extraClass.split(' '));
      }

      return template;
    } // Private


    _typeCheckConfig(config) {
      super._typeCheckConfig(config);

      this._checkContent(config.content);
    }

    _checkContent(arg) {
      for (const [selector, content] of Object.entries(arg)) {
        super._typeCheckConfig({
          selector,
          entry: content
        }, DefaultContentType);
      }
    }

    _setContent(template, content, selector) {
      const templateElement = SelectorEngine__default.default.findOne(selector, template);

      if (!templateElement) {
        return;
      }

      content = this._resolvePossibleFunction(content);

      if (!content) {
        templateElement.remove();
        return;
      }

      if (index.isElement(content)) {
        this._putElementInTemplate(index.getElement(content), templateElement);

        return;
      }

      if (this._config.html) {
        templateElement.innerHTML = this._maybeSanitize(content);
        return;
      }

      templateElement.textContent = content;
    }

    _maybeSanitize(arg) {
      return this._config.sanitize ? sanitizer.sanitizeHtml(arg, this._config.allowList, this._config.sanitizeFn) : arg;
    }

    _resolvePossibleFunction(arg) {
      return typeof arg === 'function' ? arg(this) : arg;
    }

    _putElementInTemplate(element, templateElement) {
      if (this._config.html) {
        templateElement.innerHTML = '';
        templateElement.append(element);
        return;
      }

      templateElement.textContent = element.textContent;
    }

  }

  return TemplateFactory;

}));
//# sourceMappingURL=template-factory.js.map


/***/ }),

/***/ "./node_modules/js-big-decimal/dist/node/js-big-decimal.js":
/*!*****************************************************************!*\
  !*** ./node_modules/js-big-decimal/dist/node/js-big-decimal.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(global, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 217:
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.pad = exports.trim = exports.add = void 0;
//function add {
function add(number1, number2) {
    var _a;
    if (number2 === void 0) { number2 = "0"; }
    var neg = 0, ind = -1, neg_len;
    //check for negatives
    if (number1[0] == '-') {
        neg++;
        ind = 1;
        number1 = number1.substring(1);
        neg_len = number1.length;
    }
    if (number2[0] == '-') {
        neg++;
        ind = 2;
        number2 = number2.substring(1);
        neg_len = number2.length;
    }
    number1 = trim(number1);
    number2 = trim(number2);
    _a = pad(trim(number1), trim(number2)), number1 = _a[0], number2 = _a[1];
    if (neg == 1) {
        if (ind == 1)
            number1 = compliment(number1);
        else
            number2 = compliment(number2);
    }
    var res = addCore(number1, number2);
    if (!neg)
        return trim(res);
    else if (neg == 2)
        return ('-' + trim(res));
    else {
        if (number1.length < (res.length))
            return trim(res.substring(1));
        else
            return ('-' + trim(compliment(res)));
    }
}
exports.add = add;
function compliment(number) {
    var s = '', l = number.length, dec = number.split('.')[1], ld = dec ? dec.length : 0;
    for (var i = 0; i < l; i++) {
        if (number[i] >= '0' && number[i] <= '9')
            s += (9 - parseInt(number[i]));
        else
            s += number[i];
    }
    var one = (ld > 0) ? ('0.' + (new Array(ld)).join('0') + '1') : '1';
    return addCore(s, one);
}
function trim(number) {
    var parts = number.split('.');
    if (!parts[0])
        parts[0] = '0';
    while (parts[0][0] == '0' && parts[0].length > 1)
        parts[0] = parts[0].substring(1);
    return parts[0] + (parts[1] ? ('.' + parts[1]) : '');
}
exports.trim = trim;
function pad(number1, number2) {
    var parts1 = number1.split('.'), parts2 = number2.split('.');
    //pad integral part
    var length1 = parts1[0].length, length2 = parts2[0].length;
    if (length1 > length2) {
        parts2[0] = (new Array(Math.abs(length1 - length2) + 1)).join('0') + (parts2[0] ? parts2[0] : '');
    }
    else {
        parts1[0] = (new Array(Math.abs(length1 - length2) + 1)).join('0') + (parts1[0] ? parts1[0] : '');
    }
    //pad fractional part
    length1 = parts1[1] ? parts1[1].length : 0,
        length2 = parts2[1] ? parts2[1].length : 0;
    if (length1 || length2) {
        if (length1 > length2) {
            parts2[1] = (parts2[1] ? parts2[1] : '') + (new Array(Math.abs(length1 - length2) + 1)).join('0');
        }
        else {
            parts1[1] = (parts1[1] ? parts1[1] : '') + (new Array(Math.abs(length1 - length2) + 1)).join('0');
        }
    }
    number1 = parts1[0] + ((parts1[1]) ? ('.' + parts1[1]) : '');
    number2 = parts2[0] + ((parts2[1]) ? ('.' + parts2[1]) : '');
    return [number1, number2];
}
exports.pad = pad;
function addCore(number1, number2) {
    var _a;
    _a = pad(number1, number2), number1 = _a[0], number2 = _a[1];
    var sum = '', carry = 0;
    for (var i = number1.length - 1; i >= 0; i--) {
        if (number1[i] === '.') {
            sum = '.' + sum;
            continue;
        }
        var temp = parseInt(number1[i]) + parseInt(number2[i]) + carry;
        sum = (temp % 10) + sum;
        carry = Math.floor(temp / 10);
    }
    return carry ? (carry.toString() + sum) : sum;
}


/***/ }),

/***/ 423:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var add_1 = __webpack_require__(217);
var round_1 = __webpack_require__(350);
var multiply_1 = __webpack_require__(182);
var divide_1 = __webpack_require__(415);
var modulus_1 = __webpack_require__(213);
var compareTo_1 = __webpack_require__(664);
var subtract_1 = __webpack_require__(26);
var roundingModes_1 = __webpack_require__(916);
var bigDecimal = /** @class */ (function () {
    function bigDecimal(number) {
        if (number === void 0) { number = '0'; }
        this.value = bigDecimal.validate(number);
    }
    bigDecimal.validate = function (number) {
        if (number) {
            number = number.toString();
            if (isNaN(number))
                throw Error("Parameter is not a number: " + number);
            if (number[0] == '+')
                number = number.substring(1);
        }
        else
            number = '0';
        //handle missing leading zero
        if (number.startsWith('.'))
            number = '0' + number;
        else if (number.startsWith('-.'))
            number = '-0' + number.substr(1);
        //handle exponentiation
        if (/e/i.test(number)) {
            var _a = number.split(/[eE]/), mantisa = _a[0], exponent = _a[1];
            mantisa = (0, add_1.trim)(mantisa);
            var sign = '';
            if (mantisa[0] == '-') {
                sign = '-';
                mantisa = mantisa.substring(1);
            }
            if (mantisa.indexOf('.') >= 0) {
                exponent = parseInt(exponent) + mantisa.indexOf('.');
                mantisa = mantisa.replace('.', '');
            }
            else {
                exponent = parseInt(exponent) + mantisa.length;
            }
            if (mantisa.length < exponent) {
                number = sign + mantisa + (new Array(exponent - mantisa.length + 1)).join('0');
            }
            else if (mantisa.length >= exponent && exponent > 0) {
                number = sign + (0, add_1.trim)(mantisa.substring(0, exponent)) +
                    ((mantisa.length > exponent) ? ('.' + mantisa.substring(exponent)) : '');
            }
            else {
                number = sign + '0.' + (new Array(-exponent + 1)).join('0') + mantisa;
            }
        }
        return number;
    };
    bigDecimal.prototype.getValue = function () {
        return this.value;
    };
    bigDecimal.getPrettyValue = function (number, digits, separator) {
        if (!(digits || separator)) {
            digits = 3;
            separator = ',';
        }
        else if (!(digits && separator)) {
            throw Error('Illegal Arguments. Should pass both digits and separator or pass none');
        }
        number = bigDecimal.validate(number);
        var neg = number.charAt(0) == '-';
        if (neg)
            number = number.substring(1);
        var len = number.indexOf('.');
        len = len > 0 ? len : (number.length);
        var temp = '';
        for (var i = len; i > 0;) {
            if (i < digits) {
                digits = i;
                i = 0;
            }
            else
                i -= digits;
            temp = number.substring(i, i + digits) + ((i < (len - digits) && i >= 0) ? separator : '') + temp;
        }
        return (neg ? '-' : '') + temp + number.substring(len);
    };
    bigDecimal.prototype.getPrettyValue = function (digits, separator) {
        return bigDecimal.getPrettyValue(this.value, digits, separator);
    };
    bigDecimal.round = function (number, precision, mode) {
        if (precision === void 0) { precision = 0; }
        if (mode === void 0) { mode = roundingModes_1.RoundingModes.HALF_EVEN; }
        number = bigDecimal.validate(number);
        // console.log(number)
        if (isNaN(precision))
            throw Error("Precision is not a number: " + precision);
        return (0, round_1.roundOff)(number, precision, mode);
    };
    bigDecimal.prototype.round = function (precision, mode) {
        if (precision === void 0) { precision = 0; }
        if (mode === void 0) { mode = roundingModes_1.RoundingModes.HALF_EVEN; }
        if (isNaN(precision))
            throw Error("Precision is not a number: " + precision);
        return new bigDecimal((0, round_1.roundOff)(this.value, precision, mode));
    };
    bigDecimal.floor = function (number) {
        number = bigDecimal.validate(number);
        if (number.indexOf('.') === -1)
            return number;
        return bigDecimal.round(number, 0, roundingModes_1.RoundingModes.FLOOR);
    };
    bigDecimal.prototype.floor = function () {
        if (this.value.indexOf('.') === -1)
            return new bigDecimal(this.value);
        return new bigDecimal(this.value).round(0, roundingModes_1.RoundingModes.FLOOR);
    };
    bigDecimal.ceil = function (number) {
        number = bigDecimal.validate(number);
        if (number.indexOf('.') === -1)
            return number;
        return bigDecimal.round(number, 0, roundingModes_1.RoundingModes.CEILING);
    };
    bigDecimal.prototype.ceil = function () {
        if (this.value.indexOf('.') === -1)
            return new bigDecimal(this.value);
        return new bigDecimal(this.value).round(0, roundingModes_1.RoundingModes.CEILING);
    };
    bigDecimal.add = function (number1, number2) {
        number1 = bigDecimal.validate(number1);
        number2 = bigDecimal.validate(number2);
        return (0, add_1.add)(number1, number2);
    };
    bigDecimal.prototype.add = function (number) {
        return new bigDecimal((0, add_1.add)(this.value, number.getValue()));
    };
    bigDecimal.subtract = function (number1, number2) {
        number1 = bigDecimal.validate(number1);
        number2 = bigDecimal.validate(number2);
        return (0, subtract_1.subtract)(number1, number2);
    };
    bigDecimal.prototype.subtract = function (number) {
        return new bigDecimal((0, subtract_1.subtract)(this.value, number.getValue()));
    };
    bigDecimal.multiply = function (number1, number2) {
        number1 = bigDecimal.validate(number1);
        number2 = bigDecimal.validate(number2);
        return (0, multiply_1.multiply)(number1, number2);
    };
    bigDecimal.prototype.multiply = function (number) {
        return new bigDecimal((0, multiply_1.multiply)(this.value, number.getValue()));
    };
    bigDecimal.divide = function (number1, number2, precision) {
        number1 = bigDecimal.validate(number1);
        number2 = bigDecimal.validate(number2);
        return (0, divide_1.divide)(number1, number2, precision);
    };
    bigDecimal.prototype.divide = function (number, precision) {
        return new bigDecimal((0, divide_1.divide)(this.value, number.getValue(), precision));
    };
    bigDecimal.modulus = function (number1, number2) {
        number1 = bigDecimal.validate(number1);
        number2 = bigDecimal.validate(number2);
        return (0, modulus_1.modulus)(number1, number2);
    };
    bigDecimal.prototype.modulus = function (number) {
        return new bigDecimal((0, modulus_1.modulus)(this.value, number.getValue()));
    };
    bigDecimal.compareTo = function (number1, number2) {
        number1 = bigDecimal.validate(number1);
        number2 = bigDecimal.validate(number2);
        return (0, compareTo_1.compareTo)(number1, number2);
    };
    bigDecimal.prototype.compareTo = function (number) {
        return (0, compareTo_1.compareTo)(this.value, number.getValue());
    };
    bigDecimal.negate = function (number) {
        number = bigDecimal.validate(number);
        return (0, subtract_1.negate)(number);
    };
    bigDecimal.prototype.negate = function () {
        return new bigDecimal((0, subtract_1.negate)(this.value));
    };
    bigDecimal.RoundingModes = roundingModes_1.RoundingModes;
    return bigDecimal;
}());
module.exports = bigDecimal;


/***/ }),

/***/ 664:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.compareTo = void 0;
var add_1 = __webpack_require__(217);
function compareTo(number1, number2) {
    var _a;
    var negative = false;
    if (number1[0] == '-' && number2[0] != "-") {
        return -1;
    }
    else if (number1[0] != '-' && number2[0] == '-') {
        return 1;
    }
    else if (number1[0] == '-' && number2[0] == '-') {
        number1 = number1.substr(1);
        number2 = number2.substr(1);
        negative = true;
    }
    _a = (0, add_1.pad)(number1, number2), number1 = _a[0], number2 = _a[1];
    if (number1.localeCompare(number2) == 0) {
        return 0;
    }
    for (var i = 0; i < number1.length; i++) {
        if (number1[i] == number2[i]) {
            continue;
        }
        else if (number1[i] > number2[i]) {
            if (negative) {
                return -1;
            }
            else {
                return 1;
            }
        }
        else {
            if (negative) {
                return 1;
            }
            else {
                return -1;
            }
        }
    }
    return 0;
}
exports.compareTo = compareTo;


/***/ }),

/***/ 415:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.divide = void 0;
var add_1 = __webpack_require__(217);
var round_1 = __webpack_require__(350);
function divide(dividend, divisor, precission) {
    if (precission === void 0) { precission = 8; }
    if (divisor == 0) {
        throw new Error('Cannot divide by 0');
    }
    dividend = dividend.toString();
    divisor = divisor.toString();
    // remove trailing zeros in decimal ISSUE#18
    dividend = dividend.replace(/(\.\d*?[1-9])0+$/g, "$1").replace(/\.0+$/, "");
    divisor = divisor.replace(/(\.\d*?[1-9])0+$/g, "$1").replace(/\.0+$/, "");
    if (dividend == 0)
        return '0';
    var neg = 0;
    if (divisor[0] == '-') {
        divisor = divisor.substring(1);
        neg++;
    }
    if (dividend[0] == '-') {
        dividend = dividend.substring(1);
        neg++;
    }
    var pt_dvsr = divisor.indexOf('.') > 0 ? divisor.length - divisor.indexOf('.') - 1 : -1;
    divisor = (0, add_1.trim)(divisor.replace('.', ''));
    if (pt_dvsr >= 0) {
        var pt_dvnd = dividend.indexOf('.') > 0 ? dividend.length - dividend.indexOf('.') - 1 : -1;
        if (pt_dvnd == -1) {
            dividend = (0, add_1.trim)(dividend + (new Array(pt_dvsr + 1)).join('0'));
        }
        else {
            if (pt_dvsr > pt_dvnd) {
                dividend = dividend.replace('.', '');
                dividend = (0, add_1.trim)(dividend + (new Array(pt_dvsr - pt_dvnd + 1)).join('0'));
            }
            else if (pt_dvsr < pt_dvnd) {
                dividend = dividend.replace('.', '');
                var loc = dividend.length - pt_dvnd + pt_dvsr;
                dividend = (0, add_1.trim)(dividend.substring(0, loc) + '.' + dividend.substring(loc));
            }
            else if (pt_dvsr == pt_dvnd) {
                dividend = (0, add_1.trim)(dividend.replace('.', ''));
            }
        }
    }
    var prec = 0, dl = divisor.length, rem = '0', quotent = '';
    var dvnd = (dividend.indexOf('.') > -1 && dividend.indexOf('.') < dl) ? dividend.substring(0, dl + 1) : dividend.substring(0, dl);
    dividend = (dividend.indexOf('.') > -1 && dividend.indexOf('.') < dl) ? dividend.substring(dl + 1) : dividend.substring(dl);
    if (dvnd.indexOf('.') > -1) {
        var shift = dvnd.length - dvnd.indexOf('.') - 1;
        dvnd = dvnd.replace('.', '');
        if (dl > dvnd.length) {
            shift += dl - dvnd.length;
            dvnd = dvnd + (new Array(dl - dvnd.length + 1)).join('0');
        }
        prec = shift;
        quotent = '0.' + (new Array(shift)).join('0');
    }
    precission = precission + 2;
    while (prec <= precission) {
        var qt = 0;
        while (parseInt(dvnd) >= parseInt(divisor)) {
            dvnd = (0, add_1.add)(dvnd, '-' + divisor);
            qt++;
        }
        quotent += qt;
        if (!dividend) {
            if (!prec)
                quotent += '.';
            prec++;
            dvnd = dvnd + '0';
        }
        else {
            if (dividend[0] == '.') {
                quotent += '.';
                prec++;
                dividend = dividend.substring(1);
            }
            dvnd = dvnd + dividend.substring(0, 1);
            dividend = dividend.substring(1);
        }
    }
    return ((neg == 1) ? '-' : '') + (0, add_1.trim)((0, round_1.roundOff)(quotent, precission - 2));
}
exports.divide = divide;


/***/ }),

/***/ 213:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.modulus = void 0;
var divide_1 = __webpack_require__(415);
var round_1 = __webpack_require__(350);
var multiply_1 = __webpack_require__(182);
var subtract_1 = __webpack_require__(26);
var roundingModes_1 = __webpack_require__(916);
function modulus(dividend, divisor) {
    if (divisor == 0) {
        throw new Error('Cannot divide by 0');
    }
    dividend = dividend.toString();
    divisor = divisor.toString();
    validate(dividend);
    validate(divisor);
    var sign = '';
    if (dividend[0] == '-') {
        sign = '-';
        dividend = dividend.substr(1);
    }
    if (divisor[0] == '-') {
        divisor = divisor.substr(1);
    }
    var result = (0, subtract_1.subtract)(dividend, (0, multiply_1.multiply)(divisor, (0, round_1.roundOff)((0, divide_1.divide)(dividend, divisor), 0, roundingModes_1.RoundingModes.FLOOR)));
    return sign + result;
}
exports.modulus = modulus;
function validate(oparand) {
    if (oparand.indexOf('.') != -1) {
        throw new Error('Modulus of non-integers not supported');
    }
}


/***/ }),

/***/ 182:
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.multiply = void 0;
function multiply(number1, number2) {
    number1 = number1.toString();
    number2 = number2.toString();
    /*Filter numbers*/
    var negative = 0;
    if (number1[0] == '-') {
        negative++;
        number1 = number1.substr(1);
    }
    if (number2[0] == '-') {
        negative++;
        number2 = number2.substr(1);
    }
    number1 = trailZero(number1);
    number2 = trailZero(number2);
    var decimalLength1 = 0;
    var decimalLength2 = 0;
    if (number1.indexOf('.') != -1) {
        decimalLength1 = number1.length - number1.indexOf('.') - 1;
    }
    if (number2.indexOf('.') != -1) {
        decimalLength2 = number2.length - number2.indexOf('.') - 1;
    }
    var decimalLength = decimalLength1 + decimalLength2;
    number1 = trailZero(number1.replace('.', ''));
    number2 = trailZero(number2.replace('.', ''));
    if (number1.length < number2.length) {
        var temp = number1;
        number1 = number2;
        number2 = temp;
    }
    if (number2 == '0') {
        return '0';
    }
    /*
    * Core multiplication
    */
    var length = number2.length;
    var carry = 0;
    var positionVector = [];
    var currentPosition = length - 1;
    var result = "";
    for (var i = 0; i < length; i++) {
        positionVector[i] = number1.length - 1;
    }
    for (var i = 0; i < 2 * number1.length; i++) {
        var sum = 0;
        for (var j = number2.length - 1; j >= currentPosition && j >= 0; j--) {
            if (positionVector[j] > -1 && positionVector[j] < number1.length) {
                sum += parseInt(number1[positionVector[j]--]) * parseInt(number2[j]);
            }
        }
        sum += carry;
        carry = Math.floor(sum / 10);
        result = sum % 10 + result;
        currentPosition--;
    }
    /*
    * Formatting result
    */
    result = trailZero(adjustDecimal(result, decimalLength));
    if (negative == 1) {
        result = '-' + result;
    }
    return result;
}
exports.multiply = multiply;
/*
* Add decimal point
*/
function adjustDecimal(number, decimal) {
    if (decimal == 0)
        return number;
    else {
        number = (decimal >= number.length) ? ((new Array(decimal - number.length + 1)).join('0') + number) : number;
        return number.substr(0, number.length - decimal) + '.' + number.substr(number.length - decimal, decimal);
    }
}
/*
* Removes zero from front and back*/
function trailZero(number) {
    while (number[0] == '0') {
        number = number.substr(1);
    }
    if (number.indexOf('.') != -1) {
        while (number[number.length - 1] == '0') {
            number = number.substr(0, number.length - 1);
        }
    }
    if (number == "" || number == ".") {
        number = '0';
    }
    else if (number[number.length - 1] == '.') {
        number = number.substr(0, number.length - 1);
    }
    if (number[0] == '.') {
        number = '0' + number;
    }
    return number;
}


/***/ }),

/***/ 350:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.roundOff = void 0;
var roundingModes_1 = __webpack_require__(916);
/**
 *
 * @param input the number to round
 * @param n precision
 * @param mode Rounding Mode
 */
function roundOff(input, n, mode) {
    if (n === void 0) { n = 0; }
    if (mode === void 0) { mode = roundingModes_1.RoundingModes.HALF_EVEN; }
    if (mode === roundingModes_1.RoundingModes.UNNECESSARY) {
        throw new Error("UNNECESSARY Rounding Mode has not yet been implemented");
    }
    if (typeof (input) == 'number' || typeof (input) == 'bigint')
        input = input.toString();
    var neg = false;
    if (input[0] === '-') {
        neg = true;
        input = input.substring(1);
    }
    var parts = input.split('.'), partInt = parts[0], partDec = parts[1];
    //handle case of -ve n: roundOff(12564,-2)=12600
    if (n < 0) {
        n = -n;
        if (partInt.length <= n)
            return '0';
        else {
            var prefix = partInt.substr(0, partInt.length - n);
            input = prefix + '.' + partInt.substr(partInt.length - n) + partDec;
            prefix = roundOff(input, 0, mode);
            return (neg ? '-' : '') + prefix + (new Array(n + 1).join('0'));
        }
    }
    // handle case when integer output is desired
    if (n == 0) {
        var l = partInt.length;
        if (greaterThanFive(parts[1], partInt, neg, mode)) {
            partInt = increment(partInt);
        }
        return (neg && parseInt(partInt) ? '-' : '') + partInt;
    }
    // handle case when n>0
    if (!parts[1]) {
        return (neg ? '-' : '') + partInt + '.' + (new Array(n + 1).join('0'));
    }
    else if (parts[1].length < n) {
        return (neg ? '-' : '') + partInt + '.' + parts[1] + (new Array(n - parts[1].length + 1).join('0'));
    }
    partDec = parts[1].substring(0, n);
    var rem = parts[1].substring(n);
    if (rem && greaterThanFive(rem, partDec, neg, mode)) {
        partDec = increment(partDec);
        if (partDec.length > n) {
            return (neg ? '-' : '') + increment(partInt, parseInt(partDec[0])) + '.' + partDec.substring(1);
        }
    }
    return (neg && parseInt(partInt) ? '-' : '') + partInt + '.' + partDec;
}
exports.roundOff = roundOff;
function greaterThanFive(part, pre, neg, mode) {
    if (!part || part === new Array(part.length + 1).join('0'))
        return false;
    // #region UP, DOWN, CEILING, FLOOR 
    if (mode === roundingModes_1.RoundingModes.DOWN || (!neg && mode === roundingModes_1.RoundingModes.FLOOR) ||
        (neg && mode === roundingModes_1.RoundingModes.CEILING))
        return false;
    if (mode === roundingModes_1.RoundingModes.UP || (neg && mode === roundingModes_1.RoundingModes.FLOOR) ||
        (!neg && mode === roundingModes_1.RoundingModes.CEILING))
        return true;
    // #endregion
    // case when part !== five
    var five = '5' + (new Array(part.length).join('0'));
    if (part > five)
        return true;
    else if (part < five)
        return false;
    // case when part === five
    switch (mode) {
        case roundingModes_1.RoundingModes.HALF_DOWN: return false;
        case roundingModes_1.RoundingModes.HALF_UP: return true;
        case roundingModes_1.RoundingModes.HALF_EVEN:
        default: return (parseInt(pre[pre.length - 1]) % 2 == 1);
    }
}
function increment(part, c) {
    if (c === void 0) { c = 0; }
    if (!c)
        c = 1;
    if (typeof (part) == 'number')
        part.toString();
    var l = part.length - 1, s = '';
    for (var i = l; i >= 0; i--) {
        var x = parseInt(part[i]) + c;
        if (x == 10) {
            c = 1;
            x = 0;
        }
        else {
            c = 0;
        }
        s += x;
    }
    if (c)
        s += c;
    return s.split('').reverse().join('');
}


/***/ }),

/***/ 916:
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RoundingModes = void 0;
var RoundingModes;
(function (RoundingModes) {
    /**
     * Rounding mode to round towards positive infinity.
     */
    RoundingModes[RoundingModes["CEILING"] = 0] = "CEILING";
    /**
     * Rounding mode to round towards zero.
     */
    RoundingModes[RoundingModes["DOWN"] = 1] = "DOWN";
    /**
     * Rounding mode to round towards negative infinity.
     */
    RoundingModes[RoundingModes["FLOOR"] = 2] = "FLOOR";
    /**
     * Rounding mode to round towards "nearest neighbor" unless both neighbors are equidistant,
     * in which case round down.
     */
    RoundingModes[RoundingModes["HALF_DOWN"] = 3] = "HALF_DOWN";
    /**
     * Rounding mode to round towards the "nearest neighbor" unless both neighbors are equidistant,
     * in which case, round towards the even neighbor.
     */
    RoundingModes[RoundingModes["HALF_EVEN"] = 4] = "HALF_EVEN";
    /**
     * Rounding mode to round towards "nearest neighbor" unless both neighbors are equidistant,
     * in which case round up.
     */
    RoundingModes[RoundingModes["HALF_UP"] = 5] = "HALF_UP";
    /**
     * Rounding mode to assert that the requested operation has an exact result, hence no rounding is necessary.
     * UNIMPLEMENTED
     */
    RoundingModes[RoundingModes["UNNECESSARY"] = 6] = "UNNECESSARY";
    /**
     * Rounding mode to round away from zero.
     */
    RoundingModes[RoundingModes["UP"] = 7] = "UP";
})(RoundingModes = exports.RoundingModes || (exports.RoundingModes = {}));


/***/ }),

/***/ 26:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.negate = exports.subtract = void 0;
var add_1 = __webpack_require__(217);
function subtract(number1, number2) {
    number1 = number1.toString();
    number2 = number2.toString();
    number2 = negate(number2);
    return (0, add_1.add)(number1, number2);
}
exports.subtract = subtract;
function negate(number) {
    if (number[0] == '-') {
        number = number.substr(1);
    }
    else {
        number = '-' + number;
    }
    return number;
}
exports.negate = negate;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(423);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/moment/min/moment-with-locales.min.js":
/*!************************************************************!*\
  !*** ./node_modules/moment/min/moment-with-locales.min.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {!function(e,a){ true?module.exports=a():undefined}(this,function(){"use strict";var E;function M(){return E.apply(null,arguments)}function F(e){return e instanceof Array||"[object Array]"===Object.prototype.toString.call(e)}function z(e){return null!=e&&"[object Object]"===Object.prototype.toString.call(e)}function l(e,a){return Object.prototype.hasOwnProperty.call(e,a)}function N(e){if(Object.getOwnPropertyNames)return 0===Object.getOwnPropertyNames(e).length;for(var a in e)if(l(e,a))return;return 1}function d(e){return void 0===e}function J(e){return"number"==typeof e||"[object Number]"===Object.prototype.toString.call(e)}function R(e){return e instanceof Date||"[object Date]"===Object.prototype.toString.call(e)}function C(e,a){for(var t=[],s=e.length,n=0;n<s;++n)t.push(a(e[n],n));return t}function I(e,a){for(var t in a)l(a,t)&&(e[t]=a[t]);return l(a,"toString")&&(e.toString=a.toString),l(a,"valueOf")&&(e.valueOf=a.valueOf),e}function U(e,a,t,s){return Fa(e,a,t,s,!0).utc()}function h(e){return null==e._pf&&(e._pf={empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}),e._pf}function G(e){if(null==e._isValid){var a=h(e),t=B.call(a.parsedDateParts,function(e){return null!=e}),t=!isNaN(e._d.getTime())&&a.overflow<0&&!a.empty&&!a.invalidEra&&!a.invalidMonth&&!a.invalidWeekday&&!a.weekdayMismatch&&!a.nullInput&&!a.invalidFormat&&!a.userInvalidated&&(!a.meridiem||a.meridiem&&t);if(e._strict&&(t=t&&0===a.charsLeftOver&&0===a.unusedTokens.length&&void 0===a.bigHour),null!=Object.isFrozen&&Object.isFrozen(e))return t;e._isValid=t}return e._isValid}function V(e){var a=U(NaN);return null!=e?I(h(a),e):h(a).userInvalidated=!0,a}var B=Array.prototype.some||function(e){for(var a=Object(this),t=a.length>>>0,s=0;s<t;s++)if(s in a&&e.call(this,a[s],s,a))return!0;return!1},K=M.momentProperties=[],q=!1;function Z(e,a){var t,s,n,r=K.length;if(d(a._isAMomentObject)||(e._isAMomentObject=a._isAMomentObject),d(a._i)||(e._i=a._i),d(a._f)||(e._f=a._f),d(a._l)||(e._l=a._l),d(a._strict)||(e._strict=a._strict),d(a._tzm)||(e._tzm=a._tzm),d(a._isUTC)||(e._isUTC=a._isUTC),d(a._offset)||(e._offset=a._offset),d(a._pf)||(e._pf=h(a)),d(a._locale)||(e._locale=a._locale),0<r)for(t=0;t<r;t++)d(n=a[s=K[t]])||(e[s]=n);return e}function $(e){Z(this,e),this._d=new Date(null!=e._d?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),!1===q&&(q=!0,M.updateOffset(this),q=!1)}function Q(e){return e instanceof $||null!=e&&null!=e._isAMomentObject}function X(e){!1===M.suppressDeprecationWarnings&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+e)}function e(r,d){var i=!0;return I(function(){if(null!=M.deprecationHandler&&M.deprecationHandler(null,r),i){for(var e,a,t=[],s=arguments.length,n=0;n<s;n++){if(e="","object"==typeof arguments[n]){for(a in e+="\n["+n+"] ",arguments[0])l(arguments[0],a)&&(e+=a+": "+arguments[0][a]+", ");e=e.slice(0,-2)}else e=arguments[n];t.push(e)}X(r+"\nArguments: "+Array.prototype.slice.call(t).join("")+"\n"+(new Error).stack),i=!1}return d.apply(this,arguments)},d)}var ee={};function ae(e,a){null!=M.deprecationHandler&&M.deprecationHandler(e,a),ee[e]||(X(a),ee[e]=!0)}function te(e){return"undefined"!=typeof Function&&e instanceof Function||"[object Function]"===Object.prototype.toString.call(e)}function se(e,a){var t,s=I({},e);for(t in a)l(a,t)&&(z(e[t])&&z(a[t])?(s[t]={},I(s[t],e[t]),I(s[t],a[t])):null!=a[t]?s[t]=a[t]:delete s[t]);for(t in e)l(e,t)&&!l(a,t)&&z(e[t])&&(s[t]=I({},s[t]));return s}function ne(e){null!=e&&this.set(e)}M.suppressDeprecationWarnings=!1,M.deprecationHandler=null;var re=Object.keys||function(e){var a,t=[];for(a in e)l(e,a)&&t.push(a);return t};function de(e,a,t){var s=""+Math.abs(e);return(0<=e?t?"+":"":"-")+Math.pow(10,Math.max(0,a-s.length)).toString().substr(1)+s}var ie=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,_e=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,oe={},me={};function s(e,a,t,s){var n="string"==typeof s?function(){return this[s]()}:s;e&&(me[e]=n),a&&(me[a[0]]=function(){return de(n.apply(this,arguments),a[1],a[2])}),t&&(me[t]=function(){return this.localeData().ordinal(n.apply(this,arguments),e)})}function ue(e,a){return e.isValid()?(a=le(a,e.localeData()),oe[a]=oe[a]||function(s){for(var e,n=s.match(ie),a=0,r=n.length;a<r;a++)me[n[a]]?n[a]=me[n[a]]:n[a]=(e=n[a]).match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"");return function(e){for(var a="",t=0;t<r;t++)a+=te(n[t])?n[t].call(e,s):n[t];return a}}(a),oe[a](e)):e.localeData().invalidDate()}function le(e,a){var t=5;function s(e){return a.longDateFormat(e)||e}for(_e.lastIndex=0;0<=t&&_e.test(e);)e=e.replace(_e,s),_e.lastIndex=0,--t;return e}var Me={};function a(e,a){var t=e.toLowerCase();Me[t]=Me[t+"s"]=Me[a]=e}function i(e){return"string"==typeof e?Me[e]||Me[e.toLowerCase()]:void 0}function he(e){var a,t,s={};for(t in e)l(e,t)&&(a=i(t))&&(s[a]=e[t]);return s}var ce={};function t(e,a){ce[e]=a}function Le(e){return e%4==0&&e%100!=0||e%400==0}function u(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function m(e){var e=+e,a=0;return a=0!=e&&isFinite(e)?u(e):a}function Ye(a,t){return function(e){return null!=e?(fe(this,a,e),M.updateOffset(this,t),this):ye(this,a)}}function ye(e,a){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+a]():NaN}function fe(e,a,t){e.isValid()&&!isNaN(t)&&("FullYear"===a&&Le(e.year())&&1===e.month()&&29===e.date()?(t=m(t),e._d["set"+(e._isUTC?"UTC":"")+a](t,e.month(),ze(t,e.month()))):e._d["set"+(e._isUTC?"UTC":"")+a](t))}var n=/\d/,r=/\d\d/,pe=/\d{3}/,ke=/\d{4}/,_=/[+-]?\d{6}/,o=/\d\d?/,c=/\d\d\d\d?/,L=/\d\d\d\d\d\d?/,De=/\d{1,3}/,Y=/\d{1,4}/,y=/[+-]?\d{1,6}/,Te=/\d+/,ge=/[+-]?\d+/,we=/Z|[+-]\d\d:?\d\d/gi,be=/Z|[+-]\d\d(?::?\d\d)?/gi,f=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;function p(e,t,s){He[e]=te(t)?t:function(e,a){return e&&s?s:t}}function Se(e,a){return l(He,e)?He[e](a._strict,a._locale):new RegExp(k(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,a,t,s,n){return a||t||s||n})))}function k(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var He={},ve={};function D(e,t){var a,s,n=t;for("string"==typeof e&&(e=[e]),J(t)&&(n=function(e,a){a[t]=m(e)}),s=e.length,a=0;a<s;a++)ve[e[a]]=n}function je(e,n){D(e,function(e,a,t,s){t._w=t._w||{},n(e,t._w,t,s)})}var T,g=0,xe=1,Pe=2,w=3,Oe=4,We=5,Ae=6,Ee=7,Fe=8;function ze(e,a){if(isNaN(e)||isNaN(a))return NaN;var t=(a%(t=12)+t)%t;return e+=(a-t)/12,1==t?Le(e)?29:28:31-t%7%2}T=Array.prototype.indexOf||function(e){for(var a=0;a<this.length;++a)if(this[a]===e)return a;return-1},s("M",["MM",2],"Mo",function(){return this.month()+1}),s("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)}),s("MMMM",0,0,function(e){return this.localeData().months(this,e)}),a("month","M"),t("month",8),p("M",o),p("MM",o,r),p("MMM",function(e,a){return a.monthsShortRegex(e)}),p("MMMM",function(e,a){return a.monthsRegex(e)}),D(["M","MM"],function(e,a){a[xe]=m(e)-1}),D(["MMM","MMMM"],function(e,a,t,s){s=t._locale.monthsParse(e,s,t._strict);null!=s?a[xe]=s:h(t).invalidMonth=e});var Ne="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),Je="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),Re=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,Ce=f,Ie=f;function Ue(e,a){var t;if(e.isValid()){if("string"==typeof a)if(/^\d+$/.test(a))a=m(a);else if(!J(a=e.localeData().monthsParse(a)))return;t=Math.min(e.date(),ze(e.year(),a)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](a,t)}}function Ge(e){return null!=e?(Ue(this,e),M.updateOffset(this,!0),this):ye(this,"Month")}function Ve(){function e(e,a){return a.length-e.length}for(var a,t=[],s=[],n=[],r=0;r<12;r++)a=U([2e3,r]),t.push(this.monthsShort(a,"")),s.push(this.months(a,"")),n.push(this.months(a,"")),n.push(this.monthsShort(a,""));for(t.sort(e),s.sort(e),n.sort(e),r=0;r<12;r++)t[r]=k(t[r]),s[r]=k(s[r]);for(r=0;r<24;r++)n[r]=k(n[r]);this._monthsRegex=new RegExp("^("+n.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+s.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+t.join("|")+")","i")}function Be(e){return Le(e)?366:365}s("Y",0,0,function(){var e=this.year();return e<=9999?de(e,4):"+"+e}),s(0,["YY",2],0,function(){return this.year()%100}),s(0,["YYYY",4],0,"year"),s(0,["YYYYY",5],0,"year"),s(0,["YYYYYY",6,!0],0,"year"),a("year","y"),t("year",1),p("Y",ge),p("YY",o,r),p("YYYY",Y,ke),p("YYYYY",y,_),p("YYYYYY",y,_),D(["YYYYY","YYYYYY"],g),D("YYYY",function(e,a){a[g]=2===e.length?M.parseTwoDigitYear(e):m(e)}),D("YY",function(e,a){a[g]=M.parseTwoDigitYear(e)}),D("Y",function(e,a){a[g]=parseInt(e,10)}),M.parseTwoDigitYear=function(e){return m(e)+(68<m(e)?1900:2e3)};var Ke=Ye("FullYear",!0);function qe(e,a,t,s,n,r,d){var i;return e<100&&0<=e?(i=new Date(e+400,a,t,s,n,r,d),isFinite(i.getFullYear())&&i.setFullYear(e)):i=new Date(e,a,t,s,n,r,d),i}function Ze(e){var a;return e<100&&0<=e?((a=Array.prototype.slice.call(arguments))[0]=e+400,a=new Date(Date.UTC.apply(null,a)),isFinite(a.getUTCFullYear())&&a.setUTCFullYear(e)):a=new Date(Date.UTC.apply(null,arguments)),a}function $e(e,a,t){t=7+a-t;return t-(7+Ze(e,0,t).getUTCDay()-a)%7-1}function Qe(e,a,t,s,n){var r,a=1+7*(a-1)+(7+t-s)%7+$e(e,s,n),t=a<=0?Be(r=e-1)+a:a>Be(e)?(r=e+1,a-Be(e)):(r=e,a);return{year:r,dayOfYear:t}}function Xe(e,a,t){var s,n,r=$e(e.year(),a,t),r=Math.floor((e.dayOfYear()-r-1)/7)+1;return r<1?s=r+ea(n=e.year()-1,a,t):r>ea(e.year(),a,t)?(s=r-ea(e.year(),a,t),n=e.year()+1):(n=e.year(),s=r),{week:s,year:n}}function ea(e,a,t){var s=$e(e,a,t),a=$e(e+1,a,t);return(Be(e)-s+a)/7}s("w",["ww",2],"wo","week"),s("W",["WW",2],"Wo","isoWeek"),a("week","w"),a("isoWeek","W"),t("week",5),t("isoWeek",5),p("w",o),p("ww",o,r),p("W",o),p("WW",o,r),je(["w","ww","W","WW"],function(e,a,t,s){a[s.substr(0,1)]=m(e)});function aa(e,a){return e.slice(a,7).concat(e.slice(0,a))}s("d",0,"do","day"),s("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)}),s("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)}),s("dddd",0,0,function(e){return this.localeData().weekdays(this,e)}),s("e",0,0,"weekday"),s("E",0,0,"isoWeekday"),a("day","d"),a("weekday","e"),a("isoWeekday","E"),t("day",11),t("weekday",11),t("isoWeekday",11),p("d",o),p("e",o),p("E",o),p("dd",function(e,a){return a.weekdaysMinRegex(e)}),p("ddd",function(e,a){return a.weekdaysShortRegex(e)}),p("dddd",function(e,a){return a.weekdaysRegex(e)}),je(["dd","ddd","dddd"],function(e,a,t,s){s=t._locale.weekdaysParse(e,s,t._strict);null!=s?a.d=s:h(t).invalidWeekday=e}),je(["d","e","E"],function(e,a,t,s){a[s]=m(e)});var ta="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),sa="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),na="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),ra=f,da=f,ia=f;function _a(){function e(e,a){return a.length-e.length}for(var a,t,s,n=[],r=[],d=[],i=[],_=0;_<7;_++)s=U([2e3,1]).day(_),a=k(this.weekdaysMin(s,"")),t=k(this.weekdaysShort(s,"")),s=k(this.weekdays(s,"")),n.push(a),r.push(t),d.push(s),i.push(a),i.push(t),i.push(s);n.sort(e),r.sort(e),d.sort(e),i.sort(e),this._weekdaysRegex=new RegExp("^("+i.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+d.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+r.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+n.join("|")+")","i")}function oa(){return this.hours()%12||12}function ma(e,a){s(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),a)})}function ua(e,a){return a._meridiemParse}s("H",["HH",2],0,"hour"),s("h",["hh",2],0,oa),s("k",["kk",2],0,function(){return this.hours()||24}),s("hmm",0,0,function(){return""+oa.apply(this)+de(this.minutes(),2)}),s("hmmss",0,0,function(){return""+oa.apply(this)+de(this.minutes(),2)+de(this.seconds(),2)}),s("Hmm",0,0,function(){return""+this.hours()+de(this.minutes(),2)}),s("Hmmss",0,0,function(){return""+this.hours()+de(this.minutes(),2)+de(this.seconds(),2)}),ma("a",!0),ma("A",!1),a("hour","h"),t("hour",13),p("a",ua),p("A",ua),p("H",o),p("h",o),p("k",o),p("HH",o,r),p("hh",o,r),p("kk",o,r),p("hmm",c),p("hmmss",L),p("Hmm",c),p("Hmmss",L),D(["H","HH"],w),D(["k","kk"],function(e,a,t){e=m(e);a[w]=24===e?0:e}),D(["a","A"],function(e,a,t){t._isPm=t._locale.isPM(e),t._meridiem=e}),D(["h","hh"],function(e,a,t){a[w]=m(e),h(t).bigHour=!0}),D("hmm",function(e,a,t){var s=e.length-2;a[w]=m(e.substr(0,s)),a[Oe]=m(e.substr(s)),h(t).bigHour=!0}),D("hmmss",function(e,a,t){var s=e.length-4,n=e.length-2;a[w]=m(e.substr(0,s)),a[Oe]=m(e.substr(s,2)),a[We]=m(e.substr(n)),h(t).bigHour=!0}),D("Hmm",function(e,a,t){var s=e.length-2;a[w]=m(e.substr(0,s)),a[Oe]=m(e.substr(s))}),D("Hmmss",function(e,a,t){var s=e.length-4,n=e.length-2;a[w]=m(e.substr(0,s)),a[Oe]=m(e.substr(s,2)),a[We]=m(e.substr(n))});f=Ye("Hours",!0);var la,Ma={calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},longDateFormat:{LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},invalidDate:"Invalid date",ordinal:"%d",dayOfMonthOrdinalParse:/\d{1,2}/,relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},months:Ne,monthsShort:Je,week:{dow:0,doy:6},weekdays:ta,weekdaysMin:na,weekdaysShort:sa,meridiemParse:/[ap]\.?m?\.?/i},b={},ha={};function ca(e){return e&&e.toLowerCase().replace("_","-")}function La(e){for(var a,t,s,n,r=0;r<e.length;){for(a=(n=ca(e[r]).split("-")).length,t=(t=ca(e[r+1]))?t.split("-"):null;0<a;){if(s=Ya(n.slice(0,a).join("-")))return s;if(t&&t.length>=a&&function(e,a){for(var t=Math.min(e.length,a.length),s=0;s<t;s+=1)if(e[s]!==a[s])return s;return t}(n,t)>=a-1)break;a--}r++}return la}function Ya(a){var e;if(void 0===b[a]&&"undefined"!=typeof module&&module&&module.exports&&null!=a.match("^[^/\\\\]*$"))try{e=la._abbr,!(function webpackMissingModule() { var e = new Error("Cannot find module 'undefined'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),ya(e)}catch(e){b[a]=null}return b[a]}function ya(e,a){return e&&((a=d(a)?pa(e):fa(e,a))?la=a:"undefined"!=typeof console&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),la._abbr}function fa(e,a){if(null===a)return delete b[e],null;var t,s=Ma;if(a.abbr=e,null!=b[e])ae("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),s=b[e]._config;else if(null!=a.parentLocale)if(null!=b[a.parentLocale])s=b[a.parentLocale]._config;else{if(null==(t=Ya(a.parentLocale)))return ha[a.parentLocale]||(ha[a.parentLocale]=[]),ha[a.parentLocale].push({name:e,config:a}),null;s=t._config}return b[e]=new ne(se(s,a)),ha[e]&&ha[e].forEach(function(e){fa(e.name,e.config)}),ya(e),b[e]}function pa(e){var a;if(!(e=e&&e._locale&&e._locale._abbr?e._locale._abbr:e))return la;if(!F(e)){if(a=Ya(e))return a;e=[e]}return La(e)}function ka(e){var a=e._a;return a&&-2===h(e).overflow&&(a=a[xe]<0||11<a[xe]?xe:a[Pe]<1||a[Pe]>ze(a[g],a[xe])?Pe:a[w]<0||24<a[w]||24===a[w]&&(0!==a[Oe]||0!==a[We]||0!==a[Ae])?w:a[Oe]<0||59<a[Oe]?Oe:a[We]<0||59<a[We]?We:a[Ae]<0||999<a[Ae]?Ae:-1,h(e)._overflowDayOfYear&&(a<g||Pe<a)&&(a=Pe),h(e)._overflowWeeks&&-1===a&&(a=Ee),h(e)._overflowWeekday&&-1===a&&(a=Fe),h(e).overflow=a),e}var Da=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Ta=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,ga=/Z|[+-]\d\d(?::?\d\d)?/,wa=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],ba=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Sa=/^\/?Date\((-?\d+)/i,Ha=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,va={UT:0,GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function ja(e){var a,t,s,n,r,d,i=e._i,_=Da.exec(i)||Ta.exec(i),i=wa.length,o=ba.length;if(_){for(h(e).iso=!0,a=0,t=i;a<t;a++)if(wa[a][1].exec(_[1])){n=wa[a][0],s=!1!==wa[a][2];break}if(null==n)e._isValid=!1;else{if(_[3]){for(a=0,t=o;a<t;a++)if(ba[a][1].exec(_[3])){r=(_[2]||" ")+ba[a][0];break}if(null==r)return void(e._isValid=!1)}if(s||null==r){if(_[4]){if(!ga.exec(_[4]))return void(e._isValid=!1);d="Z"}e._f=n+(r||"")+(d||""),Aa(e)}else e._isValid=!1}}else e._isValid=!1}function xa(e,a,t,s,n,r){e=[function(e){e=parseInt(e,10);{if(e<=49)return 2e3+e;if(e<=999)return 1900+e}return e}(e),Je.indexOf(a),parseInt(t,10),parseInt(s,10),parseInt(n,10)];return r&&e.push(parseInt(r,10)),e}function Pa(e){var a,t,s,n,r=Ha.exec(e._i.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,""));r?(a=xa(r[4],r[3],r[2],r[5],r[6],r[7]),t=r[1],s=a,n=e,t&&sa.indexOf(t)!==new Date(s[0],s[1],s[2]).getDay()?(h(n).weekdayMismatch=!0,n._isValid=!1):(e._a=a,e._tzm=(t=r[8],s=r[9],n=r[10],t?va[t]:s?0:60*(((t=parseInt(n,10))-(s=t%100))/100)+s),e._d=Ze.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),h(e).rfc2822=!0)):e._isValid=!1}function Oa(e,a,t){return null!=e?e:null!=a?a:t}function Wa(e){var a,t,s,n,r,d,i,_,o,m,u,l=[];if(!e._d){for(s=e,n=new Date(M.now()),t=s._useUTC?[n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate()]:[n.getFullYear(),n.getMonth(),n.getDate()],e._w&&null==e._a[Pe]&&null==e._a[xe]&&(null!=(n=(s=e)._w).GG||null!=n.W||null!=n.E?(_=1,o=4,r=Oa(n.GG,s._a[g],Xe(S(),1,4).year),d=Oa(n.W,1),((i=Oa(n.E,1))<1||7<i)&&(m=!0)):(_=s._locale._week.dow,o=s._locale._week.doy,u=Xe(S(),_,o),r=Oa(n.gg,s._a[g],u.year),d=Oa(n.w,u.week),null!=n.d?((i=n.d)<0||6<i)&&(m=!0):null!=n.e?(i=n.e+_,(n.e<0||6<n.e)&&(m=!0)):i=_),d<1||d>ea(r,_,o)?h(s)._overflowWeeks=!0:null!=m?h(s)._overflowWeekday=!0:(u=Qe(r,d,i,_,o),s._a[g]=u.year,s._dayOfYear=u.dayOfYear)),null!=e._dayOfYear&&(n=Oa(e._a[g],t[g]),(e._dayOfYear>Be(n)||0===e._dayOfYear)&&(h(e)._overflowDayOfYear=!0),m=Ze(n,0,e._dayOfYear),e._a[xe]=m.getUTCMonth(),e._a[Pe]=m.getUTCDate()),a=0;a<3&&null==e._a[a];++a)e._a[a]=l[a]=t[a];for(;a<7;a++)e._a[a]=l[a]=null==e._a[a]?2===a?1:0:e._a[a];24===e._a[w]&&0===e._a[Oe]&&0===e._a[We]&&0===e._a[Ae]&&(e._nextDay=!0,e._a[w]=0),e._d=(e._useUTC?Ze:qe).apply(null,l),r=e._useUTC?e._d.getUTCDay():e._d.getDay(),null!=e._tzm&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[w]=24),e._w&&void 0!==e._w.d&&e._w.d!==r&&(h(e).weekdayMismatch=!0)}}function Aa(e){if(e._f===M.ISO_8601)ja(e);else if(e._f===M.RFC_2822)Pa(e);else{e._a=[],h(e).empty=!0;for(var a,t,s,n,r,d=""+e._i,i=d.length,_=0,o=le(e._f,e._locale).match(ie)||[],m=o.length,u=0;u<m;u++)t=o[u],(a=(d.match(Se(t,e))||[])[0])&&(0<(s=d.substr(0,d.indexOf(a))).length&&h(e).unusedInput.push(s),d=d.slice(d.indexOf(a)+a.length),_+=a.length),me[t]?(a?h(e).empty=!1:h(e).unusedTokens.push(t),s=t,r=e,null!=(n=a)&&l(ve,s)&&ve[s](n,r._a,r,s)):e._strict&&!a&&h(e).unusedTokens.push(t);h(e).charsLeftOver=i-_,0<d.length&&h(e).unusedInput.push(d),e._a[w]<=12&&!0===h(e).bigHour&&0<e._a[w]&&(h(e).bigHour=void 0),h(e).parsedDateParts=e._a.slice(0),h(e).meridiem=e._meridiem,e._a[w]=function(e,a,t){if(null==t)return a;return null!=e.meridiemHour?e.meridiemHour(a,t):null!=e.isPM?((e=e.isPM(t))&&a<12&&(a+=12),a=e||12!==a?a:0):a}(e._locale,e._a[w],e._meridiem),null!==(i=h(e).era)&&(e._a[g]=e._locale.erasConvertYear(i,e._a[g])),Wa(e),ka(e)}}function Ea(e){var a,t,s,n=e._i,r=e._f;if(e._locale=e._locale||pa(e._l),null===n||void 0===r&&""===n)return V({nullInput:!0});if("string"==typeof n&&(e._i=n=e._locale.preparse(n)),Q(n))return new $(ka(n));if(R(n))e._d=n;else if(F(r))!function(e){var a,t,s,n,r,d,i=!1,_=e._f.length;if(0===_)return h(e).invalidFormat=!0,e._d=new Date(NaN);for(n=0;n<_;n++)r=0,d=!1,a=Z({},e),null!=e._useUTC&&(a._useUTC=e._useUTC),a._f=e._f[n],Aa(a),G(a)&&(d=!0),r=(r+=h(a).charsLeftOver)+10*h(a).unusedTokens.length,h(a).score=r,i?r<s&&(s=r,t=a):(null==s||r<s||d)&&(s=r,t=a,d&&(i=!0));I(e,t||a)}(e);else if(r)Aa(e);else if(d(r=(n=e)._i))n._d=new Date(M.now());else R(r)?n._d=new Date(r.valueOf()):"string"==typeof r?(t=n,null!==(a=Sa.exec(t._i))?t._d=new Date(+a[1]):(ja(t),!1===t._isValid&&(delete t._isValid,Pa(t),!1===t._isValid&&(delete t._isValid,t._strict?t._isValid=!1:M.createFromInputFallback(t))))):F(r)?(n._a=C(r.slice(0),function(e){return parseInt(e,10)}),Wa(n)):z(r)?(a=n)._d||(s=void 0===(t=he(a._i)).day?t.date:t.day,a._a=C([t.year,t.month,s,t.hour,t.minute,t.second,t.millisecond],function(e){return e&&parseInt(e,10)}),Wa(a)):J(r)?n._d=new Date(r):M.createFromInputFallback(n);return G(e)||(e._d=null),e}function Fa(e,a,t,s,n){var r={};return!0!==a&&!1!==a||(s=a,a=void 0),!0!==t&&!1!==t||(s=t,t=void 0),(z(e)&&N(e)||F(e)&&0===e.length)&&(e=void 0),r._isAMomentObject=!0,r._useUTC=r._isUTC=n,r._l=t,r._i=e,r._f=a,r._strict=s,(n=new $(ka(Ea(n=r))))._nextDay&&(n.add(1,"d"),n._nextDay=void 0),n}function S(e,a,t,s){return Fa(e,a,t,s,!1)}M.createFromInputFallback=e("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))}),M.ISO_8601=function(){},M.RFC_2822=function(){};c=e("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=S.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:V()}),L=e("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=S.apply(null,arguments);return this.isValid()&&e.isValid()?this<e?this:e:V()});function za(e,a){var t,s;if(!(a=1===a.length&&F(a[0])?a[0]:a).length)return S();for(t=a[0],s=1;s<a.length;++s)a[s].isValid()&&!a[s][e](t)||(t=a[s]);return t}var Na=["year","quarter","month","week","day","hour","minute","second","millisecond"];function Ja(e){var e=he(e),a=e.year||0,t=e.quarter||0,s=e.month||0,n=e.week||e.isoWeek||0,r=e.day||0,d=e.hour||0,i=e.minute||0,_=e.second||0,o=e.millisecond||0;this._isValid=function(e){var a,t,s=!1,n=Na.length;for(a in e)if(l(e,a)&&(-1===T.call(Na,a)||null!=e[a]&&isNaN(e[a])))return!1;for(t=0;t<n;++t)if(e[Na[t]]){if(s)return!1;parseFloat(e[Na[t]])!==m(e[Na[t]])&&(s=!0)}return!0}(e),this._milliseconds=+o+1e3*_+6e4*i+1e3*d*60*60,this._days=+r+7*n,this._months=+s+3*t+12*a,this._data={},this._locale=pa(),this._bubble()}function Ra(e){return e instanceof Ja}function Ca(e){return e<0?-1*Math.round(-1*e):Math.round(e)}function Ia(e,t){s(e,0,0,function(){var e=this.utcOffset(),a="+";return e<0&&(e=-e,a="-"),a+de(~~(e/60),2)+t+de(~~e%60,2)})}Ia("Z",":"),Ia("ZZ",""),p("Z",be),p("ZZ",be),D(["Z","ZZ"],function(e,a,t){t._useUTC=!0,t._tzm=Ga(be,e)});var Ua=/([\+\-]|\d\d)/gi;function Ga(e,a){var a=(a||"").match(e);return null===a?null:0===(a=60*(e=((a[a.length-1]||[])+"").match(Ua)||["-",0,0])[1]+m(e[2]))?0:"+"===e[0]?a:-a}function Va(e,a){var t;return a._isUTC?(a=a.clone(),t=(Q(e)||R(e)?e:S(e)).valueOf()-a.valueOf(),a._d.setTime(a._d.valueOf()+t),M.updateOffset(a,!1),a):S(e).local()}function Ba(e){return-Math.round(e._d.getTimezoneOffset())}function Ka(){return!!this.isValid()&&(this._isUTC&&0===this._offset)}M.updateOffset=function(){};var qa=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,Za=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function $a(e,a){var t,s=e,n=null;return Ra(e)?s={ms:e._milliseconds,d:e._days,M:e._months}:J(e)||!isNaN(+e)?(s={},a?s[a]=+e:s.milliseconds=+e):(n=qa.exec(e))?(t="-"===n[1]?-1:1,s={y:0,d:m(n[Pe])*t,h:m(n[w])*t,m:m(n[Oe])*t,s:m(n[We])*t,ms:m(Ca(1e3*n[Ae]))*t}):(n=Za.exec(e))?(t="-"===n[1]?-1:1,s={y:Qa(n[2],t),M:Qa(n[3],t),w:Qa(n[4],t),d:Qa(n[5],t),h:Qa(n[6],t),m:Qa(n[7],t),s:Qa(n[8],t)}):null==s?s={}:"object"==typeof s&&("from"in s||"to"in s)&&(a=function(e,a){var t;if(!e.isValid()||!a.isValid())return{milliseconds:0,months:0};a=Va(a,e),e.isBefore(a)?t=Xa(e,a):((t=Xa(a,e)).milliseconds=-t.milliseconds,t.months=-t.months);return t}(S(s.from),S(s.to)),(s={}).ms=a.milliseconds,s.M=a.months),n=new Ja(s),Ra(e)&&l(e,"_locale")&&(n._locale=e._locale),Ra(e)&&l(e,"_isValid")&&(n._isValid=e._isValid),n}function Qa(e,a){e=e&&parseFloat(e.replace(",","."));return(isNaN(e)?0:e)*a}function Xa(e,a){var t={};return t.months=a.month()-e.month()+12*(a.year()-e.year()),e.clone().add(t.months,"M").isAfter(a)&&--t.months,t.milliseconds=+a-+e.clone().add(t.months,"M"),t}function et(s,n){return function(e,a){var t;return null===a||isNaN(+a)||(ae(n,"moment()."+n+"(period, number) is deprecated. Please use moment()."+n+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),t=e,e=a,a=t),at(this,$a(e,a),s),this}}function at(e,a,t,s){var n=a._milliseconds,r=Ca(a._days),a=Ca(a._months);e.isValid()&&(s=null==s||s,a&&Ue(e,ye(e,"Month")+a*t),r&&fe(e,"Date",ye(e,"Date")+r*t),n&&e._d.setTime(e._d.valueOf()+n*t),s&&M.updateOffset(e,r||a))}$a.fn=Ja.prototype,$a.invalid=function(){return $a(NaN)};Ne=et(1,"add"),ta=et(-1,"subtract");function tt(e){return"string"==typeof e||e instanceof String}function st(e){return Q(e)||R(e)||tt(e)||J(e)||function(a){var e=F(a),t=!1;e&&(t=0===a.filter(function(e){return!J(e)&&tt(a)}).length);return e&&t}(e)||function(e){var a,t,s=z(e)&&!N(e),n=!1,r=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],d=r.length;for(a=0;a<d;a+=1)t=r[a],n=n||l(e,t);return s&&n}(e)||null==e}function nt(e,a){if(e.date()<a.date())return-nt(a,e);var t=12*(a.year()-e.year())+(a.month()-e.month()),s=e.clone().add(t,"months"),a=a-s<0?(a-s)/(s-e.clone().add(t-1,"months")):(a-s)/(e.clone().add(1+t,"months")-s);return-(t+a)||0}function rt(e){return void 0===e?this._locale._abbr:(null!=(e=pa(e))&&(this._locale=e),this)}M.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",M.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";na=e("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return void 0===e?this.localeData():this.locale(e)});function dt(){return this._locale}var it=126227808e5;function _t(e,a){return(e%a+a)%a}function ot(e,a,t){return e<100&&0<=e?new Date(e+400,a,t)-it:new Date(e,a,t).valueOf()}function mt(e,a,t){return e<100&&0<=e?Date.UTC(e+400,a,t)-it:Date.UTC(e,a,t)}function ut(e,a){return a.erasAbbrRegex(e)}function lt(){for(var e=[],a=[],t=[],s=[],n=this.eras(),r=0,d=n.length;r<d;++r)a.push(k(n[r].name)),e.push(k(n[r].abbr)),t.push(k(n[r].narrow)),s.push(k(n[r].name)),s.push(k(n[r].abbr)),s.push(k(n[r].narrow));this._erasRegex=new RegExp("^("+s.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+a.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+e.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+t.join("|")+")","i")}function Mt(e,a){s(0,[e,e.length],0,a)}function ht(e,a,t,s,n){var r;return null==e?Xe(this,s,n).year:(r=ea(e,s,n),function(e,a,t,s,n){e=Qe(e,a,t,s,n),a=Ze(e.year,0,e.dayOfYear);return this.year(a.getUTCFullYear()),this.month(a.getUTCMonth()),this.date(a.getUTCDate()),this}.call(this,e,a=r<a?r:a,t,s,n))}s("N",0,0,"eraAbbr"),s("NN",0,0,"eraAbbr"),s("NNN",0,0,"eraAbbr"),s("NNNN",0,0,"eraName"),s("NNNNN",0,0,"eraNarrow"),s("y",["y",1],"yo","eraYear"),s("y",["yy",2],0,"eraYear"),s("y",["yyy",3],0,"eraYear"),s("y",["yyyy",4],0,"eraYear"),p("N",ut),p("NN",ut),p("NNN",ut),p("NNNN",function(e,a){return a.erasNameRegex(e)}),p("NNNNN",function(e,a){return a.erasNarrowRegex(e)}),D(["N","NN","NNN","NNNN","NNNNN"],function(e,a,t,s){s=t._locale.erasParse(e,s,t._strict);s?h(t).era=s:h(t).invalidEra=e}),p("y",Te),p("yy",Te),p("yyy",Te),p("yyyy",Te),p("yo",function(e,a){return a._eraYearOrdinalRegex||Te}),D(["y","yy","yyy","yyyy"],g),D(["yo"],function(e,a,t,s){var n;t._locale._eraYearOrdinalRegex&&(n=e.match(t._locale._eraYearOrdinalRegex)),t._locale.eraYearOrdinalParse?a[g]=t._locale.eraYearOrdinalParse(e,n):a[g]=parseInt(e,10)}),s(0,["gg",2],0,function(){return this.weekYear()%100}),s(0,["GG",2],0,function(){return this.isoWeekYear()%100}),Mt("gggg","weekYear"),Mt("ggggg","weekYear"),Mt("GGGG","isoWeekYear"),Mt("GGGGG","isoWeekYear"),a("weekYear","gg"),a("isoWeekYear","GG"),t("weekYear",1),t("isoWeekYear",1),p("G",ge),p("g",ge),p("GG",o,r),p("gg",o,r),p("GGGG",Y,ke),p("gggg",Y,ke),p("GGGGG",y,_),p("ggggg",y,_),je(["gggg","ggggg","GGGG","GGGGG"],function(e,a,t,s){a[s.substr(0,2)]=m(e)}),je(["gg","GG"],function(e,a,t,s){a[s]=M.parseTwoDigitYear(e)}),s("Q",0,"Qo","quarter"),a("quarter","Q"),t("quarter",7),p("Q",n),D("Q",function(e,a){a[xe]=3*(m(e)-1)}),s("D",["DD",2],"Do","date"),a("date","D"),t("date",9),p("D",o),p("DD",o,r),p("Do",function(e,a){return e?a._dayOfMonthOrdinalParse||a._ordinalParse:a._dayOfMonthOrdinalParseLenient}),D(["D","DD"],Pe),D("Do",function(e,a){a[Pe]=m(e.match(o)[0])});Y=Ye("Date",!0);s("DDD",["DDDD",3],"DDDo","dayOfYear"),a("dayOfYear","DDD"),t("dayOfYear",4),p("DDD",De),p("DDDD",pe),D(["DDD","DDDD"],function(e,a,t){t._dayOfYear=m(e)}),s("m",["mm",2],0,"minute"),a("minute","m"),t("minute",14),p("m",o),p("mm",o,r),D(["m","mm"],Oe);var ct,ke=Ye("Minutes",!1),y=(s("s",["ss",2],0,"second"),a("second","s"),t("second",15),p("s",o),p("ss",o,r),D(["s","ss"],We),Ye("Seconds",!1));for(s("S",0,0,function(){return~~(this.millisecond()/100)}),s(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),s(0,["SSS",3],0,"millisecond"),s(0,["SSSS",4],0,function(){return 10*this.millisecond()}),s(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),s(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),s(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),s(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),s(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),a("millisecond","ms"),t("millisecond",16),p("S",De,n),p("SS",De,r),p("SSS",De,pe),ct="SSSS";ct.length<=9;ct+="S")p(ct,Te);function Lt(e,a){a[Ae]=m(1e3*("0."+e))}for(ct="S";ct.length<=9;ct+="S")D(ct,Lt);_=Ye("Milliseconds",!1),s("z",0,0,"zoneAbbr"),s("zz",0,0,"zoneName");n=$.prototype;function Yt(e){return e}n.add=Ne,n.calendar=function(e,a){1===arguments.length&&(arguments[0]?st(arguments[0])?(e=arguments[0],a=void 0):function(e){for(var a=z(e)&&!N(e),t=!1,s=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],n=0;n<s.length;n+=1)t=t||l(e,s[n]);return a&&t}(arguments[0])&&(a=arguments[0],e=void 0):a=e=void 0);var e=e||S(),t=Va(e,this).startOf("day"),t=M.calendarFormat(this,t)||"sameElse",a=a&&(te(a[t])?a[t].call(this,e):a[t]);return this.format(a||this.localeData().calendar(t,this,S(e)))},n.clone=function(){return new $(this)},n.diff=function(e,a,t){var s,n,r;if(!this.isValid())return NaN;if(!(s=Va(e,this)).isValid())return NaN;switch(n=6e4*(s.utcOffset()-this.utcOffset()),a=i(a)){case"year":r=nt(this,s)/12;break;case"month":r=nt(this,s);break;case"quarter":r=nt(this,s)/3;break;case"second":r=(this-s)/1e3;break;case"minute":r=(this-s)/6e4;break;case"hour":r=(this-s)/36e5;break;case"day":r=(this-s-n)/864e5;break;case"week":r=(this-s-n)/6048e5;break;default:r=this-s}return t?r:u(r)},n.endOf=function(e){var a,t;if(void 0===(e=i(e))||"millisecond"===e||!this.isValid())return this;switch(t=this._isUTC?mt:ot,e){case"year":a=t(this.year()+1,0,1)-1;break;case"quarter":a=t(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":a=t(this.year(),this.month()+1,1)-1;break;case"week":a=t(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":a=t(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":a=t(this.year(),this.month(),this.date()+1)-1;break;case"hour":a=this._d.valueOf(),a+=36e5-_t(a+(this._isUTC?0:6e4*this.utcOffset()),36e5)-1;break;case"minute":a=this._d.valueOf(),a+=6e4-_t(a,6e4)-1;break;case"second":a=this._d.valueOf(),a+=1e3-_t(a,1e3)-1;break}return this._d.setTime(a),M.updateOffset(this,!0),this},n.format=function(e){return e=e||(this.isUtc()?M.defaultFormatUtc:M.defaultFormat),e=ue(this,e),this.localeData().postformat(e)},n.from=function(e,a){return this.isValid()&&(Q(e)&&e.isValid()||S(e).isValid())?$a({to:this,from:e}).locale(this.locale()).humanize(!a):this.localeData().invalidDate()},n.fromNow=function(e){return this.from(S(),e)},n.to=function(e,a){return this.isValid()&&(Q(e)&&e.isValid()||S(e).isValid())?$a({from:this,to:e}).locale(this.locale()).humanize(!a):this.localeData().invalidDate()},n.toNow=function(e){return this.to(S(),e)},n.get=function(e){return te(this[e=i(e)])?this[e]():this},n.invalidAt=function(){return h(this).overflow},n.isAfter=function(e,a){return e=Q(e)?e:S(e),!(!this.isValid()||!e.isValid())&&("millisecond"===(a=i(a)||"millisecond")?this.valueOf()>e.valueOf():e.valueOf()<this.clone().startOf(a).valueOf())},n.isBefore=function(e,a){return e=Q(e)?e:S(e),!(!this.isValid()||!e.isValid())&&("millisecond"===(a=i(a)||"millisecond")?this.valueOf()<e.valueOf():this.clone().endOf(a).valueOf()<e.valueOf())},n.isBetween=function(e,a,t,s){return e=Q(e)?e:S(e),a=Q(a)?a:S(a),!!(this.isValid()&&e.isValid()&&a.isValid())&&(("("===(s=s||"()")[0]?this.isAfter(e,t):!this.isBefore(e,t))&&(")"===s[1]?this.isBefore(a,t):!this.isAfter(a,t)))},n.isSame=function(e,a){var e=Q(e)?e:S(e);return!(!this.isValid()||!e.isValid())&&("millisecond"===(a=i(a)||"millisecond")?this.valueOf()===e.valueOf():(e=e.valueOf(),this.clone().startOf(a).valueOf()<=e&&e<=this.clone().endOf(a).valueOf()))},n.isSameOrAfter=function(e,a){return this.isSame(e,a)||this.isAfter(e,a)},n.isSameOrBefore=function(e,a){return this.isSame(e,a)||this.isBefore(e,a)},n.isValid=function(){return G(this)},n.lang=na,n.locale=rt,n.localeData=dt,n.max=L,n.min=c,n.parsingFlags=function(){return I({},h(this))},n.set=function(e,a){if("object"==typeof e)for(var t=function(e){var a,t=[];for(a in e)l(e,a)&&t.push({unit:a,priority:ce[a]});return t.sort(function(e,a){return e.priority-a.priority}),t}(e=he(e)),s=t.length,n=0;n<s;n++)this[t[n].unit](e[t[n].unit]);else if(te(this[e=i(e)]))return this[e](a);return this},n.startOf=function(e){var a,t;if(void 0===(e=i(e))||"millisecond"===e||!this.isValid())return this;switch(t=this._isUTC?mt:ot,e){case"year":a=t(this.year(),0,1);break;case"quarter":a=t(this.year(),this.month()-this.month()%3,1);break;case"month":a=t(this.year(),this.month(),1);break;case"week":a=t(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":a=t(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":a=t(this.year(),this.month(),this.date());break;case"hour":a=this._d.valueOf(),a-=_t(a+(this._isUTC?0:6e4*this.utcOffset()),36e5);break;case"minute":a=this._d.valueOf(),a-=_t(a,6e4);break;case"second":a=this._d.valueOf(),a-=_t(a,1e3);break}return this._d.setTime(a),M.updateOffset(this,!0),this},n.subtract=ta,n.toArray=function(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]},n.toObject=function(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}},n.toDate=function(){return new Date(this.valueOf())},n.toISOString=function(e){if(!this.isValid())return null;var a=(e=!0!==e)?this.clone().utc():this;return a.year()<0||9999<a.year()?ue(a,e?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):te(Date.prototype.toISOString)?e?this.toDate().toISOString():new Date(this.valueOf()+60*this.utcOffset()*1e3).toISOString().replace("Z",ue(a,"Z")):ue(a,e?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")},n.inspect=function(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e,a="moment",t="";return this.isLocal()||(a=0===this.utcOffset()?"moment.utc":"moment.parseZone",t="Z"),a="["+a+'("]',e=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",this.format(a+e+"-MM-DD[T]HH:mm:ss.SSS"+(t+'[")]'))},"undefined"!=typeof Symbol&&null!=Symbol.for&&(n[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"}),n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toString=function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this._d.valueOf()-6e4*(this._offset||0)},n.creationData=function(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}},n.eraName=function(){for(var e,a=this.localeData().eras(),t=0,s=a.length;t<s;++t){if(e=this.clone().startOf("day").valueOf(),a[t].since<=e&&e<=a[t].until)return a[t].name;if(a[t].until<=e&&e<=a[t].since)return a[t].name}return""},n.eraNarrow=function(){for(var e,a=this.localeData().eras(),t=0,s=a.length;t<s;++t){if(e=this.clone().startOf("day").valueOf(),a[t].since<=e&&e<=a[t].until)return a[t].narrow;if(a[t].until<=e&&e<=a[t].since)return a[t].narrow}return""},n.eraAbbr=function(){for(var e,a=this.localeData().eras(),t=0,s=a.length;t<s;++t){if(e=this.clone().startOf("day").valueOf(),a[t].since<=e&&e<=a[t].until)return a[t].abbr;if(a[t].until<=e&&e<=a[t].since)return a[t].abbr}return""},n.eraYear=function(){for(var e,a,t=this.localeData().eras(),s=0,n=t.length;s<n;++s)if(e=t[s].since<=t[s].until?1:-1,a=this.clone().startOf("day").valueOf(),t[s].since<=a&&a<=t[s].until||t[s].until<=a&&a<=t[s].since)return(this.year()-M(t[s].since).year())*e+t[s].offset;return this.year()},n.year=Ke,n.isLeapYear=function(){return Le(this.year())},n.weekYear=function(e){return ht.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)},n.isoWeekYear=function(e){return ht.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)},n.quarter=n.quarters=function(e){return null==e?Math.ceil((this.month()+1)/3):this.month(3*(e-1)+this.month()%3)},n.month=Ge,n.daysInMonth=function(){return ze(this.year(),this.month())},n.week=n.weeks=function(e){var a=this.localeData().week(this);return null==e?a:this.add(7*(e-a),"d")},n.isoWeek=n.isoWeeks=function(e){var a=Xe(this,1,4).week;return null==e?a:this.add(7*(e-a),"d")},n.weeksInYear=function(){var e=this.localeData()._week;return ea(this.year(),e.dow,e.doy)},n.weeksInWeekYear=function(){var e=this.localeData()._week;return ea(this.weekYear(),e.dow,e.doy)},n.isoWeeksInYear=function(){return ea(this.year(),1,4)},n.isoWeeksInISOWeekYear=function(){return ea(this.isoWeekYear(),1,4)},n.date=Y,n.day=n.days=function(e){if(!this.isValid())return null!=e?this:NaN;var a,t,s=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=e?(a=e,t=this.localeData(),e="string"!=typeof a?a:isNaN(a)?"number"==typeof(a=t.weekdaysParse(a))?a:null:parseInt(a,10),this.add(e-s,"d")):s},n.weekday=function(e){if(!this.isValid())return null!=e?this:NaN;var a=(this.day()+7-this.localeData()._week.dow)%7;return null==e?a:this.add(e-a,"d")},n.isoWeekday=function(e){return this.isValid()?null!=e?(a=e,t=this.localeData(),t="string"==typeof a?t.weekdaysParse(a)%7||7:isNaN(a)?null:a,this.day(this.day()%7?t:t-7)):this.day()||7:null!=e?this:NaN;var a,t},n.dayOfYear=function(e){var a=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==e?a:this.add(e-a,"d")},n.hour=n.hours=f,n.minute=n.minutes=ke,n.second=n.seconds=y,n.millisecond=n.milliseconds=_,n.utcOffset=function(e,a,t){var s,n=this._offset||0;if(!this.isValid())return null!=e?this:NaN;if(null==e)return this._isUTC?n:Ba(this);if("string"==typeof e){if(null===(e=Ga(be,e)))return this}else Math.abs(e)<16&&!t&&(e*=60);return!this._isUTC&&a&&(s=Ba(this)),this._offset=e,this._isUTC=!0,null!=s&&this.add(s,"m"),n!==e&&(!a||this._changeInProgress?at(this,$a(e-n,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,M.updateOffset(this,!0),this._changeInProgress=null)),this},n.utc=function(e){return this.utcOffset(0,e)},n.local=function(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(Ba(this),"m")),this},n.parseZone=function(){var e;return null!=this._tzm?this.utcOffset(this._tzm,!1,!0):"string"==typeof this._i&&(null!=(e=Ga(we,this._i))?this.utcOffset(e):this.utcOffset(0,!0)),this},n.hasAlignedHourOffset=function(e){return!!this.isValid()&&(e=e?S(e).utcOffset():0,(this.utcOffset()-e)%60==0)},n.isDST=function(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()},n.isLocal=function(){return!!this.isValid()&&!this._isUTC},n.isUtcOffset=function(){return!!this.isValid()&&this._isUTC},n.isUtc=Ka,n.isUTC=Ka,n.zoneAbbr=function(){return this._isUTC?"UTC":""},n.zoneName=function(){return this._isUTC?"Coordinated Universal Time":""},n.dates=e("dates accessor is deprecated. Use date instead.",Y),n.months=e("months accessor is deprecated. Use month instead",Ge),n.years=e("years accessor is deprecated. Use year instead",Ke),n.zone=e("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",function(e,a){return null!=e?(this.utcOffset(e="string"!=typeof e?-e:e,a),this):-this.utcOffset()}),n.isDSTShifted=e("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",function(){if(!d(this._isDSTShifted))return this._isDSTShifted;var e,a={};return Z(a,this),(a=Ea(a))._a?(e=(a._isUTC?U:S)(a._a),this._isDSTShifted=this.isValid()&&0<function(e,a,t){for(var s=Math.min(e.length,a.length),n=Math.abs(e.length-a.length),r=0,d=0;d<s;d++)(t&&e[d]!==a[d]||!t&&m(e[d])!==m(a[d]))&&r++;return r+n}(a._a,e.toArray())):this._isDSTShifted=!1,this._isDSTShifted});r=ne.prototype;function yt(e,a,t,s){var n=pa(),s=U().set(s,a);return n[t](s,e)}function ft(e,a,t){if(J(e)&&(a=e,e=void 0),e=e||"",null!=a)return yt(e,a,t,"month");for(var s=[],n=0;n<12;n++)s[n]=yt(e,n,t,"month");return s}function pt(e,a,t,s){a=("boolean"==typeof e?J(a)&&(t=a,a=void 0):(a=e,e=!1,J(t=a)&&(t=a,a=void 0)),a||"");var n,r=pa(),d=e?r._week.dow:0,i=[];if(null!=t)return yt(a,(t+d)%7,s,"day");for(n=0;n<7;n++)i[n]=yt(a,(n+d)%7,s,"day");return i}r.calendar=function(e,a,t){return te(e=this._calendar[e]||this._calendar.sameElse)?e.call(a,t):e},r.longDateFormat=function(e){var a=this._longDateFormat[e],t=this._longDateFormat[e.toUpperCase()];return a||!t?a:(this._longDateFormat[e]=t.match(ie).map(function(e){return"MMMM"===e||"MM"===e||"DD"===e||"dddd"===e?e.slice(1):e}).join(""),this._longDateFormat[e])},r.invalidDate=function(){return this._invalidDate},r.ordinal=function(e){return this._ordinal.replace("%d",e)},r.preparse=Yt,r.postformat=Yt,r.relativeTime=function(e,a,t,s){var n=this._relativeTime[t];return te(n)?n(e,a,t,s):n.replace(/%d/i,e)},r.pastFuture=function(e,a){return te(e=this._relativeTime[0<e?"future":"past"])?e(a):e.replace(/%s/i,a)},r.set=function(e){var a,t;for(t in e)l(e,t)&&(te(a=e[t])?this[t]=a:this["_"+t]=a);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)},r.eras=function(e,a){for(var t,s=this._eras||pa("en")._eras,n=0,r=s.length;n<r;++n){switch(typeof s[n].since){case"string":t=M(s[n].since).startOf("day"),s[n].since=t.valueOf();break}switch(typeof s[n].until){case"undefined":s[n].until=1/0;break;case"string":t=M(s[n].until).startOf("day").valueOf(),s[n].until=t.valueOf();break}}return s},r.erasParse=function(e,a,t){var s,n,r,d,i,_=this.eras();for(e=e.toUpperCase(),s=0,n=_.length;s<n;++s)if(r=_[s].name.toUpperCase(),d=_[s].abbr.toUpperCase(),i=_[s].narrow.toUpperCase(),t)switch(a){case"N":case"NN":case"NNN":if(d===e)return _[s];break;case"NNNN":if(r===e)return _[s];break;case"NNNNN":if(i===e)return _[s];break}else if(0<=[r,d,i].indexOf(e))return _[s]},r.erasConvertYear=function(e,a){var t=e.since<=e.until?1:-1;return void 0===a?M(e.since).year():M(e.since).year()+(a-e.offset)*t},r.erasAbbrRegex=function(e){return l(this,"_erasAbbrRegex")||lt.call(this),e?this._erasAbbrRegex:this._erasRegex},r.erasNameRegex=function(e){return l(this,"_erasNameRegex")||lt.call(this),e?this._erasNameRegex:this._erasRegex},r.erasNarrowRegex=function(e){return l(this,"_erasNarrowRegex")||lt.call(this),e?this._erasNarrowRegex:this._erasRegex},r.months=function(e,a){return e?(F(this._months)?this._months:this._months[(this._months.isFormat||Re).test(a)?"format":"standalone"])[e.month()]:F(this._months)?this._months:this._months.standalone},r.monthsShort=function(e,a){return e?(F(this._monthsShort)?this._monthsShort:this._monthsShort[Re.test(a)?"format":"standalone"])[e.month()]:F(this._monthsShort)?this._monthsShort:this._monthsShort.standalone},r.monthsParse=function(e,a,t){var s,n;if(this._monthsParseExact)return function(e,a,t){var s,n,r,e=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],s=0;s<12;++s)r=U([2e3,s]),this._shortMonthsParse[s]=this.monthsShort(r,"").toLocaleLowerCase(),this._longMonthsParse[s]=this.months(r,"").toLocaleLowerCase();return t?"MMM"===a?-1!==(n=T.call(this._shortMonthsParse,e))?n:null:-1!==(n=T.call(this._longMonthsParse,e))?n:null:"MMM"===a?-1!==(n=T.call(this._shortMonthsParse,e))||-1!==(n=T.call(this._longMonthsParse,e))?n:null:-1!==(n=T.call(this._longMonthsParse,e))||-1!==(n=T.call(this._shortMonthsParse,e))?n:null}.call(this,e,a,t);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),s=0;s<12;s++){if(n=U([2e3,s]),t&&!this._longMonthsParse[s]&&(this._longMonthsParse[s]=new RegExp("^"+this.months(n,"").replace(".","")+"$","i"),this._shortMonthsParse[s]=new RegExp("^"+this.monthsShort(n,"").replace(".","")+"$","i")),t||this._monthsParse[s]||(n="^"+this.months(n,"")+"|^"+this.monthsShort(n,""),this._monthsParse[s]=new RegExp(n.replace(".",""),"i")),t&&"MMMM"===a&&this._longMonthsParse[s].test(e))return s;if(t&&"MMM"===a&&this._shortMonthsParse[s].test(e))return s;if(!t&&this._monthsParse[s].test(e))return s}},r.monthsRegex=function(e){return this._monthsParseExact?(l(this,"_monthsRegex")||Ve.call(this),e?this._monthsStrictRegex:this._monthsRegex):(l(this,"_monthsRegex")||(this._monthsRegex=Ie),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)},r.monthsShortRegex=function(e){return this._monthsParseExact?(l(this,"_monthsRegex")||Ve.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(l(this,"_monthsShortRegex")||(this._monthsShortRegex=Ce),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)},r.week=function(e){return Xe(e,this._week.dow,this._week.doy).week},r.firstDayOfYear=function(){return this._week.doy},r.firstDayOfWeek=function(){return this._week.dow},r.weekdays=function(e,a){return a=F(this._weekdays)?this._weekdays:this._weekdays[e&&!0!==e&&this._weekdays.isFormat.test(a)?"format":"standalone"],!0===e?aa(a,this._week.dow):e?a[e.day()]:a},r.weekdaysMin=function(e){return!0===e?aa(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin},r.weekdaysShort=function(e){return!0===e?aa(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort},r.weekdaysParse=function(e,a,t){var s,n;if(this._weekdaysParseExact)return function(e,a,t){var s,n,r,e=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],s=0;s<7;++s)r=U([2e3,1]).day(s),this._minWeekdaysParse[s]=this.weekdaysMin(r,"").toLocaleLowerCase(),this._shortWeekdaysParse[s]=this.weekdaysShort(r,"").toLocaleLowerCase(),this._weekdaysParse[s]=this.weekdays(r,"").toLocaleLowerCase();return t?"dddd"===a?-1!==(n=T.call(this._weekdaysParse,e))?n:null:"ddd"===a?-1!==(n=T.call(this._shortWeekdaysParse,e))?n:null:-1!==(n=T.call(this._minWeekdaysParse,e))?n:null:"dddd"===a?-1!==(n=T.call(this._weekdaysParse,e))||-1!==(n=T.call(this._shortWeekdaysParse,e))||-1!==(n=T.call(this._minWeekdaysParse,e))?n:null:"ddd"===a?-1!==(n=T.call(this._shortWeekdaysParse,e))||-1!==(n=T.call(this._weekdaysParse,e))||-1!==(n=T.call(this._minWeekdaysParse,e))?n:null:-1!==(n=T.call(this._minWeekdaysParse,e))||-1!==(n=T.call(this._weekdaysParse,e))||-1!==(n=T.call(this._shortWeekdaysParse,e))?n:null}.call(this,e,a,t);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),s=0;s<7;s++){if(n=U([2e3,1]).day(s),t&&!this._fullWeekdaysParse[s]&&(this._fullWeekdaysParse[s]=new RegExp("^"+this.weekdays(n,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[s]=new RegExp("^"+this.weekdaysShort(n,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[s]=new RegExp("^"+this.weekdaysMin(n,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[s]||(n="^"+this.weekdays(n,"")+"|^"+this.weekdaysShort(n,"")+"|^"+this.weekdaysMin(n,""),this._weekdaysParse[s]=new RegExp(n.replace(".",""),"i")),t&&"dddd"===a&&this._fullWeekdaysParse[s].test(e))return s;if(t&&"ddd"===a&&this._shortWeekdaysParse[s].test(e))return s;if(t&&"dd"===a&&this._minWeekdaysParse[s].test(e))return s;if(!t&&this._weekdaysParse[s].test(e))return s}},r.weekdaysRegex=function(e){return this._weekdaysParseExact?(l(this,"_weekdaysRegex")||_a.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(l(this,"_weekdaysRegex")||(this._weekdaysRegex=ra),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)},r.weekdaysShortRegex=function(e){return this._weekdaysParseExact?(l(this,"_weekdaysRegex")||_a.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(l(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=da),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)},r.weekdaysMinRegex=function(e){return this._weekdaysParseExact?(l(this,"_weekdaysRegex")||_a.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(l(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=ia),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)},r.isPM=function(e){return"p"===(e+"").toLowerCase().charAt(0)},r.meridiem=function(e,a,t){return 11<e?t?"pm":"PM":t?"am":"AM"},ya("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var a=e%10;return e+(1===m(e%100/10)?"th":1==a?"st":2==a?"nd":3==a?"rd":"th")}}),M.lang=e("moment.lang is deprecated. Use moment.locale instead.",ya),M.langData=e("moment.langData is deprecated. Use moment.localeData instead.",pa);var kt=Math.abs;function Dt(e,a,t,s){a=$a(a,t);return e._milliseconds+=s*a._milliseconds,e._days+=s*a._days,e._months+=s*a._months,e._bubble()}function Tt(e){return e<0?Math.floor(e):Math.ceil(e)}function gt(e){return 4800*e/146097}function wt(e){return 146097*e/4800}function bt(e){return function(){return this.as(e)}}De=bt("ms"),pe=bt("s"),Ne=bt("m"),L=bt("h"),c=bt("d"),ta=bt("w"),f=bt("M"),ke=bt("Q"),y=bt("y");function St(e){return function(){return this.isValid()?this._data[e]:NaN}}var _=St("milliseconds"),Y=St("seconds"),Ke=St("minutes"),r=St("hours"),Ht=St("days"),vt=St("months"),jt=St("years");var xt=Math.round,Pt={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function Ot(e,a,t,s){var n=$a(e).abs(),r=xt(n.as("s")),d=xt(n.as("m")),i=xt(n.as("h")),_=xt(n.as("d")),o=xt(n.as("M")),m=xt(n.as("w")),n=xt(n.as("y")),r=(r<=t.ss?["s",r]:r<t.s&&["ss",r])||d<=1&&["m"]||d<t.m&&["mm",d]||i<=1&&["h"]||i<t.h&&["hh",i]||_<=1&&["d"]||_<t.d&&["dd",_];return(r=(r=null!=t.w?r||m<=1&&["w"]||m<t.w&&["ww",m]:r)||o<=1&&["M"]||o<t.M&&["MM",o]||n<=1&&["y"]||["yy",n])[2]=a,r[3]=0<+e,r[4]=s,function(e,a,t,s,n){return n.relativeTime(a||1,!!t,e,s)}.apply(null,r)}var Wt=Math.abs;function At(e){return(0<e)-(e<0)||+e}function Et(){if(!this.isValid())return this.localeData().invalidDate();var e,a,t,s,n,r,d,i=Wt(this._milliseconds)/1e3,_=Wt(this._days),o=Wt(this._months),m=this.asSeconds();return m?(e=u(i/60),a=u(e/60),i%=60,e%=60,t=u(o/12),o%=12,s=i?i.toFixed(3).replace(/\.?0+$/,""):"",n=At(this._months)!==At(m)?"-":"",r=At(this._days)!==At(m)?"-":"",d=At(this._milliseconds)!==At(m)?"-":"",(m<0?"-":"")+"P"+(t?n+t+"Y":"")+(o?n+o+"M":"")+(_?r+_+"D":"")+(a||e||i?"T":"")+(a?d+a+"H":"")+(e?d+e+"M":"")+(i?d+s+"S":"")):"P0D"}function Ft(e){return 0===e?0:1===e?1:2===e?2:3<=e%100&&e%100<=10?3:11<=e%100?4:5}function H(d){return function(e,a,t,s){var n=Ft(e),r=Jt[d][Ft(e)];return(r=2===n?r[a?0:1]:r).replace(/%d/i,e)}}function zt(e){return 0===e?0:1===e?1:2===e?2:3<=e%100&&e%100<=10?3:11<=e%100?4:5}function v(d){return function(e,a,t,s){var n=zt(e),r=Ct[d][zt(e)];return(r=2===n?r[a?0:1]:r).replace(/%d/i,e)}}function Nt(e){return 0===e?0:1===e?1:2===e?2:3<=e%100&&e%100<=10?3:11<=e%100?4:5}function j(d){return function(e,a,t,s){var n=Nt(e),r=Bt[d][Nt(e)];return(r=2===n?r[a?0:1]:r).replace(/%d/i,e)}}var x=Ja.prototype,Jt=(x.isValid=function(){return this._isValid},x.abs=function(){var e=this._data;return this._milliseconds=kt(this._milliseconds),this._days=kt(this._days),this._months=kt(this._months),e.milliseconds=kt(e.milliseconds),e.seconds=kt(e.seconds),e.minutes=kt(e.minutes),e.hours=kt(e.hours),e.months=kt(e.months),e.years=kt(e.years),this},x.add=function(e,a){return Dt(this,e,a,1)},x.subtract=function(e,a){return Dt(this,e,a,-1)},x.as=function(e){if(!this.isValid())return NaN;var a,t,s=this._milliseconds;if("month"===(e=i(e))||"quarter"===e||"year"===e)switch(a=this._days+s/864e5,t=this._months+gt(a),e){case"month":return t;case"quarter":return t/3;case"year":return t/12}else switch(a=this._days+Math.round(wt(this._months)),e){case"week":return a/7+s/6048e5;case"day":return a+s/864e5;case"hour":return 24*a+s/36e5;case"minute":return 1440*a+s/6e4;case"second":return 86400*a+s/1e3;case"millisecond":return Math.floor(864e5*a)+s;default:throw new Error("Unknown unit "+e)}},x.asMilliseconds=De,x.asSeconds=pe,x.asMinutes=Ne,x.asHours=L,x.asDays=c,x.asWeeks=ta,x.asMonths=f,x.asQuarters=ke,x.asYears=y,x.valueOf=function(){return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*m(this._months/12):NaN},x._bubble=function(){var e=this._milliseconds,a=this._days,t=this._months,s=this._data;return 0<=e&&0<=a&&0<=t||e<=0&&a<=0&&t<=0||(e+=864e5*Tt(wt(t)+a),t=a=0),s.milliseconds=e%1e3,e=u(e/1e3),s.seconds=e%60,e=u(e/60),s.minutes=e%60,e=u(e/60),s.hours=e%24,a+=u(e/24),t+=e=u(gt(a)),a-=Tt(wt(e)),e=u(t/12),t%=12,s.days=a,s.months=t,s.years=e,this},x.clone=function(){return $a(this)},x.get=function(e){return e=i(e),this.isValid()?this[e+"s"]():NaN},x.milliseconds=_,x.seconds=Y,x.minutes=Ke,x.hours=r,x.days=Ht,x.weeks=function(){return u(this.days()/7)},x.months=vt,x.years=jt,x.humanize=function(e,a){if(!this.isValid())return this.localeData().invalidDate();var t=!1,s=Pt;return"object"==typeof e&&(a=e,e=!1),"boolean"==typeof e&&(t=e),"object"==typeof a&&(s=Object.assign({},Pt,a),null!=a.s&&null==a.ss&&(s.ss=a.s-1)),e=this.localeData(),a=Ot(this,!t,s,e),t&&(a=e.pastFuture(+this,a)),e.postformat(a)},x.toISOString=Et,x.toString=Et,x.toJSON=Et,x.locale=rt,x.localeData=dt,x.toIsoString=e("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Et),x.lang=na,s("X",0,0,"unix"),s("x",0,0,"valueOf"),p("x",ge),p("X",/[+-]?\d+(\.\d{1,3})?/),D("X",function(e,a,t){t._d=new Date(1e3*parseFloat(e))}),D("x",function(e,a,t){t._d=new Date(m(e))}),M.version="2.29.4",E=S,M.fn=n,M.min=function(){return za("isBefore",[].slice.call(arguments,0))},M.max=function(){return za("isAfter",[].slice.call(arguments,0))},M.now=function(){return Date.now?Date.now():+new Date},M.utc=U,M.unix=function(e){return S(1e3*e)},M.months=function(e,a){return ft(e,a,"months")},M.isDate=R,M.locale=ya,M.invalid=V,M.duration=$a,M.isMoment=Q,M.weekdays=function(e,a,t){return pt(e,a,t,"weekdays")},M.parseZone=function(){return S.apply(null,arguments).parseZone()},M.localeData=pa,M.isDuration=Ra,M.monthsShort=function(e,a){return ft(e,a,"monthsShort")},M.weekdaysMin=function(e,a,t){return pt(e,a,t,"weekdaysMin")},M.defineLocale=fa,M.updateLocale=function(e,a){var t,s;return null!=a?(s=Ma,null!=b[e]&&null!=b[e].parentLocale?b[e].set(se(b[e]._config,a)):(a=se(s=null!=(t=Ya(e))?t._config:s,a),null==t&&(a.abbr=e),(s=new ne(a)).parentLocale=b[e],b[e]=s),ya(e)):null!=b[e]&&(null!=b[e].parentLocale?(b[e]=b[e].parentLocale,e===ya()&&ya(e)):null!=b[e]&&delete b[e]),b[e]},M.locales=function(){return re(b)},M.weekdaysShort=function(e,a,t){return pt(e,a,t,"weekdaysShort")},M.normalizeUnits=i,M.relativeTimeRounding=function(e){return void 0===e?xt:"function"==typeof e&&(xt=e,!0)},M.relativeTimeThreshold=function(e,a){return void 0!==Pt[e]&&(void 0===a?Pt[e]:(Pt[e]=a,"s"===e&&(Pt.ss=a-1),!0))},M.calendarFormat=function(e,a){return(e=e.diff(a,"days",!0))<-6?"sameElse":e<-1?"lastWeek":e<0?"lastDay":e<1?"sameDay":e<2?"nextDay":e<7?"nextWeek":"sameElse"},M.prototype=n,M.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"},M.defineLocale("af",{months:"Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),monthsShort:"Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),weekdays:"Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),weekdaysShort:"Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),weekdaysMin:"So_Ma_Di_Wo_Do_Vr_Sa".split("_"),meridiemParse:/vm|nm/i,isPM:function(e){return/^nm$/i.test(e)},meridiem:function(e,a,t){return e<12?t?"vm":"VM":t?"nm":"NM"},longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Vandag om] LT",nextDay:"[M\xf4re om] LT",nextWeek:"dddd [om] LT",lastDay:"[Gister om] LT",lastWeek:"[Laas] dddd [om] LT",sameElse:"L"},relativeTime:{future:"oor %s",past:"%s gelede",s:"'n paar sekondes",ss:"%d sekondes",m:"'n minuut",mm:"%d minute",h:"'n uur",hh:"%d ure",d:"'n dag",dd:"%d dae",M:"'n maand",MM:"%d maande",y:"'n jaar",yy:"%d jaar"},dayOfMonthOrdinalParse:/\d{1,2}(ste|de)/,ordinal:function(e){return e+(1===e||8===e||20<=e?"ste":"de")},week:{dow:1,doy:4}}),{s:["\u0623\u0642\u0644 \u0645\u0646 \u062b\u0627\u0646\u064a\u0629","\u062b\u0627\u0646\u064a\u0629 \u0648\u0627\u062d\u062f\u0629",["\u062b\u0627\u0646\u064a\u062a\u0627\u0646","\u062b\u0627\u0646\u064a\u062a\u064a\u0646"],"%d \u062b\u0648\u0627\u0646","%d \u062b\u0627\u0646\u064a\u0629","%d \u062b\u0627\u0646\u064a\u0629"],m:["\u0623\u0642\u0644 \u0645\u0646 \u062f\u0642\u064a\u0642\u0629","\u062f\u0642\u064a\u0642\u0629 \u0648\u0627\u062d\u062f\u0629",["\u062f\u0642\u064a\u0642\u062a\u0627\u0646","\u062f\u0642\u064a\u0642\u062a\u064a\u0646"],"%d \u062f\u0642\u0627\u0626\u0642","%d \u062f\u0642\u064a\u0642\u0629","%d \u062f\u0642\u064a\u0642\u0629"],h:["\u0623\u0642\u0644 \u0645\u0646 \u0633\u0627\u0639\u0629","\u0633\u0627\u0639\u0629 \u0648\u0627\u062d\u062f\u0629",["\u0633\u0627\u0639\u062a\u0627\u0646","\u0633\u0627\u0639\u062a\u064a\u0646"],"%d \u0633\u0627\u0639\u0627\u062a","%d \u0633\u0627\u0639\u0629","%d \u0633\u0627\u0639\u0629"],d:["\u0623\u0642\u0644 \u0645\u0646 \u064a\u0648\u0645","\u064a\u0648\u0645 \u0648\u0627\u062d\u062f",["\u064a\u0648\u0645\u0627\u0646","\u064a\u0648\u0645\u064a\u0646"],"%d \u0623\u064a\u0627\u0645","%d \u064a\u0648\u0645\u064b\u0627","%d \u064a\u0648\u0645"],M:["\u0623\u0642\u0644 \u0645\u0646 \u0634\u0647\u0631","\u0634\u0647\u0631 \u0648\u0627\u062d\u062f",["\u0634\u0647\u0631\u0627\u0646","\u0634\u0647\u0631\u064a\u0646"],"%d \u0623\u0634\u0647\u0631","%d \u0634\u0647\u0631\u0627","%d \u0634\u0647\u0631"],y:["\u0623\u0642\u0644 \u0645\u0646 \u0639\u0627\u0645","\u0639\u0627\u0645 \u0648\u0627\u062d\u062f",["\u0639\u0627\u0645\u0627\u0646","\u0639\u0627\u0645\u064a\u0646"],"%d \u0623\u0639\u0648\u0627\u0645","%d \u0639\u0627\u0645\u064b\u0627","%d \u0639\u0627\u0645"]}),De=["\u062c\u0627\u0646\u0641\u064a","\u0641\u064a\u0641\u0631\u064a","\u0645\u0627\u0631\u0633","\u0623\u0641\u0631\u064a\u0644","\u0645\u0627\u064a","\u062c\u0648\u0627\u0646","\u062c\u0648\u064a\u0644\u064a\u0629","\u0623\u0648\u062a","\u0633\u0628\u062a\u0645\u0628\u0631","\u0623\u0643\u062a\u0648\u0628\u0631","\u0646\u0648\u0641\u0645\u0628\u0631","\u062f\u064a\u0633\u0645\u0628\u0631"],Rt=(M.defineLocale("ar-dz",{months:De,monthsShort:De,weekdays:"\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062b\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"),weekdaysShort:"\u0623\u062d\u062f_\u0625\u062b\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0623\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"),weekdaysMin:"\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"D/\u200fM/\u200fYYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/\u0635|\u0645/,isPM:function(e){return"\u0645"===e},meridiem:function(e,a,t){return e<12?"\u0635":"\u0645"},calendar:{sameDay:"[\u0627\u0644\u064a\u0648\u0645 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",nextDay:"[\u063a\u062f\u064b\u0627 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",nextWeek:"dddd [\u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",lastDay:"[\u0623\u0645\u0633 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",lastWeek:"dddd [\u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",sameElse:"L"},relativeTime:{future:"\u0628\u0639\u062f %s",past:"\u0645\u0646\u0630 %s",s:H("s"),ss:H("s"),m:H("m"),mm:H("m"),h:H("h"),hh:H("h"),d:H("d"),dd:H("d"),M:H("M"),MM:H("M"),y:H("y"),yy:H("y")},postformat:function(e){return e.replace(/,/g,"\u060c")},week:{dow:0,doy:4}}),M.defineLocale("ar-kw",{months:"\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648\u0632_\u063a\u0634\u062a_\u0634\u062a\u0646\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0646\u0628\u0631_\u062f\u062c\u0646\u0628\u0631".split("_"),monthsShort:"\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648\u0632_\u063a\u0634\u062a_\u0634\u062a\u0646\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0646\u0628\u0631_\u062f\u062c\u0646\u0628\u0631".split("_"),weekdays:"\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062a\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"),weekdaysShort:"\u0627\u062d\u062f_\u0627\u062a\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"),weekdaysMin:"\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[\u0627\u0644\u064a\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",nextDay:"[\u063a\u062f\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",nextWeek:"dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",lastDay:"[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",lastWeek:"dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",sameElse:"L"},relativeTime:{future:"\u0641\u064a %s",past:"\u0645\u0646\u0630 %s",s:"\u062b\u0648\u0627\u0646",ss:"%d \u062b\u0627\u0646\u064a\u0629",m:"\u062f\u0642\u064a\u0642\u0629",mm:"%d \u062f\u0642\u0627\u0626\u0642",h:"\u0633\u0627\u0639\u0629",hh:"%d \u0633\u0627\u0639\u0627\u062a",d:"\u064a\u0648\u0645",dd:"%d \u0623\u064a\u0627\u0645",M:"\u0634\u0647\u0631",MM:"%d \u0623\u0634\u0647\u0631",y:"\u0633\u0646\u0629",yy:"%d \u0633\u0646\u0648\u0627\u062a"},week:{dow:0,doy:12}}),{1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",0:"0"}),Ct={s:["\u0623\u0642\u0644 \u0645\u0646 \u062b\u0627\u0646\u064a\u0629","\u062b\u0627\u0646\u064a\u0629 \u0648\u0627\u062d\u062f\u0629",["\u062b\u0627\u0646\u064a\u062a\u0627\u0646","\u062b\u0627\u0646\u064a\u062a\u064a\u0646"],"%d \u062b\u0648\u0627\u0646","%d \u062b\u0627\u0646\u064a\u0629","%d \u062b\u0627\u0646\u064a\u0629"],m:["\u0623\u0642\u0644 \u0645\u0646 \u062f\u0642\u064a\u0642\u0629","\u062f\u0642\u064a\u0642\u0629 \u0648\u0627\u062d\u062f\u0629",["\u062f\u0642\u064a\u0642\u062a\u0627\u0646","\u062f\u0642\u064a\u0642\u062a\u064a\u0646"],"%d \u062f\u0642\u0627\u0626\u0642","%d \u062f\u0642\u064a\u0642\u0629","%d \u062f\u0642\u064a\u0642\u0629"],h:["\u0623\u0642\u0644 \u0645\u0646 \u0633\u0627\u0639\u0629","\u0633\u0627\u0639\u0629 \u0648\u0627\u062d\u062f\u0629",["\u0633\u0627\u0639\u062a\u0627\u0646","\u0633\u0627\u0639\u062a\u064a\u0646"],"%d \u0633\u0627\u0639\u0627\u062a","%d \u0633\u0627\u0639\u0629","%d \u0633\u0627\u0639\u0629"],d:["\u0623\u0642\u0644 \u0645\u0646 \u064a\u0648\u0645","\u064a\u0648\u0645 \u0648\u0627\u062d\u062f",["\u064a\u0648\u0645\u0627\u0646","\u064a\u0648\u0645\u064a\u0646"],"%d \u0623\u064a\u0627\u0645","%d \u064a\u0648\u0645\u064b\u0627","%d \u064a\u0648\u0645"],M:["\u0623\u0642\u0644 \u0645\u0646 \u0634\u0647\u0631","\u0634\u0647\u0631 \u0648\u0627\u062d\u062f",["\u0634\u0647\u0631\u0627\u0646","\u0634\u0647\u0631\u064a\u0646"],"%d \u0623\u0634\u0647\u0631","%d \u0634\u0647\u0631\u0627","%d \u0634\u0647\u0631"],y:["\u0623\u0642\u0644 \u0645\u0646 \u0639\u0627\u0645","\u0639\u0627\u0645 \u0648\u0627\u062d\u062f",["\u0639\u0627\u0645\u0627\u0646","\u0639\u0627\u0645\u064a\u0646"],"%d \u0623\u0639\u0648\u0627\u0645","%d \u0639\u0627\u0645\u064b\u0627","%d \u0639\u0627\u0645"]},pe=["\u064a\u0646\u0627\u064a\u0631","\u0641\u0628\u0631\u0627\u064a\u0631","\u0645\u0627\u0631\u0633","\u0623\u0628\u0631\u064a\u0644","\u0645\u0627\u064a\u0648","\u064a\u0648\u0646\u064a\u0648","\u064a\u0648\u0644\u064a\u0648","\u0623\u063a\u0633\u0637\u0633","\u0633\u0628\u062a\u0645\u0628\u0631","\u0623\u0643\u062a\u0648\u0628\u0631","\u0646\u0648\u0641\u0645\u0628\u0631","\u062f\u064a\u0633\u0645\u0628\u0631"],It=(M.defineLocale("ar-ly",{months:pe,monthsShort:pe,weekdays:"\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062b\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"),weekdaysShort:"\u0623\u062d\u062f_\u0625\u062b\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0623\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"),weekdaysMin:"\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"D/\u200fM/\u200fYYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/\u0635|\u0645/,isPM:function(e){return"\u0645"===e},meridiem:function(e,a,t){return e<12?"\u0635":"\u0645"},calendar:{sameDay:"[\u0627\u0644\u064a\u0648\u0645 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",nextDay:"[\u063a\u062f\u064b\u0627 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",nextWeek:"dddd [\u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",lastDay:"[\u0623\u0645\u0633 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",lastWeek:"dddd [\u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",sameElse:"L"},relativeTime:{future:"\u0628\u0639\u062f %s",past:"\u0645\u0646\u0630 %s",s:v("s"),ss:v("s"),m:v("m"),mm:v("m"),h:v("h"),hh:v("h"),d:v("d"),dd:v("d"),M:v("M"),MM:v("M"),y:v("y"),yy:v("y")},preparse:function(e){return e.replace(/\u060c/g,",")},postformat:function(e){return e.replace(/\d/g,function(e){return Rt[e]}).replace(/,/g,"\u060c")},week:{dow:6,doy:12}}),M.defineLocale("ar-ma",{months:"\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648\u0632_\u063a\u0634\u062a_\u0634\u062a\u0646\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0646\u0628\u0631_\u062f\u062c\u0646\u0628\u0631".split("_"),monthsShort:"\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648\u0632_\u063a\u0634\u062a_\u0634\u062a\u0646\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0646\u0628\u0631_\u062f\u062c\u0646\u0628\u0631".split("_"),weekdays:"\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062b\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"),weekdaysShort:"\u0627\u062d\u062f_\u0627\u062b\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"),weekdaysMin:"\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[\u0627\u0644\u064a\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",nextDay:"[\u063a\u062f\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",nextWeek:"dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",lastDay:"[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",lastWeek:"dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",sameElse:"L"},relativeTime:{future:"\u0641\u064a %s",past:"\u0645\u0646\u0630 %s",s:"\u062b\u0648\u0627\u0646",ss:"%d \u062b\u0627\u0646\u064a\u0629",m:"\u062f\u0642\u064a\u0642\u0629",mm:"%d \u062f\u0642\u0627\u0626\u0642",h:"\u0633\u0627\u0639\u0629",hh:"%d \u0633\u0627\u0639\u0627\u062a",d:"\u064a\u0648\u0645",dd:"%d \u0623\u064a\u0627\u0645",M:"\u0634\u0647\u0631",MM:"%d \u0623\u0634\u0647\u0631",y:"\u0633\u0646\u0629",yy:"%d \u0633\u0646\u0648\u0627\u062a"},week:{dow:1,doy:4}}),{1:"\u0661",2:"\u0662",3:"\u0663",4:"\u0664",5:"\u0665",6:"\u0666",7:"\u0667",8:"\u0668",9:"\u0669",0:"\u0660"}),Ut={"\u0661":"1","\u0662":"2","\u0663":"3","\u0664":"4","\u0665":"5","\u0666":"6","\u0667":"7","\u0668":"8","\u0669":"9","\u0660":"0"},Gt=(M.defineLocale("ar-sa",{months:"\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a\u0648_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648_\u0623\u063a\u0633\u0637\u0633_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631".split("_"),monthsShort:"\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a\u0648_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648_\u0623\u063a\u0633\u0637\u0633_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631".split("_"),weekdays:"\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062b\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"),weekdaysShort:"\u0623\u062d\u062f_\u0625\u062b\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0623\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"),weekdaysMin:"\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/\u0635|\u0645/,isPM:function(e){return"\u0645"===e},meridiem:function(e,a,t){return e<12?"\u0635":"\u0645"},calendar:{sameDay:"[\u0627\u0644\u064a\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",nextDay:"[\u063a\u062f\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",nextWeek:"dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",lastDay:"[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",lastWeek:"dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",sameElse:"L"},relativeTime:{future:"\u0641\u064a %s",past:"\u0645\u0646\u0630 %s",s:"\u062b\u0648\u0627\u0646",ss:"%d \u062b\u0627\u0646\u064a\u0629",m:"\u062f\u0642\u064a\u0642\u0629",mm:"%d \u062f\u0642\u0627\u0626\u0642",h:"\u0633\u0627\u0639\u0629",hh:"%d \u0633\u0627\u0639\u0627\u062a",d:"\u064a\u0648\u0645",dd:"%d \u0623\u064a\u0627\u0645",M:"\u0634\u0647\u0631",MM:"%d \u0623\u0634\u0647\u0631",y:"\u0633\u0646\u0629",yy:"%d \u0633\u0646\u0648\u0627\u062a"},preparse:function(e){return e.replace(/[\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669\u0660]/g,function(e){return Ut[e]}).replace(/\u060c/g,",")},postformat:function(e){return e.replace(/\d/g,function(e){return It[e]}).replace(/,/g,"\u060c")},week:{dow:0,doy:6}}),M.defineLocale("ar-tn",{months:"\u062c\u0627\u0646\u0641\u064a_\u0641\u064a\u0641\u0631\u064a_\u0645\u0627\u0631\u0633_\u0623\u0641\u0631\u064a\u0644_\u0645\u0627\u064a_\u062c\u0648\u0627\u0646_\u062c\u0648\u064a\u0644\u064a\u0629_\u0623\u0648\u062a_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631".split("_"),monthsShort:"\u062c\u0627\u0646\u0641\u064a_\u0641\u064a\u0641\u0631\u064a_\u0645\u0627\u0631\u0633_\u0623\u0641\u0631\u064a\u0644_\u0645\u0627\u064a_\u062c\u0648\u0627\u0646_\u062c\u0648\u064a\u0644\u064a\u0629_\u0623\u0648\u062a_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631".split("_"),weekdays:"\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062b\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"),weekdaysShort:"\u0623\u062d\u062f_\u0625\u062b\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0623\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"),weekdaysMin:"\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[\u0627\u0644\u064a\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",nextDay:"[\u063a\u062f\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",nextWeek:"dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",lastDay:"[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",lastWeek:"dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",sameElse:"L"},relativeTime:{future:"\u0641\u064a %s",past:"\u0645\u0646\u0630 %s",s:"\u062b\u0648\u0627\u0646",ss:"%d \u062b\u0627\u0646\u064a\u0629",m:"\u062f\u0642\u064a\u0642\u0629",mm:"%d \u062f\u0642\u0627\u0626\u0642",h:"\u0633\u0627\u0639\u0629",hh:"%d \u0633\u0627\u0639\u0627\u062a",d:"\u064a\u0648\u0645",dd:"%d \u0623\u064a\u0627\u0645",M:"\u0634\u0647\u0631",MM:"%d \u0623\u0634\u0647\u0631",y:"\u0633\u0646\u0629",yy:"%d \u0633\u0646\u0648\u0627\u062a"},week:{dow:1,doy:4}}),{1:"\u0661",2:"\u0662",3:"\u0663",4:"\u0664",5:"\u0665",6:"\u0666",7:"\u0667",8:"\u0668",9:"\u0669",0:"\u0660"}),Vt={"\u0661":"1","\u0662":"2","\u0663":"3","\u0664":"4","\u0665":"5","\u0666":"6","\u0667":"7","\u0668":"8","\u0669":"9","\u0660":"0"},Bt={s:["\u0623\u0642\u0644 \u0645\u0646 \u062b\u0627\u0646\u064a\u0629","\u062b\u0627\u0646\u064a\u0629 \u0648\u0627\u062d\u062f\u0629",["\u062b\u0627\u0646\u064a\u062a\u0627\u0646","\u062b\u0627\u0646\u064a\u062a\u064a\u0646"],"%d \u062b\u0648\u0627\u0646","%d \u062b\u0627\u0646\u064a\u0629","%d \u062b\u0627\u0646\u064a\u0629"],m:["\u0623\u0642\u0644 \u0645\u0646 \u062f\u0642\u064a\u0642\u0629","\u062f\u0642\u064a\u0642\u0629 \u0648\u0627\u062d\u062f\u0629",["\u062f\u0642\u064a\u0642\u062a\u0627\u0646","\u062f\u0642\u064a\u0642\u062a\u064a\u0646"],"%d \u062f\u0642\u0627\u0626\u0642","%d \u062f\u0642\u064a\u0642\u0629","%d \u062f\u0642\u064a\u0642\u0629"],h:["\u0623\u0642\u0644 \u0645\u0646 \u0633\u0627\u0639\u0629","\u0633\u0627\u0639\u0629 \u0648\u0627\u062d\u062f\u0629",["\u0633\u0627\u0639\u062a\u0627\u0646","\u0633\u0627\u0639\u062a\u064a\u0646"],"%d \u0633\u0627\u0639\u0627\u062a","%d \u0633\u0627\u0639\u0629","%d \u0633\u0627\u0639\u0629"],d:["\u0623\u0642\u0644 \u0645\u0646 \u064a\u0648\u0645","\u064a\u0648\u0645 \u0648\u0627\u062d\u062f",["\u064a\u0648\u0645\u0627\u0646","\u064a\u0648\u0645\u064a\u0646"],"%d \u0623\u064a\u0627\u0645","%d \u064a\u0648\u0645\u064b\u0627","%d \u064a\u0648\u0645"],M:["\u0623\u0642\u0644 \u0645\u0646 \u0634\u0647\u0631","\u0634\u0647\u0631 \u0648\u0627\u062d\u062f",["\u0634\u0647\u0631\u0627\u0646","\u0634\u0647\u0631\u064a\u0646"],"%d \u0623\u0634\u0647\u0631","%d \u0634\u0647\u0631\u0627","%d \u0634\u0647\u0631"],y:["\u0623\u0642\u0644 \u0645\u0646 \u0639\u0627\u0645","\u0639\u0627\u0645 \u0648\u0627\u062d\u062f",["\u0639\u0627\u0645\u0627\u0646","\u0639\u0627\u0645\u064a\u0646"],"%d \u0623\u0639\u0648\u0627\u0645","%d \u0639\u0627\u0645\u064b\u0627","%d \u0639\u0627\u0645"]},Ne=["\u064a\u0646\u0627\u064a\u0631","\u0641\u0628\u0631\u0627\u064a\u0631","\u0645\u0627\u0631\u0633","\u0623\u0628\u0631\u064a\u0644","\u0645\u0627\u064a\u0648","\u064a\u0648\u0646\u064a\u0648","\u064a\u0648\u0644\u064a\u0648","\u0623\u063a\u0633\u0637\u0633","\u0633\u0628\u062a\u0645\u0628\u0631","\u0623\u0643\u062a\u0648\u0628\u0631","\u0646\u0648\u0641\u0645\u0628\u0631","\u062f\u064a\u0633\u0645\u0628\u0631"],Kt=(M.defineLocale("ar",{months:Ne,monthsShort:Ne,weekdays:"\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062b\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"),weekdaysShort:"\u0623\u062d\u062f_\u0625\u062b\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0623\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"),weekdaysMin:"\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"D/\u200fM/\u200fYYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/\u0635|\u0645/,isPM:function(e){return"\u0645"===e},meridiem:function(e,a,t){return e<12?"\u0635":"\u0645"},calendar:{sameDay:"[\u0627\u0644\u064a\u0648\u0645 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",nextDay:"[\u063a\u062f\u064b\u0627 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",nextWeek:"dddd [\u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",lastDay:"[\u0623\u0645\u0633 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",lastWeek:"dddd [\u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",sameElse:"L"},relativeTime:{future:"\u0628\u0639\u062f %s",past:"\u0645\u0646\u0630 %s",s:j("s"),ss:j("s"),m:j("m"),mm:j("m"),h:j("h"),hh:j("h"),d:j("d"),dd:j("d"),M:j("M"),MM:j("M"),y:j("y"),yy:j("y")},preparse:function(e){return e.replace(/[\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669\u0660]/g,function(e){return Vt[e]}).replace(/\u060c/g,",")},postformat:function(e){return e.replace(/\d/g,function(e){return Gt[e]}).replace(/,/g,"\u060c")},week:{dow:6,doy:12}}),{1:"-inci",5:"-inci",8:"-inci",70:"-inci",80:"-inci",2:"-nci",7:"-nci",20:"-nci",50:"-nci",3:"-\xfcnc\xfc",4:"-\xfcnc\xfc",100:"-\xfcnc\xfc",6:"-nc\u0131",9:"-uncu",10:"-uncu",30:"-uncu",60:"-\u0131nc\u0131",90:"-\u0131nc\u0131"});function qt(e,a,t){return"m"===t?a?"\u0445\u0432\u0456\u043b\u0456\u043d\u0430":"\u0445\u0432\u0456\u043b\u0456\u043d\u0443":"h"===t?a?"\u0433\u0430\u0434\u0437\u0456\u043d\u0430":"\u0433\u0430\u0434\u0437\u0456\u043d\u0443":e+" "+(e=+e,a=(a={ss:a?"\u0441\u0435\u043a\u0443\u043d\u0434\u0430_\u0441\u0435\u043a\u0443\u043d\u0434\u044b_\u0441\u0435\u043a\u0443\u043d\u0434":"\u0441\u0435\u043a\u0443\u043d\u0434\u0443_\u0441\u0435\u043a\u0443\u043d\u0434\u044b_\u0441\u0435\u043a\u0443\u043d\u0434",mm:a?"\u0445\u0432\u0456\u043b\u0456\u043d\u0430_\u0445\u0432\u0456\u043b\u0456\u043d\u044b_\u0445\u0432\u0456\u043b\u0456\u043d":"\u0445\u0432\u0456\u043b\u0456\u043d\u0443_\u0445\u0432\u0456\u043b\u0456\u043d\u044b_\u0445\u0432\u0456\u043b\u0456\u043d",hh:a?"\u0433\u0430\u0434\u0437\u0456\u043d\u0430_\u0433\u0430\u0434\u0437\u0456\u043d\u044b_\u0433\u0430\u0434\u0437\u0456\u043d":"\u0433\u0430\u0434\u0437\u0456\u043d\u0443_\u0433\u0430\u0434\u0437\u0456\u043d\u044b_\u0433\u0430\u0434\u0437\u0456\u043d",dd:"\u0434\u0437\u0435\u043d\u044c_\u0434\u043d\u0456_\u0434\u0437\u0451\u043d",MM:"\u043c\u0435\u0441\u044f\u0446_\u043c\u0435\u0441\u044f\u0446\u044b_\u043c\u0435\u0441\u044f\u0446\u0430\u045e",yy:"\u0433\u043e\u0434_\u0433\u0430\u0434\u044b_\u0433\u0430\u0434\u043e\u045e"}[t]).split("_"),e%10==1&&e%100!=11?a[0]:2<=e%10&&e%10<=4&&(e%100<10||20<=e%100)?a[1]:a[2])}M.defineLocale("az",{months:"yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),monthsShort:"yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),weekdays:"Bazar_Bazar ert\u0259si_\xc7\u0259r\u015f\u0259nb\u0259 ax\u015fam\u0131_\xc7\u0259r\u015f\u0259nb\u0259_C\xfcm\u0259 ax\u015fam\u0131_C\xfcm\u0259_\u015e\u0259nb\u0259".split("_"),weekdaysShort:"Baz_BzE_\xc7Ax_\xc7\u0259r_CAx_C\xfcm_\u015e\u0259n".split("_"),weekdaysMin:"Bz_BE_\xc7A_\xc7\u0259_CA_C\xfc_\u015e\u0259".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[bug\xfcn saat] LT",nextDay:"[sabah saat] LT",nextWeek:"[g\u0259l\u0259n h\u0259ft\u0259] dddd [saat] LT",lastDay:"[d\xfcn\u0259n] LT",lastWeek:"[ke\xe7\u0259n h\u0259ft\u0259] dddd [saat] LT",sameElse:"L"},relativeTime:{future:"%s sonra",past:"%s \u0259vv\u0259l",s:"bir ne\xe7\u0259 saniy\u0259",ss:"%d saniy\u0259",m:"bir d\u0259qiq\u0259",mm:"%d d\u0259qiq\u0259",h:"bir saat",hh:"%d saat",d:"bir g\xfcn",dd:"%d g\xfcn",M:"bir ay",MM:"%d ay",y:"bir il",yy:"%d il"},meridiemParse:/gec\u0259|s\u0259h\u0259r|g\xfcnd\xfcz|ax\u015fam/,isPM:function(e){return/^(g\xfcnd\xfcz|ax\u015fam)$/.test(e)},meridiem:function(e,a,t){return e<4?"gec\u0259":e<12?"s\u0259h\u0259r":e<17?"g\xfcnd\xfcz":"ax\u015fam"},dayOfMonthOrdinalParse:/\d{1,2}-(\u0131nc\u0131|inci|nci|\xfcnc\xfc|nc\u0131|uncu)/,ordinal:function(e){if(0===e)return e+"-\u0131nc\u0131";var a=e%10;return e+(Kt[a]||Kt[e%100-a]||Kt[100<=e?100:null])},week:{dow:1,doy:7}}),M.defineLocale("be",{months:{format:"\u0441\u0442\u0443\u0434\u0437\u0435\u043d\u044f_\u043b\u044e\u0442\u0430\u0433\u0430_\u0441\u0430\u043a\u0430\u0432\u0456\u043a\u0430_\u043a\u0440\u0430\u0441\u0430\u0432\u0456\u043a\u0430_\u0442\u0440\u0430\u045e\u043d\u044f_\u0447\u044d\u0440\u0432\u0435\u043d\u044f_\u043b\u0456\u043f\u0435\u043d\u044f_\u0436\u043d\u0456\u045e\u043d\u044f_\u0432\u0435\u0440\u0430\u0441\u043d\u044f_\u043a\u0430\u0441\u0442\u0440\u044b\u0447\u043d\u0456\u043a\u0430_\u043b\u0456\u0441\u0442\u0430\u043f\u0430\u0434\u0430_\u0441\u043d\u0435\u0436\u043d\u044f".split("_"),standalone:"\u0441\u0442\u0443\u0434\u0437\u0435\u043d\u044c_\u043b\u044e\u0442\u044b_\u0441\u0430\u043a\u0430\u0432\u0456\u043a_\u043a\u0440\u0430\u0441\u0430\u0432\u0456\u043a_\u0442\u0440\u0430\u0432\u0435\u043d\u044c_\u0447\u044d\u0440\u0432\u0435\u043d\u044c_\u043b\u0456\u043f\u0435\u043d\u044c_\u0436\u043d\u0456\u0432\u0435\u043d\u044c_\u0432\u0435\u0440\u0430\u0441\u0435\u043d\u044c_\u043a\u0430\u0441\u0442\u0440\u044b\u0447\u043d\u0456\u043a_\u043b\u0456\u0441\u0442\u0430\u043f\u0430\u0434_\u0441\u043d\u0435\u0436\u0430\u043d\u044c".split("_")},monthsShort:"\u0441\u0442\u0443\u0434_\u043b\u044e\u0442_\u0441\u0430\u043a_\u043a\u0440\u0430\u0441_\u0442\u0440\u0430\u0432_\u0447\u044d\u0440\u0432_\u043b\u0456\u043f_\u0436\u043d\u0456\u0432_\u0432\u0435\u0440_\u043a\u0430\u0441\u0442_\u043b\u0456\u0441\u0442_\u0441\u043d\u0435\u0436".split("_"),weekdays:{format:"\u043d\u044f\u0434\u0437\u0435\u043b\u044e_\u043f\u0430\u043d\u044f\u0434\u0437\u0435\u043b\u0430\u043a_\u0430\u045e\u0442\u043e\u0440\u0430\u043a_\u0441\u0435\u0440\u0430\u0434\u0443_\u0447\u0430\u0446\u0432\u0435\u0440_\u043f\u044f\u0442\u043d\u0456\u0446\u0443_\u0441\u0443\u0431\u043e\u0442\u0443".split("_"),standalone:"\u043d\u044f\u0434\u0437\u0435\u043b\u044f_\u043f\u0430\u043d\u044f\u0434\u0437\u0435\u043b\u0430\u043a_\u0430\u045e\u0442\u043e\u0440\u0430\u043a_\u0441\u0435\u0440\u0430\u0434\u0430_\u0447\u0430\u0446\u0432\u0435\u0440_\u043f\u044f\u0442\u043d\u0456\u0446\u0430_\u0441\u0443\u0431\u043e\u0442\u0430".split("_"),isFormat:/\[ ?[\u0423\u0443\u045e] ?(?:\u043c\u0456\u043d\u0443\u043b\u0443\u044e|\u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0443\u044e)? ?\] ?dddd/},weekdaysShort:"\u043d\u0434_\u043f\u043d_\u0430\u0442_\u0441\u0440_\u0447\u0446_\u043f\u0442_\u0441\u0431".split("_"),weekdaysMin:"\u043d\u0434_\u043f\u043d_\u0430\u0442_\u0441\u0440_\u0447\u0446_\u043f\u0442_\u0441\u0431".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY \u0433.",LLL:"D MMMM YYYY \u0433., HH:mm",LLLL:"dddd, D MMMM YYYY \u0433., HH:mm"},calendar:{sameDay:"[\u0421\u0451\u043d\u043d\u044f \u045e] LT",nextDay:"[\u0417\u0430\u045e\u0442\u0440\u0430 \u045e] LT",lastDay:"[\u0423\u0447\u043e\u0440\u0430 \u045e] LT",nextWeek:function(){return"[\u0423] dddd [\u045e] LT"},lastWeek:function(){switch(this.day()){case 0:case 3:case 5:case 6:return"[\u0423 \u043c\u0456\u043d\u0443\u043b\u0443\u044e] dddd [\u045e] LT";case 1:case 2:case 4:return"[\u0423 \u043c\u0456\u043d\u0443\u043b\u044b] dddd [\u045e] LT"}},sameElse:"L"},relativeTime:{future:"\u043f\u0440\u0430\u0437 %s",past:"%s \u0442\u0430\u043c\u0443",s:"\u043d\u0435\u043a\u0430\u043b\u044c\u043a\u0456 \u0441\u0435\u043a\u0443\u043d\u0434",m:qt,mm:qt,h:qt,hh:qt,d:"\u0434\u0437\u0435\u043d\u044c",dd:qt,M:"\u043c\u0435\u0441\u044f\u0446",MM:qt,y:"\u0433\u043e\u0434",yy:qt},meridiemParse:/\u043d\u043e\u0447\u044b|\u0440\u0430\u043d\u0456\u0446\u044b|\u0434\u043d\u044f|\u0432\u0435\u0447\u0430\u0440\u0430/,isPM:function(e){return/^(\u0434\u043d\u044f|\u0432\u0435\u0447\u0430\u0440\u0430)$/.test(e)},meridiem:function(e,a,t){return e<4?"\u043d\u043e\u0447\u044b":e<12?"\u0440\u0430\u043d\u0456\u0446\u044b":e<17?"\u0434\u043d\u044f":"\u0432\u0435\u0447\u0430\u0440\u0430"},dayOfMonthOrdinalParse:/\d{1,2}-(\u0456|\u044b|\u0433\u0430)/,ordinal:function(e,a){switch(a){case"M":case"d":case"DDD":case"w":case"W":return e%10!=2&&e%10!=3||e%100==12||e%100==13?e+"-\u044b":e+"-\u0456";case"D":return e+"-\u0433\u0430";default:return e}},week:{dow:1,doy:7}}),M.defineLocale("bg",{months:"\u044f\u043d\u0443\u0430\u0440\u0438_\u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0438\u043b_\u043c\u0430\u0439_\u044e\u043d\u0438_\u044e\u043b\u0438_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043f\u0442\u0435\u043c\u0432\u0440\u0438_\u043e\u043a\u0442\u043e\u043c\u0432\u0440\u0438_\u043d\u043e\u0435\u043c\u0432\u0440\u0438_\u0434\u0435\u043a\u0435\u043c\u0432\u0440\u0438".split("_"),monthsShort:"\u044f\u043d\u0443_\u0444\u0435\u0432_\u043c\u0430\u0440_\u0430\u043f\u0440_\u043c\u0430\u0439_\u044e\u043d\u0438_\u044e\u043b\u0438_\u0430\u0432\u0433_\u0441\u0435\u043f_\u043e\u043a\u0442_\u043d\u043e\u0435_\u0434\u0435\u043a".split("_"),weekdays:"\u043d\u0435\u0434\u0435\u043b\u044f_\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u043d\u0438\u043a_\u0432\u0442\u043e\u0440\u043d\u0438\u043a_\u0441\u0440\u044f\u0434\u0430_\u0447\u0435\u0442\u0432\u044a\u0440\u0442\u044a\u043a_\u043f\u0435\u0442\u044a\u043a_\u0441\u044a\u0431\u043e\u0442\u0430".split("_"),weekdaysShort:"\u043d\u0435\u0434_\u043f\u043e\u043d_\u0432\u0442\u043e_\u0441\u0440\u044f_\u0447\u0435\u0442_\u043f\u0435\u0442_\u0441\u044a\u0431".split("_"),weekdaysMin:"\u043d\u0434_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"D.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},calendar:{sameDay:"[\u0414\u043d\u0435\u0441 \u0432] LT",nextDay:"[\u0423\u0442\u0440\u0435 \u0432] LT",nextWeek:"dddd [\u0432] LT",lastDay:"[\u0412\u0447\u0435\u0440\u0430 \u0432] LT",lastWeek:function(){switch(this.day()){case 0:case 3:case 6:return"[\u041c\u0438\u043d\u0430\u043b\u0430\u0442\u0430] dddd [\u0432] LT";case 1:case 2:case 4:case 5:return"[\u041c\u0438\u043d\u0430\u043b\u0438\u044f] dddd [\u0432] LT"}},sameElse:"L"},relativeTime:{future:"\u0441\u043b\u0435\u0434 %s",past:"\u043f\u0440\u0435\u0434\u0438 %s",s:"\u043d\u044f\u043a\u043e\u043b\u043a\u043e \u0441\u0435\u043a\u0443\u043d\u0434\u0438",ss:"%d \u0441\u0435\u043a\u0443\u043d\u0434\u0438",m:"\u043c\u0438\u043d\u0443\u0442\u0430",mm:"%d \u043c\u0438\u043d\u0443\u0442\u0438",h:"\u0447\u0430\u0441",hh:"%d \u0447\u0430\u0441\u0430",d:"\u0434\u0435\u043d",dd:"%d \u0434\u0435\u043d\u0430",w:"\u0441\u0435\u0434\u043c\u0438\u0446\u0430",ww:"%d \u0441\u0435\u0434\u043c\u0438\u0446\u0438",M:"\u043c\u0435\u0441\u0435\u0446",MM:"%d \u043c\u0435\u0441\u0435\u0446\u0430",y:"\u0433\u043e\u0434\u0438\u043d\u0430",yy:"%d \u0433\u043e\u0434\u0438\u043d\u0438"},dayOfMonthOrdinalParse:/\d{1,2}-(\u0435\u0432|\u0435\u043d|\u0442\u0438|\u0432\u0438|\u0440\u0438|\u043c\u0438)/,ordinal:function(e){var a=e%10,t=e%100;return 0===e?e+"-\u0435\u0432":0==t?e+"-\u0435\u043d":10<t&&t<20?e+"-\u0442\u0438":1==a?e+"-\u0432\u0438":2==a?e+"-\u0440\u0438":7==a||8==a?e+"-\u043c\u0438":e+"-\u0442\u0438"},week:{dow:1,doy:7}}),M.defineLocale("bm",{months:"Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_M\u025bkalo_Zuw\u025bnkalo_Zuluyekalo_Utikalo_S\u025btanburukalo_\u0254kut\u0254burukalo_Nowanburukalo_Desanburukalo".split("_"),monthsShort:"Zan_Few_Mar_Awi_M\u025b_Zuw_Zul_Uti_S\u025bt_\u0254ku_Now_Des".split("_"),weekdays:"Kari_Nt\u025bn\u025bn_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"),weekdaysShort:"Kar_Nt\u025b_Tar_Ara_Ala_Jum_Sib".split("_"),weekdaysMin:"Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"MMMM [tile] D [san] YYYY",LLL:"MMMM [tile] D [san] YYYY [l\u025br\u025b] HH:mm",LLLL:"dddd MMMM [tile] D [san] YYYY [l\u025br\u025b] HH:mm"},calendar:{sameDay:"[Bi l\u025br\u025b] LT",nextDay:"[Sini l\u025br\u025b] LT",nextWeek:"dddd [don l\u025br\u025b] LT",lastDay:"[Kunu l\u025br\u025b] LT",lastWeek:"dddd [t\u025bm\u025bnen l\u025br\u025b] LT",sameElse:"L"},relativeTime:{future:"%s k\u0254n\u0254",past:"a b\u025b %s b\u0254",s:"sanga dama dama",ss:"sekondi %d",m:"miniti kelen",mm:"miniti %d",h:"l\u025br\u025b kelen",hh:"l\u025br\u025b %d",d:"tile kelen",dd:"tile %d",M:"kalo kelen",MM:"kalo %d",y:"san kelen",yy:"san %d"},week:{dow:1,doy:4}});var Zt={1:"\u09e7",2:"\u09e8",3:"\u09e9",4:"\u09ea",5:"\u09eb",6:"\u09ec",7:"\u09ed",8:"\u09ee",9:"\u09ef",0:"\u09e6"},$t={"\u09e7":"1","\u09e8":"2","\u09e9":"3","\u09ea":"4","\u09eb":"5","\u09ec":"6","\u09ed":"7","\u09ee":"8","\u09ef":"9","\u09e6":"0"},Qt=(M.defineLocale("bn-bd",{months:"\u099c\u09be\u09a8\u09c1\u09df\u09be\u09b0\u09bf_\u09ab\u09c7\u09ac\u09cd\u09b0\u09c1\u09df\u09be\u09b0\u09bf_\u09ae\u09be\u09b0\u09cd\u099a_\u098f\u09aa\u09cd\u09b0\u09bf\u09b2_\u09ae\u09c7_\u099c\u09c1\u09a8_\u099c\u09c1\u09b2\u09be\u0987_\u0986\u0997\u09b8\u09cd\u099f_\u09b8\u09c7\u09aa\u09cd\u099f\u09c7\u09ae\u09cd\u09ac\u09b0_\u0985\u0995\u09cd\u099f\u09cb\u09ac\u09b0_\u09a8\u09ad\u09c7\u09ae\u09cd\u09ac\u09b0_\u09a1\u09bf\u09b8\u09c7\u09ae\u09cd\u09ac\u09b0".split("_"),monthsShort:"\u099c\u09be\u09a8\u09c1_\u09ab\u09c7\u09ac\u09cd\u09b0\u09c1_\u09ae\u09be\u09b0\u09cd\u099a_\u098f\u09aa\u09cd\u09b0\u09bf\u09b2_\u09ae\u09c7_\u099c\u09c1\u09a8_\u099c\u09c1\u09b2\u09be\u0987_\u0986\u0997\u09b8\u09cd\u099f_\u09b8\u09c7\u09aa\u09cd\u099f_\u0985\u0995\u09cd\u099f\u09cb_\u09a8\u09ad\u09c7_\u09a1\u09bf\u09b8\u09c7".split("_"),weekdays:"\u09b0\u09ac\u09bf\u09ac\u09be\u09b0_\u09b8\u09cb\u09ae\u09ac\u09be\u09b0_\u09ae\u0999\u09cd\u0997\u09b2\u09ac\u09be\u09b0_\u09ac\u09c1\u09a7\u09ac\u09be\u09b0_\u09ac\u09c3\u09b9\u09b8\u09cd\u09aa\u09a4\u09bf\u09ac\u09be\u09b0_\u09b6\u09c1\u0995\u09cd\u09b0\u09ac\u09be\u09b0_\u09b6\u09a8\u09bf\u09ac\u09be\u09b0".split("_"),weekdaysShort:"\u09b0\u09ac\u09bf_\u09b8\u09cb\u09ae_\u09ae\u0999\u09cd\u0997\u09b2_\u09ac\u09c1\u09a7_\u09ac\u09c3\u09b9\u09b8\u09cd\u09aa\u09a4\u09bf_\u09b6\u09c1\u0995\u09cd\u09b0_\u09b6\u09a8\u09bf".split("_"),weekdaysMin:"\u09b0\u09ac\u09bf_\u09b8\u09cb\u09ae_\u09ae\u0999\u09cd\u0997\u09b2_\u09ac\u09c1\u09a7_\u09ac\u09c3\u09b9_\u09b6\u09c1\u0995\u09cd\u09b0_\u09b6\u09a8\u09bf".split("_"),longDateFormat:{LT:"A h:mm \u09b8\u09ae\u09df",LTS:"A h:mm:ss \u09b8\u09ae\u09df",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm \u09b8\u09ae\u09df",LLLL:"dddd, D MMMM YYYY, A h:mm \u09b8\u09ae\u09df"},calendar:{sameDay:"[\u0986\u099c] LT",nextDay:"[\u0986\u0997\u09be\u09ae\u09c0\u0995\u09be\u09b2] LT",nextWeek:"dddd, LT",lastDay:"[\u0997\u09a4\u0995\u09be\u09b2] LT",lastWeek:"[\u0997\u09a4] dddd, LT",sameElse:"L"},relativeTime:{future:"%s \u09aa\u09b0\u09c7",past:"%s \u0986\u0997\u09c7",s:"\u0995\u09df\u09c7\u0995 \u09b8\u09c7\u0995\u09c7\u09a8\u09cd\u09a1",ss:"%d \u09b8\u09c7\u0995\u09c7\u09a8\u09cd\u09a1",m:"\u098f\u0995 \u09ae\u09bf\u09a8\u09bf\u099f",mm:"%d \u09ae\u09bf\u09a8\u09bf\u099f",h:"\u098f\u0995 \u0998\u09a8\u09cd\u099f\u09be",hh:"%d \u0998\u09a8\u09cd\u099f\u09be",d:"\u098f\u0995 \u09a6\u09bf\u09a8",dd:"%d \u09a6\u09bf\u09a8",M:"\u098f\u0995 \u09ae\u09be\u09b8",MM:"%d \u09ae\u09be\u09b8",y:"\u098f\u0995 \u09ac\u099b\u09b0",yy:"%d \u09ac\u099b\u09b0"},preparse:function(e){return e.replace(/[\u09e7\u09e8\u09e9\u09ea\u09eb\u09ec\u09ed\u09ee\u09ef\u09e6]/g,function(e){return $t[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return Zt[e]})},meridiemParse:/\u09b0\u09be\u09a4|\u09ad\u09cb\u09b0|\u09b8\u0995\u09be\u09b2|\u09a6\u09c1\u09aa\u09c1\u09b0|\u09ac\u09bf\u0995\u09be\u09b2|\u09b8\u09a8\u09cd\u09a7\u09cd\u09af\u09be|\u09b0\u09be\u09a4/,meridiemHour:function(e,a){return 12===e&&(e=0),"\u09b0\u09be\u09a4"===a?e<4?e:e+12:"\u09ad\u09cb\u09b0"===a||"\u09b8\u0995\u09be\u09b2"===a?e:"\u09a6\u09c1\u09aa\u09c1\u09b0"===a?3<=e?e:e+12:"\u09ac\u09bf\u0995\u09be\u09b2"===a||"\u09b8\u09a8\u09cd\u09a7\u09cd\u09af\u09be"===a?e+12:void 0},meridiem:function(e,a,t){return e<4?"\u09b0\u09be\u09a4":e<6?"\u09ad\u09cb\u09b0":e<12?"\u09b8\u0995\u09be\u09b2":e<15?"\u09a6\u09c1\u09aa\u09c1\u09b0":e<18?"\u09ac\u09bf\u0995\u09be\u09b2":e<20?"\u09b8\u09a8\u09cd\u09a7\u09cd\u09af\u09be":"\u09b0\u09be\u09a4"},week:{dow:0,doy:6}}),{1:"\u09e7",2:"\u09e8",3:"\u09e9",4:"\u09ea",5:"\u09eb",6:"\u09ec",7:"\u09ed",8:"\u09ee",9:"\u09ef",0:"\u09e6"}),Xt={"\u09e7":"1","\u09e8":"2","\u09e9":"3","\u09ea":"4","\u09eb":"5","\u09ec":"6","\u09ed":"7","\u09ee":"8","\u09ef":"9","\u09e6":"0"},es=(M.defineLocale("bn",{months:"\u099c\u09be\u09a8\u09c1\u09df\u09be\u09b0\u09bf_\u09ab\u09c7\u09ac\u09cd\u09b0\u09c1\u09df\u09be\u09b0\u09bf_\u09ae\u09be\u09b0\u09cd\u099a_\u098f\u09aa\u09cd\u09b0\u09bf\u09b2_\u09ae\u09c7_\u099c\u09c1\u09a8_\u099c\u09c1\u09b2\u09be\u0987_\u0986\u0997\u09b8\u09cd\u099f_\u09b8\u09c7\u09aa\u09cd\u099f\u09c7\u09ae\u09cd\u09ac\u09b0_\u0985\u0995\u09cd\u099f\u09cb\u09ac\u09b0_\u09a8\u09ad\u09c7\u09ae\u09cd\u09ac\u09b0_\u09a1\u09bf\u09b8\u09c7\u09ae\u09cd\u09ac\u09b0".split("_"),monthsShort:"\u099c\u09be\u09a8\u09c1_\u09ab\u09c7\u09ac\u09cd\u09b0\u09c1_\u09ae\u09be\u09b0\u09cd\u099a_\u098f\u09aa\u09cd\u09b0\u09bf\u09b2_\u09ae\u09c7_\u099c\u09c1\u09a8_\u099c\u09c1\u09b2\u09be\u0987_\u0986\u0997\u09b8\u09cd\u099f_\u09b8\u09c7\u09aa\u09cd\u099f_\u0985\u0995\u09cd\u099f\u09cb_\u09a8\u09ad\u09c7_\u09a1\u09bf\u09b8\u09c7".split("_"),weekdays:"\u09b0\u09ac\u09bf\u09ac\u09be\u09b0_\u09b8\u09cb\u09ae\u09ac\u09be\u09b0_\u09ae\u0999\u09cd\u0997\u09b2\u09ac\u09be\u09b0_\u09ac\u09c1\u09a7\u09ac\u09be\u09b0_\u09ac\u09c3\u09b9\u09b8\u09cd\u09aa\u09a4\u09bf\u09ac\u09be\u09b0_\u09b6\u09c1\u0995\u09cd\u09b0\u09ac\u09be\u09b0_\u09b6\u09a8\u09bf\u09ac\u09be\u09b0".split("_"),weekdaysShort:"\u09b0\u09ac\u09bf_\u09b8\u09cb\u09ae_\u09ae\u0999\u09cd\u0997\u09b2_\u09ac\u09c1\u09a7_\u09ac\u09c3\u09b9\u09b8\u09cd\u09aa\u09a4\u09bf_\u09b6\u09c1\u0995\u09cd\u09b0_\u09b6\u09a8\u09bf".split("_"),weekdaysMin:"\u09b0\u09ac\u09bf_\u09b8\u09cb\u09ae_\u09ae\u0999\u09cd\u0997\u09b2_\u09ac\u09c1\u09a7_\u09ac\u09c3\u09b9_\u09b6\u09c1\u0995\u09cd\u09b0_\u09b6\u09a8\u09bf".split("_"),longDateFormat:{LT:"A h:mm \u09b8\u09ae\u09df",LTS:"A h:mm:ss \u09b8\u09ae\u09df",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm \u09b8\u09ae\u09df",LLLL:"dddd, D MMMM YYYY, A h:mm \u09b8\u09ae\u09df"},calendar:{sameDay:"[\u0986\u099c] LT",nextDay:"[\u0986\u0997\u09be\u09ae\u09c0\u0995\u09be\u09b2] LT",nextWeek:"dddd, LT",lastDay:"[\u0997\u09a4\u0995\u09be\u09b2] LT",lastWeek:"[\u0997\u09a4] dddd, LT",sameElse:"L"},relativeTime:{future:"%s \u09aa\u09b0\u09c7",past:"%s \u0986\u0997\u09c7",s:"\u0995\u09df\u09c7\u0995 \u09b8\u09c7\u0995\u09c7\u09a8\u09cd\u09a1",ss:"%d \u09b8\u09c7\u0995\u09c7\u09a8\u09cd\u09a1",m:"\u098f\u0995 \u09ae\u09bf\u09a8\u09bf\u099f",mm:"%d \u09ae\u09bf\u09a8\u09bf\u099f",h:"\u098f\u0995 \u0998\u09a8\u09cd\u099f\u09be",hh:"%d \u0998\u09a8\u09cd\u099f\u09be",d:"\u098f\u0995 \u09a6\u09bf\u09a8",dd:"%d \u09a6\u09bf\u09a8",M:"\u098f\u0995 \u09ae\u09be\u09b8",MM:"%d \u09ae\u09be\u09b8",y:"\u098f\u0995 \u09ac\u099b\u09b0",yy:"%d \u09ac\u099b\u09b0"},preparse:function(e){return e.replace(/[\u09e7\u09e8\u09e9\u09ea\u09eb\u09ec\u09ed\u09ee\u09ef\u09e6]/g,function(e){return Xt[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return Qt[e]})},meridiemParse:/\u09b0\u09be\u09a4|\u09b8\u0995\u09be\u09b2|\u09a6\u09c1\u09aa\u09c1\u09b0|\u09ac\u09bf\u0995\u09be\u09b2|\u09b0\u09be\u09a4/,meridiemHour:function(e,a){return 12===e&&(e=0),"\u09b0\u09be\u09a4"===a&&4<=e||"\u09a6\u09c1\u09aa\u09c1\u09b0"===a&&e<5||"\u09ac\u09bf\u0995\u09be\u09b2"===a?e+12:e},meridiem:function(e,a,t){return e<4?"\u09b0\u09be\u09a4":e<10?"\u09b8\u0995\u09be\u09b2":e<17?"\u09a6\u09c1\u09aa\u09c1\u09b0":e<20?"\u09ac\u09bf\u0995\u09be\u09b2":"\u09b0\u09be\u09a4"},week:{dow:0,doy:6}}),{1:"\u0f21",2:"\u0f22",3:"\u0f23",4:"\u0f24",5:"\u0f25",6:"\u0f26",7:"\u0f27",8:"\u0f28",9:"\u0f29",0:"\u0f20"}),as={"\u0f21":"1","\u0f22":"2","\u0f23":"3","\u0f24":"4","\u0f25":"5","\u0f26":"6","\u0f27":"7","\u0f28":"8","\u0f29":"9","\u0f20":"0"};function ts(e,a,t){return e+" "+(t={mm:"munutenn",MM:"miz",dd:"devezh"}[t],2!==(e=e)?t:void 0!==(e={m:"v",b:"v",d:"z"})[(t=t).charAt(0)]?e[t.charAt(0)]+t.substring(1):t)}M.defineLocale("bo",{months:"\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0f44\u0f0b\u0f54\u0f7c_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f42\u0f49\u0f72\u0f66\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f42\u0f66\u0f74\u0f58\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f5e\u0f72\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f63\u0f94\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0fb2\u0f74\u0f42\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f51\u0f74\u0f53\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f62\u0f92\u0fb1\u0f51\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0f42\u0f74\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f42\u0f45\u0f72\u0f42\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f42\u0f49\u0f72\u0f66\u0f0b\u0f54".split("_"),monthsShort:"\u0f5f\u0fb3\u0f0b1_\u0f5f\u0fb3\u0f0b2_\u0f5f\u0fb3\u0f0b3_\u0f5f\u0fb3\u0f0b4_\u0f5f\u0fb3\u0f0b5_\u0f5f\u0fb3\u0f0b6_\u0f5f\u0fb3\u0f0b7_\u0f5f\u0fb3\u0f0b8_\u0f5f\u0fb3\u0f0b9_\u0f5f\u0fb3\u0f0b10_\u0f5f\u0fb3\u0f0b11_\u0f5f\u0fb3\u0f0b12".split("_"),monthsShortRegex:/^(\u0f5f\u0fb3\u0f0b\d{1,2})/,monthsParseExact:!0,weekdays:"\u0f42\u0f5f\u0f60\u0f0b\u0f49\u0f72\u0f0b\u0f58\u0f0b_\u0f42\u0f5f\u0f60\u0f0b\u0f5f\u0fb3\u0f0b\u0f56\u0f0b_\u0f42\u0f5f\u0f60\u0f0b\u0f58\u0f72\u0f42\u0f0b\u0f51\u0f58\u0f62\u0f0b_\u0f42\u0f5f\u0f60\u0f0b\u0f63\u0fb7\u0f42\u0f0b\u0f54\u0f0b_\u0f42\u0f5f\u0f60\u0f0b\u0f55\u0f74\u0f62\u0f0b\u0f56\u0f74_\u0f42\u0f5f\u0f60\u0f0b\u0f54\u0f0b\u0f66\u0f44\u0f66\u0f0b_\u0f42\u0f5f\u0f60\u0f0b\u0f66\u0fa4\u0f7a\u0f53\u0f0b\u0f54\u0f0b".split("_"),weekdaysShort:"\u0f49\u0f72\u0f0b\u0f58\u0f0b_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b_\u0f58\u0f72\u0f42\u0f0b\u0f51\u0f58\u0f62\u0f0b_\u0f63\u0fb7\u0f42\u0f0b\u0f54\u0f0b_\u0f55\u0f74\u0f62\u0f0b\u0f56\u0f74_\u0f54\u0f0b\u0f66\u0f44\u0f66\u0f0b_\u0f66\u0fa4\u0f7a\u0f53\u0f0b\u0f54\u0f0b".split("_"),weekdaysMin:"\u0f49\u0f72_\u0f5f\u0fb3_\u0f58\u0f72\u0f42_\u0f63\u0fb7\u0f42_\u0f55\u0f74\u0f62_\u0f66\u0f44\u0f66_\u0f66\u0fa4\u0f7a\u0f53".split("_"),longDateFormat:{LT:"A h:mm",LTS:"A h:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm",LLLL:"dddd, D MMMM YYYY, A h:mm"},calendar:{sameDay:"[\u0f51\u0f72\u0f0b\u0f62\u0f72\u0f44] LT",nextDay:"[\u0f66\u0f44\u0f0b\u0f49\u0f72\u0f53] LT",nextWeek:"[\u0f56\u0f51\u0f74\u0f53\u0f0b\u0f55\u0fb2\u0f42\u0f0b\u0f62\u0f97\u0f7a\u0f66\u0f0b\u0f58], LT",lastDay:"[\u0f41\u0f0b\u0f66\u0f44] LT",lastWeek:"[\u0f56\u0f51\u0f74\u0f53\u0f0b\u0f55\u0fb2\u0f42\u0f0b\u0f58\u0f50\u0f60\u0f0b\u0f58] dddd, LT",sameElse:"L"},relativeTime:{future:"%s \u0f63\u0f0b",past:"%s \u0f66\u0f94\u0f53\u0f0b\u0f63",s:"\u0f63\u0f58\u0f0b\u0f66\u0f44",ss:"%d \u0f66\u0f90\u0f62\u0f0b\u0f46\u0f0d",m:"\u0f66\u0f90\u0f62\u0f0b\u0f58\u0f0b\u0f42\u0f45\u0f72\u0f42",mm:"%d \u0f66\u0f90\u0f62\u0f0b\u0f58",h:"\u0f46\u0f74\u0f0b\u0f5a\u0f7c\u0f51\u0f0b\u0f42\u0f45\u0f72\u0f42",hh:"%d \u0f46\u0f74\u0f0b\u0f5a\u0f7c\u0f51",d:"\u0f49\u0f72\u0f53\u0f0b\u0f42\u0f45\u0f72\u0f42",dd:"%d \u0f49\u0f72\u0f53\u0f0b",M:"\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f42\u0f45\u0f72\u0f42",MM:"%d \u0f5f\u0fb3\u0f0b\u0f56",y:"\u0f63\u0f7c\u0f0b\u0f42\u0f45\u0f72\u0f42",yy:"%d \u0f63\u0f7c"},preparse:function(e){return e.replace(/[\u0f21\u0f22\u0f23\u0f24\u0f25\u0f26\u0f27\u0f28\u0f29\u0f20]/g,function(e){return as[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return es[e]})},meridiemParse:/\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c|\u0f5e\u0f7c\u0f42\u0f66\u0f0b\u0f40\u0f66|\u0f49\u0f72\u0f53\u0f0b\u0f42\u0f74\u0f44|\u0f51\u0f42\u0f7c\u0f44\u0f0b\u0f51\u0f42|\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c/,meridiemHour:function(e,a){return 12===e&&(e=0),"\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c"===a&&4<=e||"\u0f49\u0f72\u0f53\u0f0b\u0f42\u0f74\u0f44"===a&&e<5||"\u0f51\u0f42\u0f7c\u0f44\u0f0b\u0f51\u0f42"===a?e+12:e},meridiem:function(e,a,t){return e<4?"\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c":e<10?"\u0f5e\u0f7c\u0f42\u0f66\u0f0b\u0f40\u0f66":e<17?"\u0f49\u0f72\u0f53\u0f0b\u0f42\u0f74\u0f44":e<20?"\u0f51\u0f42\u0f7c\u0f44\u0f0b\u0f51\u0f42":"\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c"},week:{dow:0,doy:6}});L=[/^gen/i,/^c[\u02bc\']hwe/i,/^meu/i,/^ebr/i,/^mae/i,/^(mez|eve)/i,/^gou/i,/^eos/i,/^gwe/i,/^her/i,/^du/i,/^ker/i],c=/^(genver|c[\u02bc\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu|gen|c[\u02bc\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i,ta=[/^Su/i,/^Lu/i,/^Me([^r]|$)/i,/^Mer/i,/^Ya/i,/^Gw/i,/^Sa/i];function ss(e,a,t){var s=e+" ";switch(t){case"ss":return s+=1===e?"sekunda":2===e||3===e||4===e?"sekunde":"sekundi";case"m":return a?"jedna minuta":"jedne minute";case"mm":return s+=1!==e&&(2===e||3===e||4===e)?"minute":"minuta";case"h":return a?"jedan sat":"jednog sata";case"hh":return s+=1===e?"sat":2===e||3===e||4===e?"sata":"sati";case"dd":return s+=1===e?"dan":"dana";case"MM":return s+=1===e?"mjesec":2===e||3===e||4===e?"mjeseca":"mjeseci";case"yy":return s+=1!==e&&(2===e||3===e||4===e)?"godine":"godina"}}M.defineLocale("br",{months:"Genver_C\u02bchwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),monthsShort:"Gen_C\u02bchwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),weekdays:"Sul_Lun_Meurzh_Merc\u02bcher_Yaou_Gwener_Sadorn".split("_"),weekdaysShort:"Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),weekdaysMin:"Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),weekdaysParse:ta,fullWeekdaysParse:[/^sul/i,/^lun/i,/^meurzh/i,/^merc[\u02bc\']her/i,/^yaou/i,/^gwener/i,/^sadorn/i],shortWeekdaysParse:[/^Sul/i,/^Lun/i,/^Meu/i,/^Mer/i,/^Yao/i,/^Gwe/i,/^Sad/i],minWeekdaysParse:ta,monthsRegex:c,monthsShortRegex:c,monthsStrictRegex:/^(genver|c[\u02bc\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu)/i,monthsShortStrictRegex:/^(gen|c[\u02bc\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i,monthsParse:L,longMonthsParse:L,shortMonthsParse:L,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [a viz] MMMM YYYY",LLL:"D [a viz] MMMM YYYY HH:mm",LLLL:"dddd, D [a viz] MMMM YYYY HH:mm"},calendar:{sameDay:"[Hiziv da] LT",nextDay:"[Warc\u02bchoazh da] LT",nextWeek:"dddd [da] LT",lastDay:"[Dec\u02bch da] LT",lastWeek:"dddd [paset da] LT",sameElse:"L"},relativeTime:{future:"a-benn %s",past:"%s \u02bczo",s:"un nebeud segondenno\xf9",ss:"%d eilenn",m:"ur vunutenn",mm:ts,h:"un eur",hh:"%d eur",d:"un devezh",dd:ts,M:"ur miz",MM:ts,y:"ur bloaz",yy:function(e){switch(function e(a){if(9<a)return e(a%10);return a}(e)){case 1:case 3:case 4:case 5:case 9:return e+" bloaz";default:return e+" vloaz"}}},dayOfMonthOrdinalParse:/\d{1,2}(a\xf1|vet)/,ordinal:function(e){return e+(1===e?"a\xf1":"vet")},week:{dow:1,doy:4},meridiemParse:/a.m.|g.m./,isPM:function(e){return"g.m."===e},meridiem:function(e,a,t){return e<12?"a.m.":"g.m."}}),M.defineLocale("bs",{months:"januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),monthsShort:"jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"nedjelja_ponedjeljak_utorak_srijeda_\u010detvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._\u010det._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_\u010de_pe_su".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedjelju] [u] LT";case 3:return"[u] [srijedu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[ju\u010der u] LT",lastWeek:function(){switch(this.day()){case 0:case 3:return"[pro\u0161lu] dddd [u] LT";case 6:return"[pro\u0161le] [subote] [u] LT";case 1:case 2:case 4:case 5:return"[pro\u0161li] dddd [u] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"prije %s",s:"par sekundi",ss:ss,m:ss,mm:ss,h:ss,hh:ss,d:"dan",dd:ss,M:"mjesec",MM:ss,y:"godinu",yy:ss},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}}),M.defineLocale("ca",{months:{standalone:"gener_febrer_mar\xe7_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),format:"de gener_de febrer_de mar\xe7_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split("_"),isFormat:/D[oD]?(\s)+MMMM/},monthsShort:"gen._febr._mar\xe7_abr._maig_juny_jul._ag._set._oct._nov._des.".split("_"),monthsParseExact:!0,weekdays:"diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),weekdaysShort:"dg._dl._dt._dc._dj._dv._ds.".split("_"),weekdaysMin:"dg_dl_dt_dc_dj_dv_ds".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM [de] YYYY",ll:"D MMM YYYY",LLL:"D MMMM [de] YYYY [a les] H:mm",lll:"D MMM YYYY, H:mm",LLLL:"dddd D MMMM [de] YYYY [a les] H:mm",llll:"ddd D MMM YYYY, H:mm"},calendar:{sameDay:function(){return"[avui a "+(1!==this.hours()?"les":"la")+"] LT"},nextDay:function(){return"[dem\xe0 a "+(1!==this.hours()?"les":"la")+"] LT"},nextWeek:function(){return"dddd [a "+(1!==this.hours()?"les":"la")+"] LT"},lastDay:function(){return"[ahir a "+(1!==this.hours()?"les":"la")+"] LT"},lastWeek:function(){return"[el] dddd [passat a "+(1!==this.hours()?"les":"la")+"] LT"},sameElse:"L"},relativeTime:{future:"d'aqu\xed %s",past:"fa %s",s:"uns segons",ss:"%d segons",m:"un minut",mm:"%d minuts",h:"una hora",hh:"%d hores",d:"un dia",dd:"%d dies",M:"un mes",MM:"%d mesos",y:"un any",yy:"%d anys"},dayOfMonthOrdinalParse:/\d{1,2}(r|n|t|\xe8|a)/,ordinal:function(e,a){return e+("w"!==a&&"W"!==a?1===e?"r":2===e?"n":3===e?"r":4===e?"t":"\xe8":"a")},week:{dow:1,doy:4}});f={format:"leden_\xfanor_b\u0159ezen_duben_kv\u011bten_\u010derven_\u010dervenec_srpen_z\xe1\u0159\xed_\u0159\xedjen_listopad_prosinec".split("_"),standalone:"ledna_\xfanora_b\u0159ezna_dubna_kv\u011btna_\u010dervna_\u010dervence_srpna_z\xe1\u0159\xed_\u0159\xedjna_listopadu_prosince".split("_")},ke="led_\xfano_b\u0159e_dub_kv\u011b_\u010dvn_\u010dvc_srp_z\xe1\u0159_\u0159\xedj_lis_pro".split("_"),y=[/^led/i,/^\xfano/i,/^b\u0159e/i,/^dub/i,/^kv\u011b/i,/^(\u010dvn|\u010derven$|\u010dervna)/i,/^(\u010dvc|\u010dervenec|\u010dervence)/i,/^srp/i,/^z\xe1\u0159/i,/^\u0159\xedj/i,/^lis/i,/^pro/i],_=/^(leden|\xfanor|b\u0159ezen|duben|kv\u011bten|\u010dervenec|\u010dervence|\u010derven|\u010dervna|srpen|z\xe1\u0159\xed|\u0159\xedjen|listopad|prosinec|led|\xfano|b\u0159e|dub|kv\u011b|\u010dvn|\u010dvc|srp|z\xe1\u0159|\u0159\xedj|lis|pro)/i;function ns(e){return 1<e&&e<5&&1!=~~(e/10)}function P(e,a,t,s){var n=e+" ";switch(t){case"s":return a||s?"p\xe1r sekund":"p\xe1r sekundami";case"ss":return a||s?n+(ns(e)?"sekundy":"sekund"):n+"sekundami";case"m":return a?"minuta":s?"minutu":"minutou";case"mm":return a||s?n+(ns(e)?"minuty":"minut"):n+"minutami";case"h":return a?"hodina":s?"hodinu":"hodinou";case"hh":return a||s?n+(ns(e)?"hodiny":"hodin"):n+"hodinami";case"d":return a||s?"den":"dnem";case"dd":return a||s?n+(ns(e)?"dny":"dn\xed"):n+"dny";case"M":return a||s?"m\u011bs\xedc":"m\u011bs\xedcem";case"MM":return a||s?n+(ns(e)?"m\u011bs\xedce":"m\u011bs\xedc\u016f"):n+"m\u011bs\xedci";case"y":return a||s?"rok":"rokem";case"yy":return a||s?n+(ns(e)?"roky":"let"):n+"lety"}}function rs(e,a,t,s){e={m:["eine Minute","einer Minute"],h:["eine Stunde","einer Stunde"],d:["ein Tag","einem Tag"],dd:[e+" Tage",e+" Tagen"],w:["eine Woche","einer Woche"],M:["ein Monat","einem Monat"],MM:[e+" Monate",e+" Monaten"],y:["ein Jahr","einem Jahr"],yy:[e+" Jahre",e+" Jahren"]};return a?e[t][0]:e[t][1]}function ds(e,a,t,s){e={m:["eine Minute","einer Minute"],h:["eine Stunde","einer Stunde"],d:["ein Tag","einem Tag"],dd:[e+" Tage",e+" Tagen"],w:["eine Woche","einer Woche"],M:["ein Monat","einem Monat"],MM:[e+" Monate",e+" Monaten"],y:["ein Jahr","einem Jahr"],yy:[e+" Jahre",e+" Jahren"]};return a?e[t][0]:e[t][1]}function is(e,a,t,s){e={m:["eine Minute","einer Minute"],h:["eine Stunde","einer Stunde"],d:["ein Tag","einem Tag"],dd:[e+" Tage",e+" Tagen"],w:["eine Woche","einer Woche"],M:["ein Monat","einem Monat"],MM:[e+" Monate",e+" Monaten"],y:["ein Jahr","einem Jahr"],yy:[e+" Jahre",e+" Jahren"]};return a?e[t][0]:e[t][1]}M.defineLocale("cs",{months:f,monthsShort:ke,monthsRegex:_,monthsShortRegex:_,monthsStrictRegex:/^(leden|ledna|\xfanora|\xfanor|b\u0159ezen|b\u0159ezna|duben|dubna|kv\u011bten|kv\u011btna|\u010dervenec|\u010dervence|\u010derven|\u010dervna|srpen|srpna|z\xe1\u0159\xed|\u0159\xedjen|\u0159\xedjna|listopadu|listopad|prosinec|prosince)/i,monthsShortStrictRegex:/^(led|\xfano|b\u0159e|dub|kv\u011b|\u010dvn|\u010dvc|srp|z\xe1\u0159|\u0159\xedj|lis|pro)/i,monthsParse:y,longMonthsParse:y,shortMonthsParse:y,weekdays:"ned\u011ble_pond\u011bl\xed_\xfater\xfd_st\u0159eda_\u010dtvrtek_p\xe1tek_sobota".split("_"),weekdaysShort:"ne_po_\xfat_st_\u010dt_p\xe1_so".split("_"),weekdaysMin:"ne_po_\xfat_st_\u010dt_p\xe1_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm",l:"D. M. YYYY"},calendar:{sameDay:"[dnes v] LT",nextDay:"[z\xedtra v] LT",nextWeek:function(){switch(this.day()){case 0:return"[v ned\u011bli v] LT";case 1:case 2:return"[v] dddd [v] LT";case 3:return"[ve st\u0159edu v] LT";case 4:return"[ve \u010dtvrtek v] LT";case 5:return"[v p\xe1tek v] LT";case 6:return"[v sobotu v] LT"}},lastDay:"[v\u010dera v] LT",lastWeek:function(){switch(this.day()){case 0:return"[minulou ned\u011bli v] LT";case 1:case 2:return"[minul\xe9] dddd [v] LT";case 3:return"[minulou st\u0159edu v] LT";case 4:case 5:return"[minul\xfd] dddd [v] LT";case 6:return"[minulou sobotu v] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"p\u0159ed %s",s:P,ss:P,m:P,mm:P,h:P,hh:P,d:P,dd:P,M:P,MM:P,y:P,yy:P},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),M.defineLocale("cv",{months:"\u043a\u04d1\u0440\u043b\u0430\u0447_\u043d\u0430\u0440\u04d1\u0441_\u043f\u0443\u0448_\u0430\u043a\u0430_\u043c\u0430\u0439_\u04ab\u04d7\u0440\u0442\u043c\u0435_\u0443\u0442\u04d1_\u04ab\u0443\u0440\u043b\u0430_\u0430\u0432\u04d1\u043d_\u044e\u043f\u0430_\u0447\u04f3\u043a_\u0440\u0430\u0448\u0442\u0430\u0432".split("_"),monthsShort:"\u043a\u04d1\u0440_\u043d\u0430\u0440_\u043f\u0443\u0448_\u0430\u043a\u0430_\u043c\u0430\u0439_\u04ab\u04d7\u0440_\u0443\u0442\u04d1_\u04ab\u0443\u0440_\u0430\u0432\u043d_\u044e\u043f\u0430_\u0447\u04f3\u043a_\u0440\u0430\u0448".split("_"),weekdays:"\u0432\u044b\u0440\u0441\u0430\u0440\u043d\u0438\u043a\u0443\u043d_\u0442\u0443\u043d\u0442\u0438\u043a\u0443\u043d_\u044b\u0442\u043b\u0430\u0440\u0438\u043a\u0443\u043d_\u044e\u043d\u043a\u0443\u043d_\u043a\u04d7\u04ab\u043d\u0435\u0440\u043d\u0438\u043a\u0443\u043d_\u044d\u0440\u043d\u0435\u043a\u0443\u043d_\u0448\u04d1\u043c\u0430\u0442\u043a\u0443\u043d".split("_"),weekdaysShort:"\u0432\u044b\u0440_\u0442\u0443\u043d_\u044b\u0442\u043b_\u044e\u043d_\u043a\u04d7\u04ab_\u044d\u0440\u043d_\u0448\u04d1\u043c".split("_"),weekdaysMin:"\u0432\u0440_\u0442\u043d_\u044b\u0442_\u044e\u043d_\u043a\u04ab_\u044d\u0440_\u0448\u043c".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"YYYY [\u04ab\u0443\u043b\u0445\u0438] MMMM [\u0443\u0439\u04d1\u0445\u04d7\u043d] D[-\u043c\u04d7\u0448\u04d7]",LLL:"YYYY [\u04ab\u0443\u043b\u0445\u0438] MMMM [\u0443\u0439\u04d1\u0445\u04d7\u043d] D[-\u043c\u04d7\u0448\u04d7], HH:mm",LLLL:"dddd, YYYY [\u04ab\u0443\u043b\u0445\u0438] MMMM [\u0443\u0439\u04d1\u0445\u04d7\u043d] D[-\u043c\u04d7\u0448\u04d7], HH:mm"},calendar:{sameDay:"[\u041f\u0430\u044f\u043d] LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]",nextDay:"[\u042b\u0440\u0430\u043d] LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]",lastDay:"[\u04d6\u043d\u0435\u0440] LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]",nextWeek:"[\u04aa\u0438\u0442\u0435\u0441] dddd LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]",lastWeek:"[\u0418\u0440\u0442\u043d\u04d7] dddd LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]",sameElse:"L"},relativeTime:{future:function(e){return e+(/\u0441\u0435\u0445\u0435\u0442$/i.exec(e)?"\u0440\u0435\u043d":/\u04ab\u0443\u043b$/i.exec(e)?"\u0442\u0430\u043d":"\u0440\u0430\u043d")},past:"%s \u043a\u0430\u044f\u043b\u043b\u0430",s:"\u043f\u04d7\u0440-\u0438\u043a \u04ab\u0435\u043a\u043a\u0443\u043d\u0442",ss:"%d \u04ab\u0435\u043a\u043a\u0443\u043d\u0442",m:"\u043f\u04d7\u0440 \u043c\u0438\u043d\u0443\u0442",mm:"%d \u043c\u0438\u043d\u0443\u0442",h:"\u043f\u04d7\u0440 \u0441\u0435\u0445\u0435\u0442",hh:"%d \u0441\u0435\u0445\u0435\u0442",d:"\u043f\u04d7\u0440 \u043a\u0443\u043d",dd:"%d \u043a\u0443\u043d",M:"\u043f\u04d7\u0440 \u0443\u0439\u04d1\u0445",MM:"%d \u0443\u0439\u04d1\u0445",y:"\u043f\u04d7\u0440 \u04ab\u0443\u043b",yy:"%d \u04ab\u0443\u043b"},dayOfMonthOrdinalParse:/\d{1,2}-\u043c\u04d7\u0448/,ordinal:"%d-\u043c\u04d7\u0448",week:{dow:1,doy:7}}),M.defineLocale("cy",{months:"Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),monthsShort:"Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),weekdays:"Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),weekdaysShort:"Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),weekdaysMin:"Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Heddiw am] LT",nextDay:"[Yfory am] LT",nextWeek:"dddd [am] LT",lastDay:"[Ddoe am] LT",lastWeek:"dddd [diwethaf am] LT",sameElse:"L"},relativeTime:{future:"mewn %s",past:"%s yn \xf4l",s:"ychydig eiliadau",ss:"%d eiliad",m:"munud",mm:"%d munud",h:"awr",hh:"%d awr",d:"diwrnod",dd:"%d diwrnod",M:"mis",MM:"%d mis",y:"blwyddyn",yy:"%d flynedd"},dayOfMonthOrdinalParse:/\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,ordinal:function(e){var a="";return 20<e?a=40===e||50===e||60===e||80===e||100===e?"fed":"ain":0<e&&(a=["","af","il","ydd","ydd","ed","ed","ed","fed","fed","fed","eg","fed","eg","eg","fed","eg","eg","fed","eg","fed"][e]),e+a},week:{dow:1,doy:4}}),M.defineLocale("da",{months:"januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),weekdays:"s\xf8ndag_mandag_tirsdag_onsdag_torsdag_fredag_l\xf8rdag".split("_"),weekdaysShort:"s\xf8n_man_tir_ons_tor_fre_l\xf8r".split("_"),weekdaysMin:"s\xf8_ma_ti_on_to_fr_l\xf8".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd [d.] D. MMMM YYYY [kl.] HH:mm"},calendar:{sameDay:"[i dag kl.] LT",nextDay:"[i morgen kl.] LT",nextWeek:"p\xe5 dddd [kl.] LT",lastDay:"[i g\xe5r kl.] LT",lastWeek:"[i] dddd[s kl.] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"%s siden",s:"f\xe5 sekunder",ss:"%d sekunder",m:"et minut",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dage",M:"en m\xe5ned",MM:"%d m\xe5neder",y:"et \xe5r",yy:"%d \xe5r"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),M.defineLocale("de-at",{months:"J\xe4nner_Februar_M\xe4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"J\xe4n._Feb._M\xe4rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},calendar:{sameDay:"[heute um] LT [Uhr]",sameElse:"L",nextDay:"[morgen um] LT [Uhr]",nextWeek:"dddd [um] LT [Uhr]",lastDay:"[gestern um] LT [Uhr]",lastWeek:"[letzten] dddd [um] LT [Uhr]"},relativeTime:{future:"in %s",past:"vor %s",s:"ein paar Sekunden",ss:"%d Sekunden",m:rs,mm:"%d Minuten",h:rs,hh:"%d Stunden",d:rs,dd:rs,w:rs,ww:"%d Wochen",M:rs,MM:rs,y:rs,yy:rs},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),M.defineLocale("de-ch",{months:"Januar_Februar_M\xe4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Feb._M\xe4rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},calendar:{sameDay:"[heute um] LT [Uhr]",sameElse:"L",nextDay:"[morgen um] LT [Uhr]",nextWeek:"dddd [um] LT [Uhr]",lastDay:"[gestern um] LT [Uhr]",lastWeek:"[letzten] dddd [um] LT [Uhr]"},relativeTime:{future:"in %s",past:"vor %s",s:"ein paar Sekunden",ss:"%d Sekunden",m:ds,mm:"%d Minuten",h:ds,hh:"%d Stunden",d:ds,dd:ds,w:ds,ww:"%d Wochen",M:ds,MM:ds,y:ds,yy:ds},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),M.defineLocale("de",{months:"Januar_Februar_M\xe4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Feb._M\xe4rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},calendar:{sameDay:"[heute um] LT [Uhr]",sameElse:"L",nextDay:"[morgen um] LT [Uhr]",nextWeek:"dddd [um] LT [Uhr]",lastDay:"[gestern um] LT [Uhr]",lastWeek:"[letzten] dddd [um] LT [Uhr]"},relativeTime:{future:"in %s",past:"vor %s",s:"ein paar Sekunden",ss:"%d Sekunden",m:is,mm:"%d Minuten",h:is,hh:"%d Stunden",d:is,dd:is,w:is,ww:"%d Wochen",M:is,MM:is,y:is,yy:is},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});Y=["\u0796\u07ac\u0782\u07aa\u0787\u07a6\u0783\u07a9","\u078a\u07ac\u0784\u07b0\u0783\u07aa\u0787\u07a6\u0783\u07a9","\u0789\u07a7\u0783\u07a8\u0797\u07aa","\u0787\u07ad\u0795\u07b0\u0783\u07a9\u078d\u07aa","\u0789\u07ad","\u0796\u07ab\u0782\u07b0","\u0796\u07aa\u078d\u07a6\u0787\u07a8","\u0787\u07af\u078e\u07a6\u0790\u07b0\u0793\u07aa","\u0790\u07ac\u0795\u07b0\u0793\u07ac\u0789\u07b0\u0784\u07a6\u0783\u07aa","\u0787\u07ae\u0786\u07b0\u0793\u07af\u0784\u07a6\u0783\u07aa","\u0782\u07ae\u0788\u07ac\u0789\u07b0\u0784\u07a6\u0783\u07aa","\u0791\u07a8\u0790\u07ac\u0789\u07b0\u0784\u07a6\u0783\u07aa"],Ke=["\u0787\u07a7\u078b\u07a8\u0787\u07b0\u078c\u07a6","\u0780\u07af\u0789\u07a6","\u0787\u07a6\u0782\u07b0\u078e\u07a7\u0783\u07a6","\u0784\u07aa\u078b\u07a6","\u0784\u07aa\u0783\u07a7\u0790\u07b0\u078a\u07a6\u078c\u07a8","\u0780\u07aa\u0786\u07aa\u0783\u07aa","\u0780\u07ae\u0782\u07a8\u0780\u07a8\u0783\u07aa"];M.defineLocale("dv",{months:Y,monthsShort:Y,weekdays:Ke,weekdaysShort:Ke,weekdaysMin:"\u0787\u07a7\u078b\u07a8_\u0780\u07af\u0789\u07a6_\u0787\u07a6\u0782\u07b0_\u0784\u07aa\u078b\u07a6_\u0784\u07aa\u0783\u07a7_\u0780\u07aa\u0786\u07aa_\u0780\u07ae\u0782\u07a8".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"D/M/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/\u0789\u0786|\u0789\u078a/,isPM:function(e){return"\u0789\u078a"===e},meridiem:function(e,a,t){return e<12?"\u0789\u0786":"\u0789\u078a"},calendar:{sameDay:"[\u0789\u07a8\u0787\u07a6\u078b\u07aa] LT",nextDay:"[\u0789\u07a7\u078b\u07a6\u0789\u07a7] LT",nextWeek:"dddd LT",lastDay:"[\u0787\u07a8\u0787\u07b0\u0794\u07ac] LT",lastWeek:"[\u078a\u07a7\u0787\u07a8\u078c\u07aa\u0788\u07a8] dddd LT",sameElse:"L"},relativeTime:{future:"\u078c\u07ac\u0783\u07ad\u078e\u07a6\u0787\u07a8 %s",past:"\u0786\u07aa\u0783\u07a8\u0782\u07b0 %s",s:"\u0790\u07a8\u0786\u07aa\u0782\u07b0\u078c\u07aa\u0786\u07ae\u0785\u07ac\u0787\u07b0",ss:"d% \u0790\u07a8\u0786\u07aa\u0782\u07b0\u078c\u07aa",m:"\u0789\u07a8\u0782\u07a8\u0793\u07ac\u0787\u07b0",mm:"\u0789\u07a8\u0782\u07a8\u0793\u07aa %d",h:"\u078e\u07a6\u0791\u07a8\u0787\u07a8\u0783\u07ac\u0787\u07b0",hh:"\u078e\u07a6\u0791\u07a8\u0787\u07a8\u0783\u07aa %d",d:"\u078b\u07aa\u0788\u07a6\u0780\u07ac\u0787\u07b0",dd:"\u078b\u07aa\u0788\u07a6\u0790\u07b0 %d",M:"\u0789\u07a6\u0780\u07ac\u0787\u07b0",MM:"\u0789\u07a6\u0790\u07b0 %d",y:"\u0787\u07a6\u0780\u07a6\u0783\u07ac\u0787\u07b0",yy:"\u0787\u07a6\u0780\u07a6\u0783\u07aa %d"},preparse:function(e){return e.replace(/\u060c/g,",")},postformat:function(e){return e.replace(/,/g,"\u060c")},week:{dow:7,doy:12}}),M.defineLocale("el",{monthsNominativeEl:"\u0399\u03b1\u03bd\u03bf\u03c5\u03ac\u03c1\u03b9\u03bf\u03c2_\u03a6\u03b5\u03b2\u03c1\u03bf\u03c5\u03ac\u03c1\u03b9\u03bf\u03c2_\u039c\u03ac\u03c1\u03c4\u03b9\u03bf\u03c2_\u0391\u03c0\u03c1\u03af\u03bb\u03b9\u03bf\u03c2_\u039c\u03ac\u03b9\u03bf\u03c2_\u0399\u03bf\u03cd\u03bd\u03b9\u03bf\u03c2_\u0399\u03bf\u03cd\u03bb\u03b9\u03bf\u03c2_\u0391\u03cd\u03b3\u03bf\u03c5\u03c3\u03c4\u03bf\u03c2_\u03a3\u03b5\u03c0\u03c4\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2_\u039f\u03ba\u03c4\u03ce\u03b2\u03c1\u03b9\u03bf\u03c2_\u039d\u03bf\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2_\u0394\u03b5\u03ba\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2".split("_"),monthsGenitiveEl:"\u0399\u03b1\u03bd\u03bf\u03c5\u03b1\u03c1\u03af\u03bf\u03c5_\u03a6\u03b5\u03b2\u03c1\u03bf\u03c5\u03b1\u03c1\u03af\u03bf\u03c5_\u039c\u03b1\u03c1\u03c4\u03af\u03bf\u03c5_\u0391\u03c0\u03c1\u03b9\u03bb\u03af\u03bf\u03c5_\u039c\u03b1\u0390\u03bf\u03c5_\u0399\u03bf\u03c5\u03bd\u03af\u03bf\u03c5_\u0399\u03bf\u03c5\u03bb\u03af\u03bf\u03c5_\u0391\u03c5\u03b3\u03bf\u03cd\u03c3\u03c4\u03bf\u03c5_\u03a3\u03b5\u03c0\u03c4\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5_\u039f\u03ba\u03c4\u03c9\u03b2\u03c1\u03af\u03bf\u03c5_\u039d\u03bf\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5_\u0394\u03b5\u03ba\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5".split("_"),months:function(e,a){return e?("string"==typeof a&&/D/.test(a.substring(0,a.indexOf("MMMM")))?this._monthsGenitiveEl:this._monthsNominativeEl)[e.month()]:this._monthsNominativeEl},monthsShort:"\u0399\u03b1\u03bd_\u03a6\u03b5\u03b2_\u039c\u03b1\u03c1_\u0391\u03c0\u03c1_\u039c\u03b1\u03ca_\u0399\u03bf\u03c5\u03bd_\u0399\u03bf\u03c5\u03bb_\u0391\u03c5\u03b3_\u03a3\u03b5\u03c0_\u039f\u03ba\u03c4_\u039d\u03bf\u03b5_\u0394\u03b5\u03ba".split("_"),weekdays:"\u039a\u03c5\u03c1\u03b9\u03b1\u03ba\u03ae_\u0394\u03b5\u03c5\u03c4\u03ad\u03c1\u03b1_\u03a4\u03c1\u03af\u03c4\u03b7_\u03a4\u03b5\u03c4\u03ac\u03c1\u03c4\u03b7_\u03a0\u03ad\u03bc\u03c0\u03c4\u03b7_\u03a0\u03b1\u03c1\u03b1\u03c3\u03ba\u03b5\u03c5\u03ae_\u03a3\u03ac\u03b2\u03b2\u03b1\u03c4\u03bf".split("_"),weekdaysShort:"\u039a\u03c5\u03c1_\u0394\u03b5\u03c5_\u03a4\u03c1\u03b9_\u03a4\u03b5\u03c4_\u03a0\u03b5\u03bc_\u03a0\u03b1\u03c1_\u03a3\u03b1\u03b2".split("_"),weekdaysMin:"\u039a\u03c5_\u0394\u03b5_\u03a4\u03c1_\u03a4\u03b5_\u03a0\u03b5_\u03a0\u03b1_\u03a3\u03b1".split("_"),meridiem:function(e,a,t){return 11<e?t?"\u03bc\u03bc":"\u039c\u039c":t?"\u03c0\u03bc":"\u03a0\u039c"},isPM:function(e){return"\u03bc"===(e+"").toLowerCase()[0]},meridiemParse:/[\u03a0\u039c]\.?\u039c?\.?/i,longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendarEl:{sameDay:"[\u03a3\u03ae\u03bc\u03b5\u03c1\u03b1 {}] LT",nextDay:"[\u0391\u03cd\u03c1\u03b9\u03bf {}] LT",nextWeek:"dddd [{}] LT",lastDay:"[\u03a7\u03b8\u03b5\u03c2 {}] LT",lastWeek:function(){switch(this.day()){case 6:return"[\u03c4\u03bf \u03c0\u03c1\u03bf\u03b7\u03b3\u03bf\u03cd\u03bc\u03b5\u03bd\u03bf] dddd [{}] LT";default:return"[\u03c4\u03b7\u03bd \u03c0\u03c1\u03bf\u03b7\u03b3\u03bf\u03cd\u03bc\u03b5\u03bd\u03b7] dddd [{}] LT"}},sameElse:"L"},calendar:function(e,a){var t,e=this._calendarEl[e],s=a&&a.hours();return t=e,(e="undefined"!=typeof Function&&t instanceof Function||"[object Function]"===Object.prototype.toString.call(t)?e.apply(a):e).replace("{}",s%12==1?"\u03c3\u03c4\u03b7":"\u03c3\u03c4\u03b9\u03c2")},relativeTime:{future:"\u03c3\u03b5 %s",past:"%s \u03c0\u03c1\u03b9\u03bd",s:"\u03bb\u03af\u03b3\u03b1 \u03b4\u03b5\u03c5\u03c4\u03b5\u03c1\u03cc\u03bb\u03b5\u03c0\u03c4\u03b1",ss:"%d \u03b4\u03b5\u03c5\u03c4\u03b5\u03c1\u03cc\u03bb\u03b5\u03c0\u03c4\u03b1",m:"\u03ad\u03bd\u03b1 \u03bb\u03b5\u03c0\u03c4\u03cc",mm:"%d \u03bb\u03b5\u03c0\u03c4\u03ac",h:"\u03bc\u03af\u03b1 \u03ce\u03c1\u03b1",hh:"%d \u03ce\u03c1\u03b5\u03c2",d:"\u03bc\u03af\u03b1 \u03bc\u03ad\u03c1\u03b1",dd:"%d \u03bc\u03ad\u03c1\u03b5\u03c2",M:"\u03ad\u03bd\u03b1\u03c2 \u03bc\u03ae\u03bd\u03b1\u03c2",MM:"%d \u03bc\u03ae\u03bd\u03b5\u03c2",y:"\u03ad\u03bd\u03b1\u03c2 \u03c7\u03c1\u03cc\u03bd\u03bf\u03c2",yy:"%d \u03c7\u03c1\u03cc\u03bd\u03b9\u03b1"},dayOfMonthOrdinalParse:/\d{1,2}\u03b7/,ordinal:"%d\u03b7",week:{dow:1,doy:4}}),M.defineLocale("en-au",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var a=e%10;return e+(1==~~(e%100/10)?"th":1==a?"st":2==a?"nd":3==a?"rd":"th")},week:{dow:0,doy:4}}),M.defineLocale("en-ca",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"YYYY-MM-DD",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var a=e%10;return e+(1==~~(e%100/10)?"th":1==a?"st":2==a?"nd":3==a?"rd":"th")}}),M.defineLocale("en-gb",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var a=e%10;return e+(1==~~(e%100/10)?"th":1==a?"st":2==a?"nd":3==a?"rd":"th")},week:{dow:1,doy:4}}),M.defineLocale("en-ie",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var a=e%10;return e+(1==~~(e%100/10)?"th":1==a?"st":2==a?"nd":3==a?"rd":"th")},week:{dow:1,doy:4}}),M.defineLocale("en-il",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var a=e%10;return e+(1==~~(e%100/10)?"th":1==a?"st":2==a?"nd":3==a?"rd":"th")}}),M.defineLocale("en-in",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var a=e%10;return e+(1==~~(e%100/10)?"th":1==a?"st":2==a?"nd":3==a?"rd":"th")},week:{dow:0,doy:6}}),M.defineLocale("en-nz",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var a=e%10;return e+(1==~~(e%100/10)?"th":1==a?"st":2==a?"nd":3==a?"rd":"th")},week:{dow:1,doy:4}}),M.defineLocale("en-sg",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var a=e%10;return e+(1==~~(e%100/10)?"th":1==a?"st":2==a?"nd":3==a?"rd":"th")},week:{dow:1,doy:4}}),M.defineLocale("eo",{months:"januaro_februaro_marto_aprilo_majo_junio_julio_a\u016dgusto_septembro_oktobro_novembro_decembro".split("_"),monthsShort:"jan_feb_mart_apr_maj_jun_jul_a\u016dg_sept_okt_nov_dec".split("_"),weekdays:"diman\u0109o_lundo_mardo_merkredo_\u0135a\u016ddo_vendredo_sabato".split("_"),weekdaysShort:"dim_lun_mard_merk_\u0135a\u016d_ven_sab".split("_"),weekdaysMin:"di_lu_ma_me_\u0135a_ve_sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"[la] D[-an de] MMMM, YYYY",LLL:"[la] D[-an de] MMMM, YYYY HH:mm",LLLL:"dddd[n], [la] D[-an de] MMMM, YYYY HH:mm",llll:"ddd, [la] D[-an de] MMM, YYYY HH:mm"},meridiemParse:/[ap]\.t\.m/i,isPM:function(e){return"p"===e.charAt(0).toLowerCase()},meridiem:function(e,a,t){return 11<e?t?"p.t.m.":"P.T.M.":t?"a.t.m.":"A.T.M."},calendar:{sameDay:"[Hodia\u016d je] LT",nextDay:"[Morga\u016d je] LT",nextWeek:"dddd[n je] LT",lastDay:"[Hiera\u016d je] LT",lastWeek:"[pasintan] dddd[n je] LT",sameElse:"L"},relativeTime:{future:"post %s",past:"anta\u016d %s",s:"kelkaj sekundoj",ss:"%d sekundoj",m:"unu minuto",mm:"%d minutoj",h:"unu horo",hh:"%d horoj",d:"unu tago",dd:"%d tagoj",M:"unu monato",MM:"%d monatoj",y:"unu jaro",yy:"%d jaroj"},dayOfMonthOrdinalParse:/\d{1,2}a/,ordinal:"%da",week:{dow:1,doy:7}});var _s="ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),os="ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),r=[/^ene/i,/^feb/i,/^mar/i,/^abr/i,/^may/i,/^jun/i,/^jul/i,/^ago/i,/^sep/i,/^oct/i,/^nov/i,/^dic/i],Ht=/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,ms=(M.defineLocale("es-do",{months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),monthsShort:function(e,a){return e?(/-MMM-/.test(a)?os:_s)[e.month()]:_s},monthsRegex:Ht,monthsShortRegex:Ht,monthsStrictRegex:/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,monthsShortStrictRegex:/^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,monthsParse:r,longMonthsParse:r,shortMonthsParse:r,weekdays:"domingo_lunes_martes_mi\xe9rcoles_jueves_viernes_s\xe1bado".split("_"),weekdaysShort:"dom._lun._mar._mi\xe9._jue._vie._s\xe1b.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_s\xe1".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY h:mm A",LLLL:"dddd, D [de] MMMM [de] YYYY h:mm A"},calendar:{sameDay:function(){return"[hoy a la"+(1!==this.hours()?"s":"")+"] LT"},nextDay:function(){return"[ma\xf1ana a la"+(1!==this.hours()?"s":"")+"] LT"},nextWeek:function(){return"dddd [a la"+(1!==this.hours()?"s":"")+"] LT"},lastDay:function(){return"[ayer a la"+(1!==this.hours()?"s":"")+"] LT"},lastWeek:function(){return"[el] dddd [pasado a la"+(1!==this.hours()?"s":"")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",ss:"%d segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un d\xeda",dd:"%d d\xedas",w:"una semana",ww:"%d semanas",M:"un mes",MM:"%d meses",y:"un a\xf1o",yy:"%d a\xf1os"},dayOfMonthOrdinalParse:/\d{1,2}\xba/,ordinal:"%d\xba",week:{dow:1,doy:4}}),"ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_")),us="ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),vt=[/^ene/i,/^feb/i,/^mar/i,/^abr/i,/^may/i,/^jun/i,/^jul/i,/^ago/i,/^sep/i,/^oct/i,/^nov/i,/^dic/i],jt=/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,ls=(M.defineLocale("es-mx",{months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),monthsShort:function(e,a){return e?(/-MMM-/.test(a)?us:ms)[e.month()]:ms},monthsRegex:jt,monthsShortRegex:jt,monthsStrictRegex:/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,monthsShortStrictRegex:/^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,monthsParse:vt,longMonthsParse:vt,shortMonthsParse:vt,weekdays:"domingo_lunes_martes_mi\xe9rcoles_jueves_viernes_s\xe1bado".split("_"),weekdaysShort:"dom._lun._mar._mi\xe9._jue._vie._s\xe1b.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_s\xe1".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},calendar:{sameDay:function(){return"[hoy a la"+(1!==this.hours()?"s":"")+"] LT"},nextDay:function(){return"[ma\xf1ana a la"+(1!==this.hours()?"s":"")+"] LT"},nextWeek:function(){return"dddd [a la"+(1!==this.hours()?"s":"")+"] LT"},lastDay:function(){return"[ayer a la"+(1!==this.hours()?"s":"")+"] LT"},lastWeek:function(){return"[el] dddd [pasado a la"+(1!==this.hours()?"s":"")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",ss:"%d segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un d\xeda",dd:"%d d\xedas",w:"una semana",ww:"%d semanas",M:"un mes",MM:"%d meses",y:"un a\xf1o",yy:"%d a\xf1os"},dayOfMonthOrdinalParse:/\d{1,2}\xba/,ordinal:"%d\xba",week:{dow:0,doy:4},invalidDate:"Fecha inv\xe1lida"}),"ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_")),Ms="ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),x=[/^ene/i,/^feb/i,/^mar/i,/^abr/i,/^may/i,/^jun/i,/^jul/i,/^ago/i,/^sep/i,/^oct/i,/^nov/i,/^dic/i],na=/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,hs=(M.defineLocale("es-us",{months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),monthsShort:function(e,a){return e?(/-MMM-/.test(a)?Ms:ls)[e.month()]:ls},monthsRegex:na,monthsShortRegex:na,monthsStrictRegex:/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,monthsShortStrictRegex:/^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,monthsParse:x,longMonthsParse:x,shortMonthsParse:x,weekdays:"domingo_lunes_martes_mi\xe9rcoles_jueves_viernes_s\xe1bado".split("_"),weekdaysShort:"dom._lun._mar._mi\xe9._jue._vie._s\xe1b.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_s\xe1".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"MM/DD/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY h:mm A",LLLL:"dddd, D [de] MMMM [de] YYYY h:mm A"},calendar:{sameDay:function(){return"[hoy a la"+(1!==this.hours()?"s":"")+"] LT"},nextDay:function(){return"[ma\xf1ana a la"+(1!==this.hours()?"s":"")+"] LT"},nextWeek:function(){return"dddd [a la"+(1!==this.hours()?"s":"")+"] LT"},lastDay:function(){return"[ayer a la"+(1!==this.hours()?"s":"")+"] LT"},lastWeek:function(){return"[el] dddd [pasado a la"+(1!==this.hours()?"s":"")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",ss:"%d segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un d\xeda",dd:"%d d\xedas",w:"una semana",ww:"%d semanas",M:"un mes",MM:"%d meses",y:"un a\xf1o",yy:"%d a\xf1os"},dayOfMonthOrdinalParse:/\d{1,2}\xba/,ordinal:"%d\xba",week:{dow:0,doy:6}}),"ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_")),cs="ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),ge=[/^ene/i,/^feb/i,/^mar/i,/^abr/i,/^may/i,/^jun/i,/^jul/i,/^ago/i,/^sep/i,/^oct/i,/^nov/i,/^dic/i],n=/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;function Ls(e,a,t,s){e={s:["m\xf5ne sekundi","m\xf5ni sekund","paar sekundit"],ss:[e+"sekundi",e+"sekundit"],m:["\xfche minuti","\xfcks minut"],mm:[e+" minuti",e+" minutit"],h:["\xfche tunni","tund aega","\xfcks tund"],hh:[e+" tunni",e+" tundi"],d:["\xfche p\xe4eva","\xfcks p\xe4ev"],M:["kuu aja","kuu aega","\xfcks kuu"],MM:[e+" kuu",e+" kuud"],y:["\xfche aasta","aasta","\xfcks aasta"],yy:[e+" aasta",e+" aastat"]};return a?e[t][2]||e[t][1]:s?e[t][0]:e[t][1]}M.defineLocale("es",{months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),monthsShort:function(e,a){return e?(/-MMM-/.test(a)?cs:hs)[e.month()]:hs},monthsRegex:n,monthsShortRegex:n,monthsStrictRegex:/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,monthsShortStrictRegex:/^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,monthsParse:ge,longMonthsParse:ge,shortMonthsParse:ge,weekdays:"domingo_lunes_martes_mi\xe9rcoles_jueves_viernes_s\xe1bado".split("_"),weekdaysShort:"dom._lun._mar._mi\xe9._jue._vie._s\xe1b.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_s\xe1".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},calendar:{sameDay:function(){return"[hoy a la"+(1!==this.hours()?"s":"")+"] LT"},nextDay:function(){return"[ma\xf1ana a la"+(1!==this.hours()?"s":"")+"] LT"},nextWeek:function(){return"dddd [a la"+(1!==this.hours()?"s":"")+"] LT"},lastDay:function(){return"[ayer a la"+(1!==this.hours()?"s":"")+"] LT"},lastWeek:function(){return"[el] dddd [pasado a la"+(1!==this.hours()?"s":"")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",ss:"%d segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un d\xeda",dd:"%d d\xedas",w:"una semana",ww:"%d semanas",M:"un mes",MM:"%d meses",y:"un a\xf1o",yy:"%d a\xf1os"},dayOfMonthOrdinalParse:/\d{1,2}\xba/,ordinal:"%d\xba",week:{dow:1,doy:4},invalidDate:"Fecha inv\xe1lida"}),M.defineLocale("et",{months:"jaanuar_veebruar_m\xe4rts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),monthsShort:"jaan_veebr_m\xe4rts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),weekdays:"p\xfchap\xe4ev_esmasp\xe4ev_teisip\xe4ev_kolmap\xe4ev_neljap\xe4ev_reede_laup\xe4ev".split("_"),weekdaysShort:"P_E_T_K_N_R_L".split("_"),weekdaysMin:"P_E_T_K_N_R_L".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[T\xe4na,] LT",nextDay:"[Homme,] LT",nextWeek:"[J\xe4rgmine] dddd LT",lastDay:"[Eile,] LT",lastWeek:"[Eelmine] dddd LT",sameElse:"L"},relativeTime:{future:"%s p\xe4rast",past:"%s tagasi",s:Ls,ss:Ls,m:Ls,mm:Ls,h:Ls,hh:Ls,d:Ls,dd:"%d p\xe4eva",M:Ls,MM:Ls,y:Ls,yy:Ls},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),M.defineLocale("eu",{months:"urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),monthsShort:"urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),monthsParseExact:!0,weekdays:"igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),weekdaysShort:"ig._al._ar._az._og._ol._lr.".split("_"),weekdaysMin:"ig_al_ar_az_og_ol_lr".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY[ko] MMMM[ren] D[a]",LLL:"YYYY[ko] MMMM[ren] D[a] HH:mm",LLLL:"dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",l:"YYYY-M-D",ll:"YYYY[ko] MMM D[a]",lll:"YYYY[ko] MMM D[a] HH:mm",llll:"ddd, YYYY[ko] MMM D[a] HH:mm"},calendar:{sameDay:"[gaur] LT[etan]",nextDay:"[bihar] LT[etan]",nextWeek:"dddd LT[etan]",lastDay:"[atzo] LT[etan]",lastWeek:"[aurreko] dddd LT[etan]",sameElse:"L"},relativeTime:{future:"%s barru",past:"duela %s",s:"segundo batzuk",ss:"%d segundo",m:"minutu bat",mm:"%d minutu",h:"ordu bat",hh:"%d ordu",d:"egun bat",dd:"%d egun",M:"hilabete bat",MM:"%d hilabete",y:"urte bat",yy:"%d urte"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}});var Ys={1:"\u06f1",2:"\u06f2",3:"\u06f3",4:"\u06f4",5:"\u06f5",6:"\u06f6",7:"\u06f7",8:"\u06f8",9:"\u06f9",0:"\u06f0"},ys={"\u06f1":"1","\u06f2":"2","\u06f3":"3","\u06f4":"4","\u06f5":"5","\u06f6":"6","\u06f7":"7","\u06f8":"8","\u06f9":"9","\u06f0":"0"},fs=(M.defineLocale("fa",{months:"\u0698\u0627\u0646\u0648\u06cc\u0647_\u0641\u0648\u0631\u06cc\u0647_\u0645\u0627\u0631\u0633_\u0622\u0648\u0631\u06cc\u0644_\u0645\u0647_\u0698\u0648\u0626\u0646_\u0698\u0648\u0626\u06cc\u0647_\u0627\u0648\u062a_\u0633\u067e\u062a\u0627\u0645\u0628\u0631_\u0627\u06a9\u062a\u0628\u0631_\u0646\u0648\u0627\u0645\u0628\u0631_\u062f\u0633\u0627\u0645\u0628\u0631".split("_"),monthsShort:"\u0698\u0627\u0646\u0648\u06cc\u0647_\u0641\u0648\u0631\u06cc\u0647_\u0645\u0627\u0631\u0633_\u0622\u0648\u0631\u06cc\u0644_\u0645\u0647_\u0698\u0648\u0626\u0646_\u0698\u0648\u0626\u06cc\u0647_\u0627\u0648\u062a_\u0633\u067e\u062a\u0627\u0645\u0628\u0631_\u0627\u06a9\u062a\u0628\u0631_\u0646\u0648\u0627\u0645\u0628\u0631_\u062f\u0633\u0627\u0645\u0628\u0631".split("_"),weekdays:"\u06cc\u06a9\u200c\u0634\u0646\u0628\u0647_\u062f\u0648\u0634\u0646\u0628\u0647_\u0633\u0647\u200c\u0634\u0646\u0628\u0647_\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647_\u067e\u0646\u062c\u200c\u0634\u0646\u0628\u0647_\u062c\u0645\u0639\u0647_\u0634\u0646\u0628\u0647".split("_"),weekdaysShort:"\u06cc\u06a9\u200c\u0634\u0646\u0628\u0647_\u062f\u0648\u0634\u0646\u0628\u0647_\u0633\u0647\u200c\u0634\u0646\u0628\u0647_\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647_\u067e\u0646\u062c\u200c\u0634\u0646\u0628\u0647_\u062c\u0645\u0639\u0647_\u0634\u0646\u0628\u0647".split("_"),weekdaysMin:"\u06cc_\u062f_\u0633_\u0686_\u067e_\u062c_\u0634".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},meridiemParse:/\u0642\u0628\u0644 \u0627\u0632 \u0638\u0647\u0631|\u0628\u0639\u062f \u0627\u0632 \u0638\u0647\u0631/,isPM:function(e){return/\u0628\u0639\u062f \u0627\u0632 \u0638\u0647\u0631/.test(e)},meridiem:function(e,a,t){return e<12?"\u0642\u0628\u0644 \u0627\u0632 \u0638\u0647\u0631":"\u0628\u0639\u062f \u0627\u0632 \u0638\u0647\u0631"},calendar:{sameDay:"[\u0627\u0645\u0631\u0648\u0632 \u0633\u0627\u0639\u062a] LT",nextDay:"[\u0641\u0631\u062f\u0627 \u0633\u0627\u0639\u062a] LT",nextWeek:"dddd [\u0633\u0627\u0639\u062a] LT",lastDay:"[\u062f\u06cc\u0631\u0648\u0632 \u0633\u0627\u0639\u062a] LT",lastWeek:"dddd [\u067e\u06cc\u0634] [\u0633\u0627\u0639\u062a] LT",sameElse:"L"},relativeTime:{future:"\u062f\u0631 %s",past:"%s \u067e\u06cc\u0634",s:"\u0686\u0646\u062f \u062b\u0627\u0646\u06cc\u0647",ss:"%d \u062b\u0627\u0646\u06cc\u0647",m:"\u06cc\u06a9 \u062f\u0642\u06cc\u0642\u0647",mm:"%d \u062f\u0642\u06cc\u0642\u0647",h:"\u06cc\u06a9 \u0633\u0627\u0639\u062a",hh:"%d \u0633\u0627\u0639\u062a",d:"\u06cc\u06a9 \u0631\u0648\u0632",dd:"%d \u0631\u0648\u0632",M:"\u06cc\u06a9 \u0645\u0627\u0647",MM:"%d \u0645\u0627\u0647",y:"\u06cc\u06a9 \u0633\u0627\u0644",yy:"%d \u0633\u0627\u0644"},preparse:function(e){return e.replace(/[\u06f0-\u06f9]/g,function(e){return ys[e]}).replace(/\u060c/g,",")},postformat:function(e){return e.replace(/\d/g,function(e){return Ys[e]}).replace(/,/g,"\u060c")},dayOfMonthOrdinalParse:/\d{1,2}\u0645/,ordinal:"%d\u0645",week:{dow:6,doy:12}}),"nolla yksi kaksi kolme nelj\xe4 viisi kuusi seitsem\xe4n kahdeksan yhdeks\xe4n".split(" ")),ps=["nolla","yhden","kahden","kolmen","nelj\xe4n","viiden","kuuden",fs[7],fs[8],fs[9]];function O(e,a,t,s){var n="";switch(t){case"s":return s?"muutaman sekunnin":"muutama sekunti";case"ss":n=s?"sekunnin":"sekuntia";break;case"m":return s?"minuutin":"minuutti";case"mm":n=s?"minuutin":"minuuttia";break;case"h":return s?"tunnin":"tunti";case"hh":n=s?"tunnin":"tuntia";break;case"d":return s?"p\xe4iv\xe4n":"p\xe4iv\xe4";case"dd":n=s?"p\xe4iv\xe4n":"p\xe4iv\xe4\xe4";break;case"M":return s?"kuukauden":"kuukausi";case"MM":n=s?"kuukauden":"kuukautta";break;case"y":return s?"vuoden":"vuosi";case"yy":n=s?"vuoden":"vuotta";break}return t=s,n=((e=e)<10?(t?ps:fs)[e]:e)+" "+n}M.defineLocale("fi",{months:"tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kes\xe4kuu_hein\xe4kuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),monthsShort:"tammi_helmi_maalis_huhti_touko_kes\xe4_hein\xe4_elo_syys_loka_marras_joulu".split("_"),weekdays:"sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),weekdaysShort:"su_ma_ti_ke_to_pe_la".split("_"),weekdaysMin:"su_ma_ti_ke_to_pe_la".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD.MM.YYYY",LL:"Do MMMM[ta] YYYY",LLL:"Do MMMM[ta] YYYY, [klo] HH.mm",LLLL:"dddd, Do MMMM[ta] YYYY, [klo] HH.mm",l:"D.M.YYYY",ll:"Do MMM YYYY",lll:"Do MMM YYYY, [klo] HH.mm",llll:"ddd, Do MMM YYYY, [klo] HH.mm"},calendar:{sameDay:"[t\xe4n\xe4\xe4n] [klo] LT",nextDay:"[huomenna] [klo] LT",nextWeek:"dddd [klo] LT",lastDay:"[eilen] [klo] LT",lastWeek:"[viime] dddd[na] [klo] LT",sameElse:"L"},relativeTime:{future:"%s p\xe4\xe4st\xe4",past:"%s sitten",s:O,ss:O,m:O,mm:O,h:O,hh:O,d:O,dd:O,M:O,MM:O,y:O,yy:O},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),M.defineLocale("fil",{months:"Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),monthsShort:"Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),weekdays:"Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),weekdaysShort:"Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),weekdaysMin:"Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"MM/D/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY HH:mm",LLLL:"dddd, MMMM DD, YYYY HH:mm"},calendar:{sameDay:"LT [ngayong araw]",nextDay:"[Bukas ng] LT",nextWeek:"LT [sa susunod na] dddd",lastDay:"LT [kahapon]",lastWeek:"LT [noong nakaraang] dddd",sameElse:"L"},relativeTime:{future:"sa loob ng %s",past:"%s ang nakalipas",s:"ilang segundo",ss:"%d segundo",m:"isang minuto",mm:"%d minuto",h:"isang oras",hh:"%d oras",d:"isang araw",dd:"%d araw",M:"isang buwan",MM:"%d buwan",y:"isang taon",yy:"%d taon"},dayOfMonthOrdinalParse:/\d{1,2}/,ordinal:function(e){return e},week:{dow:1,doy:4}}),M.defineLocale("fo",{months:"januar_februar_mars_apr\xedl_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),weekdays:"sunnudagur_m\xe1nadagur_t\xfdsdagur_mikudagur_h\xf3sdagur_fr\xedggjadagur_leygardagur".split("_"),weekdaysShort:"sun_m\xe1n_t\xfds_mik_h\xf3s_fr\xed_ley".split("_"),weekdaysMin:"su_m\xe1_t\xfd_mi_h\xf3_fr_le".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D. MMMM, YYYY HH:mm"},calendar:{sameDay:"[\xcd dag kl.] LT",nextDay:"[\xcd morgin kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[\xcd gj\xe1r kl.] LT",lastWeek:"[s\xed\xf0stu] dddd [kl] LT",sameElse:"L"},relativeTime:{future:"um %s",past:"%s s\xed\xf0ani",s:"f\xe1 sekund",ss:"%d sekundir",m:"ein minuttur",mm:"%d minuttir",h:"ein t\xedmi",hh:"%d t\xedmar",d:"ein dagur",dd:"%d dagar",M:"ein m\xe1na\xf0ur",MM:"%d m\xe1na\xf0ir",y:"eitt \xe1r",yy:"%d \xe1r"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),M.defineLocale("fr-ca",{months:"janvier_f\xe9vrier_mars_avril_mai_juin_juillet_ao\xfbt_septembre_octobre_novembre_d\xe9cembre".split("_"),monthsShort:"janv._f\xe9vr._mars_avr._mai_juin_juil._ao\xfbt_sept._oct._nov._d\xe9c.".split("_"),monthsParseExact:!0,weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"di_lu_ma_me_je_ve_sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Aujourd\u2019hui \xe0] LT",nextDay:"[Demain \xe0] LT",nextWeek:"dddd [\xe0] LT",lastDay:"[Hier \xe0] LT",lastWeek:"dddd [dernier \xe0] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",ss:"%d secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},dayOfMonthOrdinalParse:/\d{1,2}(er|e)/,ordinal:function(e,a){switch(a){default:case"M":case"Q":case"D":case"DDD":case"d":return e+(1===e?"er":"e");case"w":case"W":return e+(1===e?"re":"e")}}}),M.defineLocale("fr-ch",{months:"janvier_f\xe9vrier_mars_avril_mai_juin_juillet_ao\xfbt_septembre_octobre_novembre_d\xe9cembre".split("_"),monthsShort:"janv._f\xe9vr._mars_avr._mai_juin_juil._ao\xfbt_sept._oct._nov._d\xe9c.".split("_"),monthsParseExact:!0,weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"di_lu_ma_me_je_ve_sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Aujourd\u2019hui \xe0] LT",nextDay:"[Demain \xe0] LT",nextWeek:"dddd [\xe0] LT",lastDay:"[Hier \xe0] LT",lastWeek:"dddd [dernier \xe0] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",ss:"%d secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},dayOfMonthOrdinalParse:/\d{1,2}(er|e)/,ordinal:function(e,a){switch(a){default:case"M":case"Q":case"D":case"DDD":case"d":return e+(1===e?"er":"e");case"w":case"W":return e+(1===e?"re":"e")}},week:{dow:1,doy:4}});var De=/(janv\.?|f\xe9vr\.?|mars|avr\.?|mai|juin|juil\.?|ao\xfbt|sept\.?|oct\.?|nov\.?|d\xe9c\.?|janvier|f\xe9vrier|mars|avril|mai|juin|juillet|ao\xfbt|septembre|octobre|novembre|d\xe9cembre)/i,pe=[/^janv/i,/^f\xe9vr/i,/^mars/i,/^avr/i,/^mai/i,/^juin/i,/^juil/i,/^ao\xfbt/i,/^sept/i,/^oct/i,/^nov/i,/^d\xe9c/i],ks=(M.defineLocale("fr",{months:"janvier_f\xe9vrier_mars_avril_mai_juin_juillet_ao\xfbt_septembre_octobre_novembre_d\xe9cembre".split("_"),monthsShort:"janv._f\xe9vr._mars_avr._mai_juin_juil._ao\xfbt_sept._oct._nov._d\xe9c.".split("_"),monthsRegex:De,monthsShortRegex:De,monthsStrictRegex:/^(janvier|f\xe9vrier|mars|avril|mai|juin|juillet|ao\xfbt|septembre|octobre|novembre|d\xe9cembre)/i,monthsShortStrictRegex:/(janv\.?|f\xe9vr\.?|mars|avr\.?|mai|juin|juil\.?|ao\xfbt|sept\.?|oct\.?|nov\.?|d\xe9c\.?)/i,monthsParse:pe,longMonthsParse:pe,shortMonthsParse:pe,weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"di_lu_ma_me_je_ve_sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Aujourd\u2019hui \xe0] LT",nextDay:"[Demain \xe0] LT",nextWeek:"dddd [\xe0] LT",lastDay:"[Hier \xe0] LT",lastWeek:"dddd [dernier \xe0] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",ss:"%d secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",w:"une semaine",ww:"%d semaines",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},dayOfMonthOrdinalParse:/\d{1,2}(er|)/,ordinal:function(e,a){switch(a){case"D":return e+(1===e?"er":"");default:case"M":case"Q":case"DDD":case"d":return e+(1===e?"er":"e");case"w":case"W":return e+(1===e?"re":"e")}},week:{dow:1,doy:4}}),"jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_")),Ds="jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");M.defineLocale("fy",{months:"jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),monthsShort:function(e,a){return e?(/-MMM-/.test(a)?Ds:ks)[e.month()]:ks},monthsParseExact:!0,weekdays:"snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),weekdaysShort:"si._mo._ti._wo._to._fr._so.".split("_"),weekdaysMin:"Si_Mo_Ti_Wo_To_Fr_So".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[hjoed om] LT",nextDay:"[moarn om] LT",nextWeek:"dddd [om] LT",lastDay:"[juster om] LT",lastWeek:"[\xf4fr\xfbne] dddd [om] LT",sameElse:"L"},relativeTime:{future:"oer %s",past:"%s lyn",s:"in pear sekonden",ss:"%d sekonden",m:"ien min\xfat",mm:"%d minuten",h:"ien oere",hh:"%d oeren",d:"ien dei",dd:"%d dagen",M:"ien moanne",MM:"%d moannen",y:"ien jier",yy:"%d jierren"},dayOfMonthOrdinalParse:/\d{1,2}(ste|de)/,ordinal:function(e){return e+(1===e||8===e||20<=e?"ste":"de")},week:{dow:1,doy:4}}),M.defineLocale("ga",{months:["Ean\xe1ir","Feabhra","M\xe1rta","Aibre\xe1n","Bealtaine","Meitheamh","I\xfail","L\xfanasa","Me\xe1n F\xf3mhair","Deireadh F\xf3mhair","Samhain","Nollaig"],monthsShort:["Ean","Feabh","M\xe1rt","Aib","Beal","Meith","I\xfail","L\xfan","M.F.","D.F.","Samh","Noll"],monthsParseExact:!0,weekdays:["D\xe9 Domhnaigh","D\xe9 Luain","D\xe9 M\xe1irt","D\xe9 C\xe9adaoin","D\xe9ardaoin","D\xe9 hAoine","D\xe9 Sathairn"],weekdaysShort:["Domh","Luan","M\xe1irt","C\xe9ad","D\xe9ar","Aoine","Sath"],weekdaysMin:["Do","Lu","M\xe1","C\xe9","D\xe9","A","Sa"],longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Inniu ag] LT",nextDay:"[Am\xe1rach ag] LT",nextWeek:"dddd [ag] LT",lastDay:"[Inn\xe9 ag] LT",lastWeek:"dddd [seo caite] [ag] LT",sameElse:"L"},relativeTime:{future:"i %s",past:"%s \xf3 shin",s:"c\xfapla soicind",ss:"%d soicind",m:"n\xf3im\xe9ad",mm:"%d n\xf3im\xe9ad",h:"uair an chloig",hh:"%d uair an chloig",d:"l\xe1",dd:"%d l\xe1",M:"m\xed",MM:"%d m\xedonna",y:"bliain",yy:"%d bliain"},dayOfMonthOrdinalParse:/\d{1,2}(d|na|mh)/,ordinal:function(e){return e+(1===e?"d":e%10==2?"na":"mh")},week:{dow:1,doy:4}});function Ts(e,a,t,s){e={s:["\u0925\u094b\u0921\u092f\u093e \u0938\u0945\u0915\u0902\u0921\u093e\u0902\u0928\u0940","\u0925\u094b\u0921\u0947 \u0938\u0945\u0915\u0902\u0921"],ss:[e+" \u0938\u0945\u0915\u0902\u0921\u093e\u0902\u0928\u0940",e+" \u0938\u0945\u0915\u0902\u0921"],m:["\u090f\u0915\u093e \u092e\u093f\u0923\u091f\u093e\u0928","\u090f\u0915 \u092e\u093f\u0928\u0942\u091f"],mm:[e+" \u092e\u093f\u0923\u091f\u093e\u0902\u0928\u0940",e+" \u092e\u093f\u0923\u091f\u093e\u0902"],h:["\u090f\u0915\u093e \u0935\u0930\u093e\u0928","\u090f\u0915 \u0935\u0930"],hh:[e+" \u0935\u0930\u093e\u0902\u0928\u0940",e+" \u0935\u0930\u093e\u0902"],d:["\u090f\u0915\u093e \u0926\u093f\u0938\u093e\u0928","\u090f\u0915 \u0926\u0940\u0938"],dd:[e+" \u0926\u093f\u0938\u093e\u0902\u0928\u0940",e+" \u0926\u0940\u0938"],M:["\u090f\u0915\u093e \u092e\u094d\u0939\u092f\u0928\u094d\u092f\u093e\u0928","\u090f\u0915 \u092e\u094d\u0939\u092f\u0928\u094b"],MM:[e+" \u092e\u094d\u0939\u092f\u0928\u094d\u092f\u093e\u0928\u0940",e+" \u092e\u094d\u0939\u092f\u0928\u0947"],y:["\u090f\u0915\u093e \u0935\u0930\u094d\u0938\u093e\u0928","\u090f\u0915 \u0935\u0930\u094d\u0938"],yy:[e+" \u0935\u0930\u094d\u0938\u093e\u0902\u0928\u0940",e+" \u0935\u0930\u094d\u0938\u093e\u0902"]};return s?e[t][0]:e[t][1]}function gs(e,a,t,s){e={s:["thoddea sekondamni","thodde sekond"],ss:[e+" sekondamni",e+" sekond"],m:["eka mintan","ek minut"],mm:[e+" mintamni",e+" mintam"],h:["eka voran","ek vor"],hh:[e+" voramni",e+" voram"],d:["eka disan","ek dis"],dd:[e+" disamni",e+" dis"],M:["eka mhoinean","ek mhoino"],MM:[e+" mhoineamni",e+" mhoine"],y:["eka vorsan","ek voros"],yy:[e+" vorsamni",e+" vorsam"]};return s?e[t][0]:e[t][1]}M.defineLocale("gd",{months:["Am Faoilleach","An Gearran","Am M\xe0rt","An Giblean","An C\xe8itean","An t-\xd2gmhios","An t-Iuchar","An L\xf9nastal","An t-Sultain","An D\xe0mhair","An t-Samhain","An D\xf9bhlachd"],monthsShort:["Faoi","Gear","M\xe0rt","Gibl","C\xe8it","\xd2gmh","Iuch","L\xf9n","Sult","D\xe0mh","Samh","D\xf9bh"],monthsParseExact:!0,weekdays:["Did\xf2mhnaich","Diluain","Dim\xe0irt","Diciadain","Diardaoin","Dihaoine","Disathairne"],weekdaysShort:["Did","Dil","Dim","Dic","Dia","Dih","Dis"],weekdaysMin:["D\xf2","Lu","M\xe0","Ci","Ar","Ha","Sa"],longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[An-diugh aig] LT",nextDay:"[A-m\xe0ireach aig] LT",nextWeek:"dddd [aig] LT",lastDay:"[An-d\xe8 aig] LT",lastWeek:"dddd [seo chaidh] [aig] LT",sameElse:"L"},relativeTime:{future:"ann an %s",past:"bho chionn %s",s:"beagan diogan",ss:"%d diogan",m:"mionaid",mm:"%d mionaidean",h:"uair",hh:"%d uairean",d:"latha",dd:"%d latha",M:"m\xecos",MM:"%d m\xecosan",y:"bliadhna",yy:"%d bliadhna"},dayOfMonthOrdinalParse:/\d{1,2}(d|na|mh)/,ordinal:function(e){return e+(1===e?"d":e%10==2?"na":"mh")},week:{dow:1,doy:4}}),M.defineLocale("gl",{months:"xaneiro_febreiro_marzo_abril_maio_xu\xf1o_xullo_agosto_setembro_outubro_novembro_decembro".split("_"),monthsShort:"xan._feb._mar._abr._mai._xu\xf1._xul._ago._set._out._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"domingo_luns_martes_m\xe9rcores_xoves_venres_s\xe1bado".split("_"),weekdaysShort:"dom._lun._mar._m\xe9r._xov._ven._s\xe1b.".split("_"),weekdaysMin:"do_lu_ma_m\xe9_xo_ve_s\xe1".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},calendar:{sameDay:function(){return"[hoxe "+(1!==this.hours()?"\xe1s":"\xe1")+"] LT"},nextDay:function(){return"[ma\xf1\xe1 "+(1!==this.hours()?"\xe1s":"\xe1")+"] LT"},nextWeek:function(){return"dddd ["+(1!==this.hours()?"\xe1s":"a")+"] LT"},lastDay:function(){return"[onte "+(1!==this.hours()?"\xe1":"a")+"] LT"},lastWeek:function(){return"[o] dddd [pasado "+(1!==this.hours()?"\xe1s":"a")+"] LT"},sameElse:"L"},relativeTime:{future:function(e){return 0===e.indexOf("un")?"n"+e:"en "+e},past:"hai %s",s:"uns segundos",ss:"%d segundos",m:"un minuto",mm:"%d minutos",h:"unha hora",hh:"%d horas",d:"un d\xeda",dd:"%d d\xedas",M:"un mes",MM:"%d meses",y:"un ano",yy:"%d anos"},dayOfMonthOrdinalParse:/\d{1,2}\xba/,ordinal:"%d\xba",week:{dow:1,doy:4}}),M.defineLocale("gom-deva",{months:{standalone:"\u091c\u093e\u0928\u0947\u0935\u093e\u0930\u0940_\u092b\u0947\u092c\u094d\u0930\u0941\u0935\u093e\u0930\u0940_\u092e\u093e\u0930\u094d\u091a_\u090f\u092a\u094d\u0930\u0940\u0932_\u092e\u0947_\u091c\u0942\u0928_\u091c\u0941\u0932\u092f_\u0911\u0917\u0938\u094d\u091f_\u0938\u092a\u094d\u091f\u0947\u0902\u092c\u0930_\u0911\u0915\u094d\u091f\u094b\u092c\u0930_\u0928\u094b\u0935\u094d\u0939\u0947\u0902\u092c\u0930_\u0921\u093f\u0938\u0947\u0902\u092c\u0930".split("_"),format:"\u091c\u093e\u0928\u0947\u0935\u093e\u0930\u0940\u091a\u094d\u092f\u093e_\u092b\u0947\u092c\u094d\u0930\u0941\u0935\u093e\u0930\u0940\u091a\u094d\u092f\u093e_\u092e\u093e\u0930\u094d\u091a\u093e\u091a\u094d\u092f\u093e_\u090f\u092a\u094d\u0930\u0940\u0932\u093e\u091a\u094d\u092f\u093e_\u092e\u0947\u092f\u093e\u091a\u094d\u092f\u093e_\u091c\u0942\u0928\u093e\u091a\u094d\u092f\u093e_\u091c\u0941\u0932\u092f\u093e\u091a\u094d\u092f\u093e_\u0911\u0917\u0938\u094d\u091f\u093e\u091a\u094d\u092f\u093e_\u0938\u092a\u094d\u091f\u0947\u0902\u092c\u0930\u093e\u091a\u094d\u092f\u093e_\u0911\u0915\u094d\u091f\u094b\u092c\u0930\u093e\u091a\u094d\u092f\u093e_\u0928\u094b\u0935\u094d\u0939\u0947\u0902\u092c\u0930\u093e\u091a\u094d\u092f\u093e_\u0921\u093f\u0938\u0947\u0902\u092c\u0930\u093e\u091a\u094d\u092f\u093e".split("_"),isFormat:/MMMM(\s)+D[oD]?/},monthsShort:"\u091c\u093e\u0928\u0947._\u092b\u0947\u092c\u094d\u0930\u0941._\u092e\u093e\u0930\u094d\u091a_\u090f\u092a\u094d\u0930\u0940._\u092e\u0947_\u091c\u0942\u0928_\u091c\u0941\u0932._\u0911\u0917._\u0938\u092a\u094d\u091f\u0947\u0902._\u0911\u0915\u094d\u091f\u094b._\u0928\u094b\u0935\u094d\u0939\u0947\u0902._\u0921\u093f\u0938\u0947\u0902.".split("_"),monthsParseExact:!0,weekdays:"\u0906\u092f\u0924\u093e\u0930_\u0938\u094b\u092e\u093e\u0930_\u092e\u0902\u0917\u0933\u093e\u0930_\u092c\u0941\u0927\u0935\u093e\u0930_\u092c\u093f\u0930\u0947\u0938\u094d\u0924\u093e\u0930_\u0938\u0941\u0915\u094d\u0930\u093e\u0930_\u0936\u0947\u0928\u0935\u093e\u0930".split("_"),weekdaysShort:"\u0906\u092f\u0924._\u0938\u094b\u092e._\u092e\u0902\u0917\u0933._\u092c\u0941\u0927._\u092c\u094d\u0930\u0947\u0938\u094d\u0924._\u0938\u0941\u0915\u094d\u0930._\u0936\u0947\u0928.".split("_"),weekdaysMin:"\u0906_\u0938\u094b_\u092e\u0902_\u092c\u0941_\u092c\u094d\u0930\u0947_\u0938\u0941_\u0936\u0947".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"A h:mm [\u0935\u093e\u091c\u0924\u093e\u0902]",LTS:"A h:mm:ss [\u0935\u093e\u091c\u0924\u093e\u0902]",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY A h:mm [\u0935\u093e\u091c\u0924\u093e\u0902]",LLLL:"dddd, MMMM Do, YYYY, A h:mm [\u0935\u093e\u091c\u0924\u093e\u0902]",llll:"ddd, D MMM YYYY, A h:mm [\u0935\u093e\u091c\u0924\u093e\u0902]"},calendar:{sameDay:"[\u0906\u092f\u091c] LT",nextDay:"[\u092b\u093e\u0932\u094d\u092f\u093e\u0902] LT",nextWeek:"[\u092b\u0941\u0921\u0932\u094b] dddd[,] LT",lastDay:"[\u0915\u093e\u0932] LT",lastWeek:"[\u092b\u093e\u091f\u0932\u094b] dddd[,] LT",sameElse:"L"},relativeTime:{future:"%s",past:"%s \u0906\u0926\u0940\u0902",s:Ts,ss:Ts,m:Ts,mm:Ts,h:Ts,hh:Ts,d:Ts,dd:Ts,M:Ts,MM:Ts,y:Ts,yy:Ts},dayOfMonthOrdinalParse:/\d{1,2}(\u0935\u0947\u0930)/,ordinal:function(e,a){switch(a){case"D":return e+"\u0935\u0947\u0930";default:case"M":case"Q":case"DDD":case"d":case"w":case"W":return e}},week:{dow:0,doy:3},meridiemParse:/\u0930\u093e\u0924\u0940|\u0938\u0915\u093e\u0933\u0940\u0902|\u0926\u0928\u092a\u093e\u0930\u093e\u0902|\u0938\u093e\u0902\u091c\u0947/,meridiemHour:function(e,a){return 12===e&&(e=0),"\u0930\u093e\u0924\u0940"===a?e<4?e:e+12:"\u0938\u0915\u093e\u0933\u0940\u0902"===a?e:"\u0926\u0928\u092a\u093e\u0930\u093e\u0902"===a?12<e?e:e+12:"\u0938\u093e\u0902\u091c\u0947"===a?e+12:void 0},meridiem:function(e,a,t){return e<4?"\u0930\u093e\u0924\u0940":e<12?"\u0938\u0915\u093e\u0933\u0940\u0902":e<16?"\u0926\u0928\u092a\u093e\u0930\u093e\u0902":e<20?"\u0938\u093e\u0902\u091c\u0947":"\u0930\u093e\u0924\u0940"}}),M.defineLocale("gom-latn",{months:{standalone:"Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"),format:"Janerachea_Febrerachea_Marsachea_Abrilachea_Maiachea_Junachea_Julaiachea_Agostachea_Setembrachea_Otubrachea_Novembrachea_Dezembrachea".split("_"),isFormat:/MMMM(\s)+D[oD]?/},monthsShort:"Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Aitar_Somar_Mongllar_Budhvar_Birestar_Sukrar_Son'var".split("_"),weekdaysShort:"Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),weekdaysMin:"Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"A h:mm [vazta]",LTS:"A h:mm:ss [vazta]",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY A h:mm [vazta]",LLLL:"dddd, MMMM Do, YYYY, A h:mm [vazta]",llll:"ddd, D MMM YYYY, A h:mm [vazta]"},calendar:{sameDay:"[Aiz] LT",nextDay:"[Faleam] LT",nextWeek:"[Fuddlo] dddd[,] LT",lastDay:"[Kal] LT",lastWeek:"[Fattlo] dddd[,] LT",sameElse:"L"},relativeTime:{future:"%s",past:"%s adim",s:gs,ss:gs,m:gs,mm:gs,h:gs,hh:gs,d:gs,dd:gs,M:gs,MM:gs,y:gs,yy:gs},dayOfMonthOrdinalParse:/\d{1,2}(er)/,ordinal:function(e,a){switch(a){case"D":return e+"er";default:case"M":case"Q":case"DDD":case"d":case"w":case"W":return e}},week:{dow:0,doy:3},meridiemParse:/rati|sokallim|donparam|sanje/,meridiemHour:function(e,a){return 12===e&&(e=0),"rati"===a?e<4?e:e+12:"sokallim"===a?e:"donparam"===a?12<e?e:e+12:"sanje"===a?e+12:void 0},meridiem:function(e,a,t){return e<4?"rati":e<12?"sokallim":e<16?"donparam":e<20?"sanje":"rati"}});var ws={1:"\u0ae7",2:"\u0ae8",3:"\u0ae9",4:"\u0aea",5:"\u0aeb",6:"\u0aec",7:"\u0aed",8:"\u0aee",9:"\u0aef",0:"\u0ae6"},bs={"\u0ae7":"1","\u0ae8":"2","\u0ae9":"3","\u0aea":"4","\u0aeb":"5","\u0aec":"6","\u0aed":"7","\u0aee":"8","\u0aef":"9","\u0ae6":"0"},Ss=(M.defineLocale("gu",{months:"\u0a9c\u0abe\u0aa8\u0acd\u0aaf\u0ac1\u0a86\u0ab0\u0ac0_\u0aab\u0ac7\u0aac\u0acd\u0ab0\u0ac1\u0a86\u0ab0\u0ac0_\u0aae\u0abe\u0ab0\u0acd\u0a9a_\u0a8f\u0aaa\u0acd\u0ab0\u0abf\u0ab2_\u0aae\u0ac7_\u0a9c\u0ac2\u0aa8_\u0a9c\u0ac1\u0ab2\u0abe\u0a88_\u0a91\u0a97\u0ab8\u0acd\u0a9f_\u0ab8\u0aaa\u0acd\u0a9f\u0ac7\u0aae\u0acd\u0aac\u0ab0_\u0a91\u0a95\u0acd\u0a9f\u0acd\u0aac\u0ab0_\u0aa8\u0ab5\u0ac7\u0aae\u0acd\u0aac\u0ab0_\u0aa1\u0abf\u0ab8\u0ac7\u0aae\u0acd\u0aac\u0ab0".split("_"),monthsShort:"\u0a9c\u0abe\u0aa8\u0acd\u0aaf\u0ac1._\u0aab\u0ac7\u0aac\u0acd\u0ab0\u0ac1._\u0aae\u0abe\u0ab0\u0acd\u0a9a_\u0a8f\u0aaa\u0acd\u0ab0\u0abf._\u0aae\u0ac7_\u0a9c\u0ac2\u0aa8_\u0a9c\u0ac1\u0ab2\u0abe._\u0a91\u0a97._\u0ab8\u0aaa\u0acd\u0a9f\u0ac7._\u0a91\u0a95\u0acd\u0a9f\u0acd._\u0aa8\u0ab5\u0ac7._\u0aa1\u0abf\u0ab8\u0ac7.".split("_"),monthsParseExact:!0,weekdays:"\u0ab0\u0ab5\u0abf\u0ab5\u0abe\u0ab0_\u0ab8\u0acb\u0aae\u0ab5\u0abe\u0ab0_\u0aae\u0a82\u0a97\u0ab3\u0ab5\u0abe\u0ab0_\u0aac\u0ac1\u0aa7\u0acd\u0ab5\u0abe\u0ab0_\u0a97\u0ac1\u0ab0\u0ac1\u0ab5\u0abe\u0ab0_\u0ab6\u0ac1\u0a95\u0acd\u0ab0\u0ab5\u0abe\u0ab0_\u0ab6\u0aa8\u0abf\u0ab5\u0abe\u0ab0".split("_"),weekdaysShort:"\u0ab0\u0ab5\u0abf_\u0ab8\u0acb\u0aae_\u0aae\u0a82\u0a97\u0ab3_\u0aac\u0ac1\u0aa7\u0acd_\u0a97\u0ac1\u0ab0\u0ac1_\u0ab6\u0ac1\u0a95\u0acd\u0ab0_\u0ab6\u0aa8\u0abf".split("_"),weekdaysMin:"\u0ab0_\u0ab8\u0acb_\u0aae\u0a82_\u0aac\u0ac1_\u0a97\u0ac1_\u0ab6\u0ac1_\u0ab6".split("_"),longDateFormat:{LT:"A h:mm \u0ab5\u0abe\u0a97\u0acd\u0aaf\u0ac7",LTS:"A h:mm:ss \u0ab5\u0abe\u0a97\u0acd\u0aaf\u0ac7",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm \u0ab5\u0abe\u0a97\u0acd\u0aaf\u0ac7",LLLL:"dddd, D MMMM YYYY, A h:mm \u0ab5\u0abe\u0a97\u0acd\u0aaf\u0ac7"},calendar:{sameDay:"[\u0a86\u0a9c] LT",nextDay:"[\u0a95\u0abe\u0ab2\u0ac7] LT",nextWeek:"dddd, LT",lastDay:"[\u0a97\u0a87\u0a95\u0abe\u0ab2\u0ac7] LT",lastWeek:"[\u0aaa\u0abe\u0a9b\u0ab2\u0abe] dddd, LT",sameElse:"L"},relativeTime:{future:"%s \u0aae\u0abe",past:"%s \u0aaa\u0ab9\u0ac7\u0ab2\u0abe",s:"\u0a85\u0aae\u0ac1\u0a95 \u0aaa\u0ab3\u0acb",ss:"%d \u0ab8\u0ac7\u0a95\u0a82\u0aa1",m:"\u0a8f\u0a95 \u0aae\u0abf\u0aa8\u0abf\u0a9f",mm:"%d \u0aae\u0abf\u0aa8\u0abf\u0a9f",h:"\u0a8f\u0a95 \u0a95\u0ab2\u0abe\u0a95",hh:"%d \u0a95\u0ab2\u0abe\u0a95",d:"\u0a8f\u0a95 \u0aa6\u0abf\u0ab5\u0ab8",dd:"%d \u0aa6\u0abf\u0ab5\u0ab8",M:"\u0a8f\u0a95 \u0aae\u0ab9\u0abf\u0aa8\u0acb",MM:"%d \u0aae\u0ab9\u0abf\u0aa8\u0acb",y:"\u0a8f\u0a95 \u0ab5\u0ab0\u0acd\u0ab7",yy:"%d \u0ab5\u0ab0\u0acd\u0ab7"},preparse:function(e){return e.replace(/[\u0ae7\u0ae8\u0ae9\u0aea\u0aeb\u0aec\u0aed\u0aee\u0aef\u0ae6]/g,function(e){return bs[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return ws[e]})},meridiemParse:/\u0ab0\u0abe\u0aa4|\u0aac\u0aaa\u0acb\u0ab0|\u0ab8\u0ab5\u0abe\u0ab0|\u0ab8\u0abe\u0a82\u0a9c/,meridiemHour:function(e,a){return 12===e&&(e=0),"\u0ab0\u0abe\u0aa4"===a?e<4?e:e+12:"\u0ab8\u0ab5\u0abe\u0ab0"===a?e:"\u0aac\u0aaa\u0acb\u0ab0"===a?10<=e?e:e+12:"\u0ab8\u0abe\u0a82\u0a9c"===a?e+12:void 0},meridiem:function(e,a,t){return e<4?"\u0ab0\u0abe\u0aa4":e<10?"\u0ab8\u0ab5\u0abe\u0ab0":e<17?"\u0aac\u0aaa\u0acb\u0ab0":e<20?"\u0ab8\u0abe\u0a82\u0a9c":"\u0ab0\u0abe\u0aa4"},week:{dow:0,doy:6}}),M.defineLocale("he",{months:"\u05d9\u05e0\u05d5\u05d0\u05e8_\u05e4\u05d1\u05e8\u05d5\u05d0\u05e8_\u05de\u05e8\u05e5_\u05d0\u05e4\u05e8\u05d9\u05dc_\u05de\u05d0\u05d9_\u05d9\u05d5\u05e0\u05d9_\u05d9\u05d5\u05dc\u05d9_\u05d0\u05d5\u05d2\u05d5\u05e1\u05d8_\u05e1\u05e4\u05d8\u05de\u05d1\u05e8_\u05d0\u05d5\u05e7\u05d8\u05d5\u05d1\u05e8_\u05e0\u05d5\u05d1\u05de\u05d1\u05e8_\u05d3\u05e6\u05de\u05d1\u05e8".split("_"),monthsShort:"\u05d9\u05e0\u05d5\u05f3_\u05e4\u05d1\u05e8\u05f3_\u05de\u05e8\u05e5_\u05d0\u05e4\u05e8\u05f3_\u05de\u05d0\u05d9_\u05d9\u05d5\u05e0\u05d9_\u05d9\u05d5\u05dc\u05d9_\u05d0\u05d5\u05d2\u05f3_\u05e1\u05e4\u05d8\u05f3_\u05d0\u05d5\u05e7\u05f3_\u05e0\u05d5\u05d1\u05f3_\u05d3\u05e6\u05de\u05f3".split("_"),weekdays:"\u05e8\u05d0\u05e9\u05d5\u05df_\u05e9\u05e0\u05d9_\u05e9\u05dc\u05d9\u05e9\u05d9_\u05e8\u05d1\u05d9\u05e2\u05d9_\u05d7\u05de\u05d9\u05e9\u05d9_\u05e9\u05d9\u05e9\u05d9_\u05e9\u05d1\u05ea".split("_"),weekdaysShort:"\u05d0\u05f3_\u05d1\u05f3_\u05d2\u05f3_\u05d3\u05f3_\u05d4\u05f3_\u05d5\u05f3_\u05e9\u05f3".split("_"),weekdaysMin:"\u05d0_\u05d1_\u05d2_\u05d3_\u05d4_\u05d5_\u05e9".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [\u05d1]MMMM YYYY",LLL:"D [\u05d1]MMMM YYYY HH:mm",LLLL:"dddd, D [\u05d1]MMMM YYYY HH:mm",l:"D/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY HH:mm",llll:"ddd, D MMM YYYY HH:mm"},calendar:{sameDay:"[\u05d4\u05d9\u05d5\u05dd \u05d1\u05be]LT",nextDay:"[\u05de\u05d7\u05e8 \u05d1\u05be]LT",nextWeek:"dddd [\u05d1\u05e9\u05e2\u05d4] LT",lastDay:"[\u05d0\u05ea\u05de\u05d5\u05dc \u05d1\u05be]LT",lastWeek:"[\u05d1\u05d9\u05d5\u05dd] dddd [\u05d4\u05d0\u05d7\u05e8\u05d5\u05df \u05d1\u05e9\u05e2\u05d4] LT",sameElse:"L"},relativeTime:{future:"\u05d1\u05e2\u05d5\u05d3 %s",past:"\u05dc\u05e4\u05e0\u05d9 %s",s:"\u05de\u05e1\u05e4\u05e8 \u05e9\u05e0\u05d9\u05d5\u05ea",ss:"%d \u05e9\u05e0\u05d9\u05d5\u05ea",m:"\u05d3\u05e7\u05d4",mm:"%d \u05d3\u05e7\u05d5\u05ea",h:"\u05e9\u05e2\u05d4",hh:function(e){return 2===e?"\u05e9\u05e2\u05ea\u05d9\u05d9\u05dd":e+" \u05e9\u05e2\u05d5\u05ea"},d:"\u05d9\u05d5\u05dd",dd:function(e){return 2===e?"\u05d9\u05d5\u05de\u05d9\u05d9\u05dd":e+" \u05d9\u05de\u05d9\u05dd"},M:"\u05d7\u05d5\u05d3\u05e9",MM:function(e){return 2===e?"\u05d7\u05d5\u05d3\u05e9\u05d9\u05d9\u05dd":e+" \u05d7\u05d5\u05d3\u05e9\u05d9\u05dd"},y:"\u05e9\u05e0\u05d4",yy:function(e){return 2===e?"\u05e9\u05e0\u05ea\u05d9\u05d9\u05dd":e%10==0&&10!==e?e+" \u05e9\u05e0\u05d4":e+" \u05e9\u05e0\u05d9\u05dd"}},meridiemParse:/\u05d0\u05d7\u05d4"\u05e6|\u05dc\u05e4\u05e0\u05d4"\u05e6|\u05d0\u05d7\u05e8\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd|\u05dc\u05e4\u05e0\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd|\u05dc\u05e4\u05e0\u05d5\u05ea \u05d1\u05d5\u05e7\u05e8|\u05d1\u05d1\u05d5\u05e7\u05e8|\u05d1\u05e2\u05e8\u05d1/i,isPM:function(e){return/^(\u05d0\u05d7\u05d4"\u05e6|\u05d0\u05d7\u05e8\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd|\u05d1\u05e2\u05e8\u05d1)$/.test(e)},meridiem:function(e,a,t){return e<5?"\u05dc\u05e4\u05e0\u05d5\u05ea \u05d1\u05d5\u05e7\u05e8":e<10?"\u05d1\u05d1\u05d5\u05e7\u05e8":e<12?t?'\u05dc\u05e4\u05e0\u05d4"\u05e6':"\u05dc\u05e4\u05e0\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd":e<18?t?'\u05d0\u05d7\u05d4"\u05e6':"\u05d0\u05d7\u05e8\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd":"\u05d1\u05e2\u05e8\u05d1"}}),{1:"\u0967",2:"\u0968",3:"\u0969",4:"\u096a",5:"\u096b",6:"\u096c",7:"\u096d",8:"\u096e",9:"\u096f",0:"\u0966"}),Hs={"\u0967":"1","\u0968":"2","\u0969":"3","\u096a":"4","\u096b":"5","\u096c":"6","\u096d":"7","\u096e":"8","\u096f":"9","\u0966":"0"},Ne=[/^\u091c\u0928/i,/^\u092b\u093c\u0930|\u092b\u0930/i,/^\u092e\u093e\u0930\u094d\u091a/i,/^\u0905\u092a\u094d\u0930\u0948/i,/^\u092e\u0908/i,/^\u091c\u0942\u0928/i,/^\u091c\u0941\u0932/i,/^\u0905\u0917/i,/^\u0938\u093f\u0924\u0902|\u0938\u093f\u0924/i,/^\u0905\u0915\u094d\u091f\u0942/i,/^\u0928\u0935|\u0928\u0935\u0902/i,/^\u0926\u093f\u0938\u0902|\u0926\u093f\u0938/i];function vs(e,a,t){var s=e+" ";switch(t){case"ss":return s+=1===e?"sekunda":2===e||3===e||4===e?"sekunde":"sekundi";case"m":return a?"jedna minuta":"jedne minute";case"mm":return s+=1!==e&&(2===e||3===e||4===e)?"minute":"minuta";case"h":return a?"jedan sat":"jednog sata";case"hh":return s+=1===e?"sat":2===e||3===e||4===e?"sata":"sati";case"dd":return s+=1===e?"dan":"dana";case"MM":return s+=1===e?"mjesec":2===e||3===e||4===e?"mjeseca":"mjeseci";case"yy":return s+=1!==e&&(2===e||3===e||4===e)?"godine":"godina"}}M.defineLocale("hi",{months:{format:"\u091c\u0928\u0935\u0930\u0940_\u092b\u093c\u0930\u0935\u0930\u0940_\u092e\u093e\u0930\u094d\u091a_\u0905\u092a\u094d\u0930\u0948\u0932_\u092e\u0908_\u091c\u0942\u0928_\u091c\u0941\u0932\u093e\u0908_\u0905\u0917\u0938\u094d\u0924_\u0938\u093f\u0924\u092e\u094d\u092c\u0930_\u0905\u0915\u094d\u091f\u0942\u092c\u0930_\u0928\u0935\u092e\u094d\u092c\u0930_\u0926\u093f\u0938\u092e\u094d\u092c\u0930".split("_"),standalone:"\u091c\u0928\u0935\u0930\u0940_\u092b\u0930\u0935\u0930\u0940_\u092e\u093e\u0930\u094d\u091a_\u0905\u092a\u094d\u0930\u0948\u0932_\u092e\u0908_\u091c\u0942\u0928_\u091c\u0941\u0932\u093e\u0908_\u0905\u0917\u0938\u094d\u0924_\u0938\u093f\u0924\u0902\u092c\u0930_\u0905\u0915\u094d\u091f\u0942\u092c\u0930_\u0928\u0935\u0902\u092c\u0930_\u0926\u093f\u0938\u0902\u092c\u0930".split("_")},monthsShort:"\u091c\u0928._\u092b\u093c\u0930._\u092e\u093e\u0930\u094d\u091a_\u0905\u092a\u094d\u0930\u0948._\u092e\u0908_\u091c\u0942\u0928_\u091c\u0941\u0932._\u0905\u0917._\u0938\u093f\u0924._\u0905\u0915\u094d\u091f\u0942._\u0928\u0935._\u0926\u093f\u0938.".split("_"),weekdays:"\u0930\u0935\u093f\u0935\u093e\u0930_\u0938\u094b\u092e\u0935\u093e\u0930_\u092e\u0902\u0917\u0932\u0935\u093e\u0930_\u092c\u0941\u0927\u0935\u093e\u0930_\u0917\u0941\u0930\u0942\u0935\u093e\u0930_\u0936\u0941\u0915\u094d\u0930\u0935\u093e\u0930_\u0936\u0928\u093f\u0935\u093e\u0930".split("_"),weekdaysShort:"\u0930\u0935\u093f_\u0938\u094b\u092e_\u092e\u0902\u0917\u0932_\u092c\u0941\u0927_\u0917\u0941\u0930\u0942_\u0936\u0941\u0915\u094d\u0930_\u0936\u0928\u093f".split("_"),weekdaysMin:"\u0930_\u0938\u094b_\u092e\u0902_\u092c\u0941_\u0917\u0941_\u0936\u0941_\u0936".split("_"),longDateFormat:{LT:"A h:mm \u092c\u091c\u0947",LTS:"A h:mm:ss \u092c\u091c\u0947",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm \u092c\u091c\u0947",LLLL:"dddd, D MMMM YYYY, A h:mm \u092c\u091c\u0947"},monthsParse:Ne,longMonthsParse:Ne,shortMonthsParse:[/^\u091c\u0928/i,/^\u092b\u093c\u0930/i,/^\u092e\u093e\u0930\u094d\u091a/i,/^\u0905\u092a\u094d\u0930\u0948/i,/^\u092e\u0908/i,/^\u091c\u0942\u0928/i,/^\u091c\u0941\u0932/i,/^\u0905\u0917/i,/^\u0938\u093f\u0924/i,/^\u0905\u0915\u094d\u091f\u0942/i,/^\u0928\u0935/i,/^\u0926\u093f\u0938/i],monthsRegex:/^(\u091c\u0928\u0935\u0930\u0940|\u091c\u0928\.?|\u092b\u093c\u0930\u0935\u0930\u0940|\u092b\u0930\u0935\u0930\u0940|\u092b\u093c\u0930\.?|\u092e\u093e\u0930\u094d\u091a?|\u0905\u092a\u094d\u0930\u0948\u0932|\u0905\u092a\u094d\u0930\u0948\.?|\u092e\u0908?|\u091c\u0942\u0928?|\u091c\u0941\u0932\u093e\u0908|\u091c\u0941\u0932\.?|\u0905\u0917\u0938\u094d\u0924|\u0905\u0917\.?|\u0938\u093f\u0924\u092e\u094d\u092c\u0930|\u0938\u093f\u0924\u0902\u092c\u0930|\u0938\u093f\u0924\.?|\u0905\u0915\u094d\u091f\u0942\u092c\u0930|\u0905\u0915\u094d\u091f\u0942\.?|\u0928\u0935\u092e\u094d\u092c\u0930|\u0928\u0935\u0902\u092c\u0930|\u0928\u0935\.?|\u0926\u093f\u0938\u092e\u094d\u092c\u0930|\u0926\u093f\u0938\u0902\u092c\u0930|\u0926\u093f\u0938\.?)/i,monthsShortRegex:/^(\u091c\u0928\u0935\u0930\u0940|\u091c\u0928\.?|\u092b\u093c\u0930\u0935\u0930\u0940|\u092b\u0930\u0935\u0930\u0940|\u092b\u093c\u0930\.?|\u092e\u093e\u0930\u094d\u091a?|\u0905\u092a\u094d\u0930\u0948\u0932|\u0905\u092a\u094d\u0930\u0948\.?|\u092e\u0908?|\u091c\u0942\u0928?|\u091c\u0941\u0932\u093e\u0908|\u091c\u0941\u0932\.?|\u0905\u0917\u0938\u094d\u0924|\u0905\u0917\.?|\u0938\u093f\u0924\u092e\u094d\u092c\u0930|\u0938\u093f\u0924\u0902\u092c\u0930|\u0938\u093f\u0924\.?|\u0905\u0915\u094d\u091f\u0942\u092c\u0930|\u0905\u0915\u094d\u091f\u0942\.?|\u0928\u0935\u092e\u094d\u092c\u0930|\u0928\u0935\u0902\u092c\u0930|\u0928\u0935\.?|\u0926\u093f\u0938\u092e\u094d\u092c\u0930|\u0926\u093f\u0938\u0902\u092c\u0930|\u0926\u093f\u0938\.?)/i,monthsStrictRegex:/^(\u091c\u0928\u0935\u0930\u0940?|\u092b\u093c\u0930\u0935\u0930\u0940|\u092b\u0930\u0935\u0930\u0940?|\u092e\u093e\u0930\u094d\u091a?|\u0905\u092a\u094d\u0930\u0948\u0932?|\u092e\u0908?|\u091c\u0942\u0928?|\u091c\u0941\u0932\u093e\u0908?|\u0905\u0917\u0938\u094d\u0924?|\u0938\u093f\u0924\u092e\u094d\u092c\u0930|\u0938\u093f\u0924\u0902\u092c\u0930|\u0938\u093f\u0924?\.?|\u0905\u0915\u094d\u091f\u0942\u092c\u0930|\u0905\u0915\u094d\u091f\u0942\.?|\u0928\u0935\u092e\u094d\u092c\u0930|\u0928\u0935\u0902\u092c\u0930?|\u0926\u093f\u0938\u092e\u094d\u092c\u0930|\u0926\u093f\u0938\u0902\u092c\u0930?)/i,monthsShortStrictRegex:/^(\u091c\u0928\.?|\u092b\u093c\u0930\.?|\u092e\u093e\u0930\u094d\u091a?|\u0905\u092a\u094d\u0930\u0948\.?|\u092e\u0908?|\u091c\u0942\u0928?|\u091c\u0941\u0932\.?|\u0905\u0917\.?|\u0938\u093f\u0924\.?|\u0905\u0915\u094d\u091f\u0942\.?|\u0928\u0935\.?|\u0926\u093f\u0938\.?)/i,calendar:{sameDay:"[\u0906\u091c] LT",nextDay:"[\u0915\u0932] LT",nextWeek:"dddd, LT",lastDay:"[\u0915\u0932] LT",lastWeek:"[\u092a\u093f\u091b\u0932\u0947] dddd, LT",sameElse:"L"},relativeTime:{future:"%s \u092e\u0947\u0902",past:"%s \u092a\u0939\u0932\u0947",s:"\u0915\u0941\u091b \u0939\u0940 \u0915\u094d\u0937\u0923",ss:"%d \u0938\u0947\u0915\u0902\u0921",m:"\u090f\u0915 \u092e\u093f\u0928\u091f",mm:"%d \u092e\u093f\u0928\u091f",h:"\u090f\u0915 \u0918\u0902\u091f\u093e",hh:"%d \u0918\u0902\u091f\u0947",d:"\u090f\u0915 \u0926\u093f\u0928",dd:"%d \u0926\u093f\u0928",M:"\u090f\u0915 \u092e\u0939\u0940\u0928\u0947",MM:"%d \u092e\u0939\u0940\u0928\u0947",y:"\u090f\u0915 \u0935\u0930\u094d\u0937",yy:"%d \u0935\u0930\u094d\u0937"},preparse:function(e){return e.replace(/[\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f\u0966]/g,function(e){return Hs[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return Ss[e]})},meridiemParse:/\u0930\u093e\u0924|\u0938\u0941\u092c\u0939|\u0926\u094b\u092a\u0939\u0930|\u0936\u093e\u092e/,meridiemHour:function(e,a){return 12===e&&(e=0),"\u0930\u093e\u0924"===a?e<4?e:e+12:"\u0938\u0941\u092c\u0939"===a?e:"\u0926\u094b\u092a\u0939\u0930"===a?10<=e?e:e+12:"\u0936\u093e\u092e"===a?e+12:void 0},meridiem:function(e,a,t){return e<4?"\u0930\u093e\u0924":e<10?"\u0938\u0941\u092c\u0939":e<17?"\u0926\u094b\u092a\u0939\u0930":e<20?"\u0936\u093e\u092e":"\u0930\u093e\u0924"},week:{dow:0,doy:6}}),M.defineLocale("hr",{months:{format:"sije\u010dnja_velja\u010de_o\u017eujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),standalone:"sije\u010danj_velja\u010da_o\u017eujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")},monthsShort:"sij._velj._o\u017eu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),monthsParseExact:!0,weekdays:"nedjelja_ponedjeljak_utorak_srijeda_\u010detvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._\u010det._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_\u010de_pe_su".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"Do MMMM YYYY",LLL:"Do MMMM YYYY H:mm",LLLL:"dddd, Do MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedjelju] [u] LT";case 3:return"[u] [srijedu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[ju\u010der u] LT",lastWeek:function(){switch(this.day()){case 0:return"[pro\u0161lu] [nedjelju] [u] LT";case 3:return"[pro\u0161lu] [srijedu] [u] LT";case 6:return"[pro\u0161le] [subote] [u] LT";case 1:case 2:case 4:case 5:return"[pro\u0161li] dddd [u] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"prije %s",s:"par sekundi",ss:vs,m:vs,mm:vs,h:vs,hh:vs,d:"dan",dd:vs,M:"mjesec",MM:vs,y:"godinu",yy:vs},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}});var js="vas\xe1rnap h\xe9tf\u0151n kedden szerd\xe1n cs\xfct\xf6rt\xf6k\xf6n p\xe9nteken szombaton".split(" ");function xs(e,a,t,s){var n=e;switch(t){case"s":return s||a?"n\xe9h\xe1ny m\xe1sodperc":"n\xe9h\xe1ny m\xe1sodperce";case"ss":return n+(s||a)?" m\xe1sodperc":" m\xe1sodperce";case"m":return"egy"+(s||a?" perc":" perce");case"mm":return n+(s||a?" perc":" perce");case"h":return"egy"+(s||a?" \xf3ra":" \xf3r\xe1ja");case"hh":return n+(s||a?" \xf3ra":" \xf3r\xe1ja");case"d":return"egy"+(s||a?" nap":" napja");case"dd":return n+(s||a?" nap":" napja");case"M":return"egy"+(s||a?" h\xf3nap":" h\xf3napja");case"MM":return n+(s||a?" h\xf3nap":" h\xf3napja");case"y":return"egy"+(s||a?" \xe9v":" \xe9ve");case"yy":return n+(s||a?" \xe9v":" \xe9ve")}return""}function Ps(e){return(e?"":"[m\xfalt] ")+"["+js[this.day()]+"] LT[-kor]"}function Os(e){return e%100==11||e%10!=1}function Ws(e,a,t,s){var n=e+" ";switch(t){case"s":return a||s?"nokkrar sek\xfandur":"nokkrum sek\xfandum";case"ss":return Os(e)?n+(a||s?"sek\xfandur":"sek\xfandum"):n+"sek\xfanda";case"m":return a?"m\xedn\xfata":"m\xedn\xfatu";case"mm":return Os(e)?n+(a||s?"m\xedn\xfatur":"m\xedn\xfatum"):a?n+"m\xedn\xfata":n+"m\xedn\xfatu";case"hh":return Os(e)?n+(a||s?"klukkustundir":"klukkustundum"):n+"klukkustund";case"d":return a?"dagur":s?"dag":"degi";case"dd":return Os(e)?a?n+"dagar":n+(s?"daga":"d\xf6gum"):a?n+"dagur":n+(s?"dag":"degi");case"M":return a?"m\xe1nu\xf0ur":s?"m\xe1nu\xf0":"m\xe1nu\xf0i";case"MM":return Os(e)?a?n+"m\xe1nu\xf0ir":n+(s?"m\xe1nu\xf0i":"m\xe1nu\xf0um"):a?n+"m\xe1nu\xf0ur":n+(s?"m\xe1nu\xf0":"m\xe1nu\xf0i");case"y":return a||s?"\xe1r":"\xe1ri";case"yy":return Os(e)?n+(a||s?"\xe1r":"\xe1rum"):n+(a||s?"\xe1r":"\xe1ri")}}M.defineLocale("hu",{months:"janu\xe1r_febru\xe1r_m\xe1rcius_\xe1prilis_m\xe1jus_j\xfanius_j\xfalius_augusztus_szeptember_okt\xf3ber_november_december".split("_"),monthsShort:"jan._feb._m\xe1rc._\xe1pr._m\xe1j._j\xfan._j\xfal._aug._szept._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"vas\xe1rnap_h\xe9tf\u0151_kedd_szerda_cs\xfct\xf6rt\xf6k_p\xe9ntek_szombat".split("_"),weekdaysShort:"vas_h\xe9t_kedd_sze_cs\xfct_p\xe9n_szo".split("_"),weekdaysMin:"v_h_k_sze_cs_p_szo".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"YYYY.MM.DD.",LL:"YYYY. MMMM D.",LLL:"YYYY. MMMM D. H:mm",LLLL:"YYYY. MMMM D., dddd H:mm"},meridiemParse:/de|du/i,isPM:function(e){return"u"===e.charAt(1).toLowerCase()},meridiem:function(e,a,t){return e<12?!0===t?"de":"DE":!0===t?"du":"DU"},calendar:{sameDay:"[ma] LT[-kor]",nextDay:"[holnap] LT[-kor]",nextWeek:function(){return Ps.call(this,!0)},lastDay:"[tegnap] LT[-kor]",lastWeek:function(){return Ps.call(this,!1)},sameElse:"L"},relativeTime:{future:"%s m\xfalva",past:"%s",s:xs,ss:xs,m:xs,mm:xs,h:xs,hh:xs,d:xs,dd:xs,M:xs,MM:xs,y:xs,yy:xs},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),M.defineLocale("hy-am",{months:{format:"\u0570\u0578\u0582\u0576\u057e\u0561\u0580\u056b_\u0583\u0565\u057f\u0580\u057e\u0561\u0580\u056b_\u0574\u0561\u0580\u057f\u056b_\u0561\u057a\u0580\u056b\u056c\u056b_\u0574\u0561\u0575\u056b\u057d\u056b_\u0570\u0578\u0582\u0576\u056b\u057d\u056b_\u0570\u0578\u0582\u056c\u056b\u057d\u056b_\u0585\u0563\u0578\u057d\u057f\u0578\u057d\u056b_\u057d\u0565\u057a\u057f\u0565\u0574\u0562\u0565\u0580\u056b_\u0570\u0578\u056f\u057f\u0565\u0574\u0562\u0565\u0580\u056b_\u0576\u0578\u0575\u0565\u0574\u0562\u0565\u0580\u056b_\u0564\u0565\u056f\u057f\u0565\u0574\u0562\u0565\u0580\u056b".split("_"),standalone:"\u0570\u0578\u0582\u0576\u057e\u0561\u0580_\u0583\u0565\u057f\u0580\u057e\u0561\u0580_\u0574\u0561\u0580\u057f_\u0561\u057a\u0580\u056b\u056c_\u0574\u0561\u0575\u056b\u057d_\u0570\u0578\u0582\u0576\u056b\u057d_\u0570\u0578\u0582\u056c\u056b\u057d_\u0585\u0563\u0578\u057d\u057f\u0578\u057d_\u057d\u0565\u057a\u057f\u0565\u0574\u0562\u0565\u0580_\u0570\u0578\u056f\u057f\u0565\u0574\u0562\u0565\u0580_\u0576\u0578\u0575\u0565\u0574\u0562\u0565\u0580_\u0564\u0565\u056f\u057f\u0565\u0574\u0562\u0565\u0580".split("_")},monthsShort:"\u0570\u0576\u057e_\u0583\u057f\u0580_\u0574\u0580\u057f_\u0561\u057a\u0580_\u0574\u0575\u057d_\u0570\u0576\u057d_\u0570\u056c\u057d_\u0585\u0563\u057d_\u057d\u057a\u057f_\u0570\u056f\u057f_\u0576\u0574\u0562_\u0564\u056f\u057f".split("_"),weekdays:"\u056f\u056b\u0580\u0561\u056f\u056b_\u0565\u0580\u056f\u0578\u0582\u0577\u0561\u0562\u0569\u056b_\u0565\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056b_\u0579\u0578\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056b_\u0570\u056b\u0576\u0563\u0577\u0561\u0562\u0569\u056b_\u0578\u0582\u0580\u0562\u0561\u0569_\u0577\u0561\u0562\u0561\u0569".split("_"),weekdaysShort:"\u056f\u0580\u056f_\u0565\u0580\u056f_\u0565\u0580\u0584_\u0579\u0580\u0584_\u0570\u0576\u0563_\u0578\u0582\u0580\u0562_\u0577\u0562\u0569".split("_"),weekdaysMin:"\u056f\u0580\u056f_\u0565\u0580\u056f_\u0565\u0580\u0584_\u0579\u0580\u0584_\u0570\u0576\u0563_\u0578\u0582\u0580\u0562_\u0577\u0562\u0569".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY \u0569.",LLL:"D MMMM YYYY \u0569., HH:mm",LLLL:"dddd, D MMMM YYYY \u0569., HH:mm"},calendar:{sameDay:"[\u0561\u0575\u057d\u0585\u0580] LT",nextDay:"[\u057e\u0561\u0572\u0568] LT",lastDay:"[\u0565\u0580\u0565\u056f] LT",nextWeek:function(){return"dddd [\u0585\u0580\u0568 \u056a\u0561\u0574\u0568] LT"},lastWeek:function(){return"[\u0561\u0576\u0581\u0561\u056e] dddd [\u0585\u0580\u0568 \u056a\u0561\u0574\u0568] LT"},sameElse:"L"},relativeTime:{future:"%s \u0570\u0565\u057f\u0578",past:"%s \u0561\u057c\u0561\u057b",s:"\u0574\u056b \u0584\u0561\u0576\u056b \u057e\u0561\u0575\u0580\u056f\u0575\u0561\u0576",ss:"%d \u057e\u0561\u0575\u0580\u056f\u0575\u0561\u0576",m:"\u0580\u0578\u057a\u0565",mm:"%d \u0580\u0578\u057a\u0565",h:"\u056a\u0561\u0574",hh:"%d \u056a\u0561\u0574",d:"\u0585\u0580",dd:"%d \u0585\u0580",M:"\u0561\u0574\u056b\u057d",MM:"%d \u0561\u0574\u056b\u057d",y:"\u057f\u0561\u0580\u056b",yy:"%d \u057f\u0561\u0580\u056b"},meridiemParse:/\u0563\u056b\u0577\u0565\u0580\u057e\u0561|\u0561\u057c\u0561\u057e\u0578\u057f\u057e\u0561|\u0581\u0565\u0580\u0565\u056f\u057e\u0561|\u0565\u0580\u0565\u056f\u0578\u0575\u0561\u0576/,isPM:function(e){return/^(\u0581\u0565\u0580\u0565\u056f\u057e\u0561|\u0565\u0580\u0565\u056f\u0578\u0575\u0561\u0576)$/.test(e)},meridiem:function(e){return e<4?"\u0563\u056b\u0577\u0565\u0580\u057e\u0561":e<12?"\u0561\u057c\u0561\u057e\u0578\u057f\u057e\u0561":e<17?"\u0581\u0565\u0580\u0565\u056f\u057e\u0561":"\u0565\u0580\u0565\u056f\u0578\u0575\u0561\u0576"},dayOfMonthOrdinalParse:/\d{1,2}|\d{1,2}-(\u056b\u0576|\u0580\u0564)/,ordinal:function(e,a){switch(a){case"DDD":case"w":case"W":case"DDDo":return 1===e?e+"-\u056b\u0576":e+"-\u0580\u0564";default:return e}},week:{dow:1,doy:7}}),M.defineLocale("id",{months:"Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),monthsShort:"Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"),weekdays:"Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),weekdaysShort:"Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),weekdaysMin:"Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/pagi|siang|sore|malam/,meridiemHour:function(e,a){return 12===e&&(e=0),"pagi"===a?e:"siang"===a?11<=e?e:e+12:"sore"===a||"malam"===a?e+12:void 0},meridiem:function(e,a,t){return e<11?"pagi":e<15?"siang":e<19?"sore":"malam"},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Besok pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kemarin pukul] LT",lastWeek:"dddd [lalu pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lalu",s:"beberapa detik",ss:"%d detik",m:"semenit",mm:"%d menit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:0,doy:6}}),M.defineLocale("is",{months:"jan\xfaar_febr\xfaar_mars_apr\xedl_ma\xed_j\xfan\xed_j\xfal\xed_\xe1g\xfast_september_okt\xf3ber_n\xf3vember_desember".split("_"),monthsShort:"jan_feb_mar_apr_ma\xed_j\xfan_j\xfal_\xe1g\xfa_sep_okt_n\xf3v_des".split("_"),weekdays:"sunnudagur_m\xe1nudagur_\xferi\xf0judagur_mi\xf0vikudagur_fimmtudagur_f\xf6studagur_laugardagur".split("_"),weekdaysShort:"sun_m\xe1n_\xferi_mi\xf0_fim_f\xf6s_lau".split("_"),weekdaysMin:"Su_M\xe1_\xder_Mi_Fi_F\xf6_La".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] H:mm",LLLL:"dddd, D. MMMM YYYY [kl.] H:mm"},calendar:{sameDay:"[\xed dag kl.] LT",nextDay:"[\xe1 morgun kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[\xed g\xe6r kl.] LT",lastWeek:"[s\xed\xf0asta] dddd [kl.] LT",sameElse:"L"},relativeTime:{future:"eftir %s",past:"fyrir %s s\xed\xf0an",s:Ws,ss:Ws,m:Ws,mm:Ws,h:"klukkustund",hh:Ws,d:Ws,dd:Ws,M:Ws,MM:Ws,y:Ws,yy:Ws},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),M.defineLocale("it-ch",{months:"gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),monthsShort:"gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),weekdays:"domenica_luned\xec_marted\xec_mercoled\xec_gioved\xec_venerd\xec_sabato".split("_"),weekdaysShort:"dom_lun_mar_mer_gio_ven_sab".split("_"),weekdaysMin:"do_lu_ma_me_gi_ve_sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Oggi alle] LT",nextDay:"[Domani alle] LT",nextWeek:"dddd [alle] LT",lastDay:"[Ieri alle] LT",lastWeek:function(){switch(this.day()){case 0:return"[la scorsa] dddd [alle] LT";default:return"[lo scorso] dddd [alle] LT"}},sameElse:"L"},relativeTime:{future:function(e){return(/^[0-9].+$/.test(e)?"tra":"in")+" "+e},past:"%s fa",s:"alcuni secondi",ss:"%d secondi",m:"un minuto",mm:"%d minuti",h:"un'ora",hh:"%d ore",d:"un giorno",dd:"%d giorni",M:"un mese",MM:"%d mesi",y:"un anno",yy:"%d anni"},dayOfMonthOrdinalParse:/\d{1,2}\xba/,ordinal:"%d\xba",week:{dow:1,doy:4}}),M.defineLocale("it",{months:"gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),monthsShort:"gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),weekdays:"domenica_luned\xec_marted\xec_mercoled\xec_gioved\xec_venerd\xec_sabato".split("_"),weekdaysShort:"dom_lun_mar_mer_gio_ven_sab".split("_"),weekdaysMin:"do_lu_ma_me_gi_ve_sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:function(){return"[Oggi a"+(1<this.hours()?"lle ":0===this.hours()?" ":"ll'")+"]LT"},nextDay:function(){return"[Domani a"+(1<this.hours()?"lle ":0===this.hours()?" ":"ll'")+"]LT"},nextWeek:function(){return"dddd [a"+(1<this.hours()?"lle ":0===this.hours()?" ":"ll'")+"]LT"},lastDay:function(){return"[Ieri a"+(1<this.hours()?"lle ":0===this.hours()?" ":"ll'")+"]LT"},lastWeek:function(){switch(this.day()){case 0:return"[La scorsa] dddd [a"+(1<this.hours()?"lle ":0===this.hours()?" ":"ll'")+"]LT";default:return"[Lo scorso] dddd [a"+(1<this.hours()?"lle ":0===this.hours()?" ":"ll'")+"]LT"}},sameElse:"L"},relativeTime:{future:"tra %s",past:"%s fa",s:"alcuni secondi",ss:"%d secondi",m:"un minuto",mm:"%d minuti",h:"un'ora",hh:"%d ore",d:"un giorno",dd:"%d giorni",w:"una settimana",ww:"%d settimane",M:"un mese",MM:"%d mesi",y:"un anno",yy:"%d anni"},dayOfMonthOrdinalParse:/\d{1,2}\xba/,ordinal:"%d\xba",week:{dow:1,doy:4}}),M.defineLocale("ja",{eras:[{since:"2019-05-01",offset:1,name:"\u4ee4\u548c",narrow:"\u32ff",abbr:"R"},{since:"1989-01-08",until:"2019-04-30",offset:1,name:"\u5e73\u6210",narrow:"\u337b",abbr:"H"},{since:"1926-12-25",until:"1989-01-07",offset:1,name:"\u662d\u548c",narrow:"\u337c",abbr:"S"},{since:"1912-07-30",until:"1926-12-24",offset:1,name:"\u5927\u6b63",narrow:"\u337d",abbr:"T"},{since:"1873-01-01",until:"1912-07-29",offset:6,name:"\u660e\u6cbb",narrow:"\u337e",abbr:"M"},{since:"0001-01-01",until:"1873-12-31",offset:1,name:"\u897f\u66a6",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"\u7d00\u5143\u524d",narrow:"BC",abbr:"BC"}],eraYearOrdinalRegex:/(\u5143|\d+)\u5e74/,eraYearOrdinalParse:function(e,a){return"\u5143"===a[1]?1:parseInt(a[1]||e,10)},months:"1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),monthsShort:"1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),weekdays:"\u65e5\u66dc\u65e5_\u6708\u66dc\u65e5_\u706b\u66dc\u65e5_\u6c34\u66dc\u65e5_\u6728\u66dc\u65e5_\u91d1\u66dc\u65e5_\u571f\u66dc\u65e5".split("_"),weekdaysShort:"\u65e5_\u6708_\u706b_\u6c34_\u6728_\u91d1_\u571f".split("_"),weekdaysMin:"\u65e5_\u6708_\u706b_\u6c34_\u6728_\u91d1_\u571f".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY\u5e74M\u6708D\u65e5",LLL:"YYYY\u5e74M\u6708D\u65e5 HH:mm",LLLL:"YYYY\u5e74M\u6708D\u65e5 dddd HH:mm",l:"YYYY/MM/DD",ll:"YYYY\u5e74M\u6708D\u65e5",lll:"YYYY\u5e74M\u6708D\u65e5 HH:mm",llll:"YYYY\u5e74M\u6708D\u65e5(ddd) HH:mm"},meridiemParse:/\u5348\u524d|\u5348\u5f8c/i,isPM:function(e){return"\u5348\u5f8c"===e},meridiem:function(e,a,t){return e<12?"\u5348\u524d":"\u5348\u5f8c"},calendar:{sameDay:"[\u4eca\u65e5] LT",nextDay:"[\u660e\u65e5] LT",nextWeek:function(e){return e.week()!==this.week()?"[\u6765\u9031]dddd LT":"dddd LT"},lastDay:"[\u6628\u65e5] LT",lastWeek:function(e){return this.week()!==e.week()?"[\u5148\u9031]dddd LT":"dddd LT"},sameElse:"L"},dayOfMonthOrdinalParse:/\d{1,2}\u65e5/,ordinal:function(e,a){switch(a){case"y":return 1===e?"\u5143\u5e74":e+"\u5e74";case"d":case"D":case"DDD":return e+"\u65e5";default:return e}},relativeTime:{future:"%s\u5f8c",past:"%s\u524d",s:"\u6570\u79d2",ss:"%d\u79d2",m:"1\u5206",mm:"%d\u5206",h:"1\u6642\u9593",hh:"%d\u6642\u9593",d:"1\u65e5",dd:"%d\u65e5",M:"1\u30f6\u6708",MM:"%d\u30f6\u6708",y:"1\u5e74",yy:"%d\u5e74"}}),M.defineLocale("jv",{months:"Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),monthsShort:"Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),weekdays:"Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),weekdaysShort:"Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),weekdaysMin:"Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/enjing|siyang|sonten|ndalu/,meridiemHour:function(e,a){return 12===e&&(e=0),"enjing"===a?e:"siyang"===a?11<=e?e:e+12:"sonten"===a||"ndalu"===a?e+12:void 0},meridiem:function(e,a,t){return e<11?"enjing":e<15?"siyang":e<19?"sonten":"ndalu"},calendar:{sameDay:"[Dinten puniko pukul] LT",nextDay:"[Mbenjang pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kala wingi pukul] LT",lastWeek:"dddd [kepengker pukul] LT",sameElse:"L"},relativeTime:{future:"wonten ing %s",past:"%s ingkang kepengker",s:"sawetawis detik",ss:"%d detik",m:"setunggal menit",mm:"%d menit",h:"setunggal jam",hh:"%d jam",d:"sedinten",dd:"%d dinten",M:"sewulan",MM:"%d wulan",y:"setaun",yy:"%d taun"},week:{dow:1,doy:7}}),M.defineLocale("ka",{months:"\u10d8\u10d0\u10dc\u10d5\u10d0\u10e0\u10d8_\u10d7\u10d4\u10d1\u10d4\u10e0\u10d5\u10d0\u10da\u10d8_\u10db\u10d0\u10e0\u10e2\u10d8_\u10d0\u10de\u10e0\u10d8\u10da\u10d8_\u10db\u10d0\u10d8\u10e1\u10d8_\u10d8\u10d5\u10dc\u10d8\u10e1\u10d8_\u10d8\u10d5\u10da\u10d8\u10e1\u10d8_\u10d0\u10d2\u10d5\u10d8\u10e1\u10e2\u10dd_\u10e1\u10d4\u10e5\u10e2\u10d4\u10db\u10d1\u10d4\u10e0\u10d8_\u10dd\u10e5\u10e2\u10dd\u10db\u10d1\u10d4\u10e0\u10d8_\u10dc\u10dd\u10d4\u10db\u10d1\u10d4\u10e0\u10d8_\u10d3\u10d4\u10d9\u10d4\u10db\u10d1\u10d4\u10e0\u10d8".split("_"),monthsShort:"\u10d8\u10d0\u10dc_\u10d7\u10d4\u10d1_\u10db\u10d0\u10e0_\u10d0\u10de\u10e0_\u10db\u10d0\u10d8_\u10d8\u10d5\u10dc_\u10d8\u10d5\u10da_\u10d0\u10d2\u10d5_\u10e1\u10d4\u10e5_\u10dd\u10e5\u10e2_\u10dc\u10dd\u10d4_\u10d3\u10d4\u10d9".split("_"),weekdays:{standalone:"\u10d9\u10d5\u10d8\u10e0\u10d0_\u10dd\u10e0\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8_\u10e1\u10d0\u10db\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8_\u10dd\u10d7\u10ee\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8_\u10ee\u10e3\u10d7\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8_\u10de\u10d0\u10e0\u10d0\u10e1\u10d9\u10d4\u10d5\u10d8_\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8".split("_"),format:"\u10d9\u10d5\u10d8\u10e0\u10d0\u10e1_\u10dd\u10e0\u10e8\u10d0\u10d1\u10d0\u10d7\u10e1_\u10e1\u10d0\u10db\u10e8\u10d0\u10d1\u10d0\u10d7\u10e1_\u10dd\u10d7\u10ee\u10e8\u10d0\u10d1\u10d0\u10d7\u10e1_\u10ee\u10e3\u10d7\u10e8\u10d0\u10d1\u10d0\u10d7\u10e1_\u10de\u10d0\u10e0\u10d0\u10e1\u10d9\u10d4\u10d5\u10e1_\u10e8\u10d0\u10d1\u10d0\u10d7\u10e1".split("_"),isFormat:/(\u10ec\u10d8\u10dc\u10d0|\u10e8\u10d4\u10db\u10d3\u10d4\u10d2)/},weekdaysShort:"\u10d9\u10d5\u10d8_\u10dd\u10e0\u10e8_\u10e1\u10d0\u10db_\u10dd\u10d7\u10ee_\u10ee\u10e3\u10d7_\u10de\u10d0\u10e0_\u10e8\u10d0\u10d1".split("_"),weekdaysMin:"\u10d9\u10d5_\u10dd\u10e0_\u10e1\u10d0_\u10dd\u10d7_\u10ee\u10e3_\u10de\u10d0_\u10e8\u10d0".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[\u10d3\u10e6\u10d4\u10e1] LT[-\u10d6\u10d4]",nextDay:"[\u10ee\u10d5\u10d0\u10da] LT[-\u10d6\u10d4]",lastDay:"[\u10d2\u10e3\u10e8\u10d8\u10dc] LT[-\u10d6\u10d4]",nextWeek:"[\u10e8\u10d4\u10db\u10d3\u10d4\u10d2] dddd LT[-\u10d6\u10d4]",lastWeek:"[\u10ec\u10d8\u10dc\u10d0] dddd LT-\u10d6\u10d4",sameElse:"L"},relativeTime:{future:function(e){return e.replace(/(\u10ec\u10d0\u10db|\u10ec\u10e3\u10d7|\u10e1\u10d0\u10d0\u10d7|\u10ec\u10d4\u10da|\u10d3\u10e6|\u10d7\u10d5)(\u10d8|\u10d4)/,function(e,a,t){return"\u10d8"===t?a+"\u10e8\u10d8":a+t+"\u10e8\u10d8"})},past:function(e){return/(\u10ec\u10d0\u10db\u10d8|\u10ec\u10e3\u10d7\u10d8|\u10e1\u10d0\u10d0\u10d7\u10d8|\u10d3\u10e6\u10d4|\u10d7\u10d5\u10d4)/.test(e)?e.replace(/(\u10d8|\u10d4)$/,"\u10d8\u10e1 \u10ec\u10d8\u10dc"):/\u10ec\u10d4\u10da\u10d8/.test(e)?e.replace(/\u10ec\u10d4\u10da\u10d8$/,"\u10ec\u10da\u10d8\u10e1 \u10ec\u10d8\u10dc"):e},s:"\u10e0\u10d0\u10db\u10d3\u10d4\u10dc\u10d8\u10db\u10d4 \u10ec\u10d0\u10db\u10d8",ss:"%d \u10ec\u10d0\u10db\u10d8",m:"\u10ec\u10e3\u10d7\u10d8",mm:"%d \u10ec\u10e3\u10d7\u10d8",h:"\u10e1\u10d0\u10d0\u10d7\u10d8",hh:"%d \u10e1\u10d0\u10d0\u10d7\u10d8",d:"\u10d3\u10e6\u10d4",dd:"%d \u10d3\u10e6\u10d4",M:"\u10d7\u10d5\u10d4",MM:"%d \u10d7\u10d5\u10d4",y:"\u10ec\u10d4\u10da\u10d8",yy:"%d \u10ec\u10d4\u10da\u10d8"},dayOfMonthOrdinalParse:/0|1-\u10da\u10d8|\u10db\u10d4-\d{1,2}|\d{1,2}-\u10d4/,ordinal:function(e){return 0===e?e:1===e?e+"-\u10da\u10d8":e<20||e<=100&&e%20==0||e%100==0?"\u10db\u10d4-"+e:e+"-\u10d4"},week:{dow:1,doy:7}});var As={0:"-\u0448\u0456",1:"-\u0448\u0456",2:"-\u0448\u0456",3:"-\u0448\u0456",4:"-\u0448\u0456",5:"-\u0448\u0456",6:"-\u0448\u044b",7:"-\u0448\u0456",8:"-\u0448\u0456",9:"-\u0448\u044b",10:"-\u0448\u044b",20:"-\u0448\u044b",30:"-\u0448\u044b",40:"-\u0448\u044b",50:"-\u0448\u0456",60:"-\u0448\u044b",70:"-\u0448\u0456",80:"-\u0448\u0456",90:"-\u0448\u044b",100:"-\u0448\u0456"},Es=(M.defineLocale("kk",{months:"\u049b\u0430\u04a3\u0442\u0430\u0440_\u0430\u049b\u043f\u0430\u043d_\u043d\u0430\u0443\u0440\u044b\u0437_\u0441\u04d9\u0443\u0456\u0440_\u043c\u0430\u043c\u044b\u0440_\u043c\u0430\u0443\u0441\u044b\u043c_\u0448\u0456\u043b\u0434\u0435_\u0442\u0430\u043c\u044b\u0437_\u049b\u044b\u0440\u043a\u04af\u0439\u0435\u043a_\u049b\u0430\u0437\u0430\u043d_\u049b\u0430\u0440\u0430\u0448\u0430_\u0436\u0435\u043b\u0442\u043e\u049b\u0441\u0430\u043d".split("_"),monthsShort:"\u049b\u0430\u04a3_\u0430\u049b\u043f_\u043d\u0430\u0443_\u0441\u04d9\u0443_\u043c\u0430\u043c_\u043c\u0430\u0443_\u0448\u0456\u043b_\u0442\u0430\u043c_\u049b\u044b\u0440_\u049b\u0430\u0437_\u049b\u0430\u0440_\u0436\u0435\u043b".split("_"),weekdays:"\u0436\u0435\u043a\u0441\u0435\u043d\u0431\u0456_\u0434\u04af\u0439\u0441\u0435\u043d\u0431\u0456_\u0441\u0435\u0439\u0441\u0435\u043d\u0431\u0456_\u0441\u04d9\u0440\u0441\u0435\u043d\u0431\u0456_\u0431\u0435\u0439\u0441\u0435\u043d\u0431\u0456_\u0436\u04b1\u043c\u0430_\u0441\u0435\u043d\u0431\u0456".split("_"),weekdaysShort:"\u0436\u0435\u043a_\u0434\u04af\u0439_\u0441\u0435\u0439_\u0441\u04d9\u0440_\u0431\u0435\u0439_\u0436\u04b1\u043c_\u0441\u0435\u043d".split("_"),weekdaysMin:"\u0436\u043a_\u0434\u0439_\u0441\u0439_\u0441\u0440_\u0431\u0439_\u0436\u043c_\u0441\u043d".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[\u0411\u04af\u0433\u0456\u043d \u0441\u0430\u0493\u0430\u0442] LT",nextDay:"[\u0415\u0440\u0442\u0435\u04a3 \u0441\u0430\u0493\u0430\u0442] LT",nextWeek:"dddd [\u0441\u0430\u0493\u0430\u0442] LT",lastDay:"[\u041a\u0435\u0448\u0435 \u0441\u0430\u0493\u0430\u0442] LT",lastWeek:"[\u04e8\u0442\u043a\u0435\u043d \u0430\u043f\u0442\u0430\u043d\u044b\u04a3] dddd [\u0441\u0430\u0493\u0430\u0442] LT",sameElse:"L"},relativeTime:{future:"%s \u0456\u0448\u0456\u043d\u0434\u0435",past:"%s \u0431\u04b1\u0440\u044b\u043d",s:"\u0431\u0456\u0440\u043d\u0435\u0448\u0435 \u0441\u0435\u043a\u0443\u043d\u0434",ss:"%d \u0441\u0435\u043a\u0443\u043d\u0434",m:"\u0431\u0456\u0440 \u043c\u0438\u043d\u0443\u0442",mm:"%d \u043c\u0438\u043d\u0443\u0442",h:"\u0431\u0456\u0440 \u0441\u0430\u0493\u0430\u0442",hh:"%d \u0441\u0430\u0493\u0430\u0442",d:"\u0431\u0456\u0440 \u043a\u04af\u043d",dd:"%d \u043a\u04af\u043d",M:"\u0431\u0456\u0440 \u0430\u0439",MM:"%d \u0430\u0439",y:"\u0431\u0456\u0440 \u0436\u044b\u043b",yy:"%d \u0436\u044b\u043b"},dayOfMonthOrdinalParse:/\d{1,2}-(\u0448\u0456|\u0448\u044b)/,ordinal:function(e){return e+(As[e]||As[e%10]||As[100<=e?100:null])},week:{dow:1,doy:7}}),{1:"\u17e1",2:"\u17e2",3:"\u17e3",4:"\u17e4",5:"\u17e5",6:"\u17e6",7:"\u17e7",8:"\u17e8",9:"\u17e9",0:"\u17e0"}),Fs={"\u17e1":"1","\u17e2":"2","\u17e3":"3","\u17e4":"4","\u17e5":"5","\u17e6":"6","\u17e7":"7","\u17e8":"8","\u17e9":"9","\u17e0":"0"},zs=(M.defineLocale("km",{months:"\u1798\u1780\u179a\u17b6_\u1780\u17bb\u1798\u17d2\u1797\u17c8_\u1798\u17b8\u1793\u17b6_\u1798\u17c1\u179f\u17b6_\u17a7\u179f\u1797\u17b6_\u1798\u17b7\u1790\u17bb\u1793\u17b6_\u1780\u1780\u17d2\u1780\u178a\u17b6_\u179f\u17b8\u17a0\u17b6_\u1780\u1789\u17d2\u1789\u17b6_\u178f\u17bb\u179b\u17b6_\u179c\u17b7\u1785\u17d2\u1786\u17b7\u1780\u17b6_\u1792\u17d2\u1793\u17bc".split("_"),monthsShort:"\u1798\u1780\u179a\u17b6_\u1780\u17bb\u1798\u17d2\u1797\u17c8_\u1798\u17b8\u1793\u17b6_\u1798\u17c1\u179f\u17b6_\u17a7\u179f\u1797\u17b6_\u1798\u17b7\u1790\u17bb\u1793\u17b6_\u1780\u1780\u17d2\u1780\u178a\u17b6_\u179f\u17b8\u17a0\u17b6_\u1780\u1789\u17d2\u1789\u17b6_\u178f\u17bb\u179b\u17b6_\u179c\u17b7\u1785\u17d2\u1786\u17b7\u1780\u17b6_\u1792\u17d2\u1793\u17bc".split("_"),weekdays:"\u17a2\u17b6\u1791\u17b7\u178f\u17d2\u1799_\u1785\u17d0\u1793\u17d2\u1791_\u17a2\u1784\u17d2\u1782\u17b6\u179a_\u1796\u17bb\u1792_\u1796\u17d2\u179a\u17a0\u179f\u17d2\u1794\u178f\u17b7\u17cd_\u179f\u17bb\u1780\u17d2\u179a_\u179f\u17c5\u179a\u17cd".split("_"),weekdaysShort:"\u17a2\u17b6_\u1785_\u17a2_\u1796_\u1796\u17d2\u179a_\u179f\u17bb_\u179f".split("_"),weekdaysMin:"\u17a2\u17b6_\u1785_\u17a2_\u1796_\u1796\u17d2\u179a_\u179f\u17bb_\u179f".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},meridiemParse:/\u1796\u17d2\u179a\u17b9\u1780|\u179b\u17d2\u1784\u17b6\u1785/,isPM:function(e){return"\u179b\u17d2\u1784\u17b6\u1785"===e},meridiem:function(e,a,t){return e<12?"\u1796\u17d2\u179a\u17b9\u1780":"\u179b\u17d2\u1784\u17b6\u1785"},calendar:{sameDay:"[\u1790\u17d2\u1784\u17c3\u1793\u17c1\u17c7 \u1798\u17c9\u17c4\u1784] LT",nextDay:"[\u179f\u17d2\u17a2\u17c2\u1780 \u1798\u17c9\u17c4\u1784] LT",nextWeek:"dddd [\u1798\u17c9\u17c4\u1784] LT",lastDay:"[\u1798\u17d2\u179f\u17b7\u179b\u1798\u17b7\u1789 \u1798\u17c9\u17c4\u1784] LT",lastWeek:"dddd [\u179f\u1794\u17d2\u178f\u17b6\u17a0\u17cd\u1798\u17bb\u1793] [\u1798\u17c9\u17c4\u1784] LT",sameElse:"L"},relativeTime:{future:"%s\u1791\u17c0\u178f",past:"%s\u1798\u17bb\u1793",s:"\u1794\u17c9\u17bb\u1793\u17d2\u1798\u17b6\u1793\u179c\u17b7\u1793\u17b6\u1791\u17b8",ss:"%d \u179c\u17b7\u1793\u17b6\u1791\u17b8",m:"\u1798\u17bd\u1799\u1793\u17b6\u1791\u17b8",mm:"%d \u1793\u17b6\u1791\u17b8",h:"\u1798\u17bd\u1799\u1798\u17c9\u17c4\u1784",hh:"%d \u1798\u17c9\u17c4\u1784",d:"\u1798\u17bd\u1799\u1790\u17d2\u1784\u17c3",dd:"%d \u1790\u17d2\u1784\u17c3",M:"\u1798\u17bd\u1799\u1781\u17c2",MM:"%d \u1781\u17c2",y:"\u1798\u17bd\u1799\u1786\u17d2\u1793\u17b6\u17c6",yy:"%d \u1786\u17d2\u1793\u17b6\u17c6"},dayOfMonthOrdinalParse:/\u1791\u17b8\d{1,2}/,ordinal:"\u1791\u17b8%d",preparse:function(e){return e.replace(/[\u17e1\u17e2\u17e3\u17e4\u17e5\u17e6\u17e7\u17e8\u17e9\u17e0]/g,function(e){return Fs[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return Es[e]})},week:{dow:1,doy:4}}),{1:"\u0ce7",2:"\u0ce8",3:"\u0ce9",4:"\u0cea",5:"\u0ceb",6:"\u0cec",7:"\u0ced",8:"\u0cee",9:"\u0cef",0:"\u0ce6"}),Ns={"\u0ce7":"1","\u0ce8":"2","\u0ce9":"3","\u0cea":"4","\u0ceb":"5","\u0cec":"6","\u0ced":"7","\u0cee":"8","\u0cef":"9","\u0ce6":"0"},Js=(M.defineLocale("kn",{months:"\u0c9c\u0ca8\u0cb5\u0cb0\u0cbf_\u0cab\u0cc6\u0cac\u0ccd\u0cb0\u0cb5\u0cb0\u0cbf_\u0cae\u0cbe\u0cb0\u0ccd\u0c9a\u0ccd_\u0c8f\u0caa\u0ccd\u0cb0\u0cbf\u0cb2\u0ccd_\u0cae\u0cc6\u0cd5_\u0c9c\u0cc2\u0ca8\u0ccd_\u0c9c\u0cc1\u0cb2\u0cc6\u0cd6_\u0c86\u0c97\u0cb8\u0ccd\u0c9f\u0ccd_\u0cb8\u0cc6\u0caa\u0ccd\u0c9f\u0cc6\u0c82\u0cac\u0cb0\u0ccd_\u0c85\u0c95\u0ccd\u0c9f\u0cc6\u0cc2\u0cd5\u0cac\u0cb0\u0ccd_\u0ca8\u0cb5\u0cc6\u0c82\u0cac\u0cb0\u0ccd_\u0ca1\u0cbf\u0cb8\u0cc6\u0c82\u0cac\u0cb0\u0ccd".split("_"),monthsShort:"\u0c9c\u0ca8_\u0cab\u0cc6\u0cac\u0ccd\u0cb0_\u0cae\u0cbe\u0cb0\u0ccd\u0c9a\u0ccd_\u0c8f\u0caa\u0ccd\u0cb0\u0cbf\u0cb2\u0ccd_\u0cae\u0cc6\u0cd5_\u0c9c\u0cc2\u0ca8\u0ccd_\u0c9c\u0cc1\u0cb2\u0cc6\u0cd6_\u0c86\u0c97\u0cb8\u0ccd\u0c9f\u0ccd_\u0cb8\u0cc6\u0caa\u0ccd\u0c9f\u0cc6\u0c82_\u0c85\u0c95\u0ccd\u0c9f\u0cc6\u0cc2\u0cd5_\u0ca8\u0cb5\u0cc6\u0c82_\u0ca1\u0cbf\u0cb8\u0cc6\u0c82".split("_"),monthsParseExact:!0,weekdays:"\u0cad\u0cbe\u0ca8\u0cc1\u0cb5\u0cbe\u0cb0_\u0cb8\u0cc6\u0cc2\u0cd5\u0cae\u0cb5\u0cbe\u0cb0_\u0cae\u0c82\u0c97\u0cb3\u0cb5\u0cbe\u0cb0_\u0cac\u0cc1\u0ca7\u0cb5\u0cbe\u0cb0_\u0c97\u0cc1\u0cb0\u0cc1\u0cb5\u0cbe\u0cb0_\u0cb6\u0cc1\u0c95\u0ccd\u0cb0\u0cb5\u0cbe\u0cb0_\u0cb6\u0ca8\u0cbf\u0cb5\u0cbe\u0cb0".split("_"),weekdaysShort:"\u0cad\u0cbe\u0ca8\u0cc1_\u0cb8\u0cc6\u0cc2\u0cd5\u0cae_\u0cae\u0c82\u0c97\u0cb3_\u0cac\u0cc1\u0ca7_\u0c97\u0cc1\u0cb0\u0cc1_\u0cb6\u0cc1\u0c95\u0ccd\u0cb0_\u0cb6\u0ca8\u0cbf".split("_"),weekdaysMin:"\u0cad\u0cbe_\u0cb8\u0cc6\u0cc2\u0cd5_\u0cae\u0c82_\u0cac\u0cc1_\u0c97\u0cc1_\u0cb6\u0cc1_\u0cb6".split("_"),longDateFormat:{LT:"A h:mm",LTS:"A h:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm",LLLL:"dddd, D MMMM YYYY, A h:mm"},calendar:{sameDay:"[\u0c87\u0c82\u0ca6\u0cc1] LT",nextDay:"[\u0ca8\u0cbe\u0cb3\u0cc6] LT",nextWeek:"dddd, LT",lastDay:"[\u0ca8\u0cbf\u0ca8\u0ccd\u0ca8\u0cc6] LT",lastWeek:"[\u0c95\u0cc6\u0cc2\u0ca8\u0cc6\u0caf] dddd, LT",sameElse:"L"},relativeTime:{future:"%s \u0ca8\u0c82\u0ca4\u0cb0",past:"%s \u0cb9\u0cbf\u0c82\u0ca6\u0cc6",s:"\u0c95\u0cc6\u0cb2\u0cb5\u0cc1 \u0c95\u0ccd\u0cb7\u0ca3\u0c97\u0cb3\u0cc1",ss:"%d \u0cb8\u0cc6\u0c95\u0cc6\u0c82\u0ca1\u0cc1\u0c97\u0cb3\u0cc1",m:"\u0c92\u0c82\u0ca6\u0cc1 \u0ca8\u0cbf\u0cae\u0cbf\u0cb7",mm:"%d \u0ca8\u0cbf\u0cae\u0cbf\u0cb7",h:"\u0c92\u0c82\u0ca6\u0cc1 \u0c97\u0c82\u0c9f\u0cc6",hh:"%d \u0c97\u0c82\u0c9f\u0cc6",d:"\u0c92\u0c82\u0ca6\u0cc1 \u0ca6\u0cbf\u0ca8",dd:"%d \u0ca6\u0cbf\u0ca8",M:"\u0c92\u0c82\u0ca6\u0cc1 \u0ca4\u0cbf\u0c82\u0c97\u0cb3\u0cc1",MM:"%d \u0ca4\u0cbf\u0c82\u0c97\u0cb3\u0cc1",y:"\u0c92\u0c82\u0ca6\u0cc1 \u0cb5\u0cb0\u0ccd\u0cb7",yy:"%d \u0cb5\u0cb0\u0ccd\u0cb7"},preparse:function(e){return e.replace(/[\u0ce7\u0ce8\u0ce9\u0cea\u0ceb\u0cec\u0ced\u0cee\u0cef\u0ce6]/g,function(e){return Ns[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return zs[e]})},meridiemParse:/\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf|\u0cac\u0cc6\u0cb3\u0cbf\u0c97\u0ccd\u0c97\u0cc6|\u0cae\u0ca7\u0ccd\u0caf\u0cbe\u0cb9\u0ccd\u0ca8|\u0cb8\u0c82\u0c9c\u0cc6/,meridiemHour:function(e,a){return 12===e&&(e=0),"\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf"===a?e<4?e:e+12:"\u0cac\u0cc6\u0cb3\u0cbf\u0c97\u0ccd\u0c97\u0cc6"===a?e:"\u0cae\u0ca7\u0ccd\u0caf\u0cbe\u0cb9\u0ccd\u0ca8"===a?10<=e?e:e+12:"\u0cb8\u0c82\u0c9c\u0cc6"===a?e+12:void 0},meridiem:function(e,a,t){return e<4?"\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf":e<10?"\u0cac\u0cc6\u0cb3\u0cbf\u0c97\u0ccd\u0c97\u0cc6":e<17?"\u0cae\u0ca7\u0ccd\u0caf\u0cbe\u0cb9\u0ccd\u0ca8":e<20?"\u0cb8\u0c82\u0c9c\u0cc6":"\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf"},dayOfMonthOrdinalParse:/\d{1,2}(\u0ca8\u0cc6\u0cd5)/,ordinal:function(e){return e+"\u0ca8\u0cc6\u0cd5"},week:{dow:0,doy:6}}),M.defineLocale("ko",{months:"1\uc6d4_2\uc6d4_3\uc6d4_4\uc6d4_5\uc6d4_6\uc6d4_7\uc6d4_8\uc6d4_9\uc6d4_10\uc6d4_11\uc6d4_12\uc6d4".split("_"),monthsShort:"1\uc6d4_2\uc6d4_3\uc6d4_4\uc6d4_5\uc6d4_6\uc6d4_7\uc6d4_8\uc6d4_9\uc6d4_10\uc6d4_11\uc6d4_12\uc6d4".split("_"),weekdays:"\uc77c\uc694\uc77c_\uc6d4\uc694\uc77c_\ud654\uc694\uc77c_\uc218\uc694\uc77c_\ubaa9\uc694\uc77c_\uae08\uc694\uc77c_\ud1a0\uc694\uc77c".split("_"),weekdaysShort:"\uc77c_\uc6d4_\ud654_\uc218_\ubaa9_\uae08_\ud1a0".split("_"),weekdaysMin:"\uc77c_\uc6d4_\ud654_\uc218_\ubaa9_\uae08_\ud1a0".split("_"),longDateFormat:{LT:"A h:mm",LTS:"A h:mm:ss",L:"YYYY.MM.DD.",LL:"YYYY\ub144 MMMM D\uc77c",LLL:"YYYY\ub144 MMMM D\uc77c A h:mm",LLLL:"YYYY\ub144 MMMM D\uc77c dddd A h:mm",l:"YYYY.MM.DD.",ll:"YYYY\ub144 MMMM D\uc77c",lll:"YYYY\ub144 MMMM D\uc77c A h:mm",llll:"YYYY\ub144 MMMM D\uc77c dddd A h:mm"},calendar:{sameDay:"\uc624\ub298 LT",nextDay:"\ub0b4\uc77c LT",nextWeek:"dddd LT",lastDay:"\uc5b4\uc81c LT",lastWeek:"\uc9c0\ub09c\uc8fc dddd LT",sameElse:"L"},relativeTime:{future:"%s \ud6c4",past:"%s \uc804",s:"\uba87 \ucd08",ss:"%d\ucd08",m:"1\ubd84",mm:"%d\ubd84",h:"\ud55c \uc2dc\uac04",hh:"%d\uc2dc\uac04",d:"\ud558\ub8e8",dd:"%d\uc77c",M:"\ud55c \ub2ec",MM:"%d\ub2ec",y:"\uc77c \ub144",yy:"%d\ub144"},dayOfMonthOrdinalParse:/\d{1,2}(\uc77c|\uc6d4|\uc8fc)/,ordinal:function(e,a){switch(a){case"d":case"D":case"DDD":return e+"\uc77c";case"M":return e+"\uc6d4";case"w":case"W":return e+"\uc8fc";default:return e}},meridiemParse:/\uc624\uc804|\uc624\ud6c4/,isPM:function(e){return"\uc624\ud6c4"===e},meridiem:function(e,a,t){return e<12?"\uc624\uc804":"\uc624\ud6c4"}}),{1:"\u0661",2:"\u0662",3:"\u0663",4:"\u0664",5:"\u0665",6:"\u0666",7:"\u0667",8:"\u0668",9:"\u0669",0:"\u0660"}),Rs={"\u0661":"1","\u0662":"2","\u0663":"3","\u0664":"4","\u0665":"5","\u0666":"6","\u0667":"7","\u0668":"8","\u0669":"9","\u0660":"0"},ta=["\u06a9\u0627\u0646\u0648\u0646\u06cc \u062f\u0648\u0648\u06d5\u0645","\u0634\u0648\u0628\u0627\u062a","\u0626\u0627\u0632\u0627\u0631","\u0646\u06cc\u0633\u0627\u0646","\u0626\u0627\u06cc\u0627\u0631","\u062d\u0648\u0632\u06d5\u06cc\u0631\u0627\u0646","\u062a\u06d5\u0645\u0645\u0648\u0632","\u0626\u0627\u0628","\u0626\u06d5\u06cc\u0644\u0648\u0648\u0644","\u062a\u0634\u0631\u06cc\u0646\u06cc \u06cc\u06d5\u0643\u06d5\u0645","\u062a\u0634\u0631\u06cc\u0646\u06cc \u062f\u0648\u0648\u06d5\u0645","\u0643\u0627\u0646\u0648\u0646\u06cc \u06cc\u06d5\u06a9\u06d5\u0645"],Cs=(M.defineLocale("ku",{months:ta,monthsShort:ta,weekdays:"\u06cc\u0647\u200c\u0643\u0634\u0647\u200c\u0645\u0645\u0647\u200c_\u062f\u0648\u0648\u0634\u0647\u200c\u0645\u0645\u0647\u200c_\u0633\u06ce\u0634\u0647\u200c\u0645\u0645\u0647\u200c_\u0686\u0648\u0627\u0631\u0634\u0647\u200c\u0645\u0645\u0647\u200c_\u067e\u06ce\u0646\u062c\u0634\u0647\u200c\u0645\u0645\u0647\u200c_\u0647\u0647\u200c\u06cc\u0646\u06cc_\u0634\u0647\u200c\u0645\u0645\u0647\u200c".split("_"),weekdaysShort:"\u06cc\u0647\u200c\u0643\u0634\u0647\u200c\u0645_\u062f\u0648\u0648\u0634\u0647\u200c\u0645_\u0633\u06ce\u0634\u0647\u200c\u0645_\u0686\u0648\u0627\u0631\u0634\u0647\u200c\u0645_\u067e\u06ce\u0646\u062c\u0634\u0647\u200c\u0645_\u0647\u0647\u200c\u06cc\u0646\u06cc_\u0634\u0647\u200c\u0645\u0645\u0647\u200c".split("_"),weekdaysMin:"\u06cc_\u062f_\u0633_\u0686_\u067e_\u0647_\u0634".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},meridiemParse:/\u0626\u06ce\u0648\u0627\u0631\u0647\u200c|\u0628\u0647\u200c\u06cc\u0627\u0646\u06cc/,isPM:function(e){return/\u0626\u06ce\u0648\u0627\u0631\u0647\u200c/.test(e)},meridiem:function(e,a,t){return e<12?"\u0628\u0647\u200c\u06cc\u0627\u0646\u06cc":"\u0626\u06ce\u0648\u0627\u0631\u0647\u200c"},calendar:{sameDay:"[\u0626\u0647\u200c\u0645\u0631\u06c6 \u0643\u0627\u062a\u0698\u0645\u06ce\u0631] LT",nextDay:"[\u0628\u0647\u200c\u06cc\u0627\u0646\u06cc \u0643\u0627\u062a\u0698\u0645\u06ce\u0631] LT",nextWeek:"dddd [\u0643\u0627\u062a\u0698\u0645\u06ce\u0631] LT",lastDay:"[\u062f\u0648\u06ce\u0646\u06ce \u0643\u0627\u062a\u0698\u0645\u06ce\u0631] LT",lastWeek:"dddd [\u0643\u0627\u062a\u0698\u0645\u06ce\u0631] LT",sameElse:"L"},relativeTime:{future:"\u0644\u0647\u200c %s",past:"%s",s:"\u0686\u0647\u200c\u0646\u062f \u0686\u0631\u0643\u0647\u200c\u06cc\u0647\u200c\u0643",ss:"\u0686\u0631\u0643\u0647\u200c %d",m:"\u06cc\u0647\u200c\u0643 \u062e\u0648\u0644\u0647\u200c\u0643",mm:"%d \u062e\u0648\u0644\u0647\u200c\u0643",h:"\u06cc\u0647\u200c\u0643 \u0643\u0627\u062a\u0698\u0645\u06ce\u0631",hh:"%d \u0643\u0627\u062a\u0698\u0645\u06ce\u0631",d:"\u06cc\u0647\u200c\u0643 \u0695\u06c6\u0698",dd:"%d \u0695\u06c6\u0698",M:"\u06cc\u0647\u200c\u0643 \u0645\u0627\u0646\u06af",MM:"%d \u0645\u0627\u0646\u06af",y:"\u06cc\u0647\u200c\u0643 \u0633\u0627\u06b5",yy:"%d \u0633\u0627\u06b5"},preparse:function(e){return e.replace(/[\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669\u0660]/g,function(e){return Rs[e]}).replace(/\u060c/g,",")},postformat:function(e){return e.replace(/\d/g,function(e){return Js[e]}).replace(/,/g,"\u060c")},week:{dow:6,doy:12}}),{0:"-\u0447\u04af",1:"-\u0447\u0438",2:"-\u0447\u0438",3:"-\u0447\u04af",4:"-\u0447\u04af",5:"-\u0447\u0438",6:"-\u0447\u044b",7:"-\u0447\u0438",8:"-\u0447\u0438",9:"-\u0447\u0443",10:"-\u0447\u0443",20:"-\u0447\u044b",30:"-\u0447\u0443",40:"-\u0447\u044b",50:"-\u0447\u04af",60:"-\u0447\u044b",70:"-\u0447\u0438",80:"-\u0447\u0438",90:"-\u0447\u0443",100:"-\u0447\u04af"});function Is(e,a,t,s){var n={m:["eng Minutt","enger Minutt"],h:["eng Stonn","enger Stonn"],d:["een Dag","engem Dag"],M:["ee Mount","engem Mount"],y:["ee Joer","engem Joer"]};return a?n[t][0]:n[t][1]}function Us(e){if(e=parseInt(e,10),isNaN(e))return!1;if(e<0)return!0;if(e<10)return 4<=e&&e<=7;var a;if(e<100)return Us(0==(a=e%10)?e/10:a);if(e<1e4){for(;10<=e;)e/=10;return Us(e)}return Us(e/=1e3)}M.defineLocale("ky",{months:"\u044f\u043d\u0432\u0430\u0440\u044c_\u0444\u0435\u0432\u0440\u0430\u043b\u044c_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0435\u043b\u044c_\u043c\u0430\u0439_\u0438\u044e\u043d\u044c_\u0438\u044e\u043b\u044c_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044c_\u043e\u043a\u0442\u044f\u0431\u0440\u044c_\u043d\u043e\u044f\u0431\u0440\u044c_\u0434\u0435\u043a\u0430\u0431\u0440\u044c".split("_"),monthsShort:"\u044f\u043d\u0432_\u0444\u0435\u0432_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440_\u043c\u0430\u0439_\u0438\u044e\u043d\u044c_\u0438\u044e\u043b\u044c_\u0430\u0432\u0433_\u0441\u0435\u043d_\u043e\u043a\u0442_\u043d\u043e\u044f_\u0434\u0435\u043a".split("_"),weekdays:"\u0416\u0435\u043a\u0448\u0435\u043c\u0431\u0438_\u0414\u04af\u0439\u0448\u04e9\u043c\u0431\u04af_\u0428\u0435\u0439\u0448\u0435\u043c\u0431\u0438_\u0428\u0430\u0440\u0448\u0435\u043c\u0431\u0438_\u0411\u0435\u0439\u0448\u0435\u043c\u0431\u0438_\u0416\u0443\u043c\u0430_\u0418\u0448\u0435\u043c\u0431\u0438".split("_"),weekdaysShort:"\u0416\u0435\u043a_\u0414\u04af\u0439_\u0428\u0435\u0439_\u0428\u0430\u0440_\u0411\u0435\u0439_\u0416\u0443\u043c_\u0418\u0448\u0435".split("_"),weekdaysMin:"\u0416\u043a_\u0414\u0439_\u0428\u0439_\u0428\u0440_\u0411\u0439_\u0416\u043c_\u0418\u0448".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[\u0411\u04af\u0433\u04af\u043d \u0441\u0430\u0430\u0442] LT",nextDay:"[\u042d\u0440\u0442\u0435\u04a3 \u0441\u0430\u0430\u0442] LT",nextWeek:"dddd [\u0441\u0430\u0430\u0442] LT",lastDay:"[\u041a\u0435\u0447\u044d\u044d \u0441\u0430\u0430\u0442] LT",lastWeek:"[\u04e8\u0442\u043a\u04e9\u043d \u0430\u043f\u0442\u0430\u043d\u044b\u043d] dddd [\u043a\u04af\u043d\u04af] [\u0441\u0430\u0430\u0442] LT",sameElse:"L"},relativeTime:{future:"%s \u0438\u0447\u0438\u043d\u0434\u0435",past:"%s \u043c\u0443\u0440\u0443\u043d",s:"\u0431\u0438\u0440\u043d\u0435\u0447\u0435 \u0441\u0435\u043a\u0443\u043d\u0434",ss:"%d \u0441\u0435\u043a\u0443\u043d\u0434",m:"\u0431\u0438\u0440 \u043c\u04af\u043d\u04e9\u0442",mm:"%d \u043c\u04af\u043d\u04e9\u0442",h:"\u0431\u0438\u0440 \u0441\u0430\u0430\u0442",hh:"%d \u0441\u0430\u0430\u0442",d:"\u0431\u0438\u0440 \u043a\u04af\u043d",dd:"%d \u043a\u04af\u043d",M:"\u0431\u0438\u0440 \u0430\u0439",MM:"%d \u0430\u0439",y:"\u0431\u0438\u0440 \u0436\u044b\u043b",yy:"%d \u0436\u044b\u043b"},dayOfMonthOrdinalParse:/\d{1,2}-(\u0447\u0438|\u0447\u044b|\u0447\u04af|\u0447\u0443)/,ordinal:function(e){return e+(Cs[e]||Cs[e%10]||Cs[100<=e?100:null])},week:{dow:1,doy:7}}),M.defineLocale("lb",{months:"Januar_Februar_M\xe4erz_Abr\xebll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Sonndeg_M\xe9indeg_D\xebnschdeg_M\xebttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),weekdaysShort:"So._M\xe9._D\xeb._M\xeb._Do._Fr._Sa.".split("_"),weekdaysMin:"So_M\xe9_D\xeb_M\xeb_Do_Fr_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm [Auer]",LTS:"H:mm:ss [Auer]",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm [Auer]",LLLL:"dddd, D. MMMM YYYY H:mm [Auer]"},calendar:{sameDay:"[Haut um] LT",sameElse:"L",nextDay:"[Muer um] LT",nextWeek:"dddd [um] LT",lastDay:"[G\xebschter um] LT",lastWeek:function(){switch(this.day()){case 2:case 4:return"[Leschten] dddd [um] LT";default:return"[Leschte] dddd [um] LT"}}},relativeTime:{future:function(e){return Us(e.substr(0,e.indexOf(" ")))?"a "+e:"an "+e},past:function(e){return Us(e.substr(0,e.indexOf(" ")))?"viru "+e:"virun "+e},s:"e puer Sekonnen",ss:"%d Sekonnen",m:Is,mm:"%d Minutten",h:Is,hh:"%d Stonnen",d:Is,dd:"%d Deeg",M:Is,MM:"%d M\xe9int",y:Is,yy:"%d Joer"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),M.defineLocale("lo",{months:"\u0ea1\u0eb1\u0e87\u0e81\u0ead\u0e99_\u0e81\u0eb8\u0ea1\u0e9e\u0eb2_\u0ea1\u0eb5\u0e99\u0eb2_\u0ec0\u0ea1\u0eaa\u0eb2_\u0e9e\u0eb6\u0e94\u0eaa\u0eb0\u0e9e\u0eb2_\u0ea1\u0eb4\u0e96\u0eb8\u0e99\u0eb2_\u0e81\u0ecd\u0ea5\u0eb0\u0e81\u0ebb\u0e94_\u0eaa\u0eb4\u0e87\u0eab\u0eb2_\u0e81\u0eb1\u0e99\u0e8d\u0eb2_\u0e95\u0eb8\u0ea5\u0eb2_\u0e9e\u0eb0\u0e88\u0eb4\u0e81_\u0e97\u0eb1\u0e99\u0ea7\u0eb2".split("_"),monthsShort:"\u0ea1\u0eb1\u0e87\u0e81\u0ead\u0e99_\u0e81\u0eb8\u0ea1\u0e9e\u0eb2_\u0ea1\u0eb5\u0e99\u0eb2_\u0ec0\u0ea1\u0eaa\u0eb2_\u0e9e\u0eb6\u0e94\u0eaa\u0eb0\u0e9e\u0eb2_\u0ea1\u0eb4\u0e96\u0eb8\u0e99\u0eb2_\u0e81\u0ecd\u0ea5\u0eb0\u0e81\u0ebb\u0e94_\u0eaa\u0eb4\u0e87\u0eab\u0eb2_\u0e81\u0eb1\u0e99\u0e8d\u0eb2_\u0e95\u0eb8\u0ea5\u0eb2_\u0e9e\u0eb0\u0e88\u0eb4\u0e81_\u0e97\u0eb1\u0e99\u0ea7\u0eb2".split("_"),weekdays:"\u0ead\u0eb2\u0e97\u0eb4\u0e94_\u0e88\u0eb1\u0e99_\u0ead\u0eb1\u0e87\u0e84\u0eb2\u0e99_\u0e9e\u0eb8\u0e94_\u0e9e\u0eb0\u0eab\u0eb1\u0e94_\u0eaa\u0eb8\u0e81_\u0ec0\u0eaa\u0ebb\u0eb2".split("_"),weekdaysShort:"\u0e97\u0eb4\u0e94_\u0e88\u0eb1\u0e99_\u0ead\u0eb1\u0e87\u0e84\u0eb2\u0e99_\u0e9e\u0eb8\u0e94_\u0e9e\u0eb0\u0eab\u0eb1\u0e94_\u0eaa\u0eb8\u0e81_\u0ec0\u0eaa\u0ebb\u0eb2".split("_"),weekdaysMin:"\u0e97_\u0e88_\u0ead\u0e84_\u0e9e_\u0e9e\u0eab_\u0eaa\u0e81_\u0eaa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"\u0ea7\u0eb1\u0e99dddd D MMMM YYYY HH:mm"},meridiemParse:/\u0e95\u0ead\u0e99\u0ec0\u0e8a\u0ebb\u0ec9\u0eb2|\u0e95\u0ead\u0e99\u0ec1\u0ea5\u0e87/,isPM:function(e){return"\u0e95\u0ead\u0e99\u0ec1\u0ea5\u0e87"===e},meridiem:function(e,a,t){return e<12?"\u0e95\u0ead\u0e99\u0ec0\u0e8a\u0ebb\u0ec9\u0eb2":"\u0e95\u0ead\u0e99\u0ec1\u0ea5\u0e87"},calendar:{sameDay:"[\u0ea1\u0eb7\u0ec9\u0e99\u0eb5\u0ec9\u0ec0\u0ea7\u0ea5\u0eb2] LT",nextDay:"[\u0ea1\u0eb7\u0ec9\u0ead\u0eb7\u0ec8\u0e99\u0ec0\u0ea7\u0ea5\u0eb2] LT",nextWeek:"[\u0ea7\u0eb1\u0e99]dddd[\u0edc\u0ec9\u0eb2\u0ec0\u0ea7\u0ea5\u0eb2] LT",lastDay:"[\u0ea1\u0eb7\u0ec9\u0ea7\u0eb2\u0e99\u0e99\u0eb5\u0ec9\u0ec0\u0ea7\u0ea5\u0eb2] LT",lastWeek:"[\u0ea7\u0eb1\u0e99]dddd[\u0ec1\u0ea5\u0ec9\u0ea7\u0e99\u0eb5\u0ec9\u0ec0\u0ea7\u0ea5\u0eb2] LT",sameElse:"L"},relativeTime:{future:"\u0ead\u0eb5\u0e81 %s",past:"%s\u0e9c\u0ec8\u0eb2\u0e99\u0ea1\u0eb2",s:"\u0e9a\u0ecd\u0ec8\u0ec0\u0e97\u0ebb\u0ec8\u0eb2\u0ec3\u0e94\u0ea7\u0eb4\u0e99\u0eb2\u0e97\u0eb5",ss:"%d \u0ea7\u0eb4\u0e99\u0eb2\u0e97\u0eb5",m:"1 \u0e99\u0eb2\u0e97\u0eb5",mm:"%d \u0e99\u0eb2\u0e97\u0eb5",h:"1 \u0e8a\u0ebb\u0ec8\u0ea7\u0ec2\u0ea1\u0e87",hh:"%d \u0e8a\u0ebb\u0ec8\u0ea7\u0ec2\u0ea1\u0e87",d:"1 \u0ea1\u0eb7\u0ec9",dd:"%d \u0ea1\u0eb7\u0ec9",M:"1 \u0ec0\u0e94\u0eb7\u0ead\u0e99",MM:"%d \u0ec0\u0e94\u0eb7\u0ead\u0e99",y:"1 \u0e9b\u0eb5",yy:"%d \u0e9b\u0eb5"},dayOfMonthOrdinalParse:/(\u0e97\u0eb5\u0ec8)\d{1,2}/,ordinal:function(e){return"\u0e97\u0eb5\u0ec8"+e}});var Gs={ss:"sekund\u0117_sekund\u017ei\u0173_sekundes",m:"minut\u0117_minut\u0117s_minut\u0119",mm:"minut\u0117s_minu\u010di\u0173_minutes",h:"valanda_valandos_valand\u0105",hh:"valandos_valand\u0173_valandas",d:"diena_dienos_dien\u0105",dd:"dienos_dien\u0173_dienas",M:"m\u0117nuo_m\u0117nesio_m\u0117nes\u012f",MM:"m\u0117nesiai_m\u0117nesi\u0173_m\u0117nesius",y:"metai_met\u0173_metus",yy:"metai_met\u0173_metus"};function Vs(e,a,t,s){return a?Ks(t)[0]:s?Ks(t)[1]:Ks(t)[2]}function Bs(e){return e%10==0||10<e&&e<20}function Ks(e){return Gs[e].split("_")}function qs(e,a,t,s){var n=e+" ";return 1===e?n+Vs(0,a,t[0],s):a?n+(Bs(e)?Ks(t)[1]:Ks(t)[0]):s?n+Ks(t)[1]:n+(Bs(e)?Ks(t)[1]:Ks(t)[2])}M.defineLocale("lt",{months:{format:"sausio_vasario_kovo_baland\u017eio_gegu\u017e\u0117s_bir\u017eelio_liepos_rugpj\u016b\u010dio_rugs\u0117jo_spalio_lapkri\u010dio_gruod\u017eio".split("_"),standalone:"sausis_vasaris_kovas_balandis_gegu\u017e\u0117_bir\u017eelis_liepa_rugpj\u016btis_rugs\u0117jis_spalis_lapkritis_gruodis".split("_"),isFormat:/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/},monthsShort:"sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),weekdays:{format:"sekmadien\u012f_pirmadien\u012f_antradien\u012f_tre\u010diadien\u012f_ketvirtadien\u012f_penktadien\u012f_\u0161e\u0161tadien\u012f".split("_"),standalone:"sekmadienis_pirmadienis_antradienis_tre\u010diadienis_ketvirtadienis_penktadienis_\u0161e\u0161tadienis".split("_"),isFormat:/dddd HH:mm/},weekdaysShort:"Sek_Pir_Ant_Tre_Ket_Pen_\u0160e\u0161".split("_"),weekdaysMin:"S_P_A_T_K_Pn_\u0160".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], HH:mm [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], HH:mm [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"},calendar:{sameDay:"[\u0160iandien] LT",nextDay:"[Rytoj] LT",nextWeek:"dddd LT",lastDay:"[Vakar] LT",lastWeek:"[Pra\u0117jus\u012f] dddd LT",sameElse:"L"},relativeTime:{future:"po %s",past:"prie\u0161 %s",s:function(e,a,t,s){return a?"kelios sekund\u0117s":s?"keli\u0173 sekund\u017ei\u0173":"kelias sekundes"},ss:qs,m:Vs,mm:qs,h:Vs,hh:qs,d:Vs,dd:qs,M:Vs,MM:qs,y:Vs,yy:qs},dayOfMonthOrdinalParse:/\d{1,2}-oji/,ordinal:function(e){return e+"-oji"},week:{dow:1,doy:4}});var Zs={ss:"sekundes_sekund\u0113m_sekunde_sekundes".split("_"),m:"min\u016btes_min\u016bt\u0113m_min\u016bte_min\u016btes".split("_"),mm:"min\u016btes_min\u016bt\u0113m_min\u016bte_min\u016btes".split("_"),h:"stundas_stund\u0101m_stunda_stundas".split("_"),hh:"stundas_stund\u0101m_stunda_stundas".split("_"),d:"dienas_dien\u0101m_diena_dienas".split("_"),dd:"dienas_dien\u0101m_diena_dienas".split("_"),M:"m\u0113ne\u0161a_m\u0113ne\u0161iem_m\u0113nesis_m\u0113ne\u0161i".split("_"),MM:"m\u0113ne\u0161a_m\u0113ne\u0161iem_m\u0113nesis_m\u0113ne\u0161i".split("_"),y:"gada_gadiem_gads_gadi".split("_"),yy:"gada_gadiem_gads_gadi".split("_")};function $s(e,a,t){return t?a%10==1&&a%100!=11?e[2]:e[3]:a%10==1&&a%100!=11?e[0]:e[1]}function Qs(e,a,t){return e+" "+$s(Zs[t],e,a)}function Xs(e,a,t){return $s(Zs[t],e,a)}M.defineLocale("lv",{months:"janv\u0101ris_febru\u0101ris_marts_apr\u012blis_maijs_j\u016bnijs_j\u016blijs_augusts_septembris_oktobris_novembris_decembris".split("_"),monthsShort:"jan_feb_mar_apr_mai_j\u016bn_j\u016bl_aug_sep_okt_nov_dec".split("_"),weekdays:"sv\u0113tdiena_pirmdiena_otrdiena_tre\u0161diena_ceturtdiena_piektdiena_sestdiena".split("_"),weekdaysShort:"Sv_P_O_T_C_Pk_S".split("_"),weekdaysMin:"Sv_P_O_T_C_Pk_S".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY.",LL:"YYYY. [gada] D. MMMM",LLL:"YYYY. [gada] D. MMMM, HH:mm",LLLL:"YYYY. [gada] D. MMMM, dddd, HH:mm"},calendar:{sameDay:"[\u0160odien pulksten] LT",nextDay:"[R\u012bt pulksten] LT",nextWeek:"dddd [pulksten] LT",lastDay:"[Vakar pulksten] LT",lastWeek:"[Pag\u0101ju\u0161\u0101] dddd [pulksten] LT",sameElse:"L"},relativeTime:{future:"p\u0113c %s",past:"pirms %s",s:function(e,a){return a?"da\u017eas sekundes":"da\u017e\u0101m sekund\u0113m"},ss:Qs,m:Xs,mm:Qs,h:Xs,hh:Qs,d:Xs,dd:Qs,M:Xs,MM:Qs,y:Xs,yy:Qs},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});var en={words:{ss:["sekund","sekunda","sekundi"],m:["jedan minut","jednog minuta"],mm:["minut","minuta","minuta"],h:["jedan sat","jednog sata"],hh:["sat","sata","sati"],dd:["dan","dana","dana"],MM:["mjesec","mjeseca","mjeseci"],yy:["godina","godine","godina"]},correctGrammaticalCase:function(e,a){return 1===e?a[0]:2<=e&&e<=4?a[1]:a[2]},translate:function(e,a,t){var s=en.words[t];return 1===t.length?a?s[0]:s[1]:e+" "+en.correctGrammaticalCase(e,s)}};function an(e,a,t,s){switch(t){case"s":return a?"\u0445\u044d\u0434\u0445\u044d\u043d \u0441\u0435\u043a\u0443\u043d\u0434":"\u0445\u044d\u0434\u0445\u044d\u043d \u0441\u0435\u043a\u0443\u043d\u0434\u044b\u043d";case"ss":return e+(a?" \u0441\u0435\u043a\u0443\u043d\u0434":" \u0441\u0435\u043a\u0443\u043d\u0434\u044b\u043d");case"m":case"mm":return e+(a?" \u043c\u0438\u043d\u0443\u0442":" \u043c\u0438\u043d\u0443\u0442\u044b\u043d");case"h":case"hh":return e+(a?" \u0446\u0430\u0433":" \u0446\u0430\u0433\u0438\u0439\u043d");case"d":case"dd":return e+(a?" \u04e9\u0434\u04e9\u0440":" \u04e9\u0434\u0440\u0438\u0439\u043d");case"M":case"MM":return e+(a?" \u0441\u0430\u0440":" \u0441\u0430\u0440\u044b\u043d");case"y":case"yy":return e+(a?" \u0436\u0438\u043b":" \u0436\u0438\u043b\u0438\u0439\u043d");default:return e}}M.defineLocale("me",{months:"januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),monthsShort:"jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"nedjelja_ponedjeljak_utorak_srijeda_\u010detvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._\u010det._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_\u010de_pe_su".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sjutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedjelju] [u] LT";case 3:return"[u] [srijedu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[ju\u010de u] LT",lastWeek:function(){return["[pro\u0161le] [nedjelje] [u] LT","[pro\u0161log] [ponedjeljka] [u] LT","[pro\u0161log] [utorka] [u] LT","[pro\u0161le] [srijede] [u] LT","[pro\u0161log] [\u010detvrtka] [u] LT","[pro\u0161log] [petka] [u] LT","[pro\u0161le] [subote] [u] LT"][this.day()]},sameElse:"L"},relativeTime:{future:"za %s",past:"prije %s",s:"nekoliko sekundi",ss:en.translate,m:en.translate,mm:en.translate,h:en.translate,hh:en.translate,d:"dan",dd:en.translate,M:"mjesec",MM:en.translate,y:"godinu",yy:en.translate},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}}),M.defineLocale("mi",{months:"Kohi-t\u0101te_Hui-tanguru_Pout\u016b-te-rangi_Paenga-wh\u0101wh\u0101_Haratua_Pipiri_H\u014dngoingoi_Here-turi-k\u014dk\u0101_Mahuru_Whiringa-\u0101-nuku_Whiringa-\u0101-rangi_Hakihea".split("_"),monthsShort:"Kohi_Hui_Pou_Pae_Hara_Pipi_H\u014dngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"),monthsRegex:/(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,monthsStrictRegex:/(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,monthsShortRegex:/(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,monthsShortStrictRegex:/(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,weekdays:"R\u0101tapu_Mane_T\u016brei_Wenerei_T\u0101ite_Paraire_H\u0101tarei".split("_"),weekdaysShort:"Ta_Ma_T\u016b_We_T\u0101i_Pa_H\u0101".split("_"),weekdaysMin:"Ta_Ma_T\u016b_We_T\u0101i_Pa_H\u0101".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [i] HH:mm",LLLL:"dddd, D MMMM YYYY [i] HH:mm"},calendar:{sameDay:"[i teie mahana, i] LT",nextDay:"[apopo i] LT",nextWeek:"dddd [i] LT",lastDay:"[inanahi i] LT",lastWeek:"dddd [whakamutunga i] LT",sameElse:"L"},relativeTime:{future:"i roto i %s",past:"%s i mua",s:"te h\u0113kona ruarua",ss:"%d h\u0113kona",m:"he meneti",mm:"%d meneti",h:"te haora",hh:"%d haora",d:"he ra",dd:"%d ra",M:"he marama",MM:"%d marama",y:"he tau",yy:"%d tau"},dayOfMonthOrdinalParse:/\d{1,2}\xba/,ordinal:"%d\xba",week:{dow:1,doy:4}}),M.defineLocale("mk",{months:"\u0458\u0430\u043d\u0443\u0430\u0440\u0438_\u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0438\u043b_\u043c\u0430\u0458_\u0458\u0443\u043d\u0438_\u0458\u0443\u043b\u0438_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043f\u0442\u0435\u043c\u0432\u0440\u0438_\u043e\u043a\u0442\u043e\u043c\u0432\u0440\u0438_\u043d\u043e\u0435\u043c\u0432\u0440\u0438_\u0434\u0435\u043a\u0435\u043c\u0432\u0440\u0438".split("_"),monthsShort:"\u0458\u0430\u043d_\u0444\u0435\u0432_\u043c\u0430\u0440_\u0430\u043f\u0440_\u043c\u0430\u0458_\u0458\u0443\u043d_\u0458\u0443\u043b_\u0430\u0432\u0433_\u0441\u0435\u043f_\u043e\u043a\u0442_\u043d\u043e\u0435_\u0434\u0435\u043a".split("_"),weekdays:"\u043d\u0435\u0434\u0435\u043b\u0430_\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u043d\u0438\u043a_\u0432\u0442\u043e\u0440\u043d\u0438\u043a_\u0441\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0440\u0442\u043e\u043a_\u043f\u0435\u0442\u043e\u043a_\u0441\u0430\u0431\u043e\u0442\u0430".split("_"),weekdaysShort:"\u043d\u0435\u0434_\u043f\u043e\u043d_\u0432\u0442\u043e_\u0441\u0440\u0435_\u0447\u0435\u0442_\u043f\u0435\u0442_\u0441\u0430\u0431".split("_"),weekdaysMin:"\u043de_\u043fo_\u0432\u0442_\u0441\u0440_\u0447\u0435_\u043f\u0435_\u0441a".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"D.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},calendar:{sameDay:"[\u0414\u0435\u043d\u0435\u0441 \u0432\u043e] LT",nextDay:"[\u0423\u0442\u0440\u0435 \u0432\u043e] LT",nextWeek:"[\u0412\u043e] dddd [\u0432\u043e] LT",lastDay:"[\u0412\u0447\u0435\u0440\u0430 \u0432\u043e] LT",lastWeek:function(){switch(this.day()){case 0:case 3:case 6:return"[\u0418\u0437\u043c\u0438\u043d\u0430\u0442\u0430\u0442\u0430] dddd [\u0432\u043e] LT";case 1:case 2:case 4:case 5:return"[\u0418\u0437\u043c\u0438\u043d\u0430\u0442\u0438\u043e\u0442] dddd [\u0432\u043e] LT"}},sameElse:"L"},relativeTime:{future:"\u0437\u0430 %s",past:"\u043f\u0440\u0435\u0434 %s",s:"\u043d\u0435\u043a\u043e\u043b\u043a\u0443 \u0441\u0435\u043a\u0443\u043d\u0434\u0438",ss:"%d \u0441\u0435\u043a\u0443\u043d\u0434\u0438",m:"\u0435\u0434\u043d\u0430 \u043c\u0438\u043d\u0443\u0442\u0430",mm:"%d \u043c\u0438\u043d\u0443\u0442\u0438",h:"\u0435\u0434\u0435\u043d \u0447\u0430\u0441",hh:"%d \u0447\u0430\u0441\u0430",d:"\u0435\u0434\u0435\u043d \u0434\u0435\u043d",dd:"%d \u0434\u0435\u043d\u0430",M:"\u0435\u0434\u0435\u043d \u043c\u0435\u0441\u0435\u0446",MM:"%d \u043c\u0435\u0441\u0435\u0446\u0438",y:"\u0435\u0434\u043d\u0430 \u0433\u043e\u0434\u0438\u043d\u0430",yy:"%d \u0433\u043e\u0434\u0438\u043d\u0438"},dayOfMonthOrdinalParse:/\d{1,2}-(\u0435\u0432|\u0435\u043d|\u0442\u0438|\u0432\u0438|\u0440\u0438|\u043c\u0438)/,ordinal:function(e){var a=e%10,t=e%100;return 0===e?e+"-\u0435\u0432":0==t?e+"-\u0435\u043d":10<t&&t<20?e+"-\u0442\u0438":1==a?e+"-\u0432\u0438":2==a?e+"-\u0440\u0438":7==a||8==a?e+"-\u043c\u0438":e+"-\u0442\u0438"},week:{dow:1,doy:7}}),M.defineLocale("ml",{months:"\u0d1c\u0d28\u0d41\u0d35\u0d30\u0d3f_\u0d2b\u0d46\u0d2c\u0d4d\u0d30\u0d41\u0d35\u0d30\u0d3f_\u0d2e\u0d3e\u0d7c\u0d1a\u0d4d\u0d1a\u0d4d_\u0d0f\u0d2a\u0d4d\u0d30\u0d3f\u0d7d_\u0d2e\u0d47\u0d2f\u0d4d_\u0d1c\u0d42\u0d7a_\u0d1c\u0d42\u0d32\u0d48_\u0d13\u0d17\u0d38\u0d4d\u0d31\u0d4d\u0d31\u0d4d_\u0d38\u0d46\u0d2a\u0d4d\u0d31\u0d4d\u0d31\u0d02\u0d2c\u0d7c_\u0d12\u0d15\u0d4d\u0d1f\u0d4b\u0d2c\u0d7c_\u0d28\u0d35\u0d02\u0d2c\u0d7c_\u0d21\u0d3f\u0d38\u0d02\u0d2c\u0d7c".split("_"),monthsShort:"\u0d1c\u0d28\u0d41._\u0d2b\u0d46\u0d2c\u0d4d\u0d30\u0d41._\u0d2e\u0d3e\u0d7c._\u0d0f\u0d2a\u0d4d\u0d30\u0d3f._\u0d2e\u0d47\u0d2f\u0d4d_\u0d1c\u0d42\u0d7a_\u0d1c\u0d42\u0d32\u0d48._\u0d13\u0d17._\u0d38\u0d46\u0d2a\u0d4d\u0d31\u0d4d\u0d31._\u0d12\u0d15\u0d4d\u0d1f\u0d4b._\u0d28\u0d35\u0d02._\u0d21\u0d3f\u0d38\u0d02.".split("_"),monthsParseExact:!0,weekdays:"\u0d1e\u0d3e\u0d2f\u0d31\u0d3e\u0d34\u0d4d\u0d1a_\u0d24\u0d3f\u0d19\u0d4d\u0d15\u0d33\u0d3e\u0d34\u0d4d\u0d1a_\u0d1a\u0d4a\u0d35\u0d4d\u0d35\u0d3e\u0d34\u0d4d\u0d1a_\u0d2c\u0d41\u0d27\u0d28\u0d3e\u0d34\u0d4d\u0d1a_\u0d35\u0d4d\u0d2f\u0d3e\u0d34\u0d3e\u0d34\u0d4d\u0d1a_\u0d35\u0d46\u0d33\u0d4d\u0d33\u0d3f\u0d2f\u0d3e\u0d34\u0d4d\u0d1a_\u0d36\u0d28\u0d3f\u0d2f\u0d3e\u0d34\u0d4d\u0d1a".split("_"),weekdaysShort:"\u0d1e\u0d3e\u0d2f\u0d7c_\u0d24\u0d3f\u0d19\u0d4d\u0d15\u0d7e_\u0d1a\u0d4a\u0d35\u0d4d\u0d35_\u0d2c\u0d41\u0d27\u0d7b_\u0d35\u0d4d\u0d2f\u0d3e\u0d34\u0d02_\u0d35\u0d46\u0d33\u0d4d\u0d33\u0d3f_\u0d36\u0d28\u0d3f".split("_"),weekdaysMin:"\u0d1e\u0d3e_\u0d24\u0d3f_\u0d1a\u0d4a_\u0d2c\u0d41_\u0d35\u0d4d\u0d2f\u0d3e_\u0d35\u0d46_\u0d36".split("_"),longDateFormat:{LT:"A h:mm -\u0d28\u0d41",LTS:"A h:mm:ss -\u0d28\u0d41",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm -\u0d28\u0d41",LLLL:"dddd, D MMMM YYYY, A h:mm -\u0d28\u0d41"},calendar:{sameDay:"[\u0d07\u0d28\u0d4d\u0d28\u0d4d] LT",nextDay:"[\u0d28\u0d3e\u0d33\u0d46] LT",nextWeek:"dddd, LT",lastDay:"[\u0d07\u0d28\u0d4d\u0d28\u0d32\u0d46] LT",lastWeek:"[\u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e] dddd, LT",sameElse:"L"},relativeTime:{future:"%s \u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e\u0d4d",past:"%s \u0d2e\u0d41\u0d7b\u0d2a\u0d4d",s:"\u0d05\u0d7d\u0d2a \u0d28\u0d3f\u0d2e\u0d3f\u0d37\u0d19\u0d4d\u0d19\u0d7e",ss:"%d \u0d38\u0d46\u0d15\u0d4d\u0d15\u0d7b\u0d21\u0d4d",m:"\u0d12\u0d30\u0d41 \u0d2e\u0d3f\u0d28\u0d3f\u0d31\u0d4d\u0d31\u0d4d",mm:"%d \u0d2e\u0d3f\u0d28\u0d3f\u0d31\u0d4d\u0d31\u0d4d",h:"\u0d12\u0d30\u0d41 \u0d2e\u0d23\u0d3f\u0d15\u0d4d\u0d15\u0d42\u0d7c",hh:"%d \u0d2e\u0d23\u0d3f\u0d15\u0d4d\u0d15\u0d42\u0d7c",d:"\u0d12\u0d30\u0d41 \u0d26\u0d3f\u0d35\u0d38\u0d02",dd:"%d \u0d26\u0d3f\u0d35\u0d38\u0d02",M:"\u0d12\u0d30\u0d41 \u0d2e\u0d3e\u0d38\u0d02",MM:"%d \u0d2e\u0d3e\u0d38\u0d02",y:"\u0d12\u0d30\u0d41 \u0d35\u0d7c\u0d37\u0d02",yy:"%d \u0d35\u0d7c\u0d37\u0d02"},meridiemParse:/\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f|\u0d30\u0d3e\u0d35\u0d3f\u0d32\u0d46|\u0d09\u0d1a\u0d4d\u0d1a \u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e\u0d4d|\u0d35\u0d48\u0d15\u0d41\u0d28\u0d4d\u0d28\u0d47\u0d30\u0d02|\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f/i,meridiemHour:function(e,a){return 12===e&&(e=0),"\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f"===a&&4<=e||"\u0d09\u0d1a\u0d4d\u0d1a \u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e\u0d4d"===a||"\u0d35\u0d48\u0d15\u0d41\u0d28\u0d4d\u0d28\u0d47\u0d30\u0d02"===a?e+12:e},meridiem:function(e,a,t){return e<4?"\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f":e<12?"\u0d30\u0d3e\u0d35\u0d3f\u0d32\u0d46":e<17?"\u0d09\u0d1a\u0d4d\u0d1a \u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e\u0d4d":e<20?"\u0d35\u0d48\u0d15\u0d41\u0d28\u0d4d\u0d28\u0d47\u0d30\u0d02":"\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f"}}),M.defineLocale("mn",{months:"\u041d\u044d\u0433\u0434\u04af\u0433\u044d\u044d\u0440 \u0441\u0430\u0440_\u0425\u043e\u0451\u0440\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0413\u0443\u0440\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0414\u04e9\u0440\u04e9\u0432\u0434\u04af\u0433\u044d\u044d\u0440 \u0441\u0430\u0440_\u0422\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0417\u0443\u0440\u0433\u0430\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0414\u043e\u043b\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u041d\u0430\u0439\u043c\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0415\u0441\u0434\u04af\u0433\u044d\u044d\u0440 \u0441\u0430\u0440_\u0410\u0440\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0410\u0440\u0432\u0430\u043d \u043d\u044d\u0433\u0434\u04af\u0433\u044d\u044d\u0440 \u0441\u0430\u0440_\u0410\u0440\u0432\u0430\u043d \u0445\u043e\u0451\u0440\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440".split("_"),monthsShort:"1 \u0441\u0430\u0440_2 \u0441\u0430\u0440_3 \u0441\u0430\u0440_4 \u0441\u0430\u0440_5 \u0441\u0430\u0440_6 \u0441\u0430\u0440_7 \u0441\u0430\u0440_8 \u0441\u0430\u0440_9 \u0441\u0430\u0440_10 \u0441\u0430\u0440_11 \u0441\u0430\u0440_12 \u0441\u0430\u0440".split("_"),monthsParseExact:!0,weekdays:"\u041d\u044f\u043c_\u0414\u0430\u0432\u0430\u0430_\u041c\u044f\u0433\u043c\u0430\u0440_\u041b\u0445\u0430\u0433\u0432\u0430_\u041f\u04af\u0440\u044d\u0432_\u0411\u0430\u0430\u0441\u0430\u043d_\u0411\u044f\u043c\u0431\u0430".split("_"),weekdaysShort:"\u041d\u044f\u043c_\u0414\u0430\u0432_\u041c\u044f\u0433_\u041b\u0445\u0430_\u041f\u04af\u0440_\u0411\u0430\u0430_\u0411\u044f\u043c".split("_"),weekdaysMin:"\u041d\u044f_\u0414\u0430_\u041c\u044f_\u041b\u0445_\u041f\u04af_\u0411\u0430_\u0411\u044f".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY \u043e\u043d\u044b MMMM\u044b\u043d D",LLL:"YYYY \u043e\u043d\u044b MMMM\u044b\u043d D HH:mm",LLLL:"dddd, YYYY \u043e\u043d\u044b MMMM\u044b\u043d D HH:mm"},meridiemParse:/\u04ae\u04e8|\u04ae\u0425/i,isPM:function(e){return"\u04ae\u0425"===e},meridiem:function(e,a,t){return e<12?"\u04ae\u04e8":"\u04ae\u0425"},calendar:{sameDay:"[\u04e8\u043d\u04e9\u04e9\u0434\u04e9\u0440] LT",nextDay:"[\u041c\u0430\u0440\u0433\u0430\u0430\u0448] LT",nextWeek:"[\u0418\u0440\u044d\u0445] dddd LT",lastDay:"[\u04e8\u0447\u0438\u0433\u0434\u04e9\u0440] LT",lastWeek:"[\u04e8\u043d\u0433\u04e9\u0440\u0441\u04e9\u043d] dddd LT",sameElse:"L"},relativeTime:{future:"%s \u0434\u0430\u0440\u0430\u0430",past:"%s \u04e9\u043c\u043d\u04e9",s:an,ss:an,m:an,mm:an,h:an,hh:an,d:an,dd:an,M:an,MM:an,y:an,yy:an},dayOfMonthOrdinalParse:/\d{1,2} \u04e9\u0434\u04e9\u0440/,ordinal:function(e,a){switch(a){case"d":case"D":case"DDD":return e+" \u04e9\u0434\u04e9\u0440";default:return e}}});var tn={1:"\u0967",2:"\u0968",3:"\u0969",4:"\u096a",5:"\u096b",6:"\u096c",7:"\u096d",8:"\u096e",9:"\u096f",0:"\u0966"},sn={"\u0967":"1","\u0968":"2","\u0969":"3","\u096a":"4","\u096b":"5","\u096c":"6","\u096d":"7","\u096e":"8","\u096f":"9","\u0966":"0"};function nn(e,a,t,s){var n="";if(a)switch(t){case"s":n="\u0915\u093e\u0939\u0940 \u0938\u0947\u0915\u0902\u0926";break;case"ss":n="%d \u0938\u0947\u0915\u0902\u0926";break;case"m":n="\u090f\u0915 \u092e\u093f\u0928\u093f\u091f";break;case"mm":n="%d \u092e\u093f\u0928\u093f\u091f\u0947";break;case"h":n="\u090f\u0915 \u0924\u093e\u0938";break;case"hh":n="%d \u0924\u093e\u0938";break;case"d":n="\u090f\u0915 \u0926\u093f\u0935\u0938";break;case"dd":n="%d \u0926\u093f\u0935\u0938";break;case"M":n="\u090f\u0915 \u092e\u0939\u093f\u0928\u093e";break;case"MM":n="%d \u092e\u0939\u093f\u0928\u0947";break;case"y":n="\u090f\u0915 \u0935\u0930\u094d\u0937";break;case"yy":n="%d \u0935\u0930\u094d\u0937\u0947";break}else switch(t){case"s":n="\u0915\u093e\u0939\u0940 \u0938\u0947\u0915\u0902\u0926\u093e\u0902";break;case"ss":n="%d \u0938\u0947\u0915\u0902\u0926\u093e\u0902";break;case"m":n="\u090f\u0915\u093e \u092e\u093f\u0928\u093f\u091f\u093e";break;case"mm":n="%d \u092e\u093f\u0928\u093f\u091f\u093e\u0902";break;case"h":n="\u090f\u0915\u093e \u0924\u093e\u0938\u093e";break;case"hh":n="%d \u0924\u093e\u0938\u093e\u0902";break;case"d":n="\u090f\u0915\u093e \u0926\u093f\u0935\u0938\u093e";break;case"dd":n="%d \u0926\u093f\u0935\u0938\u093e\u0902";break;case"M":n="\u090f\u0915\u093e \u092e\u0939\u093f\u0928\u094d\u092f\u093e";break;case"MM":n="%d \u092e\u0939\u093f\u0928\u094d\u092f\u093e\u0902";break;case"y":n="\u090f\u0915\u093e \u0935\u0930\u094d\u0937\u093e";break;case"yy":n="%d \u0935\u0930\u094d\u0937\u093e\u0902";break}return n.replace(/%d/i,e)}M.defineLocale("mr",{months:"\u091c\u093e\u0928\u0947\u0935\u093e\u0930\u0940_\u092b\u0947\u092c\u094d\u0930\u0941\u0935\u093e\u0930\u0940_\u092e\u093e\u0930\u094d\u091a_\u090f\u092a\u094d\u0930\u093f\u0932_\u092e\u0947_\u091c\u0942\u0928_\u091c\u0941\u0932\u0948_\u0911\u0917\u0938\u094d\u091f_\u0938\u092a\u094d\u091f\u0947\u0902\u092c\u0930_\u0911\u0915\u094d\u091f\u094b\u092c\u0930_\u0928\u094b\u0935\u094d\u0939\u0947\u0902\u092c\u0930_\u0921\u093f\u0938\u0947\u0902\u092c\u0930".split("_"),monthsShort:"\u091c\u093e\u0928\u0947._\u092b\u0947\u092c\u094d\u0930\u0941._\u092e\u093e\u0930\u094d\u091a._\u090f\u092a\u094d\u0930\u093f._\u092e\u0947._\u091c\u0942\u0928._\u091c\u0941\u0932\u0948._\u0911\u0917._\u0938\u092a\u094d\u091f\u0947\u0902._\u0911\u0915\u094d\u091f\u094b._\u0928\u094b\u0935\u094d\u0939\u0947\u0902._\u0921\u093f\u0938\u0947\u0902.".split("_"),monthsParseExact:!0,weekdays:"\u0930\u0935\u093f\u0935\u093e\u0930_\u0938\u094b\u092e\u0935\u093e\u0930_\u092e\u0902\u0917\u0933\u0935\u093e\u0930_\u092c\u0941\u0927\u0935\u093e\u0930_\u0917\u0941\u0930\u0942\u0935\u093e\u0930_\u0936\u0941\u0915\u094d\u0930\u0935\u093e\u0930_\u0936\u0928\u093f\u0935\u093e\u0930".split("_"),weekdaysShort:"\u0930\u0935\u093f_\u0938\u094b\u092e_\u092e\u0902\u0917\u0933_\u092c\u0941\u0927_\u0917\u0941\u0930\u0942_\u0936\u0941\u0915\u094d\u0930_\u0936\u0928\u093f".split("_"),weekdaysMin:"\u0930_\u0938\u094b_\u092e\u0902_\u092c\u0941_\u0917\u0941_\u0936\u0941_\u0936".split("_"),longDateFormat:{LT:"A h:mm \u0935\u093e\u091c\u0924\u093e",LTS:"A h:mm:ss \u0935\u093e\u091c\u0924\u093e",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm \u0935\u093e\u091c\u0924\u093e",LLLL:"dddd, D MMMM YYYY, A h:mm \u0935\u093e\u091c\u0924\u093e"},calendar:{sameDay:"[\u0906\u091c] LT",nextDay:"[\u0909\u0926\u094d\u092f\u093e] LT",nextWeek:"dddd, LT",lastDay:"[\u0915\u093e\u0932] LT",lastWeek:"[\u092e\u093e\u0917\u0940\u0932] dddd, LT",sameElse:"L"},relativeTime:{future:"%s\u092e\u0927\u094d\u092f\u0947",past:"%s\u092a\u0942\u0930\u094d\u0935\u0940",s:nn,ss:nn,m:nn,mm:nn,h:nn,hh:nn,d:nn,dd:nn,M:nn,MM:nn,y:nn,yy:nn},preparse:function(e){return e.replace(/[\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f\u0966]/g,function(e){return sn[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return tn[e]})},meridiemParse:/\u092a\u0939\u093e\u091f\u0947|\u0938\u0915\u093e\u0933\u0940|\u0926\u0941\u092a\u093e\u0930\u0940|\u0938\u093e\u092f\u0902\u0915\u093e\u0933\u0940|\u0930\u093e\u0924\u094d\u0930\u0940/,meridiemHour:function(e,a){return 12===e&&(e=0),"\u092a\u0939\u093e\u091f\u0947"===a||"\u0938\u0915\u093e\u0933\u0940"===a?e:"\u0926\u0941\u092a\u093e\u0930\u0940"===a||"\u0938\u093e\u092f\u0902\u0915\u093e\u0933\u0940"===a||"\u0930\u093e\u0924\u094d\u0930\u0940"===a?12<=e?e:e+12:void 0},meridiem:function(e,a,t){return 0<=e&&e<6?"\u092a\u0939\u093e\u091f\u0947":e<12?"\u0938\u0915\u093e\u0933\u0940":e<17?"\u0926\u0941\u092a\u093e\u0930\u0940":e<20?"\u0938\u093e\u092f\u0902\u0915\u093e\u0933\u0940":"\u0930\u093e\u0924\u094d\u0930\u0940"},week:{dow:0,doy:6}}),M.defineLocale("ms-my",{months:"Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),monthsShort:"Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),weekdays:"Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),weekdaysShort:"Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),weekdaysMin:"Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/pagi|tengahari|petang|malam/,meridiemHour:function(e,a){return 12===e&&(e=0),"pagi"===a?e:"tengahari"===a?11<=e?e:e+12:"petang"===a||"malam"===a?e+12:void 0},meridiem:function(e,a,t){return e<11?"pagi":e<15?"tengahari":e<19?"petang":"malam"},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Esok pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kelmarin pukul] LT",lastWeek:"dddd [lepas pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lepas",s:"beberapa saat",ss:"%d saat",m:"seminit",mm:"%d minit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:1,doy:7}}),M.defineLocale("ms",{months:"Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),monthsShort:"Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),weekdays:"Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),weekdaysShort:"Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),weekdaysMin:"Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/pagi|tengahari|petang|malam/,meridiemHour:function(e,a){return 12===e&&(e=0),"pagi"===a?e:"tengahari"===a?11<=e?e:e+12:"petang"===a||"malam"===a?e+12:void 0},meridiem:function(e,a,t){return e<11?"pagi":e<15?"tengahari":e<19?"petang":"malam"},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Esok pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kelmarin pukul] LT",lastWeek:"dddd [lepas pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lepas",s:"beberapa saat",ss:"%d saat",m:"seminit",mm:"%d minit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:1,doy:7}}),M.defineLocale("mt",{months:"Jannar_Frar_Marzu_April_Mejju_\u0120unju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Di\u010bembru".split("_"),monthsShort:"Jan_Fra_Mar_Apr_Mej_\u0120un_Lul_Aww_Set_Ott_Nov_Di\u010b".split("_"),weekdays:"Il-\u0126add_It-Tnejn_It-Tlieta_L-Erbg\u0127a_Il-\u0126amis_Il-\u0120img\u0127a_Is-Sibt".split("_"),weekdaysShort:"\u0126ad_Tne_Tli_Erb_\u0126am_\u0120im_Sib".split("_"),weekdaysMin:"\u0126a_Tn_Tl_Er_\u0126a_\u0120i_Si".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Illum fil-]LT",nextDay:"[G\u0127ada fil-]LT",nextWeek:"dddd [fil-]LT",lastDay:"[Il-biera\u0127 fil-]LT",lastWeek:"dddd [li g\u0127adda] [fil-]LT",sameElse:"L"},relativeTime:{future:"f\u2019 %s",past:"%s ilu",s:"ftit sekondi",ss:"%d sekondi",m:"minuta",mm:"%d minuti",h:"sieg\u0127a",hh:"%d sieg\u0127at",d:"\u0121urnata",dd:"%d \u0121ranet",M:"xahar",MM:"%d xhur",y:"sena",yy:"%d sni"},dayOfMonthOrdinalParse:/\d{1,2}\xba/,ordinal:"%d\xba",week:{dow:1,doy:4}});var rn={1:"\u1041",2:"\u1042",3:"\u1043",4:"\u1044",5:"\u1045",6:"\u1046",7:"\u1047",8:"\u1048",9:"\u1049",0:"\u1040"},dn={"\u1041":"1","\u1042":"2","\u1043":"3","\u1044":"4","\u1045":"5","\u1046":"6","\u1047":"7","\u1048":"8","\u1049":"9","\u1040":"0"},_n=(M.defineLocale("my",{months:"\u1007\u1014\u103a\u1014\u101d\u102b\u101b\u102e_\u1016\u1031\u1016\u1031\u102c\u103a\u101d\u102b\u101b\u102e_\u1019\u1010\u103a_\u1027\u1015\u103c\u102e_\u1019\u1031_\u1007\u103d\u1014\u103a_\u1007\u1030\u101c\u102d\u102f\u1004\u103a_\u101e\u103c\u1002\u102f\u1010\u103a_\u1005\u1000\u103a\u1010\u1004\u103a\u1018\u102c_\u1021\u1031\u102c\u1000\u103a\u1010\u102d\u102f\u1018\u102c_\u1014\u102d\u102f\u101d\u1004\u103a\u1018\u102c_\u1012\u102e\u1007\u1004\u103a\u1018\u102c".split("_"),monthsShort:"\u1007\u1014\u103a_\u1016\u1031_\u1019\u1010\u103a_\u1015\u103c\u102e_\u1019\u1031_\u1007\u103d\u1014\u103a_\u101c\u102d\u102f\u1004\u103a_\u101e\u103c_\u1005\u1000\u103a_\u1021\u1031\u102c\u1000\u103a_\u1014\u102d\u102f_\u1012\u102e".split("_"),weekdays:"\u1010\u1014\u1004\u103a\u1039\u1002\u1014\u103d\u1031_\u1010\u1014\u1004\u103a\u1039\u101c\u102c_\u1021\u1004\u103a\u1039\u1002\u102b_\u1017\u102f\u1012\u1039\u1013\u101f\u1030\u1038_\u1000\u103c\u102c\u101e\u1015\u1010\u1031\u1038_\u101e\u1031\u102c\u1000\u103c\u102c_\u1005\u1014\u1031".split("_"),weekdaysShort:"\u1014\u103d\u1031_\u101c\u102c_\u1002\u102b_\u101f\u1030\u1038_\u1000\u103c\u102c_\u101e\u1031\u102c_\u1014\u1031".split("_"),weekdaysMin:"\u1014\u103d\u1031_\u101c\u102c_\u1002\u102b_\u101f\u1030\u1038_\u1000\u103c\u102c_\u101e\u1031\u102c_\u1014\u1031".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[\u101a\u1014\u1031.] LT [\u1019\u103e\u102c]",nextDay:"[\u1019\u1014\u1000\u103a\u1016\u103c\u1014\u103a] LT [\u1019\u103e\u102c]",nextWeek:"dddd LT [\u1019\u103e\u102c]",lastDay:"[\u1019\u1014\u1031.\u1000] LT [\u1019\u103e\u102c]",lastWeek:"[\u1015\u103c\u102e\u1038\u1001\u1032\u1037\u101e\u1031\u102c] dddd LT [\u1019\u103e\u102c]",sameElse:"L"},relativeTime:{future:"\u101c\u102c\u1019\u100a\u103a\u1037 %s \u1019\u103e\u102c",past:"\u101c\u103d\u1014\u103a\u1001\u1032\u1037\u101e\u1031\u102c %s \u1000",s:"\u1005\u1000\u1039\u1000\u1014\u103a.\u1021\u1014\u100a\u103a\u1038\u1004\u101a\u103a",ss:"%d \u1005\u1000\u1039\u1000\u1014\u1037\u103a",m:"\u1010\u1005\u103a\u1019\u102d\u1014\u1005\u103a",mm:"%d \u1019\u102d\u1014\u1005\u103a",h:"\u1010\u1005\u103a\u1014\u102c\u101b\u102e",hh:"%d \u1014\u102c\u101b\u102e",d:"\u1010\u1005\u103a\u101b\u1000\u103a",dd:"%d \u101b\u1000\u103a",M:"\u1010\u1005\u103a\u101c",MM:"%d \u101c",y:"\u1010\u1005\u103a\u1014\u103e\u1005\u103a",yy:"%d \u1014\u103e\u1005\u103a"},preparse:function(e){return e.replace(/[\u1041\u1042\u1043\u1044\u1045\u1046\u1047\u1048\u1049\u1040]/g,function(e){return dn[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return rn[e]})},week:{dow:1,doy:4}}),M.defineLocale("nb",{months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.".split("_"),monthsParseExact:!0,weekdays:"s\xf8ndag_mandag_tirsdag_onsdag_torsdag_fredag_l\xf8rdag".split("_"),weekdaysShort:"s\xf8._ma._ti._on._to._fr._l\xf8.".split("_"),weekdaysMin:"s\xf8_ma_ti_on_to_fr_l\xf8".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},calendar:{sameDay:"[i dag kl.] LT",nextDay:"[i morgen kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[i g\xe5r kl.] LT",lastWeek:"[forrige] dddd [kl.] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",ss:"%d sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",w:"en uke",ww:"%d uker",M:"en m\xe5ned",MM:"%d m\xe5neder",y:"ett \xe5r",yy:"%d \xe5r"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),{1:"\u0967",2:"\u0968",3:"\u0969",4:"\u096a",5:"\u096b",6:"\u096c",7:"\u096d",8:"\u096e",9:"\u096f",0:"\u0966"}),on={"\u0967":"1","\u0968":"2","\u0969":"3","\u096a":"4","\u096b":"5","\u096c":"6","\u096d":"7","\u096e":"8","\u096f":"9","\u0966":"0"},mn=(M.defineLocale("ne",{months:"\u091c\u0928\u0935\u0930\u0940_\u092b\u0947\u092c\u094d\u0930\u0941\u0935\u0930\u0940_\u092e\u093e\u0930\u094d\u091a_\u0905\u092a\u094d\u0930\u093f\u0932_\u092e\u0908_\u091c\u0941\u0928_\u091c\u0941\u0932\u093e\u0908_\u0905\u0917\u0937\u094d\u091f_\u0938\u0947\u092a\u094d\u091f\u0947\u092e\u094d\u092c\u0930_\u0905\u0915\u094d\u091f\u094b\u092c\u0930_\u0928\u094b\u092d\u0947\u092e\u094d\u092c\u0930_\u0921\u093f\u0938\u0947\u092e\u094d\u092c\u0930".split("_"),monthsShort:"\u091c\u0928._\u092b\u0947\u092c\u094d\u0930\u0941._\u092e\u093e\u0930\u094d\u091a_\u0905\u092a\u094d\u0930\u093f._\u092e\u0908_\u091c\u0941\u0928_\u091c\u0941\u0932\u093e\u0908._\u0905\u0917._\u0938\u0947\u092a\u094d\u091f._\u0905\u0915\u094d\u091f\u094b._\u0928\u094b\u092d\u0947._\u0921\u093f\u0938\u0947.".split("_"),monthsParseExact:!0,weekdays:"\u0906\u0907\u0924\u092c\u093e\u0930_\u0938\u094b\u092e\u092c\u093e\u0930_\u092e\u0919\u094d\u0917\u0932\u092c\u093e\u0930_\u092c\u0941\u0927\u092c\u093e\u0930_\u092c\u093f\u0939\u093f\u092c\u093e\u0930_\u0936\u0941\u0915\u094d\u0930\u092c\u093e\u0930_\u0936\u0928\u093f\u092c\u093e\u0930".split("_"),weekdaysShort:"\u0906\u0907\u0924._\u0938\u094b\u092e._\u092e\u0919\u094d\u0917\u0932._\u092c\u0941\u0927._\u092c\u093f\u0939\u093f._\u0936\u0941\u0915\u094d\u0930._\u0936\u0928\u093f.".split("_"),weekdaysMin:"\u0906._\u0938\u094b._\u092e\u0902._\u092c\u0941._\u092c\u093f._\u0936\u0941._\u0936.".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"A\u0915\u094b h:mm \u092c\u091c\u0947",LTS:"A\u0915\u094b h:mm:ss \u092c\u091c\u0947",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A\u0915\u094b h:mm \u092c\u091c\u0947",LLLL:"dddd, D MMMM YYYY, A\u0915\u094b h:mm \u092c\u091c\u0947"},preparse:function(e){return e.replace(/[\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f\u0966]/g,function(e){return on[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return _n[e]})},meridiemParse:/\u0930\u093e\u0924\u093f|\u092c\u093f\u0939\u093e\u0928|\u0926\u093f\u0909\u0901\u0938\u094b|\u0938\u093e\u0901\u091d/,meridiemHour:function(e,a){return 12===e&&(e=0),"\u0930\u093e\u0924\u093f"===a?e<4?e:e+12:"\u092c\u093f\u0939\u093e\u0928"===a?e:"\u0926\u093f\u0909\u0901\u0938\u094b"===a?10<=e?e:e+12:"\u0938\u093e\u0901\u091d"===a?e+12:void 0},meridiem:function(e,a,t){return e<3?"\u0930\u093e\u0924\u093f":e<12?"\u092c\u093f\u0939\u093e\u0928":e<16?"\u0926\u093f\u0909\u0901\u0938\u094b":e<20?"\u0938\u093e\u0901\u091d":"\u0930\u093e\u0924\u093f"},calendar:{sameDay:"[\u0906\u091c] LT",nextDay:"[\u092d\u094b\u0932\u093f] LT",nextWeek:"[\u0906\u0909\u0901\u0926\u094b] dddd[,] LT",lastDay:"[\u0939\u093f\u091c\u094b] LT",lastWeek:"[\u0917\u090f\u0915\u094b] dddd[,] LT",sameElse:"L"},relativeTime:{future:"%s\u092e\u093e",past:"%s \u0905\u0917\u093e\u0921\u093f",s:"\u0915\u0947\u0939\u0940 \u0915\u094d\u0937\u0923",ss:"%d \u0938\u0947\u0915\u0947\u0923\u094d\u0921",m:"\u090f\u0915 \u092e\u093f\u0928\u0947\u091f",mm:"%d \u092e\u093f\u0928\u0947\u091f",h:"\u090f\u0915 \u0918\u0923\u094d\u091f\u093e",hh:"%d \u0918\u0923\u094d\u091f\u093e",d:"\u090f\u0915 \u0926\u093f\u0928",dd:"%d \u0926\u093f\u0928",M:"\u090f\u0915 \u092e\u0939\u093f\u0928\u093e",MM:"%d \u092e\u0939\u093f\u0928\u093e",y:"\u090f\u0915 \u092c\u0930\u094d\u0937",yy:"%d \u092c\u0930\u094d\u0937"},week:{dow:0,doy:6}}),"jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_")),un="jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),c=[/^jan/i,/^feb/i,/^maart|mrt.?$/i,/^apr/i,/^mei$/i,/^jun[i.]?$/i,/^jul[i.]?$/i,/^aug/i,/^sep/i,/^okt/i,/^nov/i,/^dec/i],L=/^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,ln=(M.defineLocale("nl-be",{months:"januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),monthsShort:function(e,a){return e?(/-MMM-/.test(a)?un:mn)[e.month()]:mn},monthsRegex:L,monthsShortRegex:L,monthsStrictRegex:/^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,monthsShortStrictRegex:/^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,monthsParse:c,longMonthsParse:c,shortMonthsParse:c,weekdays:"zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),weekdaysShort:"zo._ma._di._wo._do._vr._za.".split("_"),weekdaysMin:"zo_ma_di_wo_do_vr_za".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[vandaag om] LT",nextDay:"[morgen om] LT",nextWeek:"dddd [om] LT",lastDay:"[gisteren om] LT",lastWeek:"[afgelopen] dddd [om] LT",sameElse:"L"},relativeTime:{future:"over %s",past:"%s geleden",s:"een paar seconden",ss:"%d seconden",m:"\xe9\xe9n minuut",mm:"%d minuten",h:"\xe9\xe9n uur",hh:"%d uur",d:"\xe9\xe9n dag",dd:"%d dagen",M:"\xe9\xe9n maand",MM:"%d maanden",y:"\xe9\xe9n jaar",yy:"%d jaar"},dayOfMonthOrdinalParse:/\d{1,2}(ste|de)/,ordinal:function(e){return e+(1===e||8===e||20<=e?"ste":"de")},week:{dow:1,doy:4}}),"jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_")),Mn="jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),f=[/^jan/i,/^feb/i,/^maart|mrt.?$/i,/^apr/i,/^mei$/i,/^jun[i.]?$/i,/^jul[i.]?$/i,/^aug/i,/^sep/i,/^okt/i,/^nov/i,/^dec/i],ke=/^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,hn=(M.defineLocale("nl",{months:"januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),monthsShort:function(e,a){return e?(/-MMM-/.test(a)?Mn:ln)[e.month()]:ln},monthsRegex:ke,monthsShortRegex:ke,monthsStrictRegex:/^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,monthsShortStrictRegex:/^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,monthsParse:f,longMonthsParse:f,shortMonthsParse:f,weekdays:"zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),weekdaysShort:"zo._ma._di._wo._do._vr._za.".split("_"),weekdaysMin:"zo_ma_di_wo_do_vr_za".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[vandaag om] LT",nextDay:"[morgen om] LT",nextWeek:"dddd [om] LT",lastDay:"[gisteren om] LT",lastWeek:"[afgelopen] dddd [om] LT",sameElse:"L"},relativeTime:{future:"over %s",past:"%s geleden",s:"een paar seconden",ss:"%d seconden",m:"\xe9\xe9n minuut",mm:"%d minuten",h:"\xe9\xe9n uur",hh:"%d uur",d:"\xe9\xe9n dag",dd:"%d dagen",w:"\xe9\xe9n week",ww:"%d weken",M:"\xe9\xe9n maand",MM:"%d maanden",y:"\xe9\xe9n jaar",yy:"%d jaar"},dayOfMonthOrdinalParse:/\d{1,2}(ste|de)/,ordinal:function(e){return e+(1===e||8===e||20<=e?"ste":"de")},week:{dow:1,doy:4}}),M.defineLocale("nn",{months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.".split("_"),monthsParseExact:!0,weekdays:"sundag_m\xe5ndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),weekdaysShort:"su._m\xe5._ty._on._to._fr._lau.".split("_"),weekdaysMin:"su_m\xe5_ty_on_to_fr_la".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] H:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},calendar:{sameDay:"[I dag klokka] LT",nextDay:"[I morgon klokka] LT",nextWeek:"dddd [klokka] LT",lastDay:"[I g\xe5r klokka] LT",lastWeek:"[F\xf8reg\xe5ande] dddd [klokka] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"%s sidan",s:"nokre sekund",ss:"%d sekund",m:"eit minutt",mm:"%d minutt",h:"ein time",hh:"%d timar",d:"ein dag",dd:"%d dagar",w:"ei veke",ww:"%d veker",M:"ein m\xe5nad",MM:"%d m\xe5nader",y:"eit \xe5r",yy:"%d \xe5r"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),M.defineLocale("oc-lnc",{months:{standalone:"geni\xe8r_febri\xe8r_mar\xe7_abril_mai_junh_julhet_agost_setembre_oct\xf2bre_novembre_decembre".split("_"),format:"de geni\xe8r_de febri\xe8r_de mar\xe7_d'abril_de mai_de junh_de julhet_d'agost_de setembre_d'oct\xf2bre_de novembre_de decembre".split("_"),isFormat:/D[oD]?(\s)+MMMM/},monthsShort:"gen._febr._mar\xe7_abr._mai_junh_julh._ago._set._oct._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"dimenge_diluns_dimars_dim\xe8cres_dij\xf2us_divendres_dissabte".split("_"),weekdaysShort:"dg._dl._dm._dc._dj._dv._ds.".split("_"),weekdaysMin:"dg_dl_dm_dc_dj_dv_ds".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM [de] YYYY",ll:"D MMM YYYY",LLL:"D MMMM [de] YYYY [a] H:mm",lll:"D MMM YYYY, H:mm",LLLL:"dddd D MMMM [de] YYYY [a] H:mm",llll:"ddd D MMM YYYY, H:mm"},calendar:{sameDay:"[u\xe8i a] LT",nextDay:"[deman a] LT",nextWeek:"dddd [a] LT",lastDay:"[i\xe8r a] LT",lastWeek:"dddd [passat a] LT",sameElse:"L"},relativeTime:{future:"d'aqu\xed %s",past:"fa %s",s:"unas segondas",ss:"%d segondas",m:"una minuta",mm:"%d minutas",h:"una ora",hh:"%d oras",d:"un jorn",dd:"%d jorns",M:"un mes",MM:"%d meses",y:"un an",yy:"%d ans"},dayOfMonthOrdinalParse:/\d{1,2}(r|n|t|\xe8|a)/,ordinal:function(e,a){return e+("w"!==a&&"W"!==a?1===e?"r":2===e?"n":3===e?"r":4===e?"t":"\xe8":"a")},week:{dow:1,doy:4}}),{1:"\u0a67",2:"\u0a68",3:"\u0a69",4:"\u0a6a",5:"\u0a6b",6:"\u0a6c",7:"\u0a6d",8:"\u0a6e",9:"\u0a6f",0:"\u0a66"}),cn={"\u0a67":"1","\u0a68":"2","\u0a69":"3","\u0a6a":"4","\u0a6b":"5","\u0a6c":"6","\u0a6d":"7","\u0a6e":"8","\u0a6f":"9","\u0a66":"0"},Ln=(M.defineLocale("pa-in",{months:"\u0a1c\u0a28\u0a35\u0a30\u0a40_\u0a2b\u0a3c\u0a30\u0a35\u0a30\u0a40_\u0a2e\u0a3e\u0a30\u0a1a_\u0a05\u0a2a\u0a4d\u0a30\u0a48\u0a32_\u0a2e\u0a08_\u0a1c\u0a42\u0a28_\u0a1c\u0a41\u0a32\u0a3e\u0a08_\u0a05\u0a17\u0a38\u0a24_\u0a38\u0a24\u0a70\u0a2c\u0a30_\u0a05\u0a15\u0a24\u0a42\u0a2c\u0a30_\u0a28\u0a35\u0a70\u0a2c\u0a30_\u0a26\u0a38\u0a70\u0a2c\u0a30".split("_"),monthsShort:"\u0a1c\u0a28\u0a35\u0a30\u0a40_\u0a2b\u0a3c\u0a30\u0a35\u0a30\u0a40_\u0a2e\u0a3e\u0a30\u0a1a_\u0a05\u0a2a\u0a4d\u0a30\u0a48\u0a32_\u0a2e\u0a08_\u0a1c\u0a42\u0a28_\u0a1c\u0a41\u0a32\u0a3e\u0a08_\u0a05\u0a17\u0a38\u0a24_\u0a38\u0a24\u0a70\u0a2c\u0a30_\u0a05\u0a15\u0a24\u0a42\u0a2c\u0a30_\u0a28\u0a35\u0a70\u0a2c\u0a30_\u0a26\u0a38\u0a70\u0a2c\u0a30".split("_"),weekdays:"\u0a10\u0a24\u0a35\u0a3e\u0a30_\u0a38\u0a4b\u0a2e\u0a35\u0a3e\u0a30_\u0a2e\u0a70\u0a17\u0a32\u0a35\u0a3e\u0a30_\u0a2c\u0a41\u0a27\u0a35\u0a3e\u0a30_\u0a35\u0a40\u0a30\u0a35\u0a3e\u0a30_\u0a38\u0a3c\u0a41\u0a71\u0a15\u0a30\u0a35\u0a3e\u0a30_\u0a38\u0a3c\u0a28\u0a40\u0a1a\u0a30\u0a35\u0a3e\u0a30".split("_"),weekdaysShort:"\u0a10\u0a24_\u0a38\u0a4b\u0a2e_\u0a2e\u0a70\u0a17\u0a32_\u0a2c\u0a41\u0a27_\u0a35\u0a40\u0a30_\u0a38\u0a3c\u0a41\u0a15\u0a30_\u0a38\u0a3c\u0a28\u0a40".split("_"),weekdaysMin:"\u0a10\u0a24_\u0a38\u0a4b\u0a2e_\u0a2e\u0a70\u0a17\u0a32_\u0a2c\u0a41\u0a27_\u0a35\u0a40\u0a30_\u0a38\u0a3c\u0a41\u0a15\u0a30_\u0a38\u0a3c\u0a28\u0a40".split("_"),longDateFormat:{LT:"A h:mm \u0a35\u0a1c\u0a47",LTS:"A h:mm:ss \u0a35\u0a1c\u0a47",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm \u0a35\u0a1c\u0a47",LLLL:"dddd, D MMMM YYYY, A h:mm \u0a35\u0a1c\u0a47"},calendar:{sameDay:"[\u0a05\u0a1c] LT",nextDay:"[\u0a15\u0a32] LT",nextWeek:"[\u0a05\u0a17\u0a32\u0a3e] dddd, LT",lastDay:"[\u0a15\u0a32] LT",lastWeek:"[\u0a2a\u0a3f\u0a1b\u0a32\u0a47] dddd, LT",sameElse:"L"},relativeTime:{future:"%s \u0a35\u0a3f\u0a71\u0a1a",past:"%s \u0a2a\u0a3f\u0a1b\u0a32\u0a47",s:"\u0a15\u0a41\u0a1d \u0a38\u0a15\u0a3f\u0a70\u0a1f",ss:"%d \u0a38\u0a15\u0a3f\u0a70\u0a1f",m:"\u0a07\u0a15 \u0a2e\u0a3f\u0a70\u0a1f",mm:"%d \u0a2e\u0a3f\u0a70\u0a1f",h:"\u0a07\u0a71\u0a15 \u0a18\u0a70\u0a1f\u0a3e",hh:"%d \u0a18\u0a70\u0a1f\u0a47",d:"\u0a07\u0a71\u0a15 \u0a26\u0a3f\u0a28",dd:"%d \u0a26\u0a3f\u0a28",M:"\u0a07\u0a71\u0a15 \u0a2e\u0a39\u0a40\u0a28\u0a3e",MM:"%d \u0a2e\u0a39\u0a40\u0a28\u0a47",y:"\u0a07\u0a71\u0a15 \u0a38\u0a3e\u0a32",yy:"%d \u0a38\u0a3e\u0a32"},preparse:function(e){return e.replace(/[\u0a67\u0a68\u0a69\u0a6a\u0a6b\u0a6c\u0a6d\u0a6e\u0a6f\u0a66]/g,function(e){return cn[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return hn[e]})},meridiemParse:/\u0a30\u0a3e\u0a24|\u0a38\u0a35\u0a47\u0a30|\u0a26\u0a41\u0a2a\u0a39\u0a3f\u0a30|\u0a38\u0a3c\u0a3e\u0a2e/,meridiemHour:function(e,a){return 12===e&&(e=0),"\u0a30\u0a3e\u0a24"===a?e<4?e:e+12:"\u0a38\u0a35\u0a47\u0a30"===a?e:"\u0a26\u0a41\u0a2a\u0a39\u0a3f\u0a30"===a?10<=e?e:e+12:"\u0a38\u0a3c\u0a3e\u0a2e"===a?e+12:void 0},meridiem:function(e,a,t){return e<4?"\u0a30\u0a3e\u0a24":e<10?"\u0a38\u0a35\u0a47\u0a30":e<17?"\u0a26\u0a41\u0a2a\u0a39\u0a3f\u0a30":e<20?"\u0a38\u0a3c\u0a3e\u0a2e":"\u0a30\u0a3e\u0a24"},week:{dow:0,doy:6}}),"stycze\u0144_luty_marzec_kwiecie\u0144_maj_czerwiec_lipiec_sierpie\u0144_wrzesie\u0144_pa\u017adziernik_listopad_grudzie\u0144".split("_")),Yn="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_wrze\u015bnia_pa\u017adziernika_listopada_grudnia".split("_"),_=[/^sty/i,/^lut/i,/^mar/i,/^kwi/i,/^maj/i,/^cze/i,/^lip/i,/^sie/i,/^wrz/i,/^pa\u017a/i,/^lis/i,/^gru/i];function yn(e){return e%10<5&&1<e%10&&~~(e/10)%10!=1}function fn(e,a,t){var s=e+" ";switch(t){case"ss":return s+(yn(e)?"sekundy":"sekund");case"m":return a?"minuta":"minut\u0119";case"mm":return s+(yn(e)?"minuty":"minut");case"h":return a?"godzina":"godzin\u0119";case"hh":return s+(yn(e)?"godziny":"godzin");case"ww":return s+(yn(e)?"tygodnie":"tygodni");case"MM":return s+(yn(e)?"miesi\u0105ce":"miesi\u0119cy");case"yy":return s+(yn(e)?"lata":"lat")}}function pn(e,a,t){return e+(20<=e%100||100<=e&&e%100==0?" de ":" ")+{ss:"secunde",mm:"minute",hh:"ore",dd:"zile",ww:"s\u0103pt\u0103m\xe2ni",MM:"luni",yy:"ani"}[t]}function kn(e,a,t){return"m"===t?a?"\u043c\u0438\u043d\u0443\u0442\u0430":"\u043c\u0438\u043d\u0443\u0442\u0443":e+" "+(e=+e,a=(a={ss:a?"\u0441\u0435\u043a\u0443\u043d\u0434\u0430_\u0441\u0435\u043a\u0443\u043d\u0434\u044b_\u0441\u0435\u043a\u0443\u043d\u0434":"\u0441\u0435\u043a\u0443\u043d\u0434\u0443_\u0441\u0435\u043a\u0443\u043d\u0434\u044b_\u0441\u0435\u043a\u0443\u043d\u0434",mm:a?"\u043c\u0438\u043d\u0443\u0442\u0430_\u043c\u0438\u043d\u0443\u0442\u044b_\u043c\u0438\u043d\u0443\u0442":"\u043c\u0438\u043d\u0443\u0442\u0443_\u043c\u0438\u043d\u0443\u0442\u044b_\u043c\u0438\u043d\u0443\u0442",hh:"\u0447\u0430\u0441_\u0447\u0430\u0441\u0430_\u0447\u0430\u0441\u043e\u0432",dd:"\u0434\u0435\u043d\u044c_\u0434\u043d\u044f_\u0434\u043d\u0435\u0439",ww:"\u043d\u0435\u0434\u0435\u043b\u044f_\u043d\u0435\u0434\u0435\u043b\u0438_\u043d\u0435\u0434\u0435\u043b\u044c",MM:"\u043c\u0435\u0441\u044f\u0446_\u043c\u0435\u0441\u044f\u0446\u0430_\u043c\u0435\u0441\u044f\u0446\u0435\u0432",yy:"\u0433\u043e\u0434_\u0433\u043e\u0434\u0430_\u043b\u0435\u0442"}[t]).split("_"),e%10==1&&e%100!=11?a[0]:2<=e%10&&e%10<=4&&(e%100<10||20<=e%100)?a[1]:a[2])}M.defineLocale("pl",{months:function(e,a){return e?(/D MMMM/.test(a)?Yn:Ln)[e.month()]:Ln},monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_pa\u017a_lis_gru".split("_"),monthsParse:_,longMonthsParse:_,shortMonthsParse:_,weekdays:"niedziela_poniedzia\u0142ek_wtorek_\u015broda_czwartek_pi\u0105tek_sobota".split("_"),weekdaysShort:"ndz_pon_wt_\u015br_czw_pt_sob".split("_"),weekdaysMin:"Nd_Pn_Wt_\u015ar_Cz_Pt_So".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Dzi\u015b o] LT",nextDay:"[Jutro o] LT",nextWeek:function(){switch(this.day()){case 0:return"[W niedziel\u0119 o] LT";case 2:return"[We wtorek o] LT";case 3:return"[W \u015brod\u0119 o] LT";case 6:return"[W sobot\u0119 o] LT";default:return"[W] dddd [o] LT"}},lastDay:"[Wczoraj o] LT",lastWeek:function(){switch(this.day()){case 0:return"[W zesz\u0142\u0105 niedziel\u0119 o] LT";case 3:return"[W zesz\u0142\u0105 \u015brod\u0119 o] LT";case 6:return"[W zesz\u0142\u0105 sobot\u0119 o] LT";default:return"[W zesz\u0142y] dddd [o] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",ss:fn,m:fn,mm:fn,h:fn,hh:fn,d:"1 dzie\u0144",dd:"%d dni",w:"tydzie\u0144",ww:fn,M:"miesi\u0105c",MM:fn,y:"rok",yy:fn},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),M.defineLocale("pt-br",{months:"janeiro_fevereiro_mar\xe7o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),monthsShort:"jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),weekdays:"domingo_segunda-feira_ter\xe7a-feira_quarta-feira_quinta-feira_sexta-feira_s\xe1bado".split("_"),weekdaysShort:"dom_seg_ter_qua_qui_sex_s\xe1b".split("_"),weekdaysMin:"do_2\xaa_3\xaa_4\xaa_5\xaa_6\xaa_s\xe1".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY [\xe0s] HH:mm",LLLL:"dddd, D [de] MMMM [de] YYYY [\xe0s] HH:mm"},calendar:{sameDay:"[Hoje \xe0s] LT",nextDay:"[Amanh\xe3 \xe0s] LT",nextWeek:"dddd [\xe0s] LT",lastDay:"[Ontem \xe0s] LT",lastWeek:function(){return 0===this.day()||6===this.day()?"[\xdaltimo] dddd [\xe0s] LT":"[\xdaltima] dddd [\xe0s] LT"},sameElse:"L"},relativeTime:{future:"em %s",past:"h\xe1 %s",s:"poucos segundos",ss:"%d segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um m\xeas",MM:"%d meses",y:"um ano",yy:"%d anos"},dayOfMonthOrdinalParse:/\d{1,2}\xba/,ordinal:"%d\xba",invalidDate:"Data inv\xe1lida"}),M.defineLocale("pt",{months:"janeiro_fevereiro_mar\xe7o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),monthsShort:"jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),weekdays:"Domingo_Segunda-feira_Ter\xe7a-feira_Quarta-feira_Quinta-feira_Sexta-feira_S\xe1bado".split("_"),weekdaysShort:"Dom_Seg_Ter_Qua_Qui_Sex_S\xe1b".split("_"),weekdaysMin:"Do_2\xaa_3\xaa_4\xaa_5\xaa_6\xaa_S\xe1".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY HH:mm",LLLL:"dddd, D [de] MMMM [de] YYYY HH:mm"},calendar:{sameDay:"[Hoje \xe0s] LT",nextDay:"[Amanh\xe3 \xe0s] LT",nextWeek:"dddd [\xe0s] LT",lastDay:"[Ontem \xe0s] LT",lastWeek:function(){return 0===this.day()||6===this.day()?"[\xdaltimo] dddd [\xe0s] LT":"[\xdaltima] dddd [\xe0s] LT"},sameElse:"L"},relativeTime:{future:"em %s",past:"h\xe1 %s",s:"segundos",ss:"%d segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",w:"uma semana",ww:"%d semanas",M:"um m\xeas",MM:"%d meses",y:"um ano",yy:"%d anos"},dayOfMonthOrdinalParse:/\d{1,2}\xba/,ordinal:"%d\xba",week:{dow:1,doy:4}}),M.defineLocale("ro",{months:"ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),monthsShort:"ian._feb._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"duminic\u0103_luni_mar\u021bi_miercuri_joi_vineri_s\xe2mb\u0103t\u0103".split("_"),weekdaysShort:"Dum_Lun_Mar_Mie_Joi_Vin_S\xe2m".split("_"),weekdaysMin:"Du_Lu_Ma_Mi_Jo_Vi_S\xe2".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},calendar:{sameDay:"[azi la] LT",nextDay:"[m\xe2ine la] LT",nextWeek:"dddd [la] LT",lastDay:"[ieri la] LT",lastWeek:"[fosta] dddd [la] LT",sameElse:"L"},relativeTime:{future:"peste %s",past:"%s \xeen urm\u0103",s:"c\xe2teva secunde",ss:pn,m:"un minut",mm:pn,h:"o or\u0103",hh:pn,d:"o zi",dd:pn,w:"o s\u0103pt\u0103m\xe2n\u0103",ww:pn,M:"o lun\u0103",MM:pn,y:"un an",yy:pn},week:{dow:1,doy:7}});y=[/^\u044f\u043d\u0432/i,/^\u0444\u0435\u0432/i,/^\u043c\u0430\u0440/i,/^\u0430\u043f\u0440/i,/^\u043c\u0430[\u0439\u044f]/i,/^\u0438\u044e\u043d/i,/^\u0438\u044e\u043b/i,/^\u0430\u0432\u0433/i,/^\u0441\u0435\u043d/i,/^\u043e\u043a\u0442/i,/^\u043d\u043e\u044f/i,/^\u0434\u0435\u043a/i],M.defineLocale("ru",{months:{format:"\u044f\u043d\u0432\u0430\u0440\u044f_\u0444\u0435\u0432\u0440\u0430\u043b\u044f_\u043c\u0430\u0440\u0442\u0430_\u0430\u043f\u0440\u0435\u043b\u044f_\u043c\u0430\u044f_\u0438\u044e\u043d\u044f_\u0438\u044e\u043b\u044f_\u0430\u0432\u0433\u0443\u0441\u0442\u0430_\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f_\u043e\u043a\u0442\u044f\u0431\u0440\u044f_\u043d\u043e\u044f\u0431\u0440\u044f_\u0434\u0435\u043a\u0430\u0431\u0440\u044f".split("_"),standalone:"\u044f\u043d\u0432\u0430\u0440\u044c_\u0444\u0435\u0432\u0440\u0430\u043b\u044c_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0435\u043b\u044c_\u043c\u0430\u0439_\u0438\u044e\u043d\u044c_\u0438\u044e\u043b\u044c_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044c_\u043e\u043a\u0442\u044f\u0431\u0440\u044c_\u043d\u043e\u044f\u0431\u0440\u044c_\u0434\u0435\u043a\u0430\u0431\u0440\u044c".split("_")},monthsShort:{format:"\u044f\u043d\u0432._\u0444\u0435\u0432\u0440._\u043c\u0430\u0440._\u0430\u043f\u0440._\u043c\u0430\u044f_\u0438\u044e\u043d\u044f_\u0438\u044e\u043b\u044f_\u0430\u0432\u0433._\u0441\u0435\u043d\u0442._\u043e\u043a\u0442._\u043d\u043e\u044f\u0431._\u0434\u0435\u043a.".split("_"),standalone:"\u044f\u043d\u0432._\u0444\u0435\u0432\u0440._\u043c\u0430\u0440\u0442_\u0430\u043f\u0440._\u043c\u0430\u0439_\u0438\u044e\u043d\u044c_\u0438\u044e\u043b\u044c_\u0430\u0432\u0433._\u0441\u0435\u043d\u0442._\u043e\u043a\u0442._\u043d\u043e\u044f\u0431._\u0434\u0435\u043a.".split("_")},weekdays:{standalone:"\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435_\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a_\u0432\u0442\u043e\u0440\u043d\u0438\u043a_\u0441\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0435\u0440\u0433_\u043f\u044f\u0442\u043d\u0438\u0446\u0430_\u0441\u0443\u0431\u0431\u043e\u0442\u0430".split("_"),format:"\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435_\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a_\u0432\u0442\u043e\u0440\u043d\u0438\u043a_\u0441\u0440\u0435\u0434\u0443_\u0447\u0435\u0442\u0432\u0435\u0440\u0433_\u043f\u044f\u0442\u043d\u0438\u0446\u0443_\u0441\u0443\u0431\u0431\u043e\u0442\u0443".split("_"),isFormat:/\[ ?[\u0412\u0432] ?(?:\u043f\u0440\u043e\u0448\u043b\u0443\u044e|\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e|\u044d\u0442\u0443)? ?] ?dddd/},weekdaysShort:"\u0432\u0441_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split("_"),weekdaysMin:"\u0432\u0441_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split("_"),monthsParse:y,longMonthsParse:y,shortMonthsParse:y,monthsRegex:/^(\u044f\u043d\u0432\u0430\u0440[\u044c\u044f]|\u044f\u043d\u0432\.?|\u0444\u0435\u0432\u0440\u0430\u043b[\u044c\u044f]|\u0444\u0435\u0432\u0440?\.?|\u043c\u0430\u0440\u0442\u0430?|\u043c\u0430\u0440\.?|\u0430\u043f\u0440\u0435\u043b[\u044c\u044f]|\u0430\u043f\u0440\.?|\u043c\u0430[\u0439\u044f]|\u0438\u044e\u043d[\u044c\u044f]|\u0438\u044e\u043d\.?|\u0438\u044e\u043b[\u044c\u044f]|\u0438\u044e\u043b\.?|\u0430\u0432\u0433\u0443\u0441\u0442\u0430?|\u0430\u0432\u0433\.?|\u0441\u0435\u043d\u0442\u044f\u0431\u0440[\u044c\u044f]|\u0441\u0435\u043d\u0442?\.?|\u043e\u043a\u0442\u044f\u0431\u0440[\u044c\u044f]|\u043e\u043a\u0442\.?|\u043d\u043e\u044f\u0431\u0440[\u044c\u044f]|\u043d\u043e\u044f\u0431?\.?|\u0434\u0435\u043a\u0430\u0431\u0440[\u044c\u044f]|\u0434\u0435\u043a\.?)/i,monthsShortRegex:/^(\u044f\u043d\u0432\u0430\u0440[\u044c\u044f]|\u044f\u043d\u0432\.?|\u0444\u0435\u0432\u0440\u0430\u043b[\u044c\u044f]|\u0444\u0435\u0432\u0440?\.?|\u043c\u0430\u0440\u0442\u0430?|\u043c\u0430\u0440\.?|\u0430\u043f\u0440\u0435\u043b[\u044c\u044f]|\u0430\u043f\u0440\.?|\u043c\u0430[\u0439\u044f]|\u0438\u044e\u043d[\u044c\u044f]|\u0438\u044e\u043d\.?|\u0438\u044e\u043b[\u044c\u044f]|\u0438\u044e\u043b\.?|\u0430\u0432\u0433\u0443\u0441\u0442\u0430?|\u0430\u0432\u0433\.?|\u0441\u0435\u043d\u0442\u044f\u0431\u0440[\u044c\u044f]|\u0441\u0435\u043d\u0442?\.?|\u043e\u043a\u0442\u044f\u0431\u0440[\u044c\u044f]|\u043e\u043a\u0442\.?|\u043d\u043e\u044f\u0431\u0440[\u044c\u044f]|\u043d\u043e\u044f\u0431?\.?|\u0434\u0435\u043a\u0430\u0431\u0440[\u044c\u044f]|\u0434\u0435\u043a\.?)/i,monthsStrictRegex:/^(\u044f\u043d\u0432\u0430\u0440[\u044f\u044c]|\u0444\u0435\u0432\u0440\u0430\u043b[\u044f\u044c]|\u043c\u0430\u0440\u0442\u0430?|\u0430\u043f\u0440\u0435\u043b[\u044f\u044c]|\u043c\u0430[\u044f\u0439]|\u0438\u044e\u043d[\u044f\u044c]|\u0438\u044e\u043b[\u044f\u044c]|\u0430\u0432\u0433\u0443\u0441\u0442\u0430?|\u0441\u0435\u043d\u0442\u044f\u0431\u0440[\u044f\u044c]|\u043e\u043a\u0442\u044f\u0431\u0440[\u044f\u044c]|\u043d\u043e\u044f\u0431\u0440[\u044f\u044c]|\u0434\u0435\u043a\u0430\u0431\u0440[\u044f\u044c])/i,monthsShortStrictRegex:/^(\u044f\u043d\u0432\.|\u0444\u0435\u0432\u0440?\.|\u043c\u0430\u0440[\u0442.]|\u0430\u043f\u0440\.|\u043c\u0430[\u044f\u0439]|\u0438\u044e\u043d[\u044c\u044f.]|\u0438\u044e\u043b[\u044c\u044f.]|\u0430\u0432\u0433\.|\u0441\u0435\u043d\u0442?\.|\u043e\u043a\u0442\.|\u043d\u043e\u044f\u0431?\.|\u0434\u0435\u043a\.)/i,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY \u0433.",LLL:"D MMMM YYYY \u0433., H:mm",LLLL:"dddd, D MMMM YYYY \u0433., H:mm"},calendar:{sameDay:"[\u0421\u0435\u0433\u043e\u0434\u043d\u044f, \u0432] LT",nextDay:"[\u0417\u0430\u0432\u0442\u0440\u0430, \u0432] LT",lastDay:"[\u0412\u0447\u0435\u0440\u0430, \u0432] LT",nextWeek:function(e){if(e.week()===this.week())return 2===this.day()?"[\u0412\u043e] dddd, [\u0432] LT":"[\u0412] dddd, [\u0432] LT";switch(this.day()){case 0:return"[\u0412 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435] dddd, [\u0432] LT";case 1:case 2:case 4:return"[\u0412 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439] dddd, [\u0432] LT";case 3:case 5:case 6:return"[\u0412 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e] dddd, [\u0432] LT"}},lastWeek:function(e){if(e.week()===this.week())return 2===this.day()?"[\u0412\u043e] dddd, [\u0432] LT":"[\u0412] dddd, [\u0432] LT";switch(this.day()){case 0:return"[\u0412 \u043f\u0440\u043e\u0448\u043b\u043e\u0435] dddd, [\u0432] LT";case 1:case 2:case 4:return"[\u0412 \u043f\u0440\u043e\u0448\u043b\u044b\u0439] dddd, [\u0432] LT";case 3:case 5:case 6:return"[\u0412 \u043f\u0440\u043e\u0448\u043b\u0443\u044e] dddd, [\u0432] LT"}},sameElse:"L"},relativeTime:{future:"\u0447\u0435\u0440\u0435\u0437 %s",past:"%s \u043d\u0430\u0437\u0430\u0434",s:"\u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0435\u043a\u0443\u043d\u0434",ss:kn,m:kn,mm:kn,h:"\u0447\u0430\u0441",hh:kn,d:"\u0434\u0435\u043d\u044c",dd:kn,w:"\u043d\u0435\u0434\u0435\u043b\u044f",ww:kn,M:"\u043c\u0435\u0441\u044f\u0446",MM:kn,y:"\u0433\u043e\u0434",yy:kn},meridiemParse:/\u043d\u043e\u0447\u0438|\u0443\u0442\u0440\u0430|\u0434\u043d\u044f|\u0432\u0435\u0447\u0435\u0440\u0430/i,isPM:function(e){return/^(\u0434\u043d\u044f|\u0432\u0435\u0447\u0435\u0440\u0430)$/.test(e)},meridiem:function(e,a,t){return e<4?"\u043d\u043e\u0447\u0438":e<12?"\u0443\u0442\u0440\u0430":e<17?"\u0434\u043d\u044f":"\u0432\u0435\u0447\u0435\u0440\u0430"},dayOfMonthOrdinalParse:/\d{1,2}-(\u0439|\u0433\u043e|\u044f)/,ordinal:function(e,a){switch(a){case"M":case"d":case"DDD":return e+"-\u0439";case"D":return e+"-\u0433\u043e";case"w":case"W":return e+"-\u044f";default:return e}},week:{dow:1,doy:4}}),Y=["\u062c\u0646\u0648\u0631\u064a","\u0641\u064a\u0628\u0631\u0648\u0631\u064a","\u0645\u0627\u0631\u0686","\u0627\u067e\u0631\u064a\u0644","\u0645\u0626\u064a","\u062c\u0648\u0646","\u062c\u0648\u0644\u0627\u0621\u0650","\u0622\u06af\u0633\u067d","\u0633\u064a\u067e\u067d\u0645\u0628\u0631","\u0622\u06aa\u067d\u0648\u0628\u0631","\u0646\u0648\u0645\u0628\u0631","\u068a\u0633\u0645\u0628\u0631"],Ke=["\u0622\u0686\u0631","\u0633\u0648\u0645\u0631","\u0627\u06b1\u0627\u0631\u0648","\u0627\u0631\u0628\u0639","\u062e\u0645\u064a\u0633","\u062c\u0645\u0639","\u0687\u0646\u0687\u0631"],M.defineLocale("sd",{months:Y,monthsShort:Y,weekdays:Ke,weekdaysShort:Ke,weekdaysMin:Ke,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd\u060c D MMMM YYYY HH:mm"},meridiemParse:/\u0635\u0628\u062d|\u0634\u0627\u0645/,isPM:function(e){return"\u0634\u0627\u0645"===e},meridiem:function(e,a,t){return e<12?"\u0635\u0628\u062d":"\u0634\u0627\u0645"},calendar:{sameDay:"[\u0627\u0684] LT",nextDay:"[\u0633\u0680\u0627\u06bb\u064a] LT",nextWeek:"dddd [\u0627\u06b3\u064a\u0646 \u0647\u0641\u062a\u064a \u062a\u064a] LT",lastDay:"[\u06aa\u0627\u0644\u0647\u0647] LT",lastWeek:"[\u06af\u0632\u0631\u064a\u0644 \u0647\u0641\u062a\u064a] dddd [\u062a\u064a] LT",sameElse:"L"},relativeTime:{future:"%s \u067e\u0648\u0621",past:"%s \u0627\u06b3",s:"\u0686\u0646\u062f \u0633\u064a\u06aa\u0646\u068a",ss:"%d \u0633\u064a\u06aa\u0646\u068a",m:"\u0647\u06aa \u0645\u0646\u067d",mm:"%d \u0645\u0646\u067d",h:"\u0647\u06aa \u06aa\u0644\u0627\u06aa",hh:"%d \u06aa\u0644\u0627\u06aa",d:"\u0647\u06aa \u068f\u064a\u0646\u0647\u0646",dd:"%d \u068f\u064a\u0646\u0647\u0646",M:"\u0647\u06aa \u0645\u0647\u064a\u0646\u0648",MM:"%d \u0645\u0647\u064a\u0646\u0627",y:"\u0647\u06aa \u0633\u0627\u0644",yy:"%d \u0633\u0627\u0644"},preparse:function(e){return e.replace(/\u060c/g,",")},postformat:function(e){return e.replace(/,/g,"\u060c")},week:{dow:1,doy:4}}),M.defineLocale("se",{months:"o\u0111\u0111ajagem\xe1nnu_guovvam\xe1nnu_njuk\u010dam\xe1nnu_cuo\u014bom\xe1nnu_miessem\xe1nnu_geassem\xe1nnu_suoidnem\xe1nnu_borgem\xe1nnu_\u010dak\u010dam\xe1nnu_golggotm\xe1nnu_sk\xe1bmam\xe1nnu_juovlam\xe1nnu".split("_"),monthsShort:"o\u0111\u0111j_guov_njuk_cuo_mies_geas_suoi_borg_\u010dak\u010d_golg_sk\xe1b_juov".split("_"),weekdays:"sotnabeaivi_vuoss\xe1rga_ma\u014b\u014beb\xe1rga_gaskavahkku_duorastat_bearjadat_l\xe1vvardat".split("_"),weekdaysShort:"sotn_vuos_ma\u014b_gask_duor_bear_l\xe1v".split("_"),weekdaysMin:"s_v_m_g_d_b_L".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"MMMM D. [b.] YYYY",LLL:"MMMM D. [b.] YYYY [ti.] HH:mm",LLLL:"dddd, MMMM D. [b.] YYYY [ti.] HH:mm"},calendar:{sameDay:"[otne ti] LT",nextDay:"[ihttin ti] LT",nextWeek:"dddd [ti] LT",lastDay:"[ikte ti] LT",lastWeek:"[ovddit] dddd [ti] LT",sameElse:"L"},relativeTime:{future:"%s gea\u017ees",past:"ma\u014bit %s",s:"moadde sekunddat",ss:"%d sekunddat",m:"okta minuhta",mm:"%d minuhtat",h:"okta diimmu",hh:"%d diimmut",d:"okta beaivi",dd:"%d beaivvit",M:"okta m\xe1nnu",MM:"%d m\xe1nut",y:"okta jahki",yy:"%d jagit"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),M.defineLocale("si",{months:"\u0da2\u0db1\u0dc0\u0dcf\u0dbb\u0dd2_\u0db4\u0dd9\u0db6\u0dbb\u0dc0\u0dcf\u0dbb\u0dd2_\u0db8\u0dcf\u0dbb\u0dca\u0dad\u0dd4_\u0d85\u0db4\u0dca\u200d\u0dbb\u0dda\u0dbd\u0dca_\u0db8\u0dd0\u0dba\u0dd2_\u0da2\u0dd6\u0db1\u0dd2_\u0da2\u0dd6\u0dbd\u0dd2_\u0d85\u0d9c\u0ddd\u0dc3\u0dca\u0dad\u0dd4_\u0dc3\u0dd0\u0db4\u0dca\u0dad\u0dd0\u0db8\u0dca\u0db6\u0dbb\u0dca_\u0d94\u0d9a\u0dca\u0dad\u0ddd\u0db6\u0dbb\u0dca_\u0db1\u0ddc\u0dc0\u0dd0\u0db8\u0dca\u0db6\u0dbb\u0dca_\u0daf\u0dd9\u0dc3\u0dd0\u0db8\u0dca\u0db6\u0dbb\u0dca".split("_"),monthsShort:"\u0da2\u0db1_\u0db4\u0dd9\u0db6_\u0db8\u0dcf\u0dbb\u0dca_\u0d85\u0db4\u0dca_\u0db8\u0dd0\u0dba\u0dd2_\u0da2\u0dd6\u0db1\u0dd2_\u0da2\u0dd6\u0dbd\u0dd2_\u0d85\u0d9c\u0ddd_\u0dc3\u0dd0\u0db4\u0dca_\u0d94\u0d9a\u0dca_\u0db1\u0ddc\u0dc0\u0dd0_\u0daf\u0dd9\u0dc3\u0dd0".split("_"),weekdays:"\u0d89\u0dbb\u0dd2\u0daf\u0dcf_\u0dc3\u0db3\u0dd4\u0daf\u0dcf_\u0d85\u0d9f\u0dc4\u0dbb\u0dd4\u0dc0\u0dcf\u0daf\u0dcf_\u0db6\u0daf\u0dcf\u0daf\u0dcf_\u0db6\u0dca\u200d\u0dbb\u0dc4\u0dc3\u0dca\u0db4\u0dad\u0dd2\u0db1\u0dca\u0daf\u0dcf_\u0dc3\u0dd2\u0d9a\u0dd4\u0dbb\u0dcf\u0daf\u0dcf_\u0dc3\u0dd9\u0db1\u0dc3\u0dd4\u0dbb\u0dcf\u0daf\u0dcf".split("_"),weekdaysShort:"\u0d89\u0dbb\u0dd2_\u0dc3\u0db3\u0dd4_\u0d85\u0d9f_\u0db6\u0daf\u0dcf_\u0db6\u0dca\u200d\u0dbb\u0dc4_\u0dc3\u0dd2\u0d9a\u0dd4_\u0dc3\u0dd9\u0db1".split("_"),weekdaysMin:"\u0d89_\u0dc3_\u0d85_\u0db6_\u0db6\u0dca\u200d\u0dbb_\u0dc3\u0dd2_\u0dc3\u0dd9".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"a h:mm",LTS:"a h:mm:ss",L:"YYYY/MM/DD",LL:"YYYY MMMM D",LLL:"YYYY MMMM D, a h:mm",LLLL:"YYYY MMMM D [\u0dc0\u0dd0\u0db1\u0dd2] dddd, a h:mm:ss"},calendar:{sameDay:"[\u0d85\u0daf] LT[\u0da7]",nextDay:"[\u0dc4\u0dd9\u0da7] LT[\u0da7]",nextWeek:"dddd LT[\u0da7]",lastDay:"[\u0d8a\u0dba\u0dda] LT[\u0da7]",lastWeek:"[\u0db4\u0dc3\u0dd4\u0d9c\u0dd2\u0dba] dddd LT[\u0da7]",sameElse:"L"},relativeTime:{future:"%s\u0d9a\u0dd2\u0db1\u0dca",past:"%s\u0d9a\u0da7 \u0db4\u0dd9\u0dbb",s:"\u0dad\u0dad\u0dca\u0db4\u0dbb \u0d9a\u0dd2\u0dc4\u0dd2\u0db4\u0dba",ss:"\u0dad\u0dad\u0dca\u0db4\u0dbb %d",m:"\u0db8\u0dd2\u0db1\u0dd2\u0dad\u0dca\u0dad\u0dd4\u0dc0",mm:"\u0db8\u0dd2\u0db1\u0dd2\u0dad\u0dca\u0dad\u0dd4 %d",h:"\u0db4\u0dd0\u0dba",hh:"\u0db4\u0dd0\u0dba %d",d:"\u0daf\u0dd2\u0db1\u0dba",dd:"\u0daf\u0dd2\u0db1 %d",M:"\u0db8\u0dcf\u0dc3\u0dba",MM:"\u0db8\u0dcf\u0dc3 %d",y:"\u0dc0\u0dc3\u0dbb",yy:"\u0dc0\u0dc3\u0dbb %d"},dayOfMonthOrdinalParse:/\d{1,2} \u0dc0\u0dd0\u0db1\u0dd2/,ordinal:function(e){return e+" \u0dc0\u0dd0\u0db1\u0dd2"},meridiemParse:/\u0db4\u0dd9\u0dbb \u0dc0\u0dbb\u0dd4|\u0db4\u0dc3\u0dca \u0dc0\u0dbb\u0dd4|\u0db4\u0dd9.\u0dc0|\u0db4.\u0dc0./,isPM:function(e){return"\u0db4.\u0dc0."===e||"\u0db4\u0dc3\u0dca \u0dc0\u0dbb\u0dd4"===e},meridiem:function(e,a,t){return 11<e?t?"\u0db4.\u0dc0.":"\u0db4\u0dc3\u0dca \u0dc0\u0dbb\u0dd4":t?"\u0db4\u0dd9.\u0dc0.":"\u0db4\u0dd9\u0dbb \u0dc0\u0dbb\u0dd4"}}),Ht="janu\xe1r_febru\xe1r_marec_apr\xedl_m\xe1j_j\xfan_j\xfal_august_september_okt\xf3ber_november_december".split("_"),r="jan_feb_mar_apr_m\xe1j_j\xfan_j\xfal_aug_sep_okt_nov_dec".split("_");function Dn(e){return 1<e&&e<5}function Tn(e,a,t,s){var n=e+" ";switch(t){case"s":return a||s?"p\xe1r sek\xfand":"p\xe1r sekundami";case"ss":return a||s?n+(Dn(e)?"sekundy":"sek\xfand"):n+"sekundami";case"m":return a?"min\xfata":s?"min\xfatu":"min\xfatou";case"mm":return a||s?n+(Dn(e)?"min\xfaty":"min\xfat"):n+"min\xfatami";case"h":return a?"hodina":s?"hodinu":"hodinou";case"hh":return a||s?n+(Dn(e)?"hodiny":"hod\xedn"):n+"hodinami";case"d":return a||s?"de\u0148":"d\u0148om";case"dd":return a||s?n+(Dn(e)?"dni":"dn\xed"):n+"d\u0148ami";case"M":return a||s?"mesiac":"mesiacom";case"MM":return a||s?n+(Dn(e)?"mesiace":"mesiacov"):n+"mesiacmi";case"y":return a||s?"rok":"rokom";case"yy":return a||s?n+(Dn(e)?"roky":"rokov"):n+"rokmi"}}function gn(e,a,t,s){var n=e+" ";switch(t){case"s":return a||s?"nekaj sekund":"nekaj sekundami";case"ss":return n+=1===e?a?"sekundo":"sekundi":2===e?a||s?"sekundi":"sekundah":e<5?a||s?"sekunde":"sekundah":"sekund";case"m":return a?"ena minuta":"eno minuto";case"mm":return n+=1===e?a?"minuta":"minuto":2===e?a||s?"minuti":"minutama":e<5?a||s?"minute":"minutami":a||s?"minut":"minutami";case"h":return a?"ena ura":"eno uro";case"hh":return n+=1===e?a?"ura":"uro":2===e?a||s?"uri":"urama":e<5?a||s?"ure":"urami":a||s?"ur":"urami";case"d":return a||s?"en dan":"enim dnem";case"dd":return n+=1===e?a||s?"dan":"dnem":2===e?a||s?"dni":"dnevoma":a||s?"dni":"dnevi";case"M":return a||s?"en mesec":"enim mesecem";case"MM":return n+=1===e?a||s?"mesec":"mesecem":2===e?a||s?"meseca":"mesecema":e<5?a||s?"mesece":"meseci":a||s?"mesecev":"meseci";case"y":return a||s?"eno leto":"enim letom";case"yy":return n+=1===e?a||s?"leto":"letom":2===e?a||s?"leti":"letoma":e<5?a||s?"leta":"leti":a||s?"let":"leti"}}M.defineLocale("sk",{months:Ht,monthsShort:r,weekdays:"nede\u013ea_pondelok_utorok_streda_\u0161tvrtok_piatok_sobota".split("_"),weekdaysShort:"ne_po_ut_st_\u0161t_pi_so".split("_"),weekdaysMin:"ne_po_ut_st_\u0161t_pi_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm"},calendar:{sameDay:"[dnes o] LT",nextDay:"[zajtra o] LT",nextWeek:function(){switch(this.day()){case 0:return"[v nede\u013eu o] LT";case 1:case 2:return"[v] dddd [o] LT";case 3:return"[v stredu o] LT";case 4:return"[vo \u0161tvrtok o] LT";case 5:return"[v piatok o] LT";case 6:return"[v sobotu o] LT"}},lastDay:"[v\u010dera o] LT",lastWeek:function(){switch(this.day()){case 0:return"[minul\xfa nede\u013eu o] LT";case 1:case 2:return"[minul\xfd] dddd [o] LT";case 3:return"[minul\xfa stredu o] LT";case 4:case 5:return"[minul\xfd] dddd [o] LT";case 6:return"[minul\xfa sobotu o] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"pred %s",s:Tn,ss:Tn,m:Tn,mm:Tn,h:Tn,hh:Tn,d:Tn,dd:Tn,M:Tn,MM:Tn,y:Tn,yy:Tn},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),M.defineLocale("sl",{months:"januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),monthsShort:"jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"nedelja_ponedeljek_torek_sreda_\u010detrtek_petek_sobota".split("_"),weekdaysShort:"ned._pon._tor._sre._\u010det._pet._sob.".split("_"),weekdaysMin:"ne_po_to_sr_\u010de_pe_so".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD. MM. YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danes ob] LT",nextDay:"[jutri ob] LT",nextWeek:function(){switch(this.day()){case 0:return"[v] [nedeljo] [ob] LT";case 3:return"[v] [sredo] [ob] LT";case 6:return"[v] [soboto] [ob] LT";case 1:case 2:case 4:case 5:return"[v] dddd [ob] LT"}},lastDay:"[v\u010deraj ob] LT",lastWeek:function(){switch(this.day()){case 0:return"[prej\u0161njo] [nedeljo] [ob] LT";case 3:return"[prej\u0161njo] [sredo] [ob] LT";case 6:return"[prej\u0161njo] [soboto] [ob] LT";case 1:case 2:case 4:case 5:return"[prej\u0161nji] dddd [ob] LT"}},sameElse:"L"},relativeTime:{future:"\u010dez %s",past:"pred %s",s:gn,ss:gn,m:gn,mm:gn,h:gn,hh:gn,d:gn,dd:gn,M:gn,MM:gn,y:gn,yy:gn},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}}),M.defineLocale("sq",{months:"Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_N\xebntor_Dhjetor".split("_"),monthsShort:"Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_N\xebn_Dhj".split("_"),weekdays:"E Diel_E H\xebn\xeb_E Mart\xeb_E M\xebrkur\xeb_E Enjte_E Premte_E Shtun\xeb".split("_"),weekdaysShort:"Die_H\xebn_Mar_M\xebr_Enj_Pre_Sht".split("_"),weekdaysMin:"D_H_Ma_M\xeb_E_P_Sh".split("_"),weekdaysParseExact:!0,meridiemParse:/PD|MD/,isPM:function(e){return"M"===e.charAt(0)},meridiem:function(e,a,t){return e<12?"PD":"MD"},longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Sot n\xeb] LT",nextDay:"[Nes\xebr n\xeb] LT",nextWeek:"dddd [n\xeb] LT",lastDay:"[Dje n\xeb] LT",lastWeek:"dddd [e kaluar n\xeb] LT",sameElse:"L"},relativeTime:{future:"n\xeb %s",past:"%s m\xeb par\xeb",s:"disa sekonda",ss:"%d sekonda",m:"nj\xeb minut\xeb",mm:"%d minuta",h:"nj\xeb or\xeb",hh:"%d or\xeb",d:"nj\xeb dit\xeb",dd:"%d dit\xeb",M:"nj\xeb muaj",MM:"%d muaj",y:"nj\xeb vit",yy:"%d vite"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});var W={words:{ss:["\u0441\u0435\u043a\u0443\u043d\u0434\u0430","\u0441\u0435\u043a\u0443\u043d\u0434\u0435","\u0441\u0435\u043a\u0443\u043d\u0434\u0438"],m:["\u0458\u0435\u0434\u0430\u043d \u043c\u0438\u043d\u0443\u0442","\u0458\u0435\u0434\u043d\u043e\u0433 \u043c\u0438\u043d\u0443\u0442\u0430"],mm:["\u043c\u0438\u043d\u0443\u0442","\u043c\u0438\u043d\u0443\u0442\u0430","\u043c\u0438\u043d\u0443\u0442\u0430"],h:["\u0458\u0435\u0434\u0430\u043d \u0441\u0430\u0442","\u0458\u0435\u0434\u043d\u043e\u0433 \u0441\u0430\u0442\u0430"],hh:["\u0441\u0430\u0442","\u0441\u0430\u0442\u0430","\u0441\u0430\u0442\u0438"],d:["\u0458\u0435\u0434\u0430\u043d \u0434\u0430\u043d","\u0458\u0435\u0434\u043d\u043e\u0433 \u0434\u0430\u043d\u0430"],dd:["\u0434\u0430\u043d","\u0434\u0430\u043d\u0430","\u0434\u0430\u043d\u0430"],M:["\u0458\u0435\u0434\u0430\u043d \u043c\u0435\u0441\u0435\u0446","\u0458\u0435\u0434\u043d\u043e\u0433 \u043c\u0435\u0441\u0435\u0446\u0430"],MM:["\u043c\u0435\u0441\u0435\u0446","\u043c\u0435\u0441\u0435\u0446\u0430","\u043c\u0435\u0441\u0435\u0446\u0438"],y:["\u0458\u0435\u0434\u043d\u0443 \u0433\u043e\u0434\u0438\u043d\u0443","\u0458\u0435\u0434\u043d\u0435 \u0433\u043e\u0434\u0438\u043d\u0435"],yy:["\u0433\u043e\u0434\u0438\u043d\u0443","\u0433\u043e\u0434\u0438\u043d\u0435","\u0433\u043e\u0434\u0438\u043d\u0430"]},correctGrammaticalCase:function(e,a){return 1<=e%10&&e%10<=4&&(e%100<10||20<=e%100)?e%10==1?a[0]:a[1]:a[2]},translate:function(e,a,t,s){var n=W.words[t];return 1===t.length?"y"===t&&a?"\u0458\u0435\u0434\u043d\u0430 \u0433\u043e\u0434\u0438\u043d\u0430":s||a?n[0]:n[1]:(s=W.correctGrammaticalCase(e,n),"yy"===t&&a&&"\u0433\u043e\u0434\u0438\u043d\u0443"===s?e+" \u0433\u043e\u0434\u0438\u043d\u0430":e+" "+s)}},A=(M.defineLocale("sr-cyrl",{months:"\u0458\u0430\u043d\u0443\u0430\u0440_\u0444\u0435\u0431\u0440\u0443\u0430\u0440_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0438\u043b_\u043c\u0430\u0458_\u0458\u0443\u043d_\u0458\u0443\u043b_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043f\u0442\u0435\u043c\u0431\u0430\u0440_\u043e\u043a\u0442\u043e\u0431\u0430\u0440_\u043d\u043e\u0432\u0435\u043c\u0431\u0430\u0440_\u0434\u0435\u0446\u0435\u043c\u0431\u0430\u0440".split("_"),monthsShort:"\u0458\u0430\u043d._\u0444\u0435\u0431._\u043c\u0430\u0440._\u0430\u043f\u0440._\u043c\u0430\u0458_\u0458\u0443\u043d_\u0458\u0443\u043b_\u0430\u0432\u0433._\u0441\u0435\u043f._\u043e\u043a\u0442._\u043d\u043e\u0432._\u0434\u0435\u0446.".split("_"),monthsParseExact:!0,weekdays:"\u043d\u0435\u0434\u0435\u0459\u0430_\u043f\u043e\u043d\u0435\u0434\u0435\u0459\u0430\u043a_\u0443\u0442\u043e\u0440\u0430\u043a_\u0441\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0440\u0442\u0430\u043a_\u043f\u0435\u0442\u0430\u043a_\u0441\u0443\u0431\u043e\u0442\u0430".split("_"),weekdaysShort:"\u043d\u0435\u0434._\u043f\u043e\u043d._\u0443\u0442\u043e._\u0441\u0440\u0435._\u0447\u0435\u0442._\u043f\u0435\u0442._\u0441\u0443\u0431.".split("_"),weekdaysMin:"\u043d\u0435_\u043f\u043e_\u0443\u0442_\u0441\u0440_\u0447\u0435_\u043f\u0435_\u0441\u0443".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"D. M. YYYY.",LL:"D. MMMM YYYY.",LLL:"D. MMMM YYYY. H:mm",LLLL:"dddd, D. MMMM YYYY. H:mm"},calendar:{sameDay:"[\u0434\u0430\u043d\u0430\u0441 \u0443] LT",nextDay:"[\u0441\u0443\u0442\u0440\u0430 \u0443] LT",nextWeek:function(){switch(this.day()){case 0:return"[\u0443] [\u043d\u0435\u0434\u0435\u0459\u0443] [\u0443] LT";case 3:return"[\u0443] [\u0441\u0440\u0435\u0434\u0443] [\u0443] LT";case 6:return"[\u0443] [\u0441\u0443\u0431\u043e\u0442\u0443] [\u0443] LT";case 1:case 2:case 4:case 5:return"[\u0443] dddd [\u0443] LT"}},lastDay:"[\u0458\u0443\u0447\u0435 \u0443] LT",lastWeek:function(){return["[\u043f\u0440\u043e\u0448\u043b\u0435] [\u043d\u0435\u0434\u0435\u0459\u0435] [\u0443] LT","[\u043f\u0440\u043e\u0448\u043b\u043e\u0433] [\u043f\u043e\u043d\u0435\u0434\u0435\u0459\u043a\u0430] [\u0443] LT","[\u043f\u0440\u043e\u0448\u043b\u043e\u0433] [\u0443\u0442\u043e\u0440\u043a\u0430] [\u0443] LT","[\u043f\u0440\u043e\u0448\u043b\u0435] [\u0441\u0440\u0435\u0434\u0435] [\u0443] LT","[\u043f\u0440\u043e\u0448\u043b\u043e\u0433] [\u0447\u0435\u0442\u0432\u0440\u0442\u043a\u0430] [\u0443] LT","[\u043f\u0440\u043e\u0448\u043b\u043e\u0433] [\u043f\u0435\u0442\u043a\u0430] [\u0443] LT","[\u043f\u0440\u043e\u0448\u043b\u0435] [\u0441\u0443\u0431\u043e\u0442\u0435] [\u0443] LT"][this.day()]},sameElse:"L"},relativeTime:{future:"\u0437\u0430 %s",past:"\u043f\u0440\u0435 %s",s:"\u043d\u0435\u043a\u043e\u043b\u0438\u043a\u043e \u0441\u0435\u043a\u0443\u043d\u0434\u0438",ss:W.translate,m:W.translate,mm:W.translate,h:W.translate,hh:W.translate,d:W.translate,dd:W.translate,M:W.translate,MM:W.translate,y:W.translate,yy:W.translate},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}}),{words:{ss:["sekunda","sekunde","sekundi"],m:["jedan minut","jednog minuta"],mm:["minut","minuta","minuta"],h:["jedan sat","jednog sata"],hh:["sat","sata","sati"],d:["jedan dan","jednog dana"],dd:["dan","dana","dana"],M:["jedan mesec","jednog meseca"],MM:["mesec","meseca","meseci"],y:["jednu godinu","jedne godine"],yy:["godinu","godine","godina"]},correctGrammaticalCase:function(e,a){return 1<=e%10&&e%10<=4&&(e%100<10||20<=e%100)?e%10==1?a[0]:a[1]:a[2]},translate:function(e,a,t,s){var n=A.words[t];return 1===t.length?"y"===t&&a?"jedna godina":s||a?n[0]:n[1]:(s=A.correctGrammaticalCase(e,n),"yy"===t&&a&&"godinu"===s?e+" godina":e+" "+s)}}),wn=(M.defineLocale("sr",{months:"januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),monthsShort:"jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"nedelja_ponedeljak_utorak_sreda_\u010detvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sre._\u010det._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_\u010de_pe_su".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"D. M. YYYY.",LL:"D. MMMM YYYY.",LLL:"D. MMMM YYYY. H:mm",LLLL:"dddd, D. MMMM YYYY. H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedelju] [u] LT";case 3:return"[u] [sredu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[ju\u010de u] LT",lastWeek:function(){return["[pro\u0161le] [nedelje] [u] LT","[pro\u0161log] [ponedeljka] [u] LT","[pro\u0161log] [utorka] [u] LT","[pro\u0161le] [srede] [u] LT","[pro\u0161log] [\u010detvrtka] [u] LT","[pro\u0161log] [petka] [u] LT","[pro\u0161le] [subote] [u] LT"][this.day()]},sameElse:"L"},relativeTime:{future:"za %s",past:"pre %s",s:"nekoliko sekundi",ss:A.translate,m:A.translate,mm:A.translate,h:A.translate,hh:A.translate,d:A.translate,dd:A.translate,M:A.translate,MM:A.translate,y:A.translate,yy:A.translate},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}}),M.defineLocale("ss",{months:"Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"),monthsShort:"Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),weekdays:"Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"),weekdaysShort:"Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),weekdaysMin:"Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[Namuhla nga] LT",nextDay:"[Kusasa nga] LT",nextWeek:"dddd [nga] LT",lastDay:"[Itolo nga] LT",lastWeek:"dddd [leliphelile] [nga] LT",sameElse:"L"},relativeTime:{future:"nga %s",past:"wenteka nga %s",s:"emizuzwana lomcane",ss:"%d mzuzwana",m:"umzuzu",mm:"%d emizuzu",h:"lihora",hh:"%d emahora",d:"lilanga",dd:"%d emalanga",M:"inyanga",MM:"%d tinyanga",y:"umnyaka",yy:"%d iminyaka"},meridiemParse:/ekuseni|emini|entsambama|ebusuku/,meridiem:function(e,a,t){return e<11?"ekuseni":e<15?"emini":e<19?"entsambama":"ebusuku"},meridiemHour:function(e,a){return 12===e&&(e=0),"ekuseni"===a?e:"emini"===a?11<=e?e:e+12:"entsambama"===a||"ebusuku"===a?0===e?0:e+12:void 0},dayOfMonthOrdinalParse:/\d{1,2}/,ordinal:"%d",week:{dow:1,doy:4}}),M.defineLocale("sv",{months:"januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),weekdays:"s\xf6ndag_m\xe5ndag_tisdag_onsdag_torsdag_fredag_l\xf6rdag".split("_"),weekdaysShort:"s\xf6n_m\xe5n_tis_ons_tor_fre_l\xf6r".split("_"),weekdaysMin:"s\xf6_m\xe5_ti_on_to_fr_l\xf6".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [kl.] HH:mm",LLLL:"dddd D MMMM YYYY [kl.] HH:mm",lll:"D MMM YYYY HH:mm",llll:"ddd D MMM YYYY HH:mm"},calendar:{sameDay:"[Idag] LT",nextDay:"[Imorgon] LT",lastDay:"[Ig\xe5r] LT",nextWeek:"[P\xe5] dddd LT",lastWeek:"[I] dddd[s] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"f\xf6r %s sedan",s:"n\xe5gra sekunder",ss:"%d sekunder",m:"en minut",mm:"%d minuter",h:"en timme",hh:"%d timmar",d:"en dag",dd:"%d dagar",M:"en m\xe5nad",MM:"%d m\xe5nader",y:"ett \xe5r",yy:"%d \xe5r"},dayOfMonthOrdinalParse:/\d{1,2}(\:e|\:a)/,ordinal:function(e){var a=e%10;return e+(1!=~~(e%100/10)&&(1==a||2==a)?":a":":e")},week:{dow:1,doy:4}}),M.defineLocale("sw",{months:"Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),monthsShort:"Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),weekdays:"Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),weekdaysShort:"Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),weekdaysMin:"J2_J3_J4_J5_Al_Ij_J1".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"hh:mm A",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[leo saa] LT",nextDay:"[kesho saa] LT",nextWeek:"[wiki ijayo] dddd [saat] LT",lastDay:"[jana] LT",lastWeek:"[wiki iliyopita] dddd [saat] LT",sameElse:"L"},relativeTime:{future:"%s baadaye",past:"tokea %s",s:"hivi punde",ss:"sekunde %d",m:"dakika moja",mm:"dakika %d",h:"saa limoja",hh:"masaa %d",d:"siku moja",dd:"siku %d",M:"mwezi mmoja",MM:"miezi %d",y:"mwaka mmoja",yy:"miaka %d"},week:{dow:1,doy:7}}),{1:"\u0be7",2:"\u0be8",3:"\u0be9",4:"\u0bea",5:"\u0beb",6:"\u0bec",7:"\u0bed",8:"\u0bee",9:"\u0bef",0:"\u0be6"}),bn={"\u0be7":"1","\u0be8":"2","\u0be9":"3","\u0bea":"4","\u0beb":"5","\u0bec":"6","\u0bed":"7","\u0bee":"8","\u0bef":"9","\u0be6":"0"},Sn=(M.defineLocale("ta",{months:"\u0b9c\u0ba9\u0bb5\u0bb0\u0bbf_\u0baa\u0bbf\u0baa\u0bcd\u0bb0\u0bb5\u0bb0\u0bbf_\u0bae\u0bbe\u0bb0\u0bcd\u0b9a\u0bcd_\u0b8f\u0baa\u0bcd\u0bb0\u0bb2\u0bcd_\u0bae\u0bc7_\u0b9c\u0bc2\u0ba9\u0bcd_\u0b9c\u0bc2\u0bb2\u0bc8_\u0b86\u0b95\u0bb8\u0bcd\u0b9f\u0bcd_\u0b9a\u0bc6\u0baa\u0bcd\u0b9f\u0bc6\u0bae\u0bcd\u0baa\u0bb0\u0bcd_\u0b85\u0b95\u0bcd\u0b9f\u0bc7\u0bbe\u0baa\u0bb0\u0bcd_\u0ba8\u0bb5\u0bae\u0bcd\u0baa\u0bb0\u0bcd_\u0b9f\u0bbf\u0b9a\u0bae\u0bcd\u0baa\u0bb0\u0bcd".split("_"),monthsShort:"\u0b9c\u0ba9\u0bb5\u0bb0\u0bbf_\u0baa\u0bbf\u0baa\u0bcd\u0bb0\u0bb5\u0bb0\u0bbf_\u0bae\u0bbe\u0bb0\u0bcd\u0b9a\u0bcd_\u0b8f\u0baa\u0bcd\u0bb0\u0bb2\u0bcd_\u0bae\u0bc7_\u0b9c\u0bc2\u0ba9\u0bcd_\u0b9c\u0bc2\u0bb2\u0bc8_\u0b86\u0b95\u0bb8\u0bcd\u0b9f\u0bcd_\u0b9a\u0bc6\u0baa\u0bcd\u0b9f\u0bc6\u0bae\u0bcd\u0baa\u0bb0\u0bcd_\u0b85\u0b95\u0bcd\u0b9f\u0bc7\u0bbe\u0baa\u0bb0\u0bcd_\u0ba8\u0bb5\u0bae\u0bcd\u0baa\u0bb0\u0bcd_\u0b9f\u0bbf\u0b9a\u0bae\u0bcd\u0baa\u0bb0\u0bcd".split("_"),weekdays:"\u0b9e\u0bbe\u0baf\u0bbf\u0bb1\u0bcd\u0bb1\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0ba4\u0bbf\u0b99\u0bcd\u0b95\u0b9f\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0b9a\u0bc6\u0bb5\u0bcd\u0bb5\u0bbe\u0baf\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0baa\u0bc1\u0ba4\u0ba9\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0bb5\u0bbf\u0baf\u0bbe\u0bb4\u0b95\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0bb5\u0bc6\u0bb3\u0bcd\u0bb3\u0bbf\u0b95\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0b9a\u0ba9\u0bbf\u0b95\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8".split("_"),weekdaysShort:"\u0b9e\u0bbe\u0baf\u0bbf\u0bb1\u0bc1_\u0ba4\u0bbf\u0b99\u0bcd\u0b95\u0bb3\u0bcd_\u0b9a\u0bc6\u0bb5\u0bcd\u0bb5\u0bbe\u0baf\u0bcd_\u0baa\u0bc1\u0ba4\u0ba9\u0bcd_\u0bb5\u0bbf\u0baf\u0bbe\u0bb4\u0ba9\u0bcd_\u0bb5\u0bc6\u0bb3\u0bcd\u0bb3\u0bbf_\u0b9a\u0ba9\u0bbf".split("_"),weekdaysMin:"\u0b9e\u0bbe_\u0ba4\u0bbf_\u0b9a\u0bc6_\u0baa\u0bc1_\u0bb5\u0bbf_\u0bb5\u0bc6_\u0b9a".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, HH:mm",LLLL:"dddd, D MMMM YYYY, HH:mm"},calendar:{sameDay:"[\u0b87\u0ba9\u0bcd\u0bb1\u0bc1] LT",nextDay:"[\u0ba8\u0bbe\u0bb3\u0bc8] LT",nextWeek:"dddd, LT",lastDay:"[\u0ba8\u0bc7\u0bb1\u0bcd\u0bb1\u0bc1] LT",lastWeek:"[\u0b95\u0b9f\u0ba8\u0bcd\u0ba4 \u0bb5\u0bbe\u0bb0\u0bae\u0bcd] dddd, LT",sameElse:"L"},relativeTime:{future:"%s \u0b87\u0bb2\u0bcd",past:"%s \u0bae\u0bc1\u0ba9\u0bcd",s:"\u0b92\u0bb0\u0bc1 \u0b9a\u0bbf\u0bb2 \u0bb5\u0bbf\u0ba8\u0bbe\u0b9f\u0bbf\u0b95\u0bb3\u0bcd",ss:"%d \u0bb5\u0bbf\u0ba8\u0bbe\u0b9f\u0bbf\u0b95\u0bb3\u0bcd",m:"\u0b92\u0bb0\u0bc1 \u0ba8\u0bbf\u0bae\u0bbf\u0b9f\u0bae\u0bcd",mm:"%d \u0ba8\u0bbf\u0bae\u0bbf\u0b9f\u0b99\u0bcd\u0b95\u0bb3\u0bcd",h:"\u0b92\u0bb0\u0bc1 \u0bae\u0ba3\u0bbf \u0ba8\u0bc7\u0bb0\u0bae\u0bcd",hh:"%d \u0bae\u0ba3\u0bbf \u0ba8\u0bc7\u0bb0\u0bae\u0bcd",d:"\u0b92\u0bb0\u0bc1 \u0ba8\u0bbe\u0bb3\u0bcd",dd:"%d \u0ba8\u0bbe\u0b9f\u0bcd\u0b95\u0bb3\u0bcd",M:"\u0b92\u0bb0\u0bc1 \u0bae\u0bbe\u0ba4\u0bae\u0bcd",MM:"%d \u0bae\u0bbe\u0ba4\u0b99\u0bcd\u0b95\u0bb3\u0bcd",y:"\u0b92\u0bb0\u0bc1 \u0bb5\u0bb0\u0bc1\u0b9f\u0bae\u0bcd",yy:"%d \u0b86\u0ba3\u0bcd\u0b9f\u0bc1\u0b95\u0bb3\u0bcd"},dayOfMonthOrdinalParse:/\d{1,2}\u0bb5\u0ba4\u0bc1/,ordinal:function(e){return e+"\u0bb5\u0ba4\u0bc1"},preparse:function(e){return e.replace(/[\u0be7\u0be8\u0be9\u0bea\u0beb\u0bec\u0bed\u0bee\u0bef\u0be6]/g,function(e){return bn[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return wn[e]})},meridiemParse:/\u0baf\u0bbe\u0bae\u0bae\u0bcd|\u0bb5\u0bc8\u0b95\u0bb1\u0bc8|\u0b95\u0bbe\u0bb2\u0bc8|\u0ba8\u0ba3\u0bcd\u0baa\u0b95\u0bb2\u0bcd|\u0b8e\u0bb1\u0bcd\u0baa\u0bbe\u0b9f\u0bc1|\u0bae\u0bbe\u0bb2\u0bc8/,meridiem:function(e,a,t){return e<2?" \u0baf\u0bbe\u0bae\u0bae\u0bcd":e<6?" \u0bb5\u0bc8\u0b95\u0bb1\u0bc8":e<10?" \u0b95\u0bbe\u0bb2\u0bc8":e<14?" \u0ba8\u0ba3\u0bcd\u0baa\u0b95\u0bb2\u0bcd":e<18?" \u0b8e\u0bb1\u0bcd\u0baa\u0bbe\u0b9f\u0bc1":e<22?" \u0bae\u0bbe\u0bb2\u0bc8":" \u0baf\u0bbe\u0bae\u0bae\u0bcd"},meridiemHour:function(e,a){return 12===e&&(e=0),"\u0baf\u0bbe\u0bae\u0bae\u0bcd"===a?e<2?e:e+12:"\u0bb5\u0bc8\u0b95\u0bb1\u0bc8"===a||"\u0b95\u0bbe\u0bb2\u0bc8"===a||"\u0ba8\u0ba3\u0bcd\u0baa\u0b95\u0bb2\u0bcd"===a&&10<=e?e:e+12},week:{dow:0,doy:6}}),M.defineLocale("te",{months:"\u0c1c\u0c28\u0c35\u0c30\u0c3f_\u0c2b\u0c3f\u0c2c\u0c4d\u0c30\u0c35\u0c30\u0c3f_\u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c3f_\u0c0f\u0c2a\u0c4d\u0c30\u0c3f\u0c32\u0c4d_\u0c2e\u0c47_\u0c1c\u0c42\u0c28\u0c4d_\u0c1c\u0c41\u0c32\u0c48_\u0c06\u0c17\u0c38\u0c4d\u0c1f\u0c41_\u0c38\u0c46\u0c2a\u0c4d\u0c1f\u0c46\u0c02\u0c2c\u0c30\u0c4d_\u0c05\u0c15\u0c4d\u0c1f\u0c4b\u0c2c\u0c30\u0c4d_\u0c28\u0c35\u0c02\u0c2c\u0c30\u0c4d_\u0c21\u0c3f\u0c38\u0c46\u0c02\u0c2c\u0c30\u0c4d".split("_"),monthsShort:"\u0c1c\u0c28._\u0c2b\u0c3f\u0c2c\u0c4d\u0c30._\u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c3f_\u0c0f\u0c2a\u0c4d\u0c30\u0c3f._\u0c2e\u0c47_\u0c1c\u0c42\u0c28\u0c4d_\u0c1c\u0c41\u0c32\u0c48_\u0c06\u0c17._\u0c38\u0c46\u0c2a\u0c4d._\u0c05\u0c15\u0c4d\u0c1f\u0c4b._\u0c28\u0c35._\u0c21\u0c3f\u0c38\u0c46.".split("_"),monthsParseExact:!0,weekdays:"\u0c06\u0c26\u0c3f\u0c35\u0c3e\u0c30\u0c02_\u0c38\u0c4b\u0c2e\u0c35\u0c3e\u0c30\u0c02_\u0c2e\u0c02\u0c17\u0c33\u0c35\u0c3e\u0c30\u0c02_\u0c2c\u0c41\u0c27\u0c35\u0c3e\u0c30\u0c02_\u0c17\u0c41\u0c30\u0c41\u0c35\u0c3e\u0c30\u0c02_\u0c36\u0c41\u0c15\u0c4d\u0c30\u0c35\u0c3e\u0c30\u0c02_\u0c36\u0c28\u0c3f\u0c35\u0c3e\u0c30\u0c02".split("_"),weekdaysShort:"\u0c06\u0c26\u0c3f_\u0c38\u0c4b\u0c2e_\u0c2e\u0c02\u0c17\u0c33_\u0c2c\u0c41\u0c27_\u0c17\u0c41\u0c30\u0c41_\u0c36\u0c41\u0c15\u0c4d\u0c30_\u0c36\u0c28\u0c3f".split("_"),weekdaysMin:"\u0c06_\u0c38\u0c4b_\u0c2e\u0c02_\u0c2c\u0c41_\u0c17\u0c41_\u0c36\u0c41_\u0c36".split("_"),longDateFormat:{LT:"A h:mm",LTS:"A h:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm",LLLL:"dddd, D MMMM YYYY, A h:mm"},calendar:{sameDay:"[\u0c28\u0c47\u0c21\u0c41] LT",nextDay:"[\u0c30\u0c47\u0c2a\u0c41] LT",nextWeek:"dddd, LT",lastDay:"[\u0c28\u0c3f\u0c28\u0c4d\u0c28] LT",lastWeek:"[\u0c17\u0c24] dddd, LT",sameElse:"L"},relativeTime:{future:"%s \u0c32\u0c4b",past:"%s \u0c15\u0c4d\u0c30\u0c3f\u0c24\u0c02",s:"\u0c15\u0c4a\u0c28\u0c4d\u0c28\u0c3f \u0c15\u0c4d\u0c37\u0c23\u0c3e\u0c32\u0c41",ss:"%d \u0c38\u0c46\u0c15\u0c28\u0c4d\u0c32\u0c41",m:"\u0c12\u0c15 \u0c28\u0c3f\u0c2e\u0c3f\u0c37\u0c02",mm:"%d \u0c28\u0c3f\u0c2e\u0c3f\u0c37\u0c3e\u0c32\u0c41",h:"\u0c12\u0c15 \u0c17\u0c02\u0c1f",hh:"%d \u0c17\u0c02\u0c1f\u0c32\u0c41",d:"\u0c12\u0c15 \u0c30\u0c4b\u0c1c\u0c41",dd:"%d \u0c30\u0c4b\u0c1c\u0c41\u0c32\u0c41",M:"\u0c12\u0c15 \u0c28\u0c46\u0c32",MM:"%d \u0c28\u0c46\u0c32\u0c32\u0c41",y:"\u0c12\u0c15 \u0c38\u0c02\u0c35\u0c24\u0c4d\u0c38\u0c30\u0c02",yy:"%d \u0c38\u0c02\u0c35\u0c24\u0c4d\u0c38\u0c30\u0c3e\u0c32\u0c41"},dayOfMonthOrdinalParse:/\d{1,2}\u0c35/,ordinal:"%d\u0c35",meridiemParse:/\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f|\u0c09\u0c26\u0c2f\u0c02|\u0c2e\u0c27\u0c4d\u0c2f\u0c3e\u0c39\u0c4d\u0c28\u0c02|\u0c38\u0c3e\u0c2f\u0c02\u0c24\u0c4d\u0c30\u0c02/,meridiemHour:function(e,a){return 12===e&&(e=0),"\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f"===a?e<4?e:e+12:"\u0c09\u0c26\u0c2f\u0c02"===a?e:"\u0c2e\u0c27\u0c4d\u0c2f\u0c3e\u0c39\u0c4d\u0c28\u0c02"===a?10<=e?e:e+12:"\u0c38\u0c3e\u0c2f\u0c02\u0c24\u0c4d\u0c30\u0c02"===a?e+12:void 0},meridiem:function(e,a,t){return e<4?"\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f":e<10?"\u0c09\u0c26\u0c2f\u0c02":e<17?"\u0c2e\u0c27\u0c4d\u0c2f\u0c3e\u0c39\u0c4d\u0c28\u0c02":e<20?"\u0c38\u0c3e\u0c2f\u0c02\u0c24\u0c4d\u0c30\u0c02":"\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f"},week:{dow:0,doy:6}}),M.defineLocale("tet",{months:"Janeiru_Fevereiru_Marsu_Abril_Maiu_Ju\xf1u_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru".split("_"),monthsShort:"Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),weekdays:"Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu".split("_"),weekdaysShort:"Dom_Seg_Ters_Kua_Kint_Sest_Sab".split("_"),weekdaysMin:"Do_Seg_Te_Ku_Ki_Ses_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Ohin iha] LT",nextDay:"[Aban iha] LT",nextWeek:"dddd [iha] LT",lastDay:"[Horiseik iha] LT",lastWeek:"dddd [semana kotuk] [iha] LT",sameElse:"L"},relativeTime:{future:"iha %s",past:"%s liuba",s:"segundu balun",ss:"segundu %d",m:"minutu ida",mm:"minutu %d",h:"oras ida",hh:"oras %d",d:"loron ida",dd:"loron %d",M:"fulan ida",MM:"fulan %d",y:"tinan ida",yy:"tinan %d"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var a=e%10;return e+(1==~~(e%100/10)?"th":1==a?"st":2==a?"nd":3==a?"rd":"th")},week:{dow:1,doy:4}}),{0:"-\u0443\u043c",1:"-\u0443\u043c",2:"-\u044e\u043c",3:"-\u044e\u043c",4:"-\u0443\u043c",5:"-\u0443\u043c",6:"-\u0443\u043c",7:"-\u0443\u043c",8:"-\u0443\u043c",9:"-\u0443\u043c",10:"-\u0443\u043c",12:"-\u0443\u043c",13:"-\u0443\u043c",20:"-\u0443\u043c",30:"-\u044e\u043c",40:"-\u0443\u043c",50:"-\u0443\u043c",60:"-\u0443\u043c",70:"-\u0443\u043c",80:"-\u0443\u043c",90:"-\u0443\u043c",100:"-\u0443\u043c"}),Hn=(M.defineLocale("tg",{months:{format:"\u044f\u043d\u0432\u0430\u0440\u0438_\u0444\u0435\u0432\u0440\u0430\u043b\u0438_\u043c\u0430\u0440\u0442\u0438_\u0430\u043f\u0440\u0435\u043b\u0438_\u043c\u0430\u0439\u0438_\u0438\u044e\u043d\u0438_\u0438\u044e\u043b\u0438_\u0430\u0432\u0433\u0443\u0441\u0442\u0438_\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u0438_\u043e\u043a\u0442\u044f\u0431\u0440\u0438_\u043d\u043e\u044f\u0431\u0440\u0438_\u0434\u0435\u043a\u0430\u0431\u0440\u0438".split("_"),standalone:"\u044f\u043d\u0432\u0430\u0440_\u0444\u0435\u0432\u0440\u0430\u043b_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0435\u043b_\u043c\u0430\u0439_\u0438\u044e\u043d_\u0438\u044e\u043b_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043d\u0442\u044f\u0431\u0440_\u043e\u043a\u0442\u044f\u0431\u0440_\u043d\u043e\u044f\u0431\u0440_\u0434\u0435\u043a\u0430\u0431\u0440".split("_")},monthsShort:"\u044f\u043d\u0432_\u0444\u0435\u0432_\u043c\u0430\u0440_\u0430\u043f\u0440_\u043c\u0430\u0439_\u0438\u044e\u043d_\u0438\u044e\u043b_\u0430\u0432\u0433_\u0441\u0435\u043d_\u043e\u043a\u0442_\u043d\u043e\u044f_\u0434\u0435\u043a".split("_"),weekdays:"\u044f\u043a\u0448\u0430\u043d\u0431\u0435_\u0434\u0443\u0448\u0430\u043d\u0431\u0435_\u0441\u0435\u0448\u0430\u043d\u0431\u0435_\u0447\u043e\u0440\u0448\u0430\u043d\u0431\u0435_\u043f\u0430\u043d\u04b7\u0448\u0430\u043d\u0431\u0435_\u04b7\u0443\u043c\u044a\u0430_\u0448\u0430\u043d\u0431\u0435".split("_"),weekdaysShort:"\u044f\u0448\u0431_\u0434\u0448\u0431_\u0441\u0448\u0431_\u0447\u0448\u0431_\u043f\u0448\u0431_\u04b7\u0443\u043c_\u0448\u043d\u0431".split("_"),weekdaysMin:"\u044f\u0448_\u0434\u0448_\u0441\u0448_\u0447\u0448_\u043f\u0448_\u04b7\u043c_\u0448\u0431".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[\u0418\u043c\u0440\u04ef\u0437 \u0441\u043e\u0430\u0442\u0438] LT",nextDay:"[\u0424\u0430\u0440\u0434\u043e \u0441\u043e\u0430\u0442\u0438] LT",lastDay:"[\u0414\u0438\u0440\u04ef\u0437 \u0441\u043e\u0430\u0442\u0438] LT",nextWeek:"dddd[\u0438] [\u04b3\u0430\u0444\u0442\u0430\u0438 \u043e\u044f\u043d\u0434\u0430 \u0441\u043e\u0430\u0442\u0438] LT",lastWeek:"dddd[\u0438] [\u04b3\u0430\u0444\u0442\u0430\u0438 \u0433\u0443\u0437\u0430\u0448\u0442\u0430 \u0441\u043e\u0430\u0442\u0438] LT",sameElse:"L"},relativeTime:{future:"\u0431\u0430\u044a\u0434\u0438 %s",past:"%s \u043f\u0435\u0448",s:"\u044f\u043a\u0447\u0430\u043d\u0434 \u0441\u043e\u043d\u0438\u044f",m:"\u044f\u043a \u0434\u0430\u049b\u0438\u049b\u0430",mm:"%d \u0434\u0430\u049b\u0438\u049b\u0430",h:"\u044f\u043a \u0441\u043e\u0430\u0442",hh:"%d \u0441\u043e\u0430\u0442",d:"\u044f\u043a \u0440\u04ef\u0437",dd:"%d \u0440\u04ef\u0437",M:"\u044f\u043a \u043c\u043e\u04b3",MM:"%d \u043c\u043e\u04b3",y:"\u044f\u043a \u0441\u043e\u043b",yy:"%d \u0441\u043e\u043b"},meridiemParse:/\u0448\u0430\u0431|\u0441\u0443\u0431\u04b3|\u0440\u04ef\u0437|\u0431\u0435\u0433\u043e\u04b3/,meridiemHour:function(e,a){return 12===e&&(e=0),"\u0448\u0430\u0431"===a?e<4?e:e+12:"\u0441\u0443\u0431\u04b3"===a?e:"\u0440\u04ef\u0437"===a?11<=e?e:e+12:"\u0431\u0435\u0433\u043e\u04b3"===a?e+12:void 0},meridiem:function(e,a,t){return e<4?"\u0448\u0430\u0431":e<11?"\u0441\u0443\u0431\u04b3":e<16?"\u0440\u04ef\u0437":e<19?"\u0431\u0435\u0433\u043e\u04b3":"\u0448\u0430\u0431"},dayOfMonthOrdinalParse:/\d{1,2}-(\u0443\u043c|\u044e\u043c)/,ordinal:function(e){return e+(Sn[e]||Sn[e%10]||Sn[100<=e?100:null])},week:{dow:1,doy:7}}),M.defineLocale("th",{months:"\u0e21\u0e01\u0e23\u0e32\u0e04\u0e21_\u0e01\u0e38\u0e21\u0e20\u0e32\u0e1e\u0e31\u0e19\u0e18\u0e4c_\u0e21\u0e35\u0e19\u0e32\u0e04\u0e21_\u0e40\u0e21\u0e29\u0e32\u0e22\u0e19_\u0e1e\u0e24\u0e29\u0e20\u0e32\u0e04\u0e21_\u0e21\u0e34\u0e16\u0e38\u0e19\u0e32\u0e22\u0e19_\u0e01\u0e23\u0e01\u0e0e\u0e32\u0e04\u0e21_\u0e2a\u0e34\u0e07\u0e2b\u0e32\u0e04\u0e21_\u0e01\u0e31\u0e19\u0e22\u0e32\u0e22\u0e19_\u0e15\u0e38\u0e25\u0e32\u0e04\u0e21_\u0e1e\u0e24\u0e28\u0e08\u0e34\u0e01\u0e32\u0e22\u0e19_\u0e18\u0e31\u0e19\u0e27\u0e32\u0e04\u0e21".split("_"),monthsShort:"\u0e21.\u0e04._\u0e01.\u0e1e._\u0e21\u0e35.\u0e04._\u0e40\u0e21.\u0e22._\u0e1e.\u0e04._\u0e21\u0e34.\u0e22._\u0e01.\u0e04._\u0e2a.\u0e04._\u0e01.\u0e22._\u0e15.\u0e04._\u0e1e.\u0e22._\u0e18.\u0e04.".split("_"),monthsParseExact:!0,weekdays:"\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c_\u0e08\u0e31\u0e19\u0e17\u0e23\u0e4c_\u0e2d\u0e31\u0e07\u0e04\u0e32\u0e23_\u0e1e\u0e38\u0e18_\u0e1e\u0e24\u0e2b\u0e31\u0e2a\u0e1a\u0e14\u0e35_\u0e28\u0e38\u0e01\u0e23\u0e4c_\u0e40\u0e2a\u0e32\u0e23\u0e4c".split("_"),weekdaysShort:"\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c_\u0e08\u0e31\u0e19\u0e17\u0e23\u0e4c_\u0e2d\u0e31\u0e07\u0e04\u0e32\u0e23_\u0e1e\u0e38\u0e18_\u0e1e\u0e24\u0e2b\u0e31\u0e2a_\u0e28\u0e38\u0e01\u0e23\u0e4c_\u0e40\u0e2a\u0e32\u0e23\u0e4c".split("_"),weekdaysMin:"\u0e2d\u0e32._\u0e08._\u0e2d._\u0e1e._\u0e1e\u0e24._\u0e28._\u0e2a.".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY \u0e40\u0e27\u0e25\u0e32 H:mm",LLLL:"\u0e27\u0e31\u0e19dddd\u0e17\u0e35\u0e48 D MMMM YYYY \u0e40\u0e27\u0e25\u0e32 H:mm"},meridiemParse:/\u0e01\u0e48\u0e2d\u0e19\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07|\u0e2b\u0e25\u0e31\u0e07\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07/,isPM:function(e){return"\u0e2b\u0e25\u0e31\u0e07\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07"===e},meridiem:function(e,a,t){return e<12?"\u0e01\u0e48\u0e2d\u0e19\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07":"\u0e2b\u0e25\u0e31\u0e07\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07"},calendar:{sameDay:"[\u0e27\u0e31\u0e19\u0e19\u0e35\u0e49 \u0e40\u0e27\u0e25\u0e32] LT",nextDay:"[\u0e1e\u0e23\u0e38\u0e48\u0e07\u0e19\u0e35\u0e49 \u0e40\u0e27\u0e25\u0e32] LT",nextWeek:"dddd[\u0e2b\u0e19\u0e49\u0e32 \u0e40\u0e27\u0e25\u0e32] LT",lastDay:"[\u0e40\u0e21\u0e37\u0e48\u0e2d\u0e27\u0e32\u0e19\u0e19\u0e35\u0e49 \u0e40\u0e27\u0e25\u0e32] LT",lastWeek:"[\u0e27\u0e31\u0e19]dddd[\u0e17\u0e35\u0e48\u0e41\u0e25\u0e49\u0e27 \u0e40\u0e27\u0e25\u0e32] LT",sameElse:"L"},relativeTime:{future:"\u0e2d\u0e35\u0e01 %s",past:"%s\u0e17\u0e35\u0e48\u0e41\u0e25\u0e49\u0e27",s:"\u0e44\u0e21\u0e48\u0e01\u0e35\u0e48\u0e27\u0e34\u0e19\u0e32\u0e17\u0e35",ss:"%d \u0e27\u0e34\u0e19\u0e32\u0e17\u0e35",m:"1 \u0e19\u0e32\u0e17\u0e35",mm:"%d \u0e19\u0e32\u0e17\u0e35",h:"1 \u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07",hh:"%d \u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07",d:"1 \u0e27\u0e31\u0e19",dd:"%d \u0e27\u0e31\u0e19",w:"1 \u0e2a\u0e31\u0e1b\u0e14\u0e32\u0e2b\u0e4c",ww:"%d \u0e2a\u0e31\u0e1b\u0e14\u0e32\u0e2b\u0e4c",M:"1 \u0e40\u0e14\u0e37\u0e2d\u0e19",MM:"%d \u0e40\u0e14\u0e37\u0e2d\u0e19",y:"1 \u0e1b\u0e35",yy:"%d \u0e1b\u0e35"}}),{1:"'inji",5:"'inji",8:"'inji",70:"'inji",80:"'inji",2:"'nji",7:"'nji",20:"'nji",50:"'nji",3:"'\xfcnji",4:"'\xfcnji",100:"'\xfcnji",6:"'njy",9:"'unjy",10:"'unjy",30:"'unjy",60:"'ynjy",90:"'ynjy"}),vn=(M.defineLocale("tk",{months:"\xddanwar_Fewral_Mart_Aprel_Ma\xfd_I\xfdun_I\xfdul_Awgust_Sent\xfdabr_Okt\xfdabr_No\xfdabr_Dekabr".split("_"),monthsShort:"\xddan_Few_Mar_Apr_Ma\xfd_I\xfdn_I\xfdl_Awg_Sen_Okt_No\xfd_Dek".split("_"),weekdays:"\xddek\u015fenbe_Du\u015fenbe_Si\u015fenbe_\xc7ar\u015fenbe_Pen\u015fenbe_Anna_\u015eenbe".split("_"),weekdaysShort:"\xddek_Du\u015f_Si\u015f_\xc7ar_Pen_Ann_\u015een".split("_"),weekdaysMin:"\xddk_D\u015f_S\u015f_\xc7r_Pn_An_\u015en".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[bug\xfcn sagat] LT",nextDay:"[ertir sagat] LT",nextWeek:"[indiki] dddd [sagat] LT",lastDay:"[d\xfc\xfdn] LT",lastWeek:"[ge\xe7en] dddd [sagat] LT",sameElse:"L"},relativeTime:{future:"%s so\u0148",past:"%s \xf6\u0148",s:"birn\xe4\xe7e sekunt",m:"bir minut",mm:"%d minut",h:"bir sagat",hh:"%d sagat",d:"bir g\xfcn",dd:"%d g\xfcn",M:"bir a\xfd",MM:"%d a\xfd",y:"bir \xfdyl",yy:"%d \xfdyl"},ordinal:function(e,a){switch(a){case"d":case"D":case"Do":case"DD":return e;default:if(0===e)return e+"'unjy";var t=e%10;return e+(Hn[t]||Hn[e%100-t]||Hn[100<=e?100:null])}},week:{dow:1,doy:7}}),M.defineLocale("tl-ph",{months:"Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),monthsShort:"Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),weekdays:"Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),weekdaysShort:"Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),weekdaysMin:"Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"MM/D/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY HH:mm",LLLL:"dddd, MMMM DD, YYYY HH:mm"},calendar:{sameDay:"LT [ngayong araw]",nextDay:"[Bukas ng] LT",nextWeek:"LT [sa susunod na] dddd",lastDay:"LT [kahapon]",lastWeek:"LT [noong nakaraang] dddd",sameElse:"L"},relativeTime:{future:"sa loob ng %s",past:"%s ang nakalipas",s:"ilang segundo",ss:"%d segundo",m:"isang minuto",mm:"%d minuto",h:"isang oras",hh:"%d oras",d:"isang araw",dd:"%d araw",M:"isang buwan",MM:"%d buwan",y:"isang taon",yy:"%d taon"},dayOfMonthOrdinalParse:/\d{1,2}/,ordinal:function(e){return e},week:{dow:1,doy:4}}),"pagh_wa\u2019_cha\u2019_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_"));function jn(e,a,t,s){var n=function(e){var a=Math.floor(e%1e3/100),t=Math.floor(e%100/10),e=e%10,s="";0<a&&(s+=vn[a]+"vatlh");0<t&&(s+=(""!==s?" ":"")+vn[t]+"maH");0<e&&(s+=(""!==s?" ":"")+vn[e]);return""===s?"pagh":s}(e);switch(t){case"ss":return n+" lup";case"mm":return n+" tup";case"hh":return n+" rep";case"dd":return n+" jaj";case"MM":return n+" jar";case"yy":return n+" DIS"}}M.defineLocale("tlh",{months:"tera\u2019 jar wa\u2019_tera\u2019 jar cha\u2019_tera\u2019 jar wej_tera\u2019 jar loS_tera\u2019 jar vagh_tera\u2019 jar jav_tera\u2019 jar Soch_tera\u2019 jar chorgh_tera\u2019 jar Hut_tera\u2019 jar wa\u2019maH_tera\u2019 jar wa\u2019maH wa\u2019_tera\u2019 jar wa\u2019maH cha\u2019".split("_"),monthsShort:"jar wa\u2019_jar cha\u2019_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa\u2019maH_jar wa\u2019maH wa\u2019_jar wa\u2019maH cha\u2019".split("_"),monthsParseExact:!0,weekdays:"lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),weekdaysShort:"lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),weekdaysMin:"lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[DaHjaj] LT",nextDay:"[wa\u2019leS] LT",nextWeek:"LLL",lastDay:"[wa\u2019Hu\u2019] LT",lastWeek:"LLL",sameElse:"L"},relativeTime:{future:function(e){var a=e;return a=-1!==e.indexOf("jaj")?a.slice(0,-3)+"leS":-1!==e.indexOf("jar")?a.slice(0,-3)+"waQ":-1!==e.indexOf("DIS")?a.slice(0,-3)+"nem":a+" pIq"},past:function(e){var a=e;return a=-1!==e.indexOf("jaj")?a.slice(0,-3)+"Hu\u2019":-1!==e.indexOf("jar")?a.slice(0,-3)+"wen":-1!==e.indexOf("DIS")?a.slice(0,-3)+"ben":a+" ret"},s:"puS lup",ss:jn,m:"wa\u2019 tup",mm:jn,h:"wa\u2019 rep",hh:jn,d:"wa\u2019 jaj",dd:jn,M:"wa\u2019 jar",MM:jn,y:"wa\u2019 DIS",yy:jn},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});var xn={1:"'inci",5:"'inci",8:"'inci",70:"'inci",80:"'inci",2:"'nci",7:"'nci",20:"'nci",50:"'nci",3:"'\xfcnc\xfc",4:"'\xfcnc\xfc",100:"'\xfcnc\xfc",6:"'nc\u0131",9:"'uncu",10:"'uncu",30:"'uncu",60:"'\u0131nc\u0131",90:"'\u0131nc\u0131"};function Pn(e,a,t,s){e={s:["viensas secunds","'iensas secunds"],ss:[e+" secunds",e+" secunds"],m:["'n m\xedut","'iens m\xedut"],mm:[e+" m\xeduts",e+" m\xeduts"],h:["'n \xfeora","'iensa \xfeora"],hh:[e+" \xfeoras",e+" \xfeoras"],d:["'n ziua","'iensa ziua"],dd:[e+" ziuas",e+" ziuas"],M:["'n mes","'iens mes"],MM:[e+" mesen",e+" mesen"],y:["'n ar","'iens ar"],yy:[e+" ars",e+" ars"]};return s||a?e[t][0]:e[t][1]}function On(e,a,t){return"m"===t?a?"\u0445\u0432\u0438\u043b\u0438\u043d\u0430":"\u0445\u0432\u0438\u043b\u0438\u043d\u0443":"h"===t?a?"\u0433\u043e\u0434\u0438\u043d\u0430":"\u0433\u043e\u0434\u0438\u043d\u0443":e+" "+(e=+e,a=(a={ss:a?"\u0441\u0435\u043a\u0443\u043d\u0434\u0430_\u0441\u0435\u043a\u0443\u043d\u0434\u0438_\u0441\u0435\u043a\u0443\u043d\u0434":"\u0441\u0435\u043a\u0443\u043d\u0434\u0443_\u0441\u0435\u043a\u0443\u043d\u0434\u0438_\u0441\u0435\u043a\u0443\u043d\u0434",mm:a?"\u0445\u0432\u0438\u043b\u0438\u043d\u0430_\u0445\u0432\u0438\u043b\u0438\u043d\u0438_\u0445\u0432\u0438\u043b\u0438\u043d":"\u0445\u0432\u0438\u043b\u0438\u043d\u0443_\u0445\u0432\u0438\u043b\u0438\u043d\u0438_\u0445\u0432\u0438\u043b\u0438\u043d",hh:a?"\u0433\u043e\u0434\u0438\u043d\u0430_\u0433\u043e\u0434\u0438\u043d\u0438_\u0433\u043e\u0434\u0438\u043d":"\u0433\u043e\u0434\u0438\u043d\u0443_\u0433\u043e\u0434\u0438\u043d\u0438_\u0433\u043e\u0434\u0438\u043d",dd:"\u0434\u0435\u043d\u044c_\u0434\u043d\u0456_\u0434\u043d\u0456\u0432",MM:"\u043c\u0456\u0441\u044f\u0446\u044c_\u043c\u0456\u0441\u044f\u0446\u0456_\u043c\u0456\u0441\u044f\u0446\u0456\u0432",yy:"\u0440\u0456\u043a_\u0440\u043e\u043a\u0438_\u0440\u043e\u043a\u0456\u0432"}[t]).split("_"),e%10==1&&e%100!=11?a[0]:2<=e%10&&e%10<=4&&(e%100<10||20<=e%100)?a[1]:a[2])}function Wn(e){return function(){return e+"\u043e"+(11===this.hours()?"\u0431":"")+"] LT"}}M.defineLocale("tr",{months:"Ocak_\u015eubat_Mart_Nisan_May\u0131s_Haziran_Temmuz_A\u011fustos_Eyl\xfcl_Ekim_Kas\u0131m_Aral\u0131k".split("_"),monthsShort:"Oca_\u015eub_Mar_Nis_May_Haz_Tem_A\u011fu_Eyl_Eki_Kas_Ara".split("_"),weekdays:"Pazar_Pazartesi_Sal\u0131_\xc7ar\u015famba_Per\u015fembe_Cuma_Cumartesi".split("_"),weekdaysShort:"Paz_Pzt_Sal_\xc7ar_Per_Cum_Cmt".split("_"),weekdaysMin:"Pz_Pt_Sa_\xc7a_Pe_Cu_Ct".split("_"),meridiem:function(e,a,t){return e<12?t?"\xf6\xf6":"\xd6\xd6":t?"\xf6s":"\xd6S"},meridiemParse:/\xf6\xf6|\xd6\xd6|\xf6s|\xd6S/,isPM:function(e){return"\xf6s"===e||"\xd6S"===e},longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[bug\xfcn saat] LT",nextDay:"[yar\u0131n saat] LT",nextWeek:"[gelecek] dddd [saat] LT",lastDay:"[d\xfcn] LT",lastWeek:"[ge\xe7en] dddd [saat] LT",sameElse:"L"},relativeTime:{future:"%s sonra",past:"%s \xf6nce",s:"birka\xe7 saniye",ss:"%d saniye",m:"bir dakika",mm:"%d dakika",h:"bir saat",hh:"%d saat",d:"bir g\xfcn",dd:"%d g\xfcn",w:"bir hafta",ww:"%d hafta",M:"bir ay",MM:"%d ay",y:"bir y\u0131l",yy:"%d y\u0131l"},ordinal:function(e,a){switch(a){case"d":case"D":case"Do":case"DD":return e;default:if(0===e)return e+"'\u0131nc\u0131";var t=e%10;return e+(xn[t]||xn[e%100-t]||xn[100<=e?100:null])}},week:{dow:1,doy:7}}),M.defineLocale("tzl",{months:"Januar_Fevraglh_Mar\xe7_Avr\xefu_Mai_G\xfcn_Julia_Guscht_Setemvar_Listop\xe4ts_Noemvar_Zecemvar".split("_"),monthsShort:"Jan_Fev_Mar_Avr_Mai_G\xfcn_Jul_Gus_Set_Lis_Noe_Zec".split("_"),weekdays:"S\xfaladi_L\xfane\xe7i_Maitzi_M\xe1rcuri_Xh\xfaadi_Vi\xe9ner\xe7i_S\xe1turi".split("_"),weekdaysShort:"S\xfal_L\xfan_Mai_M\xe1r_Xh\xfa_Vi\xe9_S\xe1t".split("_"),weekdaysMin:"S\xfa_L\xfa_Ma_M\xe1_Xh_Vi_S\xe1".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD.MM.YYYY",LL:"D. MMMM [dallas] YYYY",LLL:"D. MMMM [dallas] YYYY HH.mm",LLLL:"dddd, [li] D. MMMM [dallas] YYYY HH.mm"},meridiemParse:/d\'o|d\'a/i,isPM:function(e){return"d'o"===e.toLowerCase()},meridiem:function(e,a,t){return 11<e?t?"d'o":"D'O":t?"d'a":"D'A"},calendar:{sameDay:"[oxhi \xe0] LT",nextDay:"[dem\xe0 \xe0] LT",nextWeek:"dddd [\xe0] LT",lastDay:"[ieiri \xe0] LT",lastWeek:"[s\xfcr el] dddd [lasteu \xe0] LT",sameElse:"L"},relativeTime:{future:"osprei %s",past:"ja%s",s:Pn,ss:Pn,m:Pn,mm:Pn,h:Pn,hh:Pn,d:Pn,dd:Pn,M:Pn,MM:Pn,y:Pn,yy:Pn},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),M.defineLocale("tzm-latn",{months:"innayr_br\u02e4ayr\u02e4_mar\u02e4s\u02e4_ibrir_mayyw_ywnyw_ywlywz_\u0263w\u0161t_\u0161wtanbir_kt\u02e4wbr\u02e4_nwwanbir_dwjnbir".split("_"),monthsShort:"innayr_br\u02e4ayr\u02e4_mar\u02e4s\u02e4_ibrir_mayyw_ywnyw_ywlywz_\u0263w\u0161t_\u0161wtanbir_kt\u02e4wbr\u02e4_nwwanbir_dwjnbir".split("_"),weekdays:"asamas_aynas_asinas_akras_akwas_asimwas_asi\u1e0dyas".split("_"),weekdaysShort:"asamas_aynas_asinas_akras_akwas_asimwas_asi\u1e0dyas".split("_"),weekdaysMin:"asamas_aynas_asinas_akras_akwas_asimwas_asi\u1e0dyas".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[asdkh g] LT",nextDay:"[aska g] LT",nextWeek:"dddd [g] LT",lastDay:"[assant g] LT",lastWeek:"dddd [g] LT",sameElse:"L"},relativeTime:{future:"dadkh s yan %s",past:"yan %s",s:"imik",ss:"%d imik",m:"minu\u1e0d",mm:"%d minu\u1e0d",h:"sa\u025ba",hh:"%d tassa\u025bin",d:"ass",dd:"%d ossan",M:"ayowr",MM:"%d iyyirn",y:"asgas",yy:"%d isgasn"},week:{dow:6,doy:12}}),M.defineLocale("tzm",{months:"\u2d49\u2d4f\u2d4f\u2d30\u2d62\u2d54_\u2d31\u2d55\u2d30\u2d62\u2d55_\u2d4e\u2d30\u2d55\u2d5a_\u2d49\u2d31\u2d54\u2d49\u2d54_\u2d4e\u2d30\u2d62\u2d62\u2d53_\u2d62\u2d53\u2d4f\u2d62\u2d53_\u2d62\u2d53\u2d4d\u2d62\u2d53\u2d63_\u2d56\u2d53\u2d5b\u2d5c_\u2d5b\u2d53\u2d5c\u2d30\u2d4f\u2d31\u2d49\u2d54_\u2d3d\u2d5f\u2d53\u2d31\u2d55_\u2d4f\u2d53\u2d61\u2d30\u2d4f\u2d31\u2d49\u2d54_\u2d37\u2d53\u2d4a\u2d4f\u2d31\u2d49\u2d54".split("_"),monthsShort:"\u2d49\u2d4f\u2d4f\u2d30\u2d62\u2d54_\u2d31\u2d55\u2d30\u2d62\u2d55_\u2d4e\u2d30\u2d55\u2d5a_\u2d49\u2d31\u2d54\u2d49\u2d54_\u2d4e\u2d30\u2d62\u2d62\u2d53_\u2d62\u2d53\u2d4f\u2d62\u2d53_\u2d62\u2d53\u2d4d\u2d62\u2d53\u2d63_\u2d56\u2d53\u2d5b\u2d5c_\u2d5b\u2d53\u2d5c\u2d30\u2d4f\u2d31\u2d49\u2d54_\u2d3d\u2d5f\u2d53\u2d31\u2d55_\u2d4f\u2d53\u2d61\u2d30\u2d4f\u2d31\u2d49\u2d54_\u2d37\u2d53\u2d4a\u2d4f\u2d31\u2d49\u2d54".split("_"),weekdays:"\u2d30\u2d59\u2d30\u2d4e\u2d30\u2d59_\u2d30\u2d62\u2d4f\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4f\u2d30\u2d59_\u2d30\u2d3d\u2d54\u2d30\u2d59_\u2d30\u2d3d\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4e\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d39\u2d62\u2d30\u2d59".split("_"),weekdaysShort:"\u2d30\u2d59\u2d30\u2d4e\u2d30\u2d59_\u2d30\u2d62\u2d4f\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4f\u2d30\u2d59_\u2d30\u2d3d\u2d54\u2d30\u2d59_\u2d30\u2d3d\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4e\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d39\u2d62\u2d30\u2d59".split("_"),weekdaysMin:"\u2d30\u2d59\u2d30\u2d4e\u2d30\u2d59_\u2d30\u2d62\u2d4f\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4f\u2d30\u2d59_\u2d30\u2d3d\u2d54\u2d30\u2d59_\u2d30\u2d3d\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4e\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d39\u2d62\u2d30\u2d59".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[\u2d30\u2d59\u2d37\u2d45 \u2d34] LT",nextDay:"[\u2d30\u2d59\u2d3d\u2d30 \u2d34] LT",nextWeek:"dddd [\u2d34] LT",lastDay:"[\u2d30\u2d5a\u2d30\u2d4f\u2d5c \u2d34] LT",lastWeek:"dddd [\u2d34] LT",sameElse:"L"},relativeTime:{future:"\u2d37\u2d30\u2d37\u2d45 \u2d59 \u2d62\u2d30\u2d4f %s",past:"\u2d62\u2d30\u2d4f %s",s:"\u2d49\u2d4e\u2d49\u2d3d",ss:"%d \u2d49\u2d4e\u2d49\u2d3d",m:"\u2d4e\u2d49\u2d4f\u2d53\u2d3a",mm:"%d \u2d4e\u2d49\u2d4f\u2d53\u2d3a",h:"\u2d59\u2d30\u2d44\u2d30",hh:"%d \u2d5c\u2d30\u2d59\u2d59\u2d30\u2d44\u2d49\u2d4f",d:"\u2d30\u2d59\u2d59",dd:"%d o\u2d59\u2d59\u2d30\u2d4f",M:"\u2d30\u2d62o\u2d53\u2d54",MM:"%d \u2d49\u2d62\u2d62\u2d49\u2d54\u2d4f",y:"\u2d30\u2d59\u2d33\u2d30\u2d59",yy:"%d \u2d49\u2d59\u2d33\u2d30\u2d59\u2d4f"},week:{dow:6,doy:12}}),M.defineLocale("ug-cn",{months:"\u064a\u0627\u0646\u06cb\u0627\u0631_\u0641\u06d0\u06cb\u0631\u0627\u0644_\u0645\u0627\u0631\u062a_\u0626\u0627\u067e\u0631\u06d0\u0644_\u0645\u0627\u064a_\u0626\u0649\u064a\u06c7\u0646_\u0626\u0649\u064a\u06c7\u0644_\u0626\u0627\u06cb\u063a\u06c7\u0633\u062a_\u0633\u06d0\u0646\u062a\u06d5\u0628\u0649\u0631_\u0626\u06c6\u0643\u062a\u06d5\u0628\u0649\u0631_\u0646\u0648\u064a\u0627\u0628\u0649\u0631_\u062f\u06d0\u0643\u0627\u0628\u0649\u0631".split("_"),monthsShort:"\u064a\u0627\u0646\u06cb\u0627\u0631_\u0641\u06d0\u06cb\u0631\u0627\u0644_\u0645\u0627\u0631\u062a_\u0626\u0627\u067e\u0631\u06d0\u0644_\u0645\u0627\u064a_\u0626\u0649\u064a\u06c7\u0646_\u0626\u0649\u064a\u06c7\u0644_\u0626\u0627\u06cb\u063a\u06c7\u0633\u062a_\u0633\u06d0\u0646\u062a\u06d5\u0628\u0649\u0631_\u0626\u06c6\u0643\u062a\u06d5\u0628\u0649\u0631_\u0646\u0648\u064a\u0627\u0628\u0649\u0631_\u062f\u06d0\u0643\u0627\u0628\u0649\u0631".split("_"),weekdays:"\u064a\u06d5\u0643\u0634\u06d5\u0646\u0628\u06d5_\u062f\u06c8\u0634\u06d5\u0646\u0628\u06d5_\u0633\u06d5\u064a\u0634\u06d5\u0646\u0628\u06d5_\u0686\u0627\u0631\u0634\u06d5\u0646\u0628\u06d5_\u067e\u06d5\u064a\u0634\u06d5\u0646\u0628\u06d5_\u062c\u06c8\u0645\u06d5_\u0634\u06d5\u0646\u0628\u06d5".split("_"),weekdaysShort:"\u064a\u06d5_\u062f\u06c8_\u0633\u06d5_\u0686\u0627_\u067e\u06d5_\u062c\u06c8_\u0634\u06d5".split("_"),weekdaysMin:"\u064a\u06d5_\u062f\u06c8_\u0633\u06d5_\u0686\u0627_\u067e\u06d5_\u062c\u06c8_\u0634\u06d5".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY-\u064a\u0649\u0644\u0649M-\u0626\u0627\u064a\u0646\u0649\u06adD-\u0643\u06c8\u0646\u0649",LLL:"YYYY-\u064a\u0649\u0644\u0649M-\u0626\u0627\u064a\u0646\u0649\u06adD-\u0643\u06c8\u0646\u0649\u060c HH:mm",LLLL:"dddd\u060c YYYY-\u064a\u0649\u0644\u0649M-\u0626\u0627\u064a\u0646\u0649\u06adD-\u0643\u06c8\u0646\u0649\u060c HH:mm"},meridiemParse:/\u064a\u06d0\u0631\u0649\u0645 \u0643\u06d0\u0686\u06d5|\u0633\u06d5\u06be\u06d5\u0631|\u0686\u06c8\u0634\u062a\u0649\u0646 \u0628\u06c7\u0631\u06c7\u0646|\u0686\u06c8\u0634|\u0686\u06c8\u0634\u062a\u0649\u0646 \u0643\u06d0\u064a\u0649\u0646|\u0643\u06d5\u0686/,meridiemHour:function(e,a){return 12===e&&(e=0),"\u064a\u06d0\u0631\u0649\u0645 \u0643\u06d0\u0686\u06d5"===a||"\u0633\u06d5\u06be\u06d5\u0631"===a||"\u0686\u06c8\u0634\u062a\u0649\u0646 \u0628\u06c7\u0631\u06c7\u0646"===a||"\u0686\u06c8\u0634\u062a\u0649\u0646 \u0643\u06d0\u064a\u0649\u0646"!==a&&"\u0643\u06d5\u0686"!==a&&11<=e?e:e+12},meridiem:function(e,a,t){e=100*e+a;return e<600?"\u064a\u06d0\u0631\u0649\u0645 \u0643\u06d0\u0686\u06d5":e<900?"\u0633\u06d5\u06be\u06d5\u0631":e<1130?"\u0686\u06c8\u0634\u062a\u0649\u0646 \u0628\u06c7\u0631\u06c7\u0646":e<1230?"\u0686\u06c8\u0634":e<1800?"\u0686\u06c8\u0634\u062a\u0649\u0646 \u0643\u06d0\u064a\u0649\u0646":"\u0643\u06d5\u0686"},calendar:{sameDay:"[\u0628\u06c8\u06af\u06c8\u0646 \u0633\u0627\u0626\u06d5\u062a] LT",nextDay:"[\u0626\u06d5\u062a\u06d5 \u0633\u0627\u0626\u06d5\u062a] LT",nextWeek:"[\u0643\u06d0\u0644\u06d5\u0631\u0643\u0649] dddd [\u0633\u0627\u0626\u06d5\u062a] LT",lastDay:"[\u062a\u06c6\u0646\u06c8\u06af\u06c8\u0646] LT",lastWeek:"[\u0626\u0627\u0644\u062f\u0649\u0646\u0642\u0649] dddd [\u0633\u0627\u0626\u06d5\u062a] LT",sameElse:"L"},relativeTime:{future:"%s \u0643\u06d0\u064a\u0649\u0646",past:"%s \u0628\u06c7\u0631\u06c7\u0646",s:"\u0646\u06d5\u0686\u0686\u06d5 \u0633\u06d0\u0643\u0648\u0646\u062a",ss:"%d \u0633\u06d0\u0643\u0648\u0646\u062a",m:"\u0628\u0649\u0631 \u0645\u0649\u0646\u06c7\u062a",mm:"%d \u0645\u0649\u0646\u06c7\u062a",h:"\u0628\u0649\u0631 \u0633\u0627\u0626\u06d5\u062a",hh:"%d \u0633\u0627\u0626\u06d5\u062a",d:"\u0628\u0649\u0631 \u0643\u06c8\u0646",dd:"%d \u0643\u06c8\u0646",M:"\u0628\u0649\u0631 \u0626\u0627\u064a",MM:"%d \u0626\u0627\u064a",y:"\u0628\u0649\u0631 \u064a\u0649\u0644",yy:"%d \u064a\u0649\u0644"},dayOfMonthOrdinalParse:/\d{1,2}(-\u0643\u06c8\u0646\u0649|-\u0626\u0627\u064a|-\u06be\u06d5\u067e\u062a\u06d5)/,ordinal:function(e,a){switch(a){case"d":case"D":case"DDD":return e+"-\u0643\u06c8\u0646\u0649";case"w":case"W":return e+"-\u06be\u06d5\u067e\u062a\u06d5";default:return e}},preparse:function(e){return e.replace(/\u060c/g,",")},postformat:function(e){return e.replace(/,/g,"\u060c")},week:{dow:1,doy:7}}),M.defineLocale("uk",{months:{format:"\u0441\u0456\u0447\u043d\u044f_\u043b\u044e\u0442\u043e\u0433\u043e_\u0431\u0435\u0440\u0435\u0437\u043d\u044f_\u043a\u0432\u0456\u0442\u043d\u044f_\u0442\u0440\u0430\u0432\u043d\u044f_\u0447\u0435\u0440\u0432\u043d\u044f_\u043b\u0438\u043f\u043d\u044f_\u0441\u0435\u0440\u043f\u043d\u044f_\u0432\u0435\u0440\u0435\u0441\u043d\u044f_\u0436\u043e\u0432\u0442\u043d\u044f_\u043b\u0438\u0441\u0442\u043e\u043f\u0430\u0434\u0430_\u0433\u0440\u0443\u0434\u043d\u044f".split("_"),standalone:"\u0441\u0456\u0447\u0435\u043d\u044c_\u043b\u044e\u0442\u0438\u0439_\u0431\u0435\u0440\u0435\u0437\u0435\u043d\u044c_\u043a\u0432\u0456\u0442\u0435\u043d\u044c_\u0442\u0440\u0430\u0432\u0435\u043d\u044c_\u0447\u0435\u0440\u0432\u0435\u043d\u044c_\u043b\u0438\u043f\u0435\u043d\u044c_\u0441\u0435\u0440\u043f\u0435\u043d\u044c_\u0432\u0435\u0440\u0435\u0441\u0435\u043d\u044c_\u0436\u043e\u0432\u0442\u0435\u043d\u044c_\u043b\u0438\u0441\u0442\u043e\u043f\u0430\u0434_\u0433\u0440\u0443\u0434\u0435\u043d\u044c".split("_")},monthsShort:"\u0441\u0456\u0447_\u043b\u044e\u0442_\u0431\u0435\u0440_\u043a\u0432\u0456\u0442_\u0442\u0440\u0430\u0432_\u0447\u0435\u0440\u0432_\u043b\u0438\u043f_\u0441\u0435\u0440\u043f_\u0432\u0435\u0440_\u0436\u043e\u0432\u0442_\u043b\u0438\u0441\u0442_\u0433\u0440\u0443\u0434".split("_"),weekdays:function(e,a){var t={nominative:"\u043d\u0435\u0434\u0456\u043b\u044f_\u043f\u043e\u043d\u0435\u0434\u0456\u043b\u043e\u043a_\u0432\u0456\u0432\u0442\u043e\u0440\u043e\u043a_\u0441\u0435\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0435\u0440_\u043f\u2019\u044f\u0442\u043d\u0438\u0446\u044f_\u0441\u0443\u0431\u043e\u0442\u0430".split("_"),accusative:"\u043d\u0435\u0434\u0456\u043b\u044e_\u043f\u043e\u043d\u0435\u0434\u0456\u043b\u043e\u043a_\u0432\u0456\u0432\u0442\u043e\u0440\u043e\u043a_\u0441\u0435\u0440\u0435\u0434\u0443_\u0447\u0435\u0442\u0432\u0435\u0440_\u043f\u2019\u044f\u0442\u043d\u0438\u0446\u044e_\u0441\u0443\u0431\u043e\u0442\u0443".split("_"),genitive:"\u043d\u0435\u0434\u0456\u043b\u0456_\u043f\u043e\u043d\u0435\u0434\u0456\u043b\u043a\u0430_\u0432\u0456\u0432\u0442\u043e\u0440\u043a\u0430_\u0441\u0435\u0440\u0435\u0434\u0438_\u0447\u0435\u0442\u0432\u0435\u0440\u0433\u0430_\u043f\u2019\u044f\u0442\u043d\u0438\u0446\u0456_\u0441\u0443\u0431\u043e\u0442\u0438".split("_")};return!0===e?t.nominative.slice(1,7).concat(t.nominative.slice(0,1)):e?t[/(\[[\u0412\u0432\u0423\u0443]\]) ?dddd/.test(a)?"accusative":/\[?(?:\u043c\u0438\u043d\u0443\u043b\u043e\u0457|\u043d\u0430\u0441\u0442\u0443\u043f\u043d\u043e\u0457)? ?\] ?dddd/.test(a)?"genitive":"nominative"][e.day()]:t.nominative},weekdaysShort:"\u043d\u0434_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split("_"),weekdaysMin:"\u043d\u0434_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY \u0440.",LLL:"D MMMM YYYY \u0440., HH:mm",LLLL:"dddd, D MMMM YYYY \u0440., HH:mm"},calendar:{sameDay:Wn("[\u0421\u044c\u043e\u0433\u043e\u0434\u043d\u0456 "),nextDay:Wn("[\u0417\u0430\u0432\u0442\u0440\u0430 "),lastDay:Wn("[\u0412\u0447\u043e\u0440\u0430 "),nextWeek:Wn("[\u0423] dddd ["),lastWeek:function(){switch(this.day()){case 0:case 3:case 5:case 6:return Wn("[\u041c\u0438\u043d\u0443\u043b\u043e\u0457] dddd [").call(this);case 1:case 2:case 4:return Wn("[\u041c\u0438\u043d\u0443\u043b\u043e\u0433\u043e] dddd [").call(this)}},sameElse:"L"},relativeTime:{future:"\u0437\u0430 %s",past:"%s \u0442\u043e\u043c\u0443",s:"\u0434\u0435\u043a\u0456\u043b\u044c\u043a\u0430 \u0441\u0435\u043a\u0443\u043d\u0434",ss:On,m:On,mm:On,h:"\u0433\u043e\u0434\u0438\u043d\u0443",hh:On,d:"\u0434\u0435\u043d\u044c",dd:On,M:"\u043c\u0456\u0441\u044f\u0446\u044c",MM:On,y:"\u0440\u0456\u043a",yy:On},meridiemParse:/\u043d\u043e\u0447\u0456|\u0440\u0430\u043d\u043a\u0443|\u0434\u043d\u044f|\u0432\u0435\u0447\u043e\u0440\u0430/,isPM:function(e){return/^(\u0434\u043d\u044f|\u0432\u0435\u0447\u043e\u0440\u0430)$/.test(e)},meridiem:function(e,a,t){return e<4?"\u043d\u043e\u0447\u0456":e<12?"\u0440\u0430\u043d\u043a\u0443":e<17?"\u0434\u043d\u044f":"\u0432\u0435\u0447\u043e\u0440\u0430"},dayOfMonthOrdinalParse:/\d{1,2}-(\u0439|\u0433\u043e)/,ordinal:function(e,a){switch(a){case"M":case"d":case"DDD":case"w":case"W":return e+"-\u0439";case"D":return e+"-\u0433\u043e";default:return e}},week:{dow:1,doy:7}});jt=["\u062c\u0646\u0648\u0631\u06cc","\u0641\u0631\u0648\u0631\u06cc","\u0645\u0627\u0631\u0686","\u0627\u067e\u0631\u06cc\u0644","\u0645\u0626\u06cc","\u062c\u0648\u0646","\u062c\u0648\u0644\u0627\u0626\u06cc","\u0627\u06af\u0633\u062a","\u0633\u062a\u0645\u0628\u0631","\u0627\u06a9\u062a\u0648\u0628\u0631","\u0646\u0648\u0645\u0628\u0631","\u062f\u0633\u0645\u0628\u0631"],vt=["\u0627\u062a\u0648\u0627\u0631","\u067e\u06cc\u0631","\u0645\u0646\u06af\u0644","\u0628\u062f\u06be","\u062c\u0645\u0639\u0631\u0627\u062a","\u062c\u0645\u0639\u06c1","\u06c1\u0641\u062a\u06c1"];return M.defineLocale("ur",{months:jt,monthsShort:jt,weekdays:vt,weekdaysShort:vt,weekdaysMin:vt,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd\u060c D MMMM YYYY HH:mm"},meridiemParse:/\u0635\u0628\u062d|\u0634\u0627\u0645/,isPM:function(e){return"\u0634\u0627\u0645"===e},meridiem:function(e,a,t){return e<12?"\u0635\u0628\u062d":"\u0634\u0627\u0645"},calendar:{sameDay:"[\u0622\u062c \u0628\u0648\u0642\u062a] LT",nextDay:"[\u06a9\u0644 \u0628\u0648\u0642\u062a] LT",nextWeek:"dddd [\u0628\u0648\u0642\u062a] LT",lastDay:"[\u06af\u0630\u0634\u062a\u06c1 \u0631\u0648\u0632 \u0628\u0648\u0642\u062a] LT",lastWeek:"[\u06af\u0630\u0634\u062a\u06c1] dddd [\u0628\u0648\u0642\u062a] LT",sameElse:"L"},relativeTime:{future:"%s \u0628\u0639\u062f",past:"%s \u0642\u0628\u0644",s:"\u0686\u0646\u062f \u0633\u06cc\u06a9\u0646\u0688",ss:"%d \u0633\u06cc\u06a9\u0646\u0688",m:"\u0627\u06cc\u06a9 \u0645\u0646\u0679",mm:"%d \u0645\u0646\u0679",h:"\u0627\u06cc\u06a9 \u06af\u06be\u0646\u0679\u06c1",hh:"%d \u06af\u06be\u0646\u0679\u06d2",d:"\u0627\u06cc\u06a9 \u062f\u0646",dd:"%d \u062f\u0646",M:"\u0627\u06cc\u06a9 \u0645\u0627\u06c1",MM:"%d \u0645\u0627\u06c1",y:"\u0627\u06cc\u06a9 \u0633\u0627\u0644",yy:"%d \u0633\u0627\u0644"},preparse:function(e){return e.replace(/\u060c/g,",")},postformat:function(e){return e.replace(/,/g,"\u060c")},week:{dow:1,doy:4}}),M.defineLocale("uz-latn",{months:"Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"),monthsShort:"Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"),weekdays:"Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"),weekdaysShort:"Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"),weekdaysMin:"Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"D MMMM YYYY, dddd HH:mm"},calendar:{sameDay:"[Bugun soat] LT [da]",nextDay:"[Ertaga] LT [da]",nextWeek:"dddd [kuni soat] LT [da]",lastDay:"[Kecha soat] LT [da]",lastWeek:"[O'tgan] dddd [kuni soat] LT [da]",sameElse:"L"},relativeTime:{future:"Yaqin %s ichida",past:"Bir necha %s oldin",s:"soniya",ss:"%d soniya",m:"bir daqiqa",mm:"%d daqiqa",h:"bir soat",hh:"%d soat",d:"bir kun",dd:"%d kun",M:"bir oy",MM:"%d oy",y:"bir yil",yy:"%d yil"},week:{dow:1,doy:7}}),M.defineLocale("uz",{months:"\u044f\u043d\u0432\u0430\u0440_\u0444\u0435\u0432\u0440\u0430\u043b_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0435\u043b_\u043c\u0430\u0439_\u0438\u044e\u043d_\u0438\u044e\u043b_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043d\u0442\u044f\u0431\u0440_\u043e\u043a\u0442\u044f\u0431\u0440_\u043d\u043e\u044f\u0431\u0440_\u0434\u0435\u043a\u0430\u0431\u0440".split("_"),monthsShort:"\u044f\u043d\u0432_\u0444\u0435\u0432_\u043c\u0430\u0440_\u0430\u043f\u0440_\u043c\u0430\u0439_\u0438\u044e\u043d_\u0438\u044e\u043b_\u0430\u0432\u0433_\u0441\u0435\u043d_\u043e\u043a\u0442_\u043d\u043e\u044f_\u0434\u0435\u043a".split("_"),weekdays:"\u042f\u043a\u0448\u0430\u043d\u0431\u0430_\u0414\u0443\u0448\u0430\u043d\u0431\u0430_\u0421\u0435\u0448\u0430\u043d\u0431\u0430_\u0427\u043e\u0440\u0448\u0430\u043d\u0431\u0430_\u041f\u0430\u0439\u0448\u0430\u043d\u0431\u0430_\u0416\u0443\u043c\u0430_\u0428\u0430\u043d\u0431\u0430".split("_"),weekdaysShort:"\u042f\u043a\u0448_\u0414\u0443\u0448_\u0421\u0435\u0448_\u0427\u043e\u0440_\u041f\u0430\u0439_\u0416\u0443\u043c_\u0428\u0430\u043d".split("_"),weekdaysMin:"\u042f\u043a_\u0414\u0443_\u0421\u0435_\u0427\u043e_\u041f\u0430_\u0416\u0443_\u0428\u0430".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"D MMMM YYYY, dddd HH:mm"},calendar:{sameDay:"[\u0411\u0443\u0433\u0443\u043d \u0441\u043e\u0430\u0442] LT [\u0434\u0430]",nextDay:"[\u042d\u0440\u0442\u0430\u0433\u0430] LT [\u0434\u0430]",nextWeek:"dddd [\u043a\u0443\u043d\u0438 \u0441\u043e\u0430\u0442] LT [\u0434\u0430]",lastDay:"[\u041a\u0435\u0447\u0430 \u0441\u043e\u0430\u0442] LT [\u0434\u0430]",lastWeek:"[\u0423\u0442\u0433\u0430\u043d] dddd [\u043a\u0443\u043d\u0438 \u0441\u043e\u0430\u0442] LT [\u0434\u0430]",sameElse:"L"},relativeTime:{future:"\u042f\u043a\u0438\u043d %s \u0438\u0447\u0438\u0434\u0430",past:"\u0411\u0438\u0440 \u043d\u0435\u0447\u0430 %s \u043e\u043b\u0434\u0438\u043d",s:"\u0444\u0443\u0440\u0441\u0430\u0442",ss:"%d \u0444\u0443\u0440\u0441\u0430\u0442",m:"\u0431\u0438\u0440 \u0434\u0430\u043a\u0438\u043a\u0430",mm:"%d \u0434\u0430\u043a\u0438\u043a\u0430",h:"\u0431\u0438\u0440 \u0441\u043e\u0430\u0442",hh:"%d \u0441\u043e\u0430\u0442",d:"\u0431\u0438\u0440 \u043a\u0443\u043d",dd:"%d \u043a\u0443\u043d",M:"\u0431\u0438\u0440 \u043e\u0439",MM:"%d \u043e\u0439",y:"\u0431\u0438\u0440 \u0439\u0438\u043b",yy:"%d \u0439\u0438\u043b"},week:{dow:1,doy:7}}),M.defineLocale("vi",{months:"th\xe1ng 1_th\xe1ng 2_th\xe1ng 3_th\xe1ng 4_th\xe1ng 5_th\xe1ng 6_th\xe1ng 7_th\xe1ng 8_th\xe1ng 9_th\xe1ng 10_th\xe1ng 11_th\xe1ng 12".split("_"),monthsShort:"Thg 01_Thg 02_Thg 03_Thg 04_Thg 05_Thg 06_Thg 07_Thg 08_Thg 09_Thg 10_Thg 11_Thg 12".split("_"),monthsParseExact:!0,weekdays:"ch\u1ee7 nh\u1eadt_th\u1ee9 hai_th\u1ee9 ba_th\u1ee9 t\u01b0_th\u1ee9 n\u0103m_th\u1ee9 s\xe1u_th\u1ee9 b\u1ea3y".split("_"),weekdaysShort:"CN_T2_T3_T4_T5_T6_T7".split("_"),weekdaysMin:"CN_T2_T3_T4_T5_T6_T7".split("_"),weekdaysParseExact:!0,meridiemParse:/sa|ch/i,isPM:function(e){return/^ch$/i.test(e)},meridiem:function(e,a,t){return e<12?t?"sa":"SA":t?"ch":"CH"},longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM [n\u0103m] YYYY",LLL:"D MMMM [n\u0103m] YYYY HH:mm",LLLL:"dddd, D MMMM [n\u0103m] YYYY HH:mm",l:"DD/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY HH:mm",llll:"ddd, D MMM YYYY HH:mm"},calendar:{sameDay:"[H\xf4m nay l\xfac] LT",nextDay:"[Ng\xe0y mai l\xfac] LT",nextWeek:"dddd [tu\u1ea7n t\u1edbi l\xfac] LT",lastDay:"[H\xf4m qua l\xfac] LT",lastWeek:"dddd [tu\u1ea7n tr\u01b0\u1edbc l\xfac] LT",sameElse:"L"},relativeTime:{future:"%s t\u1edbi",past:"%s tr\u01b0\u1edbc",s:"v\xe0i gi\xe2y",ss:"%d gi\xe2y",m:"m\u1ed9t ph\xfat",mm:"%d ph\xfat",h:"m\u1ed9t gi\u1edd",hh:"%d gi\u1edd",d:"m\u1ed9t ng\xe0y",dd:"%d ng\xe0y",w:"m\u1ed9t tu\u1ea7n",ww:"%d tu\u1ea7n",M:"m\u1ed9t th\xe1ng",MM:"%d th\xe1ng",y:"m\u1ed9t n\u0103m",yy:"%d n\u0103m"},dayOfMonthOrdinalParse:/\d{1,2}/,ordinal:function(e){return e},week:{dow:1,doy:4}}),M.defineLocale("x-pseudo",{months:"J~\xe1\xf1\xfa\xe1~r\xfd_F~\xe9br\xfa~\xe1r\xfd_~M\xe1rc~h_\xc1p~r\xedl_~M\xe1\xfd_~J\xfa\xf1\xe9~_J\xfal~\xfd_\xc1\xfa~g\xfast~_S\xe9p~t\xe9mb~\xe9r_\xd3~ct\xf3b~\xe9r_\xd1~\xf3v\xe9m~b\xe9r_~D\xe9c\xe9~mb\xe9r".split("_"),monthsShort:"J~\xe1\xf1_~F\xe9b_~M\xe1r_~\xc1pr_~M\xe1\xfd_~J\xfa\xf1_~J\xfal_~\xc1\xfag_~S\xe9p_~\xd3ct_~\xd1\xf3v_~D\xe9c".split("_"),monthsParseExact:!0,weekdays:"S~\xfa\xf1d\xe1~\xfd_M\xf3~\xf1d\xe1\xfd~_T\xfa\xe9~sd\xe1\xfd~_W\xe9d~\xf1\xe9sd~\xe1\xfd_T~h\xfars~d\xe1\xfd_~Fr\xedd~\xe1\xfd_S~\xe1t\xfar~d\xe1\xfd".split("_"),weekdaysShort:"S~\xfa\xf1_~M\xf3\xf1_~T\xfa\xe9_~W\xe9d_~Th\xfa_~Fr\xed_~S\xe1t".split("_"),weekdaysMin:"S~\xfa_M\xf3~_T\xfa_~W\xe9_T~h_Fr~_S\xe1".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[T~\xf3d\xe1~\xfd \xe1t] LT",nextDay:"[T~\xf3m\xf3~rr\xf3~w \xe1t] LT",nextWeek:"dddd [\xe1t] LT",lastDay:"[\xdd~\xe9st~\xe9rd\xe1~\xfd \xe1t] LT",lastWeek:"[L~\xe1st] dddd [\xe1t] LT",sameElse:"L"},relativeTime:{future:"\xed~\xf1 %s",past:"%s \xe1~g\xf3",s:"\xe1 ~f\xe9w ~s\xe9c\xf3~\xf1ds",ss:"%d s~\xe9c\xf3\xf1~ds",m:"\xe1 ~m\xed\xf1~\xfat\xe9",mm:"%d m~\xed\xf1\xfa~t\xe9s",h:"\xe1~\xf1 h\xf3~\xfar",hh:"%d h~\xf3\xfars",d:"\xe1 ~d\xe1\xfd",dd:"%d d~\xe1\xfds",M:"\xe1 ~m\xf3\xf1~th",MM:"%d m~\xf3\xf1t~hs",y:"\xe1 ~\xfd\xe9\xe1r",yy:"%d \xfd~\xe9\xe1rs"},dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var a=e%10;return e+(1==~~(e%100/10)?"th":1==a?"st":2==a?"nd":3==a?"rd":"th")},week:{dow:1,doy:4}}),M.defineLocale("yo",{months:"S\u1eb9\u0301r\u1eb9\u0301_E\u0300re\u0300le\u0300_\u1eb8r\u1eb9\u0300na\u0300_I\u0300gbe\u0301_E\u0300bibi_O\u0300ku\u0300du_Ag\u1eb9mo_O\u0300gu\u0301n_Owewe_\u1ecc\u0300wa\u0300ra\u0300_Be\u0301lu\u0301_\u1ecc\u0300p\u1eb9\u0300\u0300".split("_"),monthsShort:"S\u1eb9\u0301r_E\u0300rl_\u1eb8rn_I\u0300gb_E\u0300bi_O\u0300ku\u0300_Ag\u1eb9_O\u0300gu\u0301_Owe_\u1ecc\u0300wa\u0300_Be\u0301l_\u1ecc\u0300p\u1eb9\u0300\u0300".split("_"),weekdays:"A\u0300i\u0300ku\u0301_Aje\u0301_I\u0300s\u1eb9\u0301gun_\u1eccj\u1ecd\u0301ru\u0301_\u1eccj\u1ecd\u0301b\u1ecd_\u1eb8ti\u0300_A\u0300ba\u0301m\u1eb9\u0301ta".split("_"),weekdaysShort:"A\u0300i\u0300k_Aje\u0301_I\u0300s\u1eb9\u0301_\u1eccjr_\u1eccjb_\u1eb8ti\u0300_A\u0300ba\u0301".split("_"),weekdaysMin:"A\u0300i\u0300_Aj_I\u0300s_\u1eccr_\u1eccb_\u1eb8t_A\u0300b".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[O\u0300ni\u0300 ni] LT",nextDay:"[\u1ecc\u0300la ni] LT",nextWeek:"dddd [\u1eccs\u1eb9\u0300 to\u0301n'b\u1ecd] [ni] LT",lastDay:"[A\u0300na ni] LT",lastWeek:"dddd [\u1eccs\u1eb9\u0300 to\u0301l\u1ecd\u0301] [ni] LT",sameElse:"L"},relativeTime:{future:"ni\u0301 %s",past:"%s k\u1ecdja\u0301",s:"i\u0300s\u1eb9ju\u0301 aaya\u0301 die",ss:"aaya\u0301 %d",m:"i\u0300s\u1eb9ju\u0301 kan",mm:"i\u0300s\u1eb9ju\u0301 %d",h:"wa\u0301kati kan",hh:"wa\u0301kati %d",d:"\u1ecdj\u1ecd\u0301 kan",dd:"\u1ecdj\u1ecd\u0301 %d",M:"osu\u0300 kan",MM:"osu\u0300 %d",y:"\u1ecddu\u0301n kan",yy:"\u1ecddu\u0301n %d"},dayOfMonthOrdinalParse:/\u1ecdj\u1ecd\u0301\s\d{1,2}/,ordinal:"\u1ecdj\u1ecd\u0301 %d",week:{dow:1,doy:4}}),M.defineLocale("zh-cn",{months:"\u4e00\u6708_\u4e8c\u6708_\u4e09\u6708_\u56db\u6708_\u4e94\u6708_\u516d\u6708_\u4e03\u6708_\u516b\u6708_\u4e5d\u6708_\u5341\u6708_\u5341\u4e00\u6708_\u5341\u4e8c\u6708".split("_"),monthsShort:"1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),weekdays:"\u661f\u671f\u65e5_\u661f\u671f\u4e00_\u661f\u671f\u4e8c_\u661f\u671f\u4e09_\u661f\u671f\u56db_\u661f\u671f\u4e94_\u661f\u671f\u516d".split("_"),weekdaysShort:"\u5468\u65e5_\u5468\u4e00_\u5468\u4e8c_\u5468\u4e09_\u5468\u56db_\u5468\u4e94_\u5468\u516d".split("_"),weekdaysMin:"\u65e5_\u4e00_\u4e8c_\u4e09_\u56db_\u4e94_\u516d".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY\u5e74M\u6708D\u65e5",LLL:"YYYY\u5e74M\u6708D\u65e5Ah\u70b9mm\u5206",LLLL:"YYYY\u5e74M\u6708D\u65e5ddddAh\u70b9mm\u5206",l:"YYYY/M/D",ll:"YYYY\u5e74M\u6708D\u65e5",lll:"YYYY\u5e74M\u6708D\u65e5 HH:mm",llll:"YYYY\u5e74M\u6708D\u65e5dddd HH:mm"},meridiemParse:/\u51cc\u6668|\u65e9\u4e0a|\u4e0a\u5348|\u4e2d\u5348|\u4e0b\u5348|\u665a\u4e0a/,meridiemHour:function(e,a){return 12===e&&(e=0),"\u51cc\u6668"===a||"\u65e9\u4e0a"===a||"\u4e0a\u5348"===a||"\u4e0b\u5348"!==a&&"\u665a\u4e0a"!==a&&11<=e?e:e+12},meridiem:function(e,a,t){e=100*e+a;return e<600?"\u51cc\u6668":e<900?"\u65e9\u4e0a":e<1130?"\u4e0a\u5348":e<1230?"\u4e2d\u5348":e<1800?"\u4e0b\u5348":"\u665a\u4e0a"},calendar:{sameDay:"[\u4eca\u5929]LT",nextDay:"[\u660e\u5929]LT",nextWeek:function(e){return e.week()!==this.week()?"[\u4e0b]dddLT":"[\u672c]dddLT"},lastDay:"[\u6628\u5929]LT",lastWeek:function(e){return this.week()!==e.week()?"[\u4e0a]dddLT":"[\u672c]dddLT"},sameElse:"L"},dayOfMonthOrdinalParse:/\d{1,2}(\u65e5|\u6708|\u5468)/,ordinal:function(e,a){switch(a){case"d":case"D":case"DDD":return e+"\u65e5";case"M":return e+"\u6708";case"w":case"W":return e+"\u5468";default:return e}},relativeTime:{future:"%s\u540e",past:"%s\u524d",s:"\u51e0\u79d2",ss:"%d \u79d2",m:"1 \u5206\u949f",mm:"%d \u5206\u949f",h:"1 \u5c0f\u65f6",hh:"%d \u5c0f\u65f6",d:"1 \u5929",dd:"%d \u5929",w:"1 \u5468",ww:"%d \u5468",M:"1 \u4e2a\u6708",MM:"%d \u4e2a\u6708",y:"1 \u5e74",yy:"%d \u5e74"},week:{dow:1,doy:4}}),M.defineLocale("zh-hk",{months:"\u4e00\u6708_\u4e8c\u6708_\u4e09\u6708_\u56db\u6708_\u4e94\u6708_\u516d\u6708_\u4e03\u6708_\u516b\u6708_\u4e5d\u6708_\u5341\u6708_\u5341\u4e00\u6708_\u5341\u4e8c\u6708".split("_"),monthsShort:"1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),weekdays:"\u661f\u671f\u65e5_\u661f\u671f\u4e00_\u661f\u671f\u4e8c_\u661f\u671f\u4e09_\u661f\u671f\u56db_\u661f\u671f\u4e94_\u661f\u671f\u516d".split("_"),weekdaysShort:"\u9031\u65e5_\u9031\u4e00_\u9031\u4e8c_\u9031\u4e09_\u9031\u56db_\u9031\u4e94_\u9031\u516d".split("_"),weekdaysMin:"\u65e5_\u4e00_\u4e8c_\u4e09_\u56db_\u4e94_\u516d".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY\u5e74M\u6708D\u65e5",LLL:"YYYY\u5e74M\u6708D\u65e5 HH:mm",LLLL:"YYYY\u5e74M\u6708D\u65e5dddd HH:mm",l:"YYYY/M/D",ll:"YYYY\u5e74M\u6708D\u65e5",lll:"YYYY\u5e74M\u6708D\u65e5 HH:mm",llll:"YYYY\u5e74M\u6708D\u65e5dddd HH:mm"},meridiemParse:/\u51cc\u6668|\u65e9\u4e0a|\u4e0a\u5348|\u4e2d\u5348|\u4e0b\u5348|\u665a\u4e0a/,meridiemHour:function(e,a){return 12===e&&(e=0),"\u51cc\u6668"===a||"\u65e9\u4e0a"===a||"\u4e0a\u5348"===a?e:"\u4e2d\u5348"===a?11<=e?e:e+12:"\u4e0b\u5348"===a||"\u665a\u4e0a"===a?e+12:void 0},meridiem:function(e,a,t){e=100*e+a;return e<600?"\u51cc\u6668":e<900?"\u65e9\u4e0a":e<1200?"\u4e0a\u5348":1200===e?"\u4e2d\u5348":e<1800?"\u4e0b\u5348":"\u665a\u4e0a"},calendar:{sameDay:"[\u4eca\u5929]LT",nextDay:"[\u660e\u5929]LT",nextWeek:"[\u4e0b]ddddLT",lastDay:"[\u6628\u5929]LT",lastWeek:"[\u4e0a]ddddLT",sameElse:"L"},dayOfMonthOrdinalParse:/\d{1,2}(\u65e5|\u6708|\u9031)/,ordinal:function(e,a){switch(a){case"d":case"D":case"DDD":return e+"\u65e5";case"M":return e+"\u6708";case"w":case"W":return e+"\u9031";default:return e}},relativeTime:{future:"%s\u5f8c",past:"%s\u524d",s:"\u5e7e\u79d2",ss:"%d \u79d2",m:"1 \u5206\u9418",mm:"%d \u5206\u9418",h:"1 \u5c0f\u6642",hh:"%d \u5c0f\u6642",d:"1 \u5929",dd:"%d \u5929",M:"1 \u500b\u6708",MM:"%d \u500b\u6708",y:"1 \u5e74",yy:"%d \u5e74"}}),M.defineLocale("zh-mo",{months:"\u4e00\u6708_\u4e8c\u6708_\u4e09\u6708_\u56db\u6708_\u4e94\u6708_\u516d\u6708_\u4e03\u6708_\u516b\u6708_\u4e5d\u6708_\u5341\u6708_\u5341\u4e00\u6708_\u5341\u4e8c\u6708".split("_"),monthsShort:"1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),weekdays:"\u661f\u671f\u65e5_\u661f\u671f\u4e00_\u661f\u671f\u4e8c_\u661f\u671f\u4e09_\u661f\u671f\u56db_\u661f\u671f\u4e94_\u661f\u671f\u516d".split("_"),weekdaysShort:"\u9031\u65e5_\u9031\u4e00_\u9031\u4e8c_\u9031\u4e09_\u9031\u56db_\u9031\u4e94_\u9031\u516d".split("_"),weekdaysMin:"\u65e5_\u4e00_\u4e8c_\u4e09_\u56db_\u4e94_\u516d".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"YYYY\u5e74M\u6708D\u65e5",LLL:"YYYY\u5e74M\u6708D\u65e5 HH:mm",LLLL:"YYYY\u5e74M\u6708D\u65e5dddd HH:mm",l:"D/M/YYYY",ll:"YYYY\u5e74M\u6708D\u65e5",lll:"YYYY\u5e74M\u6708D\u65e5 HH:mm",llll:"YYYY\u5e74M\u6708D\u65e5dddd HH:mm"},meridiemParse:/\u51cc\u6668|\u65e9\u4e0a|\u4e0a\u5348|\u4e2d\u5348|\u4e0b\u5348|\u665a\u4e0a/,meridiemHour:function(e,a){return 12===e&&(e=0),"\u51cc\u6668"===a||"\u65e9\u4e0a"===a||"\u4e0a\u5348"===a?e:"\u4e2d\u5348"===a?11<=e?e:e+12:"\u4e0b\u5348"===a||"\u665a\u4e0a"===a?e+12:void 0},meridiem:function(e,a,t){e=100*e+a;return e<600?"\u51cc\u6668":e<900?"\u65e9\u4e0a":e<1130?"\u4e0a\u5348":e<1230?"\u4e2d\u5348":e<1800?"\u4e0b\u5348":"\u665a\u4e0a"},calendar:{sameDay:"[\u4eca\u5929] LT",nextDay:"[\u660e\u5929] LT",nextWeek:"[\u4e0b]dddd LT",lastDay:"[\u6628\u5929] LT",lastWeek:"[\u4e0a]dddd LT",sameElse:"L"},dayOfMonthOrdinalParse:/\d{1,2}(\u65e5|\u6708|\u9031)/,ordinal:function(e,a){switch(a){case"d":case"D":case"DDD":return e+"\u65e5";case"M":return e+"\u6708";case"w":case"W":return e+"\u9031";default:return e}},relativeTime:{future:"%s\u5167",past:"%s\u524d",s:"\u5e7e\u79d2",ss:"%d \u79d2",m:"1 \u5206\u9418",mm:"%d \u5206\u9418",h:"1 \u5c0f\u6642",hh:"%d \u5c0f\u6642",d:"1 \u5929",dd:"%d \u5929",M:"1 \u500b\u6708",MM:"%d \u500b\u6708",y:"1 \u5e74",yy:"%d \u5e74"}}),M.defineLocale("zh-tw",{months:"\u4e00\u6708_\u4e8c\u6708_\u4e09\u6708_\u56db\u6708_\u4e94\u6708_\u516d\u6708_\u4e03\u6708_\u516b\u6708_\u4e5d\u6708_\u5341\u6708_\u5341\u4e00\u6708_\u5341\u4e8c\u6708".split("_"),monthsShort:"1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),weekdays:"\u661f\u671f\u65e5_\u661f\u671f\u4e00_\u661f\u671f\u4e8c_\u661f\u671f\u4e09_\u661f\u671f\u56db_\u661f\u671f\u4e94_\u661f\u671f\u516d".split("_"),weekdaysShort:"\u9031\u65e5_\u9031\u4e00_\u9031\u4e8c_\u9031\u4e09_\u9031\u56db_\u9031\u4e94_\u9031\u516d".split("_"),weekdaysMin:"\u65e5_\u4e00_\u4e8c_\u4e09_\u56db_\u4e94_\u516d".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY\u5e74M\u6708D\u65e5",LLL:"YYYY\u5e74M\u6708D\u65e5 HH:mm",LLLL:"YYYY\u5e74M\u6708D\u65e5dddd HH:mm",l:"YYYY/M/D",ll:"YYYY\u5e74M\u6708D\u65e5",lll:"YYYY\u5e74M\u6708D\u65e5 HH:mm",llll:"YYYY\u5e74M\u6708D\u65e5dddd HH:mm"},meridiemParse:/\u51cc\u6668|\u65e9\u4e0a|\u4e0a\u5348|\u4e2d\u5348|\u4e0b\u5348|\u665a\u4e0a/,meridiemHour:function(e,a){return 12===e&&(e=0),"\u51cc\u6668"===a||"\u65e9\u4e0a"===a||"\u4e0a\u5348"===a?e:"\u4e2d\u5348"===a?11<=e?e:e+12:"\u4e0b\u5348"===a||"\u665a\u4e0a"===a?e+12:void 0},meridiem:function(e,a,t){e=100*e+a;return e<600?"\u51cc\u6668":e<900?"\u65e9\u4e0a":e<1130?"\u4e0a\u5348":e<1230?"\u4e2d\u5348":e<1800?"\u4e0b\u5348":"\u665a\u4e0a"},calendar:{sameDay:"[\u4eca\u5929] LT",nextDay:"[\u660e\u5929] LT",nextWeek:"[\u4e0b]dddd LT",lastDay:"[\u6628\u5929] LT",lastWeek:"[\u4e0a]dddd LT",sameElse:"L"},dayOfMonthOrdinalParse:/\d{1,2}(\u65e5|\u6708|\u9031)/,ordinal:function(e,a){switch(a){case"d":case"D":case"DDD":return e+"\u65e5";case"M":return e+"\u6708";case"w":case"W":return e+"\u9031";default:return e}},relativeTime:{future:"%s\u5f8c",past:"%s\u524d",s:"\u5e7e\u79d2",ss:"%d \u79d2",m:"1 \u5206\u9418",mm:"%d \u5206\u9418",h:"1 \u5c0f\u6642",hh:"%d \u5c0f\u6642",d:"1 \u5929",dd:"%d \u5929",M:"1 \u500b\u6708",MM:"%d \u500b\u6708",y:"1 \u5e74",yy:"%d \u5e74"}}),M.locale("en"),M});
//# sourceMappingURL=moment-with-locales.min.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),

/***/ "sweetalert2":
/*!***********************!*\
  !*** external "Swal" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Swal;

/***/ })

/******/ });
//# sourceMappingURL=atum-orders.js.map