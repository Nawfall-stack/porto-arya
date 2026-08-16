import CreatorCard from '@/components/ui/CreatorCard';

export default function CreatorsPage() {
  return (
    <div className="min-h-screen py-28">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Web Portfolio</p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">CREATORS</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-4">
          <CreatorCard
            name="M Iqbal Ramadhani"
            role="Full Stack Developer"
            image="/Iqbal.png"
            socials={{
              github: 'https://github.com/IqbalRamadani',
              instagram: 'https://www.instagram.com/iqbaal_ramadaani/',
              website: '',
            }}
          />
          <CreatorCard
            name="Farhan Syifaul U"
            role="Front End Developer"
            image="/Farhan.png"
            socials={{
              github: 'https://github.com/farhansyflu',
              instagram: 'https://www.instagram.com/farhansyflu_/',
              website: 'https://farhansyflu.github.io/Portofolio/',
            }}
          />
          <CreatorCard
            name="M Naufal Irfansyah"
            role="Front End Developer"
            image="/Naufal.png"
            socials={{
              github: 'https://github.com/Nawfall-stack',
              instagram: 'https://www.instagram.com/naw_fall9104/',
              website: 'https://nawfall.vercel.app/',
            }}
          />
        </div>
      </div>
    </div>
  );
}
