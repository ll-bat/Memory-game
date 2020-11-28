
        const allImages = 8;
        const cardsOnRow=4;
        const cardsOnColumn = 4;
        const header = 100;
        const cardBaseColor  = '#1c8a75';
        const cardHoverColor = '#c0392b'

        function level(type){
            const game = new Game(header, cardsOnRow, cardsOnColumn);
            game.setImageSize(allImages)
            game.setLevel(type);
            game.start();
        }

