AFRAME.registerComponent('plain-color', {
  schema: {
    color: {type: 'color', default: '#FFFFFF'}
  },

  init: function () {
    this.el.addEventListener("model-loaded", e => { // when using gltf models use "model-loaded" instead
      const material = new THREE.MeshPhongMaterial({
        color: this.data.color
      });

      const object = this.el.getObject3D('mesh');
      if (object) {
        object.traverse(function (node) {
          if (node.isMesh) node.material = material;
        });
      };

      const objobject = this.el.object3D.objmodel;
      if (objobject) {
        object.traverse(function (node) {
          if (node.isMesh) node.material = material;
        });
      };

    });
  },

});
