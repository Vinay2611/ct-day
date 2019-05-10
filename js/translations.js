// JavaScript Document - priyankag@vmware.com
/* translations Object - It holds the translations for all languages and regions */
var translations = {
    'ENGLISH': {
        "optInText": "Yes, I would like to receive communications from VMware and/or its affiliates regarding products and services, newsletters, and events."
    },
    'FRENCH': {
        "optInText": "Oui, j'aimerais recevoir des notifications de VMware et/ou de ses  affiliÃ©s sur les produits et services, newsletters et Ã©vÃ©nements."
    },
    'SPANISH': {
        "optInText": "SÃ­, me gustarÃ­a recibir informaciÃ³n de VMware y sus filiales sobre productos, servicios, boletines y eventos."
    },
    'GERMAN': {
        "optInText": "Ja, ich mÃ¶chte Informationen von VMware und/oder Partnerunternehmen zu Produkten, Services, Newslettern und Events erhalten."
    },
    'RUSSIAN': {
        "optInText": "Ð”Ð°, Ñ Ñ…Ð¾Ñ‡Ñƒ Ð¿Ð¾Ð»ÑƒÑ‡Ð°Ñ‚ÑŒ ÑÐ¾Ð¾Ð±Ñ‰ÐµÐ½Ð¸Ñ Ð¾ Ð¿Ñ€Ð¾Ð´ÑƒÐºÑ‚Ð°Ñ…, ÑƒÑÐ»ÑƒÐ³Ð°Ñ…, Ð½Ð¾Ð²Ð¾ÑÑ‚ÑÑ… Ð¸ ÑÐ¾Ð±Ñ‹Ñ‚Ð¸ÑÑ… Ð¾Ñ‚ VMware Ð¸ Ð´Ð¾Ñ‡ÐµÑ€Ð½Ð¸Ñ… ÐºÐ¾Ð¼Ð¿Ð°Ð½Ð¸Ð¹."
    },
    'ITALIAN': {
        "optInText": "SÃ¬, desidero ricevere comunicazioni da VMware e/o dalle sue affiliate in merito a prodotti e servizi, newsletter ed eventi."
    },
    'SPANISH_LATAM': {
        "optInText": "SÃ­, quiero recibir comunicaciones de VMware o sus afiliados sobre productos y servicios, boletines informativos y eventos."
    },
    'PORTUGUESE': {
        "optInText": "Sim, quero receber boletins informativos e comunicados sobre eventos, produtos e serviÃ§os da VMware e de suas afiliadas."
    },
    'CHINESE': {
        "optInText": "æ˜¯çš„ï¼Œæˆ‘å¸Œæœ› VMware å’Œ/æˆ–ä¸‹å±žæœºæž„å°±äº§å“å’ŒæœåŠ¡ã€æ—¶äº‹ä»¥åŠå„ç§æ´»åŠ¨ä¸Žæˆ‘è”ç³»å¹¶èŽ·çŸ¥ç›¸å…³ä¿¡æ¯ã€‚"
    },
    'KOREAN': {
        "optInText": "ì˜ˆ, VMware ë°/ë˜ëŠ” í•´ë‹¹ ê³„ì—´ì‚¬ë¡œë¶€í„° ì œí’ˆ, ì„œë¹„ìŠ¤, ë‰´ìŠ¤ë ˆí„° ë° ì´ë²¤íŠ¸ì— ëŒ€í•œ ì†Œì‹ì„ ë°›ê² ìŠµë‹ˆë‹¤."
    },
    'TAIWAN': {
        "optInText": "æ˜¯çš„ï¼Œæˆ‘å¸Œæœ›æ”¶åˆ° VMware å’Œ/æˆ–å…¶é—œä¿‚ä¼æ¥­æœ‰é—œç”¢å“ã€æœå‹™ã€é›»å­å ±èˆ‡æ´»å‹•çš„é€šè¨Šå…§å®¹ã€‚"
    },
    'DANISH': {
        "optInText": "Ja, jeg vil gerne modtage kommunikation fra VMware og/eller tilknyttede selskaber vedrÃ¸rende produkter og servicer, nyhedsbreve og events."
    },
    'JAPANESE': {
        "optInText": "E ãƒ¡ãƒ¼ãƒ«é…ä¿¡ã‚’å¸Œæœ›ã—ã¾ã™ã€‚<br><br>ã”ç™»éŒ²ã„ãŸã ã„ãŸæƒ…å ±ã¯ã€VMwareã®ãƒ—ãƒ©ã‚¤ãƒã‚·ãƒ¼ãƒãƒªã‚·ãƒ¼ã«åŸºã¥ã„ã¦å–ã‚Šæ‰±ã‚ã‚Œã¾ã™ã€‚ ãŠå®¢æ§˜ã®é€£çµ¡å…ˆã¸VMwareã®è£½å“ã‚„ã‚µãƒ¼ãƒ“ã‚¹ã«é–¢é€£ã™ã‚‹æƒ…å ±ã€ã¾ãŸã¯å–¶æ¥­ãŠã‚ˆã³ãƒžãƒ¼ã‚±ãƒ†ã‚£ãƒ³ã‚°æ´»å‹•ï¼ˆã‚»ãƒŸãƒŠãƒ¼ã‚„ã‚¤ãƒ™ãƒ³ãƒˆã€ã‚­ãƒ£ãƒ³ãƒšãƒ¼ãƒ³ã€ãƒ‹ãƒ¥ãƒ¼ã‚¹ãƒ¬ã‚¿ãƒ¼ãªã©ï¼‰ã«é–¢ã™ã‚‹æƒ…å ±ç­‰ã‚’æä¾›ã•ã›ã¦ã„ãŸã ãå ´åˆãŒã”ã–ã„ã¾ã™ã€‚VMwareã‹ã‚‰ã®Eãƒ¡ãƒ¼ãƒ«é…ä¿¡ã‚’å¸Œæœ›ã•ã‚Œãªã„å ´åˆã¯ã€å„Eãƒ¡ãƒ¼ãƒ«ã®ä¸‹éƒ¨ã®ãƒªãƒ³ã‚¯ã‚ˆã‚Šåœæ­¢ã„ãŸã ã‘ã¾ã™ã€‚"
    },
    'HEBREW': {
        "optInText": "×›×Ÿ, ××©×ž×— ×œ×§×‘×œ ×”×•×“×¢×•×ª ×ž- VMware ×•/××• ×”×©×•×ª×¤×™× ×”×¢×¡×§×™×™× ×©×œ×” ×‘× ×•×’×¢ ×œ×ž×•×¦×¨×™× ×•×©×™×¨×•×ª×™×, ×™×“×™×¢×•× ×™× ×•××™×¨×•×¢×™×."
    },
    'CZECH': {
        "optInText": "Ano, mÃ¡m zÃ¡jem oÂ odbÄ›r novinek aÂ oznÃ¡menÃ­ oÂ produktech, sluÅ¾bÃ¡ch aÂ udÃ¡lostech spoleÄnosti VMware a/nebo jejÃ­ch pÅ™idruÅ¾enÃ½ch organizacÃ­."
    },
    'DUTCH': {
        "optInText": "Ja, ik wil informatie ontvangen van VMware en/of zijn partners over producten, diensten, nieuws en evenementen."
    },
    'SWEDISH': {
        "optInText": "Ja, jag vill gÃ¤rna mottaga kommunikation frÃ¥n VMware och/eller samarbetspartners till VMware gÃ¤llande produkter, nyhetsbrev och events."
    },
    'POLISH': {
        "optInText": "Tak, chcÄ™ otrzymywaÄ‡ od firmy VMware lub jej podmiotÃ³w stowarzyszonych wiadomoÅ›ci na temat produktÃ³w iÂ usÅ‚ug, newsletterÃ³w iÂ wydarzeÅ„."
    }


};

/*
 * translationModule : Its a Reusable Translation module which accepts the language and returns the translation for consent text.
 */

var translationModule = (function() {

    /* getTranslationObject - Private method to return the actual translation from object , fallbacks to english if lang not found */

    var getTranslationObject = function(lang) {
        return typeof translations[lang] !== 'undefined' ? translations[lang] : translations['ENGLISH'];
    };

    /* fetchTranslations  -  Public method to get the language type which returns the actaul translation.*/

    var fetchTranslations = function(lang) {
        var langText= lang ? lang.toUpperCase() : lang;
        return getTranslationObject(langText);
    };

    return {
        fetchTranslations: fetchTranslations
    };

})();


$(document).ready(function() {
    var currentLangSelector = $("input[name*='language']");
    var translationText = translationModule.fetchTranslations(currentLangSelector.val());
    $("#translatedText").prepend(translationText.optInText);
});