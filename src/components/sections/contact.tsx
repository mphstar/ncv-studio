import MediaNCV from "@/constant/sosial-media";

export default function ContactSection() {
  return (
    <section id="contact" className="flex flex-col md:flex-row justify-between px-4 mt-32">
      <div className="w-full">
        <div>
          <h1 className="text-5xl font-bold">Let's talk</h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            We transform concepts into creations and creations into meaning.
          </p>
        </div>
        <div className="">
          <div className="mt-4 flex space-x-6 text-gray-600 dark:text-gray-300">
            <a href={MediaNCV.youtube} target="_blank" className="hover:text-black hover:dark:text-white">
              Youtube ↗
            </a>
            <a href={MediaNCV.instagram} target="_blank" className="hover:text-black hover:dark:text-white">
              Instagram ↗
            </a>
            <a href={MediaNCV.tiktok} target="_blank" className="hover:text-black hover:dark:text-white">
              TikTok ↗
            </a>
          </div>
        </div>
      </div>
      
    </section>
  );
}
