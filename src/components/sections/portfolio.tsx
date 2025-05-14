"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

const categories = [
  "All",
  "Motion",
  "Illustration",
  "Music Video",
  "Animation",
];
import { works } from "@/constant/works";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { TwitterTweetEmbed } from "react-twitter-embed";

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredWorks =
    selectedCategory === "All"
      ? works
      : works.filter((work) => work.category === selectedCategory);

  const extractVideoId = (url: string) => {
    try {
      const parsed = new URL(url);
      if (parsed.hostname === "youtu.be") {
        return parsed.pathname.slice(1); // youtu.be/VIDEO_ID
      } else if (parsed.searchParams.get("v")) {
        return parsed.searchParams.get("v"); // youtube.com/watch?v=VIDEO_ID
      } else if (url.includes("embed/")) {
        return url.split("embed/")[1]?.split("?")[0];
      }
    } catch (e) {
      return null;
    }
  };

  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  return (
    <section id="portfolio" className="px-4">
      <h1 className="text-4xl font-bold mb-6">Works</h1>
      <div className="flex space-x-2 mb-6 overflow-x-auto">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg whitespace-nowrap ${
              selectedCategory === category
                ? "bg-black text-white dark:bg-white dark:text-black"
                : ""
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <motion.div
        layout
        className="grid grid-cols-2 md:grid-cols-3 gap-5 w-full"
      >
        <AnimatePresence>
          {filteredWorks.map((work, index) => {
            const videoId = extractVideoId(work.url);

            return (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <motion.div
                    layout
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative group overflow-hidden rounded-lg shadow-md aspect-video cursor-pointer"
                    onClick={() => setActiveVideoId(videoId || "")}
                  >
                    {work.typeUrl === "youtube" && (
                      <LiteYouTubeEmbed
                        id={videoId || ""}
                        title={work.title}
                        poster="hqdefault"
                        webp
                        noCookie
                      />
                    )}

                    {work.typeUrl === "twitter" && (
                      <div className="w-full flex justify-center">
                        <TwitterTweetEmbed tweetId={"1909122614364340542"} />
                      </div>
                    )}

                    <div className="absolute inset-0 bg-black/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 rounded-lg">
                      <span className="text-white font-medium">
                        {work.title}
                      </span>
                      <ArrowUpRight className="text-white w-6 h-6 self-end" />
                    </div>
                  </motion.div>
                </DialogTrigger>

                <DialogContent className=" max-h-[90%] h-fit">
                  <DialogHeader>
                    <DialogTitle>{work.title}</DialogTitle>
                  </DialogHeader>
                  {activeVideoId && work.typeUrl === "youtube" && (
                    <iframe
                      src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1`}
                      title="YouTube video"
                      className="w-full h-[400px] rounded-md"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  )}

                  {work.typeUrl === "twitter" && (
                    <div className="w-full flex h-full justify-center">
                      <TwitterTweetEmbed tweetId={"1909122614364340542"} />
                    </div>
                  )}
                </DialogContent>
              </Dialog>
            );
          })}
          {filteredWorks.length === 0 && (
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="col-span-full text-center text-black text-lg py-3 mt-5 dark:text-white"
            >
              No works available in this category.
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
