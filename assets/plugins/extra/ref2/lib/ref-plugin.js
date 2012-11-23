define([
'aloha', 
'jquery', 
'aloha/plugin', 
'aloha/floatingmenu', 
'i18n!ref/nls/en/i18n', 
'aloha/console',
'css!ref/css/ref.css'
], function (Aloha, jQuery, Plugin, i18n, console) {
    'use strict';
 
    return Plugin.create('ref', {
        init: function () {
			this._initButtons();

        },
		_initButtons: function() {
			var self = this;

			// zemanta button
			//FloatingMenu.createScope('Aloha.Zemanta', 'Aloha.continuoustext');
			this.zemantaButton = new Aloha.ui.Button({
				'name' : 'zemanta',
				'iconClass' : 'aloha-button aloha-button-zemanta',
				'size' : 'small',
				'onclick' : function () { self.suggestions(); },
				'tooltip' : 'Create Reference',
				'toggle' : true
			});

			// FloatingMenu.addButton(
			// 	'Aloha.continuoustext',
			// 	this.zemantaButton,
			// 	i18n.t('floatingmenu.tab.related'),
			// 	1
			// );
		}



    });
});