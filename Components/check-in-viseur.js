AFRAME.registerComponent('check-in-viseur', {
    init: function () {
        this.selectedAmount = 0;
        this.firstSelected = -1;
        this.secondSelected = -1;
        this.tower = document.querySelector('#tower');
        this.tower2 = document.querySelector('#tower2');
        this.tower3 = document.querySelector('#tower3');

        this.towerList = [tower, tower2, tower3];

        this.tower.classList.add('clickable');
        this.tower2.classList.add('clickable');
        this.tower3.classList.add('clickable');
        this.isTowerSelected = false;
        this.marker = document.querySelector('a-marker');
        this.camera = this.el.sceneEl.camera;

        this.el.addEventListener('raycaster-intersection', (evt) => {
            this.handleIntersection(evt);
        });

        this.el.addEventListener('raycaster-intersection-cleared', () => {
            //this.handleIntersectionCleared();
        });
    },

    updateSelection: function(id){
        if(this.selectedAmount == 0) {
            this.firstSelected = id;
        }
        else {
            this.secondSelected = id;
        }
        this.selectedAmount += 1;
    },

    tryPieceTransfer: function(){
        let pieceTaken = this.towerList[this.firstSelected].components['tower'].TrySendPiece();
        if (pieceTaken == -1) {
            console.log('cannot take piece from here');
            return
        };
        const piecePut = this.towerList[this.secondSelected].components['tower'].TryPlacePiece(pieceTaken);
        console.log('piece put: ', piecePut);
        if (piecePut == -1) this.towerList[this.firstSelected].components['tower'].TryPlacePiece(pieceTaken); //On remet la pièce à sa place en cas d'impossibilité de transfer

        this.tower.components['tower'].updateDisplay();
        this.tower2.components['tower'].updateDisplay();
        this.tower3.components['tower'].updateDisplay();
    },

    handleIntersection: function (evt) {
        let res = false;
        if (evt.detail.els.includes(this.tower)) {
            res = this.tower.components['tower'].Select();
            if(res) this.updateSelection(0);
        }
        if (evt.detail.els.includes(this.tower2)) {
            res = this.tower2.components['tower'].Select();
            if(res) this.updateSelection(1);
        }
        if (evt.detail.els.includes(this.tower3)) {
            res = this.tower3.components['tower'].Select();
            if(res) this.updateSelection(2);
        }

        if(this.selectedAmount == 2)
        {
            this.tryPieceTransfer();

            this.tower.components['tower'].Deselect();
            this.tower2.components['tower'].Deselect();
            this.tower3.components['tower'].Deselect();
            this.selectedAmount = 0;
            this.firstSelected = -1;
            this.secondSelected = -1;
        }        
    },

    /*handleIntersectionCleared: function () {
        if (!this.isTowerSelected) {
            this.tower.setAttribute('material', 'color', 'yellow');
        }
        if (!this.isTowerSelected) {
            this.tower2.setAttribute('material', 'color', 'yellow');
        }
        if (!this.isTowerSelected) {
            this.tower3.setAttribute('material', 'color', 'yellow');
        }
    }*/
});
