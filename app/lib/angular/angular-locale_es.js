﻿angular.module("ngLocale", [], ["$provide", function ($provide) {
    var PLURAL_CATEGORY = { ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other" };
    $provide.value("$locale", { "DATETIME_FORMATS": { "MONTH": ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"], "SHORTMONTH": ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"], "DAY": ["domingo", "lunes", "martes", "miÃ©rcoles", "jueves", "viernes", "sÃ¡bado"], "SHORTDAY": ["dom", "lun", "mar", "miÃ©", "jue", "vie", "sÃ¡b"], "AMPMS": ["a.m.", "p.m."], "medium": "dd/MM/yyyy HH:mm:ss", "short": "dd/MM/yy HH:mm", "fullDate": "EEEE d 'de' MMMM 'de' y", "longDate": "d 'de' MMMM 'de' y", "mediumDate": "dd/MM/yyyy", "shortDate": "dd/MM/yy", "mediumTime": "HH:mm:ss", "shortTime": "HH:mm" }, "NUMBER_FORMATS": { "DECIMAL_SEP": ",", "GROUP_SEP": ".", "PATTERNS": [{ "minInt": 1, "minFrac": 0, "macFrac": 0, "posPre": "", "posSuf": "", "negPre": "-", "negSuf": "", "gSize": 3, "lgSize": 3, "maxFrac": 3 }, { "minInt": 1, "minFrac": 2, "macFrac": 0, "posPre": "\u00A4Â ", "posSuf": "", "negPre": "\u00A4Â -", "negSuf": "", "gSize": 3, "lgSize": 3, "maxFrac": 2 }], "CURRENCY_SYM": "â‚¬" }, "pluralCat": function (n) { if (n == 1) { return PLURAL_CATEGORY.ONE; } return PLURAL_CATEGORY.OTHER; }, "id": "es" });
}]);