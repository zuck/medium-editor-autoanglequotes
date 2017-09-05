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
      this.subscribe('editableInput', this.onInput.bind(this));
    },
    onInput: function (evt) {
      var parentElement = this.base.getSelectedParentElement();
      var range = document.getSelection().getRangeAt(0);
      var token = parentElement.textContent.substring(range.startOffset - 2, range.startOffset);
      if (token === LEFT_QUOTE_TOKEN) {
        document.execCommand('delete');
        document.execCommand('delete');
        document.execCommand('insertText', false, '\u00AB');
      }
      else if (token === RIGHT_QUOTE_TOKEN) {
        document.execCommand('delete');
        document.execCommand('delete');
        document.execCommand('insertText', false, '\u00BB');
      }
    }
  });

  return AutoAngleQuotes;

} (typeof require === 'function' ? require('medium-editor') : MediumEditor)));
