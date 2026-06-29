export const products = [
  {
    id: 'cap-serum',
    name: 'SÉRUM FORTIFIANT CAPILLAIRE',
    gamme: 'capillaire',
    price: 3500,
    rating: 4.8,
    reviewsCount: 142,
    activeIngredients: ['Huile de Ricin', 'Kératine Végétale', 'Pro-Vitamine B5'],
    shortDescription: 'Stimule la pousse, fortifie la fibre capillaire et prévient la casse dès la racine.',
    description: 'Le Sérum Fortifiant Capillaire Unik est un concentré d’actifs hautement efficaces conçu pour revitaliser le cuir chevelu et stimuler la croissance. Sa formule légère et non grasse pénètre instantanément pour nourrir les follicules pileux, renforcer la fibre capillaire et redonner de la densité et de la brillance aux cheveux fatigués.',
    benefits: [
      'Réduit la chute des cheveux de 45% en 1 mois',
      'Stimule la microcirculation du cuir chevelu',
      'Densifie et épaissit la fibre capillaire'
    ],
    education: {
      whyChosen: "L'Huile de Ricin est scientifiquement reconnue pour sa forte concentration en acide ricinoléique, un acide gras rare qui stimule les prostaglandines du follicule. La Kératine Végétale mime les protéines naturelles du cheveu pour combler les brèches.",
      howItWorks: "En appliquant ce sérum directement sur les racines, les actifs pénètrent le derme capillaire pour nourrir le bulbe inactif. La Pro-Vitamine B5 retient l'hydratation, créant un environnement optimal pour une croissance saine.",
      whyExists: "La chute de cheveux et la perte de densité sont des préoccupations majeures. La plupart des solutions du marché assèchent le cuir chevelu. Nous avons créé cette formule pour traiter la racine du problème tout en respectant l'équilibre naturel de la peau."
    },
    ugcVideo: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=400&q=80',
    routine: {
      ids: ['cap-shampoo', 'cap-mask'],
      text: "Si vous utilisez ce sérum pour stimuler la pousse, il est crucial d'utiliser des lavants très doux pour ne pas agresser votre cuir chevelu nouvellement stimulé. Voici les soins parfaits pour compléter votre routine fortifiante :"
    },
    usage: 'Appliquez quelques gouttes sur le cuir chevelu sec ou humide, section par section. Massez délicatement du bout des doigts pour faire pénétrer. Ne pas rincer. Utilisez 3 fois par semaine pour des résultats optimaux.',
    ingredients: 'Aqua (Water), Ricinus Communis (Castor) Seed Oil, Glycerin, Hydrolyzed Keratin, Panthenol, Benzyl Alcohol, Dehydroacetic Acid, Parfum (Fragrance), Xanthan Gum, Tocopherol, Linalool, Limonene.',
    sizes: ['50ml', '100ml'],
    image: '/capillaire_serum.png'
  },
  {
    id: 'cap-shampoo',
    name: 'SHAMPOOING RÉPARATEUR INTENSE',
    gamme: 'capillaire',
    price: 1800,
    rating: 4.6,
    reviewsCount: 88,
    activeIngredients: ['Huile d’Argan', 'Protéines de Blé', 'Aloé Vera'],
    shortDescription: 'Nettoie en douceur, hydrate et répare les cheveux secs ou abîmés sans les alourdir.',
    description: 'Formulé sans sulfates ni silicones, ce shampooing nettoie délicatement le cuir chevelu tout en infusant une hydratation essentielle. Enrichi en huile d’argan précieuse et en protéines de blé fortifiantes, il répare la cuticule abîmée par les traitements thermiques et chimiques, laissant vos cheveux doux, soyeux et faciles à démêler.',
    benefits: [
      'Nettoie sans décaper les huiles naturelles',
      'Répare les pointes fourchues',
      'Apporte une brillance miroir immédiate'
    ],
    education: {
      whyChosen: "L'Huile d'Argan est riche en vitamine E et en acides gras essentiels, parfaits pour sceller l'hydratation. Les Protéines de Blé hydrolysées sont de petites molécules capables de pénétrer sous les écailles du cheveu pour le réparer de l'intérieur.",
      howItWorks: "Les tensioactifs doux (sans sulfates) soulèvent les impuretés sans agresser le sébum protecteur. Simultanément, l'Aloé Vera apaise le cuir chevelu pour éviter les démangeaisons post-lavage.",
      whyExists: "Les shampooings classiques décapent le cheveu, nécessitant ensuite des masques lourds pour compenser. Nous voulions un premier geste de lavage qui soit déjà un véritable soin réparateur."
    },
    ugcVideo: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=400&q=80',
    routine: {
      ids: ['cap-mask', 'cap-serum'],
      text: "Votre base lavante est réparatrice. Pour maximiser la reconstruction de la fibre capillaire, nous recommandons de sceller l'hydratation avec notre masque, et de traiter les racines avec le sérum."
    },
    usage: 'Appliquez sur cheveux mouillés, massez délicatement le cuir chevelu puis rincez abondamment. Effectuez un second shampooing si nécessaire.',
    ingredients: 'Aqua, Sodium Lauroyl Methyl Isethionate, Cocamidopropyl Betaine, Decyl Glucoside, Argania Spinosa Kernel Oil, Hydrolyzed Wheat Protein, Aloe Barbadensis Leaf Juice Powder, Glycerin, Guar Hydroxypropyltrimonium Chloride, Citric Acid, Sodium Benzoate, Potassium Sorbate, Parfum.',
    sizes: ['250ml', '500ml'],
    image: '/catg2.png'
  },
  {
    id: 'cap-mask',
    name: 'MASQUE NOURRISSANT PROFOND',
    gamme: 'capillaire',
    price: 2400,
    rating: 4.9,
    reviewsCount: 76,
    activeIngredients: ['Beurre de Karité', 'Huile de Coco', 'Phytokératine'],
    shortDescription: 'Un soin ultra-riche pour nourrir intensément, réparer et redessiner les boucles.',
    description: 'Le Masque Nourrissant Profond Unik est un véritable bain de nutrition pour les cheveux très secs, frisés ou défrisés. Il pénètre au cœur de la fibre pour combler les brèches lipidiques, sceller l’hydratation et protéger les cheveux contre la casse et les agressions extérieures.',
    benefits: [
      'Démêlage instantané sans effort',
      'Nutrition profonde jusqu\'à 72H',
      'Redéfinit et rebondit les boucles'
    ],
    education: {
      whyChosen: "Le Beurre de Karité est un lipide lourd qui scelle l'humidité à l'intérieur du cheveu de manière prolongée. La Phytokératine reconstruit la structure protéique endommagée par la chaleur.",
      howItWorks: "Grâce à son pH légèrement acide, ce masque referme les cuticules (écailles) du cheveu après le shampooing, emprisonnant ainsi tous les actifs nourrissants à l'intérieur du cortex capillaire.",
      whyExists: "Les cheveux texturés ou abîmés souffrent de 'porosité', ils perdent leur eau rapidement. Ce masque a été conçu pour agir comme un bouclier lipidique impénétrable."
    },
    ugcVideo: 'https://images.unsplash.com/photo-1596755389378-c11dde12415e?auto=format&fit=crop&w=400&q=80',
    routine: {
      ids: ['cap-shampoo', 'cap-serum'],
      text: "Un masque lourd nécessite un nettoyage optimal pour ne pas s'accumuler (build-up). Voici la routine complète pour des cheveux nourris mais légers :"
    },
    usage: 'Après le shampooing, appliquez généreusement sur les longueurs et pointes essorées. Laissez poser 5 à 10 minutes, puis rincez abondamment à l’eau fraîche pour sceller les écailles.',
    ingredients: 'Aqua, Cetearyl Alcohol, Butyrospermum Parkii Butter, Cocos Nucifera Oil, Behentrimonium Methosulfate, Glycerin, Hydrolyzed Soy Protein, Tocopheryl Acetate, Lactic Acid, Benzyl Alcohol, Salicylic Acid, Sorbic Acid, Limonene.',
    sizes: ['200ml', '400ml'],
    image: '/capillaire_serum.png'
  },
  {
    id: 'der-gel',
    name: 'GEL NETTOYANT PURIFIANT',
    gamme: 'dermatologique',
    price: 1900,
    rating: 4.7,
    reviewsCount: 112,
    activeIngredients: ['Acide Salicylique (BHA)', 'Zinc PCA', 'Extrait de Thé Vert'],
    shortDescription: 'Élimine les impuretés, régule l’excès de sébum et réduit visiblement les imperfections.',
    description: 'Ce gel moussant doux purifie la peau en profondeur sans altérer sa barrière protectrice naturelle. Grâce à l’action combinée de l’acide salicylique micro-dosé et du zinc PCA, il désobstrue les pores, matifie la peau et prévient l’apparition des boutons et points noirs.',
    benefits: [
      'Désobstrue les pores en profondeur',
      'Régule la production de sébum (matifie)',
      'Réduit les points noirs et boutons inflammatoires'
    ],
    education: {
      whyChosen: "L'Acide Salicylique (BHA) est lipophile, ce qui signifie qu'il peut pénétrer le sébum à l'intérieur du pore pour l'exfolier. Le Zinc PCA possède d'excellentes propriétés sébo-régulatrices et antibactériennes.",
      howItWorks: "En moussant, le gel dissout la saleté de surface, tandis que le BHA pénètre dans la glande sébacée pour dissoudre le 'bouchon' qui cause les points noirs.",
      whyExists: "Beaucoup de nettoyants anti-acné sont trop agressifs et détruisent la barrière cutanée, causant un effet rebond (plus de sébum). Nous voulions purifier efficacement mais avec une extrême douceur."
    },
    ugcVideo: 'https://images.unsplash.com/photo-1580870058864-1596541f5a54?auto=format&fit=crop&w=400&q=80',
    routine: {
      ids: ['der-cream', 'der-serum'],
      text: "Si vous utilisez un nettoyant purifiant, il est essentiel d'hydrater votre peau juste après avec une crème non-comédogène pour éviter que la peau ne compense en produisant plus de sébum :"
    },
    usage: 'Matin et soir, appliquez sur visage humide, faites mousser en effectuant des mouvements circulaires en insistant sur la zone T (front, nez, menton), puis rincez abondamment à l’eau tiède.',
    ingredients: 'Aqua, Glycerin, Cocamidopropyl Betaine, Sodium Lauryl Sulfoacetate, Salicylic Acid, Zinc PCA, Camellia Sinensis Leaf Extract, Allantoin, Panthenol, Sodium Hydroxide, Sodium Chloride, Sodium Benzoate, Citric Acid.',
    sizes: ['150ml', '300ml'],
    image: '/dermato_gel.png'
  },
  {
    id: 'der-cream',
    name: 'CRÈME HYDRATANTE APAISANTE',
    gamme: 'dermatologique',
    price: 2800,
    rating: 4.8,
    reviewsCount: 204,
    activeIngredients: ['Niacinamide (5%)', 'Acide Hyaluronique', 'Céramides NP'],
    shortDescription: 'Hydrate 24h, apaise les rougeurs et restaure la barrière cutanée des peaux sensibles.',
    description: 'Une émulsion légère et onctueuse qui offre une hydratation longue durée tout en calmant immédiatement les sensations de tiraillement. Formulée avec 5% de niacinamide et un complexe de céramides essentiels, elle renforce l’épiderme face aux agressions quotidiennes et améliore la texture de la peau.',
    benefits: [
      'Restaure le film hydrolipidique',
      'Atténue considérablement les rougeurs',
      'Hydrate intensément sans fini gras'
    ],
    education: {
      whyChosen: "Les Céramides NP représentent 50% de la composition naturelle de la barrière cutanée. La Niacinamide (Vitamine B3) est la référence absolue pour apaiser les inflammations et lisser les pores.",
      howItWorks: "L'Acide Hyaluronique agit comme une éponge retenant jusqu'à 1000 fois son poids en eau, tandis que les Céramides scellent cette eau pour empêcher la déshydratation transépidermique.",
      whyExists: "La barrière cutanée endommagée est la cause n°1 des peaux sensibles et réactives. Cette crème agit comme un 'pansement' liquide pour réparer cette barrière essentielle."
    },
    ugcVideo: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=400&q=80',
    routine: {
      ids: ['der-gel', 'der-serum'],
      text: "Une crème apaisante fonctionne mieux sur une peau correctement nettoyée et préparée. Voici les indispensables pour une routine peau parfaite :"
    },
    usage: 'Appliquez matin et soir sur le visage et le cou préalablement nettoyés. Excellente base de maquillage.',
    ingredients: 'Aqua, Niacinamide, Caprylic/Capric Triglyceride, Glycerin, Propanediol, Sodium Hyaluronate, Ceramide NP, Squalane, Butylene Glycol, Carbomer, Cetearyl Glucoside, Sorbitan Olivate, Phenoxyethanol, Ethylhexylglycerin.',
    sizes: ['50ml'],
    image: '/catg1.png'
  },
  {
    id: 'der-serum',
    name: 'SÉRUM ÉCLAT VITAMINE C',
    gamme: 'dermatologique',
    price: 3800,
    rating: 4.9,
    reviewsCount: 95,
    activeIngredients: ['Vitamine C Stabilisée (10%)', 'Acide Férulique', 'Vitamine E'],
    shortDescription: 'Illumine le teint, estompe les taches pigmentaires et protège du vieillissement cutané.',
    description: 'Un sérum antioxydant puissant qui cible le teint terne et les signes de fatigue. Sa formule synergique associant Vitamine C stabilisée à 10%, Acide Férulique et Vitamine E aide à neutraliser les radicaux libres, stimule la production de collagène et révèle un teint unifié, éclatant de santé.',
    benefits: [
      'Estompe les taches brunes et d\'hyperpigmentation',
      'Illumine le teint terne instantanément',
      'Protège contre les radicaux libres et la pollution'
    ],
    education: {
      whyChosen: "La Vitamine C pure est instable. Nous utilisons une forme stabilisée couplée à l'Acide Férulique et à la Vitamine E, ce trio synergique multiplie par 8 l'efficacité antioxydante de la Vitamine C seule.",
      howItWorks: "Les antioxydants donnent des électrons aux radicaux libres (pollution, UV) avant qu'ils n'attaquent vos cellules. En parallèle, la Vitamine C bloque la tyrosinase, l'enzyme responsable de la production de mélanine, réduisant ainsi les taches.",
      whyExists: "L'hyperpigmentation et le stress oxydatif vieillissent prématurément la peau. Il nous fallait un bouclier urbain qui soit à la fois correcteur et protecteur."
    },
    ugcVideo: 'https://images.unsplash.com/photo-1512496015851-a1dc8a477858?auto=format&fit=crop&w=400&q=80',
    routine: {
      ids: ['der-cream', 'der-gel'],
      text: "La Vitamine C nécessite d'être suivie par une bonne crème hydratante pour sceller le sérum et maximiser l'éclat de votre peau. Découvrez notre duo recommandé :"
    },
    usage: 'Appliquez 4 à 5 gouttes le matin sur le visage et le cou propres et secs, avant votre crème hydratante. Utilisez une protection solaire SPF en journée.',
    ingredients: 'Aqua, 3-O-Ethyl Ascorbic Acid, Ferulic Acid, Tocopherol, Hyaluronic Acid, Aloe Barbadensis Leaf Juice, Ethoxydiglycol, Phenoxyethanol, Triethanolamine, Disodium EDTA.',
    sizes: ['30ml'],
    image: '/dermato_gel.png'
  }
];
