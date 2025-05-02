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
                if (objectPiece && objectPiece.id === piece) objectPiece.setPositionFromTower(this.towerID, i);
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
                if (i != 0) this.pieceList[i-1] = -1;
                return prev;
            }
            prev = piece;
            i+=1;
        });
        return prev;
    },

    TryPlacePiece: function (val){
        console.log('trying to put: ', val);
        let prev = 4;//plus grand que la plus grande des pièces
        this.pieceList.forEach(piece => {
            if (piece == -1) {
                console.log('found empty slot');
                if (prev > piece) {
                    console.log('piece placement allowed');
                    piece = val;
                    return val;
                }
                return -1;
            }
            prev = piece;
        });
        return -1;
    }
});