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
    

    //HALO HALO N 

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
        'Red Eye': {
            image: 'EspressoHOTimg/RedEyeCoffeeDrink.jpg',
            taste: 'Bold, Robust, Intense',
            caffeine: 'High (drip coffee + espresso shot)',
            origin: 'United States',
            equipment: [
                'Drip Coffee Maker or Pour-Over Setup',
                'Espresso Machine or Moka Pot',
                'Serving Mug'
            ],
            ingredients: [
                '8 oz Freshly Brewed Drip Coffee',
                '1 oz Espresso Shot (single)',
            ],
            steps: [
                '<strong>Brew the Drip Coffee</strong> Prepare 8 ounces of hot brewed coffee using your preferred method—drip coffee maker, pour-over, or French press.',
                '<strong>Pull the Espresso Shot</strong> Brew a single shot (1 oz) of espresso using an espresso machine or moka pot.',
                '<strong>Combine</strong> Pour the brewed coffee into a serving mug. Add the shot of espresso directly into the mug with the drip coffee.',
                '<strong>Stir and Serve</strong> Stir gently to combine the two components and serve immediately for a strong, bold cup.',
                '<em>Reference: <a href="https://www.foodandwine.com/red-eye-coffee-8583160" target="_blank">Food & Wine Red Eye Coffee</a></em>'
            ]
        },
        'Breve': {
            image: 'EspressoHOTimg/breve.jpg',
            taste: 'Rich, Creamy, Luxurious',
            caffeine: 'Medium to High (espresso with half-and-half)',
            origin: 'United States',
            equipment: [
                'Espresso Machine or Moka Pot',
                'Milk Steamer or Saucepan for Heating Half-and-Half',
                'Serving Mug'
            ],
            ingredients: [
                '1-2 shots Espresso',
                '6-8 oz Steamed Half-and-Half'
            ],
            steps: [
                '<strong>Brew the Espresso</strong> Prepare 1 or 2 shots of rich, aromatic espresso using your espresso machine or moka pot.',
                '<strong>Steam the Half-and-Half</strong> Warm the half-and-half gently until hot and slightly frothy, but not boiling. Use a steamer or heat carefully on the stove.',
                '<strong>Combine</strong> Pour the espresso into your serving mug, then slowly add the steamed half-and-half to create a creamy blend.',
                '<strong>Serve and Enjoy</strong> Optionally, add flavorings like vanilla syrup, cinnamon, or caramel to customize your breve.',
                '<em>Reference: <a href="https://aerialresupplycoffee.com/blogs/the-resupply-blog/breve-coffee" target="_blank">Aerial Resupply Coffee - Breve Coffee</a></em>'
            ]
        },
        'Romano': {
            image: 'EspressoHOTimg/romanocoffee.jpg',
            taste: 'Bright, Citrusy, Bold',
            caffeine: 'High (espresso shot)',
            origin: 'Italy',
            equipment: [
                'Espresso Machine or Moka Pot',
                'Serving Mug or Cocktail Glass',
                'Knife for Slicing Lemon'
            ],
            ingredients: [
                '1 shot espresso (about 1 oz)',
                '1 teaspoon fresh lemon juice',
                '1 slice lemon (preferably Meyer lemon)',
                'Optional: 1 teaspoon white sugar or simple syrup',
                'Optional: 1 oz coffee liqueur (e.g., Kahlua)',
                'Optional: whipped cream or milk foam for topping'
            ],
            steps: [
                '<strong>Brew the Espresso</strong> Prepare one shot of espresso using your espresso machine or moka pot.',
                '<strong>Add Sweetener (Optional)</strong> Stir in sugar or simple syrup if desired.',
                '<strong>Add Lemon Juice</strong> Squeeze about one teaspoon of fresh lemon juice into the espresso.',
                '<strong>Express Lemon Oils</strong> Rub the lemon slice around the rim of your mug or glass to release its aromatic oils.',
                '<strong>Garnish and Serve</strong> Drop the lemon slice into the espresso and serve immediately while hot.',
                '<strong>Optional</strong> Add coffee liqueur before topping with whipped cream or milk foam for an indulgent twist.',
                '<em>Reference: <a href="https://frommypantry.com/easy-coffee-romano-recipe/" target="_blank">From My Pantry - Coffee Romano Recipe</a></em>'
            ]
        },
        'Cold Brew': {
            image: 'images/coldbrew.webp',
            taste: 'Smooth, Mildly Sweet, Refreshing',
            caffeine: 'Medium to High (depends on steeping time and coffee-to-water ratio)',
            origin: 'United States (popularized, but method dates back centuries)',
            equipment: [
                'Coffee Grinder (for coarse grind)',
                'Large Container or Jar',
                'Cheesecloth or Flour Sack Cloth',
                'Strainer',
                'Serving Glass or Mug'
            ],
            ingredients: [
                '1 cup whole coffee beans (coarsely ground)',
                '4 cups filtered water',
                'Ice (optional)',
                'Milk or water to dilute (optional)'
            ],
            steps: [
                '<strong>Coarsely Grind the Coffee</strong> Use a coffee grinder or spice grinder to grind the beans coarsely, resembling cornmeal.',
                '<strong>Combine Grounds and Water</strong> Place the grounds in your container and pour water over them. Stir gently to saturate all grounds.',
                '<strong>Steep Overnight</strong> Cover and let the coffee steep for about 12 hours at room temperature or in the refrigerator.',
                '<strong>Strain the Coffee</strong> Using a cheesecloth-lined strainer, pour the coffee through to remove grounds.',
                '<strong>Store</strong> Transfer the strained coffee concentrate into a bottle or jar and refrigerate. It keeps up to a week.',
                '<strong>Serve</strong> Pour over ice, dilute with water or milk to taste, or warm up gently for a hot cup.',
                '<em>Reference: <a href="https://www.simplyrecipes.com/recipes/how_to_make_cold_brew_coffee/" target="_blank">Simply Recipes - How to Make Cold Brew Coffee</a></em>'
            ]
        },
        
        'Nitro Cold-Brew Coffee': {
            image: 'images/nitrocoldbrew.jpg',
            taste: 'Smooth, Creamy, Velvety with a Slightly Sweet Finish',
            caffeine: 'High (cold brew concentrate infused with nitrogen)',
            origin: 'United States (modern innovation in cold brew coffee)',
            equipment: [
                'Cold Brew Coffee Maker or Large Jar for Steeping',
                'Nitrogen Infusion System or Nitro Coffee Tap',
                'Serving Glass'
            ],
            ingredients: [
                '1 cup coarsely ground coffee beans',
                '4 cups filtered water',
                'Nitrogen gas for infusion'
            ],
            steps: [
                '<strong>Prepare Cold Brew Concentrate</strong> Coarsely grind the coffee beans and combine with water in a container. Let steep for 12-15 hours, then strain to remove grounds.',
                '<strong>Infuse with Nitrogen</strong> Using a nitrogen infusion system or nitro coffee tap, infuse the cold brew concentrate with nitrogen gas until a creamy, foamy texture develops.',
                '<strong>Serve</strong> Pour the nitro cold brew into a glass, allowing the cascading bubbles and frothy head to form. Serve chilled without ice to preserve the creamy texture.',
                '<strong>Optional</strong> Add flavorings like vanilla or caramel syrup if desired, but nitro cold brew is often enjoyed plain to highlight its natural smoothness.',
                '<em>Reference: <a href="https://nitrobrew.com/coffee/" target="_blank">NitroBrew - Nitro Infused Coffee</a></em>'
            ]
        },
        'Iced Americano': {
            image: 'icedCoffeeImg/Iced_Americano.jpg',
            taste: 'Bold, Strong, Clean with Fruity and Floral Notes',
            caffeine: 'Moderate to High (espresso-based)',
            origin: 'United States (inspired by American soldiers in WWII diluting espresso)',
            equipment: [
                'Espresso Machine or Capsule Coffee Maker',
                'Glass or Tall Cup'
            ],
            ingredients: [
                '1 B Colombia Americano capsule (or 1 shot of espresso)',
                '70ml filtered water',
                'Ice cubes'
            ],
            steps: [
                '<strong>Brew Espresso</strong> Brew 40ml of espresso using the B Colombia capsule or a standard espresso shot.',
                '<strong>Prepare Glass</strong> Fill a tall glass with ice cubes.',
                '<strong>Combine</strong> Pour the brewed espresso over the ice. Add 70ml of water to dilute.',
                '<strong>Serve</strong> Stir gently and enjoy your bold, chilled coffee without the frills.',
                '<em>Reference: <a href="https://beyourownbarista.today/blogs/b-creations/iced-americano" target="_blank">B Coffee Co. Philippines - Iced Americano</a></em>'
            ]
        },
            
        'Iced Latte': {
            image: 'icedCoffeeImg/IcedLatte.jpg',
            taste: 'Smooth, Creamy, Refreshing with Optional Sweetness',
            caffeine: 'Moderate (based on espresso amount)',
            origin: 'Italy (latte) adapted for iced, popularized globally',
            equipment: [
                'Stovetop Espresso Maker or Espresso Machine',
                'Mason Jar (for shaking milk)',
                'Tall Glass'
            ],
            ingredients: [
                '4 oz (about 1–2 shots) freshly brewed Starbucks® Espresso Roast or strong coffee',
                '3/4 cup whole milk (or preferred milk alternative)',
                '1 cup ice',
                'Optional: Vanilla syrup or sweetener of choice'
            ],
            steps: [
                '<strong>Prepare the Espresso</strong> Brew 4 oz of rich espresso using a stovetop brewer or espresso machine.',
                '<strong>Fill Glass</strong> Add 1 cup of ice to a tall glass and pour in the brewed espresso.',
                '<strong>Foam the Milk</strong> In a mason jar, pour 3/4 cup of milk and optional sweetener. Seal tightly and shake vigorously to create foam.',
                '<strong>Combine</strong> Pour the milk and foam over the ice and espresso in the glass.',
                '<strong>Enjoy</strong> Sip and enjoy a cool, creamy iced latte — perfect for any time of the day.',
                '<em>Reference: <a href="https://athome.starbucks.com/recipe/iced-latte" target="_blank">Starbucks® at Home - Iced Latte</a></em>'
            ]
        },
        'Iced Cappuccino': {
    image: 'icedCoffeeImg/icedCappucino.jpg',
    taste: 'Rich, Refreshing, Velvety with Subtle Sweetness',
    caffeine: 'Moderate (from 1 shot of espresso)',
    origin: 'Modern adaptation of Italian cappuccino for iced enjoyment',
    equipment: [
        'Espresso Machine or Nespresso Machine',
        'Milk Frother or Shaker',
        'Tall Glass'
    ],
    ingredients: [
        '1 shot espresso (Starbucks® Espresso Roast preferred)',
        '80 ml cold milk',
        '6–8 ice cubes',
        'Pinch of cinnamon (optional, for garnish)'
    ],
    steps: [
        '<strong>Prepare the Espresso</strong> Brew 1 shot of rich espresso and set aside.',
        '<strong>Fill the Glass</strong> Add 6–8 ice cubes to a tall glass.',
        '<strong>Add Espresso</strong> Pour the brewed espresso over the ice.',
        '<strong>Froth the Milk</strong> Use a milk frother or shake 80 ml cold milk in a sealed jar until frothy.',
        '<strong>Top It Off</strong> Pour the frothed milk gently over the espresso.',
        '<strong>Garnish</strong> Sprinkle a pinch of cinnamon if desired.',
        '<strong>Enjoy</strong> Sip a balanced blend of bold coffee and cool, velvety milk.',
        '<em>Reference: <a href="https://www.starbucksathome.com/recipes/iced-cappuccino" target="_blank">Starbucks® at Home - Iced Cappuccino</a></em>'
    ]
},
        
        'Vietnamese Iced Coffee': {
            image: 'icedCoffeeImg/Vietnamesekopi.jpg',
            taste: 'Bold, sweet, and intense with a smooth finish',
            caffeine: 'High (from strong brewed coffee or espresso)',
            origin: 'Vietnam – traditionally made with robusta coffee and sweetened condensed milk',
            equipment: [
                'Vietnamese phin filter or espresso machine',
                'Glass or heatproof tumbler',
                'Spoon'
            ],
            ingredients: [
                '2 tablespoons ground dark roast coffee (robusta preferred)',
                '2–3 tablespoons sweetened condensed milk (adjust to taste)',
                '120 ml hot water',
                '6–8 ice cubes'
            ],
            steps: [
                '<strong>Prepare the Coffee:</strong> Using a phin filter, add 2 tablespoons of ground coffee. Press lightly with the gravity insert.',
                '<strong>Start Brewing:</strong> Add a splash of hot water to let the coffee bloom for 30 seconds, then pour the remaining hot water (about 120 ml) into the filter. Let it drip slowly.',
                '<strong>Add the Milk:</strong> Place 2–3 tablespoons of sweetened condensed milk into a glass.',
                '<strong>Combine:</strong> Once brewing is complete, stir the coffee and condensed milk together until fully blended.',
                '<strong>Serve Over Ice:</strong> Fill a separate glass with 6–8 ice cubes and pour the sweetened coffee over the ice.',
                '<strong>Enjoy:</strong> Experience a rich, creamy, and highly caffeinated iced coffee with a signature Vietnamese twist.',
                '<em>Reference: <a href="https://www.starbucksathome.com/recipes/vietnamese-iced-coffee" target="_blank">Starbucks® at Home – Vietnamese Iced Coffee</a></em>'
            ]
        },
        'Japanese Iced Coffee': {
            image: 'icedCoffeeImg/japanesekopi.webp',
            taste: 'Bright, clean, and refreshing with balanced acidity and deep flavor',
            caffeine: 'Moderate to high (depends on bean and ratio)',
            origin: 'Japan – made by brewing hot coffee directly over ice for immediate chilling and vibrant flavor',
            equipment: [
                'Pour-over brewer (e.g., Hario V60, Chemex, Kalita Wave)',
                'Paper filter',
                'Digital scale',
                'Carafe or large heatproof glass with ice',
                'Kettle'
            ],
            ingredients: [
                '1 oz (30 g) medium-coarse ground coffee',
                '8 oz (225 g) near-boiling water (about 200°F / 93°C)',
                '8 oz (225 g) ice'
            ],
            steps: [
                '<strong>Prepare the Setup:</strong> Place a carafe on a digital scale and add 8 oz (225g) of ice. Tare the scale.',
                '<strong>Set the Filter:</strong> Place your pour-over cone on top of the carafe, insert the paper filter, and add the coffee grounds. Tare the scale again.',
                '<strong>Bloom:</strong> Pour a small amount of hot water to wet the grounds evenly. Wait 30 seconds for blooming.',
                '<strong>Continue Brewing:</strong> Slowly pour the remaining hot water in a spiral pattern until the scale reads 8 oz (225g). Let it drip completely.',
                '<strong>Serve:</strong> Discard the used grounds and serve the coffee immediately over ice.',
                '<strong>Enjoy:</strong> Sip a crisp, freshly brewed iced coffee with the complexity and aroma preserved.',
                '<em>Reference: <a href="https://www.seriouseats.com/japanese-style-iced-coffee" target="_blank">Serious Eats – Japanese-Style Iced Coffee</a></em>'
            ]
        },
        'Iced Mocha': {
            image: 'icedCoffeeImg/IcedMocha.jpg',
            taste: 'Rich, creamy, and chocolatey with a refreshing iced coffee finish',
            caffeine: 'Moderate (about 96 mg per cup, depending on coffee strength)',
            origin: 'Inspired by classic coffeehouse mochas, adapted for iced enjoyment at home',
            equipment: [
                'Small pot or saucepan',
                'Whisk',
                'Measuring spoons',
                '16-ounce cup or mason jar',
                'Spoon for stirring'
            ],
            ingredients: [
                '¼ cup milk (any kind), divided',
                '1 to 2 tablespoons granulated sugar',
                '1 tablespoon unsweetened cocoa powder',
                '1 cup cold coffee',
                '1 tablespoon heavy cream (optional)',
                'Whipped cream (optional for topping)',
                'Chocolate syrup (optional for topping)'
            ],
            steps: [
                '<strong>Make chocolate syrup:</strong> Combine 2 tablespoons milk, sugar, and cocoa powder in a small pot. Heat over medium heat, whisking constantly until smooth and simmering.',
                '<strong>Add coffee and milk:</strong> Remove from heat, whisk in cold coffee, remaining 2 tablespoons milk, and optional heavy cream.',
                '<strong>Pour over ice:</strong> Fill a 16-ounce cup or mason jar with ice and pour the mocha mixture over.',
                '<strong>Top and serve:</strong> Add whipped cream and chocolate syrup if desired. Enjoy immediately.',
                '<em>Reference: <a href="https://bakingmischief.com/iced-mocha-recipe/" target="_blank">Baking Mischief – Iced Mocha Recipe</a></em>'
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
                '<em>Note: The traditional macchiato is meant to be a strong espresso with just a touch of milk to soften the intensity.</em>',
                '<em>Reference: <a href="https://coffeekev.com/what-is-a-macchiato/" target="_blank">CoffeeKev – What is a Macchiato</a></em>'
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
        'Flat White': {
            image: 'images/flatwhite.webp',
            taste: 'Smooth, Creamy, Strong',
            caffeine: 'High',
            origin: 'Australia/New Zealand',
            equipment: [
                'Espresso Machine or Coffee Pod Machine',
                'Milk Steamer/Steam Wand',
                'Flat White Cup (150-200ml capacity)',
                'Coffee Grinder (if using beans)'
            ],
            ingredients: [
                '18g Ground Espresso or 1 Espresso Pod',
                '100ml Whole Milk (or milk of choice)',
                'Optional: Sugar or sweetener to taste'
            ],
            steps: [
                '<strong>Prepare Espresso</strong> Make around 35ml of espresso using your coffee machine or espresso pod. Pour directly into the base of your flat white cup.',
                '<strong>Steam the Milk</strong> Using the steamer attachment, steam 100ml of milk until it reaches a silky, microfoam texture with only 1-2cm of foam on top. The milk should be hot but not scalding (around 60-65°C).',
                '<strong>Pour Technique</strong> Hold the milk jug so the spout is 3-4cm above the cup. Pour the steamed milk steadily into the center of the espresso, maintaining a consistent flow.',
                '<strong>Create Latte Art</strong> As the cup fills, bring the jug closer to the surface. When almost touching the coffee surface, tilt the jug to speed up the pour rate. The milk will naturally fold and create patterns on top.',
                '<strong>Serve Immediately</strong> Serve the flat white immediately while hot. The perfect flat white should have a smooth, velvety texture with minimal foam and strong coffee flavor.',
                '<em>Reference: <a href="https://www.bbcgoodfood.com/recipes/flat-white" target="_blank">BBC Good Food – Flat White Recipe</a></em>'
            ]
        },
        'Cortado': {
            image: 'EspressoHOTimg/cortado.jpg',
            taste: 'Bold, Smooth, Balanced',
            caffeine: 'Moderate (from espresso)',
            origin: 'Spain',
            equipment: [
                'Espresso Maker',
                'Milk Frother or Steam Wand',
                'Small Mug or Gibraltar Glass'
            ],
            ingredients: [
                '2 oz Espresso',
                '2 oz Steamed Whole Milk (or milk alternative)'
            ],
            steps: [
                '<strong>Pull the Espresso Shot</strong> Brew 2 ounces of freshly pulled espresso using your espresso maker. Any finely ground beans will work, though a medium to dark roast is typical.',
                '<strong>Steam or Froth the Milk</strong> Gently heat your milk to around 130-150°F. Use a milk frother or steam wand to create a velvety texture without too much foam.',
                '<strong>Combine in a Glass</strong> Slowly pour the steamed milk over the espresso in a small mug or Gibraltar glass, aiming for equal parts milk and espresso.',
                '<strong>Enjoy Immediately</strong> Drink while warm to fully appreciate the balance of bold espresso and smooth milk.',
                '<em>Reference: <a href="https://emilylaurae.com/how-to-make-a-cortado/" target="_blank">Emily Laurae Cortado Recipe</a></em>'
            ]
        },
        'Gibraltar': {
            image: 'EspressoHOTimg/gibraltarCoffee.webp',
            taste: 'Bold, Smooth, Creamy',
            caffeine: 'Moderate (double espresso shot)',
            origin: 'San Francisco, USA (Blue Bottle Coffee, 2005)',
            equipment: [
                'Espresso Maker',
                'Milk Frother or Steam Wand',
                '4.5 oz Gibraltar Rock Glass'
            ],
            ingredients: [
                '2 oz (Double Shot) Espresso',
                '85 ml Steamed Whole Milk (or milk alternative)',
                'Hot Water (for preheating glass)'
            ],
            steps: [
                '<strong>Preheat the Glass</strong> Fill a Gibraltar glass with hot water and let it sit for about 5 minutes. Discard the water before using the glass to help maintain drink temperature.',
                '<strong>Pull the Espresso Shot</strong> Brew a double shot of espresso (about 2 oz) using medium to dark roast coffee for a rich base.',
                '<strong>Steam the Milk</strong> Steam 85 ml of cold whole milk until it reaches 150°F–160°F (65°C–70°C). Create a smooth, velvety microfoam using a steam wand or frother.',
                '<strong>Combine Espresso and Milk</strong> Pour the espresso into the preheated Gibraltar glass, then slowly add the steamed milk with a slight wiggle to create a glossy finish.',
                '<strong>Serve and Enjoy</strong> The drink is best served immediately, while warm, to preserve the creamy texture and espresso intensity.',
                '<em>Reference: <a href="https://medium.com/the-mad-latte/coffee-recipe-the-gibraltar-b0241aee31bc" target="_blank">The Mad Latte - Gibraltar Recipe</a></em>'
            ]
        },
        'Café con Leche': {
            image: 'EspressoHOTimg/cafeconleche.jpg',
            taste: 'Rich, Smooth, Mellow',
            caffeine: 'Moderate (from espresso or stovetop brew)',
            origin: 'Spain / Latin America',
            equipment: [
                'Moka Pot or Stovetop Espresso Maker',
                'Small Saucepan',
                'Serving Mug or Glass'
            ],
            ingredients: [
                '2 tbsp (10 g) Finely Ground Coffee (espresso roast or Café Bustelo)',
                '½ cup Water (for moka pot)',
                '3½ oz Freshly Brewed Coffee or Espresso',
                '½ cup Whole Milk',
                '½ tsp Sugar (optional, to taste)'
            ],
            steps: [
                '<strong>Preheat the Mug</strong> Fill your serving mug or glass with hot water to warm it while the coffee brews. Discard the water before pouring in the drink.',
                '<strong>Brew the Coffee</strong> Add water and finely ground coffee to your moka pot or stovetop espresso maker based on manufacturer’s instructions. Brew over medium heat until coffee is ready.',
                '<strong>Heat the Milk</strong> In a small saucepan over low heat, warm ½ cup of milk until it starts steaming and small bubbles form around the edges. Do not let it boil.',
                '<strong>Combine Coffee and Milk</strong> Pour 3½ oz of freshly brewed coffee or espresso into the warmed mug. Slowly add the steamed milk.',
                '<strong>Sweeten (Optional)</strong> Stir in sugar to taste, either while heating the milk or after pouring.',
                '<em>Reference: <a href="https://www.thespruceeats.com/cafe-con-leche-4796804" target="_blank">The Spruce Eats Cafe Con Leche Recipe</a></em>'
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
        },
        'Shakerato': {
    image: 'icedCoffeeImg/Shakerato.jpg',
    taste: 'Smooth, sweet, and frothy with a rich espresso flavor',
    caffeine: 'High (from espresso)',
    origin: 'Italy – a classic Italian iced coffee made by shaking espresso with ice and sugar to create a frothy, chilled beverage',
    equipment: [
        'Cocktail shaker',
        'Strainer',
        'Martini or coupe glass'
    ],
    ingredients: [
        '2 oz (60 ml) freshly brewed hot espresso',
        '4 oz (120 g) ice cubes',
        '1/2 oz (15 g) granulated sugar (or simple syrup to taste)'
    ],
    steps: [
        '<strong>Prepare the Espresso:</strong> Brew a fresh shot of espresso and let it cool slightly.',
        '<strong>Assemble the Shaker:</strong> Add the ice cubes and sugar (or simple syrup) to the cocktail shaker.',
        '<strong>Shake:</strong> Pour the hot espresso over the ice and sugar in the shaker. Seal and shake vigorously for 10 to 20 seconds until the mixture is frothy and well-chilled.',
        '<strong>Strain and Serve:</strong> Strain the shaken coffee into a chilled martini or coupe glass.',
        '<strong>Enjoy:</strong> Sip a velvety, sweet espresso with a creamy foam cap, perfect for warm days or as a stylish after-dinner treat.',
        '<em>Reference: <a href="https://www.seriouseats.com/caffe-shakerato-italian-shaken-iced-coffee" target="_blank">Serious Eats – Caffè Shakerato</a></em>'
    ]
},
'Mazagran': {
    image: 'images/mazagran.jpg',
    taste: 'Bright, tart, and refreshing with balanced sweetness and bold coffee flavor',
    caffeine: 'High (from concentrated coffee)',
    origin: 'France/Algeria – A historic coffee-lemonade hybrid said to originate from French colonial troops in Algeria, now a popular iced coffee drink with lemon juice and sugar',
    equipment: [
        'Serving glass',
        'Spoon or stirrer',
        'Juicer for fresh lemon juice'
    ],
    ingredients: [
        '1/4 cup (60 ml) cold concentrated or strongly brewed coffee (cold brew concentrate, espresso, moka pot, or Aeropress)',
        '1/4 cup (60 ml) freshly squeezed lemon juice, plus more to taste',
        '2 tablespoons (25 g) granulated or superfine sugar or 3 tablespoons (45 ml) simple syrup',
        'Scant pinch kosher salt',
        'Ice cubes',
        'Lemon rounds for garnish',
        'Optional: 1 to 2 fl oz white or aged rum'
    ],
    steps: [
        '<strong>Mix Base:</strong> In a serving glass, combine the concentrated coffee with lemon juice, sugar, and a pinch of salt. Stir well until the sugar is fully dissolved (if not using simple syrup).',
        '<strong>Taste and Adjust:</strong> Taste the mixture and adjust the lemon juice or sugar to balance the flavor. Aim for a bright, tart, and sweet coffee flavor that is strong but balanced.',
        '<strong>Add Ice and Dilute:</strong> Add ice cubes to the glass, and dilute with cold water as needed to reach your preferred strength and temperature.',
        '<strong>Optional:</strong> Add 1 to 2 ounces of rum if you want an alcoholic version.',
        '<strong>Garnish:</strong> Garnish with lemon rounds for an extra citrus aroma and visual appeal.',
        '<strong>Serve:</strong> Serve immediately for a refreshing and invigorating iced coffee experience.',
        '<em>Reference: <a href="https://www.seriouseats.com/mazagran-coffee-iced-coffee-lemonade-8647476" target="_blank">Serious Eats – Mazagran Coffee</a></em>'
    ]
},
'Chocolate Frappe': {
    image: 'images/choco-frappe.avif',
    taste: 'Rich, creamy, sweet, and chocolatey',
    caffeine: 'Moderate (from chocolate and possibly added coffee)',
    origin: 'Philippines / Nestlé Goodnes',
    equipment: [
        'Mixing bowl',
        'Saucepan',
        'Blender',
        'Piping bag',
        'Serving glasses'
    ],
    ingredients: [
        '1/2 cups chocolate chips',
        '1 tablespoon butter',
        '1/2 packets NESTLÉ® All Purpose Cream, chilled',
        '1 tablespoon sugar',
        '1/2 packets NESTLÉ® All Purpose Cream',
        '1/2 cups NESTLÉ® Fresh Milk',
        '1 cup chocolate chips',
        '1/3 cups NESTLÉ® Carnation® Condensada',
        '2 cups ice',
        '1 tablespoon cocoa powder'
    ],
    steps: [
        '<strong>Make Chocolate Sauce:</strong> Place chocolate chips in a bowl over a saucepan with gently simmering water. Melt chocolate and stir in butter until smooth. Set aside to cool. (10 mins)',
        '<strong>Whip Cream:</strong> Whip ½ packet of NESTLÉ® All Purpose Cream with sugar until stiff peaks form. Transfer into a piping bag and refrigerate until ready to serve. (10 mins)',
        '<strong>Blend Mixture:</strong> Combine ½ packet of NESTLÉ® All Purpose Cream, NESTLÉ® Fresh Milk, chocolate chips, NESTLÉ® Carnation® Condensada, and ice in a blender. Blend until smooth. (5 mins)',
        '<strong>Assemble and Serve:</strong> Pour cream mixture into serving glasses. Pipe whipped cream on top, drizzle with chocolate sauce, and sprinkle with cocoa powder. Serve immediately. (3 mins)',
        '<em>Reference: <a href="https://www.nestlegoodnes.com/ph/recipes/creamy-chocolate-frappe" target="_blank">Nestlé Goodnes – Creamy Chocolate Frappe</a></em>'
    ]
},

'Mocha Frappe': {
    image: 'images/mochafrappe.webp',
    taste: 'Smooth, chocolatey, rich with a light froth',
    caffeine: 'Moderate (from NESCAFÉ® Classic instant coffee)',
    origin: 'Philippines / NESCAFÉ®',
    equipment: [
        'Coffee glass',
        '300 ml glass',
        'Coffee blender',
        'Blender',
        'Coffee jug (200 ml)'
    ],
    ingredients: [
        '2 tsp NESCAFÉ® Classic',
        '9 ice cubes',
        '60 ml hot water (approx. 80ºC)',
        '140 ml cream',
        '1 tbsp chocolate syrup',
        '1 tsp vanilla extract',
        'Whipped cream (optional, for garnish)',
        'Chocolate shavings (optional, for garnish)'
    ],
    steps: [
        '<strong>Prepare the Coffee:</strong> Pour 2 tsp NESCAFÉ® Classic and 60 ml hot water into a jug. Add 1 tbsp chocolate syrup.',
        '<strong>Add Flavour:</strong> Stir in 1 tsp vanilla extract and an additional 1 tbsp chocolate syrup to the coffee mixture.',
        '<strong>Add Ice and Cream:</strong> Place ice cubes in the blender. Pour in the coffee mixture and top with 140 ml cream.',
        '<strong>Blend:</strong> Blend all ingredients until smooth and combined.',
        '<strong>Serve:</strong> Pour the mocha frappe into your favourite glass.',
        '<strong>Optional Toppings:</strong> Top with whipped cream and chocolate shavings for extra indulgence.',
        '<em>Reference: <a href="https://www.nescafe.com/ph/recipes/mocha-frappe" target="_blank">NESCAFÉ Philippines – Mocha Frappe</a></em>'
    ]
},
'Strawberry Frappe': {
    image: 'images/strawberry-frapp.jpg',
    taste: 'Sweet, creamy, fresh strawberry flavor with a smooth vanilla finish',
    caffeine: 'None',
    origin: 'California, USA',
    equipment: [
        'Blender',
        'Small saucepan',
        'Serving glasses'
    ],
    ingredients: [
        '1 cup whole milk',
        '2 cups fresh strawberries, stems removed',
        '1 cup ice',
        '1/2 cup vanilla ice cream',
        '1 tsp vanilla extract',
        'Whipped cream (optional, for topping)',
        'For Strawberry Syrup:',
        '1 cup fresh strawberries',
        '⅓ cup sugar',
        '1 tbsp water'
    ],
    steps: [
        '<strong>Make Strawberry Syrup:</strong> Blend 1 cup strawberries, ⅓ cup sugar, and 1 tbsp water until smooth. Transfer to a small saucepan and simmer on medium-high for 5 minutes, stirring constantly to prevent burning. Set aside to cool.',
        '<strong>Blend Frappé:</strong> In a blender, combine vanilla ice cream, whole milk, vanilla extract, 2 cups strawberries, and ice. Blend until smooth and creamy.',
        '<strong>Serve:</strong> Pour the frappé into two large glasses.',
        '<strong>Garnish:</strong> Top with whipped cream and drizzle with the strawberry syrup if desired.',
        '<em>Reference: <a href="https://www.californiastrawberries.com/strawberry-frappe/" target="_blank">California Strawberry Commission – Strawberry Frappé</a></em>'
    ]
},
'Oreo Frappe': {
    image: 'images/oreofrappe.jpg',
    taste: 'Sweet, creamy, rich with chocolate and cookie flavor',
    caffeine: 'None',
    origin: 'American-inspired dessert drink',
    equipment: [
        'Blender',
        'Serving glass'
    ],
    ingredients: [
        '2 cups ice',
        '1 cup milk',
        '2 tbsp chocolate syrup',
        '3 Oreo cookies',
        '2 scoops ice cream',
        'Whipped cream (for topping, optional)',
        'Additional chocolate sauce and crushed Oreos (optional, for garnish)'
    ],
    steps: [
        '<strong>Blend Ingredients:</strong> Combine ice, milk, chocolate syrup, Oreo cookies, and ice cream in a blender. Blend until smooth.',
        '<strong>Serve:</strong> Pour the frappe into serving glasses.',
        '<strong>Top and Garnish:</strong> Add whipped cream on top. Optionally, drizzle chocolate sauce and sprinkle crushed Oreos.',
        '<em>Reference: <a href="https://www.kitchenstories.com/en/recipes/oreo-frappe-2cf4" target="_blank">Kitchen Stories – Oreo Frappe</a></em>'
    ]
},
'Matcha Frappe': {
    image: 'images/mochafrappe.webp',
    taste: 'Creamy, slightly sweet with a distinct earthy and grassy matcha flavor',
    caffeine: 'Contains caffeine from matcha green tea powder',
    origin: 'Inspired by Japanese matcha tea drinks',
    equipment: [
        'Blender',
        'Serving glass'
    ],
    ingredients: [
        '1 cup milk (can substitute almond, soy, or rice milk)',
        '5 ice cubes (adjust for thickness)',
        '1 tablespoon vanilla-flavored syrup (e.g., Torani®) or vanilla extract with sugar',
        '1 teaspoon matcha green tea powder (adjust to taste)',
        '1 tablespoon whipped cream (optional, for topping)'
    ],
    steps: [
        '<strong>Blend:</strong> Combine milk, ice cubes, vanilla syrup, and matcha powder in a blender. Blend until smooth and creamy.',
        '<strong>Serve:</strong> Pour into a glass.',
        '<strong>Top:</strong> Add whipped cream if desired.',
        '<em>Reference: <a href="https://www.allrecipes.com/recipe/242396/matcha-frappe/" target="_blank">Allrecipes – Matcha Frappé</a></em>'
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