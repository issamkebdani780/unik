import React from 'react';

const CategoryCard = ({
  bgColor,
  titleColor,
  linkHoverColor,
  title,
  description,
  imageSrc,
  imageAlt,
  borderRight = false,
}) => (
  <div
    className={`relative flex flex-row overflow-hidden ${bgColor}${borderRight ? ' border-r border-gray-200' : ''}`}
    style={{ height: '300px' }}
  >
    {/* Left: Text */}
    <div
      className="flex flex-col justify-center pl-10 pr-4 py-10 z-10 shrink-0"
      style={{ width: '42%' }}
    >
      <span
        style={{
          fontSize: '10px',
          fontWeight: 700,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: '#777',
          marginBottom: '4px',
          fontFamily: 'Outfit, sans-serif',
        }}
      >
        GAMME
      </span>
      <h2
        style={{
          fontFamily: 'Outfit, sans-serif',
          fontWeight: 900,
          textTransform: 'uppercase',
          letterSpacing: '-0.01em',
          fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)',
          color: titleColor,
          lineHeight: 1.05,
          marginBottom: '14px',
        }}
      >
        {title}
      </h2>
      <p
        style={{
          fontFamily: 'Outfit, sans-serif',
          fontSize: '12.5px',
          color: '#666',
          lineHeight: 1.65,
          marginBottom: '24px',
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
          fontFamily: 'Outfit, sans-serif',
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

    {/* Right: Products image — centered, standing from bottom */}
    <div
      className="flex-1 flex overflow-hidden"
      style={{ paddingBottom: '0px' }}
    >
      <img
        src={imageSrc}
        alt={imageAlt}
        style={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          objectPosition: 'left center',
          display: 'block',
          transition: 'transform 0.6s ease',
          margin: '0 5px 0 0'
        }}
        onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
        onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
      />
    </div>
  </div>
);

const Categories = () => {
  return (
    <section style={{ width: '100%', background: '#fff' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
        }}
      >
        <CategoryCard
          bgColor="bg-[#f0f4ea]"
          titleColor="#3a7547"
          linkHoverColor="#3a7547"
          title="CAPILLAIRE"
          description="Des soins ciblés pour stimuler la pousse, fortifier et sublimer vos cheveux jour après jour."
          imageSrc="/catg2.png"
          imageAlt="Gamme Capillaire Products"
          borderRight={true}
        />
        <CategoryCard
          bgColor="bg-[#ecf2f8]"
          titleColor="#296fc2"
          linkHoverColor="#296fc2"
          title="DERMATOLOGIQUE"
          description="Des soins dermatologiques haute efficacité pour purifier, hydrater et protéger toutes les peaux."
          imageSrc="/catg1.png"
          imageAlt="Gamme Dermatologique Products"
          borderRight={false}
        />
      </div>
    </section>
  );
};

export default Categories;
