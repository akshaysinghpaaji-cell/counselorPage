const GradientOrbs = () => {
  return (
    <>
      {/* Top Right Purple/Pink Orb */}
      <div 
        className="absolute -top-32 -right-32 w-80 h-80 rounded-full opacity-80"
        style={{ background: 'var(--orb-1)', filter: 'blur(60px)' }}
      />
      
      {/* Middle Right Blue/Teal Orb */}
      <div 
        className="absolute top-1/3 -right-24 w-64 h-64 rounded-full opacity-75"
        style={{ background: 'var(--orb-2)', filter: 'blur(50px)' }}
      />
      
      {/* Bottom Right Yellow/Orange Orb */}
      <div 
        className="absolute bottom-20 -right-20 w-56 h-56 rounded-full opacity-70"
        style={{ background: 'var(--orb-3)', filter: 'blur(45px)' }}
      />
      
      {/* Bottom Left Purple/Pink Orb */}
      <div 
        className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-70"
        style={{ background: 'var(--orb-4)', filter: 'blur(70px)' }}
      />
    </>
  );
};

export default GradientOrbs;