import { Statistics } from "./Statistics";
import pilot from "../assets/pilot.png"; // Anda bisa mengganti gambar ini dengan ilustrasi coding/laptop

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt="Web Development Illustration"
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  Tentang{" "}
                </span>
                Layanan Kami
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                Kami adalah mitra strategis dalam **transformasi digital** bisnis Anda. 
                Bukan sekadar membuat kode, kami menghadirkan solusi web yang 
                **responsif, cepat, dan SEO-friendly** untuk membantu Anda 
                menjangkau pasar yang lebih luas.
              </p>
              <p className="text-muted-foreground mt-4">
                Fokus utama kami adalah menggabungkan estetika desain dengan performa 
                teknis yang handal. Mulai dari Landing Page hingga E-commerce, kami 
                siap mewujudkan visi digital Anda menjadi kenyataan.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};