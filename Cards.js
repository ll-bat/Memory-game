
        class Cards {
            cards = [];
            allImages = null;
            game = null;
            prevChild = null;
            canChooseCard = true;
            score = 0;

            constructor(allImages,game){
                this.game = game;
                this.allImages = allImages
                this.init();
            }

            init(){
                this.setCards();
                this.randomizeCards();
                this.renderCards();
            }

            setCards() {
                for (let i=2; i < this.game.cardsOnRow * this.game.cardsOnColumn + 2; i++){
                    this.cards.push({
                        image: 'images/' + Math.floor(i / 2) + '.png',
                        index: i,
                        value: Math.floor(i / 2)
                    })
                }
            }

            randomizeCards(){
                this.cards.sort((a,b) => 0.5 - Math.random())
            }

            renderCards(){
                let parent = $1('cards');
                let className = `col-${Math.floor(12 / this.game.cardsOnRow)}`;
                let cardHeight = this.game.calcCardHeight();

                this.cards.forEach(cardObj => {
                    let card = new Card(cardObj, this)
                    card.setColors('#1c8a75', '#c0392b');
                    card.setHeight(cardHeight);
                    card.setClassname(className);
                    card.render(parent);
                })
            }

            chooseCard(child){
                if (!this.prevChild) this.prevChild = child;
                else {
                    if (this.prevChild.obj.index === child.obj.index) return;
                    this.canChooseCard = false;

                    if (this.prevChild.obj.value === child.obj.value){
                        tout(() => {
                            this.prevChild.hide();
                            child.hide();
                            this.prevChild = null;
                            this.canChooseCard = true;
                            if ((this.score+=2) === this.game.maxScore){
                                alert("You did well !");
                                this.game.finish();
                            }
                        },300)
                        return;
                    }

                    tout(() => {
                        this.prevChild.close();
                        child.close();
                        this.prevChild = null;
                        this.canChooseCard = true;
                    },400);
                }
            }

        }
