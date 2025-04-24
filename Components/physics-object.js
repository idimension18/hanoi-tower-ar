AFRAME.registerComponent('physics-object', {
  schema: {
    model: {},
    body: {type: 'string', default: 'dynamic'},  // dynamic: A freely-moving object
    shape: {type: 'string', default: 'box'},  // hull: Wraps a model in a convex hull, like a shrink-wrap
    matcolor : {type : 'color'}
  },
    init() {
      const objmodel = document.createElement('a-entity')
      this.el.appendChild(objmodel)
      objmodel.setAttribute('obj-model', {obj: this.data.model})
      objmodel.setAttribute('material', {color: this.data.matcolor})

      this.el.addEventListener('model-loaded', e => {
        setTimeout(() => {
          objmodel.setAttribute('shadow', {receive: false})
          // Specify what type of ammo-body (dynamic, static, kinematic)
          objmodel.setAttribute('ammo-body', {type: this.data.body})
          // Waiting for model to load before adding ammo-shape (box, cylinder, sphere, capsule, cone, hull)
          objmodel.setAttribute('ammo-shape', {type: this.data.shape})
        })
      })
    },
})

