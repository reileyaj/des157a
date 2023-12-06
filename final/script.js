(function(){
    'use strict'
    console.log('running JS');

    //buttons
    const start = document.querySelector('#start');
    const next1 = document.querySelector('#next1')
    const next2 = document.querySelector('#next2')
    const autofill0 = document.querySelector('#autofill0')
    const autofill1 = document.querySelector('#autofill1')
    const autofill2 = document.querySelector('#autofill2')

    //forms
    const form = document.querySelector('#myForm')
    const form1 = document.querySelector('#form1');
    const form2 = document.querySelector('#form2');
    const form3 = document.querySelector('#form3');
    const result = document.querySelector('#finished')

    //form data
    const formData = document.querySelectorAll("input[type=text]")

    //lists
    const artTypeList = ['painting', 'comic', 'flower arrangement', 'collage', 'drawing', 'pottery', 'sculpture', 'jewellery', 'mosaic', 'photograph', 'print'];
    const weekdayList = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    const superlativesList = ['angriest', 'worst', 'most beautiful', 'biggest', 'blackest', 'blandest', 'bloodiest', 'bluest', 'boldest', 'bossiest', 'bravest', 'briefest', 'brightest', 'broadest', 'busiest', 'calmest', 'cheapest', 'chewiest', 'chubbiest', 'classiest', 'cleanest', 'clearest', 'closest', 'cloudiest', 'clumsiest', 'coarsest', 'coldest', 'coolest', 'craziest', 'creamiest', 'creepiest', 'crispiest', 'cruelest', 'crunchiest', 'curliest', 'curviest', 'cutest', 'dampest', 'darkest', 'deadliest', 'deepest', 'densest', 'most difficult', 'dirtiest', 'driest', 'dullest', 'dumbest', 'dustiest', 'earliest', 'easiest', 'most expensive', 'faintest', 'fairest', 'fanciest', 'fastest', 'fattest', 'fewest', 'fiercest', 'filthiest', 'finest', 'firmest', 'fittest', 'flakiest', 'flattest', 'freshest', 'friendliest', 'fullest', 'funniest', 'gentlest', 'gloomiest', 'best', 'grandest', 'gravest', 'greasiest', 'greatest', 'greediest', 'grossest', 'guiltiest', 'hairiest', 'handiest', 'happiest', 'hardest', 'harshest', 'healthiest', 'heaviest', 'highest', 'hippest', 'hottest', 'humblest', 'hungriest', 'iciest', 'most interesting', 'itchiest', 'juiciest', 'kindest', 'largest', 'latest', 'laziest', 'lightest', 'likeliest', 'littlest', 'liveliest', 'loneliest', 'longest', 'loudest', 'loveliest', 'lowest', 'maddest', 'meanest', 'messiest', 'mildest', 'most modern', 'moistest', 'narrowest', 'nastiest', 'naughtiest', 'nearest', 'neatest', 'neediest', 'newest', 'nicest', 'noisiest', 'oddest', 'oiliest', 'plainest', 'poorest', 'most popular', 'prettiest', 'proudest', 'purest', 'quickest', 'quietest', 'rarest', 'rawest', 'richest', 'ripest', 'riskiest', 'roomiest', 'roughest', 'rudest', 'rustiest', 'saddest', 'safest', 'saltiest', 'sanest', 'scariest', 'shallowest', 'sharpest', 'shiniest', 'shortest', 'shyest', 'silliest', 'simplest', 'sincerest', 'skinniest', 'sleepiest', 'slimmest', 'slimiest', 'slowest', 'smallest', 'smartest', 'smelliest', 'smokiest', 'smoothest', 'softest', 'soonest', 'sorest', 'sorriest', 'sourest', 'spiciest', 'steepest', 'stingiest', 'strangest', 'strictest', 'strongest', 'sunniest', 'sweatiest', 'sweetest', 'tallest', 'tannest', 'tastiest', 'thickest', 'thinnest', 'thirstiest', 'tiniest', 'most tired', 'toughest', 'truest', 'ugliest', 'warmest', 'weakest', 'wealthiest', 'weirdest', 'wettest', 'widest', 'wildest', 'windiest', 'wisest', 'worldliest', 'worthiest', 'youngest'];

    const nameList = ['Gary May', 'Bob Ross', 'Jenna Ortega', 'Gigi Hadid', 'Kylie Jenner', 'Joe Biden', 'Jennifer Coolidge', 'Chris Pratt', 'Kris Kardashian', 'Justin Bieber', 'Selena Gomez', 'Ariana Grande', 'Chief Keef', 'Johnny Depp', 'Taylor Swift', 'Leonardo DiCaprio', 'Will Smith', 'Jim Carrey', 'Adam Sandler', 'Tom Cruise', 'Oprah Winfrey', 'Dwayne "the Rock" Johnson', 'Abraham Lincoln', 'Ivanka Trump', 'Aubrey Drake Graham', 'Angelina Jolie', 'Ellen DeGeneres', 'Michael Jordon', 'Jennifer Lawrence', 'Kanye West', 'Joe Bob', 'Ben Affleck', 'Nicki Minaj', 'Joe Rogan', 'Millie Bobby Brown', 'Greg Heffley']
    const artistList = ['Leonardo da Vinci', 'Gustav Klimt', 'Pablo Picasso', 'Rembrandt', 'Claude Monet', 'Vincent van Gogh', 'Salvador Dali', 'Andy Warhol', 'Michelangelo', 'Norman Rockwell', 'Frida Kahlo', 'Johannes Vermeer', "Georgia O'Keefe", 'Edgar Degas', 'Francisco Goya', 'Georges Seurat', 'Edvard Munch', 'J.C. Leyendecker', 'Alphonse Mucha', 'Bob Ross', 'Yayoi Kusama', 'Anish Kapoor', 'Yoshitomo Nara', 'Haruki Murakami', 'Barbara Kruger', 'North West', 'Damien Hirst']
    const adverbList = ['abnormally', 'abruptly', 'absently', 'accidentally', 'accusingly', 'actually', 'adventurously', 'adversely', 'afterwards', 'almost', 'always', 'amazingly', 'angrily', 'anxiously', 'arrogantly', 'awkwardly', 'badly', 'bashfully', 'beautifully', 'bitterly', 'bleakly', 'blindly', 'blissfully', 'boldly', 'bravely', 'briefly', 'brightly', 'briskly', 'broadly', 'busily', 'calmly', 'carefully', 'carelessly', 'cautiously', 'certainly', 'cheerfully', 'clearly', 'cleverly', 'closely', 'coaxingly', 'commonly', 'continually', 'coolly', 'correctly', 'courageously', 'crossly', 'cruelly', 'curiously', 'daily', 'daintily', 'daringly', 'dearly', 'deceivingly', 'deeply', 'deliberately', 'delightfully', 'desperately', 'determinedly', 'diligently', 'doubtfully', 'dreamily', 'eagerly', 'easily', 'elegantly', 'energetically', 'enormously', 'equally', 'especially', 'even', 'eventually', 'exactly', 'excitedly', 'extremely', 'fairly', 'famously', 'far', 'fast', 'fatally', 'ferociously', 'fervently', 'fiercely', 'fondly', 'foolishly', 'fortunately', 'frankly', 'frantically', 'freely', 'frightfully', 'fully', 'furiously', 'generally', 'generously', 'gently', 'gladly', 'gracefully', 'gratefully', 'greatly', 'greedily', 'happily', 'hard', 'harshly', 'hastily', 'heartily', 'heavily', 'helpfully', 'helplessly', 'here', 'highly', 'honestly', 'hopelessly', 'hungrily', 'hurriedly', 'immediately', 'inadequately', 'increasingly', 'innocently', 'inquisitively', 'instantly', 'intensely', 'interestingly', 'inwardly', 'irritably', 'jealously', 'jovially', 'joyfully', 'joyously', 'jubilantly', 'justly', 'keenly', 'kiddingly', 'kindly', 'knavishly', 'knowingly', 'knowledgeably', 'lazily', 'less', 'lightly', 'likely', 'lively', 'loftily', 'longingly', 'loosely', 'loudly', 'lovingly', 'loyally', 'madly', 'majestically', 'meaningfully', 'mechanically', 'merrily', 'miserably', 'mockingly', 'more', 'mortally', 'mysteriously', 'naturally', 'nearly', 'nervously', 'never', 'nicely', 'noisily', 'obediently', 'oddly', 'offensively', 'officially', 'only', 'openly', 'optimistically', 'painfully', 'patiently', 'perfectly', 'physically', 'playfully', 'politely', 'poorly', 'potentially', 'powerfully', 'promptly', 'properly', 'proudly', 'punctually', 'quaintly', 'queerly', 'questionably', 'quickly', 'quietly', 'quirkily', 'quizzically', 'rapidly', 'rarely', 'ravenously', 'readily', 'really', 'reassuringly', 'recklessly', 'regularly', 'reluctantly', 'repeatedly', 'restfully', 'righteously', 'rightfully', 'roughly', 'rudely', 'sadly', 'safely', 'scarcely', 'searchingly', 'seemingly', 'seldom', 'selfishly', 'seriously', 'shakily', 'sharply', 'sheepishly', 'shrilly', 'shyly', 'silently', 'sleepily', 'slowly', 'smoothly', 'softly', 'solemnly', 'sometimes', 'soon', 'speedily', 'stealthily', 'sternly', 'strictly', 'stubbornly', 'stupidly', 'suddenly', 'supposedly', 'surprisingly', 'suspiciously', 'sweetly', 'swiftly', 'sympathetically', 'tensely', 'terribly', 'thankfully', 'thoroughly', 'thoughtfully', 'tightly', 'tomorrow', 'tonight', 'too', 'tremendously', 'truly', 'truthfully', 'ultimately', 'unaccountably', 'unbearably', 'understandingly', 'unexpectedly', 'unfortunately', 'unhappily', 'unnecessarily', 'unwillingly', 'upbeat', 'upright', 'upward', 'urgently', 'usefully', 'uselessly', 'usually', 'vacantly', 'vaguely', 'vainly', 'valiantly', 'vastly', 'verbally', 'viciously', 'victoriously', 'violently', 'vivaciously', 'voluntarily', 'warmly', 'wearily', 'well', 'wetly', 'wholly', 'wildly', 'wisely', 'wonderfully', 'wrongly', 'yearly', 'youthfully'];
    const nounList = ['nebula', 'neck', 'necklace', 'need', 'neighbor', 'nemesis', 'nest', 'neurosis', 'new', 'nexus', 'niche', 'niece', 'night', 'ninja', 'no', 'nobody', 'noise', 'noose', 'nose', 'notebook', 'novation', 'nucleus', 'nurse', 'nursery', 'oasis', 'octopus', 'office', 'offspring', 'omnibus', 'one', 'opossum', 'orange', 'orca', 'organization', 'orifice', 'osprey', 'ostrich', 'ovary', 'owl', 'oxygen', 'pair', 'pais', 'pancreas', 'panel', 'pansy', 'pantry', 'pants', 'paper', 'papyrus', 'paradox', 'parent', 'parenthesis', 'park', 'pass', 'passerby', 'passion fruit', 'path', 'patient', 'patio', 'peach', 'peacock', 'peer', 'pelvis', 'pencil', 'pendulum', 'pepperoni', 'percent', 'perfume', 'person', 'persona', 'personnel', 'pet', 'pharmacy', 'phenomenon', 'phoenix', 'phone', 'photograph', 'pig', 'pike', 'pillow', 'piranha', 'pizza', 'plankton', 'plant', 'plate', 'plateau', 'platform', 'platypus', 'play', 'plea', 'plexus', 'pliers', 'plus', 'ply', 'podium', 'poetry', 'poinsettia', 'police', 'policy', 'polis', 'politics', 'poppy', 'porch', 'porpoise', 'portfolio', 'posse', 'possum', 'post', 'poster', 'pouch', 'poultry', 'power', 'practice', 'practicum', 'praxis', 'praying mantis', 'prefix', 'premise', 'premium', 'present', 'press', 'pretty', 'prey', 'price', 'priest', 'prince', 'princess', 'pro', 'problem', 'process', 'prodigy', 'proficiency', 'prognosis', 'programme', 'proof', 'property', 'prophecy', 'prospectus', 'protocol', 'protozoan', 'proxy', 'psyche', 'psychosis', 'pulley', 'punctuation', 'pupil', 'puppy', 'purpose', 'purse', 'pus', 'put', 'puzzle', 'quail', 'quality', 'quantum', 'quartz', 'quay', 'que', 'queen', 'questionnaire', 'quiche', 'quiz', 'rabbi', 'rabbit', 'raccoon', 'race', 'rad', 'radio', 'radish', 'radius', 'rally', 'ranch', 'rat', 'ratio', 'rationale', 'raven', 'ravioli', 'read', 'reality', 'recipe', 'recommendation', 'reef', 'reference', 'referendum', 'reflex', 'refuge', 'regimen', 'reindeer', 'rendezvous', 'reply', 'request', 'research', 'residence', 'resident', 'restaurant', 'resume', 'retina', 'rhinoceros', 'rice', 'river', 'rock', 'rolex', 'ross', 'royal', 'ruler', 'rum', 'runner up', 'sachet', 'safe', 'sale', 'salesman', 'salmon', 'sand', 'sandwich', 'sash', 'sasquatch', 'saturday', 'sauce', 'say', 'scenario', 'scenery', 'schema', 'science', 'scientist', 'scissors', 'sclera', 'score', 'scratch', 'sea', 'secretary', 'see', 'seed', 'septum', 'series', 'serum', 'service', 'sew', 'sex', 'shaman', 'shambles', 'shampoo', 'shark', 'she', 'sheaf', 'sheep', 'shelf', 'shellfish', 'sheriff', 'shiny', 'ship', 'shoe', 'shop', 'shorts', 'shrimp', 'signage', 'signal', 'silo', 'simile', 'singular', 'sinus', 'sir', 'sister', 'six', 'ski', 'sky', 'sleep', 'sloth', 'smile', 'smithereens', 'social media', 'society', 'sock', 'software', 'soil', 'soliloquy', 'solo', 'some', 'something', 'soprano', 'soul', 'souvenir', 'spacecraft', 'specimen', 'spectacle', 'spectrum', 'speech', 'spice', 'spiegel', 'splash', 'spoon', 'spoonful', 'spouse', 'auto', 'cantaloupe', 'canvas', 'cap', 'cargo', 'carrot', 'carry', 'case', 'cat', 'catalog', 'catalyst', 'catch', 'category', 'cattle', 'century', 'cereal', 'certificate', 'chair', 'chalk', 'change', 'chassis', 'cheese', 'cheetah', 'cherry', 'chick', 'chicken', 'chile', 'chilli', 'chimney', 'chocolate', 'choose', 'christmas', 'citrus', 'clay', 'clipper', 'clock', 'cloth', 'cloud', 'clutch', 'coach', 'code', 'coffee', 'coincidence', 'collateral', 'colloquium', 'color', 'colossus', 'comma', 'committee', 'company', 'compass', 'competence', 'complex', 'compliance', 'computer', 'comrade', 'concerto', 'concrete', 'confetti', 'congress', 'conscience', 'conscious', 'consensus', 'consortium', 'content', 'context', 'continuum', 'conundrum', 'coral', 'corn', 'cornea', 'corps', 'corpse', 'correct', 'cortex', 'cost', 'counsel', 'couple', 'course', 'courtesy', 'coverage', 'cow', 'cox', 'coyote', 'crab', 'cranium', 'crayon', 'criticism', 'cross', 'crutch', 'crux', 'cry', 'cuckoo', 'cuff', 'cup', 'cupful', 'cyclops', 'dad', 'daddy', 'daily', 'dairy', 'dais', 'daisy', 'data', 'database', 'date', 'day', 'dear', 'decoy', 'degree', 'delivery', 'demo', 'denarius', 'dentist', 'design', 'desk', 'dessert', 'destiny', 'device', 'diagnosis', 'diary', 'dice', 'die', 'different', 'dilemma', 'dinosaur', 'diploma', 'disco', 'discovery', 'discuses', 'dispatch', 'ditch', 'doctor', 'dog', 'doldrums', 'dolly', 'dolphin', 'donkey', 'door', 'dove', 'dress', 'duck', 'duty', 'dye', 'each', 'ear', 'eclipse', 'education', 'effort', 'ego', 'elementary', 'elephant', 'elk', 'ellipsis', 'else', 'email', 'embargo', 'embassy', 'embolism', 'embolus', 'embryo', 'emoji', 'employee', 'energy', 'entree', 'entry', 'envelope', 'equilibrium', 'equinox', 'equipment', 'era', 'eraser', 'essay', 'etiquette', 'euro', 'every', 'evidence', 'example', 'executive', 'executrix', 'exodus', 'experience', 'experiment', 'expert', 'expertise', 'explanation', 'eye', 'eyeglasses', 'eyelash', 'fabric', 'face', 'factory', 'faculty', 'fairy', 'fan', 'fantasy', 'father', 'fawn', 'feedback', 'female', 'ferry', 'fiance', 'fiction', 'ficus', 'finch', 'fire', 'first', 'flag', 'flare', 'flour', 'flower', 'flu', 'fly', 'flyer', 'food', 'foot', 'foreman', 'forest', 'fork', 'formation', 'formula', 'forum', 'fossa', 'fowl', 'fox', 'franchise', 'french', 'fresco', 'freshman', 'friday', 'fridge', 'friend', 'fruit', 'fun', 'furnace', 'furniture', 'galaxy', 'gallery', 'gallows', 'garage', 'garden', 'garlic', 'gas', 'gazelle', 'gemi', 'genius', 'gentleman', 'genus', 'german', 'ghost', 'giraffe', 'gladiolus', 'glass', 'go', 'goat', 'god', 'goddess', 'gold', 'goldfish', 'good', 'government', 'graffito', 'graffito', 'grapefruit', 'grass', 'greenfly', 'grief', 'grocery', 'group', 'grouse', 'guaranty', 'guest', 'gymnasium', 'gypsy', 'gyrus', 'habitat', 'habitus', 'haddock', 'hair', 'halibut', 'hallux', 'hand', 'handful', 'handsome', 'hare', 'hat', 'head', 'health', 'hearse', 'helix', 'hello', 'help', 'hen', 'hepatitis', 'herd', 'hex', 'hickey', 'hijab', 'hilum', 'history', 'hobby', 'hobo', 'holiday', 'home', 'homework', 'homunculus', 'honey', 'honorarium', 'horse', 'hose', 'host', 'hostess', 'house', 'hovercraft', 'human', 'hummus', 'hut', 'hyperbole', 'hypotenuse', 'hypothesis', 'ibex', 'ibis', 'ice', 'idea', 'ides', 'igloo', 'ignoramus', 'ilium', 'illness', 'impetus', 'inca', 'inch', 'incidence', 'incident', 'industry', 'information', 'inoculum', 'insignia', 'insurance', 'insured', 'intelligence', 'itinerary', 'jackfruit', 'jar', 'jeans', 'jedi', 'jellyfish', 'jersey', 'jesus', 'jetty', 'jewelry', 'job', 'jockey', 'jones', 'journey', 'juice', 'jury', 'kangaroo', 'kata', 'kidney', 'kit', 'kite', 'kitty', 'kiwi', 'knicker', 'knife', 'labia', 'labor', 'lamb', 'lamp', 'language', 'laptop', 'lass', 'laughter', 'laundry', 'lavra', 'lead', 'leave', 'leg', 'legendary', 'legislation', 'lemon', 'lens', 'letter', 'levy', 'library', 'libretto', 'lice', 'license', 'lich', 'lie', 'life', 'light', 'lightning', 'lily', 'lion', 'lioness', 'list', 'liter', 'literature', 'lives', 'loaf', 'lobby', 'lobster', 'locust', 'logo', 'lopez', 'lorry', 'loss', 'lotus', 'love', 'lox', 'luggage', 'lullaby', 'lumen', 'lunch', 'lynching', 'lynx', 'mad', 'madam', 'mafia', 'magus', 'maid', 'mail', 'majesty', 'male', 'malleolus', 'man', 'manatee', 'manga', 'manifesto', 'mantel', 'mantis', 'mantra', 'march', 'market', 'marquis', 'marriage', 'martini', 'mass', 'massage', 'mat', 'match', 'mate', 'material', 'math', 'matrix', 'mattress', 'max', 'maximum', 'maybe', 'mean', 'meat', 'meatus', 'media', 'medici', 'medicine', 'medium', 'megalopolis', 'melody', 'member', 'memo', 'memorabilia', 'memorandum', 'memory', 'meniscus', 'mensch', 'menu', 'mercedes', 'merchandise', 'mess', 'messer', 'metamorphosis', 'metastasis', 'metropolis', 'midwife', 'military', 'milk', 'millennia', 'million', 'mink', 'mir', 'miscellaneous', 'mischief', 'misdiagnosis', 'miss', 'missus', 'mister', 'mitochondria', 'modulus', 'mom', 'mommy', 'monday', 'money', 'mongoose', 'monkey', 'monkfish', 'monsieur', 'month', 'moon', 'moor', 'moose', 'moral', 'morris', 'mosquito', 'moss', 'moth', 'mother', 'motif', 'motto', 'mouse', 'mousse', 'mouth', 'mullet', 'mummy', 'muse', 'museum', 'music', 'mute', 'muter', 'mutter', 'mystery', 'mythos', 'nail', 'nail clipper', 'nanny', 'nautilus', 'navy', 'spy', 'squash', 'squid', 'stadium', 'staff', 'standby', 'star', 'stare', 'starfruit', 'stationery', 'statue', 'status', 'steer', 'stegosaurus', 'stenosis', 'step son', 'sternum', 'stigma', 'stimulus', 'stitch', 'stock', 'stomach', 'stone', 'story', 'stratum', 'strawberry', 'strength', 'stress', 'strife', 'student', 'study', 'stuff', 'subpoena', 'success', 'sue', 'suffix', 'sugar', 'sulcus', 'summary', 'summons', 'superhero', 'supernova', 'surgery', 'surprise', 'suspense', 'swan', 'syllable', 'syllabus', 'symposium', 'synapse', 'synopsis', 'syntax', 'synthesis', 'table', 'tableau', 'tablet', 'taco', 'tail', 'taj', 'talent', 'talisman', 'talus', 'tardy', 'task', 'taste', 'tattoo', 'taurus', 'taxi', 'tea', 'teacher', 'team', 'teaspoonful', 'technology', 'teddy', 'tee', 'teenager', 'teeth', 'teller', 'temperature', 'tempo', 'tense', 'terminus', 'test', 'testicle', 'testimony', 'testis', 'text', 'thank', 'thank you', 'thermos', 'thesaurus', 'thesis', 'this', 'thomas', 'thou', 'thousand', 'thrombus', 'tibia', 'tie', 'tiger', 'time', 'timpani', 'titmouse', 'toast', 'toe', 'ton', 'tongs', 'top', 'topaz', 'tor', 'torch', 'tornado', 'torpedo', 'tortoise', 'torus', 'touch', 'toy', 'trachea', 'tragus', 'trash', 'travel', 'tray', 'treatise', 'treatment', 'trellis', 'trench', 'trolley', 'trophy', 'trousers', 'trout', 'truck', 'truth', 'try', 'tsunami', 'tuesday', 'tuna', 'tundra', 'turkey', 'turnip', 'turtle', 'tux', 'tv', 'tweezers', 'two', 'types', 'typo', 'ulna', 'ultimatum', 'umbrella', 'un', 'uncle', 'underwear', 'uniform', 'universe', 'university', 'usage', 'user', 'uterus', 'varix', 'vase', 'vena cava', 'verbatim', 'verruca', 'vertex', 'vestment', 'veto', 'video', 'vinyl', 'virus', 'vita', 'vocabulary', 'volcano', 'volume', 'vortex', 'waitress', 'wallet', 'walrus', 'warranty', 'wash', 'wasp', 'waste', 'watch', 'water', 'watermelon', 'website', 'wednesday', 'were', 'wharf', 'wheat'];

    const bodypartsList = ['arm', 'eyeball', 'nostril', 'leg', 'foot', 'hand', 'wrist', 'ear', 'thumb', 'pinky', 'index finger', 'middle finger', 'ring finger', 'elbow', 'nipple', 'big toe', 'knee', 'hip bone', 'brain', 'eyelash', 'wisdom tooth', 'shoulder'];
    const ingVerbsList = ['watering', 'cataloging', 'hunting', 'worrying', 'normalizing', 'restructuring', 'programming', 'yelling', 'fencing', 'sparkling', 'slaying', 'melting', 'complaining', 'subtracting', 'wriggling', 'snoring', 'singing', 'thriving', 'blushing', 'speaking', 'fleeing', 'cheering', 'sniffing', 'sleeping', 'longing', 'fighting', 'wrestling','drawing', 'spinning', 'rhyming', 'preaching', 'wobbling', 'groaning', 'speeding', 'breathing', 'living', 'proposing', 'camping',  'sliding', 'skipping', 'shaking', 'spelling', 'shopping', 'photographing', 'visiting', 'creeping', 'graduating', 'squealing', 'floating', 'logging', 'chewing', 'exploding', 'spilling', 'welcoming', 'eliminating', 'acceding', 'classifying', 'smiling', 'assuring', 'settling', 'scheduling', 'perceiving', 'shooting', 'reconciling', 'faxing', 'executing', 'decaying', 'marrying', 'stinging', 'investigating', 'caring', 'questioning', 'proving', 'rescuing', 'filming', 'laying', 'tracing', 'alerting', 'remaining', 'activating', 'interesting', 'boasting', 'imagining', 'putting', 'controlling', 'disliking', 'addressing', 'solving', 'shining', 'wringing', 'fading', 'accelerating', 'establishing', 'curling', 'attacking', 'guaranteeing', 'deceiving', 'patting', 'applauding', 'noting', 'pressing', 'kneeling', 'hitting', 'presiding', 'repeating', 'prescribing', 'arising', 'adding', 'sewing', 'educating', 'manipulating', 'belonging', 'giving', 'participating', 'doubting', 'misunderstanding', 'following', 'trotting', 'writing', 'damming', 'correlating', 'plugging', 'attending', 'retiring', 'understanding', 'walking', 'pinpointing', 'braking', 'soaking', 'remembering', 'slinging', 'borrowing', 'rocking', 'allowing', 'obeying', 'coiling', 'cycling', 'untidying', 'preferring', 'stirring', 'baking', 'saying', 'rotting', 'learning', 'governing', 'confessing', 'reminding', 'utilizing', 'dramatizing', 'knowing', 'puncturing', 'shearing', 'suggesting', 'achieving', 'heading', 'punching', 'greeting', 'gazing', 'swinging', 'occurring', 'sneezing', 'creating', 'hiding', 'stitching', 'promoting', 'changing', 'snowing', 'taking', 'lying', 'reading', 'responding', 'bouncing', 'multiplying', 'conserving', 'challenging', 'losing', 'sowing', 'fooling', 'informing', 'matching', 'dealing', 'detecting', 'rating', 'screwing', 'interlaying', 'phoning', 'binding', 'stopping', 'weighing', 'editing', 'letting', 'publicizing', 'preparing', 'financing', 'checking', 'exciting', 'firing', 'bombing', 'restoring', 'eating', 'sending', 'blotting', 'amusing', 'disagreeing', 'innovating', 'relying', 'correcting', 'confronting', 'judging', 'reducing', 'arguing', 'stamping', 'parking', 'naming', 'doing', 'chopping', 'banging', 'engineering', 'trusting', 'describing', 'delegating', 'cheating', 'lending', 'mistaking', 'squeaking', 'winding', 'comparing', 'adapting', 'cracking', 'scolding', 'scraping', 'buzzing', 'existing', 'improvising', 'praising', 'splitting', 'distributing', 'curing', 'mapping', 'progressing', 'forgiving', 'dressing', 'manning', 'polishing', 'smoking', 'tugging', 'being', 'shutting', 'preventing', 'disappearing', 'presenting', 'explaining', 'crossing', 'predicting', 'converting', 'sighing', 'designing', 'bursting', 'decorating', 'battling', 'sensing', 'presetting', 'chasing', 'overdrawing', 'charging', 'parting', 'planting', 'fearing', 'commanding', 'formulating', 'officiating', 'seeking', 'offending', 'harming', 'computing', 'realigning', 'touring', 'containing', 'revising', 'surprising', 'helping', 'pleading', 'overflowing', 'reinforcing', 'nodding', 'barring', 'ascertaining', 'budgeting', 'lightening', 'collecting', 'slitting', 'becoming', 'cleaning', 'extending', 'boiling', 'working', 'painting', 'protecting', 'mugging', 'flinging', 'updating', 'skiing', 'blinking', 'calling', 'quitting', 'diverting', 'facilitating', 'satisfying', 'rolling', 'siting', 'blowing', 'defining', 'disproving', 'whispering', 'coughing', 'lasting', 'racing', 'sprouting', 'acquiring', 'soothsaying', 'starting', 'including', 'knitting', 'jumping', 'staining', 'nominating', 'boxing', 'preceding', 'inventing', 'increasing', 'implementing', 'radiating', 'relaxing', 'guarding', 'brushing', 'killing', 'objecting', 'keeping', 'vexing', 'accomplishing', 'orienteering', 'sinking', 'instituting', 'juggling', 'trading', 'frying', 'scaring', 'hypothesizing', 'insuring', 'sealing', 'shoeing', 'grinning', 'ranking', 'teaching', 'coaching', 'rising', 'bowing', 'systemizing', 'jamming', 'performing', 'framing', 'delaying', 'experimenting', 'smashing', 'leveling', 'beginning', 'owing', 'clearing', 'growing', 'standing', 'verbalizing', 'foreseeing', 'delighting', 'hooking', 'pasting', 'coloring', 'setting', 'instructing', 'generating', 'measuring', 'gluing', 'avoiding', 'missing', 'attaining', 'forecasting', 'tipping', 'sharing', 'bleaching', 'proofreading', 'intending', 'queueing', 'sucking', 'monitoring', 'overcoming', 'casting', 'tying', 'ignoring', 'examining', 'doubling', 'wishing', 'spiting', 'wending', 'thrusting', 'liking', 'inducing', 'unifying', 'excusing', 'joking', 'scratching', 'suspending', 'scribbling', 'stinking', 'exhibiting', 'structuring', 'packing', 'tricking', 'wandering', 'bathing', 'inventorying', 'expanding', 'soothing', 'communicating', 'simplifying', 'exceeding', 'disapproving', 'calculating', 'strapping', 'encouraging', 'unpacking', 'cutting', 'originating', 'sketching', 'impressing', 'hammering', 'transforming', 'modifying', 'besetting', 'spreading', 'mediating', 'staring', 'buying', 'biding', 'possessing', 'expecting', 'covering', 'rejecting', 'drying', 'mattering', 'blessing', 'hugging', 'wrapping', 'attempting', 'meeting', 'springing', 'using', 'alighting', 'meddling', 'stimulating', 'forgetting', 'appreciating', 'rejoicing', 'critiquing', 'depending', 'spraying', 'researching', 'slapping', 'requesting', 'claiming', 'harassing', 'betting', 'crying', 'mending', 'irritating', 'concentrating', 'summarizing', 'enforcing', 'exercising', 'handwriting', 'supplying', 'purchasing', 'lecturing', 'competing', 'compiling', 'beating', 'bleeding', 'tutoring', 'kissing', 'testing', 'fetching', 'ending', 'arriving', 'sipping', 'appearing', 'praying', 'arranging', 'leaving', 'entering', 'maintaining', 'zooming', 'tempting', 'flowing', 'extracting', 'treating', 'upholding', 'swelling', 'wailing', 'pinching', 'ordering', 'assessing', 'timing', 'grating', 'organizing', 'finding', 'digging', 'curving', 'releasing', 'locking', 'finalizing', 'installing', 'crawling', 'admiring', 'telephoning', 'deserving', 'owning', 'peeling', 'scorching', 'resolving', 'interrupting', 'reorganizing', 'choosing', 'realizing', 'swimming', 'professing', 'reaching', 'leaning', 'typing', 'delivering', 'choking', 'seeing', 'licking', 'symbolizing', 'stealing', 'trapping', 'drafting', 'begging', 'dreaming', 'directing', 'appointing', 'banning', 'hoping', 'murdering', 'reviewing', 'signing', 'looking', 'strengthening', 'sweating', 'developing', 'reasoning', 'troubleshooting', 'analyzing', 'driving', 'glowing', 'targeting', 'procuring', 'connecting', 'sheltering', 'pouring', 'transporting', 'improving', 'observing', 'undressing', 'knocking', 'tabulating', 'lifting', 'shrugging', 'signaling', 'guiding', 'flying', 'suffering', 'lighting', 'navigating', 'rendering', 'going', 'milking', 'marching', 'moving', 'annoying', 'streamlining', 'manufacturing', 'dissecting', 'storing', 'poking', 'taming', 'arresting', 'damaging', 'shocking', 'pretending', 'haunting', 'apologizing', 'sticking', 'booking', 'offering', 'employing', 'dripping', 'negotiating', 'recording', 'constructing', 'replying', 'misleading', 'striving', 'squeezing', 'relating', 'biting', 'happening', 'nailing', 'busting', 'forsaking', 'sorting', 'approving', 'winking', 'training', 'coming', 'motivating', 'tasting', 'considering', 'permitting', 'freezing', 'providing', 'raising', 'coordinating', 'arbitrating', 'memorizing', 'striping', 'teasing', 'mining', 'surrounding', 'mooring', 'twisting', 'inputting', 'foregoing', 'drinking', 'wetting', 'running', 'earning', 'securing', 'diving', 'tiring', 'serving', 'clipping', 'wearing', 'jailing', 'smiting', 'building', 'heating', 'needing', 'selling', 'waiting', 'forcing', 'embarrassing', 'burning', 'foretelling', 'regretting', 'slinking', 'humming', 'robing', 'itching', 'concerning', 'peeping', 'warning', 'burying', 'injuring', 'drowning', 'announcing', 'posting', 'shedding', 'advising', 'transferring', 'snatching', 'closing', 'flashing', 'justifying', 'dwelling', 'boring', 'screaming', 'modeling', 'stuffing', 'x-raying', 'demonstrating', 'listing', 'withholding', 'dancing', 'managing', 'tumbling', 'laughing', 'rushing', 'intensifying', 'ticking', 'interfering', 'assembling', 'interviewing', 'flooding', 'ruling', 'composing', 'wondering', 'interpreting', 'joining', 'griping', 'stepping', 'warming', 'yawning', 'blinding', 'awaking', 'counting', 'introducing', 'swearing', 'fastening', 'flowering', 'tripping', 'behaving', 'jogging', 'slowing', 'stringing', 'pulling', 'waking', 'treading', 'overtaking', 'watching', 'feeling', 'enlisting', 'concluding', 'beaming', 'healing', 'sparing', 'mentoring', 'drumming', 'mixing', 'sining', 'zipping', 'hovering', 'picking', 'opening', 'whirling', 'pushing', 'expediting', 'pleasing', 'suspecting', 'unlocking']
    const detectiveList = ['Sherlock Holmes', 'Nancy Drew', 'Hercule Poirot', 'Miss Marple', 'Batman', 'Lieutenant Columbo', 'Joe Hardy', 'Frank Hardy', 'John "Scottie" Ferguson', 'Jake Peralta', 'Gil Grissom', 'Eddie Valiant', 'Will Graham', 'Clarice Starling', 'Dale Cooper', 'Scooby Doo', 'Dana Scully', 'Fox Mulder']



    //click buttons
    start.addEventListener('click', function(){ // click on start button
        form1.className = 'vis'; //makes form 1 visible.
    });
    next1.addEventListener('click', function(){
        form2.className = 'vis'
    });
    next2.addEventListener('click', function(){
        form3.className = 'vis'
    });

    //autofills
    autofill0.addEventListener('click', function(){
        const artTypeNum = Math.floor(Math.random() * artTypeList.length); document.querySelector('#artType').value = `${artTypeList[artTypeNum]}`;
        const weekdayNum = Math.floor(Math.random() * weekdayList.length); document.querySelector('#weekday').value = `${weekdayList[weekdayNum]}`;
        const superlativeNum = Math.floor(Math.random() * superlativesList.length); document.querySelector('#superlative').value = `${superlativesList[superlativeNum]}`;
        const numNum = Math.floor(Math.random() * 369); document.querySelector('#num').value = `${numNum}`;
    })
    autofill1.addEventListener('click', function(){
        const nameNum = Math.floor(Math.random() * nameList.length); document.querySelector('#fullName').value = `${nameList[nameNum]}`;
        const artistNum = Math.floor(Math.random() * artistList.length); document.querySelector('#artist').value = `${artistList[artistNum]}`;
        const adverbNum = Math.floor(Math.random() * adverbList.length); document.querySelector('#adverb').value = `${adverbList[adverbNum]}`;
        const nounNum = Math.floor(Math.random() * nounList.length); document.querySelector('#noun1').value = `${nounList[nounNum]}`;
    })
    autofill2.addEventListener('click', function(){
        const bodypartNum = Math.floor(Math.random() * bodypartsList.length); document.querySelector('#bodyPart').value = `${bodypartsList[bodypartNum]}`;
        const nounNum = Math.floor(Math.random() * nounList.length); document.querySelector('#noun').value = `${nounList[nounNum]}`;
        const ingVerbNum = Math.floor(Math.random() * ingVerbsList.length); document.querySelector('#ingVerb').value = `${ingVerbsList[ingVerbNum]}`;
        const yourNameNum = Math.floor(Math.random() * detectiveList.length); document.querySelector('#yourName').value = `${detectiveList[yourNameNum]}`;
    });

    //submit
    form.addEventListener('click', function(event){
        event.preventDefault();
        processFormData(formData);
    });

    function processFormData(formData){
        const words = [];
        const emptyfields = [];
        let counter = 0;

        for (const eachWord of formData){
            if(eachWord.value){
                words.push(eachWord.value);
            } else {
                emptyfields.push(counter);
            }
            counter++;
        };

        if(emptyfields.length > 0){
            showErrors(formData, emptyfields);
        } else {
            makeMadlib(words);
        };
    };

    //if there is an error
    function showErrors(formData, emptyfields){
        const errorId = formData[emptyfields[0]].id;
        const errorText = `Please fill out this field`;
        document.querySelector('#error').innerHTML = errorText;
        document.querySelector(`#${errorId}`).focus();
    };

    //if there is no error
    function makeMadlib(words){
        const errorText = '';
        document.querySelector('#error').innerHTML = errorText; //deletes error text
            //console.log(`${words[0]}, ${words[1]},${words[2]}, ${words[3]},${words[4]}, ${words[5]},${words[6]}, ${words[7]},${words[8]}, ${words[9]},${words[10]}, ${words[11]},${words[12]}`)
        
        const title = document.querySelector('.title')
        const news = document.querySelector('.newspaper')
        const myTitle = `${words[0].toUpperCase()} THIEF CAUGHT!`;
        const myNews = `Early ${words[1]} morning, it was discovered that a ${words[0]} made by world-renowned artist ${words[5]} had disappeared from the Manetti Shrem Museum. The piece, titled 'The ${words[2].charAt(0).toUpperCase() + words[2].slice(1)} Empty ${words[7].charAt(0).toUpperCase() + words[7].slice(1)}', depicted a ${words[9]} has been appraised for ${words[3]} million dollars. Police and museum staff ${words[6]} scoured the premises for hours, but have yet to recover it. Late last night, ${words[4]} was discovered ${words[10]} near the location of the crime and arrested for the theft. "I'm innocent!" they claim. A likely story. ${words[11]}, the lead detective for the case, assures the public they've caught the correct perp. "I'm not a lazy detective, and all the evidence points to our suspect." They then went on to explain how their ${words[8]} has been feeling funny since the crime, but has gone back to normal since the suspect was arrested. Undoubtably, this is a clear sign that the case has been solved. The ${words[0]} has yet to be recovered.`;

        title.innerHTML = myTitle;
        news.innerHTML = myNews;
        result.className = 'vis';//makes newspaper visible
    };
    
    //new try
    document.querySelector('.restart').addEventListener('click', function(){
        location.reload(); //refreshes page so it starts over.
    });

})();