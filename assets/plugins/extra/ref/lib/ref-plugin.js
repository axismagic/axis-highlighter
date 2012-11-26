define([
	'aloha', 
	'jquery', 
	'aloha/plugin', 
	'ui/ui', 
	'ui/button',
	'ui/floating',
	'PubSub',
	'css!ref/css/ref.css',
	'i18n!ref/nls/i18n', 
	'i18n!aloha/nls/i18n'
], function(Aloha,
            jQuery,
			Plugin,
			Ui,
			Button,
			Floating,
			PubSub,
			css,
			i18n,
			i18nCore) {
	'use strict';

	return Plugin.create('ref', {
		_constructor: function () {
			this._super('ref');
		},

		init: function () {
			var self = this;

			if ( typeof Aloha.settings.plugins != 'undefined' 
				&& typeof Aloha.settings.plugins.ref != 'undefined' ) {
				self.settings = Aloha.settings.plugins.ref;
			}
			
		    var _refButton = Ui.adopt("ref", Button, {
				tooltip: i18n.t('button.createreference.tooltip'),
				icon: "aloha-icon-ref",
				scope: 'Aloha.continuoustext',
		        click: function(){
		            createReference();
		        }
		    });

		},
	});
});
