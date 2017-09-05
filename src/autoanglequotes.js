(function (root, factory) {
  'use strict';

  if (typeof module === 'object') {
      module.exports = factory;
  }
  else if (typeof define === 'function' && define.amd) {
      define(factory);
  }
  else {
      root.AutoHR = factory;
  }
} (this, function (MediumEditor) {

  const LEFT_QUOTE_TOKEN = '<<'
  const RIGHT_QUOTE_TOKEN = '>>'

  var AutoAngleQuotes = MediumEditor.Extension.extend({
    name: 'autoanglequotes',
    init: function () {
      this.subscribe('editableKeypress', this.onKeypress.bind(this));
    },
    onKeypress: function (keyPressEvent) {
      if (MediumEditor.util.isKey(keyPressEvent, [MediumEditor.util.keyCode.SPACE])) {
        var parentElement = this.base.getSelectedParentElement();
        var quoteStart = parentElement.textContent;
        if (quoteStart === LEFT_QUOTE_TOKEN) {
          parentElement.textContent = parentElement.textContent.slice(3).trim() + '\u00AB'
        }
        else if (quoteStart === LEFT_QUOTE_TOKEN) {
          parentElement.textContent = parentElement.textContent.slice(3).trim() + '\u00BB'
        }
      }
    }
  });

  return AutoAngleQuotes;

} (typeof require === 'function' ? require('medium-editor') : MediumEditor)));
