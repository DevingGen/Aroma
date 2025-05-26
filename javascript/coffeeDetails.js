document.addEventListener('DOMContentLoaded', function() {
    const coffeeCards = document.querySelectorAll('.kopiCard');
    const kopi = document.createElement('div');
    kopi.className = 'kopi-modal';
    let currentCard = null;
    
    kopi.innerHTML = `
        <div class="kopi-content">
            <span class="close-kopi">&times;</span>
            <div class="kopi-image"></div>
            <div class="kopi-details">
                <h2 class="kopi-name"></h2>
                <div class="details-section">
                    <h3>Details:</h3>
                    <p class="taste"></p>
                    <p class="caffeine"></p>
                    <p class="origin"></p>
                </div>
                <div class="ingredients-section">
                    <h3>Ingredients:</h3>
                    <ul class="ingredients-list"></ul>
                </div>
                <div class="equipment-section">
                    <h3>Equipment:</h3>
                    <ul class="equipment-list"></ul>
                </div>
                <div class="method-section">
                    <h3>Step by step method:</h3>
                    <ol class="steps"></ol>
                </div>
            </div>
        </div>
    `;

    const fullKopi = document.createElement('div');
    fullKopi.className = 'full-kopi';
    fullKopi.innerHTML = `
        <div class="full-kopi-content">
            <span class="close-full-kopi">&times;</span>
            <img class="full-kopi-image" src="" alt="Full size coffee image">
        </div>
    `;
    
    document.body.appendChild(kopi);
    document.body.appendChild(fullKopi);
    
    const coffeeData = {
        'Espresso': {
            image: 'PopularImages/espresso.jpg',
            taste: 'Rich, Strong, Bitter',
            caffeine: 'High (63mg)',
            origin: 'Italy, 1901',
            equipment: [
                'Espresso Grinder',
                'Espresso Machine',
                'Espresso Puck Preparation tools',
                'Scale',
                'Timer'
            ],
            ingredients: [
                '18g Freshly Ground Coffee Beans',
                'Filtered Water',
                'Optional: Sugar or Sweetener'
            ],
            steps: [
                '<strong>Measure and Grind Coffee</strong> Use 18 grams of finely ground coffee for a double shot. Aim for a brew ratio of 1:2, resulting in 36 to 40 grams of espresso liquid. Always check your portafilter basket\'s capacity. Overfilling can cause sour, under-extracted espresso due to poor water flow.',
                '<strong>Prepare Your Espresso Puck</strong> Before tamping, remove clumps and level the grounds using a WDT (Weiss Distribution Technique) tool. Consider using portafilter paper and a puck screen to improve water flow and consistency. A well-prepared puck prevents channeling and ensures even extraction.',
                '<strong>Tamp</strong> Tamp the coffee grounds evenly with about 30 lbs of pressure. This step compresses the coffee to ensure uniform resistance during brewing. If using a puck screen, place it on top after tamping.',
                '<strong>Lock in Your Portafilter</strong> Secure the portafilter into the machine\'s group head firmly but not too tight. Overtightening can damage the rubber gasket over time.',
                '<strong>Choose Shot Volume and Brew</strong> Start your shot and aim for a yield of 36 to 40 grams in 30 to 35 seconds. Watch for a smooth, steady flow. If the espresso brews too fast, adjust your grind finer. Taste is key, so adjust based on flavor and timing.',
                '<strong>Serve and Enjoy</strong> Stir your espresso and enjoy it straight or with steamed milk for drinks like lattes or cappuccinos. Taste and balance are personal, so adjust as needed to your liking.',
                '<em>Reference: <a href="https://coffeebros.com/pages/espresso-brew-guide" target="_blank">Coffee Bros Espresso Brew Guide</a></em>'
            ]
        },
        'Cappuccino': {
            image: 'PopularImages/cappuccino.png',
            taste: 'Balanced, Creamy, Smooth',
            equipment: [
                'Espresso Machine or Nespresso Machine',
                'Milk Frother (e.g., Aeroccino4)',
                'Cappuccino Cup'
            ],
            ingredients: [
                '1 Nespresso Capsule (Vertuo: Voltesso, Decaffeinato Intenso; Original: Firenze Arpeggio, Ristretto Italiano Decaffeinato)',
                '3 oz. Milk',
                'Cinnamon (optional, for garnish)'
            ],
            steps: [
                '<strong>Froth the Milk</strong> Use an Aeroccino or any milk frother to heat and foam 3 oz. of milk, creating a creamy microfoam for the cappuccino.',
                '<strong>Brew the Espresso</strong> Brew one espresso shot (0.85 fl oz to 1.35 fl oz) directly into a cappuccino cup using your machine.',
                '<strong>Pour the Milk</strong> Immediately pour the frothed milk into the espresso, allowing the milk and foam to evenly distribute.',
                '<strong>Top with Foam</strong> Use extra froth to fully cover the surface, hiding any brown espresso spots.',
                '<strong>Garnish</strong> Optionally, sprinkle cinnamon on top of the foam for added flavor.',
                '<em>Reference: <a href="https://www.nespresso.com/recipes/au/en/3422CAP-cappuccino.html" target="_blank">Nespresso Cappuccino Recipe</a></em>'
            ]
        },
        'Latte': {
            image: 'PopularImages/latte.jpg',
            taste: 'Smooth, Mellow, Creamy',
            equipment: [
                'Espresso Machine or Coffee Maker',
                'Milk Saucepan or Milk Frother',
                'Wire Whisk or Milk Frother',
                'Latte Cups'
            ],
            ingredients: [
                '1 ⅓ cups Hot Freshly Brewed Dark Roast Espresso Coffee',
                '2 cups Milk',
                'Foamed Milk (from whisking or frothing, for topping)'
            ],
            steps: [
                '<strong>Heat the Milk</strong> Pour 2 cups of milk into a saucepan and heat over medium-low heat. Do not boil. Use a wire whisk to briskly whisk the milk until a layer of foam forms on top.',
                '<strong>Brew the Espresso</strong> Brew about 1⅓ cups of dark roast espresso. This can be divided into 4 servings.',
                '<strong>Combine the Espresso and Milk</strong> Pour the brewed espresso into four cups. Add the steamed milk while holding back the foam with a spoon.',
                '<strong>Top with Foam</strong> Spoon the remaining milk foam over the top of each latte to finish.',
                '<em>Reference: <a href="https://www.allrecipes.com/recipe/96629/cafe-latte/" target="_blank">AllRecipes Café Latte Recipe</a></em>'
            ]
        },
        'Americano': {
            image: 'PopularImages/americano.jpg',
            taste: 'Smooth, Bold, Less Intense than Espresso',
            equipment: [
                'Espresso Machine or Moka Pot',
                'Gooseneck Kettle',
                'Tall Coffee Cup'
            ],
            ingredients: [
                '2 oz (Double Shot) Espresso',
                '8 oz Hot Water'
            ],
            steps: [
                '<strong>Step 1: Brew a Double Shot of Espresso</strong> Use your espresso machine or Moka pot to brew 2 ounces of espresso. This is the foundation of your Americano and provides the rich coffee flavor.',
                '<strong>Step 2: Heat the Water</strong> Heat 8 ounces of water to just below boiling (around 195–205°F or 90–96°C) using a kettle—preferably a gooseneck kettle for better control.',
                '<strong>Step 3: Combine Espresso and Water</strong> Pour the hot water into a tall coffee cup first, then slowly add the espresso over the water to preserve the crema. Alternatively, you can pour the hot water over the espresso if you prefer, but adding espresso last helps keep the crema intact.',
                '<strong>Step 4: Serve and Enjoy</strong> Your Americano is ready to drink. Adjust the water-to-espresso ratio if you prefer a stronger or milder taste.',
                '<em>Reference: <a href="https://beanbox.com/blog/how-to-make-an-americano" target="_blank">Beanbox Americano Guide</a></em>'
            ]
        },
        'Mocha': {
            image: 'PopularImages/mocha.jpg',
            taste: 'Rich, Chocolatey, Sweet',
            caffeine: 'High (Approx. 130mg)',
            origin: 'Italy, 19th Century',
            equipment: ['Espresso Machine', 'Milk Steamer', 'Cocoa Powder'],
            ingredients: ['Espresso Shot', 'Steamed Milk', 'Cocoa Powder', 'Whipped Cream (optional)'],
            steps: [
                'Brew a shot of espresso',
                'Steam milk until velvety smooth',
                'Mix cocoa powder with hot water to create a paste',
                'Pour espresso into a cup',
                'Add the cocoa paste and stir well',
                'Pour steamed milk over the mixture',
                'Top with whipped cream if desired',
                'Dust with additional cocoa powder'
            ]
        },
        'Irish Coffee': {
            image: 'PopularImages/irishcoffee.png',
            taste: 'Warm, Bold, Slightly Sweet',
            caffeine: 'Moderate (Depends on coffee used)',
            origin: 'Ireland, 1940s',
            equipment: [
                'Coffee Brewer',
                'Mug or Heatproof Glass',
                'Spoon',
                'Whisk or Electric Mixer (for whipped cream)'
            ],
            ingredients: [
                '1 cup Freshly Brewed Hot Coffee',
                '1 to 1.5 oz Irish Whiskey (e.g., Jameson or Bushmills)',
                '1 tablespoon Maple Syrup (or sugar, to taste)',
                'Whipped Cream',
                'Grated Chocolate or Cocoa Powder (optional, for garnish)'
            ],
            steps: [
                '<strong>Brew Fresh Coffee</strong> Use a dark roast for a richer flavor, and brew your coffee fresh to ensure it\'s hot and aromatic.',
                '<strong>Prepare Your Mug</strong> Pour 1 to 1.5 ounces of Irish whiskey into a mug or heatproof glass. Jameson is a classic choice, but other Irish whiskeys work just as well.',
                '<strong>Sweeten the Whiskey</strong> Add about 1 tablespoon of maple syrup. You can substitute with brown or white sugar. Stir in a small splash of hot coffee to help blend.',
                '<strong>Add the Coffee</strong> Fill the rest of the mug with hot coffee, leaving about half an inch at the top for the whipped cream.',
                '<strong>Top and Garnish</strong> Gently spoon freshly whipped cream on top of the coffee until it forms a soft layer. Finish with a sprinkle of grated chocolate or cocoa powder for an indulgent touch.',
                '<em>Reference: <a href="https://cookieandkate.com/best-irish-coffee-recipe/" target="_blank">Cookie and Kate Irish Coffee Recipe</a></em>'
            ]
        },
        'Affogato': {
            image: 'PopularImages/affogato.png',
            taste: 'Creamy, Bold, Slightly Sweet',
            caffeine: 'Moderate to High (depends on espresso shot)',
            origin: 'Italy',
            equipment: [
                'Espresso Machine or Moka Pot',
                'Glass or Dessert Cup',
                'Spoon'
            ],
            ingredients: [
                '1 shot (30 ml) Hot Espresso',
                '1–2 scoops Vanilla Ice Cream or Gelato',
                '0.5 oz (1 tbsp) Liquor – Frangelico, Amaretto, or Rum (optional)',
                'Grated Chocolate (optional)',
                'Biscotti or Almond Cookies (optional)',
                'Whipped Cream (optional)',
                'Crushed Nuts – Hazelnuts or Pistachios (optional)',
                'Melted Chocolate Drizzle (optional)'
            ],
            steps: [
                '<strong>Brew Espresso</strong> Prepare a single shot (30 ml or 1 oz) of hot espresso using your machine, moka pot, or coffee appliance of choice.',
                '<strong>Scoop Ice Cream</strong> Place one large or two small scoops of vanilla gelato or ice cream into a glass or dessert cup.',
                '<strong>Pour Espresso</strong> Immediately pour the hot espresso over the ice cream. Watch as it begins to melt and swirl together.',
                '<strong>Add Liquor (Optional)</strong> Pour in half a shot (15 ml or 1 tbsp) of your chosen liquor—such as Frangelico, Amaretto, or Kahlua—for an after-dinner kick.',
                '<strong>Customize (Optional)</strong> Add your favorite toppings: grated chocolate, biscotti for dunking, a dollop of whipped cream, a drizzle of melted chocolate, or a sprinkle of crushed nuts.',
                '<strong>Serve Immediately</strong> Serve affogato with espresso on the side for a DIY pour, and enjoy while the ice cream melts into the coffee.',
                '<em>Reference: <a href="https://www.recipetineats.com/affogato/" target="_blank">RecipeTin Eats – Affogato</a></em>'
            ]
        },
        'Macchiato': {
            image: 'PopularImages/macchiato.png',
            taste: 'Bold, Rich, Balanced',
            caffeine: 'High (Approx. 150mg)',
            origin: 'Italy',
            equipment: [
                'Espresso Machine',
                'Steam Wand',
                'Espresso Cup (2 oz)'
            ],
            ingredients: [
                '1 shot Espresso (1 oz)',
                '1-2 tbsp Steamed Milk Foam'
            ],
            steps: [
                '<strong>Pull Espresso Shot</strong> Extract a single shot of espresso into a small cup.',
                '<strong>Steam Milk</strong> Steam a small amount of milk to create a dense, velvety foam.',
                '<strong>Add Milk Mark</strong> Gently spoon 1-2 tablespoons of milk foam on top of the espresso, creating a distinct "mark" or spot.',
                '<em>Note: The traditional macchiato is meant to be a strong espresso with just a touch of milk to soften the intensity.</em>'
            ]
        },
        'Caffè Misto': {
            image: 'PopularImages/cafemistro.png',
            taste: 'Balanced, Smooth, Mild',
            caffeine: 'Medium',
            origin: 'France',
            equipment: [
                'Coffee Maker or Nespresso® Vertuo Machine',
                'Milk Frother or Nespresso® Aeroccino',
                'Mug (16 oz)'
            ],
            ingredients: [
                '1 cup Brewed Coffee (e.g., Starbucks® Caffè Verona®)',
                '1 cup Steamed Milk'
            ],
            steps: [
                '<strong>Brew Coffee</strong> Use a coffee maker or a Nespresso® Vertuo machine to brew 1 capsule of Starbucks® Caffè Verona® directly into a 16-oz mug.',
                '<strong>Froth the Milk</strong> Froth milk using a Nespresso® Aeroccino on the heated setting or a handheld frother. If using a handheld frother, warm the milk beforehand.',
                '<strong>Combine</strong> Pour the frothed milk directly into the brewed coffee in your mug, aiming for a 1:1 ratio of coffee to milk.',
                '<em>Reference: <a href="https://athome.starbucks.com/recipe/caffe-misto" target="_blank">Starbucks® – Caffè Misto Recipe</a></em>'
            ]
        },
        'Turkish Coffee': {
            image: 'PopularImages/turkishcoffee.png',
            taste: 'Rich, Strong, Foamy',
            caffeine: 'High',
            origin: 'Turkey',
            equipment: [
                'Cezve (small Turkish coffee pot) or Small Saucepan',
                'Espresso Grinder (for extra-fine grind)',
                'Demitasse Cups or Small Glasses'
            ],
            ingredients: [
                '5 to 6 oz Cold Water',
                '2 tbsp Extra Finely Ground Coffee (Turkish grind)',
                '1–3 tsp Sugar (optional)'
            ],
            steps: [
                '<strong>Mix Ingredients</strong> In a cezve or small saucepan, combine cold water, extra-finely ground Turkish coffee, and sugar (if using). Stir well to dissolve, but do <em>not</em> stir again after this point.',
                '<strong>Heat Slowly</strong> Place the cezve over medium heat. As the coffee heats, it will slowly foam and rise. Do not stir or allow it to boil rapidly.',
                '<strong>Remove & Foam</strong> Just before it boils, remove it from heat. Skim off the foam and spoon a little into each serving cup. Return to heat and repeat the foaming process once or twice more.',
                '<strong>Serve Carefully</strong> Pour the coffee slowly into small demitasse cups, letting the foam rise to the top. Allow the grounds to settle for a few minutes before drinking.',
                '<em>Reference: <a href="https://www.thespruceeats.com/turkish-coffee-recipe-2355497" target="_blank">The Spruce Eats – Turkish Coffee Recipe</a></em>'
            ]
        }
    };

    coffeeCards.forEach(card => {
        card.addEventListener('click', function() {
            const coffeeName = this.querySelector('h3').textContent;
            const data = coffeeData[coffeeName];
            
            if (data) {
                const rect = this.getBoundingClientRect();
                
                kopi.style.top = rect.top + 'px';
                kopi.style.left = rect.left + 'px';
                kopi.style.width = rect.width + 'px';
                kopi.style.height = rect.height + 'px';
                
                kopi.classList.add('active');
                
                setTimeout(() => {
                    kopi.style.top = '0';
                    kopi.style.left = '0';
                    kopi.style.transform = 'none';
                    kopi.style.width = '100%';
                    kopi.style.height = '100%';
                }, 50);

                const kopiImage = kopi.querySelector('.kopi-image');
                kopiImage.style.backgroundImage = `url(${data.image})`;
                kopiImage.style.cursor = 'pointer';
                
                kopiImage.onclick = function() {
                    const fullImage = fullKopi.querySelector('.full-kopi-image');
                    fullImage.src = data.image;
                    fullKopi.classList.add('active');
                };

                kopi.querySelector('.kopi-name').textContent = coffeeName;
                kopi.querySelector('.taste').textContent = `Taste: ${data.taste}`;
                if (data.caffeine) {
                    kopi.querySelector('.caffeine').textContent = `Caffeine: ${data.caffeine}`;
                }
                if (data.origin) {
                    kopi.querySelector('.origin').textContent = `Origin: ${data.origin}`;
                }
                
                const ingredientsList = kopi.querySelector('.ingredients-list');
                ingredientsList.innerHTML = '';
                if (data.ingredients) {
                    data.ingredients.forEach(item => {
                        const li = document.createElement('li');
                        li.textContent = item;
                        ingredientsList.appendChild(li);
                    });
                }
                
                const equipmentList = kopi.querySelector('.equipment-list');
                equipmentList.innerHTML = '';
                if (data.equipment) {
                    data.equipment.forEach(item => {
                        const li = document.createElement('li');
                        li.textContent = item;
                        equipmentList.appendChild(li);
                    });
                }
                
                const stepsList = kopi.querySelector('.steps');
                stepsList.innerHTML = '';
                data.steps.forEach(step => {
                    const li = document.createElement('li');
                    li.innerHTML = step;
                    stepsList.appendChild(li);
                });
            }
        });
    });

    kopi.querySelector('.close-kopi').addEventListener('click', function() {
        kopi.classList.remove('active');
        kopi.style.top = '';
        kopi.style.left = '';
        kopi.style.width = '';
        kopi.style.height = '';
        kopi.style.transform = '';
    });

    kopi.addEventListener('click', function(e) {
        if (e.target === kopi) {
            kopi.classList.remove('active');
            kopi.style.top = '';
            kopi.style.left = '';
            kopi.style.width = '';
            kopi.style.height = '';
            kopi.style.transform = '';
        }
    });

    const closeFullKopi = fullKopi.querySelector('.close-full-kopi');
    closeFullKopi.addEventListener('click', function() {
        fullKopi.classList.remove('active');
    });

    fullKopi.addEventListener('click', function(e) {
        if (e.target === fullKopi) {
            fullKopi.classList.remove('active');
        }
    });
}); 