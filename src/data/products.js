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
  },
  {
    id: 'der-cica',
    name: 'CRÈME CICA-LIPIDIQUE',
    gamme: 'dermatologique',
    price: 3100,
    rating: 4.8,
    reviewsCount: 64,
    activeIngredients: ['Centella Asiatica', 'Panthénol (5%)', 'Madécassoside'],
    shortDescription: 'Répare intensément, apaise et protège les peaux abîmées ou irritées.',
    description: 'Un soin SOS formulé pour réparer la barrière cutanée des peaux sèches, irritées ou agressées. Il accélère la régénération de l’épiderme tout en soulageant instantanément les inconforts.',
    benefits: [
      'Favorise la cicatrisation cutanée',
      'Soulage les irritations dès la première application',
      'Forme une barrière protectrice non grasse'
    ],
    education: {
      whyChosen: "La Centella Asiatica et son extrait purifié, le Madécassoside, sont de formidables stimulants de la synthèse de collagène. Le Panthénol à 5% apaise instantanément.",
      howItWorks: "Il forme un film protecteur respirant qui empêche les bactéries de se fixer tout en maintenant un taux d'hydratation optimal nécessaire à la reconstruction cellulaire.",
      whyExists: "Les peaux altérées par le froid, les gommages excessifs ou les traitements dermatologiques ont besoin d'un soin barrière neutre mais hautement régénérant."
    },
    ugcVideo: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=400&q=80',
    routine: {
      ids: ['der-gel', 'der-cream'],
      text: "Pour réparer efficacement votre peau, nettoyez-la avec un gel ultra-doux avant d'appliquer votre baume Cica :"
    },
    usage: 'Appliquez matin et soir sur les zones sèches, irritées ou sensibilisées sur une peau propre.',
    ingredients: 'Aqua, Panthenol, Glycerin, Centella Asiatica Extract, Madecassoside, Squalane, Cetearyl Alcohol, Stearic Acid, Ceramide NP.',
    sizes: ['40ml'],
    image: '/catg1.png'
  },
  {
    id: 'der-toner',
    name: 'TONIQUE HYDRATANT APAISANT',
    gamme: 'dermatologique',
    price: 2200,
    rating: 4.7,
    reviewsCount: 53,
    activeIngredients: ['Acide Hyaluronique', 'Extrait de Camomille', 'Niacinamide'],
    shortDescription: 'Rééquilibre le pH de la peau, hydrate et apaise après le nettoyage.',
    description: 'Cette lotion tonique sans alcool prépare idéalement la peau à recevoir ses soins. Elle apporte une première vague d’hydratation intense et calme les peaux sujettes aux rougeurs.',
    benefits: [
      'Rééquilibre le pH cutané',
      'Hydratation immédiate de surface',
      'Atténue les rougeurs post-nettoyage'
    ],
    education: {
      whyChosen: "L'Acide Hyaluronique repulpe l'épiderme en retenant l'eau. La Camomille et la Niacinamide calment les irritations causées par l'eau calcaire.",
      howItWorks: "Elle pénètre instantanément pour assouplir la couche cornée, permettant une meilleure pénétration des sérums appliqués par la suite.",
      whyExists: "Le calcaire présent dans l'eau de rinçage assèche et irrite la peau. Un tonique rééquilibrant est l'étape indispensable après le nettoyage."
    },
    ugcVideo: 'https://images.unsplash.com/photo-1580870058864-1596541f5a54?auto=format&fit=crop&w=400&q=80',
    routine: {
      ids: ['der-gel', 'der-cream'],
      text: "Appliquez après notre gel nettoyant purifiant et faites suivre de notre crème hydratante apaisante :"
    },
    usage: 'Matin et soir, après le nettoyage, appliquez sur l’ensemble du visage à l’aide d’un coton ou en tapotant avec les doigts.',
    ingredients: 'Aqua, Glycerin, Niacinamide, Sodium Hyaluronate, Chamomilla Recutita Flower Extract, Panthenol, Phenoxyethanol, Citric Acid.',
    sizes: ['200ml'],
    image: '/dermato_gel.png'
  },
  {
    id: 'cap-oil',
    name: 'HUILE NUTRITIVE SUBLIME',
    gamme: 'capillaire',
    price: 3200,
    rating: 4.9,
    reviewsCount: 110,
    activeIngredients: ['Huile d’Avocat', 'Huile de Jojoba', 'Vitamine E'],
    shortDescription: 'Nourrit intensément, scelle l’hydratation et apporte brillance et douceur aux longueurs.',
    description: 'Une huile capillaire légère formulée pour protéger et sublimer les cheveux secs, ternes ou abîmés. Elle protège de la chaleur et redonne douceur et brillance instantanément.',
    benefits: [
      'Protection thermique jusqu\'à 220°C',
      'Fini soyeux sans effet gras',
      'Dompte les frisottis durablement'
    ],
    education: {
      whyChosen: "L'Huile d'Avocat est hautement pénétrante et nourrit la fibre en profondeur. Le Jojoba régule et protège en imitant le sébum naturel.",
      howItWorks: "Elle scelle l'eau à l'intérieur de la fibre capillaire en formant un micro-film lipidique protecteur tout en lissant les cuticules.",
      whyExists: "Les brushings répétés et les agressions extérieures dessèchent les pointes. Il manquait un soin protecteur quotidien ultra-léger."
    },
    ugcVideo: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=400&q=80',
    routine: {
      ids: ['cap-shampoo', 'cap-mask'],
      text: "L'huile s'applique idéalement après le shampooing et le masque pour sceller définitivement la nutrition :"
    },
    usage: 'Appliquez quelques gouttes sur cheveux humides ou secs, en insistant sur les mi-longueurs et les pointes. Ne pas rincer.',
    ingredients: 'Cyclopentasiloxane, Dimethiconol, Persea Gratissima Oil, Simmondsia Chinensis Seed Oil, Tocopheryl Acetate, Fragrance.',
    sizes: ['50ml'],
    image: '/capillaire_serum.png'
  },
  {
    id: 'cap-conditioner',
    name: 'SOIN DÉMÊLANT BRILLANCE',
    gamme: 'capillaire',
    price: 1950,
    rating: 4.7,
    reviewsCount: 42,
    activeIngredients: ['Protéines de Soie', 'Aloé Vera', 'Thé Vert'],
    shortDescription: 'Démêle instantanément, lisse les écailles et apporte légèreté et brillance.',
    description: 'Cet après-shampooing démêle en douceur et apporte de la brillance aux cheveux normaux à secs sans les alourdir. Idéal pour un usage fréquent.',
    benefits: [
      'Démêlage ultra-rapide en 1 minute',
      'Cheveux légers, souples et brillants',
      'Hydrate sans alourdir la fibre'
    ],
    education: {
      whyChosen: "Les Protéines de Soie enveloppent le cheveu pour lisser sa texture. L'Aloé Vera hydrate en profondeur avec ses vitamines et nutriments.",
      howItWorks: "Il comble les micro-brèches cuticulaires instantanément pour permettre au peigne de glisser sans casser le cheveu.",
      whyExists: "Les masques profonds peuvent être trop lourds pour un usage quotidien. Nous voulions un soin express efficace après chaque lavage."
    },
    ugcVideo: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=400&q=80',
    routine: {
      ids: ['cap-shampoo', 'cap-oil'],
      text: "Complétez votre lavage quotidien avec ce soin express suivi de quelques gouttes d'huile protectrice :"
    },
    usage: 'Après le shampooing, appliquez sur cheveux essorés des mi-longueurs aux pointes. Laissez agir 1 à 2 minutes puis rincez abondamment.',
    ingredients: 'Aqua, Cetearyl Alcohol, Glycerin, Aloe Barbadensis Leaf Juice, Silk Amino Acids, Camellia Sinensis Leaf Extract, Behentrimonium Chloride, Citric Acid, Sodium Benzoate.',
    sizes: ['250ml'],
    image: '/catg2.png'
  }
];
