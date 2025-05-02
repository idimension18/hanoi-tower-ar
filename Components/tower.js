AFRAME.registerComponent('tower', {
    schema: {
        towerID: {type: 'number', default: '0'},
        towerSelected: {type: 'bool', default: 'false'}
    },

    init: function () {
        this.towerID = this.data.towerID;
        this.pieceList = [-1, -1, -1, -1];
        if(this.towerID == 0) {
            this.pieceList = [0, 1, 2, 3];
        }
    },

    Deselect: function () {
        this.el.setAttribute('color', '#FFFF00');
        this.towerSelected = false;
    },

    Select: function () {
        let res = !this.towerSelected;
        this.el.setAttribute('color', '#00CC00');
        this.towerSelected = true;
        return res;
    },

    updateDisplay: function () {
        const objectPieces = document.querySelectorAll('[piece]');
        let i = 0;
        this.pieceList.forEach(piece => {
            objectPieces.forEach(objectPiece =>{
                if (objectPiece.components['piece'].id === piece) {
                    objectPiece.components['piece'].setPositionFromTower(this.towerID, i);
                }
            });
            if(piece == -1) return;
            i += 1;
        });
    },

    TrySendPiece: function () {
        let prev = -1;
        let i = 0;
        this.pieceList.forEach(piece => {
            if(piece == -1) {
                if (i != 0) {
                    this.pieceList[i-1] = -1;
                }
                return prev;
            }
            prev = piece;
            i+=1;
        });
        this.pieceList[3] = -1
        return prev;
    },

    TryPlacePiece: function (val){
        let res = -1;
        let i = 0;
        let prev = 4;//plus grand que la plus grande des pièces
        this.pieceList.forEach(piece => {
            if (piece == -1) {
                console.log('first place if', prev > piece, res != -1);
                if (prev > piece && res == -1) {
                    console.log('here tryplace');
                    this.pieceList[i] = val;
                    res = val;
                }
            }
            i += 1;
            prev = piece;
        });
        console.log('place piece', this.pieceList);
        return res;
    }
});