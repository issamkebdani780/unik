import React from 'react';

const CategoryCard = ({
  bgColor,
  titleColor,
  linkHoverColor,
  title,
  description,
  imageSrc,
  imageAlt,
}) => (
  <div className={`relative flex flex-col sm:flex-row overflow-hidden ${bgColor} min-h-[280px] sm:h-[380px]`}>
    {/* Text */}
    <div className="flex flex-col justify-center px-6 sm:pl-8 lg:pl-10 sm:pr-4 pt-8 pb-6 sm:py-10 z-10 sm:w-[34%] shrink-0">
      <span
        style={{
          fontSize: '10px',
          fontWeight: 700,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: '#777',
          marginBottom: '4px',
        }}
      >
        GAMME
      </span>
      <h2
        style={{
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '-0.01em',
          fontSize: 'clamp(1.3rem, 2.5vw, 2.1rem)',
          color: titleColor,
          lineHeight: 1.05,
          marginBottom: '12px',
        }}
      >
        {title}
      </h2>
      <p
        style={{
          fontSize: '12.5px',
          color: '#666',
          lineHeight: 1.65,
          marginBottom: '20px',
          maxWidth: '200px',
          fontWeight: 400,
        }}
      >
        {description}
      </p>
      <a
        href="#"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '11px',
          fontWeight: 700,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: '#111',
          borderBottom: '1.5px solid #111',
          paddingBottom: '2px',
          width: 'fit-content',
          textDecoration: 'none',
          transition: 'color 0.25s, border-color 0.25s',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.color = linkHoverColor;
          e.currentTarget.style.borderColor = linkHoverColor;
        }}
        onMouseLeave={e => {
          e.currentTarget.style.color = '#111';
          e.currentTarget.style.borderColor = '#111';
        }}
      >
        DÉCOUVRIR <span style={{ fontSize: '14px', fontWeight: 300 }}>→</span>
      </a>
    </div>

    {/* Image */}
    <div className="flex-1 overflow-hidden h-48 sm:h-full">
      <img
        src={imageSrc}
        alt={imageAlt}
        style={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          display: 'block',
          transition: 'transform 0.6s ease',
        }}
        onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
        onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
      />
    </div>
  </div>
);

const Categories = () => {
  return (
    <section className="w-full bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
        <CategoryCard
          bgColor="bg-[#f0f4ea]"
          titleColor="#3a7547"
          linkHoverColor="#3a7547"
          title="CAPILLAIRE"
          description="Des soins ciblés pour stimuler la pousse, fortifier et sublimer vos cheveux jour après jour."
          imageSrc="/catg2.png"
          imageAlt="Gamme Capillaire Products"
        />
        <CategoryCard
          bgColor="bg-[#ecf2f8]"
          titleColor="#296fc2"
          linkHoverColor="#296fc2"
          title="DERMATOLOGIQUE"
          description="Des soins dermatologiques haute efficacité pour purifier, hydrater et protéger toutes les peaux."
          imageSrc="/catg1.png"
          imageAlt="Gamme Dermatologique Products"
        />
      </div>
    </section>
  );
};

export default Categories;
