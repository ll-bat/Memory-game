
        class Card {
            cardBaseColor  = null;
            cardHoverColor = null;
            className = null;
            parent = null;
            height = null;
            obj = null;

            constructor(card, parent){
                this.parent = parent;
                this.obj = card;
            }

            setColors(cardBaseColor, cardHoverColor){
                this.cardBaseColor = cardBaseColor;
                this.cardHoverColor = cardHoverColor;
            }

            setHeight(height){
                this.height = height;
            }

            setClassname(cls){
                this.className = cls;
            }

            render(parent){
                let row = elt('div', this.className, null, {padding: '0 1px'});
                this.cardObj = elt('div', 'card', null, {height: this.height+'px', marginTop:'2px'});

                this.cardObj.addEventListener('click', (e) => {
                    this.open()
                })

                let img = elt('img', 'image', null, {opacity: '0'});
                img.setAttribute('src', this.obj.image);
                setStyle(img, {
                    transform: 'rotateY(180deg)'
                })

                this.cardObj.append(img);
                row.append(this.cardObj);
                parent.append(row);
            }

            open(){
                if (!this.parent.canChooseCard) return;

                this.parent.chooseCard(this)

                setStyle(this.cardObj, {
                    backgroundColor: this.cardHoverColor,
                    transform: 'rotateY(180deg)'
                })
                tout(() => {
                    setStyle(this.cardObj.children[0], {opacity:'1'})
                }, 100)
            }

            close(){
                setStyle(this.cardObj, {
                    backgroundColor: this.cardBaseColor,
                    transform: 'rotateY(0deg)'
                })

                tout(() => {
                    setStyle(this.cardObj.children[0], {opacity:'0'})
                }, 100)
            }

            hide(){
                setStyle(this.cardObj, {
                    visibility: 'hidden'
                })
            }
        }

