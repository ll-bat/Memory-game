
        class Game {
            headerSize = null;
            cardsOnRow = null;
            cardsOnColumn = null;
            imageSize = null;
            cards = null;
            isFinished = false;
            maxScore = 0;

            static Ease = 1;
            static Medium = 2;
            static Hard = 3;

            timeInterval = null;
            progress = 0;

            constructor(headerSize, cardsOnRow, cardsOnColumn){
                this.headerSize = headerSize;
                this.cardsOnRow = cardsOnRow;
                this.cardsOnColumn = cardsOnColumn;
                this.maxScore = cardsOnColumn * cardsOnRow;
            }

            start(){
                this.restart()
                this.cards = new Cards(this.imageSize, this)
                this.startCounting()
            }

            setImageSize(imageSize){
                this.imageSize = imageSize;
            }

            calcCardHeight(){
                return Math.floor((window.innerHeight - this.headerSize) / this.cardsOnColumn);
            }

            setLevel(type){
                if (type == Game.Ease){
                    this.timeInterval = 100 / 1500;
                }
                else if (type == Game.Medium){
                    this.timeInterval = 100 / 1000;
                }
                else {
                    this.timeInterval = 100 / 600;
                }
            }

            startCounting(){
                setInterval(timeOn, 20);
                const elem = $1('time');
                let self = this;

                function timeOn(e){
                    if (self.progress >= 100) {
                        clearInterval(timeOn)
                        self.finish();
                        return ;
                    }
                    self.progress += self.timeInterval;

                    setStyle(elem, {width: `${self.progress}%`})
                }
            }

            finish(){
                if (!this.isFinished){
                    this.isFinished = true

                    $1('cards').innerHTML = "";
                    $1('backdrop').className = 'position-absolute'
                    console.log('Finished')
                }
            }

            restart(){
                setStyle($1('time'), {width: '0%'});
                $1('cards').innerHTML = "";
                $1('backdrop').className += ' d-none';
            }

        }
