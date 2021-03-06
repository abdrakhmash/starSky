var sky = document.getElementById('sky');
        var randomNumber = function getRandomInt(min, max) {
                return Math.floor(Math.random() * (max - min)) + min;
            }
        var starQuantity = randomNumber(starParameters.quantityMin, starParameters.quantityMax);
    
        var setStarParameters = function (el) {
            /*position*/
            var maxLeft = window.innerWidth + 1;
            el.style.left = '' + randomNumber(0, maxLeft) + 'px' ;
            el.style.top = '' + randomNumber(0, 100) + 'vh'; 
            el.style.zIndex = randomNumber(starParameters.zIndexMin, starParameters.zIndexMax);
            
            /*Size*/
            var starRadius = randomNumber(starParameters.radiusMin, starParameters.radiusMax);
            el.style.width = starRadius + 'px';
            el.style.height = starRadius + 'px';
            
            /*Light effects*/
            el.style.boxShadow = '0 0 ' + randomNumber(starParameters.boxShadowMin, starParameters.boxShadowMax) + 'px yellow';
            var blurRadius = randomNumber(starParameters.blurMin, starParameters.blurMax);
            el.style.filter = 'blur(' + blurRadius + 'px)';
            el.style.opacity = randomNumber(starParameters.opacityMin, starParameters.opacityMax+1)/100;     
        };
            
        var createStar = function (classNumber) {
            var star = document.createElement('div');
            star.className = 'star';
            star.classList.add('star' + classNumber);
            setStarParameters(star);
            
            sky.appendChild(star);
        }
        
        for (var i = 0; i <= starQuantity; i++) {
            createStar(i);
        }