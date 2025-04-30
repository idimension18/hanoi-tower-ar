AFRAME.registerComponent('check-in-viseur', {
    init: function () {
        this.cube = document.querySelector('#cube');
        this.cube2 = document.querySelector('#cube2');
        this.cube3 = document.querySelector('#cube3');
        this.plane = document.querySelector('#plane');

        this.cube.classList.add('clickable');
        this.cube2.classList.add('clickable');
        this.cube3.classList.add('clickable');
        this.plane.classList.add('clickable');
        this.isCubeSelected = false;
        this.marker = document.querySelector('a-marker');
        this.camera = this.el.sceneEl.camera;

        this.el.addEventListener('raycaster-intersection', (evt) => {
            this.handleIntersection(evt);
        });

        this.el.addEventListener('raycaster-intersection-cleared', () => {
            this.handleIntersectionCleared();
        });
    },

    handleIntersection: function (evt) {
        if (evt.detail.els.includes(this.cube)) {
            this.cube.setAttribute('material', 'color', 'green');
        }
        if (evt.detail.els.includes(this.cube2)) {
            this.cube2.setAttribute('material', 'color', 'green');
        }
        if (evt.detail.els.includes(this.cube3)) {
            this.cube3.setAttribute('material', 'color', 'green');
        }
        if(evt.detail.els.includes(this.plane))
        {
          //console.log(evt.detail.intersections[0].point);
        }
    },

    handleIntersectionCleared: function () {
        if (!this.isCubeSelected) {
            this.cube.setAttribute('material', 'color', 'yellow');
        }
        if (!this.isCubeSelected) {
            this.cube2.setAttribute('material', 'color', 'yellow');
        }
        if (!this.isCubeSelected) {
            this.cube3.setAttribute('material', 'color', 'yellow');
        }
    },
});
