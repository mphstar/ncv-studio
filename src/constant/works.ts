type TypeUrl = "youtube" | "github" | "twitter" | "linkedin" | "website";

export type CategoryType = "All" | "Motion" | "Illustration" | "Music Video" | "Animation";

export type WorkType = {
  title: string;
  description: string;
  url: string;
  typeUrl: TypeUrl;
  category: CategoryType;
};


export const works: WorkType[] = [
  {
    title: "Wrong Place, wrong Time, wrong Guy || (Ncv's new year MEP)",
    description: `"MEP - Wrong Place, Wrong Time, Wrong Guy" are intended to welcome the new year! The concept of this MEP is when someone you liked prefers to go on new Year's eve with someone else.`,
    url: "https://www.youtube.com/watch?v=QBBHdOo9n2o",
    typeUrl: "youtube",
    category: "Music Video",
  },
  {
    title: "Unconditionally || (Ncv 3 Years Anniversary MEP)",
    description: ``,
    url: "https://www.youtube.com/watch?v=HSZ_p7rms50",
    typeUrl: "youtube",
    category: "Music Video",
  },
  {
    title: "Adele - Easy on Me || (Ncv 2 Years Anniversary MEP)",
    description: `10th of December 2019, is the date this fam was created. So many amazing experience that we had together. Actually the MEP should be posted at December 10th, but because of some reasons its been delayed, Hope y'all enjoy this MEP. Also we planned to more active in the future by giving y'all interesting contents especially AMV in Instagram:)`,
    url: "https://www.youtube.com/watch?v=D8VKisPNVJ0",
    typeUrl: "youtube",
    category: "Music Video",
  },
  {
    title: "Wasted Love || MEP",
    description: ``,
    url: "https://www.youtube.com/watch?v=wlJuySXpNOI",
    typeUrl: "youtube",
    category: "Music Video",
  },
  {
    title: "Heart Open || MEP",
    description: ``,
    url: "https://www.youtube.com/watch?v=KsWzC3oZqQw",
    typeUrl: "youtube",
    category: "Music Video",
  },
  {
    title: "I See Your Monsters || MEP",
    description: ``,
    url: "https://www.youtube.com/watch?v=wCPtoSgANZc",
    typeUrl: "youtube",
    category: "Music Video",
  },
  {
    title: "Immortals [MEP]",
    description: ``,
    url: "https://www.youtube.com/watch?v=xg5sQckUxyI",
    typeUrl: "youtube",
    category: "Music Video",
  },
  {
    title: "Animals || MEP",
    description: ``,
    url: "https://www.youtube.com/watch?v=ySIhxESNoaE",
    typeUrl: "youtube",
    category: "Music Video",
  },
  {
    title: "A Lost Promise || MEP",
    description: ``,
    url: "https://www.youtube.com/watch?v=VilDDxU5NjU",
    typeUrl: "youtube",
    category: "Music Video",
  },
  {
    title: "AMV Apollo || MEP",
    description: ``,
    url: "https://www.youtube.com/watch?v=6jOv75WhERw",
    typeUrl: "youtube",
    category: "Music Video",
  },
//   {
//     title: "Citlali Animation",
//     description: ``,
//     url: "https://x.com/envyyer/status/1909122614364340542",
//     typeUrl: "twitter",
//     category: "Animation",
//   },
];
