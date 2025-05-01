AFRAME.registerComponent('piece', {
  schema: {
    pieceID: {type: 'number', default: '0'}
  },

  init: function () {
    this.id = this.data.pieceID;

    var el = this.el;
    el.setAttribute('radius-tubular', '0.05');

    <!-- test -->
    el.setAttribute('rotation', '90 0 0');

    if (this.id == 0)
    {
      el.setAttribute('position', '0 0.2 0');
      el.setAttribute('color', '#0000ff');
      el.setAttribute('radius', '0.35');
    }
    else if (this.id == 1)
    {
      el.setAttribute('position', '0 0.4 0');
      el.setAttribute('color', '#ff0000');
      el.setAttribute('radius', '0.3');

    }
    else if (this.id == 2)
    {
      el.setAttribute('position', '0 0.6 0');
      el.setAttribute('color', '#00ff00');
      el.setAttribute('radius', '0.25');
    }
    else
    {
      el.setAttribute('position', '0 0.8 0');
      el.setAttribute('color', '#ff69b4');
      el.setAttribute('radius', '0.2');
    }
  },
});
