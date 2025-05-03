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
        //console.log(this.pieceList);
        let prev = -1;
        let i = 0;
        this.pieceList.forEach(piece => {
            if(piece == -1) {
                if (i != 0) {
                    this.pieceList[i-1] = -1;
                }
                //console.log(prev, this.pieceList);
                return prev;
            }
            prev = piece;
            i+=1;
        });
        this.pieceList[3] = -1
        //console.log(prev, this.pieceList);
        return prev;
    },

    TryPlacePiece: function (val){
        //console.log(val, this.pieceList);
        let res = -1;
        let i = 0;
        let prev = -2;
        this.pieceList.forEach(piece => {
            if (piece == -1) {
                console.log(prev, piece, res);
                if (prev < val && res == -1 && prev != -1) {
                    this.pieceList[i] = val;
                    res = val;
                }
            }
            i += 1;
            prev = piece;
        });
        //console.log(res, this.pieceList);
        return res;
    }
});