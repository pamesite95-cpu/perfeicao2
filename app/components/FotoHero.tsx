import Image from 'next/image';

export default function FotoHero() {
  return (
    <div className="flex justify-center items-center py-8">
      <Image
        src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
        alt="Foto Bijuterias"
        width={400}
        height={400}
        className="rounded-lg shadow-lg object-cover"
      />
    </div>
  );
}
